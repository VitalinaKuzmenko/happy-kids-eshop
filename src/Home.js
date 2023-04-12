import React from "react";
import "./Home.css";
import ImageCarousel from "./ImageCarousel";
import NewArrival from "./NewArrival";

const Home = () => {
  return (
    <>
      <div>
        <ImageCarousel />
      </div>
      <NewArrival />
      <button className="shop-all-button">Shop All</button>
    </>
  );
};

export default Home;
