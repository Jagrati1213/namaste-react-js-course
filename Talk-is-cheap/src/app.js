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
import CurrentUserContext from './utils/Context';



// Create Lazy loading
const About = lazy(() => import('./components/About'));

// **** CREATE APP LAYOUT ****//
const AppLayout = () => {

    const [currentUser, setCurrentUser] = useState('jaggu');

    useEffect(() => {
        setCurrentUser('jagrati')
    }, []);

    return (
        <CurrentUserContext.Provider value={{
            currentUser: currentUser,
            setCurrentUser
        }}>
            <div className="app">

                <Header />
                <Outlet />
                <Footer />
            </div >
        </CurrentUserContext.Provider>
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
            }
        ],
        errorElement: <Error />,
    },

])

// **** RENDERING APP INTO DOM ****//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);