import React from 'react'
import './Intro.css';
import {default as introImage}  from '../../assets/images/cardImage8.png'
import { Link } from 'react-router-dom';
export const Intro = () => {
  return (
    <section className='intro'>
        <div className='intro-container'>
        {/* left */}
        <div className='intro-left'>
          <h1 className='intro-title'>
          Home That Makes<br/> You Living Life!
          </h1>
          <p className='intro-text'>Are you looking for amazing Real estate?<br/>  Don't worry! we got it for you</p>
          <Link to='/contact' className='btn'>
            <p className='p'>contact us</p>
          </Link>
        </div>

        {/* right */}
        <div className='intro-right'>
          <div className='image-div'>
            <img src={introImage} alt='introImage'/>
          </div>
        </div>
        </div>
    </section>
  )
}
