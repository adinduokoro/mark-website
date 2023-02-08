import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaMobileAlt } from 'react-icons/fa'
import MailIcon from '@mui/icons-material/Mail';




const TopBar = () => {
  return (
    <div className='top__bar'>
      <div className="contact__container">
        <div className="phone">
          <FaMobileAlt />
          <p>+1 444-444-4444</p>
        </div>
        <div className="email">
          <MailIcon />
          <p>guntraining@gmail.com</p>
        </div>
      </div>
      <div className="social__container">
        <a href="#">
          <i class="fab fa-facebook-f icon"></i>
        </a>
      </div>
    </div>
  )
}

export default TopBar