const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true,

    },
    color:{
        type : String,
        enum : ["green","blue","white","black"],
        required: true,
    },
   ram:{
    type : Number,
    
   },
   storage:{
    type : Number,
   
   },
   isLaunched:{
    type : Boolean,
    default :false,
   }
    
})

const Mobiles = mongoose.model("Mobiles",mobileSchema);
module.exports = Mobiles;