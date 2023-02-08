import React from 'react'
import whyUsImg from '../images/whyUs-image-alt.jpg'

const WhyUs = () => {
  return (
    <div className='whyUs'>
      <div className="whyUs__container">
      <img src={whyUsImg} alt="whyUs-img" />
        <div className="whyUs__overlay">
        </div>
        <div className="whyUs__info">
          <div className="whyUs__text">
            <h1>WHY US</h1>
            <p>Scorpion Tactical Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, repellat illum? Vero corporis vitae omnis quia nisi enim quisquam ipsa animi maiores, doloribus, odit aliquid quos ad fuga nostrum at alias esse maxime unde tenetur incidunt amet! Vero perspiciatis qui accusamus nemo soluta inventore eius expedita nihil, corporis facilis quisquam.</p>
            <br />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit magnam, deleniti ipsam facere, repellendus culpa corrupti maxime, deserunt et repellat consequatur provident quis. Temporibus, quibusdam..</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default WhyUs