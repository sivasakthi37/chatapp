
//import openSocket from 'socket.io-client';
import axios from 'axios';


//const socket = openSocket('http://localhost:4000');
export function sendchatmessage(data) {

    console.log("dtaa in services ", data);

    // socket.emit('message', data);

    // socket.on('emit', (result) => {

    //         console.log("message saved in data base ", result);
    
                 
    // })
    // return true;
}
 export function chatmsg(){

     return axios.get('/getallMessage');

 }



