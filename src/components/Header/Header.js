import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>This is Header</h1>
            <nav className='navbar-link'>
                <Link to="/">Home</Link>
                <Link to={'/ordersreview'}>OrderReview</Link>
            </nav>
        </div>
    );
};

export default Header;