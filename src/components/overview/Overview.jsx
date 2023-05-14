import React from "react";
import "./Overview.css";
import { Review } from "./Review";
export const Overview = () => {
  return (
    <main>
      <section
        className="o-container"
      
      >
        <div className="title">
          <h2 className="o-title">Testimonials</h2>
          <div className="underline"></div>
          <Review />
        </div>
      </section>
    </main>
  );
};
