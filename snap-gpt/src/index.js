import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/login/Login';
import Browse from './components/browse/Browse';
import { Provider } from 'react-redux'
import { appStore } from './utils/redux/store';
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
        element: <Browse />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
      <Provider store={appStore}>
        <App />
      </Provider>
    </RouterProvider>
  </React.StrictMode>
);
reportWebVitals();
