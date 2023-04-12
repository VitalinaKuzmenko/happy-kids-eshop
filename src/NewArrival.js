import React from "react";
import Product from "./Product";
import newArrival from "./data/new_arrival.json";

const NewArrival = () => {
  return (
    <div>
      <h1 className="text-5xl mt-7" style={{ fontFamily: "var(--p-font)" }}>
        New Arrivals
      </h1>
      <div className="flex flex-wrap justify-center">
        {newArrival.map((item) => {
          return <Product key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default NewArrival;
