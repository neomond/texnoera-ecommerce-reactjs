import React from "react";
import "./styles/AboutBrandPage.css";
import ShowRoomForm from "../pages/ShowRoomForm";
import aboutBrandImg from "../assets/about-brandImg.png";
import aboutBrandImgLeft from "../assets/AboutBrandLeftImg.png";
import aboutBrandImgRight from "../assets/AboutBrandRightImg.png";
import aboutbrandicon1 from "../assets/aboutbrandicon1.png";
import aboutbrandicon2 from "../assets/aboutbrandicon2.png";
import aboutbrandicon3 from "../assets/aboutbrandicon3.png";
import aboutbrandicon4 from "../assets/aboutbrandicon4.png";
import aboutbrandicon5 from "../assets/aboutbrandicon5.png";
import AnimatedPage from "../AnimatedPage";

const AboutTheBrand = () => {
  return (
    <AnimatedPage>
      <div className="about-the-brand--wrapper">
        <div className="about-the-brand--header">
          <p>About the Brand</p>
        </div>
        <div className="about-the-brand--img">
          <img src={aboutBrandImg} alt="" />
        </div>
        <div className="about-the-brand--info">
          <div className="about-the-brand--info-left">
            <p>
              Today ELEAN is the first ready-made women's tuxedo store in
              Russia. With us, every woman can choose for herself an image with
              a tuxedo, the same as that of Hollywood divas and gossip stars.{" "}
              <br /> <br />
              The ELEAN tuxedo suit is the choice of pop and movie stars, TV
              presenters, fashion stylists, successful women leaders,
              representatives of the scientific and business elite. <br />
              <br /> The history of the brand began long before the first show,
              which took place on March 12, 2016, with the dream of the author
              of the collection, Elena Pisareva, about her own brand of elegant
              clothes and continued for a long 30 years of accumulating
              professional experience. The entire first collection was made of
              100% natural silk, it included feminine dresses and suits.
            </p>
            <img src={aboutBrandImgLeft} alt="" />
            <h4>ELENA PISAREVA</h4>
            <p>
              The author of the collection, patterns and tailoring technologies
              in the ELEAN brand. He has a higher education as an engineer -
              technologist of garments and over 30 years of experience in the
              development and tailoring of products.
            </p>
          </div>
          <div className="about-the-brand--info-right">
            <p>
              In September 2016, a women's suit with a tuxedo was shown for the
              first time. In September 2017, the brand's collection already had
              three models of women's tuxedos for different body types and
              tastes.
              <br />
              <br />
              In 2018, the collection was replenished with 2 more models of
              tuxedos and a complete capsule of complementary products was
              formed, such as a blouse with a butterfly, a top with lace and
              even a vest. The pearl of the basic collection was a tuxedo dress.{" "}
              <br />
              <br /> In addition to the basic collection of tuxedos, every
              season we release a capsule of 7-12 items that will effectively
              refresh your wardrobe. All collections of the brand are sewn only
              from natural fabrics: wool and silk.
            </p>
            <img src={aboutBrandImgRight} alt="" />
            <h4>ANASTASIA AND ANNA</h4>
            <p>
              Elena's daughters, from childhood, absorbed the skills of their
              mother and took on a role in the management and development of the
              brand. Anna is the head stylist and operations manager. Anastasia
              manages the marketing and advertising department.
            </p>
          </div>
        </div>
        <div className="about-the-brand-advantages-wrapper">
          <h3>OUR ADVANTAGES</h3>
          <div className="about-the-brand-advantages">
            <div className="about-the-brand-advantages-item">
              <div className="about-the-brand-advantages-img img1">
                <img src={aboutbrandicon1} alt="" />
              </div>
              <p>The level of tailoring is equal to the individual;</p>
            </div>
            <div className="about-the-brand-advantages-item">
              <div className="about-the-brand-advantages-img img2">
                <img src={aboutbrandicon2} alt="" />
              </div>
              <p>
                We create patterns for costumes that emphasize the advantages
                and hide the flaws of the figure;
              </p>
            </div>
            <div className="about-the-brand-advantages-item">
              <div className="about-the-brand-advantages-img img3">
                <img src={aboutbrandicon3} alt="" />
              </div>
              <p>
                High-quality performance: even stitching, beautiful processing -
                you can wear things even on the wrong side;
              </p>
            </div>
            <div className="about-the-brand-advantages-item">
              <div className="about-the-brand-advantages-img img4">
                <img src={aboutbrandicon4} alt="" />
              </div>
              <p>
                We use modern equipment and high-quality materials for the
                manufacture of products;
              </p>
            </div>
            <div className="about-the-brand-advantages-item">
              <div className="about-the-brand-advantages-img img5">
                <img src={aboutbrandicon5} alt="" />
              </div>
              <p>
                Our seamstresses have been tailoring and designing clothes for
                over 20 years. During this time, their skills are brought to the
                ideal ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default AboutTheBrand;
