import React from "react";
import "./Dream.css";
import { default as triangle } from "../../assets/images/triangle.jpg";
import { default as radius } from "../../assets/images/square.jpg";
import { default as initial } from "../../assets/images/rectangle.jpg";
import { default as initialImg } from "../../assets/images/hex.jpg";
export const Dream = () => {
  return (
    <section className="dream-section">
        <div className="dream-container">

       
      <div className="dream-wrapper">
        <h2 className="dr-title">Dream of a modern home</h2>
        <p className="dream-texts">
          Pellentesque lorem dolor, malesuada eget tortor vitae, tristique
          lacinia lectus. Pellentesque sed accumsan risus, id aliquam nulla.
          Integer lorem risus, feugiat at mauris malesuada, accumsan
          pellentesque ipsum. Nunc dapibus, libero ut pulvinar accumsan, tortor
          nisl iaculis ligula. Curabitur finibus dolor vel lectus pretium
          interdum a eget ante.
        </p>

        <div className="shape">
          <div className="triangle">
            <img src={triangle} alt="triangle" />
          </div>
          <div className="circle">
            <img src={radius} alt="triangle" />
          </div>
          <div className="square">
            <img src={initial} alt="triangle" />
          </div>
          <div className="square-op">
            <img src={initialImg} alt="triangle" />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
