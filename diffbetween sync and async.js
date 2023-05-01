const fs=require('fs');

//for synchronus version.

const data=fs.readFileSync('bio1.txt','utf-8');
console.log(data);
console.log("this is print after the file data read");

//for asynchronus version.

// const data1=fs.readFile('bio1.txt','utf-8',(err,data1)=>{
//     console.log(data1);
// })
// console.log("this is print before data.")