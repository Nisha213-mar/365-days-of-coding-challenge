//Type Conversion and type coercion
console.log("Welcome to Type Conversion");
let myVar;
myVar= String(34);
console.log(myVar,(typeof myVar));

let booleanVar=String(true);
console.log(booleanVar,(typeof booleanVar));

let date =string(new Date());
console.log(date,(typeof date));

let arr=String([1,2,3,4,5]);
console.log(arr.length,(typeof arr));

let i=75;
console.log(i.toString())

let srei=Number("3434");
stri=Number("343d4");
stri=Number(false);
stri=Number([1,2,3,4,5,6,7,8,9])
console.log(stri,(typeof stri));

let number=parseInt('34.8905');
console.log(number,(typeof number));

//Type Coercion

let mystr="698";
let mynum=34;
console.log(mystr+mynum);