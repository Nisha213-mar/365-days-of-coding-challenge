console.log("This is about for-of vs for-in loop.");

let people=["Nisha","Priya","Vivek","Anjali","Aman"];
 
//Traditional for loop
/*for (let index = 0; index < people.length; index++) {
    const element = people[index];
    console.log(element);
    
}*/

let obj={
    name:"Radha",
    language:"JavaScript",
    hobbies:"Andriod app development"
}

//console.log(obj);
//Iterating Using Traditional for loop
/*for (let index = 0; index < Object.keys(obj).length; index++) {
    const element = obj[Object.keys(obj)[index]];
    console.log(element);
    
}*/

//Iterating Object in for-in loop:
for(let key in obj){
    console.log(obj[key]);
}

//Iterating a string to loop through all characters
mystring="This is my string";
for(let char in mystring){
    console.log(mystring[char]);
}

//*******************For of loop*************** 
people=["Nisha","Priya","Vivek","Anjali","Aman"];
for(let name of people){
    console.log(name);
}

for(let name of mystring){
    console.log(name);
}