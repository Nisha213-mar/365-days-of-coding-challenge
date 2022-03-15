//You have pretend to use a word api which will contain an object and you have to print definition from all the results of that word api
//you have to take input from an input tag
//you have to print it in the dom
//if you are using bootstrap then its a plus

let meanings=document.getElementById('meanings');
meanings.addEventListener('click',getDefination);

//Implementing the getdefination function
function getDefination(){
    let xhr= new XMLHttpRequest();

    //open the object
    xhr.open('GET','Exercise_5.json',true);

    //What to do on progress
    xhr.onprogress=function(){
        console.log('On progress');
    }
    //what to do when response is ready
    xhr.onload=function(){
        if(this.status===200){
            let obj=JSON.parse(this.responseText);
            for (let index = 0; index < obj.results.length; index++) {
                const element = obj.results[index]["definition"];
                console.log(element);
                populate(element);
                
            }
            else{
                console.log('Some error occured');
            }
        }
        xhr.send();
    }
    function populate(element){
        let html="";
        html+=`<li class="py-2 list-group-item list-group-item-light">One of the definition of example is:${elemnt}</li>`;
        let definations=document.getElementById('definations').innerHTML+=html;
    }
}