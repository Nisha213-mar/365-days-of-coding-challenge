const express = require("express")
const app=express();
const port=80;
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
})
app.listen(port,()=>{
    console.log(`The application started on port ${port}`)
})