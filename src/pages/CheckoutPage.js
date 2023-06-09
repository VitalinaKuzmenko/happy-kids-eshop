import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import CheckoutProduct from "../CheckoutProduct";
import SubTotal from "../SubTotal";
import { useStateValue } from "../StateProvider";

const CheckoutPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <Header />
      <div className="flex checkout-grid mb-5">
        <div className="checkout=products mr-12 mb-10 sm:w-2/3">
          <h1
            className="text-5xl mt-7 ml-12 text-left"
            style={{ fontFamily: "var(--p-font)" }}
          >
            Your Shopping Basket
          </h1>

          {basket.map((item) => {
            return <CheckoutProduct key={item.id} item={item} />;
          })}
        </div>
        <SubTotal />
      </div>

      <Footer />
    </>
  );
};

export default CheckoutPage;
