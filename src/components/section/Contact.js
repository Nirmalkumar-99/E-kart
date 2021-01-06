import React, { Component } from 'react';
import {Route} from "react-router-dom";
import imga from  "./contact.jpg";
import '../css/Contact.css'

const contactMain=()=>{
    return <img src={imga} className="imga" />
}

export default contactMain;