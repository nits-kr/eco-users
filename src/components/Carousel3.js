import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import "./Carousal.css";

const Carousel3 = ({ autoPlay = true, delay = 5000 }) => {
  const content = [
    {
      title: "../../assets/svg/deliveryVan.svg",
      description:
        "Upto ₹750.00 discount on select Credit Cards. 11 offers available.",
      offers: "Free Delivery",
    },
    {
      title: "../../assets/svg/return.svg",
      description: "Avail No Cost EMI on select cards for orders above ₹3000",
      offers: "10 Days Return & Exchange",
    },
    {
      title: "../../assets/svg/checkmarks.svg",
      description:
        "Upto ₹750.00 discount on select Credit Cards. 11 offers available.",
      offers: "10 Day Warranty",
    },
    {
      title: "../../assets/svg/deliveryVanCheck.svg",
      description:
        "Upto ₹750.00 discount on select Credit Cards. 11 offers available.",
      offers: "Amazon Delivered",
    },
    {
      title: "../../assets/svg/dollarBook.svg",
      description: "Avail No Cost EMI on select cards for orders above ₹3000",
      offers: "Pay On Delivery",
    },
    {
      title: "../../assets/svg/dollarLock.svg",
      description: "Avail No Cost EMI on select cards for orders above ₹3000",
      offers: "Secure transaction",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 3;

  const nextSlide = () => {
    const newIndex = (currentIndex + slidesToShow) % content.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex =
      (currentIndex - slidesToShow + content.length) % content.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    let timer;
    if (autoPlay) {
      timer = setInterval(nextSlide, delay);
    }
    return () => clearInterval(timer);
  }, [autoPlay, currentIndex, delay]);

  return (
    <div className="carousel mt-3">
      <hr className="text-secondary" />
      <div
        className="carousel-container my-2"
        style={{
          transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
          height: "80px",
          width: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {content.map((item, index) => (
          <div key={index} className="carousel-slide">
            <div className="carousel-content p-2">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ height: "40px" }}>
                  <div className="service-box">
                    <div
                      className="service-image shadow"
                      style={{ borderRadius: "50%" }}
                    >
                      <img src={item?.title} className=" lazyload" alt="" />
                    </div>
                  </div>
                </div>

                <div
                  className="d-flex flex-direction-row align-items-start mt-2"
                  style={{ fontSize: "13px", height: "40px" }}
                >
                  <Link
                  // style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)" }}
                  >
                    {item.offers}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-button prev"
        onClick={prevSlide}
        style={{ height: "71px" }}
      >
        <FontAwesomeIcon
          icon={faAngleLeft}
          style={{
            marginRight: "5px",
            marginRight: "-12px",
            paddingRight: "-10px",
          }}
        />
      </button>
      <button
        className="carousel-button next"
        onClick={nextSlide}
        style={{ height: "71px" }}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          style={{
            marginRight: "5px",
            marginLeft: "-12px",
            paddingLeft: "-10px",
          }}
        />
      </button>
    </div>
  );
};

export default Carousel3;
