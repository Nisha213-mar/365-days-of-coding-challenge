console.log('This is about Meta Characters in js');

let regex =/Radha/;
//Lets look into some metacharacters symbols
regex=/^Radhac/; //^means expression will match if string starts with
regex=/Radha$/; //$ at the end of string means "string ends with"
regex=/R.dha/; //matches any one character
regex=/R*adha/; //matches any 0 or more characters
regex=/Ra?dhai?/ //? after character means that character means that character is optional
//regex=/R\*adha/;
 let str="Radhgjghgbja is a good girl and Radha is beautiful";
  
 let result=regex.exec(str);
 console.log("The result from exec is ",result);

 if(regex.test(str)){
     console.log(`The string ${str} matches the expression ${regex.source}`);
 }
 else{
     console.log(`The string ${str} does not matches the expression ${regex.source}`);
 }