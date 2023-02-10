import React from 'react'
import img from '../images/training-image-alt.jpg'
import { packages } from '../data/Data'
import BookNowBtn from '../components/BookNowBtn'
import Info from '../components/Info.js'


const TrainingPage = () => {
  return (
    <div className='trainingPage'>
      <div className="trainingPage__container">
        <div className="training__hero">
          <img src={img} />
          <div className="overlay"></div>
          <h1>CURRENT COURSES</h1>
        </div>
        <div className='packages'>
          {packages.map((item, index) => {
            return(
            <div className="packages__info" key={index}>
              <div className="package__title">
                <h1>{item.title}</h1>
                <p>{item.price}</p>
              </div>
              <div className="package__text">
                <p>{item.text}</p>
              </div>
            </div>
            )
          })}
        </div>
        <div className='btn'>
          <BookNowBtn />
        </div>
        <Info />
      </div>
    </div>
  )
}

export default TrainingPage