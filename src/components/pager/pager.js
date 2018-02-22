import React from 'react';
import { Link } from 'react-router-dom';
import {
    changePage
} from '../../storage/actions'

const Pager = (props) => {
    console.log(props)
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
        <ul className="pagination">
            {rangeArray.map((page, index) => {
                return <Page page={page} path={relPath(page)} key={index} isCurrent={page === currentPage}/>
            })}
        </ul>
    )
};

const Page = (props) => (
    <li className={`${props.isCurrent ? 'active' : ''}`}>
        <Link to={props.path}>
            {props.page}
        </Link>
    </li>
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