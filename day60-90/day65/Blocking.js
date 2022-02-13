//Synchronus or blocking
//-line by line execution
//Asynchronus or non-blocking
//-line by line execution not guaranteed
//-callbacks will fire

const fs= require("fs");
fs.readFile("Modules.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log("This is a message");