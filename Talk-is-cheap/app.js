// **** IMPORT THE REACT ****//
import React from 'react';
import ReactDOM from 'react-dom/client';
// import the data from another js
import reslist from './reslist';


// **** CREATE APP LAYOUT ****//

const HeaderComponent = () => {
    return (
        <header className='header'>
            <div className="logo_container">
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2" alt="food-logo" className='logo' />
            </div>
            <div className="nav_links_container">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </header>
    )
}

const ResCardComponent = ({ data }) => {

    // object destructuring
    const { avgRating, name, cuisines, cloudinaryImageId, sla } = data?.info;

    return (
        <div className='res-card'>
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="res-logo" className='res-logo' />
            <h2>{name}</h2>
            <p>{cuisines.join(', ')}</p>
            <h4>{avgRating} ratings | {sla.deliveryTime} minutes</h4>
        </div>
    )
}

const BodyContainer = () => {
    return (
        <div className="body">
            <div className="search-container">
                <input type="search" name="food-search" id="search" placeholder='search your favorite meal...' />
                <button type='submit'>search</button>
            </div>
            <div className="res-container">
                {
                    reslist.map((item) => {
                        return (
                            <ResCardComponent data={item} key={item?.info.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

const FooterComponent = () => {
    return (
        <div className="footer">
            <ul>
                <li>copyright</li>
                <li>about</li>
                <li>contact us</li>
                <li>address</li>
            </ul>
            <ul>
                <li>copyright</li>
                <li>about</li>
                <li>contact us</li>
                <li>address</li>
            </ul>
            <ul>
                <li>copyright</li>
                <li>about</li>
                <li>contact us</li>
                <li>address</li>
            </ul>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <HeaderComponent />
            <BodyContainer />
            <FooterComponent />
        </div>
    )
}

// **** RENDERING APP INTO DOM ****//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);