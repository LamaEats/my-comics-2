import React, { Component } from 'react';
import Loader from '../../components/common/loader';
import Request from '../../utils/request';

export default class Home extends Component {

    constructor() {
        super();

        this.state = {
            isLoading: true,
            dataList: []
        }
        console.log('this is Home')
    }

    componentWillMount() {
        this.getData().then(response => {
            if (response.status === 200) {
                this.setState({
                    isLoading: false,
                    dataList: [...response.data.data.results]
                })
            }
        })
    }

    getData() {
        return Request('/v1/public/characters')
    }

    render () {
        if (this.state.isLoading) {
            return <Loader />
        }

        return (
            <ul>
                {this.state.dataList.map((item, index) => {
                    return <li key={index}>{item.name}</li>
                })}
            </ul>
        )
    }
}