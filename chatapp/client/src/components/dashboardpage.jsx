import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import '../App.css';

class DashPage extends Component {

    render() {

        return (
            <div>
                {/* <div className="onlineflex">

                    online users
                </div> */}

                <div className="container"><h1>Online</h1></div>

                <div className="containerButton">
                    < TextField margin="normal" fullWidth label="type your text here"
                        //  style={{ marginLeft: "20px", width: "400px" }}
                        onChange={(event, newValue) => this.setState({ lastname: newValue })}
                    />
                    <Button id="sendMessage" variant="contained" color="primary" className="button" onClick={this.handleReset} >Send</Button>
                </div>




            </div>
        )
    }
}
export default DashPage;