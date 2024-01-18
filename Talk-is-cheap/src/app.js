// **** IMPORT THE REACT ****//
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
// import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';

// Create Lazy loading
const About = lazy(() => import('/components/About'));

// **** CREATE APP LAYOUT ****//
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

// **** CREATE CONFIGURATION FOR ROUTER **** //
const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
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
        ]
    },

])
// **** RENDERING APP INTO DOM ****//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);