import React, { Component } from 'react';
import {Route} from "react-router-dom";
import imga1 from  "./home1.webp";
import imga2 from  "./home2.jpg";
import imga3 from  "./home3.jpg";


import '../css/Home.css'
const homeMain=()=>{
    return <div><h1>Welcome to E-cart, A best mobile shopping site... </h1>
    
    <img src={imga1} className="imga1" />
    <img src={imga2} className="imga2" />
    <img src={imga3} className="imga3" />
    </div>
}
export default homeMain;