console.log("This is about Map in javaScript.");
//Maps in javaScript : We can use any type of key or value

const myMap=new Map();
console.log(myMap);

const key1='myStr',key2={}, key3=function(){};
 
//Setting map values
myMap.set(key1,'This is a string');
myMap.set(key2,'This is a blank obj');
myMap.set(key3,'This is an empty function');

console.log(myMap);

//Getting the values from a Map
let value1=myMap.get(key3);
console.log(value1);

//Get the size of the map
console.log(myMap.size);

//You can loop using for...of to get keys and values
for(let [key,value] of myMap){
    console.log(key,value);
}

//Get only keys
for(let key of myMap.keys()){
    console.log(key);
}

//Get only Values
for(let key of myMap.values()){
    console.log('Value is ',key);
}

//you can loop through a map using for each loop
myMap.forEach((value,key)=>{
    console.log('Key is ',key);
    console.log('value is ',value);
})

//Converting map to an array
let myArray=Array.from(myMap);
console.log('Map to array is ',myArray);

//Conveerting map keys to an array
let mykeysArray=Array.from(myMap.keys());
console.log('Map to keys array is ',mykeysArray);

//Converting map values to an array
let myValuesArray=Array.from(myMap.values());
console.log('Map to Values array is ',myValuesArray);