import React from 'react'
import { offers } from '../data/Data'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers__container">
        <h1>What we offer</h1>
        <div className="card__container">
            {offers.map((item, index) => {
              return(
                
                <div className="cards" >
                  <div className="card" key={item.index}>
                    <div className="face face1">
                      <div className="content">
                        <span className="stars"></span>
                        {/* <h2 className="card__text">{item.title}</h2> */}
                        <p className="card__text">{item.text}</p>
                      </div>
                    </div>
                    <div className="face face2">
                      <h2>{item.icon}</h2>
                    </div>
                  </div>
                </div>

              )
            })}

        </div>

      </div>

    </div>
  )
}

export default Offers