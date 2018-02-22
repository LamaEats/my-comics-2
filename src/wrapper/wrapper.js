import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import storage from '../storage/storage';

import Header from '../blocks/header/header';
import { Navbar } from '../blocks/navbar/navbar'
import { Container } from '../blocks/container/container';

const store = storage();

export const Wrapper = () => {
    return (
        <Router>
            <Provider store={store}>
                <div className="wrapper">
                    <Header/>
                    <Navbar/>
                    <Container/>
                </div>
            </Provider>
        </Router>
    )
};