import React, { Component } from 'react';

import '../App.css';
//import Button from '@material-ui/core/Button';

import DashPage from '../components/dashboardpage';


class DashBoard extends Component {
    

    render() {



        return (


            <div>
                <DashPage props={this.props} />





            </div>



        )

    }

}
export default DashBoard;