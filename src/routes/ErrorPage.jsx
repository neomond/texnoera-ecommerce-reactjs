import React from "react";
import { MdError } from "react-icons/md";

function ErrorPage() {
  return (
    <div className="wishlist-wrapper">
      <div className="wishlist-items">
        <h2>
          <MdError />
        </h2>
        <p>Not Found.</p>
      </div>
    </div>
  );
}

export default ErrorPage;
