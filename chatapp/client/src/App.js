import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./pages/Login";

 import './App.css';
import Reg from './pages/register';
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div >
            <Route path="/Login" component={Login} />
            <Route path="/register" component={Reg} />
             {/* <h2 class="center" >Hai welcome to Home page...</h2>  */}
           

          </div>
        </Router>

      </div>
    );
  }
}

export default App;
