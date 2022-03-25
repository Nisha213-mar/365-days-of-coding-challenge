console.log('This is about Character Sets in Regular Expression');

//Character Sets - []
let regex =/R[a-z]dha/; //can be any set from a to z
regex=/R[aty]dha/; //can be an a t or y
regex=/R[^xty]dha/; //can not be x t or y
regex=/R[a-zA-Z]dh[ya0-9][0-9]/;//We can have many character sets as we want
//const str="RAdha8";
 
//Quantifiers - {}
regex=/har{2}y/; //r can occur exactly 2 times
regex=/har{0,2}y/; //r can occur exactly 0 to 2(0 or 1 or 2) times

//Groupings - we use parenthesis for groupings
regex=/(har){2}([0-9]r){3}/

str="harry is a boy";
str="harhar1r4r5r Hello";
let result=regex.exec(str);
 console.log("The result from exec is ",result);

 if(regex.test(str)){
     console.log(`The string ${str} matches the expression ${regex.source}`);
 }
 else{
     console.log(`The string ${str} does not matches the expression ${regex.source}`);
 }