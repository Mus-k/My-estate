import React from "react";
import "./Overview.css";
import { motion } from "framer-motion";
import { Review } from "./Review";
export const Overview = () => {
  return (
    <main>
      <motion.section
        className="o-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount:0.4 }}
        transition={{ duration: 2 }}
        variants={{
          hidden: { opacity: 0, x: -150 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="title">
          <h2 className="o-title">Testimonials</h2>
          <div className="underline"></div>
          <Review />
        </div>
      </motion.section>
    </main>
  );
};
