import React from "react";
import "./Modern.css";
import { default as img1 } from "../../assets/images/cardImage1.png";
import { default as img2 } from "../../assets/images/cardImage2.png";
import { default as img3 } from "../../assets/images/cardImage3.png";
export const Modern = () => {
  return (
    <section className="modern">
      <h2 className="modern-title">
        Our Best Estate, <br /> are Modern
      </h2>
      <div className="cards-container">
        <div className="cards item-1 ">
          <div className="img-div">
            <img src={img1} alt="cardImage1" height="400px" />
          </div>
          <div className="nested-div-1">
            <div className="nested-box">
              <h3>Istanbul/Turkey</h3>
              <p className="price-1"> $205,500</p>
            </div>
            <p className="lorem">
              Lorem ipsum dolor sit amet, amet consectetur adipiscing{" "}
            </p>
          </div>
        </div>

        {/* 2nd */}

        <div className="cards item-2 ">
          <div className="img-div">
            <img src={img2} alt="cardImage1" height="400px" />
          </div>

          <div className="nested-div-1">
            <div className="nested-box">
              <h3>Istanbul/Turkey</h3>
              <p className="price-1"> $205,500</p>
            </div>
            <p className="lorem">
              Lorem ipsum dolor sit amet, amet consectetur adipiscing{" "}
            </p>
          </div>
        </div>

        {/* 3rd */}

        <div className="cards item-3 ">
          <div className="img-div">
            <img src={img3} alt="cardImage1" height="400px" />
          </div>
          <div className="nested-div-1">
            <div className="nested-box">
              <h3>Istanbul/Turkey</h3>
              <p className="price-1"> $205,500</p>
            </div>
            <p className="lorem">
              Lorem ipsum dolor sit amet, amet consectetur adipiscing{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
