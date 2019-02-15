import React, { Component } from "react";
//import TextField from '@material-ui/core/TextField';
import { TextField, MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { sendchatmessage } from '../services/chatServices';
//import openSocket from 'socket.io-client';
import { getallusers } from '../services/userServices';
import { chatmsg } from '../services/chatServices';
import '../App.css';
//import { AppBar } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar/AppBar';
class DashPage extends Component {

    constructor(props) {
        // const socket = openSocket('http://localhost:4000');
        super(props);
        this.state = {
            onlineuser: [],
            sender: '',
            recever: '',
            message: '',
            chatmsg: [],
            display: '',

        }
        // socket.emit('message', "test data");
    }
    componentDidMount() {

        getallusers()
            .then((res) => {

                console.log(" responce in dashboard ", res.data);
                this.setState({ onlineuser: res.data })
                //this.setState({ recever: Receiver });

            })
            .catch(() => {

                console.log("error in getting data ");


            })

    }

    componentWillMount() {


        chatmsg()
            .then((res) => {
                console.log("messages in dtaa base in dash bord", res.data.result);
                this.setState({ chatmsg: res.data.result });

            }).catch(() => {


                console.log(("data base not give any data"));


            });



    }

    handleClick = name => event => {

        this.setState({ [name]: event.target.value });

    }

    handleClick1 = event => {
        // this.setState({ anchorEl: null });
        let Receiver = event.target.textContent;
        console.log("recevier in dash board ", Receiver);
        this.setState({ recever: Receiver });

    };
    handlesend = event => {
        event.preventDefault();
        const Sen = localStorage.getItem('Sender')

        console.log("Sender -->", Sen);
        console.log("sender ", this.state.sender);
        this.setState({ sender: Sen });

        var data = {
            sender: Sen,
            reciver: this.state.recever,
            message: this.state.message,

        }
        console.log("data in dash board", data);
        var check = sendchatmessage(data);
        if (check) {
            console.log("ckeck in dash board ", check);

        }

        this.setState({ message: '' });
        //  this.setState({display:this.state.message});

    }
    handlelogout = event => {
        event.preventDefault();
        this.props.props.history.push("/Login");

    }
    render() {



        const msg = this.state.chatmsg.map((key) => {



            return (

                <div >
                    {key.sender === localStorage.getItem('Sender') ? (
                    
                        <div>
                            <label>{key.sender}:</label>
                            <div>{key.message}</div>
                        </div>) : (null)
                
                    }
                </div>
            )

        })




        const users = this.state.onlineuser.map((key) => {

            if (key.email !== localStorage.getItem('Sender')) {
                return (
                    <div overflow="auto">
                        <MenuItem onClick={this.handleClick1}>{key.email}</MenuItem>
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
                    <h1 id="ag">user:{localStorage.getItem('Sender')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To:{this.state.recever} </h1>

                </div>



                <div>
                    <div className="onlineflex">
                        <h1 id="htag"> users</h1>

                        {users}
                    </div>
                    <div className="container">
                        {msg}
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