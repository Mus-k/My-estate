import React from 'react'
import './NewsLetter.css';
import {default as newLetterImg} from '../../assets/images/profile-2.jpg'
export const NewLetter = () => {
  return (
    <section className="newsLetter">
    <div className="news-container
   ">
        <img
                  src={newLetterImg}
                  alt="profile-3"
                  className="newsImg"
                />
      <h1 className="newsTitle">
        We can contact you back in a few minutes
      </h1>

      <p className="newsParagraph ">
        please enter your email blow
      </p>
      <form>
      <div className="suscribe">
        <div className="newsInput-div ">
        
          <i className="fa-regular fa-envelope "></i>
          <input type="email" placeholder="Enter your e-mail address" required 
          className=' inputNews'/>
        </div>
        <button className="subscribe-btn">Subscribe</button>
      </div>
      </form>
    </div>
  </section>
  )
}
