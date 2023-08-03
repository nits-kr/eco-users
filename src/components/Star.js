import React, { useState, useEffect } from "react";
import { ProductRating } from "./HttpServices";

const Star = ({ rating }) => {
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i key={i} className="fas fa-star" style={{ color: "#fdaf08" }}></i>
      );
    }

    // Render half star if applicable
    if (hasHalfStar) {
      stars.push(
        <i
          key={fullStars}
          className="fas fa-star-half-alt"
          style={{ color: "#fdaf08" }}
        ></i>
      );
    }

    // Render empty stars
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <i
          key={fullStars + i + 1}
          className="far fa-star"
          style={{ color: "#fdaf08" }}
        ></i>
      );
    }

    return stars;
  };

  return <div className="star-rating">{renderStars()}</div>;
};

export default Star;
