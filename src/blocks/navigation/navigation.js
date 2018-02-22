import React from 'react'
import { NavLink } from 'react-router-dom';


const menu = [
    {
        name: 'Комиксы',
        to: '/comics/',
    }, {
        name: 'Персонажи',
        to: '/heroes/',
    }
];

export const Navigation = () => {
    "use strict";
    return (
        <nav className="navigation">
            {menu.map((item, index) => {
                return <NavLink key={index} to={item.to} className={'navigation__item'}>{item.name}</NavLink>
            })}
        </nav>
    )
};