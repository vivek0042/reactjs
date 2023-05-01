const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port =5500;
const home = fs.readFileSync('index.html');
const about = fs.readFileSync('./about.html');
const service = fs.readFileSync('./service.html');
const contact = fs.readFileSync('./contact.html');

const server = http.createServer((req,res)=>{
console.log(req.url);

    res.statuscode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end(home);

});

server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}/`);
});