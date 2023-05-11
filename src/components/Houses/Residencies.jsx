import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "./Residencies.css";
import data from "../../utils/Data";
import { sliderSettings } from "../../utils/common";

function Residencies() {
  return (
    <section className="r-wrapper">
      <div className=" r-container">
        <div className="r-head">
          <h1>Latest residences</h1>
        </div>

        <Swiper {...sliderSettings}>
            <SliderButtons/>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className=" r-card">
                <img src={card.image} alt="home" />
                <span className="t r-price">
                  <span className={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>

                <span className="lat-title">{card.name} </span>
                <span className="lat-detail">{card.detail} </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Residencies;

const SliderButtons=()=>{
    const swiper =useSwiper()

    return (
        <div className="r-buttons">
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}


