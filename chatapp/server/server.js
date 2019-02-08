const express=require('express');
const bodyParser=require('body-parser');
const dbConfig=require('./config/connectivityDb');
const mongoose=require('mongoose');
const app=express();
//app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
require('./routes/note.route')(app);
mongoose.Promise=global.Promise;


app.get('/',(req,res)=>{

res.json("Your DATABASE is Connected sucessfully");

});

app.listen(3000,()=>{
console.log("see the local host port number 3000");
})

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
