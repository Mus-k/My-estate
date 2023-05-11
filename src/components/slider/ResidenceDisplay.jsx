import React from 'react'
import "./Slider.css";
export const ResidenceDisplay = ({data, index}) => {
    let {image,location,price,detail}=data
  return (
    <>
    
         <div className="cards-slider item-slider " key={index}>
        <img
          src={image}
          alt="cardImage1"
          height="300px"
          width="100%"
        />
    
        <div className="nested-detail">
          <div className="nested-info">
            <h3>{location}</h3>
            <p className="priceCard">$ {price}</p>
          </div>
          <p className="loremCard">{detail}</p>
        </div>
      </div>
    
    </>
   
  )
}
