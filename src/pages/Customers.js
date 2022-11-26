import React from "react";
import Swal from "sweetalert2";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, EffectFade } from "swiper";
import "./Customers.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import starImg1 from "../assets/stars-1.png";
import starImg2 from "../assets/stars-2.png";
import starImg3 from "../assets/stars-3.png";
import starImg4 from "../assets/stars-4.png";
import starImg5 from "../assets/stars-5.png";

import customerTestimonial from "../assets/customerTestimonial.png";

const Customers = () => {
  const successCustomersAlert = () => {
    Swal.fire({
      // title: "First",
      text: "Please subscribe to see more comments.",
      icon: "warning",
    });
  };
  return (
    <div>
      <div className="customers-header">OUR STAR CUSTOMERS AND REVIEWS</div>
      <Swiper
        // slidesPerView={4}
        spaceBetween={30}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#E1C4A9",
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        speed={600}
        loop={true}
        autoplay={1000}
        // navigation={true}
        effect={"fade"}
        modules={[Pagination, Keyboard]}
        className="swiperCustomers"
        // BREAKPOINTS
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1.7,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide className="swiper-customers-slide">
          <img src={starImg1} alt="" />
          <p>Albina Dzhanabaeva</p>
        </SwiperSlide>
        <SwiperSlide className="swiper-customers-slide">
          <img src={starImg2} alt="" />
          <p>Ekaterina Danilova</p>
        </SwiperSlide>
        <SwiperSlide className="swiper-customers-slide">
          <img src={starImg5} alt="" />
          <p>Vera Brezhneva</p>
        </SwiperSlide>
        <SwiperSlide className="swiper-customers-slide">
          <img src={starImg4} alt="" />
          <p>Irina Urgant</p>
        </SwiperSlide>
        <SwiperSlide className="swiper-customers-slide">
          <img src={starImg3} alt="" />
          <p>Ekaterina Katova</p>
        </SwiperSlide>
      </Swiper>
      <div className="customers-testimonials">
        <div className="customers-stay-onresponsive">
          <div className="customers-testimonials-info">
            <div className="customers-testimonials--head-text">
              <img src={customerTestimonial} alt="" />
              <p>
                Irina <span className="customers-gray-span">Moscow city</span>
              </p>
            </div>
            <div className="customers-gray-span customers-gray-span-right">
              26 March 2022
            </div>
          </div>
          <div className="customers-testimonials-text">
            <p>
              Yes, delivery abroad is carried out by courier service to the
              door. Delivery abroad is paid when placing an order, a fixed cost
              of 1,200 rubles.
            </p>
          </div>
        </div>
        <div className="customers-hide-onresponsive">
          <div className="customers-testimonials-info">
            <div className="customers-testimonials--head-text">
              <img src={customerTestimonial} alt="" />
              <p>
                Irina <span className="customers-gray-span">Moscow city</span>
              </p>
            </div>
            <div className="customers-gray-span customers-gray-span-right">
              26 March 2022
            </div>
          </div>
          <div className="customers-testimonials-text">
            <p>
              Yes, delivery abroad is carried out by courier service to the
              door. Delivery abroad is paid when placing an order, a fixed cost
              of 1,200 rubles.
            </p>
          </div>
        </div>
        <div className="customers-hide-onresponsive">
          <div className="customers-testimonials-info">
            <div className="customers-testimonials--head-text">
              <img src={customerTestimonial} alt="" />
              <p>
                Irina <span className="customers-gray-span">Moscow city</span>
              </p>
            </div>
            <div className="customers-gray-span customers-gray-span-right">
              26 March 2022
            </div>
          </div>
          <div className="customers-testimonials-text">
            <p>
              Yes, delivery abroad is carried out by courier service to the
              door. Delivery abroad is paid when placing an order, a fixed cost
              of 1,200 rubles.
            </p>
          </div>
        </div>
        <div className="customers-hide-onresponsive">
          <div className="customers-testimonials-info">
            <div className="customers-testimonials--head-text">
              <img src={customerTestimonial} alt="" />
              <p>
                Irina <span className="customers-gray-span">Moscow city</span>
              </p>
            </div>
            <div className="customers-gray-span customers-gray-span-right">
              26 March 2022
            </div>
          </div>
          <div className="customers-testimonials-text">
            <p>
              Yes, delivery abroad is carried out by courier service to the
              door. Delivery abroad is paid when placing an order, a fixed cost
              of 1,200 rubles.
            </p>
          </div>
        </div>
      </div>
      <div className="customers-button-container">
        <button onClick={successCustomersAlert} className="customers-button">
          View All
        </button>
      </div>
    </div>
  );
};

export default Customers;
