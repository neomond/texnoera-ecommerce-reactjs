import React from "react";
import "./styles/TestimonialsPage.css";
import Customers from "../pages/Customers";

import reviewImg1 from "../assets/review-img-1.png";
import reviewImg2 from "../assets/review-img-2.png";
import reviewImg3 from "../assets/review-img-3.png";
import reviewImg4 from "../assets/review-img-4.png";
import reviewPlay from "../assets/fitting-play.png";
import AnimatedPage from "../AnimatedPage";

const TestimonialsPage = () => {
  return (
    <AnimatedPage>
      <div className="testimonials-wrapper">
        <div className="testimonials-header">REVIEWS</div>
        <div className="testimonials-customers-container">
          <div className="testimonials-item ">
            <div className="testimonials-img">
              <img src={reviewImg1} alt="review customer 1" />
            </div>
            <p>Tuxedo outfit</p>
            <a href="/" className="testimonials-play-btn">
              <img src={reviewPlay} alt="" />
            </a>
          </div>
          <div className="testimonials-item testimonials-item-none">
            <div className="testimonials-img">
              <img src={reviewImg2} alt="review customer 2reviewImg2" />
            </div>
            <p>Tuxedo outfit</p>
            <a href="/" className="testimonials-play-btn">
              <img src={reviewPlay} alt="" />
            </a>
          </div>
          <div className="testimonials-item testimonials-item-none">
            <div className="testimonials-img">
              <img src={reviewImg3} alt="review customer 3" />
            </div>
            <p>Tuxedo outfit</p>
            <a href="/" className="testimonials-play-btn">
              <img src={reviewPlay} alt="" />
            </a>
          </div>
          <div className="testimonials-item testimonials-item-none">
            <div className="testimonials-img">
              <img src={reviewImg4} alt="review customer 4" />
            </div>
            <p>Tuxedo outfit</p>
            <a href="/" className="testimonials-play-btn">
              <img src={reviewPlay} alt="" />
            </a>
          </div>
        </div>
        <Customers />
        <div className="testimonials-form">
          <div className="testimonials-form-header">LEAVE FEEDBACK</div>
          <div className="testimonials-form--items">
            <form autoComplete="off" action="">
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter your first name"
              />
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone"
              />
              <input
                type="text"
                id="time"
                name="time"
                placeholder="Enter your e-mail"
              />
              {/* <br /> <br /> */}
              <textarea
                id="w3review"
                name="w3review"
                rows="6"
                cols="61"
                placeholder="Add comment"
              ></textarea>
              <button
                className="testimonials-btn-submit"
                type="button"
                value="Submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default TestimonialsPage;
