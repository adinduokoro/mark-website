import React from 'react'
import BookNowBtn from './BookNowBtn'

const Hero = ( {title , text, image} ) => {
  return (
    <div className='hero'>
      <div className="hero__image">
        <img src={image} alt="" />
      </div>
      <div className="hero__info">
        <h1>{title}</h1>
        <p>{text}</p>
        <BookNowBtn />
      </div>
    </div>
  )
}

export default Hero