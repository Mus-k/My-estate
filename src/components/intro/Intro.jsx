import React from "react";
import "./Intro.css";
import { default as introImage } from "../../assets/images/cardImage8.png";
import { Link } from "react-router-dom";
import { Modern } from "../modern/Modern";
import { Slider } from "../slider/Slider";
import { Overview } from "../overview/Overview";
import { NewLetter } from "../newsletter/NewLetter";
import { Footer } from "../footer/Footer";
import { motion } from "framer-motion";
export const Intro = () => {
  return (
    <motion.section
      className="intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="intro-wrapper">
        <div className="intro-container">
          {/* left */}
          <motion.div className="intro-left"
          initial='hidden'
          whileInView='visible'
          viewport={{once:true}}
          transition={{duration:0.5}}
          variants={{
            hidden:{opacity:0, x:-50},
            visible:{opacity:1, x:0}
          }}>
            <h1 className="intro-title">
              Home That Makes
              <br /> You <span className="hightlight">Living</span> Life!
            </h1>
            <p className="intro-text">
              Are you looking for amazing Real estate?
              <br /> Don't worry! we got it for you
            </p>
            <div className="intro-btns">
              <Link to="/contact" className="btn btn-contact">
                contact us
              </Link>
              <Link to="/contact" className="btn btn-latest">
                see the lastest
              </Link>
            </div>
          </motion.div>

          {/* right */}
          <motion.div className="intro-right">
            <div className="image-div">
              <img src={introImage} alt="introImage" />
            </div>
          </motion.div>
        </div>
      </section>
      <section>
        <Modern />
        <Slider />
        <Overview />
        <NewLetter />
        <Footer />
      </section>
    </motion.section>
  );
};
