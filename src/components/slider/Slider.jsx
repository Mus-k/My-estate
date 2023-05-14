import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.css";
//import {default as img1} from '../../assets/images/cardImage8.png';
import data from "../../utils/Data";
import { ResidenceDisplay } from "./ResidenceDisplay";
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

  return (
    <section className="carousel" id='latest'>
      <h1 className="slider-title">Latest residences</h1>
      <Carousel responsive={responsive}>
        {data.map((data, index) => {
          return <ResidenceDisplay key={index} data={data}/>;
        })}
      </Carousel>
    </section>
  );
};
