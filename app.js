const express = require("express");
const app = express();
const mongoose = require("mongoose");

const model = require("./model/user");

mongoose.connect('mongodb+srv://admin:admin@cluster0.5v8vbhu.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
}).then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log(err);
});
