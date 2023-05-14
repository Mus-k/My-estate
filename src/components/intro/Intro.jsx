import React from "react";
import "./Intro.css";
import { Link } from "react-scroll";
import { default as introImage } from "../../assets/images/cardImage8.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export const Intro = () => {

  const navigate = useNavigate();
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
          <motion.div
            className="intro-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h1 className="intro-title">
              Home That Makes
              <br /> You <span className="hightlight">Living</span> Life!
            </h1>
            <p className="intro-text">
              Are you looking for amazing Real estate?
              <br /> Don't worry! we got it for you
            </p>
            <div className="intro-btns">
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={50}
                to="contact"
                className="btn btn-contact"
                onClick={()=>navigate("/contact")}
              >
                contact us
              </Link>
              <Link
                spy={true}
                smooth={true}
                duration={500}
                to="latest"
                className="btn btn-latest"
              >
                see the lastest
              </Link>
            </div>
          </motion.div>

          {/* right */}
          <motion.div
            className="intro-right"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="image-div">
              <img src={introImage} alt="introImage"
              width='100%' />
            </div>
          </motion.div>
        </div>
      </section>
    </motion.section>
  );
};
