console.log('This is about Asynchronus programming');

/*for (let index = 0; index < 45; index++) {
    const element = index;
    console.log("This is index number"+index);
    
}*/
setTimeout(()=>{
    for (let index = 0; index < 45; index++) {
        const element = index;
        console.log("This is index number"+index);
    }
},100);
console.log('done printing');