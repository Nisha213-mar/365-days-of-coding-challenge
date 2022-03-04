console.log('This is about prototypes in javascript');

//Object liteeral
let obj={
    name:"Nisha",
    channel:"Coding Club",
    address:"Maithon"
}
function Obj(givenName){
    this.name=givenName
}

Obj.prototype.getName=function(){
    return this.name;
}
Obj.prototype.setName=function(newName){
    this.name=newName;
}
let obj2= new Obj("shyama"); 
console.log(obj2);