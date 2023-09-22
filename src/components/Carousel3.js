import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import "./Carousal.css";

const Carousel3 = ({ autoPlay = false, delay = 3000 }) => {
  //   const images = [
  //     "../assets/images/review/1.jpg",
  //     "../assets/images/review/2.jpg",
  //     "../assets/images/review/1.jpg",
  //     "../assets/images/review/2.jpg",
  //     "../assets/images/review/1.jpg",
  //     "../assets/images/review/2.jpg",
  //   ];
  const content = [
    {
      title: "../assets/svg/leaf.svg#leaf",
      description: "Avail No Cost EMI on select cards for orders above ₹3000",
      offers: "1 offer",
    },
    {
      title: "../assets/svg/leaf.svg#leaf",
      description:
        "Upto ₹750.00 discount on select Credit Cards. 11 offers available.",
    },
    {
      title: "../assets/svg/leaf.svg#leaf",
      description: "Avail No Cost EMI on select cards for orders above ₹3000",
      offers: "1 offer",
    },
    {
      title: "../assets/svg/leaf.svg#leaf",
      description:
        "Upto ₹750.00 discount on select Credit Cards. 11 offers available.",
    },
    {
      title: "../assets/svg/leaf.svg#leaf",
      description: "Avail No Cost EMI on select cards for orders above ₹3000",
      offers: "1 offer",
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
      <div
        className="carousel-container my-2"
        style={{
          transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
          height: "150px",
          width: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* {content.map((item, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Slide ${index}`} />
            <div className="carousel-content">{item}</div>
          </div>
        ))} */}
        {content.map((item, index) => (
          <div key={index} className="carousel-slide border mx-1 shadow">
            <div className="carousel-content p-2">
              <h5 className="carousel-title">
                {" "}
                <strong>{item.title}</strong>{" "}
                <svg className="icon-width">
                  <use xlinkHref={item?.title} />
                </svg>
              </h5>
              <p className="carousel-description my-2">{item.description}</p>
              {/* <Link className="carousel-offers">
                {item.offers}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ fontSize: "10px", marginLeft: "3px" }}
                />
              </Link> */}
              {item.offers && (
                <Link className="carousel-offers">
                  {item.offers}
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{ fontSize: "10px", marginLeft: "3px" }}
                  />
                </Link>
              )}
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
