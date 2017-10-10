import React from 'react';


export default () => (
    <div className="loader">
        <div className="loader__wrapper">
            <svg className="loader__circle"viewBox="25 25 50 50" >
                <circle className="loader__circle-path" cx="50" cy="50" r="20" fill="none" stroke="#70c542" strokeWidth="2" />
            </svg>
        </div>
    </div>
)