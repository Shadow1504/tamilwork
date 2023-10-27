const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
app.use(express.static('images'))

mongoose.connect('mongodb+srv://3:3@cluster0.cgosxpv.mongodb.net/databasename');


app.use(bodyparser.urlencoded({extended:true}));

app.set("view engine","ejs");
app.use("/",require("./server/route/router"));


app.listen (10000,()=>console.log("connected"));