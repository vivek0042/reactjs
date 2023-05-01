const express=require ("express");
require("../src/db/conn");
const MensRanking=require("../src/models/mens");

const app = express();
const port = process.env.PORT || 3000; 
app.use(express.json());
// app.get("/",(req,res)=>{
//     res.send("hello from vivek jain")

// })

app.post("/mens",async(req,res)=>{
    try{
        const addingmensrecord=new MensRanking(req.body)
        console.log(req.body);
        const add=await addingmensrecord.save();
        res.status(201).send(add);

    }catch(e){
        res.send(e);

    }

})


app.listen(port,()=>{
    console.log(`connection succesfully on port number ${port}`); 
})