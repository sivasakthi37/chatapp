//import openSocket from 'socket.io-client';
//const socket = openSocket('http://localhost:5000');

// import io from 'socket.io-client';
// const socket = io.connect('http://localhost:4000')
// socket.emit('message', "hello")
import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:4000');
export function name(){
socket.emit('message', "test data");
}

// function subscribeToTimer(cb) {
//     socket.on('timer', timestamp => cb(null, timestamp));
//     socket.emit('subscribeToTimer', 1000);

//   }
//   export { subscribeToTimer };
// function chatdisplay() {
//     // var requiest = {
//     //     hai: 'hia',
//     //     hellow: 'hellow'
//     // }
//     // console.log("request in chat services ",requiest);
    

// }
// chatdisplay();


