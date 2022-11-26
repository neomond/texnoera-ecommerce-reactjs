import React from "react";
import { Link } from "react-router-dom";
import "./AboutBrand.css";
import { TbArrowNarrowRight } from "react-icons/tb";
import whiteImgLeft from "../assets/white-left.png";
import whiteImgRight from "../assets/white-right.png";
import aboutBrandImg from "../assets/about-brandImg.png";

const AboutBrand = () => {
  return (
    <>
      <div className="about-brand-header">About The Brand</div>
      <div className="aboutbrand-wrapper">
        <div className="aboutbrand-imgs">
          <div>
            <img
              className="left-about-img blank-img"
              src={whiteImgLeft}
              alt=""
            />
          </div>
          <div className="main-about-img">
            <img className="main-about-img-img" src={aboutBrandImg} alt="" />
          </div>
          <div>
            <img
              className="right-about-img blank-img"
              src={whiteImgRight}
              alt=""
            />
          </div>
        </div>
        <div className="aboutbrand-text">
          <p>
            Today ELEAN is the first ready-made women's tuxedo store in Russia.
            With us, every woman can choose for herself an image with a tuxedo,
            the same as that of Hollywood divas and gossip stars. <br />
            <br /> The ELEAN tuxedo suit is the choice of pop and movie stars,
            TV presenters, fashion stylists, successful women leaders,
            representatives of the scientific and business elite. <br />
            <br />
            The history of the brand began long before the first show, which
            took place on March 12, 2016, with the dream of the author of the
            collection, Elena Pisareva, about her own brand of elegant clothes
            and continued for a long 30 years of accumulating professional
            experience. The entire first collection was made of 100% natural
            silk, it included feminine dresses and suits.
          </p>
          <Link to="/aboutthebrand" className="aboutbrand-btn">
            Read More <TbArrowNarrowRight />
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutBrand;
