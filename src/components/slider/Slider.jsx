import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.css";
//import {default as img1} from '../../assets/images/cardImage8.png';
import data from "../../utils/Data";
export const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2000, min: 1000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1000, min: 769 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 769, min: 664 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 1,
    },
  };

  const val = data.join(" ");
  return (
    <section className="carousel">
      <h1 className="slider-title">Latest residences</h1>
      <Carousel responsive={responsive}>
        {data.map((data) => (
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
                <p className="price-card">{data.price}</p>
              </div>
              <p className="loremCard">{data.detail}</p>
            </div>
          </div>
        ))}
      </Carousel>
      ;
    </section>
  );
};
