// **** IMPORT THE REACT ****//
import React, { Suspense, createContext, lazy, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
// import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import { AuthContext } from './context/AuthContext';
import { Provider } from 'react-redux';
import { appStore } from './redux-store/store';
import Cart from './components/Cart';
// Create Lazy loading
const About = lazy(() => import('./components/About'));

// **** CREATE APP LAYOUT ****//
const AppLayout = () => {
    const [name, setName] = useState('jagrati');
    return (
        <Provider store={appStore}>
            <AuthContext.Provider value={{
                name,
                setName
            }}>
                <div className="app">
                    <Header />
                    <Outlet />
                    <Footer />
                </div >
            </AuthContext.Provider>
        </Provider>


    )
}

// **** CREATE CONFIGURATION FOR ROUTER **** //
const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <Suspense fallback={<h1>Loading</h1>}><About /></Suspense>
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/cart',
                element: <Cart />

            }
        ],
        errorElement: <Error />,
    },

])

// **** RENDERING APP INTO DOM ****//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);