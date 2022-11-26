import React from "react";

import "./styles/ContactsPage.css";
import phoneImg from "../assets/contacts-call.png";
import emailImg from "../assets/contacts-mail.png";
import whatsappImg from "../assets/contacts-whatsapp.png";
import timeImg from "../assets/contacts-time.png";
import locationImg from "../assets/contacts-map.png";
import AnimatedPage from "../AnimatedPage";

const ContactsPage = () => {
  return (
    <AnimatedPage>
      <div className="contacts-wrapper">
        <div className="contacts-header">
          <p>Contacts</p>
        </div>
        <div className="contacts-items-wrapper">
          <div className="contacts-map-location">
            <iframe
              className="contacts-map-current"
              src="https://maps.google.com/maps?q=Baku,%20Almaz%20Park&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
          </div>
          <div className="contacts-info-wrapper">
            <div className="contacts-info-top">
              <div className="contacts-info-top-item">
                <span>
                  <img src={phoneImg} alt="" />
                  PHONE: 8 (495) 150-14-77
                </span>
              </div>
              <div className="contacts-info-top-item">
                <span>
                  <img src={emailImg} alt="" />
                  EMAIL: info@eleanboutique.ru
                </span>
              </div>
              <div className="contacts-info-top-item">
                <span>
                  <img src={whatsappImg} alt="" />
                  WHATSAPP: +7 (977) 728-27-38
                </span>
              </div>
            </div>
            <div className="contacts-info-top">
              <p>Address and working hours</p>
              <div className="contacts-info-top-item">
                <span>
                  <img className="img-contacts" src={timeImg} alt="" />
                  from 9.00 to 21.00 showroom: from 12.00 to 21.00
                </span>
              </div>
              <div className="contacts-info-top-item">
                <span>
                  <img src={locationImg} alt="" />
                  ADDRESS: Moscow, New Square 8, building 2, 5th floor
                </span>
              </div>
            </div>
            <div className="contacts-form">
              <p>SIGN UP FOR A SHOWROOM</p>
              <form
                className="contacts-form-items"
                autoComplete="off"
                action=""
              >
                <input
                  className="contacts-form-main"
                  type="text"
                  placeholder="Enter Name"
                />
                <input
                  className="contacts-form-main"
                  type="phone"
                  placeholder="Enter Phone"
                />
                {/* <br /> */}
                <input
                  className="contacts-form-time"
                  type="text"
                  placeholder="Select Time"
                />
                {/* <br /> */}
                <textarea
                  name=""
                  id=""
                  cols="41"
                  rows="5"
                  placeholder="Add Comment"
                ></textarea>
                <button type="button" className="contacts-form-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default ContactsPage;
