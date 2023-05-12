import React from "react";
import './Footer.css'
export const Footer = () => {
  return (
    <section className="f-wrapper ">
      <div className=" f-container">
        {/* left side */}
        <div className="f-left">
          <h1 className='f-title'>Estate</h1>
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        {/* right */}
        <div className="f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New york, Fl 4571, USA</span>

          <div className=" f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};
