import React from "react";
import ProductRating from "./ProductRating";
// import image from "./media/Item_1.webp";

const Product = ({ item }) => {
  return (
    <div>
      <img src={item.image} alt="item" />
      <h1>{item.name}</h1>
      <p>{item.price}</p>
      <ProductRating rating={item.rating} />
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
