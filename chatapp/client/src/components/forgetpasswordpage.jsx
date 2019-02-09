import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import '../App.css';

class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        }
    }
    handlesubmit = event => {
        event.defaultprevent();
        if (this.state.email === '') {

            this.setState({ open: true });
        }
        else {


        }


    }
    handleChange = name => event => {

        this.setState({ [name]: event.target.value });
    }
    render() {
        return (
            <div>
                <form align="center">
                    <div >
                        < TextField label="Email"
                            onChange={this.handleChange('email')}
                        />
                    </div>
                    <div>
                        <Button id="forgetsubmit" variant="contained" color="primary" onclick={this.handlesubmit} >submit</Button>
                    </div>
                </form>
            </div>

        )

    }
}
export default ForgetPassword;