import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Submenu.css";

import { CartContext } from "../CartContext";

const Submenu = () => {
  const { cart, total, changeQuantity, deleteFromCart } =
    useContext(CartContext);

  return (
    <div className="submenu-wrapper">
      <div className="submenu-header">Checkout</div>
      <div className="submenu-container">
        {cart.length === 0 && (
          <h1 className="submenu-cont-noprod">You have no products! </h1>
        )}
        {cart.map((product) => (
          <div className="submenu-left-block" key={product.id}>
            <div className="submenu-img">
              <img
                src={`http://localhost:3200/${product?.productImage}`}
                alt=""
              />
            </div>
            <div className="submenu-items">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>{product.name}</h4>
                <h4>{product.price} ₽</h4>
              </div>
              <p>Size 46</p>
              <p>Quantity </p>
              <div className="submenu-btns">
                <div className="submenu-btns-left">
                  <button
                    onClick={() => changeQuantity(product, "DEC")}
                    disabled={product.quantity < 2}
                  >
                    -
                  </button>
                  <button className="product-quantity">
                    {product.quantity}
                  </button>
                  <button onClick={() => changeQuantity(product, "INC")}>
                    +
                  </button>
                </div>
                <div>
                  <button onClick={() => deleteFromCart(product.id)}>
                    Delete
                    {/* <b style={{ paddingLeft: "2rem" }}>X</b> */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="submenu-right-block">
          <div></div>
        </div>
      </div>
      <div className="submenu-bottom-block">
        <div className="submenu-bottom-block-left">
          <p>Overall:</p>
          <p>{total} ₽</p>
        </div>
        <div>
          <Link to="/checkout">
            <button>CHECKOUT </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Submenu;
