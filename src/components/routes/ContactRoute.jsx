import React from "react";
import "./ContactRoute.css";
import { Footer } from "../footer/Footer";
import { motion } from "framer-motion";

export const ContactRoute = () => {
  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="c-left">
        <div className="c-leftInner">
          <h1 className="c-title">Home</h1>
          <i
            className="fa-solid fa-arrows-turn-right
        "
          ></i>

          <h3 className="c-subTitle">Contact</h3>
        </div>
      </div>

      <section className="c-section">
        <div className="subContainer">
          <div className="contact-left">
            <p className="c-p">
              <i class="fa-solid fa-location-dot text-2xl"></i>
              <span className="c-info">City, State</span>
            </p>
            <p className="c-p">
              <i class="fa-solid fa-phone mt-2"></i>{" "}
              <span className="c-info">(212) 555-2368</span>
            </p>
            <p className="c-p">
              <i class="fa-solid fa-envelope mt-0 lg:mt-2 text-2xl"></i>
              <span className="c-info"> contact@gmail.com </span>
            </p>
            <div className="c-social">
              <p>
                <i class="fa-brands fa-twitter c-info"></i>
              </p>
              <p>
                <i class="fa-brands fa-telegram c-info"></i>
              </p>
              <p>
                <i class="fa-brands fa-whatsapp c-info"></i>
              </p>
              <p>
                <i class="fa-brands fa-instagram c-info"></i>
              </p>
            </div>
          </div>
          <motion.div
            className="contact-right"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="rightTitle">Contact us</h2>
            <p>we'd love to hear from you!</p>
            <form>
              <input
                type="text"
                name="fname"
                placeholder="Name"
                required
                className="contactInput"
              />
              <br />
              <input
                type="email"
                name="email"
                placeholder="email"
                required
                className=" contactInput"
              />
              <br />
              <input
                type="tel"
                name="tel"
                placeholder="Phone Number"
                required
                className=" contactInput"
              />
              <br />
              <textarea
                className="textarea"
                rows={8}
                placeholder="Message"
              ></textarea>
              <br />
              <button type="submit" className="c-cont-btn">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
      <Footer />
    </motion.section>
  );
};
