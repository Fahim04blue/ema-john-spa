import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div className='header'>
           <img src={logo} alt='' /> 
           <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
                <a href="/cart"><FontAwesomeIcon icon={faShoppingCart} /> 0</a>
            </nav>
        </div>
    );
};

export default Header;