import React, { useState, useEffect } from "react";
import "./styles/CatalogPage.css";
import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import AnimatedPage from "../AnimatedPage";
import LoadingIcon from "./LoadingIcon";
import { BiMessageRoundedError } from "react-icons/bi";

const CatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3200/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

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
    <AnimatedPage>
      <div className="catalog-wrapper">
        <div className="catalog-header"></div>
        <div className="catalog-containers">
          <div className="catalog-left-container">
            <div>
              <h4>Categories</h4>
              <Link>
                <p>Skirts</p>
              </Link>
              <Link>
                <p>Tuxedos</p>
              </Link>
              <Link>
                <p>Suits</p>
              </Link>
              <Link>
                <p> Accessories</p>
              </Link>
              <Link>
                <p>Pants</p>
              </Link>
              <Link>
                <p>Blouses</p>
              </Link>
              <Link>
                <p>Dresses</p>
              </Link>
              <Link>
                <p>Tops & Vests</p>
              </Link>
            </div>
            <div>
              <h4>Collections</h4>
              <Link>
                <p>Autumn-winter 21-22</p>
              </Link>
              <Link>
                <p> Evening sets</p>
              </Link>
              <Link>
                <p>Pre-order</p>
              </Link>
              <Link>
                <p>Wedding and graduation</p>
              </Link>
            </div>
          </div>
          <div className="catalog-right-container">
            {products.map((product) => (
              <div className="catalog-right-product" key={product.id}>
                <ProductCard
                  id={product.id}
                  productName={product.name}
                  price={product.price}
                  imageUrl={product.productImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default CatalogPage;
