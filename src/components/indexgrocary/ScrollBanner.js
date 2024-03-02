import React, { useEffect, useState } from "react";
import { useGetBannerListQuery } from "../../services/Post";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function ScrollBanner() {
  const [bannerList, setBannerList] = useState([]);

  const { data: categoryBanner } = useGetBannerListQuery({
    area: "Scrolling Banner",
  });
  useEffect(() => {
    if (categoryBanner) {
      setBannerList(categoryBanner?.results?.banners);
    }
  }, [categoryBanner]);

  var w = window.innerWidth;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: w > 500 ? 3 : 1,
    autoplay: true,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <section className="banner-section ratio_60 wow fadeInUp">
        <div className="container-fluid-lg">
          <div className="banner-slider ">
            <Slider {...settings}>
              {bannerList?.map((item, index) => {
                return (
                  <div className="banner-contain hover-effect " key={index}>
                    <Link
                      to="/shop"
                      state={{
                        URLType: item.URLType,
                        ...(item.URLType === "Category" && {
                          category_Id: item.category_Id,
                        }),
                        ...(item.URLType === "Subcategory" && {
                          subCategory_Id: item.subCategory_Id,
                        }),
                        ...(item.URLType === "subSubcategory" && {
                          subSubCategory_Id: item.subSubCategory_Id,
                        }),
                        ...(item.URLType === "product" && {
                          product_Id: item.product_Id,
                        }),
                      }}
                    >
                      <img
                        src={item?.image}
                        className="bg-img  lazyload"
                        alt=""
                        style={{ width: "455px", height: "250px" }}
                      />
                      <div className="banner-details">
                        <div className="banner-box">
                          <h6 className="text-danger">5% OFF</h6>
                          <h5>Hot Deals on New Items</h5>
                          <h6 className="text-content">
                            Daily Essentials Eggs &amp; Dairy
                          </h6>
                        </div>
                        <Link to="/shop" className="banner-button text-white">
                          Shop Now <i className="fa-solid fa-right-long ms-2" />
                        </Link>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default ScrollBanner;
