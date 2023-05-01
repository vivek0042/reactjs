const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/vivekform").then(()=>{
    console.log("connection successfully");
}).catch((e)=>{
    console.log("connection not form")
})  