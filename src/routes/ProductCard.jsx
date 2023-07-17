import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useFavorites } from "../FavoritesContext";

export const ProductCard = ({
  id,
  productName,
  price,
  imageUrl,
  isDelete = false,
}) => {
  const { addToFavorites, removeFromFavorites, favorites } = useFavorites();
  const isFavorite = favorites.some((product) => product.id === id);

  const [heartIconColor, setHeartIconColor] = useState(
    isFavorite ? "#d32f2f" : "black"
  );
  const updateHeartIconColor = (isFavorite) => {
    setHeartIconColor(isFavorite ? "#d32f2f" : "black");
  };

  const handleToggleFavorite = () => {
    if (isFavorite) {
      // If already in favorites, remove it
      removeFromFavorites(id);
      updateHeartIconColor(false);
    } else {
      // If not in favorites, add it
      addToFavorites({
        id,
        productName,
        price,
        imageUrl,
      });
      updateHeartIconColor(true);
    }
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
            {isFavorite ? (
              <IoMdHeart
                className="catalog-right-wishlist filled"
                style={{ color: heartIconColor }}
                onMouseOver={() => setHeartIconColor("#d32f2f")}
                onMouseOut={() => setHeartIconColor("#d32f2f")}
                onClick={handleToggleFavorite}
              />
            ) : (
              <IoMdHeartEmpty
                className="catalog-right-wishlist"
                style={{ color: heartIconColor }}
                onMouseOver={() => setHeartIconColor("#d32f2f")}
                onMouseOut={() => setHeartIconColor("black")}
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
