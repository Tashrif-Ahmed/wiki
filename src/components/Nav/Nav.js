import {Button} from 'react-bootstrap';
import './Nav.css';

import React from 'react';

const Nav = () => {
    return (
        <div >
            <nav className="nav">
                <h1><a href="/search">Search</a></h1>
                <h1><a href="/post">Post</a></h1>
            </nav>
        </div>
    );
};

export default Nav;