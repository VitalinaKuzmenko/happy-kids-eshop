import React from "react";
import ProductRating from "./ProductRating";
import "./Product.css";

const CheckoutProduct = () => {
  return (
    <div className="checkout-product flex justify-start justify-items-start">
      <img
        src="/product_images/Item_5.webp"
        alt="item"
        className="checkout-image"
      />
      <div className="text-left">
        <h1>Black and White T-shirt</h1>
        <p>$25.99</p>
        <div className="block my-0 mx-auto">
          <ProductRating rating={5} />
        </div>

        <button className="px-4">Remove from Cart</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
