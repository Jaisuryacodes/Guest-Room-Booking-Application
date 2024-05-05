const express = require('express');
const mongoose = require("mongoose");
const bcrypt=require('bcrypt');
const User =require('./models/User.js');
const cors= require('cors');
require('dotenv').config()
const app =express();
const bcryptSalt=bcrypt.genSaltSync(10);
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}))
console.log(process.env.mongooseUrl)
mongoose.connect(process.env.mongooseUrl)
app.post('/Signup',async (req,res)=>{
 const {name,email,mobile,address,password} = req.body;
  const userdoc= await User.create({
    name,
    email,
    mobile,
    address,
    password :bcrypt.hashSync(password,bcryptSalt),
 });
    res.json(userdoc);

});
app.post('/Login',async(req,res)=>{
    const {email, password} = req.body;
  const userdoc= await User.findOne({email})
  if(userdoc){
   
    const PasswordCorrect = bcrypt.compareSync(password,userdoc.password);
    if(PasswordCorrect){
      res.json('Password Correct');
     }else{
        res.status(200).json('Password Not Correct');
     } }
  else{
    res.json('Not Found');
  }
})

app.listen(4000);
