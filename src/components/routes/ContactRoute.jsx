import React from 'react';
import './ContactRoute.css';
import { Footer } from '../footer/Footer'

export const ContactRoute = () => {
  return (
    <section className="contact">
      <div className="c-left">
        <div className="c-leftInner">
          <h1 className="c-title">
            Home
          </h1>
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
              <i class="fa-solid fa-phone mt-2"></i> <span className="c-info">(212) 555-2368</span> 
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
          <div className="contact-right">
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
              <button
                type="submit"
                className="c-cont-btn"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  )
}
