import React from "react";
import ProductRating from "./ProductRating";
import "./Product.css";

const Product = ({ item }) => {
  return (
    <div className="product flex flex-col">
      <img src={item.image} alt="item" className="w-61 block my-0 mx-auto" />
      <h1>{item.name}</h1>
      <p>{item.price}</p>
      <div className="block my-0 mx-auto">
        <ProductRating rating={item.rating} />
      </div>

      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
