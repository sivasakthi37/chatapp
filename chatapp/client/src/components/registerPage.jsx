import React, { Component } from 'react';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            mailid: '',
            password: '',
            open: false,
            up:false,
        }
    }
   
    handleRegister = event => {
        event.preventDefault();

        // console.log("this.state.firstname "  );
        // console.log(this.state.firstname );
        
        // console.log(this.state.firstname==='' );
        if(this.state.firstname === '') {
            this.setState({ open: true });
        }
        // console.log("this.state.lastname");
        // console.log(this.state.lastname);
        // console.log(this.state.lastname==='');
        
       else   if (this.state.lastname === '') {
            this.setState({ open: true });
        }
        // console.log("this.state.mailid");
        // console.log(this.state.mailid);
        // console.log(this.state.mailid==='');
        
         else if (this.state.mailid === '') {
            this.setState({ open: true });
        }
        // console.log("this.state.password");
        // console.log(this.state.password);
        // console.log(this.state.password==='');
        
       else if (this.state.password === '') {
            this.setState({ open: true });
        }
        else{

            window.location.href = "/Login";
          
        }
    }
    render() {
        return (
            <div>
                <center>
                    <form>  < TextField label="Firstname"
                        onChange={(event, newValue) => this.setState({ firstname: newValue })}
                    />  </form>
                    <br></br>
                    < TextField label="Lastname"
                        onChange={(event, newValue) => this.setState({ lastname: newValue })}
                    />
                    <br></br>
                    < TextField label="Email"
                        onChange={(event, newValue) => this.setState({ mailid: newValue })}
                    />
                    <br></br>
                    < TextField label="Password" type= "password"
                        onChange={(event, newValue) => this.setState({ password: newValue })}
                    /><br></br>
                    
                    <br></br>
                    <Button variant="contained" color="primary" className="button" onClick={this.handleReset} >Reset</Button>
                    <Button variant="contained" color="primary" className="button" onClick={this.handleRegister} > REGISTER</Button>

                </center>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}

                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">
                        PLZ ENTER PROPER INPUT</span>}

                />
            </div>
        )

    }

}
export default RegisterPage;