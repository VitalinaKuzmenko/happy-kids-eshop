import React from "react";
import Rating from "./Rating";
import image from "./media/Item_1.webp";

const Product = ({ item }) => {
  return (
    <div>
      <img src={item.image} alt="item" />
      <h1>{item.name}</h1>
      <p>{item.price}</p>
      <Rating rating={item.rating} />
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
