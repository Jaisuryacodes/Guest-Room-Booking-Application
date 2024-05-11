const mongoose = require('mongoose');
const placeSchema=new mongoose.Schema(
    {
       owner:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
       title:String,
       address:String,
       photos:[String],
       description:String,
       perks:[String],
       contactInfo:String,
       maxGuest:Number,
       price:Number,    
       checkIn:String,
       checkOut:String,
     
});

const PlaceModel= mongoose.model('Place',placeSchema);
module.exports=PlaceModel;