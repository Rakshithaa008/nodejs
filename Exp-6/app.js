const http=require("http");
const os=require("os");
const path=require("path");
const eventEmitter=require("events");

//OS Module
console.log("platform:",os.platform());
console.log("Free Memory",os.freemem());

console.log("File Name:",path.basename(__filename));

const event = new eventEmitter();
event.on("welcome",()=> console.log("Welcome event triggered!"));

const server=http.createServer((req,res)=>{
    event.emit("welcome");
    res.end("Hello! Welcome to Node.js Server");
});
server.listen(3000,()=>{
    console.log("server running at http://localhost:3000");
});




