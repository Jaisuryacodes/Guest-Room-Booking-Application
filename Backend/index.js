const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors= require('cors')
const app =express()

app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}))
// console.log(process.env)
mongoose.connect(process.env.mongooseUrl)
app.post('/Signup',(req,res)=>{
    res.json("test ok");
    console.log("test ok");
    const {name,email,mobile,address,password} = req.body;
})


app.listen(4000);
