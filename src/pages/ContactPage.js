import React from 'react'
import Contact from '../components/Contact'
import Info from '../components/Info'
import "../styles.scss"

const ContactPage = () => {
  return (
    <>
      <div className="contact__page">
        <Contact />
        <Info />

      </div>
    </>
  )
}

export default ContactPage