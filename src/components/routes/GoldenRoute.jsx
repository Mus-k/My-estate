import React from 'react'
import { Link } from 'react-router-dom'
import './GoldenRoute.css';
import {default as golden} from '../../assets/images/visa.jpg'
import { Overview } from '../overview/Overview';
import { Footer } from '../footer/Footer';
export const GoldenRoute = () => {
  return (
   <section className='golden'>

      <div className="g-container">
        <div className="gh-title">
          <h1 className="g-home">
            Home
          </h1>
          <i
            class="fa-solid fa-arrows-turn-right
          "
          ></i>
          <i class="fa-sharp fa-solid fa-slash-forward text-white text-center pt-2 text-2xl"></i>
          <h3 className="g-visa">Golden Visa</h3>
        </div>
      </div>
      <div className="g-info">
        <section className="g-section">
          <h1 className="golden-title">GOLDEN VISA RESIDENCY AND CITIZENSHIP</h1>
          <p className="golden-sub-title">
            La Vida Golden Visas facilitates the acquisition of residency,
            immigration and citizenship through investment. We make what looks
            like an expensive and difficult option, affordable and complex free.
            With clients from more than 150 countries worldwide and over 18
            program options, we understand your reasons and we have the best
            solution for your needs.
          </p>

         <div className="visaImg-div">
          <img src={golden} alt="golden visa"
          width='100%'/>
         </div>

          <button className="golden-btn">
            <Link to="/contact"
            className='g-link'>contact us</Link>
          </button>
        </section>
      </div>
     
    <Overview/>
    <Footer/>
   </section>
  )
}
