import React from "react"
import {Link} from "react-router-dom"

function Home() {
    return (
        <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
    );
}

export default Home;