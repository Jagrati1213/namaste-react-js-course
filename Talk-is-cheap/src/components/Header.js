import React, { useContext } from 'react';
import { LOGO_URL } from "../utils/constants";
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useSelector } from 'react-redux';

const Header = () => {
    const { name } = useContext(AuthContext);
    // subscribing to store
    const cartItem = useSelector((store) => store.cart.item);

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
                    <li><Link to={'/cart'}>
                        Cart - {cartItem.length}
                    </Link></li>
                    <button className='login-btn'>{name}</button>
                </ul>
            </div>
        </header>
    )
}

export default Header;