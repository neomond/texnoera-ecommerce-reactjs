import React from "react";
import "./styles/WishListPage.css";
import { MdError } from "react-icons/md";

import AnimatedPage from "../AnimatedPage";

const WishListPage = () => {
  return (
    <AnimatedPage>
      <div className="wishlist-wrapper">
        <div className="wishlist-items">
          <h2>
            <MdError />
          </h2>
          <p>This page is still in progress..</p>
        </div>
        {/* <div className="wishlist-header">Wishlist</div>
        <div className="wishlist-data-container">
          <div className="wishlist-data-left-block">
            <div>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>63 500 ₽</p>
            </div>
          </div>
          <div className="wishlist-data-right-block">
            <textarea
              name=""
              id=""
              cols="55"
              rows="10"
              placeholder="add comment"
            ></textarea>
            <div className="wishlist-btns">
              <button type="button" className="wishlist-btn-buy">
                Buy
              </button>
              <button type="button" className="wishlist-btn-cancel">
                Cancel
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </AnimatedPage>
  );
};

export default WishListPage;
