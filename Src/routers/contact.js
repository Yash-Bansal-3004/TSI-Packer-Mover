const express=require("express");
const  router=new express.Router();
const ContSend=require("../models/contact");




router.post("/contact",async(req,res)=>{
    try {
        //         console.log(req.body.username)
        // res.send(req.body.username)
        const registerCont=new ContSend({
            username:req.body.username,
            email:req.body.email,
            phone:req.body.phone,
            message:req.body.message

        })
      await registerCont.save();
      res.status(201).render("index");
        
        
    } catch (error) {
        res.send(error)
    }
})

module.exports=router;
