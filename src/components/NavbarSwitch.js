import React from "react"
import { Route, Switch, Redirect } from  "react-router-dom";
import ListCountries from "./ListCountries";

function NavbarSwitch() {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/" />
                {/* <Home /> */}
            </Route>
            <Route path="/countries">
                <ListCountries />
            </Route>
        </Switch>
    );
}

export default NavbarSwitch;