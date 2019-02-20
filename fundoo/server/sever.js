const express = require('express');
const routes = require('./routes/routes');
const app = express();
const mongoose = require('mongoose');
const config=require('./config/mongodb.connection')
const bodyParser = require('body-parser');
const test=require('./test/test');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.json("Im in localhost 8000")

})
app.use('/', routes);
app.listen(8000, () => {

    console.log("see your local host 8000");

})

mongoose.connect(config.url, { useNewUrlParser: true })
    .then((res) => {

        console.log("mongoose data base connected sucessfully");


    }).catch(err => {

        console.log("mongo db connection error", err);
        process.exit();


    })
    module.exports=app;