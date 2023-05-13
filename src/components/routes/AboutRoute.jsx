import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import {default as aboutImg } from '../../assets/images/aboutImg.jpg'
import { Overview } from '../overview/Overview'
import { NewLetter } from '../newsletter/NewLetter'
import { Footer } from '../footer/Footer'
export const AboutRoute = () => {
  return (
    <section className="about">
      <div className="ab-container">
        <div className="ab-inner">
          <h1 className="ab-title">
            Home
          </h1>
          <i
            class="fa-solid fa-arrows-turn-right"
          ></i>
        
          <h3 className="ab-subTitle">About</h3>
        </div>
      </div>
      <section className="ab-section">
        <div className="ab-img">
          <img
            src={aboutImg}
            alt="about us"
           width='100%'
          />
        </div>
        <div className="ab-left">
          <h1 className="left-title">
            About us
          </h1>

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
            <Link to="/contact"
            className='g-link'>contact us</Link>
          </button>
        </div>
      </section>
    <Overview/>
    <NewLetter/>
    <Footer/>
    </section>
  )
}
