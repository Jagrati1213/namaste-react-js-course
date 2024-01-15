import React, { useState } from 'react';
import { LOGO_URL } from "../utils/constants";
import { Link } from 'react-router-dom';

const Header = () => {
    const [btnName, setBtnName] = useState('Login');
    console.log('Run whenever state changed');
    return (
        <header className='header'>
            <div className="logo_container">
                <img src={LOGO_URL} alt="food-logo" className='logo' />
            </div>
            <div className="nav_links_container">
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li> <Link to={'/about'}>About</Link></li>
                    <li> <Link to={'/contact'}>Contact</Link></li>
                    <li>Cart</li>
                    <button className='login-btn' onClick={() => btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')}>{btnName}</button>
                </ul>
            </div>
        </header>
    )
}

export default Header;