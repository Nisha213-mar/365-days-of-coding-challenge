console.log("This is about Regular Expression");
let reg = /Nisha/; //This is a regular Expression literal in js
//let reg = /Nisha/g; //g means global
//let reg=/harry/i;//i means case insensitive

console.log(reg);
console.log(reg.source);

let s = "This is great code with Nisha and also Nisha Jha";
//Functions to match expression
//1.exec()- This function will return an array for match or null for no match
let result = reg.exec(s);
console.log(result);
console.log(result.input);
console.log(input.index);
/*result=reg.exec(s);
console.log(result);
result=reg.exec(s);
console.log(result);*/

//2. test() - Returns true or false
result = reg.test(s);
console.log(result); //--> This will only print true if the "reg" is there in string "a"

//3. match() - It will return an array of results or null
let result3 = s.match(reg)
console.log(result3);

//4. Search()- Returns index of first match else -1
//let result4=reg.search(s) -->This is wrong!!
let result4=s.search(reg)
console.log(result4);

//5.replace()- Returns new replaced string will all the replacements(if no flag is given, first match will be replaced)
let result5=s.replace(reg,'Priya');
console.log(result5);