import React, { Component } from 'react';
import {Route} from "react-router-dom";
import im from "./login3.png";
import '../css/Login.css'
class Signin extends Component
{
    render(){
        return(
            <div className="container">
                <img src={im} className="im" />
              <div className="centered">
                  <h1>Login page</h1>
                  <p>&nbsp;</p>
                <p>Enter your mail id:</p>
                <input type="text" />
                <p>Enter your password:</p>
                <input type="password" />
                <p>&nbsp;</p>
                 <input type="submit" value="Login"/>
                </div>
            </div>
        );
}
}
export default Signin;