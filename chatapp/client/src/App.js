import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Forgetpassword from './pages/forgetpassword'
import Login from "./pages/Login";
import './App.css';

 import DashBoard from './pages/dashBoard';
 import Reset from '../src/pages/reSet'
import Reg from './pages/register';
// import io from 'socket.io-client';
// const socket = io.connect('http://localhost:4000');


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div >
            <Route path="/Login" component={Login} />
            <Route path="/register" component={Reg} />
            <Route path="/dashBoard" component={DashBoard} />
            <Route path="/forgetpassword" component={Forgetpassword} />
            <Route path="/reset" component={Reset} />
             {/* <h2 class="center" >Hai welcome to Home page...</h2>  */}           
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
