const fs=require("fs");
const http = require('http');
const server = http.createServer()
server.on("request",(req,res)=>{
//     const rstream=fs.createReadStream("practise.txt"); 
//     rstream.on("data",(chunkdata)=>{
//         res.write(chunkdata);
//     });
//     rstream.on("end",()=>{
//         res.end();
//     });
// });


// second way to read the stream is pipe

const rstream=fs.createReadStream("practise.txt");
rstream.pipe(res);
});
server.listen(8001,"127.0.0.1")









