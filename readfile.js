const fs = require("fs");    //it's a built in module in nodejs.
const text = fs.readFileSync("vivek.txt","utf-8");
console.log(text);

