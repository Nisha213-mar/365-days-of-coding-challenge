console.log('This is about progect through Regex Expression');
const name=document.getElementById('name');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
let validEmail=false;
let validphone=false;
let validuser=false;

//console.log(name,email,phone);

name.addEventListener('blur',()=>{
    console.log("name is blurred");
    //validate name here
    let regex=/^[a-zA-Z]([0-9a-zA-Z]){0,10}$/;
    let str=name.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('name is valid');
        name.classList.remove('is-invalid');
        validuser=true;
    }
    else{
        console.log('name is not valid');
        name.classList.add('is-invalid');
        validuser=false;
    }
})

email.addEventListener('blur',()=>{
    console.log("email is blurred");
    //validate email here
    let  regex= /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str=email.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('email is valid');
        email.classList.remove('is-invalid');
        validEmail=true;
    }
    else{
        console.log('email is not valid');
        email.classList.add('is-invalid');
        validEmail=false;
    }
})

phone.addEventListener('blur',()=>{
    console.log("phone is blurred");
    //validate phone here
    let regex=/^([0-9]){10}$/;
    let str=phone.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('phone number is valid');
        phone.classList.remove('is-invalid');
        validphone=true;
    }
    else{
        console.log('phone number is not valid');
        phone.classList.add('is-invalid');
        validEmail=false;
    }
})

let submit=document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('You clicked on submit');
    if(validEmail && validuser && validphone){
        let failure=document.getElementById('failure');
        console.log('Phone,email and user are valid. Submitting the form');
        let success=document.getElementById('success');
        success.classList.add('show');
        failure.classList.remove('show');
       // $('#failure').hide();
        //$('#success').show();
    }
    else{
        console.log('One of the phone ,email and user are not valid. Hence not submitting the form');
        let failure=document.getElementById('failure');
        failure.classList.add('show');
        success.classList.remove('show');
       // $('#success').hide();
       // $('#failure').show();
    }
    
    let success=document.getElementById('success');
    success.classList.add('show');
})


