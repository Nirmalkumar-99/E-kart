import React, { Component } from 'react';
import {Route} from "react-router-dom";
import '../css/Login.css'
class Signin extends Component
{
    render(){
        return(
              <div className="mail">
                  <h1>Login page</h1>
                <p>Enter your mail id:</p>
                <input type="text" />
                <p>Enter your password:</p>
                <input type="password" />
                </div>
        );
}
}
export default Signin;