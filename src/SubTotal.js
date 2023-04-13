import React from "react";
import "./SubTotal.css";

const SubTotal = () => {
  return (
    <div className="subtotal">
      <p>
        Subtotal (0 items): <strong>$0</strong>
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
