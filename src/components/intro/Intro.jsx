import React from 'react'
import './Intro.css';
import {default as introImage}  from '../../assets/images/cardImage8.png'
import { Link } from 'react-router-dom';
import { Modern } from '../modern/Modern';
import { Slider } from '../slider/Slider';
import { Overview } from '../overview/Overview';
import { NewLetter } from '../newsletter/NewLetter';
import { Footer } from '../footer/Footer';
export const Intro = () => {
  return (
    <section className='intro'>
      <section className='intro-wrapper'>


        <div className='intro-container'>
        {/* left */}
        <div className='intro-left'>
          <h1 className='intro-title'>
          Home That Makes<br/> You  <span className='hightlight'>Living</span>  Life!
          </h1>
          <p className='intro-text'>Are you looking for amazing Real estate?<br/>  Don't worry! we got it for you</p>
         <div className='intro-btns'>
         <Link to='/contact' className='btn btn-contact'>
         contact us
          </Link>
          <Link to='/contact' className='btn btn-latest'>
         see the lastest
          </Link>
         </div>
         
        </div>

        {/* right */}
        <div className='intro-right'>
          <div className='image-div'>
            <img src={introImage} alt='introImage'/>
          </div>
        </div>
        </div>
        
      </section>
        <section>
        <Modern />
      <Slider />
      <Overview />
      <NewLetter/>
      <Footer/>
        </section>
    </section>
  )
}
