import React from "react"
import Home from "./Home";
import Countries from "./Countries"

function NavbarPrimary() {

    return (
        <div className="navbar-nav mr-auto">
            <Home />
            <Countries />
        </div>
    );
}

export default NavbarPrimary;