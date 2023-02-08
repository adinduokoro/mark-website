import React from 'react'
import img from '../images/mark-hero-alt.jpg'
import BookNowBtn from './BookNowBtn'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero__image">
        <img src={img} alt="" />
      </div>
      <div className="hero__info">
        <h1>FIREARMS TRAINING</h1>
        <p>We offer classes from complete beginners to the highest level of military and law enforcement </p>
        <BookNowBtn />
      </div>
    </div>
  )
}

export default Hero