import React from "react"
import {Link} from "react-router-dom"

function Countries() {
    return (
        <Link className="nav-item nav-link" to="/countries">List Country</Link>
    );
}

export default Countries;