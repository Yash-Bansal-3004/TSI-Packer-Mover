const express=require("express");
const mongoose=require("mongoose");
const messageSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
       type: String,
       required:true,
       unique:true

    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    movefrom:{
        type:String,
        required:true

    },
    moveto:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
});
// we need to create a collection
const Message =new mongoose.model("Message",messageSchema)
module.exports=Message;