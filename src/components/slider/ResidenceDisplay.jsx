import React from "react";
import "./Slider.css";
import { motion } from "framer-motion";

export const ResidenceDisplay = ({ data, index }) => {
  let { image, location, price, detail } = data;
  return (
    <>
      <motion.div
        className="cards-slider item-slider "
        key={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <img src={image} alt="cardImage1" height="300px" width="100%" />

        <div className="nested-detail">
          <div className="nested-info">
            <h3>{location}</h3>
            <p className="priceCard">$ {price}</p>
          </div>
          <p className="loremCard">{detail}</p>
        </div>
      </motion.div>
    </>
  );
};
