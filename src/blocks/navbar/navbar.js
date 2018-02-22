import React from 'react'

import { Logo } from '../logo/logo';
import { Navigation } from '../navigation/navigation';

export const Navbar = () => {
    "use strict";
    return (
        <div className="navbar">
            <div className="navbar__inner">
                <Logo/>
                <Navigation/>
            </div>
        </div>
    )
}