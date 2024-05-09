const express = require('express');
const mongoose = require("mongoose");
const bcrypt=require('bcrypt');
const  jwt =require('jsonwebtoken');
const User =require('./models/User.js');
const CookieParser = require('cookie-parser');
const cors =require('cors');
const imageDownloader = require('image-downloader');
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
app.listen(4000);
