const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require('mongoose');
const chalk=require("chalk");
mongoose.connect('mongodb://localhost/new',{useNewUrlParser: true});
const port = 5150;

//moongose schema
const introSchema = new mongoose.Schema({
    name: {
    type:String,
    trim:true,     //this is validator
    },

    age:{
        type: String,
        validate:
        {
            validator:function(value){
                return value.length<0
            },
            message:"age should not be negative"
        //     if(value<0){
        //         throw new error("age never be less than 0");
        //         c onsole.log(chalk.red.inverse("please add proper value"));
        //         // console.log(rs ? chalk.black.inverse(rs) : chalk.blue.inverse(rs));

        //     }
        }
    },
    gender: String,
    fname:String,
    r:Number,
    mname:String
    
  });

const family = mongoose.model('family', introSchema);



// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('index.pug', params);
})

app.post('/contactform', (req, res)=>{
    var myData = new family(req.body);
    myData.save().then(()=>{
        res.send("this item is saved")
    }).catch(()=>{
        res.status(400).send("item was not found")
    });
   
    res.status(200).render('index.pug');

})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});

