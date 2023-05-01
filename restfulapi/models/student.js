const mongoose =require("mongoose");
const validator=require("validator");

const studentschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },  
    email:{
        type:String,
        required:true,
        unique:[true,"email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new error("Invalid Email ")
            }
        }
    },
    phone:{
        type:Number,
        // min:10,
        // max:10,
        required:true,
        // unique:true,
    },
    address:{
        type:String,
        requird:true,
        
    }
    

})

// we will create new model.
const student=new mongoose.model("student",studentschema);
module.exports=student;
