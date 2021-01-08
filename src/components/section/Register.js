import React, { Component } from 'react';
import {Route} from "react-router-dom";
import im from "./register1.jpg";
import '../css/Login.css'
class Signup extends Component
{
    render(){
        return(
            <div className="container">
                <img src={im} className="im" />
              <div className="centered">
                  <h1>Registration Page</h1>
                  <p>&nbsp;</p>
                  <p>Enter your name :</p>
                  <input type="text" />
                <p>Enter your mail id:</p>
                <input type="text" />
                <p>Enter your password:</p>
                <input type="password" />
                <p>Confirm your password:</p>
                <input type="password" />
                <p>Enter your Mobile Number :</p>
                  <input type="number" /><br></br>
                  <p>&nbsp;</p>
                 <input type="submit" value="Register"/>

                </div>
            </div>
        );
}
}
export default Signup;