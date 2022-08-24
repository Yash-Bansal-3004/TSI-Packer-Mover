const express=require("express");
const mongoose=require("mongoose");
const ContactSchema=new mongoose.Schema({
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
    message:{
        type:String,
        required:true
    }
});
// we need to create a collection
const Contact =new mongoose.model("Contact",ContactSchema)
module.exports=Contact;
