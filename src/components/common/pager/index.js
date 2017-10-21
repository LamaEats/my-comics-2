import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Pager = (props) => {
    const { limit, offset, total, step} = props;
    
    let currentPage = (offset / limit) + 1;
    let maxPage = Math.ceil(total / limit);
    let from = currentPage - step < 1 ? 1 : currentPage - step;
    let to = currentPage + step > maxPage ? maxPage : currentPage + step;
    let rangeArray = range(from, to);
    
    return (
        <ul className="pagination">
            {rangeArray.map((page, index) => {
                return <Page page={page} key={index} isCurrent={page === currentPage}/>
            })}
        </ul>
    )
};

const Page = (props) => (
    <li className={`${props.isCurrent ? 'active' : ''}`}>
        <Link to={`?page=${props.page}`}>
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
