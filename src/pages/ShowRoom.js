import React from "react";
import "./ShowRoom.css";
import showroomImg1 from "../assets/showroomImg.png";
import showroomImg2 from "../assets/showroomImg2.png";
import showroomImg3 from "../assets/showroomImg3.png";

const ShowRoom = () => {
  return (
    <>
      <div>
        <div className="showroom-header">Our Showroom</div>
        <div className="showroom-wrapper">
          <div className="showroom-imgs">
            <div className="showroomimg showroomimg-1">
              <img src={showroomImg1} alt="" />
            </div>
            <div className="showroomimg showroomimg-2">
              <img src={showroomImg2} alt="" />
            </div>
            <div className="showroomimg showroomimg-3">
              <img src={showroomImg3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowRoom;
