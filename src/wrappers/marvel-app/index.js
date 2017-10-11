import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, browserHistory} from 'react-router-dom';
import Header from '../../components/common/header';
import Home from '../../pages/home';


export default class MarvelApp extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Wrapper>
                    <Switch>
                        <Route path="/" component={Home}/>
                    </Switch>
                </Wrapper>
            </Router>
        )
    }
}

const Wrapper = (props) => {
    "use strict";
    return (
        <div className="container wrapper">
            <Header/>
            {props.children}
        </div>
    )
}