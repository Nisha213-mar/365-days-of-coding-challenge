console.log("This is about functions in javascript");

function greet(name,greetText="GreetText from javascript"){
    console.log(greetText+" "+name);
    console.log(name +" is a good girl");
}
function sum(a,b,c){
    let d=a+b+c;
    return d;
}
function min(a,b){
    if(a<b){
    return a;
    }
    else{
    return b;
    }
}
function max(a,b){
    if(a>b)
    return a;
    else
    return b;
}
let Name="Nisha";
let name1="Priya";
let name2="Nidhi";
let name3="Anjali";
let greetText="Good Morning";
greet(Name, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3);
let returnVal=sum(1,2,3);
console.log(returnVal)
let value=min(2,3);
console.log(value)
let maximum=max(4,8);
console.log(maximum)
//console.log(Name + " is a good girl");
//console.log(name1+ " is a good girl");
//console.log(name2 + " is a good girl");
//console.log(name3 + " is a good girl");