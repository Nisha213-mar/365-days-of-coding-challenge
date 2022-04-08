console.log('This is about Sets in JavaScipt');

//Set stores unique values
const mySet=new Set();   //Initialize an empty set
console.log('The set looks like :',mySet);

//Adding values to this set
mySet.add('this');
mySet.add('My name');
mySet.add('this');
mySet.add('that');
mySet.add(34);
console.log('The set looks like this now :',mySet);

let mySet2=new Set([1,45,'this',false,{a:4,b:9},'this']);
console.log('New set:',mySet2);

console.log(mySet.size)   //Get the size of the set

console.log(mySet.has(346));  //check weather the set has 346 or not

console.log('Before removal',mySet.has('that2'));

mySet.delete('that2'); //Remove an element from the set
console.log('After removal ',mySet.has('that2'));

//Iterating a Set
for(let item of mySet){
    console.log('Item is :',item);
}