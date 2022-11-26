import React, { useState, useEffect } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    const checkExisting = cart.find((item) => item.id === product.id);

    if (checkExisting) {
      const getNonExistingProduct = cart.filter(
        (item) => item.id !== checkExisting?.id
      );
      setCart(() => [
        ...getNonExistingProduct,
        { ...checkExisting, quantity: checkExisting.quantity + 1 },
      ]);
    } else {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const deleteFromCart = (id) => {
    const deleteFromArr = cart.filter((product) => product.id !== id);
    setCart(deleteFromArr);
  };

  const calcTotal = () => {
    const total = cart.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);
    setTotal(total);
  };

  useEffect(() => {
    calcTotal();
  }, [cart]);

  const changeQuantity = (product, actionType) => {
    const findProduct = cart.find((item) => item.id === product.id);

    // actionType = INC | DEC
    const getNonExistingProduct = cart.filter(
      (item) => item.id !== findProduct?.id
    );
    if (actionType === "INC") {
      setCart(() => [
        ...getNonExistingProduct,
        { ...findProduct, quantity: findProduct.quantity + 1 },
      ]);
    } else {
      setCart(() => [
        ...getNonExistingProduct,
        { ...findProduct, quantity: findProduct.quantity - 1 },
      ]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        changeQuantity,
        addToCart,
        deleteFromCart,
        total,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
