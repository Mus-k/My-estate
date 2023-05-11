import React from 'react'
import "./Slider.css";
export const ResidenceDisplay = ({data}) => {
  return (
    
    <div className="cards-slider item-slider " key={data.id}>
    <img
      src={data.image}
      alt="cardImage1"
      height="300px"
      width="100%"
    />

    <div className="nested-detail">
      <div className="nested-info">
        <h3>{data.location}</h3>
        <p className="priceCard">$ {data.price}</p>
      </div>
      <p className="loremCard">{data.detail}</p>
    </div>
  </div>
  )
}
