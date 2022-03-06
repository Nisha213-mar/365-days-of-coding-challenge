console.log('This is about Classes and Inheritance');

class Employee{
    constructor(givenName,givenExperience,givenDivision){
        this.name=givenName;
        this.experience=givenExperience ;
        this.division=givenDivision;
    }
    slogan(){
        return `I am ${this.name} and this company is the best`;
    }
    joiningYear(){
        return 2022-this.experience;
    }

    static add(a,b){
        return a+b;
    }
}

class Programmer extends Employee{
    constructor(givenName,givenExperience,givenDivision,Language,github){
        super(givenName,givenExperience,givenDivision);
        this.Language=Language;
        this.github=github;
    }
    favouriteLanguage(){
        if(this.Language=='Python'){
            return 'Python';
        }
        else{
            return 'JavaScript';
        }
    }
    static multiply(a,b){
        return a*b;
    }
}


nisha=new Employee("Nisha Jha",5,"Division");
console.log(nisha);
console.log(nisha.joiningYear());
console.log(Employee.add(56,23))
rohan=new Programmer("Rohan",3,"lays","Go","Rohan420")
console.log(rohan)
console.log(rohan.favouriteLanguage())
console.log(Programmer.multiply(5,7));