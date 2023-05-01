const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/olympics").then(()=>{
    console.log("connection successfully");
}).catch((e)=>{
    console.log("no connection");
})