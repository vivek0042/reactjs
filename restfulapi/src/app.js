const express= require("express")
const app=express()
require("./db/conn")
const student=require("../models/student.js")
const port=process.env.PORT || 1000;
// this is just for the solve error 
var problemMiddleware = function(request, response, next) {
    response.setHeader("Content-Type", "text/html");
    response.write("<p>Hello World</p>");
    next();
  };
  
app.use(express.json());

// create a new api
// app.post("/students",(req,res)=>{
//     // res.send("hello from the other side.")
//     console.log(req.body);
//     const user=new student(req.body);

//     user.save().then(()=>{
//         res.status(201).send(user)
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })
// })





// we can also use router for the single and simple gateway.
// step 1: create router.
const router = new express.Router();

// step 2:we need to define router.
router.get("/vivek",(req,res)=>{
    res.send("hello I'm vivek");
})

// step 3: we need to register router.
app.use(router);



app.post("/students",async(req,res)=>{

    try{
        const user=new student(req.body);
        const createUser=await user.save();
        res.status(201).send(createUser);


    }catch(e){
        res.status(400).send(e);

    }
    
    



})

app.get("/students",async(req,res)=>{
    try{
        const studentdata=await student.find();
        res.status(201).send(studentdata);

    }
    catch{
        res.send(e);
    }

})

// particular user.
app.get("/students/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const studentdata1=await student.findById(_id);
        console.log(studentdata1);

        if(!studentdata1){
            return res.status(404).send();
        }
        else{
        res.status(303).send(studentdata1);
        }
    }
    catch(e){
        res.send(e);
    }
})

// particular user name.
app.get("/students/:name",async(req,res)=>{
    try{
        // const name=req.params.name;
        const studentdata1=await student.find(req.params.name);
        console.log(studentdata1);

        if(!studentdata1){
            return res.status(404).send();
        }
        else{
        res.status(303).send(studentdata1);
        }
    }
    catch(e){
        res.send(e);
    }
})

app.delete("/students/:id",async(req,res)=>{
    try{
        const deletestudent=await student.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(deletestudent);
    }
    catch(e){
        res.status(500).send(e);

    }
    
})

// now for update

app.patch("/students/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const updatestudent=await student.findByIdAndUpdate(_id,req.body);
        
        
        res.send(updatestudent);
        console.log(updatestudent)
    }
    catch(e){
        res.status(500).send(e);

    }
    
})









app.listen(port,()=>{
  
    console.log(`connection use at port number ${port}`);
})