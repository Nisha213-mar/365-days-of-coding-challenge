console.log("This is about DOM Manipulation");
let a=document;
//a=document.images[0];
a=document.all
//a=document.forms;
Array.from(a).forEach(function(element){
    console.log(element);
})

//a=document.links[0];
/*Array.from(a).forEach(function(element){
    console.log(element);
})*/
console.log(a);