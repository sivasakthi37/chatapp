import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Resetpage from '../components/reSetPage';
import '../App.css';
class Reset extends Component {

    render() {
        return (
            <div>
                <div>
                    <AppBar position="fixed" > <h1 className="center" >.......Reset Page.......</h1> </AppBar>

                </div>

                <div>
                     <Resetpage props={this.props} /> 

                </div>

            </div>
        );
    }
}
export default Reset;