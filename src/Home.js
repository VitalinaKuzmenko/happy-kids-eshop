import React from "react";
import "./Home.css";
import ImageCarousel from "./ImageCarousel";
import NewArrival from "./NewArrival";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <ImageCarousel />
      </div>
      <NewArrival />
      <Link to="/shop">
        <button className="shop-all-button">Shop All</button>
      </Link>
    </>
  );
};

export default Home;
