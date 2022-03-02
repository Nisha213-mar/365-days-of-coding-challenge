console.log('This is about events in javadcript');
let btn= document.getElementById('btn');
btn.addEventListener('click',func1);
btn.addEventListener('dblclick', func2);
btn.addEventListener('mousedown',func3);

function func1(e){
    console.log("Thanks",e);
    e.preventDefault();
    )
}

function func2(e){
    console.log("Thanks its a double click",e);
    e.preventDefault();
    )
}

function func3(e){
    console.log("Thanks its a mouse down",e);
    e.preventDefault();
    )
}