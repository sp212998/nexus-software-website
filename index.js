const express=require('express');
const path=require('path');
const mongoose=require('mongoose');
const collection=require("./config");
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs');
app.use(express.static("public"))
app.use(express.static("images"))

app.get("/",(req,res)=>{
res.render("start")
})

app.get("/start",(req,res)=>{
    res.render("start")
    })

    app.get("/home",(req,res)=>{
        res.render("home",{ message:null})
        })

app.post("/home", async(req,res)=>{
    const data=[{
        userName:req.body.userName,
         feedBack:req.body.feedBack
    }];
    const userData=await collection.insertMany(data);
    res.render("home", { message: "Your FeedBack has been recorded !!!" });
    console.log(userData);
});
app.listen(3000);


