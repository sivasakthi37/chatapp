import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Forgetpassword from './pages/forgetpassword'
import Login from "./pages/Login";
import './App.css';
 import DashBoard from './pages/dashBoard';
import Reg from './pages/register';
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
             {/* <h2 class="center" >Hai welcome to Home page...</h2>  */}           
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
