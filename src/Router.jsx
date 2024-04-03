import React, { Children } from 'react'

import Layout from './Routing/Layout'
import Home from './Routing/Home'
import Event from './Routing/Event'
import Course from './Routing/Course'
import Placement from './Routing/Placement'
import Contact from './Routing/Contact'
import ErrorPage from './Routing/ErrorPage'

import {BrowserRouter,createBrowserRouter,Route,RouterProvider,Routes } from 'react-router-dom'
// const Router = () => {
//   return (
//     <>
        /*{ <BrowserRouter>
            <Routes>
                <>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/event' element={<Event/>}/>
                    <Route path='/course' element={<Course/>}/>
                    <Route path='/placement' element={<Placement/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='*' element={<ErrorPage/>}/>
                </Route>
                </>
            </Routes>
        
        </BrowserRouter> }*/
//     </>
//   )
//  }

//  export default Router

// ***v6 */
const routing=createBrowserRouter([
{
  path:"/",
  element:<Layout/>,
  children:[
    {
      index:true,
      element:<Home/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/event",
      element:<Event/>
    },
    {
      path:"/placement",
      element:<Placement/>
    },
    {
      path:"/course",
      element:<Course/>
    },
    {
      path:"*",
      element:<ErrorPage/>
    }

  ]
}
])
const Router = () => {
  return (
    <>
      <RouterProvider router={routing}/>
    </>
  )
}

 export default Router