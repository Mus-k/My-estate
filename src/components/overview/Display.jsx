import React, { useState } from "react";
import reviews from "../../utils/People";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Display = () => {
  const [index, setIndex] = useState(0);
  const { fname, job, image, text } = reviews[index];

  const checkSlide = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };
  const nextSlide = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkSlide(newIndex);
    });
  };
  const prevSlide = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkSlide(newIndex);
    });
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt="profile" className="person" />
        <span className="quote-icon"></span>
        <div className="r-infor">
          <h4 className="r-name">{fname}</h4>
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
