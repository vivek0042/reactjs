const express = require("express");
const path = require('path');

const app = express();
port = 830;

// app.get("/",(req,res)=>{
//     res.end("this is my first node js application");

// });

//  set templete engine for pug.

app.set('view engine','pug')

// set the view directory

app.set('views',path.join(__dirname,'views'))   //view is folder name


// our pug demo endpoints.

app.get("/demo",(req,res)=>{
    res.status(200).render('demo',{title:'Hey Vivek',message:"hi what are you doing my friend ."})
});



app.use('/static',express.static('static'));

app.get("/",(req,res)=>{
    res.end("This is  about my  application");

});


app.post("/about",(req,res)=>{
    res.end("This is my first post request");

});

app.listen(port,()=>{
    console.log(`hello gentelman this server running  on port ${port}`);
});

