import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
import mainImg1 from "../assets/mainImg1.png";
import mainImg2 from "../assets/mainImg2.png";
import mainImg3 from "../assets/mainImg3.png";
import mainImg4 from "../assets/mainImg4.png";
import mainImg5 from "../assets/mainImg5.png";
import mainImg6 from "../assets/mainImg6.png";
import mainImg7 from "../assets/mainImg7.png";
import mainImg8 from "../assets/mainImg8.png";
import mainImg9 from "../assets/mainImg9.png";
import mainImg10 from "../assets/mainImg10.png";

const Categories = () => {
  return (
    <div className="categories-wrapper">
      <div className="categories-items">
        <div className="categories-item grid-item1">
          <Link to="/catalog">
            <p>New</p>
          </Link>
          <div className="grid-img-container">
            <img src={mainImg1} alt="product category" />
          </div>
        </div>
        <div className="categories-item  grid-item2">
          <Link to="/catalog">
            <p>Discounts</p>
          </Link>
          <div className="grid-img-container">
            <img src={mainImg2} alt="product category" />
          </div>
        </div>
        <div className="categories-item grid-item3 ">
          <Link to="/catalog">
            <p>Suits</p>
          </Link>
          <div className="grid-img-container">
            <img src={mainImg3} alt="product category" />
          </div>
        </div>
        <div className="categories-item grid-item4">
          <Link to="/catalog">
            <p>Tuxedos</p>
          </Link>
          <div className="grid-img-container">
            <img src={mainImg4} alt="product category" />
          </div>
        </div>
        <div className="categories-item grid-item5">
          <Link to="/catalog">
            <p>Pants</p>
          </Link>
          <div className="grid-img-container">
            <img src={mainImg5} alt="product category" />
          </div>
        </div>
        <div className="categories-item grid-item6">
          <Link to="/catalog">
            <p>Dresses</p>
          </Link>
          <div className="grid-img-container">
            <img src={mainImg6} alt="product category" />
          </div>
        </div>
        <div className="categories-item grid-item7">
          <Link to="/catalog">
            <p>Blouses</p>
          </Link>
          <div className="grid-img-container">
            <img src={mainImg7} alt="product category" />
          </div>
        </div>
        <div className="categories-item grid-item8">
          <Link to="/catalog">
            <p>Skirts</p>
          </Link>
          <div className="grid-img-container">
            <img src={mainImg8} alt="product category" />
          </div>
        </div>
        <div className="categories-item grid-item9">
          <Link to="/catalog">
            <p>Tops and Vests</p>
          </Link>
          <div className="grid-img-container">
            <img src={mainImg9} alt="product category" />
          </div>
        </div>
        <div className="categories-item grid-item10">
          <Link to="/catalog">
            <p>Accessories</p>
          </Link>
          <div className="grid-img-container">
            <img src={mainImg10} alt="product category" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
