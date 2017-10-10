import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


export default function () {
    return (
        <Router>
            <Switch>
                <Route exact={true} path="/" component={Home}>
                    <Route path="comics" /*component={Comics}*/ render="comics path" />
                    <Route path="heroes" /*component={Heroes}*/ render="heroes path" />
                    <Route path="series" /*component={Series}*/ render="series path" />
                </Route>
            </Switch>
        </Router>
    )
}