import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar/AppBar';
import RegisterPage from '../components/registerPage';

class reg extends Component {

    render() {

        return (
            <div>

                <div>
                    <AppBar position="fixed" > <h1 className="center" >.......REGISTER PAGES.......</h1> </AppBar>

                </div>
               
                <div>
                    <RegisterPage />
                    </div>
                    


            </div>

        )

    }

}
export default reg;

