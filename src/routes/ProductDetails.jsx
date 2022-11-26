import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingIcon from "./LoadingIcon";

import "./styles/ProductPage.css";

import { IoMdHeartEmpty } from "react-icons/io";
import { BiMessageRoundedError } from "react-icons/bi";
import productIcon1 from "../assets/productIcon1.png";
import productIcon2 from "../assets/productIcon2.png";

import topLeftimg from "../assets/top-left-item.png";
import bottomRightimg from "../assets/bottom-right-item.png";
import ProductDetailsMore from "./ProductDetailsMore";
import { CartContext } from "../CartContext";

const ProductDetails = ({ productName, price, imageUrl }) => {
  const { addToCart } = useContext(CartContext);

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Accordion
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  useEffect(() => {
    fetch(`http://localhost:3200/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <LoadingIcon />;
  }

  if (error) {
    return (
      <div className="loading-error-products">
        <BiMessageRoundedError className="loading-error-icon" />
        <h1>Something went wrong...</h1>
        <Link className="loading-error-btn" to={"/"}>
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="product-current-wrapper">
        <div className="product-current-slider">
          <img
            src={`http://localhost:3200/${product?.productImage}`}
            alt="img"
            height="700px"
            width="500px"
          />
        </div>
        <div className="product-info-container">
          <div className="product-head-desc">
            <div>
              <h4>{product?.name}</h4>
              <p>{product?.price} ₽</p>
            </div>
            <div>
              <Link>
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
              </Link>
            </div>
          </div>
          <div className="product-size-items">
            <p>SIZE</p>
            <div className="product-sizes">
              <a className="product-size" href="">
                40
              </a>
              <a className="product-size" href="">
                42
              </a>
              <a className="product-size" href="">
                44
              </a>
              <a className="product-size" href="">
                46
              </a>
              <a className="product-size" href="">
                48
              </a>
              <a className="product-size" href="">
                50
              </a>
            </div>
            <div className="product-icons">
              <div className="product-icons-left">
                <div>
                  <img src={productIcon1} alt="" />
                </div>
                <p>SELECT YOUR SIZE</p>
              </div>
              <div className="product-icons-right">
                <div>
                  <img src={productIcon2} alt="" />
                </div>
                <p>YOUR SIZE IS NOT AVAILABLE?</p>
              </div>
            </div>
          </div>
          <div className="product-btns">
            <button
              onClick={() => addToCart(product)}
              className="product-btn-first"
            >
              ADD TO CART
            </button>

            <Link to="/fitting" className="product-btns">
              <button className="product-btn-second">FITTING</button>
            </Link>
          </div>
          <div className="accrodion">
            {accrodionData.map((item, i) => (
              <div className="accordion-item" key={i}>
                <div className="title" onClick={() => toggle(i)}>
                  <h2>{item.question}</h2>
                  <span>{selected === i ? "-" : "+"}</span>
                </div>
                <div className={selected === i ? "content show" : "content"}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Similar products component */}
      <ProductDetailsMore />
      {/*  */}
      <div className="product-blocks-wrapper">
        <div className="prod-left-top-block">
          <img src={topLeftimg} alt="" />
        </div>
        <div className="prod-right-top-block">
          <div className="prod-right-top-block-container">
            <h3>HANDMADE</h3>
            <div className="prod-right-top-block-items">
              {gridData1.map((item, i) => (
                <div key={i}>
                  <div className="prod-right-top-block-item">
                    <span>{item.id}</span>
                    <p>{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="prod-left-bottom-block">
          <div className="prod-left-bottom-block-item">
            <h3>ORDER DELIVERY</h3>
            <p>
              Order delivery with an on-site stylist of the brand to a
              convenient place in Moscow and Moscow Region. You will be able to
              appreciate the fit, the quality of the products and you will not
              want to take them off!
            </p>
            <div className="prod-right-top-block-items">
              {gridData2.map((item, i) => (
                <div key={i}>
                  <div className="prod-right-top-block-item">
                    <span>{item.id}</span>
                    <p>{item.info}</p>
                  </div>
                </div>
              ))}
              <div className="prod-left-bottom-btn-container">
                <button className="prod-left-bottom-btn">ORDER DELIVERY</button>
              </div>
            </div>
          </div>
        </div>
        <div className="prod-right-bottom-block">
          <img src={bottomRightimg} alt="" />
        </div>
      </div>
    </>
  );
};

const accrodionData = [
  {
    question: "OPTIONS",
    answer: "Composition: 98% wool, 2% elastane, silk trim",
  },
  {
    question: "ADDITIONALLY",
    answer:
      "The fitted silhouette and peaked lapels accentuate the waistline, visually correcting the figure to the coveted 'hourglass' figure. A classic women's tuxedo that Yves Saint Laurent himself would have approved of.",
  },
  {
    question: "DESCRIPTION",
    answer:
      "The fitted silhouette and peaked lapels accentuate the waistline, visually correcting the figure to the coveted 'hourglass' figure. A classic women's tuxedo that Yves Saint Laurent himself would have approved of.",
  },
];

const gridData1 = [
  {
    id: 1,
    info: "The level of tailoring is equal to the individual;",
  },
  {
    id: 2,
    info: "We create patterns for costumes that emphasize the advantages and hide the flaws of the figure;",
  },
  {
    id: 3,
    info: "High-quality performance: even stitching, beautiful processing - you can wear things even on the wrong side;",
  },
  {
    id: 4,
    info: "We use modern equipment and high-quality materials for the manufacture of products;",
  },
  {
    id: 5,
    info: "Our seamstresses have been tailoring and designing clothes for over 20 years. During this time, skills have been improved every day.",
  },
];

const gridData2 = [
  {
    id: 1,
    info: "Choose models to try on.",
  },
  {
    id: 2,
    info: "Submit your request by clicking the button below.",
  },
  {
    id: 3,
    info: "Our stylist will confirm your application and agree on a convenient time and place for you.",
  },
  {
    id: 4,
    info: "At the appointed time, the stylist will bring the ordered models and conduct a consultation.",
  },
  {
    id: 5,
    info: "You can pay for the models you like after trying them on.",
  },
];

export default ProductDetails;
