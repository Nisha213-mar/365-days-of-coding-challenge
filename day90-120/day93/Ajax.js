console.log('This is about Ajax in js');

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler() {
    console.log('You have clicked the fetchBtn');

    //Instantiate an xhr object
    const xhr= new XMLHttpRequest();
    
    //Open the object
    //xhr.open('GET','https://dummyjson.com/products/1',true);
 
    //USE THIS FOR POST REQUEST
    xhr.open('POST','https://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('content-type','application/json');

    //What to do on Progress(optional)
    xhr.onprogress = function(){
        console.log('On progress');
    }
    //What to do when response is ready
    xhr.onload = function(){
        if(this.status===200){
        console.log(this.responseText)
        }
        else{
            console.log('Some error occured')
        }
    }

    //send the request
    //xhr.send();
    params=`{"name":"test3456","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log("we are done!");

}