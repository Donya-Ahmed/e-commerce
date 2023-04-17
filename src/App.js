import React, { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './components/home/Home.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'
import Products from './components/products/Products.jsx'
import Details from './components/details/Details.jsx'
import Cart from './components/cart/Cart.jsx'
import NotFound from './components/notFound/NotFound.jsx'
 import Protected from './components/protected/Protected.jsx'
import jwtDecode from 'jwt-decode'
import { CartContextProvider } from './context/CartStore.js'
import  { Toaster } from 'react-hot-toast';


export default function App() {
  let[user,setUser]=useState(null)
  function userDecode() {
    const token=localStorage.getItem('token')
    const decode=jwtDecode(token)
    setUser(decode)
    console.log(user)

    
  }
  useEffect(()=>{
    if(localStorage.getItem('token'))
    {
      userDecode()
    }
  },[])
  const routes=createBrowserRouter([
    {path:'',element:<Layout userData={user} setUser={setUser}></Layout>,children:[
      {index:true,element:<Home></Home>},
      {path:'cart',element:<Protected><Cart></Cart></Protected>},
      {path:'products',element:<Products></Products>},
      {path:'register',element:<Register></Register>},
      {path:'login',element:<Login userLogin={userDecode}></Login>},
      {path:'products/:id',element:<Details></Details>},
      {path:'',element:<NotFound></NotFound>},

    ]}
  ])
  return (
    <CartContextProvider>
       <Toaster />
       <RouterProvider router={routes}></RouterProvider>
    </CartContextProvider>
      
  
  )
}
