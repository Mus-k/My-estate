import React from "react";
import "./Modern.css";
import { default as img1 } from "../../assets/images/cardImage1.png";
import { default as img2 } from "../../assets/images/cardImage2.png";
import { default as img3 } from "../../assets/images/cardImage3.png";
import { motion } from "framer-motion";
export const Modern = () => {
  return (
    <section className="modern">
      <h2 className="modern-title">
        Our Best Estate, <br /> are Modern
      </h2>
      <div className="cards-container">
        <motion.div
          className="cards item-1 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{  duration: 2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
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
        </motion.div>

        {/* 2nd */}

        <motion.div
          className="cards item-2 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{delay:1.2, duration: 2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
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
        </motion.div>

        {/* 3rd */}

        <motion.div
          className="cards item-3 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 2 }}
       
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="img-div">
            <img src={img3} alt="cardImage1" height="400px" />
          </div>
          <div className="nested-div-1">
            <div className="nested-box">
              <h3>Istanbul/Turkey</h3>
              <p className="price-1"> $205,500</p>
            </div>
            <p className="lorem">
              Lorem ipsum dolor sit amet, ameet consectetur adipiscing{" "}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
