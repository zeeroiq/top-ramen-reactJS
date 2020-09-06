import React from "react"
import Home from "./Home"
import ListCountries from "./ListCountries"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom"

function Header() {

    return (
        <Router>

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

                    <div className="navbar-nav mr-auto">
                        <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link" to="/countries">List Country</Link>
                    </div>

                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search by Brand" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/"/>
                            {/* <Home /> */}
                        </Route>
                        <Route path="/countries">
                            <ListCountries />
                        </Route>
                    </Switch>
                </div>

            </nav>

        </Router>
    );
}


export default Header;