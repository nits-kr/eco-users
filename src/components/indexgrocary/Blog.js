import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function Blog({ blogList }) {
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  const sliders = () => {
    return blogList?.map((item, index) => (
      <div key={index}>
        <div className="blog-box">
          <div className="product-header">
            <div className="blog-box-image">
              <Link to="/blog" className="blog-image">
                <img
                  src="../../assets/images/vegetable/blog/1.jpg"
                  className="bg-img  lazyload"
                  alt=""
                />
              </Link>
            </div>
            <Link to="/blog" className="blog-detail">
              <h6>20 March, 2022</h6>
              <h5>Fresh Vegetable Online</h5>
            </Link>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <>
      <div className="title section-t-space">
        <h2>Featured Blog</h2>
        <span className="title-leaf">
          <svg className="icon-width">
            <use xlinkHref="../../assets/svg/leaf.svg#leaf" />
          </svg>
        </span>
        <p>A virtual assistant collects the products from your list</p>
      </div>
      <div className="slider-3-blog ratio_65 no-arrow product-wrapper">
        <Slider {...settings2}>{sliders()}</Slider>
      </div>
    </>
  );
}

export default Blog;
