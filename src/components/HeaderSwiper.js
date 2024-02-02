import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function HeaderSwiper() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide === 0 ? 1 : 0));
    }, 2500);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        height={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      >
        <SwiperSlide style={{ display: activeSlide === 0 ? "block" : "none" }}>
          <Link to="#" className="text-light">
            <strong className="me-1 ">Welcome to Techgropse eCommerce!</strong>
            Wrap new offers/gift every single day on Weekends.
            {/* <strong className="ms-1">New Coupon Code: Fast024</strong> */}
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ display: activeSlide === 1 ? "block" : "none" }}>
          <Link to="#" className="text-light">
            Something you love is now on sale!
            <Link to="/shop" className="text-white">
              {" "}
              Buy Now !
            </Link>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HeaderSwiper;
