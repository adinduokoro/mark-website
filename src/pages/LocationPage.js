import React from 'react'
import img from '../images/location-range.jpg'

import LocationImg from '../images/location-range.jpg'

const LocationPage = () => {
  return (
    <div className='locationPage'>
      <div className="locationPage__container">
        <div className="location__hero">
          <img src={img} />
          <div className="overlay"></div>
          <h1>LOCATION</h1>
        </div>
        
      </div>
    </div>
  )
}

export default LocationPage