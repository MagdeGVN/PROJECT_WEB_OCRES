import React, { Component } from "react";
import {Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Parametres from "./pages/Parametres.js";

class Routs extends Component{
    render(){
        return(
            <Routes>
                <Route path="/" exact component={<Home/>}/>
                <Route path="/parametres"  exact component={<Parametres/>}/>
            </Routes>
        );
    }
} 

export default Routs;