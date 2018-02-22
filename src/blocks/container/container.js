import React from 'react';
import { Route } from 'react-router-dom'

import Comics from '../../pages/comics/comics';

export const Container = () => {
    "use strict";

    return (
        <div className="container">
            <Route path='/' exact render={() => 'Index'} />
            <Route path='/comics/' strict exact component={Comics}/>
            <Route path='/comics/:page/' strict component={Comics}/>
        </div>
    )
};