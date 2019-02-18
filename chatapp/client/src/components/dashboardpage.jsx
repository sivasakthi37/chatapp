import React, { Component } from "react";
//import TextField from '@material-ui/core/TextField';
import { TextField, MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
//import { sendchatmessage } from '../services/chatServices';
import openSocket from 'socket.io-client';

import { getallusers } from '../services/userServices';
import { chatmsg } from '../services/chatServices';
import '../App.css';
//import { AppBar } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar/AppBar';
const socket = openSocket('http://localhost:4000');
class DashPage extends Component {

    constructor(props) {
        //  const socket = openSocket('http://localhost:4000');
        super(props);
        this.state = {
            onlineuser:[],
            sender: '',
            recever: '',
            message: '',
            chatmsg: [],
            display: '',
            msg: [],

        }
        // socket.emit('message', "test data");

    }
    componentWillMount() {
        const Sen = localStorage.getItem('Sender')

        console.log("Sender -->", Sen);

        this.setState({ sender: Sen });
        console.log("sender======> ", this.state.sender);


    }

    handleClick = name => event => {

        this.setState({ [name]: event.target.value });

    }

    handleClick1 = event => {
        // this.setState({ anchorEl: null });
        let Receiver = event.target.textContent;
        console.log("recevier in dash board ", Receiver);
        this.setState({ recever: Receiver });
        console.log("sender", this.state.sender);

    };
    handlesend = event => {
        event.preventDefault();

        const Sen = localStorage.getItem('Sender')

        var data = {
            sender: Sen,
            reciver: this.state.recever,
            message: this.state.message,

        }
        console.log("data in dash board", data);

        // sendchatmessage(data);
        socket.emit('message', data);
        this.setState({ message: '' })


    }
    //var  msgdisplay = document.getElementById("msgdisplay");

    componentDidMount() {

        chatmsg()
            .then((res) => {
                console.log("messages in dtaa base in dash bord", res.data.result);
                this.setState({ chatmsg: res.data.result });

            }).catch(() => {
                console.log(("data base not give any data"));
            });

        getallusers()
            .then((res) => {

                console.log(" responce in dashboard ", res.data);
                this.setState({ onlineuser: res.data })
                //this.setState({ recever: Receiver });

            })
            .catch(() => {

                console.log("error in getting data ");


            })
        const Sen = localStorage.getItem('Sender')

        socket.on(Sen, (result) => {

            console.log("message saved in data base ", result);
            // msgdisplay.innerHTML += '<p><strong>' + result.sender + ':</strong>' + result.message + '</p>';
            var msg = this.state.msg;
            msg.push(result);
            this.setState({ msg: msg });
            console.log("this set msg====>", this.state.msg);
        })
    }
    //  this.setState({display:this.state.message});


    handlelogout = event => {
        event.preventDefault();
        this.props.props.history.push("/Login");

    }
    render() {

        console.log("sender ", this.state.sender);


        const msg = this.state.chatmsg.map((key) => {

            console.log("key.sender === localStorage.getItem('Sender')", key.sender === localStorage.getItem('Sender'));
            console.log("key.sender === this.state.recever", key.sender === this.state.recever);



            return (

                <div >
                    {key.sender === localStorage.getItem('Sender') ? (

                        key.sender === this.state.recever ?
                            (
                                <div id="receiver-div">
                                    {/* <label>{key.sender}:</label>
                            <div>{key.message}</div> */}

                                    <label><b>{key.sender}</b></label> :<div>{key.message}</div>
                                </div>) : (null)
                    ) : (null)}
                    {key.sender === this.state.recever ? (
                        <div id="sender-div">
                           <label><b>{key.sender}</b></label> :<div>{key.message}</div>
                            {/* <label> {key.sender}  </label>
                            <div>{key.message} </div> */}
                        </div>
                    ) : (null)
                    }
                </div>
            )

        })


        const dis = this.state.msg.map((key) => {
            // console.log("key.sender == this.state.sender");
            // console.log(key.sender + " ===" + this.state.sender);

            // console.log(key.sender === this.state.sender);

            return (
                <div>
                    {key.sender === this.state.sender ?
                        (<div id="sender-div"> <label><b>{key.sender}</b></label>:<div>{key.message} </div>
                        </div>)
                        : (<div id="receiver-div"><label><b>{key.sender}</b></label>:<div>{key.message}</div></div>)}
                </div>
            )
        });

        const users = this.state.onlineuser.map((key) => {

            if (key.email !== localStorage.getItem('Sender')) {

                return (
                    <div overflow="auto">
                        <MenuItem onClick={this.handleClick1} >{key.email}
                        </MenuItem>
                    </div>
                )
            }
            else {
                return true;

            }
        });
        //         const numbers = [1, 2, 3, 4, 5];
        // const listItems = numbers.map((numbers) =>
        //   <li>{numbers}</li>
        // );
        //   const loginUsers = this.state.onlineUser.map((key) => {
        //     if (key.Email !== localStorage.getItem('Sender')) {
        //         return (
        //             <MenuItem onClick={(event) => this.handleClick(key, event)}>{key.Email}</MenuItem>
        //         )
        //     }
        // })


        return (

            <div >

                <div>
                    <AppBar > <h1 align="center"> WELCOME TO CHATAPP  </h1> <Button className="grow" color="inherit" onClick={this.handlelogout} >LOGOUT</Button>

                    </AppBar>
                    <h1 id="ag">user:{this.state.sender} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To:{this.state.recever} </h1>

                </div>

                <div>
                    <div className="onlineflex">
                        <h1 id="htag"> users</h1>

                        {users}
                    </div>
                    <div className="container">
                         {msg}  

                        {dis}
                    </div>
                </div>
                <div className="containerButton">
                    < TextField margin="normal" fullWidth label="type your text here"
                        value={this.state.message}
                        onChange={this.handleClick('message')}
                    />
                    <Button id="sendMessage" variant="contained" color="primary" className="button" onClick={this.handlesend} >Send</Button>
                </div>
            </div>
        )
    }
}
export default DashPage;