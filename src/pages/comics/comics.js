import React from 'react';
import { connect } from 'react-redux';
import { ComicsItem } from '../../components/comics-item/comics-item';
import { Loader } from '../../components/loader/loader'
import Pager from '../../components/pager/pager';

import {
    submitRequest
} from '../../storage/actions'


class Comics extends React.Component {

    componentWillMount () {
        const { dispatch } = this.props;
        dispatch(submitRequest(this.constructor.name.toLowerCase()));
    }

    componentWillUpdate (nextProps) {
        if (nextProps.page === this.props.page) {
            return false;
        }
        const { dispatch } = this.props;
        dispatch(submitRequest(this.constructor.name.toLowerCase()))
    }

    render () {
        const { isGetting, items, pagerData, match } = this.props;

        return (
            <div className="comics">
                {!isGetting && <Loader/>}
                {isGetting && items && items.map((item, index) => {
                    return <ComicsItem {...item} key={index}/>
                })}
                {isGetting && <Pager {...pagerData} match={match} step={5} />}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    let { page } = props.match.params;
    if (!page) page = 1;
    return {
        ...state,
        page
    }
};

export default connect(mapStateToProps)(Comics)