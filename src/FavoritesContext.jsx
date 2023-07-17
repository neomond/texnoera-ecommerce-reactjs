import React, { useState, createContext, useContext, useEffect } from "react";

export const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => [...prevFavorites, product]);
  };

  const removeFromFavorites = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((product) => product.id !== productId)
    );
  };

  useEffect(() => {
    // Save favorites to local storage whenever it changes
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Function to update the color of the heart icon in the local storage
  const updateHeartIconColor = (id, isFavorite) => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites"));
    const updatedFavorites = savedFavorites.map((product) =>
      product.id === id ? { ...product, isFavorite } : product
    );
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // Retrieve selected items from local storage on initial render
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites"));
    setFavorites(savedFavorites || []);
  }, []);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites: (product) => {
          addToFavorites(product);
          updateHeartIconColor(product.id, true);
        },
        removeFromFavorites: (productId) => {
          removeFromFavorites(productId);
          updateHeartIconColor(productId, false);
        },
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
