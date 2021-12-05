import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'
const Header = () => {
    return (
        <div className="Header">
            <img src={logo} alt="" />
            <nav>
                <a href="Shop">Shop</a>
                <a href="Order Review">Order Review</a>
                <a href="Manage inventory">Manage inventory</a>
                
                </nav>
        </div>
    );
};

export default Header;