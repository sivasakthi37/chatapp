const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/connectivityDb');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('./routes/note.route')(app);
mongoose.Promise = global.Promise;


/**
 * socket io ...
 */
// const server = require('http').createServer(app)


app.get('/', (req, res) => {
    res.json("Your DATABASE is Connected sucessfully");
});
var server=app.listen(4000, () => {
    console.log("see the local host port number 4000");
})

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


const io = require('socket.io').listen(server)
connections = [];
io.sockets.on('connection', (client) => {

connections.push(client);
    console.log("io is connected...");
    client.on('message', (req) => {

        console.log("requiest in server ", req);


     })
    // client.on('subscribeToTimer', (intervel) => {
    //     console.log("client is subscribing to time ", intervel);

    //     setInterval(() => {
    //         client.emit('timer', new Date());
    //       }, interval);
    // });

});

