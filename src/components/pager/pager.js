import React from 'react';
import { Link } from 'react-router-dom';
import {
    changePage
} from '../../storage/actions'

const Pager = (props) => {
    const { count, offset, total, step, match: { path } } = props;
    const currentPage = (offset / count) + 1;
    const maxPage = Math.ceil(total / count);
    const from = currentPage - step < 1 ? 1 : currentPage - step;
    const to = currentPage + step > maxPage ? maxPage : currentPage + step;
    const rangeArray = range(from, to);
    const relPath = (page) => {
        let prePath;

        if (path.indexOf(':page') > -1) {
            prePath = path.replace(':page', page)
        } else {
            prePath = `${path}${page}/`
        }

        return prePath
    };

    return (
        <div className="pagination">
            <Link
                to={from > 1 ? relPath(from - 1) : ''}
                className={`pagination__item pagination__item_prev${currentPage > 1 ? '' : ' disabled'}`}
            >
                <i className="glyphicon glyphicon-chevron-left" />
            </Link>
            {rangeArray.map((page, index) => {
                return <Page page={page} path={relPath(page)} key={index} isCurrent={page === currentPage}/>
            })}
            <Link
              to={to < maxPage ? relPath(to + 1) : ''}
              className={`pagination__item pagination__item_next${currentPage < maxPage ? '' : ' disabled'}`}
            >
                <i className="glyphicon glyphicon-chevron-right" />
            </Link>
        </div>
    )
};

const Page = (props) => (
    <Link to={props.path} className={`pagination__item${props.isCurrent ? ' active' : ''}`}>
        {props.page}
    </Link>
);

const range = (from, to) => {
    let array = [];
    let i = from;

    do {
        array.push(i);
        i++
    } while (i <= to);

    return array;
};

export default Pager;