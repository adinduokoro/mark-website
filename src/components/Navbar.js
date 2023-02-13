import React from 'react'
import Logo from '../images/scorpion-logo.png'
import { nav } from '../data/Data'
import BookNowBtn from './BookNowBtn.js'
import { Link } from 'react-router-dom'
import { Component } from 'react'

//  dolores?
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={Logo} alt="scorpion" />
        </div>
        <div className="menu__items">
          <ul className='nav__menu'>
            {nav.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.path}>
                    {item.text}
                  </Link>
                </li>
              )
            })}
          </ul>
          <BookNowBtn />
        </div>
      </div>
    </div>
  )
}

export default Navbar