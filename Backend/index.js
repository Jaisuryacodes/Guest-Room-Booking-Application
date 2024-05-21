// Required Libraries
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./models/User.js");
const Place = require("./models/Place.js");
const Booking = require("./models/Booking.js");
const cors = require("cors");
const imageDownloader = require("image-downloader");
const multer = require("multer");
const fs = require("fs");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtsecret = "njiokm0985vgyxdrtfc54321qazxsw";
app.use(express.json()); 
app.use(cookieParser()); 
 
// to check if the user is valid or not
function getuserDataFromReq(req) {
  return new Promise((resolve, reject) => {
    jwt.verify(req.cookies.token, jwtsecret, {}, async (err, userData) => {
      if (err) throw err;
      resolve(userData);
    });
  });
}
// to download the photos by using image URL..
app.use("/uploads", express.static(__dirname + "/uploads/"));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

  try
  {
    mongoose.connect(process.env.mongooseUrl);
    console.log("Connected to Database")
  } 
catch (err){
  console.log("Failed to connect Database");
  res.status(500).json("Please check internet connection")
}
//  to create new User account
app.post("/Signup", async (req, res) => {
 try{
   const { name, email, mobile, Type, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    res.status(200).json({
      msg: "Email already exists",
    });
  } else {
    const userdoc = await User.create({
      name,
      email,
      mobile,
      Type,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json({
      msg: "Registed successful",
    });
  }}
  catch(err){
    res.status(500).json("Please check internet connection");
  }
});
// to check  User is valid  if not valid it return respected response
app.post("/Login", async (req, res) => {
  try {
     const { email, password } = req.body;
     const userdoc = await User.findOne({ email });
     if (!userdoc) {
       res.json({
         msg: "User not Found",
       });
       return;
     }
     const PasswordCorrect = bcrypt.compareSync(password, userdoc.password);
     if (!PasswordCorrect) {
       res.status(200).json({
         msg: "Incorrect Password",
       });
       return;
     }

     jwt.sign(
       { email: userdoc.email, id: userdoc._id },
       jwtsecret,
       {},
       (err, token) => {
         if (err) throw err;

         res.cookie("token", token).json({
           msg: "Login successful",
           name: userdoc.name,
           Type: userdoc.Type,
         });
       }
     );
  } catch (err) {
    res.status(500).json("Please check internet connection");
  }
});
// this endpoint is used to display the User account details

app.get("/Profile", (req, res) => {
   try {
    const { token } = req.cookies;
    if (token) {
      jwt.verify(token, jwtsecret, {}, async (err, userData) => {
        if (err) throw err;
        const { name, email, _id, Type } = await User.findById(userData.id);
        res.json({
          name,
          email,
          _id,
          Type,
        });
      });
    } else {
      res.json(null);
    }
   } catch (err) {
     res.status(500).json("Please check internet connection");
   }
});
//  used to remove the token for Logined users and logout the account in the browser
app.post("/logout", (req, res) => {
 try {
    res.cookie("token", "").json(true);

 } catch (err) {
   res.status(500).json("Please check internet connection");
 }
});

// it is used to upload the photos by using URL for the each place by houseOwner Login
app.post("/uploadsByLink", async (req, res) => {
  try {
     const { link } = req.body;
     const newName = "photo" + Date.now() + ".jpg";
     await imageDownloader.image({
       url: link,
       dest: __dirname + "/uploads/" + newName,
     });
     res.json(newName);
  } catch (err) {
    res.status(500).json("Please check internet connection");
  }
});
// directory to save the photos
const photosMiddleware = multer({ dest: "uploads/" });
// it is used to upload the photos for the each place by houseOwner Login
app.post("/upload", photosMiddleware.array("photo", 100), async (req, res) => {
  try {
     const uploadedFiles = [];
     for (let i = 0; i < req.files.length; i++) {
       const { path, originalname } = req.files[i];
       const part = originalname.split(".");
       const ext = part[part.length - 1];
       const newPath = path + "." + ext;
       fs.renameSync(path, newPath);
       uploadedFiles.push(newPath.replace("uploads\\", ""));
     }
     res.json(uploadedFiles);
  } catch (err) {
    res.status(500).json("Please check internet connection");
  }
});
// to create new place by houseOwner login and added in database
app.post("/place", (req, res) => {
   try {
    const {
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
    } = req.body;
    const { token } = req.cookies;
    jwt.verify(token, jwtsecret, {}, async (err, userData) => {
      if (err) throw err;
      const PlaceDoc = await Place.create({
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
   } catch (err) {
     res.status(500).json("Please check internet connection");
   }
});
// used to display added place/rooms in the houseOwner Login
app.get("/places", async (req, res) => {
  try {
     const { token } = req.cookies;
     if (token) {
       jwt.verify(token, jwtsecret, {}, async (err, userData) => {
         if (err) throw err;
         const places = await Place.find({ owner: userData.id });
         res.json(places);
       });
     } else {
       res.json(null);
     }
  } catch (err) {
    res.status(500).json("Please check internet connection");
  }
});
// this endpoint is used to show all room & place from the database
app.get("/allPlace", async (req, res) => {
   try {
    const allPlace = await Place.find({});
    if (allPlace.length) {
      res.json(allPlace);
    } else {
      res.json(null);
    }
   } catch (err) {
     res.status(500).json("Please check internet connection");
   }
});
// This Endpoint is used to response all data and display the details for requested Place 
app.get("/places/:id", async (req, res) => {
 try {
    const { id } = req.params;
    res.json(await Place.findById(id));
 } catch (err) {
   res.status(500).json("Please check internet connection");
 }
});
// it is used to check the availability of dates for requested places
app.get("/availability/:id", async (req, res) => {
   try {
    const { id } = req.params;
    res.json(await Booking.find({ place: id }));
   } catch (err) {
     res.status(500).json("Please check internet connection");
   }
  
});
// this endpoint is used to edit the details in existed place by the houseOwner login
app.put("/place", async (req, res) => {
 try{
   const {
    id,
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
  } = req.body;
  const { token } = req.cookies;

  jwt.verify(token, jwtsecret, {}, async (err, userData) => {
    const placeDoc = await Place.findById(id);
    if (userData.id === placeDoc.owner.toString()) {
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
      await placeDoc.save();
      res.json("ok");
    }
  });
 } catch (err) {
  res.status(500).json("Please check internet connection");
 }
});
// it is used to delete the place in the database
app.delete("/deletePlace/:id", (req, res) => {
 try{ 
  const { id } = req.params;
 const { token } = req.cookies;
 jwt.verify(token, jwtsecret, {}, async (err, userData) => {
   const placeDoc = await Place.findById(id);
   if (userData.id === placeDoc.owner.toString()) {
     const Photos = placeDoc.Photos;
     for (let i = 0; i < Photos.length; i++) {
       fs.unlinkSync(__dirname + "/uploads/" + Photos[i]);
     }
     await Place.findByIdAndDelete(id);
     res.json("ok");
   }
 });}catch(err){
  res.status(500).json("Please check internet connection");
 }
});
//  used to store the booking information in the database
app.post("/bookings", async (req, res) => {
   try {
    const userData = await getuserDataFromReq(req);
    const {
      owner,
      place,
      email,
      phone,
      address,
      fromdate,
      todate,
      noofdays,
      prices,
      idProof,
    } = req.body;
    await Booking.create({
      place,
      user: userData.id,
      owner,
      email,
      phone,
      address,
      fromdate,
      todate,
      noofdays,
      prices,
      idProof,
    })
      .then((resDoc) => {
        res.json(resDoc);
      })
      .catch((err) => {
        throw err;
      });
   } catch (err) {
     res.status(500).json("Please check internet connection");
   }
});
// this endpoint is used to show the booking details in the customer Login
app.get("/bookings", async (req, res) => {
   try {
    const userData = await getuserDataFromReq(req);
    res.json(await Booking.find({ user: userData.id }).populate("place"));
   } catch (err) {
     res.status(500).json("Please check internet connection");
   }
});
// booking endpoint for HouseOwner Section
app.get("/bookingsReq", async (req, res) => {
  try {
     const userData = await getuserDataFromReq(req);
     res.json(await Booking.find({ owner: userData.id }).populate("place"));
  } catch (err) {
    res.status(500).json("Please check internet connection");
  }
});
// endpoint is used to delete the bookings  by both customer and houseOwner Login section
app.delete("/deletebooking/:id", async (req, res) => {
  try {
     const { id } = req.params;
     const { token } = req.cookies;
     jwt.verify(token, jwtsecret, {}, async (err, userData) => {
       const BookingDoc = await Booking.findById(id);
       if (userData.id === BookingDoc.owner.toString());
       {
         await Booking.findByIdAndDelete(id);
         res.json("ok");
       }
     });
  } catch (err) {
    res.status(500).json("Please check internet connection");
  }
});
// listening port number :4000
app.listen(4000);
