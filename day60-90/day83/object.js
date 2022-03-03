console.log("This is about object oriented programming in js");

let car={
    name:'Maruti 800',
    topSpeed:89,
    run: function(){
        console.log("car is running");
    }
}
//we have already seen constructors like these
//new Date();
//creating a constructor for cars

function generalCar(givenname,givenSpeed){
    this.name = givenname;
    this.topSpeed=givenSpeed;
    this.run=function(){
        console.log(`${this.name} is running`);
    }
    this.analyze=function(){
        console.log('This car is slower than ${200 - this.topSpeed} Mercedes');
    }
}
car1=new generalCar('Nissan',180);
car2=new generalCar('Mercedes',200);
console.log(car);