import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import reviews from "../../utils/People";
export const Review = () => {
  const [index, setIndex] = useState(4);
  const { name, job, image, text } = reviews[index];

  const checkSlide=(number)=>{
    if(number > reviews.length-1){
        return 0;
    }
    if(number <0){
        return reviews.length-1;
    }
    return number
  }
  const nextSlide=()=>{
    setIndex((index)=>{
        let newIndex =index+1
        return checkSlide(newIndex)
    })
  }
  const prevSlide=()=>{
    setIndex((index)=>{
        let newIndex =index-1
        return checkSlide(newIndex)
    })
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
        <div className="r-infor">
          <h4 className="r-name">{name}</h4>
          <p className="r-job">{job}</p>
          <p className="r-text">{text}</p>
        </div>
      </div>
     <div className="r-buttons">
     <button className="prev-btn" onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <button className="next-btn" onClick={nextSlide}>
        <FaChevronRight />
      </button>
     </div>
    </article>
  );
};
