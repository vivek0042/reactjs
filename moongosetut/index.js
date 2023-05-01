// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/vivekmart',{useNewUrlParser: true, useUnifiedTopology:true});

// var db=mongoose.coonection;
// db.on('error',console.error.bind(console,'connection error:'));
// db.once('open',function(){
//     // we're connected!
//     console.log("we are connected bro")

// });

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/vivekmart');
  console.log("we are connected bro")
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
