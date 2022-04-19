//Synchronus or blocking
//-line by line execution
//Asynchronus or non-blocking
//-line by line execution not guaranteed
//-callbacks will fire

/*const fs= require("fs");
fs.readFile("Nisha.txt","utf-8",(err, data)=>{
    console.log(data);
});
console.log("This is a message");*/
const fs=require("fs");
let text=fs.readFile("hello.txt","utf-8",(a,b)=>{
    console.log(a,b);
});
console.log("This is a message");
