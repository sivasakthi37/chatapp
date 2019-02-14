import React, { Component } from "react";
//import TextField from '@material-ui/core/TextField';
import { TextField, MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { sendchatmessage } from '../services/chatServices';
//import openSocket from 'socket.io-client';

import '../App.css';
//import { AppBar } from "@material-ui/core";

class DashPage extends Component {

    constructor(props) {
        // const socket = openSocket('http://localhost:4000');
        super(props);
        this.state = {
            onlineuser: ["surendra", "hithesh", "vivek", "hari"],
            sender: '',
            recever: '',
            message: '',

        }

        // socket.emit('message', "test data");
    }



    handleClick = name => event => {

        this.setState({ [name]: event.target.value });

    }
   
    handleClick1  = event => {
      // this.setState({ anchorEl: null });
     let Receiver = event.target.textContent;
        console.log("recevier in dash board ",Receiver);
     this.setState({ recever: Receiver });

   };
   handlesend = event => {
    const Sen = localStorage.getItem('Sender')
    console.log("Sender -->", Sen);
     console.log("sender ",this.state.sender);
   this.setState({ sender: Sen });

    var data = {
        sender: Sen,
        reciver: this.state.recever,
        message: this.state.message,

    }
    console.log("data in dash board",data);

    sendchatmessage(data)
}

    render() {
      //  console.log("this sender ", this.state.sender);

      
      //  console.log("this.messgae", this.state.message);
        //const user1 = localStorage.getItem('Sender');
       // console.log("user1-->", user1);
        const users = this.state.onlineuser.map((key) =>
    
            <MenuItem onClick={this.handleClick1}>{key}</MenuItem>
        );
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
                    <div className="onlineflex">
                        <h1 id="htag"> users</h1>

                        {users}
                    </div>
                    <div className="container"><h1 id="htag">Online</h1>

                    </div>
                </div>
                <div className="containerButton">
                    < TextField margin="normal" fullWidth label="type your text here"

                        onChange={this.handleClick('message')}
                    />
                    <Button id="sendMessage" variant="contained" color="primary" className="button" onClick={this.handlesend} >Send</Button>
                </div>
            </div>
        )
    }
}
export default DashPage;