import React from "react";
import "./styles/WishListPage.css";
import { MdError } from "react-icons/md";

import AnimatedPage from "../AnimatedPage";
import { useFavorites } from "../FavoritesContext";

const WishListPage = () => {
  const { favorites, removeFromFavorites } = useFavorites();
  const handleRemoveFromWishlist = (productId) => {
    removeFromFavorites(productId);
  };
  return (
    <AnimatedPage>
      <div className="wishlist-wrapper">
        <div className="wishlist-items">
          {favorites.length === 0 ? (
            <>
              <h2>
                <MdError />
              </h2>
              <p>Your wishlist is empty.</p>
            </>
          ) : (
            <ul>
              {favorites.map((product) => (
                <li key={product.id}>
                  <img
                    src={`http://localhost:3200/${product.imageUrl}`}
                    alt={product.productName}
                  />
                  <p className="wishlist-style-p">{product.productName}</p>
                  <p className="wishlist-style-p">{product.price} ₽</p>
                  <button onClick={() => handleRemoveFromWishlist(product.id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default WishListPage;
