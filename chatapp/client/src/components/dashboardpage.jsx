import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import name from '../services/chatServices';
 import openSocket from 'socket.io-client';

import '../App.css';
//import { AppBar } from "@material-ui/core";

class DashPage extends Component {

    constructor(props) {
        const  socket = openSocket('http://localhost:4000');
        super(props);
        this.state = {
            message: '',

        }
        
        socket.emit('message', "test data");
    }


    handleClick = name => event => {

        this.setState({ [name]: event.target.value });
        
    }

    render() {
        return (
            <div>
                <div>
                    <div className="onlineflex">
                        <h1 id="htag">LIST OF USERS</h1>
                    </div>
                    <div className="container"><h1 id="htag">Online</h1>
                    </div>
                </div>
                <div className="containerButton">
                    < TextField margin="normal" fullWidth label="type your text here"
                        //  style={{ marginLeft: "20px", width: "400px" }}
                        onChange={this.handleClick('message')}
                    />
                    <Button id="sendMessage" variant="contained" color="primary" className="button" onClick={this.handlesend} >Send</Button>
                </div>
            </div>
        )
    }
}
export default DashPage;