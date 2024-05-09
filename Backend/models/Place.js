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
       maxGuest:number,
       price:number,    
});

const UserSchema= mongoose.model('Place',placeSchema);
module.exports=PlaceModel;