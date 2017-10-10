import React from 'react';
import ReactDOM from 'react-dom';
import MarvelApp from './wrappers/marvel-app';
import Request from 'axios';

Request.defaults = {
    baseURL: 'https://gateway.marvel.com',
    data: {
        apikey: '0d2e045bdccd5826dcfcaf37d05f46be',
        ts: new Date().getTime()
    }
};

ReactDOM.render(<MarvelApp/>, document.querySelector('.app_root'));