import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";

export const ProductCard = ({
  id,
  productName,
  price,
  imageUrl,
  isDelete = false,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleToggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <>
      <Link to={`/catalog/${id}`} className="catalog-right-img">
        <img src={`http://localhost:3200/${imageUrl}`} alt="img" />
      </Link>
      <div className="catalog-right-items">
        <div>
          <p>{productName}</p>
          <Link>
            {/* Heart icon */}
            {isFavorite ? (
              <IoMdHeartEmpty
                className="catalog-right-wishlist filled"
                onMouseOver={({ target }) => (target.style.color = "#E1C4A9")}
                onMouseOut={({ target }) => (target.style.color = "#E1C4A9")}
                onClick={handleToggleFavorite}
              />
            ) : (
              <IoMdHeartEmpty
                className="catalog-right-wishlist"
                onMouseOver={({ target }) => (target.style.color = "#E1C4A9")}
                onMouseOut={({ target }) => (target.style.color = "black")}
                onClick={handleToggleFavorite}
              />
            )}
          </Link>
        </div>
        <p className="catalog-right-price">{price} ₽</p>
      </div>
    </>
  );
};
