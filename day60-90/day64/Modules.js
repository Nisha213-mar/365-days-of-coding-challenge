const fs=require("fs");
let text= fs.readFileSync("Modules.txt","utf-8");
text=text.replace("module","Nisha");
console.log("The Content of the file is");
console.log(text);
console.log("Creating a new file...")
fs.writeFileSync("Nisha.txt",text);