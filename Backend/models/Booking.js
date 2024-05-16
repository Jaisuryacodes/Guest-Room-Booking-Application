const mongoose =require('mongoose');
    const bookingSchema=new mongoose.Schema({
       place:{type:String},
       email:{
        type:String,
       },
       phone:{
        type:String,
       },
       address:{
        type:String,
       },
       formdata:{
        type:String,
       },
       todate:{
        type:String,
       },
       noofdays:{
        type:String,
       },
       prices:{
        type:Number,
       },
       idProof:{
        type:String,
       },
    })
    const BookingModel= mongoose.model('Booking',bookingSchema);
    module.exports=BookingModel;