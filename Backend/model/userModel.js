const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true,
        unique:true,

    },
    password:{
        type:String,
        required:true

    },
    profilePic:{
        type:String

    }

},{
    timestamps:true
});

module.exports = mongoose.model("user",userSchema);