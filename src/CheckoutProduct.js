import React from "react";
import ProductRating from "./ProductRating";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({ item }) => {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: item.id,
    });
  };
  return (
    <div className="checkout-product flex justify-start justify-items-start">
      <img src={item.image} alt="item" className="checkout-image" />
      <div className="text-left">
        <h1>{item.name}</h1>
        <p>${item.price}</p>
        <div className="block my-0 mx-auto">
          <ProductRating rating={item.rating} />
        </div>

        <button className="px-4" onClick={removeFromBasket}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
