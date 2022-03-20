console.log("This is about Async and Await in js");

async function Nisha(){
    console.log('Inside Nisha function');
    const response=await fetch('https://api.github.com/users');
    console.log('before response');
    const users=await response.json();
    console.log('users resolved')
    return users;
    return "Nisha";
}

console.log("Before calling Nisha")
let a=Nisha();
console.log("After calling Nisha")
console.log(a);
a.then(data => console.log(data))
console.log("Last line of this js file")