const express = require("express")
const path = require("path");
const app=express();
const port=80;

//for serving static files
app.use('/static',express.static('static'))


app.set('view engine','pug') //set the template engine as pug
app.set('views',path.join(__dirname ,'views')) //set the views directory
/*
//our pug demo end point
app.get("/demo",(req,res)=>{
    res.status(200).render('demo',{title: 'Hey Harry', message:'Hello there and thanks for tellng me how to use pubG!'})
});
app.get("/",(req,res)=>{
    res.status(200).send("This is my first express app with Nisha")
});

app.get('/about',(req,res)=>{
    res.send("This is about my first express app with harry")
});

app.post('/about',(req,res)=>{
    res.send("This is a post of my first express app with harry");
})

app.get("/this",(req,res)=>{
    res.status(400).send("This page is not found")
})*/
//ENDPOINTS
app.get('/',(req,res)=>{
    //res.status(200).render('index.pug')
    const con= "This is the best content on the internet so far so use it wisely"
    const params ={'title':'pubG is the best Game',"content ":con}
    res.status(200).render('index.pug',params);
})
app.listen(port,()=>{
    console.log(`The application started on port ${port}`)
})