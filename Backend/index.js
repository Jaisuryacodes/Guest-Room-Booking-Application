const express = require('express');
const mongoose = require("mongoose");
const bcrypt=require('bcrypt');
const  jwt =require('jsonwebtoken');
const User =require('./models/User.js');
const Place=require('./models/Place.js');
const cors =require('cors');
const imageDownloader = require('image-downloader');
const multer = require('multer');  
 const fs =require('fs');
const cookieParser = require('cookie-parser');
require('dotenv').config()
const app =express(); 
 
const bcryptSalt=bcrypt.genSaltSync(10);
const jwtsecret ="njiokm0985vgyxdrtfc54321qazxsw"
app.use(express.json());
app.use(cookieParser());
app.use('/uploads',express.static(__dirname+'/uploads/'));
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}))
console.log(process.env.mongooseUrl)
mongoose.connect(process.env.mongooseUrl)
app.post('/Signup',async (req,res)=>{
  const {name,email,mobile,Type,password} = req.body;
  const userDoc= await User.findOne({email})
  if(userDoc){
    res.status(200).json({
      msg:"Email already exists",
    });
    
   }
   else{
    const userdoc= await User.create({
      name,
      email,
      mobile,
      Type,
      password :bcrypt.hashSync(password,bcryptSalt),
      
   });
 res.json({
   msg:"Registed successful",
  
 })   
   }
  


});
app.post('/Login',async(req,res)=>{
    const {email, password} = req.body;
  const userdoc= await User.findOne({email})
  if(!userdoc){ 
    res.json({
    msg:"User not Found",});
  return;}
  const PasswordCorrect = bcrypt.compareSync(password,userdoc.password);
  if( !PasswordCorrect){
    res.status(200).json({
            msg:"Incorrect Password",
          });
          return;
  }

   
      jwt.sign({email:userdoc.email,id:userdoc._id},jwtsecret,{},(err,token)=>{
        if(err) throw err;
        
        res.cookie('token',token).json({
          msg:"Login successful",
            name:userdoc.name,
            Type:userdoc.Type,});
      })
})

app.get('/Profile',(req,res)=>{
   const {token}=req.cookies;
   if(token){
    jwt.verify(token,jwtsecret,{},async(err,userData)=>{
      if(err) throw err;
      const {name,email,_id}=await User.findById(userData.id);
       res.json({
        name,
        email,
        _id,
       });
    });
   }
   else{
    res.json(null)
   }
  
});
app.post('/logout',(req,res)=>{
  res.cookie('token','').json(true);
})
 console.log({__dirname})
app.post('/uploadsByLink', async(req,res)=>{
  const {link}=req.body;
  const newName= 'photo'+ Date.now()+'.jpg' 
 await imageDownloader.image({
  url:link,
  dest:__dirname +'/uploads/'+newName,
 })
 res.json(newName)
})
 
const photosMiddleware =multer({ dest:'uploads/'});
app.post('/upload',photosMiddleware.array('photo',100), async(req,res)=>{
  const uploadedFiles=[];
  for(let i=0;i<req.files.length;i++)
{
  const {path,originalname}= req.files[i];
 const part= originalname.split('.');
 const ext= part[part.length-1];
 const newPath=path +'.'+ext;
    fs.renameSync(path,newPath);
    uploadedFiles.push(newPath.replace('uploads\\',''));
} 
  res.json(uploadedFiles);
})
app.post('/place',(req, res) => {
  const {title,address,Photos,description,perks,maxGuest,contactInfo,price,bets,rooms,MinimumDays,MaximumDays,}=req.body;
  const {token}=req.cookies;
  jwt.verify(token,jwtsecret,{},async(err,userData)=>{
    if(err) throw err;
  const PlaceDoc= await Place.create({
      owner: userData.id,
      title,
      address,
      Photos,
      description,
      perks,
      maxGuest,
      contactInfo,
      price,
      bets,
      rooms,
      MinimumDays,
      MaximumDays,
    });
    res.json(PlaceDoc);
    
  });
 
})

app.get('/places',async(req,res)=>{
  const {token}=req.cookies;
   
  if(token){
    jwt.verify(token,jwtsecret,{},async(err,userData)=>{
      if(err) throw err;
      const places= await Place.find({owner:userData.id});
      res.json(places);
    }); 
  }
  else{
    
    res.json(null);
  }
});
app.get('/allPlace',async(req,res)=>{
  const allPlace = await Place.find({});
  res.json(allPlace);
})
app.get('/places/:id',async(req, res)=>{
  const {id}=req.params;
  res.json(await Place.findById(id));
 
});
  app.put('/place',async(req, res)=>{
    const {id,title,address,Photos,description,perks,maxGuest,contactInfo,price,bets,rooms,MinimumDays,MaximumDays,}=req.body;  
    const {token}=req.cookies;

 jwt.verify(token,jwtsecret,{},async(err,userData)=>{
  const placeDoc=await Place.findById(id);
  if(userData.id === placeDoc.owner.toString()){
     placeDoc.set({
      title,
      address,
      Photos,
      description,
      perks,
      maxGuest,
      contactInfo, 
      price,
      bets,
      rooms,
      MinimumDays,
      MaximumDays,   
     });
  await  placeDoc.save();
    res.json('ok');
  }
 })
  })
app.listen(4000);
 