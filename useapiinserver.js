// api means simply the service which give us data when we request some service.
const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    if(req.url=="/")
    {
        res.end("Hello from home side");
    }
    if(req.url=="/fetchapi")
    {
        fs.readFile("json1.json",'utf-8',(err,data)=>{
            console.log(data);
        })
    }
});
server.listen(8000,'127.0.0.1',()=>{
    console.log("muskurhiye app lakhnow me hai");
})