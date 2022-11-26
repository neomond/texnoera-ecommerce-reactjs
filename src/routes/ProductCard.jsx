import React from "react";
import { Link } from "react-router-dom";
import fav from "../assets/favorites.png";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { IoMdHeartEmpty } from "react-icons/io";

export const ProductCard = ({
  id,
  productName,
  price,
  imageUrl,
  isDelete = false,
}) => {
  return (
    <>
      <Link to={`/catalog/${id}`} className="catalog-right-img">
        <img src={`http://localhost:3200/${imageUrl}`} alt="img" />
      </Link>
      <div className="catalog-right-items">
        <div>
          <p>{productName}</p>
          <Link to="/wishlist">
            {/* <img src={fav} alt="" /> */}
            <IoMdHeartEmpty
              className="catalog-right-wishlist"
              onMouseOver={({ target }) => (target.style.color = "#E1C4A9")}
              onMouseOut={({ target }) => (target.style.color = "black")}
            />
          </Link>
        </div>
        <p className="catalog-right-price">{price} ₽</p>
      </div>
    </>
  );
};
