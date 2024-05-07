const express = require('express');
const mongoose = require("mongoose");
const bcrypt=require('bcrypt');
const  jwt =require('jsonwebtoken');
const User =require('./models/User.js');
const cors =require('cors');
require('dotenv').config()
const app =express();
const bcryptSalt=bcrypt.genSaltSync(10);
const jwtsecret ="njiokm0985vgyxdrtfc54321qazxsw"
app.use(express.json());
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
    msg:"login failed",});
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

app.listen(4000);
