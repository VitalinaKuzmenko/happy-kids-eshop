import React from "react";
import "./Rating.css";

const Rating = ({ rating }) => {
  console.log(rating);

  return (
    <div className="rating">
      <input
        type="radio"
        name="rating"
        className="mask mask-star-2 bg-emerald-800"
        checked={Number(rating) === 1}
      />
      <input
        type="radio"
        name="rating"
        className="mask mask-star-2 bg-emerald-800"
        checked={Number(rating) === 2}
      />
      <input
        type="radio"
        name="rating"
        className="mask mask-star-2 bg-emerald-800"
        checked={Number(rating) === 3}
      />
      <input
        type="radio"
        name="rating"
        className="mask mask-star-2 bg-emerald-800"
        checked={Number(rating) === 4}
      />
      <input
        type="radio"
        name="rating"
        className="mask mask-star-2 bg-emerald-800"
        checked={Number(rating) === 5}
      />
    </div>
  );
};

export default Rating;
