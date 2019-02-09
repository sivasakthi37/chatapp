import React, { Component } from 'react';
//import  MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
 import AppBar from '@material-ui/core/AppBar/AppBar';
// import Button from '@material-ui/core/Button';
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import { FormControl } from '@material-ui/core';
import '../App.css';
import Loginpage from '../components/loginPage';
//import { Button } from '@material-ui/core';


class Login extends Component {

    render() {
        return (
            <div>

                <div>
                     <AppBar position="fixed" > <h1 className="center" >.......LOGIN PAGES.......</h1> </AppBar> 

                </div>
                
                
                    <div>
                        <Loginpage props={this.props} />
                    </div>

            </div>
        );
    }
}
export default Login;

