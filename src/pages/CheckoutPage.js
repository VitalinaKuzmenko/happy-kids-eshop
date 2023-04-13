import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import CheckoutProduct from "../CheckoutProduct";
import SubTotal from "../SubTotal";

const CheckoutPage = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <div className="checkout=products w-2/3">
          <CheckoutProduct />
          <CheckoutProduct />
          <CheckoutProduct />
        </div>
        <SubTotal />
      </div>

      <Footer />
    </>
  );
};

export default CheckoutPage;
