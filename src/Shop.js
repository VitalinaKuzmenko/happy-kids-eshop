import React from "react";
import Product from "./Product";
import products from "./data/products.json";

const Shop = () => {
  return (
    <div className="mb-12">
      <h1 className="text-5xl mt-7" style={{ fontFamily: "var(--p-font)" }}>
        Shop Collection
      </h1>
      <div className="flex flex-wrap justify-center">
        {products.map((item) => {
          return <Product key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
