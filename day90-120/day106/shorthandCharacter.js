console.log("This is about Shorthand Characters in js");

let regex=/\war/;        //word character- _or alphabet or numbers
regex=/\w+d1r/;          //\w+ means one or  more word characters
regex=/\wHello/;         //Non word characters
regex=/\w+Hello/;        //\w+ means more thaan one Non word character
regex=/numbet \d999/;    //\d means digit
regex=/number \d+/;      // \d+ means more than one digit
regex=/\D999/;           //\D means non digit
regex=/\D+999/;          //\D+ means more than one non digit
regex=/\sher number/;    //Match whitespace character
regex=/\s+her number/;   //Match more than one whitespace character
regex=/Sher number/;     //Match Non whitespace character
regex=/S+her number/;    //Match more than one Non whitespace character
regex=/4r5r\b/;          //word boundary

//Assertions
regex=/h(?=a)/;
regex=/h(?!y)/;

str="harhar1r4r5r %4%^$@ Radhaher number is 78943Hello9999999";
let result=regex.exec(str);
 console.log("The result from exec is ",result);

 if(regex.test(str)){
     console.log(`The string ${str} matches the expression ${regex.source}`);
 }
 else{
     console.log(`The string ${str} does not matches the expression ${regex.source}`);
 }