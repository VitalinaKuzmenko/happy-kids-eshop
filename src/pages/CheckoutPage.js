import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import CheckoutProduct from "../CheckoutProduct";
import SubTotal from "../SubTotal";
import { useStateValue } from "../StateProvider";

const CheckoutPage = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
      <Header />
      <div className="flex">
        <div className="checkout=products w-2/3">
          <h1
            className="text-5xl mt-7 ml-12 text-left"
            style={{ fontFamily: "var(--p-font)" }}
          >
            Your Shopping Basket
          </h1>
          {basket.map((item) => {
            return <CheckoutProduct item={item} />;
          })}
        </div>
        <SubTotal />
      </div>

      <Footer />
    </>
  );
};

export default CheckoutPage;
