import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles/FittingPage.css";
import data from "../data/size-table.json";
import fittingImg1 from "../assets/fitting-img1.png";
import fittingImg2 from "../assets/fitting-img2.png";
import fittingImg3 from "../assets/fitting-img3.png";
import fittingPlay from "../assets/fitting-play.png";
import AnimatedPage from "../AnimatedPage";

const FittingPage = () => {
  return (
    <AnimatedPage>
      <div className="fitting-wrapper">
        <div className="fitting-container">
          <div className="fitting-block-top">
            <div className="fitting-header">Fitting</div>
            <h4>FOR MOSCOW:</h4>
            <p>
              — You can try on and choose the desired image of products in our
              showroom. <br />
              — At a convenient place and time, you can order a fitting with the
              brand's stylist, choose the desired look and get individual
              recommendations. The fitting can take up to 2 hours. <br />— You
              can also order delivery with the possibility of trying before
              buying, within 15 minutes.
            </p>
            <h4>FOR RUSSIA:</h4>
            <p>
              — Orders in Russia are sent on a full prepayment on the website
              with a card of any bank, without commission. <br />— You can make
              a delivery with the possibility of trying on within 15 minutes,
              you need to inform the manager about this when confirming the
              order. If the product does not suit you, you can immediately
              return it to the courier. Then contact us by phone 8 495 150 14 77
              to arrange an exchange or return. More details here (link to the
              exchange and return page)
            </p>
          </div>
          <div className="fitting-sizes-table">
            <div className="table-size-header">SIZE TABLE</div>

            <ul className="table-size-list">
              <div className="table-size-list-head">
                <p>Size</p>
                <p>Chest</p>
                <p>Waist</p>
                <p>Hips</p>
                <p>Sleeve</p>
              </div>

              {data.map((content) => (
                <div className="table-size-list-content" key={content.id}>
                  <li>
                    <span>{content.size}</span>
                    <span>{content.chest}</span>
                    <span>{content.waist}</span>
                    <span>{content.hips}</span>
                    <span>{content.sleeve}</span>
                  </li>
                </div>
              ))}
            </ul>
          </div>
          <div className="fitting-video">
            <h4>VIDEO FITTING</h4>
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              slidesPerView={2.5}
              breakpoints={{
                // when window width is >= 640px
                320: {
                  width: 320,
                  slidesPerView: 1,
                },
                640: {
                  // width: 640,
                  slidesPerView: 1.5,
                },
                // when window width is >= 768px
                768: {
                  // width: 768,
                  slidesPerView: 2.5,
                },
              }}
              spaceBetween={20}
              loop={true}
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              modules={[Pagination]}
              className="fittingSwiper"
            >
              <SwiperSlide>
                <div className="swiper-fitting-slide">
                  <div className="swiper-fitting-img">
                    <img src={fittingImg1} alt="" />
                  </div>
                  <a href="#" className="fit-play-icon">
                    <img src={fittingPlay} alt="" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-fitting-slide">
                  <div className="swiper-fitting-img">
                    <img src={fittingImg2} alt="" />
                  </div>
                  <a href="#" className="fit-play-icon">
                    <img src={fittingPlay} alt="" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-fitting-slide">
                  <div className="swiper-fitting-img">
                    <img src={fittingImg3} alt="" />
                  </div>
                  <a href="#" className="fit-play-icon">
                    <img src={fittingPlay} alt="" />
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* FORM FITTING SECTION */}
          <div className="fitting-form">
            <p>SIGN UP FOR A SHOWROOM</p>
            <form autoComplete="off" action="">
              <input
                className="fitting-form-main"
                type="text"
                placeholder="Enter Name"
              />
              <input
                className="fitting-form-main"
                type="phone"
                placeholder="Enter Phone"
              />
              <br className="br" />
              <input
                className="fitting-form-main fitting-input-wide"
                type="text"
                placeholder="Select Time"
              />
              <br className="br" />
              <textarea
                name=""
                id=""
                cols="31"
                rows="5"
                placeholder="Add Comment"
              ></textarea>
              <button type="button" className="fitting-form-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default FittingPage;
