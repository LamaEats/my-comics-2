import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Heroes from '../../pages/heroes';
import Comics from '../../pages/comics';
import Series from '../../pages/series';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="container">
                <Route path="/heroes" component={Heroes}/>
                <Route path="/comics" component={Comics}/>
                <Route path="/series" component={Series}/>
                {this.props.children}
            </div>
        )
    }
}