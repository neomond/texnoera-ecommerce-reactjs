import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./Header.css";

const Header = () => {
  return (
    <div className="swiper-header">
      <Link to="/catalog">
        <div className="header-caption">
          <p>BRIGHT SETS FOR EVENING EVENTS</p>
        </div>
      </Link>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        effect={"fade"}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        hashNavigation={{
          watchState: true,
        }}
        loop={true}
        // navigation={true}
        modules={[Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-header">
          <div className="bg bg1">
            {/* <img className="swiper-header-respimg" src={headerImg1} alt="" /> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-header">
          <div className="bg bg2">
            {/* <img className="swiper-header-respimg" src={headerImg2} alt="" /> */}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
