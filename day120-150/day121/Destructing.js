console.log('This is about Destructing in javaScript.');
 let a ,b,c,d;
 [a,b]=[34,445];
 console.log(a,b);

 //Array Destructuring

 [a,b,c,...d]=[1,2,3,4,5,6,7,8,9,10,12,13,14];
 //console.log(a)
 //console.log(b)
 //console.log(c)
 //console.log(d)

 ({a,b,c,...d}={a:34,b:56,c:6,d:9,e:23,f:14})
 console.log(a,b,c,d)

 const fruits=['Apple','Bananas','Mangoes'];
 [a,b,c]=fruits;
 console.log(a,b,c)

 //Object Destructuring
 const laptop={
     model: "HP Pavilion",
     age:"1 year",
     windows:11,
     ryzen:5,
     start:function () {
         console.log('started');
     }
     const {model,age,windows,ryzen,start}=laptop;
     console.log(model,age,windows,ryzen,start);
     start()
 }