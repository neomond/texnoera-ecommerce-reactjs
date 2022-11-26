import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../App.css";

import { BsInstagram, BsTwitter } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";

import cartImg from "../assets/cart.png";
import Submenu from "./Submenu";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="nav-social-icons">
          <Link to="/" className="nav-link">
            <BsInstagram
              className="nav-social"
              onMouseOver={({ target }) => (target.style.color = "#E1C4A9")}
              onMouseOut={({ target }) => (target.style.color = "black")}
            />
          </Link>
          <Link to="/" className="nav-link">
            <BsTwitter
              className="nav-social"
              onMouseOver={({ target }) => (target.style.color = "#E1C4A9")}
              onMouseOut={({ target }) => (target.style.color = "black")}
            />
          </Link>
          <Link to="/" className="nav-link">
            <FaFacebookF
              className="nav-social"
              onMouseOver={({ target }) => (target.style.color = "#E1C4A9")}
              onMouseOut={({ target }) => (target.style.color = "black")}
            />
          </Link>
        </div>
        {/* This part changes direction to column on mobile breakpoints */}
        <div className="nav-top-links active">
          <Link to="catalog" className="nav--link">
            <p>CATEGORIES</p>
          </Link>
          <Link to="/fitting" className="nav--link">
            <p>FITTING</p>
          </Link>
          <Link to="/aboutthebrand" className="nav--link">
            <p>ABOUT THE BRAND</p>
          </Link>
          <div className="nav-logo-top">
            <Link to="/">
              <h1>E</h1>
            </Link>
          </div>
          <Link to="/showroom" className="nav--link">
            <p>SHOWROOM</p>
          </Link>
          <Link to="/testimonials" className="nav--link">
            <p>TESTIMONIALS</p>
          </Link>
          <Link to="/contacts" className="nav--link">
            <p>CONTACTS</p>
          </Link>
        </div>
        <nav className="nav-top-part">
          <ul className="nav-right">
            {/* <li>
              <Link to="/">
                <h4>+7 (495) 150 - 14 - 77</h4>
              </Link>
            </li> */}
            <li>
              <Link to="/wishlist">
                <IoMdHeartEmpty
                  style={{
                    width: "25px",
                    height: "25px",
                    border: "none",
                    color: "#333333",
                  }}
                  onMouseOver={({ target }) => (target.style.color = "#E1C4A9")}
                  onMouseOut={({ target }) => (target.style.color = "black")}
                />
                <span>0</span>
              </Link>
            </li>
            {/* Cart component */}
            <li className="nav__menu-item">
              <a className="cart-item-block" href="">
                <img src={cartImg} alt="" />
                <span className="cart-item">0</span>
              </a>
              <Submenu />
            </li>
          </ul>
        </nav>
      </nav>
    </div>
  );
};

export default Navbar;
