const mongoose = require('mongoose');
const placeSchema=new mongoose.Schema(
    {
       owner:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
       title:String,
       address:String,
       Photos:[String],
       description:String,
       perks:[String],
       maxGuest:Number,
       contactInfo:String,
       price:Number,  
       bets:Number,
       rooms:Number,  
       MinimumDays:Number,
       MaximumDays:Number,
     
});

const PlaceModel= mongoose.model('Place',placeSchema);
module.exports=PlaceModel;