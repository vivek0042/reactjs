const mongoose = require("mongoose");
// mongoose.set('strictQuery',true)


mongoose.connect("mongodb://localhost:27017/students-api",{
    
    useNewUrlParser:true,
    
      
}).then(()=>{
    console.log("connection is successful");

}).catch((e)=>{
    console.log("no connection established");

})