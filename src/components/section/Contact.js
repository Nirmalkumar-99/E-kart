import React, { Component } from 'react';
import {Route} from "react-router-dom";
import imga from  "./contact1.png";
import '../css/Contact.css'

const contactMain=()=>{
   
    return <div className="container"> <img src={imga} className="imga" />
     <div class="centered">
         <h1>Contact Us :</h1>
         <h2>E-Mail : E-kartshop@gmail.com</h2>
         <h2>Customer Service : +91 92939 49596</h2>
         <h2>Follow us on Twitter: E-kart@mobileshopping</h2>
         <h2>Follow us on Instagram : E-kartIndia-official</h2>
         </div>
    </div>
}

export default contactMain;