import React from "react";
import "./Celebrities.css";
import celebImg1 from "../assets/celebrity-1.png";
import celebImg2 from "../assets/celebrity-2.png";
import celebImg4 from "../assets/celebrity-4.png";
import celebImg5 from "../assets/celebrity-5.png";

const Celebrities = () => {
  return (
    <>
      <div className="customers-header">WE ARE ON INSTAGRAM</div>
      <div className="celebrities-container">
        <div className="celebrity-hover">
          <img className="celebrities-hide" src={celebImg1} alt="celebrities" />
        </div>
        <div className="celebrity-hover">
          <img className="celebrities-hide" src={celebImg2} alt="celebrities" />
        </div>
        <div className="celebrities-main-resp-img celebrity-hover">
          <img src={celebImg4} alt="celebrities" />
        </div>
        <div className="celebrity-hover">
          <img className="celebrities-hide" src={celebImg5} alt="celebrities" />
        </div>
      </div>
    </>
  );
};

export default Celebrities;
