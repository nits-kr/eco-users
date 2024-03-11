import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setUpdateRating } from "../app/slice/localSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const GetStar = ({ totalStars = 5 }) => {
  const ecommercetoken = useSelector((data) => data?.local?.ecomWebtoken);
  const [rating, setRating] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // localStorage?.setItem("userRating", rating);
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
              {/* <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => {
                  setRating(ratingValue);
                  dispatch(setUpdateRating(ratingValue));
                }}
              /> */}
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => {
                  if (!ecommercetoken) {
                    Swal.fire({
                      title: "Login Required",
                      text: "Please log in before creating a review.",
                      icon: "info",
                      showCancelButton: true,
                      confirmButtonColor: "#0da487",
                      confirmButtonText: "Login",
                      cancelButtonText: "Cancel",
                      customClass: {
                        confirmButton: "custom-confirm-button-class me-3",
                      },
                    }).then((result) => {
                      if (result.isConfirmed) {
                        navigate("/login");
                      }
                    });
                    return;
                  } else {
                    setRating(ratingValue);
                    dispatch(setUpdateRating(ratingValue));
                  }
                }}
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
