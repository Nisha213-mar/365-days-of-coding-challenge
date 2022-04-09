console.log('This is about symbols in javaScript');

//Symbols
const sym1=Symbol("My Identifier");
const sym2=Symbol('My identifier');
console.log('Symbol is ',sym1);
console.log('Type of Symbol is ',typeof sym1);
console.log(sym1===sym2);

const a="this is"
const b="this is"

console.log(a===b)
console.log(null===null)
console.log(undefined===undefined)

const k1=Symbol('identifier for k1');
const k2=Symbol('for k2');

myObj={};
myObj[k1]="Harry";
myObj[k2]="Rohan";
myObj["name"]="Harsh Gupta";
myObj[4]="Ritu";

console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
console.log(myObj.k2); //!![Alert] !!:Cannot do this to get Rohan because it is same as myObj["k2"]

//Symbols are ignored in for in loop
for(key in myObj){
    console.log(key,myObj[key])
}

console.log(JSON.stringify(myObj));