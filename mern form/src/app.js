const express = require("express");
const app = express();
const path=require("path");
const hbs=require("hbs");
const port=process.env.PORT || 3000;
require("../src/db/conn"); 

const static_path=path.join(__dirname,("../public"));
console.log(static_path);
const template_path=path.join(__dirname,"../template/views");
console.log(template_path);
// const partial_path=path.join(__dirname,"../template/partials");
app.use(express.static(static_path));
app.set("view engine","hbs");     //set hbs as handlebar.
app.set("views",template_path);
// hbs.registerPartial(partial_path);
// console.log(path.join(__dirname,("../public")))

app.get("/",(req,res)=>{
    res.render("index");
});

app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})