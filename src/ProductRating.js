import React from "react";
import Rating from "@mui/material/Rating";

const ProductRating = ({ rating }) => {
  return (
    <Rating
      name="read-only"
      value={rating}
      readOnly
      sx={{
        color: "rgb(6 95 70)",
      }}
    />
  );
};

export default ProductRating;
