const express=require("express");
const app = express();
const path=require('path');
handlebars = require('handlebars');
const hbs=require('hbs');
// var hbs = require('express-handlebars');

const port=8000;


const staticpath=path.join(__dirname,"../expressbythapa/views"); //1
const partalspath=path.join(__dirname,"../expressbythapa/partials");
// now here we server file.
// app.use(express.static(staticpath));      //this is for static file//1
// console.log(staticpath);

app.set("view engine",'hbs');
hbs.registerPartials(partalspath);

// templete engine render using pug
app.get("",(req,res)=>{
    res.render("index");
})
app.get("/",(req,res)=>{
    res.send("hi! kaba kaisne");
});
app.get("/about",(req,res)=>{
    res.send("hello world from about page");
});
app.get("*",(req,res)=>{
    res.render("404",{
        errorcomment:"oops error not found"
    });
});


// send json data
app.get("/temp",(req,res)=>{
    res.send({
        id:0042,
        name:"vivekjain"
    });
})
app.listen(port,()=>{
    console.log(`your port number is ${port}`);
}
)
