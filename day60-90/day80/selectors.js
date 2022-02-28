console.log('This is about DOM Selectors');
/*
Elements Selectors
1.Single Element Selectors
2. Multi Element Selectors
*/

//1. Single Element Selectors
let element= document.getElementById('myfirst');
//element=element.className
//element=element.childNodes;
element.style.color='red';
element.innerText='Hello Everyone';
element.innerHTML='<br> Hello Everyone</br>'
console.log(element.innerText);

let sel=document.querySelector('#myfirst');
sel=document.querySelector('.child');
sel=document.querySelector('div');
sel.style.color='green';
console.log(sel);

//Multi Element Selector
let elems=document.getElementsByClassName('child');
elems=document.getElementsByClassName('container');
elems=document.getElementsByClassName('div');
console.log(elems)

Array.from(elems).forEach(element =>{
    console.log(element);
    element.style.color='blue';
})
//console.log(elems[0].getElementsByClassName('child'))