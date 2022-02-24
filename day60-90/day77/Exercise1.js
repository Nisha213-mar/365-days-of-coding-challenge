console.log('Exercise 1 solution to find the link');
let a=document.links;
let b='harry';
Array.from(a).forEach(function(element){
    if(String(element).includes(b)){
        console.log(element);
    };
});