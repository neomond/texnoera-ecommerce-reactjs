import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./Footer.css";

import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const successFormFooter = (e) => {
    e.preventDefault();
    if (email === "") {
      Swal.fire({
        text: "Email cannot be empty",
        icon: "error",
      });
      return;
    }
    Swal.fire({
      text: "Successfully subscribed",
      icon: "success",
    });
  };
  return (
    <div className="footer-wrapper">
      <div className="footer-left-block">
        <div className="nav-logo">
          <Link to="/">
            <h1>ELEAN</h1>
          </Link>
          <p>
            WOMAN <br /> TUX
          </p>
        </div>
        <div className="footer-left-contact">
          <p>PHONE: 8 (495) 150-14-77</p>
          <p>WHATSAPP: +7 (977) 728-27-38</p>
        </div>
        <div className="footer-left-contact left-email">
          EMAIL: info@eleanboutique.ru
        </div>
        <div className="footer-middle-social">
          <a href="" className="footer-link">
            <BsInstagram
              className="footer-social"
              onMouseOver={({ target }) => (target.style.color = "#E1C4A9")}
              onMouseOut={({ target }) => (target.style.color = "black")}
            />
          </a>
          <a href="" className="footer-link">
            <BsTwitter
              className="footer-social"
              onMouseOver={({ target }) => (target.style.color = "#E1C4A9")}
              onMouseOut={({ target }) => (target.style.color = "black")}
            />
          </a>
          <a href="" className="footer-link">
            <FaFacebookF
              className="footer-social"
              onMouseOver={({ target }) => (target.style.color = "#E1C4A9")}
              onMouseOut={({ target }) => (target.style.color = "black")}
            />
          </a>
        </div>
      </div>
      <div className="footer-middle-block">
        <div className="footer-middle-top-section">
          <Link to="/catalog">CATEGORIES</Link>
          <Link to="/delivery">DELIVERY</Link>
          <Link to="/fitting">SIZE CHART</Link>
          <Link to="/testimonials">REVIEWS</Link>
          <Link to="/contacts">CONTACTS</Link>
        </div>
        <div className="footer-middle-info-section">
          <div className="footer-middle-info-section-left">
            <p>ADDRESS:</p>
            <p>
              Moscow, Novaya square 8,
              <br /> building 2, 5th floor
            </p>
          </div>

          <div className="footer-middle-info-section-right">
            <p>WORKING HOURS:</p>
            <p>from 9.00 to 21.00</p>
            <p>showroom: from 12.00 to 21.00</p>
          </div>
        </div>
      </div>
      <div className="footer-right-block">
        <form autoComplete="off">
          <p>SUBSCRIBE TO GET UPDATES:</p>
          <input
            className="footer-input"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            onClick={successFormFooter}
            className="footer-submit"
            type="button"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
