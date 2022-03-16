//Pretend that this response is coming from the server
const students=[
    {name:"Nisha", subject:"JavaScript"},
    {name:"Priya", subject:"Machine Learning"}
]

//function enrollStudent()
function enrollStudent(student){
    return new Promise(function(resolve,reject){
    setTimeout(function(){
        students.push(student);
        console.log("Students has been enrolled");
        if(!error){
            resolve();
        }
        else{
            reject();
        }
    },3000);
})
}
//function getStudents()

function getStudents(){
    setTimeout(function(){
     let str="";
     students.forEach(function(student){
         str += `<li>${student.name} </li>`
     });
     document.getElementById('students').innerHTML=str;
     console.log("Students have been fetched");
    },5000);
}

let newStudent ={name:"Sunny",subject:"Python"}
enrollStudent(newStudent).then(getStudents).catch(function(){
    console.log("Some error occured");
});
//getStudents();