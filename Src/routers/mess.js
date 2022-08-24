const { request } = require("express");
const express=require("express");
const  router=new express.Router();
const MessSend=require("../models/mess");
const {json}=require("express")
// router.use(express.json());
// router.use(express.urlencoded({extended:false}));

router.post("/mess",async(req,res)=>{
    try {
        //         console.log(req.body.username)
        // res.send(req.body.username)
        const registerMess=new MessSend({
            username:req.body.username,
            email:req.body.email,
            phone:req.body.phone,
            movefrom:req.body.movefrom,
            moveto:req.body.moveto, 
            message:req.body.message

        })
      await registerMess.save();
      res.status(201).render("index");
        
        
    } catch (error) {
        res.send(error)
    }
})

module.exports=router;