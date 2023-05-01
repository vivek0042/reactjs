const express = require("express");
const app = express();
const path = require("path");

// const fs = require("fs");
// const app = express();
const hbs=require("hbs");
const bodyparser = require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/new',{useNewUrlParser: true});
const port = 400;

//moongose schema
const contactSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    fname: String,
    r: Number,
    mname: String,

    
  });

const Contact =new mongoose.model('test1', contactSchema);




app.set('view engine', 'hbs') 
// const staticpath=path.join(__dirname,"views"); 
app.set('views', path.join(__dirname, 'views')) 
 

app.get("",(req,res)=>{
    res.render("index.hbs");
})
app.post("/test1", (req, res)=>{
    const myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("this item is saved")
    }).catch(()=>{
        res.status(400).send("item was not found")
    });
   
    res.status(200).render('index.hbs');

})



// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});

