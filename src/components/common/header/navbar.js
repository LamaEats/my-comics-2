import React, { Component } from 'react';
import Logo from './logo'
import { NavLink } from 'react-router-dom';


export default class NavBar extends Component {
    render() {
        return (
            <nav className="nav navbar navbar-inverse">
                <Logo/>
                <ul className="nav navbar-nav">
                    <li>
                        <NavLink to="/comics">Comics</NavLink>
                    </li>
                    <li>
                        <NavLink to="/heroes">Heroes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/series">Series</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}