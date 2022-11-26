import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/ProductPage.css";
import { IoMdHeartEmpty } from "react-icons/io";

const ProductDetailsMore = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3200/api/products")
      .then((res) => res.json())
      .then((data) => {
        const featuredData = data.filter(
          (product) => product.featured === false
        );
        setProducts(featuredData);
      });
  }, []);

  return (
    <div className="products-more">
      <div className="products-more-header">SEARCH MORE SIMILAR PRODUCTS</div>
      <div className="products-right-container">
        {products.map((product) => (
          <div className="products-right-product" key={product.id}>
            <Link to="/" className="products-right-img">
              <img
                src={`http://localhost:3200/${product?.productImage}`}
                alt=""
              />
            </Link>
            <div className="products-right-items">
              <div>
                <p>{product.name}</p>
                <Link to="/wishlist">
                  <IoMdHeartEmpty
                    style={{
                      width: "25px",
                      height: "25px",
                      border: "none",
                      color: "#333333",
                    }}
                    onMouseOver={({ target }) =>
                      (target.style.color = "#E1C4A9")
                    }
                    onMouseOut={({ target }) => (target.style.color = "black")}
                  />
                </Link>
              </div>
              <p>{product.price} ₽</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsMore;
