import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/login/Login';
import Browse from './components/browse/Browse';
import { Provider } from 'react-redux';
import { appStore } from './utils/redux/store';
import { MovieDetails } from './components/movieDetails/MovieDetails';
import { MainPage } from './components/browse/MainPage';
// create routing for web
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/browse',
        element: <Browse />,
        children: [
          {
            path: '/browse',
            element: <MainPage />
          },
          {
            path: '/browse/:movie_id/:movie_name',
            element: <MovieDetails />
          },
        ]
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
