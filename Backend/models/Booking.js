const mongoose =require('mongoose');
    const bookingSchema=new mongoose.Schema({
       place:{type:mongoose.Schema.Types.ObjectId,ref:'Place'},
       user:{type:mongoose.Schema.Types.ObjectId,},
       owner:{type:mongoose.Schema.Types.ObjectId,},
       name:{type:String},
       email:{
        type:String,
       },
       phone:{
        type:String,
       },
       address:{
        type:String,
       },
       fromdate:{
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