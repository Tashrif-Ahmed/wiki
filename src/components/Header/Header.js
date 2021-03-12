import React from 'react';
import Nav from '../Nav/Nav';
import './Header.css';
import logo from './wiki.svg'


const Header = () => {
    return (
        <div>
            <div className="header-container">
                <a className="logoLink" href="/">
                    {/* <h1>Search</h1> */}
                    <img className="logo" src={logo} alt="" />
                    {/* <h1>Here</h1> */}
                </a>
            </div>
            <Nav></Nav>
            
        </div>


    );
};

export default Header;