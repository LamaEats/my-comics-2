import React from 'react';
import { Link } from 'react-router-dom'


export default function Logo() {
    return (
        <div className="navbar-header">
            <Link to="/" className="navbar-brand">MARVEL</Link>
        </div>
    )
}