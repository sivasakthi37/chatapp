import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import '../App.css';
import Button from '@material-ui/core/Button';
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify'
import Snackbar from '@material-ui/core/Snackbar';
//import reg from './register';

class Loginpage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            open: false,
        }
    }
    handleReg = event => {
        event.preventDefault();
        this.props.props.history.push( "/register");

    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.username);
        console.log(this.state.username === '');
        console.log("hai how are u");

        if (this.state.username === '') {
            this.setState({ open: true });
        }
        else if (this.state.password === '') {
            this.setState({ open: true });
        }
        else {
         //  this.props.history.push("/dashBoard");

        }
    }

    render() {
        return (
            <div>
                <form>

                    <div>

                        <center>
                            < TextField label="username"
                                onChange={(event, newValue) => this.setState({ username: newValue })}
                            />
                            <br></br>
                            <TextField className="margin" label="password" type= "password"
                                onChange={(event, newValue) => this.setState({ password: newValue })}
                            />
                            <br></br>

                            {/* <button type="submit"  id="signinButton" onClick={this.registrationclick}>
                   <b>REGISTRATION</b>
                 </button> */}
                 <br></br>
                 
                            <Button variant="contained" color="primary" className="button" onClick={this.handleSubmit} > SUBMIT</Button>
                            <Button variant="contained" color="primary" className="button" onClick={this.handleReg} > REGISTER</Button>
                        </center>
                    </div>
                </form>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}


                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">
                        PLZ ENTER PROPER INPUT</span>}



                />
            </div>

        );
    }
}
export default Loginpage;






