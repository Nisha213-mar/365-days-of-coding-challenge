console.log("This is about error handling in js");

//pretend this is coming from a server as response
let a="Nisha Jha";
if(a!=undefined){
    throw new Error('This is not undefined');
}
else{
    console.log('This is undefined');
}
try {
    console.log("We are inside try block");
    //functionHarry();
} catch (error) {
    console.log(error)
    console.log("Are you Okay?");
    console.log(error.message);
}finally{
    console.log("Finally we run this code");
}