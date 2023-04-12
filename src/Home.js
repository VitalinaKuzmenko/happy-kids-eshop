import React from "react";
import "./Home.css";
import ImageCarousel from "./ImageCarousel";
import Product from "./Product";

const Home = () => {
  const newCollection = require("./data/new_collection.json");
  console.log(newCollection);
  return (
    <>
      <div>
        <ImageCarousel />
      </div>
      <div className="flex flex-wrap justify-center">
        {newCollection.map((item) => {
          return <Product key={item.id} item={item} />;
        })}
      </div>
      <div className="flex flex-col"></div>
    </>
  );
};

export default Home;
