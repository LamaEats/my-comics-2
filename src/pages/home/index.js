import React, { Component } from 'react';
import Loader from '../../components/common/loader';
import Request from 'axios';

export default class Home extends Component {

    constructor() {
        super();

        this.state = {
            isLoading: true
        }
    }

    componentWillMount() {
        this.getData().then(response => {
            console.log(response)
        })
    }

    getData() {
        return Request('/v1/public/characters')
    }
}