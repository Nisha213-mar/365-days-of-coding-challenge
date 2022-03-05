console.log('This is about Prototype Inheritence');

const proto ={
    slogan: function(){
        return 'This Company is the best';
    },
    challengeName : function(newName){
        this.name=newName
    }
}

let harry=Object.create(proto);
harry.name="Harry";
harry.role="Programmer";
//harry.changeName("Nisha");
//console.log(harry)

//This also creates harry Object
const harry1=Object.create(proto,{
    name:{value:"Harry", writable:true},
    role:{value:"Programmer"},
});
//harry1.changeName("Nisha")
console.log(harry1)

//Employee Constructor
function Employee(name,salary,experience){
    this.name=name;
    this.salary=salary;
    this.experience=experience;
}

//slogan
Employee.prototype.slogan=function(){
    return 'This Company is the best. Regards, ${this.name}';
}
 let nisha=new Employee("Nisha",34850,87);
 console.log(nisha)

 //Programmer
 function Programmer(name,salary,experience,language){
     Employee.call(this,name,salary,experience);
     this.language=language;
 }

 //Inherit the Property
 Programmer.prototype=Object.create(Employee.prototype);

 //Manually set the constructo/
Programmer.prototype.constructor=Programmer;

 rohan=new Programmer("Rohan",20000,0,"JavaScript")
 console.log(rohan);