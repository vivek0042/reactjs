const http=require("http");

const server=http.createServer((req,res)=>{
    res.end("mai nahi to kon be");
    console.log(req.url); //this is for the retrieve the link which is asked by the user.
})
server.listen(8000,"127.0.0.1",()=>{
    console.log(`we are lsting on port no 8000`)
    console.log("mai nahi to kon be");

})
//write res.writehead(404) for writing error message and write error code.write in server section above.
// we have to change this concurrently to became updated.