const fs = require('fs');
fs.writeFile('bio1.txt','hello today is my favorite day',(err)=>{
    console.log("File is created");
});