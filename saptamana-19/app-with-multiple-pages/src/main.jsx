import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/root.jsx';
import ContactPage from './pages/contact/ContactPage.jsx';
import HomePage from './pages/home/HomePage.jsx';
import ErrorPage from './pages/error/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
  // {
  //   path: "/admin",
  //   element: <Root />,
  //   children: [
  //     {
  //       path: "/",
  //       element: <HomePage />,
  //     },
  //     {
  //       path: "/contact",
  //       element: <ContactPage />,
  //     },
  //   ],
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
