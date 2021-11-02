import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
 
import * as pages from './page'
 

//khai bao trang
export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={pages.HomePage} />
            </Switch>
        </Router>
    );
}
