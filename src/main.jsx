import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Main';
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses';
import Blog from './Pages/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/courses',
        element : <Courses></Courses>
      },
      {
        path : '/blog',
        element : <Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
