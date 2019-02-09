import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar/AppBar';
import '../App.css';
import Button from '@material-ui/core/Button';

import DashPage from '../components/dashboardpage';


class DashBoard extends Component {
handlelogout = event=>{
    event.preventDefault();
window.location.href="/Login"

}


render(){
    


   return (
<div>
<AppBar > <h1 align="center"> WELCOME TO CHATAPP  </h1> <Button  className="grow"  color="inherit" onClick={this.handlelogout} >LOGOUT</Button></AppBar>

<form>

<DashPage  props={this.props} />

</form>



</div>



   ) 

}

}
export default DashBoard;