import React, { Component } from 'react'
import { fetchImage } from '../../storage/actions'
import { connect } from 'react-redux';

class Cover extends Component {

    componentWillMount () {
        const { dispatch, path, ext } = this.props;

        dispatch(fetchImage(path, ext))

        console.log(this.props)
    }

    render () {
        return null;
    }
}

export default connect()(Cover)