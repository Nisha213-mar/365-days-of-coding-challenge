console.log("This is about Local & Session Storage in JavaScript")
let impArray=['Neha','Richa','Shikha'];
//Add a key value pair inside local storage
localStorage.setItem('Name','Nisha')
localStorage.setItem('Name2','Priya')
localStorage.setItem('Girls-name',JSON.stringifyimpArray);

//clear the entire local storage
//localStorage.clear();

//clear a particular key value pair
localStorage.removeItem('Name')

//Retrive an item from the local Storage
let name=localStorage.getItem('Name');
name= JSON.parse(localStorage.getItem('Girls-name'));
console.log(name);

sessionStorage.setItem('sessionName','sNisha')
sessionStorage.setItem('sessionName2','sPriya')
sessionStorage.setItem('sessionGirls-name',JSON.stringifyimpArray);
