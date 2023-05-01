const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/corona',{useNewUrlParser: true});
const port = 5400;

//moongose schema
const contactSchema = new mongoose.Schema({
    name: String,
    age: String,
    gender: String
    
  });

const Contact = mongoose.model('Contact', contactSchema);



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
    var myData = new Contact(req.body);
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

