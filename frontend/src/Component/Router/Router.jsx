import React from 'react'
import {
    createBrowserRouter,
  
  } from "react-router-dom"
import Login from '../../Pages/Login/Login'
import Home from '../../Pages/Home/Home'
import Blog from '../../Pages/Blog/Blog'
import Contact from '../../Pages/Contact/Contact'
import PorductList from '../../Pages/Products/PorductList'
import Services from '../../Pages/Services/Services'
import PageNotFound from '../../Pages/PageNotFound/PageNotFound'
import Layout from '../Layouts/Layout'
import ForgotPasswordForm from '../../Pages/Login/ForgotPasswordForm'
import SignUpForm from '../../Pages/Login/SignUpForm'


    const router = createBrowserRouter([
        {
          // parent route component
          element: <Layout />,
          // child route components
          children: [
            {
              path: "/",
              element: <Home />,
            },
            // other pages....
            {
              path: "/login",
              element: <Login/>,
            },
            {
                path: "/blog",
                element: <Blog/>,
              },
              {
                path: "/contact",
                element: <Contact/>,
              },
              {
                path: "/products",
                element: <PorductList/>,
              },
              {
                path: "/services",
                element: <Services/>,
              },
              {
                path: "/signup",
                element: <SignUpForm/>,
              },
              {
                path: "/forgotpassword",
                element: <ForgotPasswordForm/>,
              },
             
              {
                path: "*",
                element: <PageNotFound/>,
              },
              
          ],
        },
      ]);
 

export default router