console.log('This is about API in JAvaScript');
//Button with id mybtn
let mybtn=document.getElementById("mybtn");

//div with id content
let content=document.getElementById("content");

/*function getData(){
    console.log("Started getData")
    url="NIsha.txt";
    fetch(url).then((response)=>{
        console.log("Inside first then")
        return response.text();
    }).then((data)=>{
        console.log("Inside Second then")
        console.log(data);
    })
}*/

function getData(){
    console.log("Started getData")
    url="https://api.github.com/users";
    fetch(url).then((response)=>{
        console.log("Inside first then")
        return response.json();
    }).then((data)=>{
        console.log("Inside Second then")
        console.log(data);
    })
}

/*function postData(){
    url="https://api.github.com/users";
    data=''
    params={
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:data
    }
    fetch(url,params).then((response=>response.json())
    .then((data)=>console.log(data)
    )
}*/
console.log("Before running getData")
getData()
console.log("After running getData")