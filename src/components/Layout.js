import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import TopBar from './TopBar'

const Layout = () => {
  return (
    <div className='App'>
      <div className="app__container">
        <TopBar />
        <Navbar />
        <Outlet />

      </div>
    </div>
  )
}

export default Layout