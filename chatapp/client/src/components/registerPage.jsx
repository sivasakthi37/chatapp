import React, { Component } from 'react';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            mailid: "",
            password: "",
            open: false,
        }
    }
handleRegister=event=>{

        event.preventDefault();
    
    


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
                    < TextField label="Password"
                        onChange={(event, newValue) => this.setState({ mailid: newValue })}
                    /><br></br>
                    <Button color="primary" className="button" onClick={this.handleReset} >Reset</Button>
                    <Button color="primary" className="button" onClick={this.handleRegister} > REGISTER</Button>

                </center>
            </div>
        )

    }

}
export default RegisterPage;