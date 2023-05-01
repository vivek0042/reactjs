const fs = require('fs');
const bio={
    name : "vivek",
    age:"21",
    college:"gecgan",
    cpi:8.64,
};
// JSON.stringify used for the convert object to json.
const jsondata =JSON.stringify(bio);
// JSON.parse used for json to object.
const objectdata=JSON.parse(jsondata);
console.log(jsondata);
// this is our json data which have inverted comma on value and variable.
// {"name":"vivek","age":"21","college":"gecgan","cpi":8.64}


console.log(objectdata);
// this is our object data which have inverted comma at value only not on variable.
// { name: 'vivek', age: '21', college: 'gecgan', cpi: 8.64 }


// now here we create one file and store our data in that.
fs.writeFile("json1.json",jsondata,(err)=>{
    console.log("data added");
});

// now we to read file.


fs.readFile("json1.json","utf-8",(err,data)=>{
    const orgdata=JSON.parse(data);
    console.log(orgdata);
})