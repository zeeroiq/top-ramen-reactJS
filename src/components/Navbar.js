import React from "react";
import NavbarPrimary from "./NavbarPrimary";
import NavbarSecorndary from "./NavbarSecondary";
import NavbarSwitch from "./NavbarSwitch";

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top justify-content-between navbar-custom">
            {/* <a className="navbar-brand" href="#">
                <img className="Logo" src="./brand-logo.png"/>
            </a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                aria-expanded="false" aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                <NavbarPrimary /> {/* home and listcountries*/}
                <NavbarSecorndary /> {/* for search */}
                <NavbarSwitch /> {/* router switch */}

            </div>

        </nav>
    );
}

export default Navbar;