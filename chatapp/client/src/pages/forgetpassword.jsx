import React, { Component } from 'react';
// import { Button } from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';
 import '../App.css';
import AppBar from '@material-ui/core/AppBar/AppBar';
import ForgetPassword from '../components/forgetpasswordpage';

class Forgetpassword extends Component {
    render() {
        return (
            <div>

                <div>
                     <AppBar position="fixed" > <h1 className="center" >.......Forget Pasword Page.......</h1> </AppBar> 

                </div>
                
                
                    <div>
                        <ForgetPassword props={this.props} />
                    </div>

            </div>
        );
    }



}
export default Forgetpassword;