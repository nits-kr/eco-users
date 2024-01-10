import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const GetStar = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  localStorage?.setItem("userRating", rating);
  const [hover, setHover] = useState(0);

  const starTitles = ["Terrible", "Poor", "Average", "Good", "Excellent"];

  return (
    <div>
      <div
        className="mx-1"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px",
          width: "150px",
        }}
      >
        {[...Array(totalStars)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i} title={starTitles[ratingValue - 1]}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <div style={{ marginTop: "-25px", marginLeft: "-7px" }}>
                <FaStar
                  size={27}
                  color={
                    ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                  }
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(0)}
                />
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default GetStar;
