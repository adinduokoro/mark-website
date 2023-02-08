import '../styles.scss'
import React from 'react'
import { Outlet, Route } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'


const Layout = () => {
  return (
    <div className="App">
      <div className="app__container">
        <TopBar />
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout