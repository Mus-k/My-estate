import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { default as aboutImg } from "../../assets/images/aboutImg.jpg";
import { Overview } from "../overview/Overview";
import { NewLetter } from "../newsletter/NewLetter";
import { Footer } from "../footer/Footer";
import { motion } from "framer-motion";
export const AboutRoute = () => {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="ab-container">
        <div className="ab-inner">
          <h1 className="ab-title">Home</h1>
          <i class="fa-solid fa-arrows-turn-right"></i>

          <h3 className="ab-subTitle">About</h3>
        </div>
      </div>
      <section className="ab-section">
        <motion.div
          className="ab-img"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img src={aboutImg} alt="about us" width="100%" />
        </motion.div>
        <motion.div
          className="ab-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h1 className="left-title">About us</h1>

          {/* <p className="md:hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in est
            laborum
          </p> */}
          <p className="left-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>

          <button className="golden-btn">
            <Link to="/contact" className="g-link">
              contact us
            </Link>
          </button>
        </motion.div>
      </section>
      <Overview />
      <NewLetter />
      <Footer />
    </motion.section>
  );
};
