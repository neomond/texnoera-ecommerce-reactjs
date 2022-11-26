import React, { useContext, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./styles/Nav.css";

import { BsInstagram, BsTwitter, BsWindowSidebar } from "react-icons/bs";
import { IoMdHeartEmpty, IoLogoWhatsapp, IoLogoFacebook } from "react-icons/io";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import cartImg from "../assets/cart.png";
import Submenu from "../pages/Submenu";
import { CartContext } from "../CartContext";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const total = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar ">
      <div onClick={handleClick} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
        <div className="nav-logo nav-logo-navigation">
          <Link to="/">
            <h1>ELEAN</h1>
          </Link>
          <p>
            WOMAN <br /> TUX
          </p>
        </div>
      </div>

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
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-item">
          <Link to="/catalog" className="nav-link" onClick={closeMenu}>
            CATEGORIES
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/fitting" className="nav-link" onClick={closeMenu}>
            FITTING
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/aboutthebrand" className="nav-link" onClick={closeMenu}>
            ABOUT THE BRAND
          </Link>
        </li>
        <li className="nav-item nav-item-logo-letter">
          <Link to="/" className="nav-link" onClick={closeMenu}>
            <h1>E</h1>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/showroom" className="nav-link" onClick={closeMenu}>
            SHOWROOM
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/testimonials" className="nav-link" onClick={closeMenu}>
            TESTIMONIALS
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contacts" className="nav-link" onClick={closeMenu}>
            CONTACTS
          </Link>
        </li>
        <div className="social-icons-responsive">
          <Link to="/" className="nav-link-responsive">
            <IoLogoWhatsapp className="nav-social-responsive" />
          </Link>
          <Link to="/" className="nav-link-responsive">
            <IoLogoFacebook className="nav-social-responsive" />
          </Link>
          <Link to="/" className="nav-link-responsive">
            <FaTelegramPlane className="nav-social-responsive" />
          </Link>
          <Link to="/" className="nav-link-responsive">
            <HiOutlineMail className="nav-social-responsive" />
          </Link>
        </div>
      </ul>
      <div className="nav-top-part">
        <ul className="nav-right">
          <li>
            <Link to="/*">
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
              {/* <span>{total}</span> */}
            </Link>
          </li>
          {/* Cart component */}
          <li className="nav__menu-item">
            <Link to="/checkout" className="cart-item-block" href="">
              <img src={cartImg} alt="" />
              <span className="cart-item">{total}</span>
            </Link>
            {/* Hover cart component */}
            <Submenu />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
