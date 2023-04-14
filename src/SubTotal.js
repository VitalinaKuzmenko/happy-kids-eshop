import React from "react";
import "./SubTotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";

const SubTotal = () => {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal ml-12 mr-12">
      <p>
        Subtotal ({basket.length} items):{" "}
        <strong>${getBasketTotal(basket)}</strong>
      </p>
      <div className="flex flex-col">
        <small className="subtotal__gift mt-3">
          <input type="checkbox" /> This order contains a gift
        </small>
        <button className="subtotal-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default SubTotal;
