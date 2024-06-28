const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
    name:{
        type: String,
        },
    email:{
        type: String,
    },
    phone:{
        type:String,
        required:true
    }
});

const SignUp = mongoose.model("SignUp",signupSchema);
module.exports = SignUp;