import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Slider from "react-slick";
import Header from "./Header";
import Footer from "./Footer";
import Star from "./Star";

function IndexFood() {
  var w = window.innerWidth;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: w > 500 ? 8 : 1,
    autoplay: true,
    slidesToScroll: 1,
  };
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <>
      {/* Loader Start */}
      {/* <div className="fullpage-loader">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
            </div> */}
      {/* Loader End */}
      {/* Header Start */}
      <Header />
      {/* Header End */}
      {/* mobile fix menu start */}
      <div className="mobile-menu d-md-none d-block mobile-cart">
        <ul>
          <li className="active">
            <Link to="/index-food">
              <i className="iconly-Home icli" />
              <span>Home</span>
            </Link>
          </li>
          <li className="mobile-category">
            <Link to="#">
              <i className="iconly-Category icli js-link" />
              <span>Category</span>
            </Link>
          </li>
          <li>
            <Link to="/search" className="search-box">
              <i className="iconly-Search icli" />
              <span>Search</span>
            </Link>
          </li>
          <li>
            <Link to="/wishlist" className="notifi-wishlist">
              <i className="iconly-Heart icli" />
              <span>My Wish</span>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="iconly-Bag-2 icli fly-cate" />
              <span>Cart</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* mobile fix menu end */}
      {/* Home Section Start */}
      <section className="home-section home-section-ratio pt-2">
        <div className="container-fluid-lg">
          <div className="row g-4">
            <div className="col-xxl-3 col-lg-4 col-sm-6 ratio_180 d-sm-block d-none">
              <div className="home-contain rounded">
                <div className="h-100">
                  <img
                    src="../assets/images/cake/banner/1.jpg"
                    className="bg-img  lazyload"
                    alt=""
                  />
                </div>
                <div className="home-detail p-top-left home-p-medium">
                  <div>
                    <h6 className="text-danger mb-2 fw-bold">
                      Fresh &amp; Delicious
                    </h6>
                    <h2 className="theme-color fw-bold">Fresh Bread</h2>
                    <p className="text-content d-md-block d-none">
                      Bento box burritos cherry bomb pepper dark and stormy with
                      ginger..
                    </p>
                    <Link to="/shop" className="shop-button">
                      Shop Now <i className="fa-solid fa-right-long ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-8 order-xxl-0 ratio_87">
              <div className="home-contain rounded">
                <div className="h-100">
                  <img
                    src="../assets/images/cake/banner/2.jpg"
                    className="bg-img  lazyload"
                    alt=""
                  />
                </div>
                <div className="home-detail p-center-left home-p-sm">
                  <div>
                    <h6>
                      Exclusive offer <span>30% Off</span>
                    </h6>
                    <h1 className="w-75 text-uppercase name-title poster-2 my-2">
                      we'll make <span className="name">handmade</span> your
                      <span className="name-2">sweet</span>
                    </h1>
                    <p className="w-50">
                      Earl grey latte Thai basil curry grains alfalfa sprouts
                      banana bread ginger carrot...
                    </p>
                    <button
                      // onclick="location.href = 'shop';"
                      onClick={() => {
                        window.location.href = "/shop";
                      }}
                      className="btn text-white mt-xxl-4 mt-2 home-button mend-auto theme-bg-color"
                    >
                      Shop Now{" "}
                      <i className="fa-solid fa-right-long icon ms-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-sm-6 ratio_180 custom-ratio d-xxl-block d-lg-none d-sm-block d-none">
              <div className="home-contain rounded">
                <img
                  src="../assets/images/cake/banner/3.jpg"
                  className="bg-img  lazyload"
                  alt=""
                />
                <div className="home-detail p-top-left home-p-medium">
                  <div>
                    <h6 className="text-danger mb-2 fw-bold">
                      Fresh &amp; Delicious
                    </h6>
                    <h2 className="theme-color fw-bold">Bakery Sweet</h2>
                    <p className="text-content d-md-block d-none">
                      Peanut butter crunch chia seeds red parsley basil
                      overflowing..
                    </p>
                    <Link to="/shop" className="shop-button">
                      Shop Now <i className="fa-solid fa-right-long ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Home Section End */}
      {/* Category Section Start */}
      <section>
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="slider-9">
                <Slider {...settings}>
                  <div>
                    <Link
                      to="/shop"
                      className="category-box category-box-2 category-dark"
                    >
                      <div>
                        <img
                          src="../assets/svg/2/1.svg"
                          className=" lazyload"
                          alt=""
                        />
                        <h5>Cake</h5>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/shop"
                      className="category-box category-box-2 category-dark"
                      data-wow-delay="0.2s"
                    >
                      <div>
                        <img
                          src="../assets/svg/2/2.svg"
                          className=" lazyload"
                          alt=""
                        />
                        <h5>Sandwich</h5>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/shop"
                      className="category-box category-box-2 category-dark"
                      data-wow-delay="0.3s"
                    >
                      <div>
                        <img
                          src="../assets/svg/2/3.svg"
                          className=" lazyload"
                          alt=""
                        />
                        <h5>Cookies</h5>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/shop"
                      className="category-box category-box-2 category-dark"
                      data-wow-delay="0.4s"
                    >
                      <div>
                        <img
                          src="../assets/svg/2/4.svg"
                          className=" lazyload"
                          alt=""
                        />
                        <h5>Pie</h5>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/shop"
                      className="category-box category-box-2 category-dark"
                      data-wow-delay="0.5s"
                    >
                      <div>
                        <img
                          src="../assets/svg/2/5.svg"
                          className=" lazyload"
                          alt=""
                        />
                        <h5>Bread</h5>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/shop"
                      className="category-box category-box-2 category-dark"
                      data-wow-delay="0.6s"
                    >
                      <div>
                        <img
                          src="../assets/svg/2/6.svg"
                          className=" lazyload"
                          alt=""
                        />
                        <h5>Biscuits</h5>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/shop"
                      className="category-box category-box-2 category-dark"
                      data-wow-delay="0.7s"
                    >
                      <div>
                        <img
                          src="../assets/svg/2/7.svg"
                          className=" lazyload"
                          alt=""
                        />
                        <h5>Bagel</h5>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/shop"
                      className="category-box category-box-2 category-dark"
                      data-wow-delay="0.8s"
                    >
                      <div>
                        <img
                          src="../assets/svg/2/8.svg"
                          className=" lazyload"
                          alt=""
                        />
                        <h5>Croissant</h5>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/shop"
                      className="category-box category-box-2 category-dark"
                      data-wow-delay="0.9s"
                    >
                      <div>
                        <img
                          src="../assets/svg/2/9.svg"
                          className=" lazyload"
                          alt=""
                        />
                        <h5>Cupcake</h5>
                      </div>
                    </Link>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Category Section End */}
      {/* Discount Section Start */}
      <section>
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div
                className="banner-contain hover-effect"
                style={{
                  backgroundImage: 'url("../assets/images/cake/banner/4.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block",
                }}
              >
                {/* <img
                                    src="../assets/images/cake/banner/4.jpg"
                                    className="bg-img  lazyload"
                                    alt=""
                                /> */}
                <div className="banner-details p-center p-sm-4 p-3 text-white text-center">
                  <div>
                    <h3 className="lh-base fw-bold text-white">
                      Get $3 Cashback! Min Order of $30
                    </h3>
                    <h6 className="coupon-code code-2">
                      Use Code : GROCERY1920
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Discount Section End */}
      {/* Banner Section Start */}
      {/* <section className="ratio_60">
                <div className="container-fluid-lg">
                    <div className="row g-3">
                        <div className="col-xxl-3 col-sm-6">
                            <Link to="/shop" className="banner-contain-2 hover-effect">
                                <img
                                    src="../assets/images/cake/banner/5.jpg"
                                    className="bg-img  lazyload"
                                    alt=""
                                />
                                <div className="banner-detail p-top-left">
                                    <div>
                                        <div className="banner-detail-box mb-md-3 mb-1">
                                            <h6 className="text-danger">5% OFF</h6>
                                            <h4 className="mt-2">New Items</h4>
                                            <h6 className="mt-2 text-content">Daily Essentials</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-3 col-sm-6">
                            <Link to="/shop" className="banner-contain-2 hover-effect">
                                <img
                                    src="../assets/images/cake/banner/6.jpg"
                                    className="bg-img  lazyload"
                                    alt=""
                                />
                                <div className="banner-detail p-top-left">
                                    <div>
                                        <div className="banner-detail-box mb-md-3 mb-1">
                                            <h6 className="text-danger">5% OFF</h6>
                                            <h4 className="mt-2">Save More</h4>
                                            <h6 className="mt-2 text-content">Fresh Toast Rusk</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-3 col-sm-6">
                            <Link to="/shop" className="banner-contain-2 hover-effect">
                                <img
                                    src="../assets/images/cake/banner/7.jpg"
                                    className="bg-img  lazyload"
                                    alt=""
                                />
                                <div className="banner-detail p-top-left">
                                    <div>
                                        <div className="banner-detail-box mb-md-3 mb-1">
                                            <h6 className="text-danger">5% OFF</h6>
                                            <h4 className="mt-2">Fresh Every Day!</h4>
                                            <h6 className="mt-2 text-content">Delivered @ Home</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-3 col-sm-6">
                            <Link to="/shop" className="banner-contain-2 hover-effect">
                                <img
                                    src="../assets/images/cake/banner/8.jpg"
                                    className="bg-img  lazyload"
                                    alt=""
                                />
                                <div className="banner-detail p-top-left">
                                    <div>
                                        <div className="banner-detail-box mb-md-3 mb-1">
                                            <h6 className="text-danger">5% OFF</h6>
                                            <h4 className="mt-2">Hot Deals</h4>
                                            <h6 className="mt-2 text-content">Fresh Cake</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section> */}
      <section className="ratio_60">
        <div className="container-fluid-lg">
          <div className="row g-3">
            <div className="col-xxl-3 col-sm-6">
              <Link
                to="/shop"
                className="banner-contain-2 hover-effect bg-size blur-up lazyloaded"
                style={{
                  backgroundImage: 'url("../assets/images/cake/banner/5.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block",
                }}
              >
                <img
                  src="../assets/images/cake/banner/5.jpg"
                  className="bg-img blur-up lazyload"
                  alt=""
                  style={{ display: "none" }}
                />
                <div className="banner-detail p-top-left">
                  <div>
                    <div className="banner-detail-box mb-md-3 mb-1">
                      <h6 className="text-danger">5% OFF</h6>
                      <h4 className="mt-2">New Items</h4>
                      <h6 className="mt-2 text-content">Daily Essentials</h6>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-xxl-3 col-sm-6">
              <Link
                to="/shop"
                className="banner-contain-2 hover-effect bg-size blur-up lazyloaded"
                style={{
                  backgroundImage: 'url("../assets/images/cake/banner/6.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block",
                }}
              >
                <img
                  src="../assets/images/cake/banner/6.jpg"
                  className="bg-img blur-up lazyload"
                  alt=""
                  style={{ display: "none" }}
                />
                <div className="banner-detail p-top-left">
                  <div>
                    <div className="banner-detail-box mb-md-3 mb-1">
                      <h6 className="text-danger">5% OFF</h6>
                      <h4 className="mt-2">Save More</h4>
                      <h6 className="mt-2 text-content">Fresh Toast Rusk</h6>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-xxl-3 col-sm-6">
              <Link
                to="/shop"
                className="banner-contain-2 hover-effect bg-size blur-up lazyloaded"
                style={{
                  backgroundImage: 'url("../assets/images/cake/banner/7.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block",
                }}
              >
                <img
                  src="../assets/images/cake/banner/7.jpg"
                  className="bg-img blur-up lazyload"
                  alt=""
                  style={{ display: "none" }}
                />
                <div className="banner-detail p-top-left">
                  <div>
                    <div className="banner-detail-box mb-md-3 mb-1">
                      <h6 className="text-danger">5% OFF</h6>
                      <h4 className="mt-2">Fresh Every Day!</h4>
                      <h6 className="mt-2 text-content">Delivered @ Home</h6>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-xxl-3 col-sm-6">
              <Link
                to="/shop"
                className="banner-contain-2 hover-effect bg-size blur-up lazyloaded"
                style={{
                  backgroundImage: 'url("../assets/images/cake/banner/8.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block",
                }}
              >
                <img
                  src="../assets/images/cake/banner/8.jpg"
                  className="bg-img blur-up lazyload"
                  alt=""
                  style={{ display: "none" }}
                />
                <div className="banner-detail p-top-left">
                  <div>
                    <div className="banner-detail-box mb-md-3 mb-1">
                      <h6 className="text-danger">5% OFF</h6>
                      <h4 className="mt-2">Hot Deals</h4>
                      <h6 className="mt-2 text-content">Fresh Cake</h6>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End */}
      {/* Product Section Start */}
      <section>
        <div className="container-fluid-lg">
          <div className="row g-3">
            <div className="col-xxl-9 col-xl-8">
              <div className="title title-flex">
                <div>
                  <h2>Top Save Today</h2>
                  <span className="title-leaf">
                    <svg className="icon-width">
                      <use xlinkHref="../assets/svg/leaf.svg#cake" />
                    </svg>
                  </span>
                </div>
                <div className="timing-box">
                  <div className="timing theme-bg-color">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-clock"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <h6 className="name">Expires in :</h6>
                    <div
                      className="time"
                      id="clockdiv-1"
                      data-hours={1}
                      data-minutes={2}
                      data-seconds={3}
                    >
                      <ul>
                        <li>
                          <div className="counter">
                            <div className="days">14</div>
                          </div>
                        </li>
                        <li>
                          <div className="counter">
                            <div className="hours">23</div>
                          </div>
                        </li>
                        <li>
                          <div className="counter">
                            <div className="minutes">45</div>
                          </div>
                        </li>
                        <li>
                          <div className="counter">
                            <div className="seconds">04</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-box-slider-2 no-arrow slick-initialized slick-slider">
                <button
                  className="slick-prev slick-arrow"
                  aria-label="Previous"
                  type="button"
                  style={{ display: "inline-block" }}
                >
                  Previous
                </button>
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: 3888,
                      transform: "translate3d(-972px, 0px, 0px)",
                    }}
                  >
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 243 }}
                      data-slick-index={-4}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        style={{
                          visibility: "visible",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/5.png"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Yumitos Chilli Sprinkled Potato Chips 100 g
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/6.png"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Fantasy Crunchy Choco Chip Cookies
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 243 }}
                      data-slick-index={-3}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        style={{
                          visibility: "visible",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/7.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Fresh Bread and Pastry Flour 200 g
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/8.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Milky Silicone Heart Chocolate Mould ( Pack of 1 )
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 243 }}
                      data-slick-index={-2}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        style={{
                          visibility: "visible",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/9.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              chocolate-chip-cookies 250 g
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/10.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Cupcake Holder for Birthday and Wedding Party 100
                              g
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 243 }}
                      data-slick-index={-1}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        style={{
                          visibility: "visible",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/1.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Muffets &amp; Tuffets Whole Wheat Bread 400 g
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/2.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Fresh Bread and Pastry Flour 200 g
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-current slick-active"
                      style={{ width: 243 }}
                      data-slick-index={0}
                      aria-hidden="false"
                      tabIndex={0}
                    >
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        style={{
                          visibility: "visible",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={0}>
                            <img
                              src="../assets/images/cake/product/1.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={0}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={0}>
                            <h6 className="name">
                              Muffets &amp; Tuffets Whole Wheat Bread 400 g
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={0}
                              fdprocessedid="k1iug"
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={0}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={0}>
                            <img
                              src="../assets/images/cake/product/2.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={0}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={0}>
                            <h6 className="name">
                              Fresh Bread and Pastry Flour 200 g
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={0}
                              fdprocessedid="svkm3p"
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={0}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      style={{ width: 243 }}
                      data-slick-index={1}
                      aria-hidden="false"
                      tabIndex={0}
                    >
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        style={{
                          visibility: "visible",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={0}>
                            <img
                              src="../assets/images/cake/product/3.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={0}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={0}>
                            <h6 className="name">
                              Peanut Butter Bite Premium Butter Cookies 600 g
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={0}
                              fdprocessedid="ilmrbq"
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={0}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={0}>
                            <img
                              src="../assets/images/cake/product/4.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={0}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={0}>
                            <h6 className="name">
                              SnackAmor Combo Pack of Jowar Stick and Jowar
                              Chips
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={0}
                              fdprocessedid="6rdhas"
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={0}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      style={{ width: 243 }}
                      data-slick-index={2}
                      aria-hidden="false"
                      tabIndex={0}
                    >
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        style={{
                          visibility: "visible",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={0}>
                            <img
                              src="../assets/images/cake/product/5.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={0}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={0}>
                            <h6 className="name">
                              Yumitos Chilli Sprinkled Potato Chips 100 g
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={0}
                              fdprocessedid="ubg954"
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={0}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={0}>
                            <img
                              src="../assets/images/cake/product/6.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={0}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={0}>
                            <h6 className="name">
                              Fantasy Crunchy Choco Chip Cookies
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={0}
                              fdprocessedid="0lkew5l"
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={0}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      style={{ width: 243 }}
                      data-slick-index={3}
                      aria-hidden="false"
                      tabIndex={0}
                    >
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        style={{
                          visibility: "visible",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={0}>
                            <img
                              src="../assets/images/cake/product/7.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={0}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={0}>
                            <h6 className="name">
                              Fresh Bread and Pastry Flour 200 g
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={0}
                              fdprocessedid="sz9cf"
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={0}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={0}>
                            <img
                              src="../assets/images/cake/product/8.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={0}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={0}>
                            <h6 className="name">
                              Milky Silicone Heart Chocolate Mould ( Pack of 1 )
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={0}
                              fdprocessedid="8hc5qq"
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={0}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide"
                      style={{ width: 243 }}
                      data-slick-index={4}
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        style={{
                          visibility: "visible",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/9.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              chocolate-chip-cookies 250 g
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/10.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Cupcake Holder for Birthday and Wedding Party 100
                              g
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide"
                      style={{ width: 243 }}
                      data-slick-index={5}
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        style={{
                          visibility: "visible",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/1.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Muffets &amp; Tuffets Whole Wheat Bread 400 g
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/2.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Fresh Bread and Pastry Flour 200 g
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 243 }}
                      data-slick-index={6}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        style={{
                          visibility: "visible",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/1.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Muffets &amp; Tuffets Whole Wheat Bread 400 g
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/2.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Fresh Bread and Pastry Flour 200 g
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 243 }}
                      data-slick-index={7}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        style={{
                          visibility: "visible",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/3.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Peanut Butter Bite Premium Butter Cookies 600 g
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/4.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              SnackAmor Combo Pack of Jowar Stick and Jowar
                              Chips
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 243 }}
                      data-slick-index={8}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        style={{
                          visibility: "visible",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/5.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Yumitos Chilli Sprinkled Potato Chips 100 g
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/6.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Fantasy Crunchy Choco Chip Cookies
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 243 }}
                      data-slick-index={9}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        style={{
                          visibility: "visible",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/7.png"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Fresh Bread and Pastry Flour 200 g
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/8.png"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Milky Silicone Heart Chocolate Mould ( Pack of 1 )
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 243 }}
                      data-slick-index={10}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        style={{
                          visibility: "visible",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/9.png"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              chocolate-chip-cookies 250 g
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/10.png"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Cupcake Holder for Birthday and Wedding Party 100
                              g
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 243 }}
                      data-slick-index={11}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        style={{
                          visibility: "visible",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/1.png"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Muffets &amp; Tuffets Whole Wheat Bread 400 g
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/2.png"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Fresh Bread and Pastry Flour 200 g
                            </h6>
                          </Link>
                          <h5 className="sold text-content">
                            <span className="theme-color price">$26.69</span>
                            <del>28.56</del>
                          </h5>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                            <h6 className="theme-color">In Stock</h6>
                          </div>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="slick-next slick-arrow"
                  aria-label="Next"
                  type="button"
                  style={{ display: "inline-block" }}
                >
                  Next
                </button>
              </div>
              <div className="title section-t-space">
                <h2>ALL KINDS OF CAKES</h2>
                <span className="title-leaf">
                  <svg className="icon-width">
                    <use xlinkHref="../assets/svg/leaf.svg#cake" />
                  </svg>
                </span>
              </div>
              <div className="slider-3_2 product-wrapper slick-initialized slick-slider">
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: 969,
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                  >
                    <div
                      className="slick-slide slick-current slick-active"
                      data-slick-index={0}
                      aria-hidden="false"
                      tabIndex={0}
                      style={{ width: 323 }}
                    >
                      <div
                        className="product-box-2 wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <Link
                          to="/product"
                          className="product-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/cake/pro/1.jpg"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={0}>
                            <h6>Creamy Chocolate Cake</h6>
                          </Link>
                          <ul className="rating">
                            <Star />
                          </ul>
                          <h5>
                            $140 <del>$180</del>
                          </h5>
                        </div>
                      </div>
                      <div
                        className="product-box-2 wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeIn",
                        }}
                      >
                        <Link
                          to="/product"
                          className="product-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/cake/pro/2.jpg"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={0}>
                            <h6>Creamy White Forest</h6>
                          </Link>
                          <ul className="rating">
                            <Star />
                          </ul>
                          <h5>
                            $140 <del>$180</del>
                          </h5>
                        </div>
                      </div>
                      <div
                        className="product-box-2 wow fadeIn"
                        data-wow-delay="0.2s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.2s",
                          animationName: "fadeIn",
                        }}
                      >
                        <Link
                          to="/product"
                          className="product-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/cake/pro/3.jpg"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={0}>
                            <h6>Fruit Cherry Cake</h6>
                          </Link>
                          <ul className="rating">
                            <Star />
                          </ul>
                          <h5>
                            $140 <del>$180</del>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      data-slick-index={1}
                      aria-hidden="false"
                      tabIndex={0}
                      style={{ width: 323 }}
                    >
                      <div
                        className="product-box-2 wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <Link
                          to="/product"
                          className="product-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/cake/pro/4.jpg"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={0}>
                            <h6>Muffets Burger Bun</h6>
                          </Link>
                          <ul className="rating">
                            <Star />
                          </ul>
                          <h5>
                            $140 <del>$180</del>
                          </h5>
                        </div>
                      </div>
                      <div
                        className="product-box-2 wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeIn",
                        }}
                      >
                        <Link
                          to="/product"
                          className="product-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/cake/pro/5.jpg"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={0}>
                            <h6>Grand Celebration Cake</h6>
                          </Link>
                          <ul className="rating">
                            <Star />
                          </ul>
                          <h5>
                            $140 <del>$180</del>
                          </h5>
                        </div>
                      </div>
                      <div
                        className="product-box-2 wow fadeIn"
                        data-wow-delay="0.2s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.2s",
                          animationName: "fadeIn",
                        }}
                      >
                        <Link
                          to="/product"
                          className="product-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/cake/pro/6.jpg"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={0}>
                            <h6>Sweet Cake</h6>
                          </Link>
                          <ul className="rating">
                            <Star />
                          </ul>
                          <h5>
                            $140 <del>$180</del>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      data-slick-index={2}
                      aria-hidden="false"
                      tabIndex={0}
                      style={{ width: 323 }}
                    >
                      <div
                        className="product-box-2 wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <Link
                          to="/product"
                          className="product-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/cake/pro/1.jpg"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={0}>
                            <h6>Creamy Chocolate Cake</h6>
                          </Link>
                          <ul className="rating">
                            <Star />
                          </ul>
                          <h5>
                            $140 <del>$180</del>
                          </h5>
                        </div>
                      </div>
                      <div
                        className="product-box-2 wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeIn",
                        }}
                      >
                        <Link
                          to="/product"
                          className="product-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/cake/pro/2.jpg"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={0}>
                            <h6>Creamy White Forest</h6>
                          </Link>
                          <ul className="rating">
                            <Star />
                          </ul>
                          <h5>
                            $140 <del>$180</del>
                          </h5>
                        </div>
                      </div>
                      <div
                        className="product-box-2 wow fadeIn"
                        data-wow-delay="0.2s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.2s",
                          animationName: "fadeIn",
                        }}
                      >
                        <Link
                          to="/product"
                          className="product-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/cake/pro/3.jpg"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={0}>
                            <h6>Fruit Cherry Cake</h6>
                          </Link>
                          <ul className="rating">
                            <Star />
                          </ul>
                          <h5>
                            $140 <del>$180</del>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="title section-t-space">
                <h2>Your Daily Staples</h2>
                <span className="title-leaf">
                  <svg className="icon-width">
                    <use xlinkHref="../assets/svg/leaf.svg#cake" />
                  </svg>
                </span>
              </div>
              <div className="product-box-slider-2 no-arrow slick-initialized slick-slider">
                <button
                  className="slick-prev slick-arrow"
                  aria-label="Previous"
                  type="button"
                  style={{ display: "inline-block" }}
                >
                  Previous
                </button>
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: 3888,
                      transform: "translate3d(-972px, 0px, 0px)",
                    }}
                  >
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 243 }}
                      data-slick-index={-4}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/5.png"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Yumitos Chilli Sprinkled Potato Chips 100 g
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/6.png"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Fantasy Crunchy Choco Chip Cookies
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 243 }}
                      data-slick-index={-3}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/7.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Fresh Bread and Pastry Flour 200 g
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/8.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Milky Silicone Heart Chocolate Mould ( Pack of 1 )
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 243 }}
                      data-slick-index={-2}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/9.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              chocolate-chip-cookies 250 g
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/10.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Cupcake Holder for Birthday and Wedding Party 100
                              g
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 243 }}
                      data-slick-index={-1}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/5.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Yumitos Chilli Sprinkled Potato Chips 100 g
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/6.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Fantasy Crunchy Choco Chip Cookies
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-current slick-active"
                      style={{ width: 243 }}
                      data-slick-index={0}
                      aria-hidden="false"
                      tabIndex={0}
                    >
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={0}>
                            <img
                              src="../assets/images/cake/product/1.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={0}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={0}>
                            <h6 className="name">
                              Muffets &amp; Tuffets Whole Wheat Bread 400 g
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={0}
                              fdprocessedid="jcb3b"
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={0}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={0}>
                            <img
                              src="../assets/images/cake/product/2.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={0}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={0}>
                            <h6 className="name">
                              Fresh Bread and Pastry Flour 200 g
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={0}
                              fdprocessedid="50il76"
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={0}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      style={{ width: 243 }}
                      data-slick-index={1}
                      aria-hidden="false"
                      tabIndex={0}
                    >
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={0}>
                            <img
                              src="../assets/images/cake/product/3.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={0}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={0}>
                            <h6 className="name">
                              Peanut Butter Bite Premium Butter Cookies 600 g
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={0}
                              fdprocessedid="10cmvo"
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={0}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={0}>
                            <img
                              src="../assets/images/cake/product/4.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={0}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={0}>
                            <h6 className="name">
                              SnackAmor Combo Pack of Jowar Stick and Jowar
                              Chips
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={0}
                              fdprocessedid="flz8zi"
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={0}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      style={{ width: 243 }}
                      data-slick-index={2}
                      aria-hidden="false"
                      tabIndex={0}
                    >
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={0}>
                            <img
                              src="../assets/images/cake/product/5.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={0}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={0}>
                            <h6 className="name">
                              Yumitos Chilli Sprinkled Potato Chips 100 g
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={0}
                              fdprocessedid="3x39o8"
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={0}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={0}>
                            <img
                              src="../assets/images/cake/product/6.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={0}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={0}>
                            <h6 className="name">
                              Fantasy Crunchy Choco Chip Cookies
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={0}
                              fdprocessedid="7wn98r"
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={0}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      style={{ width: 243 }}
                      data-slick-index={3}
                      aria-hidden="false"
                      tabIndex={0}
                    >
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={0}>
                            <img
                              src="../assets/images/cake/product/7.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={0}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={0}>
                            <h6 className="name">
                              Fresh Bread and Pastry Flour 200 g
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={0}
                              fdprocessedid="z04ift"
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={0}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={0}>
                            <img
                              src="../assets/images/cake/product/8.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={0}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={0}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={0}>
                            <h6 className="name">
                              Milky Silicone Heart Chocolate Mould ( Pack of 1 )
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={0}
                              fdprocessedid="9ot7x3"
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={0}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={0}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide"
                      style={{ width: 243 }}
                      data-slick-index={4}
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/9.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              chocolate-chip-cookies 250 g
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/10.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Cupcake Holder for Birthday and Wedding Party 100
                              g
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide"
                      style={{ width: 243 }}
                      data-slick-index={5}
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/5.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Yumitos Chilli Sprinkled Potato Chips 100 g
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/6.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Fantasy Crunchy Choco Chip Cookies
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 243 }}
                      data-slick-index={6}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/1.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Muffets &amp; Tuffets Whole Wheat Bread 400 g
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/2.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Fresh Bread and Pastry Flour 200 g
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 243 }}
                      data-slick-index={7}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/3.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Peanut Butter Bite Premium Butter Cookies 600 g
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/4.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              SnackAmor Combo Pack of Jowar Stick and Jowar
                              Chips
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 243 }}
                      data-slick-index={8}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/5.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Yumitos Chilli Sprinkled Potato Chips 100 g
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/6.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Fantasy Crunchy Choco Chip Cookies
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 243 }}
                      data-slick-index={9}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/7.png"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Fresh Bread and Pastry Flour 200 g
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/8.png"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Milky Silicone Heart Chocolate Mould ( Pack of 1 )
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 243 }}
                      data-slick-index={10}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/9.png"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              chocolate-chip-cookies 250 g
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/10.png"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Cupcake Holder for Birthday and Wedding Party 100
                              g
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 243 }}
                      data-slick-index={11}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/5.png"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Yumitos Chilli Sprinkled Potato Chips 100 g
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-box product-box-bg wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeIn",
                        }}
                      >
                        <div className="product-image">
                          <Link to="/product" tabIndex={-1}>
                            <img
                              src="../assets/images/cake/product/6.png"
                              className="img-fluid blur-up lazyload"
                              alt=""
                            />
                          </Link>
                          <ul className="product-option">
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="View"
                            >
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#view"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-eye"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Compare"
                            >
                              <Link to="/compare" tabIndex={-1}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-refresh-cw"
                                >
                                  <polyline points="23 4 23 10 17 10" />
                                  <polyline points="1 20 1 14 7 14" />
                                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                              </Link>
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Wishlist"
                            >
                              <Link
                                to="/wishlist"
                                className="notifi-wishlist"
                                tabIndex={-1}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-heart"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-detail">
                          <Link to="/product" tabIndex={-1}>
                            <h6 className="name">
                              Fantasy Crunchy Choco Chip Cookies
                            </h6>
                          </Link>
                          <div className="product-rating mt-2">
                            <ul className="rating">
                              <Star />
                            </ul>
                          </div>
                          <h6 className="sold weight text-content fw-normal">
                            1 KG
                          </h6>
                          <h6 className="price theme-color">$ 80.00</h6>
                          <div className="add-to-cart-box bg-white">
                            <button
                              className="btn btn-add-cart addcart-button"
                              tabIndex={-1}
                            >
                              Add
                              <span className="add-icon bg-light-orange">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </button>
                            <div className="cart_qty qty-box">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                  tabIndex={-1}
                                />
                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  tabIndex={-1}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="slick-next slick-arrow"
                  aria-label="Next"
                  type="button"
                  style={{ display: "inline-block" }}
                >
                  Next
                </button>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 d-none d-xl-block">
              <div className="position-sticky top-0">
                <div
                  className="ratio_209 rounded wow fadeIn"
                  style={{ visibility: "visible", animationName: "fadeIn" }}
                >
                  <div
                    className="banner-contain-2 rounded hover-effect bg-size blur-up lazyloaded"
                    style={{
                      backgroundImage:
                        'url("../assets/images/cake/banner/10.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      display: "block",
                    }}
                  >
                    <img
                      src="../assets/images/cake/banner/10.jpg"
                      className="bg-img blur-up lazyload"
                      alt=""
                      style={{ display: "none" }}
                    />
                    <div className="banner-detail p-top-left">
                      <div>
                        <h6 className="text-uppercase theme-color fw-500">
                          seafood
                        </h6>
                        <h3 className="text-uppercase">
                          special <span className="brand-name">brand</span>
                        </h3>
                        <p className="text-content fw-500 mt-3 lh-lg">
                          Special offer on the discount very hungry cake and
                          sweets
                        </p>
                        <div className="banner-detail-box banner-detail-box-2 mb-md-3 mb-1">
                          <h4 className="text-uppercase">up to</h4>
                          <h2 className="mt-2">50%</h2>
                          <h3 className="text-uppercase">off</h3>
                        </div>
                        <div>
                          <button
                            onclick="location.href = 'shop';"
                            className="btn text-white btn-md mt-xxl-4 mt-2 home-button mend-auto theme-bg-color"
                            fdprocessedid="9nr106"
                          >
                            Shop Now
                            <i className="fa-solid fa-right-long icon ms-2" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="ratio_125 section-t-space wow fadeIn"
                  style={{ visibility: "visible", animationName: "fadeIn" }}
                >
                  <div
                    className="banner-contain-2 rounded hover-effect bg-size blur-up lazyloaded"
                    style={{
                      backgroundImage:
                        'url("../assets/images/cake/banner/9.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      display: "block",
                    }}
                  >
                    <img
                      src="../assets/images/cake/banner/9.jpg"
                      className="bg-img blur-up lazyload"
                      alt=""
                      style={{ display: "none" }}
                    />
                    <div className="banner-detail p-top-left">
                      <div>
                        <h6 className="text-uppercase theme-color fw-500">
                          Freash Every Day!
                        </h6>
                        <h3 className="text-pacifico mt-2">
                          Delicioud <span className="theme-color">Bread</span>
                        </h3>
                        <p className="text-content fw-500 mt-3 w-75 mend-auto">
                          Delicioud Bread and Brend new fresh bread.
                        </p>
                        <button
                          onclick="location.href = 'shop';"
                          className="btn text-white btn-md mt-2 home-button mend-auto theme-bg-color"
                          fdprocessedid="3emv3"
                        >
                          Shop Now{" "}
                          <i className="fa-solid fa-right-long icon ms-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="section-t-space wow fadeIn"
                  style={{ visibility: "visible", animationName: "fadeIn" }}
                >
                  <div className="category-menu category-menu-2">
                    <h3>Customer Comment</h3>
                    <div className="review-box">
                      <div className="review-contain">
                        <h5 className="w-75">
                          We Care About Our Customer Experience
                        </h5>
                        <p>
                          In publishing and graphic design, Lorem ipsum is a
                          placeholder text commonly used to demonstrate the
                          visual form of a document or a typeface without
                          relying on meaningful content.
                        </p>
                      </div>
                      <div className="review-profile">
                        <div className="review-image">
                          <img
                            src="../assets/images/vegetable/review/1.jpg"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </div>
                        <div className="review-detail">
                          <h5>Tina Mcdonnale</h5>
                          <h6>Sale Manager</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Section End */}
      {/* Banner Section Start */}
      <section>
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div
                className="home-contain hover-effect"
                style={{
                  backgroundImage: 'url("../assets/images/cake/banner/11.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block",
                }}
              >
                {/* <img
                                    src="../assets/images/cake/banner/11.jpg"
                                    className="bg-img  lazyload"
                                    alt=""
                                /> */}
                <div className="home-detail p-center position-relative text-center">
                  <div>
                    <h3 className="text-danger text-uppercase fw-bold mb-0">
                      limited Time Offer
                    </h3>
                    <h2 className="theme-color text-pacifico fw-normal mb-0 super-sale text-center">
                      Super
                    </h2>
                    <h2 className="home-name text-uppercase">sale</h2>
                    <h3 className="text-pacifico fw-normal text-content text-center">
                      www.Techgropse eCommerce.com
                    </h3>
                    <ul className="social-icon">
                      <li>
                        <Link to="https://www.instagram.com/">
                          <i className="fa-brands fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.facebook.com/">
                          <i className="fa-brands fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://twitter.com/">
                          <i className="fa-brands fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.whatsapp.com/">
                          <i className="fa-brands fa-whatsapp" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End */}
      {/* Top Selling Section Start */}
      <section className="top-selling-section">
        <div className="container-fluid-lg">
          <div className="slider-4-1 slick-initialized slick-slider">
            <div className="slick-list draggable">
              <div
                className="slick-track"
                style={{
                  opacity: 1,
                  width: 1292,
                  transform: "translate3d(0px, 0px, 0px)",
                }}
              >
                <div
                  className="slick-slide slick-current slick-active"
                  tabIndex={0}
                  style={{ width: 323 }}
                  data-slick-index={0}
                  aria-hidden="false"
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="top-selling-box">
                        <div className="top-selling-title">
                          <h3>Top Selling</h3>
                        </div>
                        <div
                          className="top-selling-contain wow fadeInUp"
                          style={{
                            visibility: "visible",
                            animationName: "fadeInUp",
                          }}
                        >
                          <Link
                            to="/product"
                            className="top-selling-image"
                            tabIndex={0}
                          >
                            <img
                              src="../assets/images/cake/pro/1.jpg"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>Creamy Chocolate Cake</h5>
                            </Link>
                            <div className="product-rating">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6>$ 10.00</h6>
                          </div>
                        </div>
                        <div
                          className="top-selling-contain wow fadeInUp"
                          data-wow-delay="0.5s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.5s",
                            animationName: "fadeInUp",
                          }}
                        >
                          <Link
                            to="/product"
                            className="top-selling-image"
                            tabIndex={0}
                          >
                            <img
                              src="../assets/images/cake/pro/2.jpg"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>Creamy White Forest</h5>
                            </Link>
                            <div className="product-rating">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6>$ 40.00</h6>
                          </div>
                        </div>
                        <div
                          className="top-selling-contain wow fadeInUp"
                          data-wow-delay="0.5s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.5s",
                            animationName: "fadeInUp",
                          }}
                        >
                          <Link
                            to="/product"
                            className="top-selling-image"
                            tabIndex={0}
                          >
                            <img
                              src="../assets/images/cake/pro/3.jpg"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>Fruit Cherry Cake</h5>
                            </Link>
                            <div className="product-rating">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6>$ 45.00</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-active"
                  tabIndex={0}
                  style={{ width: 323 }}
                  data-slick-index={1}
                  aria-hidden="false"
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="top-selling-box">
                        <div className="top-selling-title">
                          <h3>Trending Products</h3>
                        </div>
                        <div
                          className="top-selling-contain wow fadeInUp"
                          style={{
                            visibility: "visible",
                            animationName: "fadeInUp",
                          }}
                        >
                          <Link
                            to="/product"
                            className="top-selling-image"
                            tabIndex={0}
                          >
                            <img
                              src="../assets/images/cake/pro/5.jpg"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>Grand Celebration Cake</h5>
                            </Link>
                            <div className="product-rating">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6>$ 10.00</h6>
                          </div>
                        </div>
                        <div
                          className="top-selling-contain wow fadeInUp"
                          data-wow-delay="0.2s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.2s",
                            animationName: "fadeInUp",
                          }}
                        >
                          <Link
                            to="/product"
                            className="top-selling-image"
                            tabIndex={0}
                          >
                            <img
                              src="../assets/images/cake/pro/6.jpg"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>Sweet Cake</h5>
                            </Link>
                            <div className="product-rating">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6>$ 40.00</h6>
                          </div>
                        </div>
                        <div
                          className="top-selling-contain wow fadeInUp"
                          data-wow-delay="0.4s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.4s",
                            animationName: "fadeInUp",
                          }}
                        >
                          <Link
                            to="/product"
                            className="top-selling-image"
                            tabIndex={0}
                          >
                            <img
                              src="../assets/images/cake/pro/1.jpg"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>Creamy Chocolate Cake</h5>
                            </Link>
                            <div className="product-rating">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6>$ 85.00</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-active"
                  tabIndex={0}
                  style={{ width: 323 }}
                  data-slick-index={2}
                  aria-hidden="false"
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="top-selling-box">
                        <div className="top-selling-title">
                          <h3>Recently added</h3>
                        </div>
                        <div
                          className="top-selling-contain wow fadeInUp"
                          style={{
                            visibility: "visible",
                            animationName: "fadeInUp",
                          }}
                        >
                          <Link
                            to="/product"
                            className="top-selling-image"
                            tabIndex={0}
                          >
                            <img
                              src="../assets/images/cake/pro/4.jpg"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>Fruit Cherry Cake</h5>
                            </Link>
                            <div className="product-rating">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6>$ 10.00</h6>
                          </div>
                        </div>
                        <div
                          className="top-selling-contain wow fadeInUp"
                          data-wow-delay="0.2s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.2s",
                            animationName: "fadeInUp",
                          }}
                        >
                          <Link
                            to="/product"
                            className="top-selling-image"
                            tabIndex={0}
                          >
                            <img
                              src="../assets/images/cake/pro/5.jpg"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>Creamy Chocolate Cake</h5>
                            </Link>
                            <div className="product-rating">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6>$ 40.00</h6>
                          </div>
                        </div>
                        <div
                          className="top-selling-contain wow fadeInUp"
                          data-wow-delay="0.4s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.4s",
                            animationName: "fadeInUp",
                          }}
                        >
                          <Link
                            to="/product"
                            className="top-selling-image"
                            tabIndex={0}
                          >
                            <img
                              src="../assets/images/cake/pro/6.jpg"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>Creamy White Forest</h5>
                            </Link>
                            <div className="product-rating">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6>$ 45.00</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-active"
                  tabIndex={0}
                  style={{ width: 323 }}
                  data-slick-index={3}
                  aria-hidden="false"
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="top-selling-box">
                        <div className="top-selling-title">
                          <h3>Top Rated</h3>
                        </div>
                        <div
                          className="top-selling-contain wow fadeInUp"
                          style={{
                            visibility: "visible",
                            animationName: "fadeInUp",
                          }}
                        >
                          <Link
                            to="/product"
                            className="top-selling-image"
                            tabIndex={0}
                          >
                            <img
                              src="../assets/images/cake/pro/3.jpg"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>Muffets Burger Bun</h5>
                            </Link>
                            <div className="product-rating">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6>$ 10.00</h6>
                          </div>
                        </div>
                        <div
                          className="top-selling-contain wow fadeInUp"
                          data-wow-delay="0.2s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.2s",
                            animationName: "fadeInUp",
                          }}
                        >
                          <Link
                            to="/product"
                            className="top-selling-image"
                            tabIndex={0}
                          >
                            <img
                              src="../assets/images/cake/pro/4.jpg"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>Grand Celebration Cake</h5>
                            </Link>
                            <div className="product-rating">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6>$ 40.00</h6>
                          </div>
                        </div>
                        <div
                          className="top-selling-contain wow fadeInUp"
                          data-wow-delay="0.4s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.4s",
                            animationName: "fadeInUp",
                          }}
                        >
                          <Link
                            to="/product"
                            className="top-selling-image"
                            tabIndex={0}
                          >
                            <img
                              src="../assets/images/cake/pro/5.jpg"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>Sweet Cake</h5>
                            </Link>
                            <div className="product-rating">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6>$ 45.00</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Top Selling Section End */}
      {/* Newsletter Section Start */}
      <section className="newsletter-section section-b-space">
        <div className="container-fluid-lg">
          <div className="newsletter-box newsletter-box-2 newsletter-box-3">
            <div className="newsletter-contain py-5">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-4 col-lg-5 col-md-7 col-sm-9 offset-xxl-2 offset-md-1">
                    <div className="newsletter-detail">
                      <h2>Join our newsletter and get...</h2>
                      <h5>$20 discount for your first order</h5>
                      <div className="input-box">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Enter Your Email"
                        />
                        <i className="fa-solid fa-envelope arrow" />
                        <button className="sub-btn btn text-white theme-bg-color">
                          <span className="d-sm-block d-none">Subscribe</span>
                          <i className="fa-solid fa-arrow-right icon" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter Section End */}
      {/* Footer Section Start */}
      <Footer />
      {/* Footer Section End */}
      {/* Location Modal Start */}
      <div
        className="modal location-modal fade theme-modal"
        id="locationModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Choose your Delivery Location
              </h5>
              <p className="mt-1 text-content">
                Enter your address and we will specify the offer for your area.
              </p>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="modal-body">
              <div className="location-list">
                <div className="search-input">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search Your Area"
                  />
                  <i className="fa-solid fa-magnifying-glass" />
                </div>
                <div className="disabled-box">
                  <h6>Select a Location</h6>
                </div>
                <ul className="location-select custom-height">
                  <li>
                    <Link to="#">
                      <h6>Alabama</h6>
                      <span>Min: $130</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <h6>Arizona</h6>
                      <span>Min: $150</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <h6>California</h6>
                      <span>Min: $110</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <h6>Colorado</h6>
                      <span>Min: $140</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <h6>Florida</h6>
                      <span>Min: $160</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <h6>Georgia</h6>
                      <span>Min: $120</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <h6>Kansas</h6>
                      <span>Min: $170</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <h6>Minnesota</h6>
                      <span>Min: $120</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <h6>New York</h6>
                      <span>Min: $110</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <h6>Washington</h6>
                      <span>Min: $130</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Location Modal End */}
      {/* Quick View Modal Box Start */}
      <div
        className="modal fade theme-modal view-modal"
        id="view"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header p-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="modal-body">
              <div className="row g-sm-4 g-2">
                <div className="col-lg-6">
                  <div className="slider-image">
                    <img
                      src="../assets/images/cake/product/4.png"
                      className="img-fluid  lazyload"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-sidebar-modal">
                    <h4 className="title-name">
                      SnackAmor Combo Pack of Jowar Stick and Jowar Chips
                    </h4>
                    <h4 className="price">$36.99</h4>
                    <div className="product-rating">
                      <ul className="rating">
                        <li>
                          <i data-feather="star" className="fill" />
                        </li>
                        <li>
                          <i data-feather="star" className="fill" />
                        </li>
                        <li>
                          <i data-feather="star" className="fill" />
                        </li>
                        <li>
                          <i data-feather="star" className="fill" />
                        </li>
                        <li>
                          <i data-feather="star" />
                        </li>
                      </ul>
                      <span className="ms-2">8 Reviews</span>
                      <span className="ms-2 text-danger">
                        6 sold in last 16 hours
                      </span>
                    </div>
                    <div className="product-detail">
                      <h4>Product Details :</h4>
                      <p>
                        Candy canes sugar plum tart cotton candy chupa chups
                        sugar plum chocolate I love. Caramels marshmallow icing
                        dessert candy canes I love soufflé I love toffee.
                        Marshmallow pie sweet sweet roll sesame snaps tiramisu
                        jelly bear claw. Bonbon muffin I love carrot cake sugar
                        plum dessert bonbon.
                      </p>
                    </div>
                    <ul className="brand-list">
                      <li>
                        <div className="brand-box">
                          <h5>Brand Name:</h5>
                          <h6>Black Forest</h6>
                        </div>
                      </li>
                      <li>
                        <div className="brand-box">
                          <h5>Product Code:</h5>
                          <h6>W0690034</h6>
                        </div>
                      </li>
                      <li>
                        <div className="brand-box">
                          <h5>Product Type:</h5>
                          <h6>lorem ipsum</h6>
                        </div>
                      </li>
                    </ul>
                    <div className="select-size">
                      <h4>Cake Size :</h4>
                      <select
                        className="form-select select-form-size"
                        defaultValue="Select Size"
                      >
                        <option value="">Select Size</option>
                        <option value="1.2">1/2 KG</option>
                        <option value={0}>1 KG</option>
                        <option value="1.5">1/5 KG</option>
                        <option value="red">Red Roses</option>
                        <option value="pink">With Pink Roses</option>
                      </select>
                    </div>
                    <div className="modal-button">
                      <button
                        // onclick="location.href = 'cart';"
                        onClick={() => {
                          window.location.href = "/cart";
                        }}
                        className="btn btn-md add-cart-button icon"
                      >
                        Add To Cart
                      </button>
                      <button
                        // onclick="location.href = 'product-left';"
                        onClick={() => {
                          window.location.href = "/product-left";
                        }}
                        className="btn theme-bg-color view-button icon text-white fw-bold btn-md"
                      >
                        View More Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Quick View Modal Box End */}
      {/* Cookie Bar Box Start */}
      <div className="cookie-bar-box">
        <div className="cookie-box">
          <div className="cookie-image">
            <img
              src="../assets/images/cookie-bar.png"
              className=" lazyload"
              alt=""
            />
            <h2>Cookies!</h2>
          </div>
          <div className="cookie-contain">
            <h5 className="text-content">
              We use cookies to make your experience better
            </h5>
          </div>
        </div>
        <div className="button-group">
          <button className="btn privacy-button">Privacy Policy</button>
          <button className="btn ok-button">OK</button>
        </div>
      </div>
      {/* Cookie Bar Box End */}
      {/* Deal Box Modal Start */}
      <div
        className="modal fade theme-modal deal-modal"
        id="deal-box"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h5 className="modal-title w-100" id="deal_today">
                  Deal Today
                </h5>
                <p className="mt-1 text-content">Recommended deals for you.</p>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="modal-body">
              <div className="deal-offer-box">
                <ul className="deal-offer-list">
                  <li className="list-1">
                    <div className="deal-offer-contain">
                      <Link to="/shop" className="deal-image">
                        <img
                          src="../assets/images/vegetable/product/10.png"
                          className=" lazyload"
                          alt=""
                        />
                      </Link>
                      <Link to="/shop" className="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </Link>
                    </div>
                  </li>
                  <li className="list-2">
                    <div className="deal-offer-contain">
                      <Link to="/shop" className="deal-image">
                        <img
                          src="../assets/images/vegetable/product/11.png"
                          className=" lazyload"
                          alt=""
                        />
                      </Link>
                      <Link to="/shop" className="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </Link>
                    </div>
                  </li>
                  <li className="list-3">
                    <div className="deal-offer-contain">
                      <Link to="/shop" className="deal-image">
                        <img
                          src="../assets/images/vegetable/product/12.png"
                          className=" lazyload"
                          alt=""
                        />
                      </Link>
                      <Link to="/shop" className="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </Link>
                    </div>
                  </li>
                  <li className="list-1">
                    <div className="deal-offer-contain">
                      <Link to="/shop" className="deal-image">
                        <img
                          src="../assets/images/vegetable/product/13.png"
                          className=" lazyload"
                          alt=""
                        />
                      </Link>
                      <Link to="/shop" className="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Deal Box Modal End */}
      {/* Add to cart Modal Start */}
      <div className="add-cart-box">
        <div className="add-iamge">
          <img
            src="../assets/images/cake/pro/1.jpg"
            className="img-fluid  lazyload"
            alt=""
          />
        </div>
        <div className="add-contain">
          <h6>Added to Cart</h6>
        </div>
      </div>
      {/* Add to cart Modal End */}
      {/* Tap to top start */}
      <div className="theme-option">
        <div className="back-to-top">
          <Link id="back-to-top" to="#">
            <i className="fas fa-chevron-up" />
          </Link>
        </div>
      </div>
      {/* Tap to top end */}
      {/* Bg overlay Start */}
      <div className="bg-overlay" />
    </>
  );
}

export default IndexFood;
