console.log('This is about Iterators in javaScript');
//Iterators
function fruitsIterator(values){
    let nextIndex=0;
    //we will return an object
    return{
        next:function(){
            if(nextIndex<values.length){
                return{
                value:values[nextIndex++],
                done:false
            }
        }
            else{
                //we will return below object with only done
                return{
                    done:true
                }
            }
        }
    }
}
const myArray=['Apples','Grapes','Oranges','Banana'];
console.log("My Array is ",myArray);

//Using the iterator
const fruits=fruitsIterator(myArray);
console.log(fruits.next().value)
console.log(fruits.next())
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)