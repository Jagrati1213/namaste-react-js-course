// **** IMPORT THE REACT ****//
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';


// **** CREATE APP LAYOUT ****//
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

// **** RENDERING APP INTO DOM ****//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);