const express=require('express');
const bodyParser=require('body-parser');
const dbconfig=require('./config/connectivityDb');
const mongoose=require('mongoose');
const app=express();

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.get('/',(req,res)=>{

res.json("Your DATABASE is Connected sucessfully");

});

app.listen(3000,()=>{
console.log("see the local host port number 3000");
})
