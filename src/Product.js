import React from "react";
import ProductRating from "./ProductRating";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const Product = ({ item }) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: item,
    });
  };

  if (!item) {
    return <div>Item not found.</div>;
  }

  return (
    <div className="product flex flex-col">
      <img src={item.image} alt="item" className="w-61 block my-0 mx-auto" />
      <h1>{item.name}</h1>
      <p>${item.price}</p>
      <div className="block my-0 mx-auto">
        <ProductRating rating={item.rating} />
      </div>

      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
};

export default Product;
