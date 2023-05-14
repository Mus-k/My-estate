import React from "react";
import { Link } from "react-router-dom";

import "./GoldenRoute.css";
import { default as golden } from "../../assets/images/visa.jpg";

import { Footer } from "../footer/Footer";
import { motion } from "framer-motion";
import { View } from "../overview/View";
export const GoldenRoute = () => {
  return (
    <motion.section
      className="golden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="g-container">
        <div className="gh-title">
          <h1 className="g-home">Home</h1>
          <i
            class="fa-solid fa-arrows-turn-right
          "
          ></i>
 
          <h3 className="visa-title">Golden Visa</h3>
        </div>
      </div>
      <div className="g-info">
        <section className="g-section">
          <h1 className="golden-title">
            GOLDEN VISA RESIDENCY AND CITIZENSHIP
          </h1>
          <motion.p
            className="golden-sub-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            variants={{
              hidden: { opacity: 0, x: -150 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            La Vida Golden Visas facilitates the acquisition of residency,
            immigration and citizenship through investment. We make what looks
            like an expensive and difficult option, affordable and complex free.
            With clients from more than 150 countries worldwide and over 18
            program options, we understand your reasons and we have the best
            solution for your needs.
          </motion.p>

          <motion.div
            className="visaImg-div"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img src={golden} alt="golden visa" width="100%" />
          </motion.div>

          <button className="golden-btn">
            <Link to="/contact" className="g-link">
              contact us
            </Link>
          </button>
        </section>
      </div>

      <View />
      <Footer />
    </motion.section>
  );
};
