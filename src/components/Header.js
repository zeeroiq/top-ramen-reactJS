import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";


function Header() {

    return (
        <Router>
            <Navbar />
        </Router>
    );
}


export default Header;