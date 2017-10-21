import React, { Component } from 'react';
import Loader from '../../components/common/loader';
import Request from '../../utils/request';
import Pager from '../../components/common/pager'
import { parseQuery } from '../../helpers'

export default class Comics extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            dataList: [],
            page: 1
        };
    }
    componentWillReceiveProps(props) {
        let searchChanged = this.props.location.search !== props.location.search;
        
        if (searchChanged) {
            let query = parseQuery(this.props.location.search);
            
            this.setState({
                page: query.page,
                isLoading: true
            })
    
            this.getData().then(response => {
                if (response.status === 200) {
                    this.setState({
                        isLoading: false,
                        dataList: [...response.data.data.results],
                        pagination: {
                            limit: response.data.data.limit,
                            offset: response.data.data.offset,
                            total: response.data.data.total,
                        }
                    })
                }
            })
        }
    }

    componentWillMount() {
        this.getData().then(response => {
            if (response.status === 200) {
                console.log(response.data.data)
                this.setState({
                    isLoading: false,
                    dataList: [...response.data.data.results],
                    pagination: {
                        limit: response.data.data.limit,
                        offset: response.data.data.offset,
                        total: response.data.data.total,
                    }
                })
            }
        })
    }

    getData() {
        console.log(this.state.page)
        let offset = this.state.pagination ? this.state.pagination.limit * this.state.page : 0;
        return Request('/v1/public/comics', {
            params: {
                offset: offset
            }
        })
    }

    render () {
        if (this.state.isLoading) {
            return <Loader />
        }

        return (
            <div>
                <ul>
                    {this.state.dataList.map((item, index) => {
                        return <li key={index}>{item.title}</li>
                    })}
                </ul>
                <Pager {...this.state.pagination} step={5} />
            </div>
        )
    }
}