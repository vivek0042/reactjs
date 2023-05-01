const EventEmitter = require("events");
const event = new EventEmitter();

event.on("set myname",()=>{
    console.log("my name is vivek jain");
});

event.on("set myname",()=>{
    console.log("my name is vivek jain");
});

event.on("set myname",()=>{
    console.log("my name is ashokbhai");
});

event.on("set myname",()=>{
    console.log("my name is vivek jain");
});
event.emit("set myname");