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
            username: "",
            password: "",
            open: false,
        }
    }
handleReg =event=> {
event.preventDefault();
window.location.href="/register";

}
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.userName);
        console.log(this.state.userName === '');
        console.log("hai how are u");

        // if (this.state.userName === "") {
            this.setState({ open: true });
       // }
        // toast("userName cannot be empty", {
        //     position: toast.POSITION.BOTTOM_CENTER
        // });

    };


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
                        <TextField className="margin" label="password"
                            onChange={(event, newValue) => this.setState({ password: newValue })}
                        />
                        <br></br>

                        {/* <button type="submit"  id="signinButton" onClick={this.registrationclick}>
                   <b>REGISTRATION</b>
                 </button> */}
                        <Button color="primary" className="button" onClick={this.handleSubmit} > SUBMIT</Button>
                        <Button color="primary" className="button" onClick={this.handleReg} > REGISTER</Button>
                    </center>
                </div>
            </form>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={this.state.open}
                autoHideDuration={60}

                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">
                    Please fill the fields</span>}
                    


            />
        </div>

    );
}
}
export default Loginpage;






