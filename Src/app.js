const express=require("express");
const path=require("path");
const app=express();
const hbs=require("hbs");
const bodyParser=require("body-parser");

require("./db/conn");
const messSend=require("./models/mess");
const contSend=require("./models/contact")

const router=require("./routers/mess")
const router2=require("./routers/contact")

const {json}=require('express');

const port=process.env.PORT ||8080;

const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");

// app.use(express.json());
// app.use(express.urlencoded({extended:false}));

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
   extended:false

}));

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/mess",(req,res)=>{
    res.render("mess");
})
app.get("/contact",(req,res)=>{
    res.render("contact");
})
app.get("/about",(req,res)=>{
    res.render('about');
})
app.get("/gallery",(req,res)=>{
    res.render('gallery');
})
app.get("/car_transportaion",(req,res)=>{
    res.render('car_transportaion');
})
app.get("/door_to_door",(req,res)=>{
    res.render('door_to_door');
})
app.get("/office_shiftng",(req,res)=>{
    res.render('office_shiftng');
})
app.get("/warehouse_shifting",(req,res)=>{
    res.render('warehouse_shifting');
})
app.get("/commercial",(req,res)=>{
    res.render('commercial');
})
app.get("/loading_uploading",(req,res)=>{
    res.render('loading_uploading');
})
app.get("/enquiry",(req,res)=>{
    res.render('enquiry')
})
app.use(router);
app.use(router2);
app.listen(port,(e)=>{
    console.log(`Our app is live on port no. ${port}`)
})