import React, { useContext, useEffect, useState } from 'react';
import { LOGO_URL } from "../utils/constants";
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
    const { name, setName } = useContext(AuthContext);

    return (
        <header className='header'>
            <div className="logo_container">
                <img src={LOGO_URL} alt="food-logo" className='logo' />
            </div>
            <div className="nav_links_container">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li> <Link to={'/about'}>About</Link></li>
                    <li> <Link to={'/contact'}>Contact</Link></li>
                    <button className='login-btn'>{name}</button>
                </ul>
            </div>
        </header>
    )
}

export default Header;