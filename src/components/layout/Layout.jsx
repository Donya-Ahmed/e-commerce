import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Layout({userData,setUser}) {
  const navigate=useNavigate()
  function logOut() {
    localStorage.removeItem('token')
    setUser(null)
    navigate('/')
  }
  return (
    <div>
        <Navbar userD={userData} logOut={logOut}></Navbar>
        <div className="container">
            <Outlet></Outlet>
        </div>
      
    </div>
  )
}
