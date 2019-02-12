import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import '../App.css';
//import { AppBar } from "@material-ui/core";

class DashPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',

        }


    }



    handleClick = name => event => {

        this.setState({ name: event.taget.value })
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
                    <Button id="sendMessage" variant="contained" color="primary" className="button" onClick={this.handleReset} >Send</Button>
                </div>
            </div>
        )
    }
}
export default DashPage;