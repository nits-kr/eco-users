import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Header";
import Footer from "./Footer";
import Star from "./Star";

function IndexJwellary() {
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
            <Link to="/index-jwellary">
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
      <section className="home-section pt-2">
        <div className="container-fluid-lg">
          <div className="row g-4">
            <div className="col-xl-9 col-lg-8">
              <div
                className="home-contain h-100 bg-size blur-up lazyloaded"
                style={{
                  backgroundImage:
                    'url("../assets/images/jewelry/banner1.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block",
                }}
              >
                <img
                  src="../assets/images/jewelry/banner1.jpg"
                  className="bg-img blur-up lazyloaded"
                  alt=""
                  style={{ display: "none" }}
                />
                <div className="home-detail p-center-left w-75 position-relative mend-auto">
                  <div>
                    <h6>
                      Exclusive offer <span>30% Off</span>
                    </h6>
                    <h1 className="w-75 text-uppercase poster-1">
                      New Collection This Week{" "}
                      <span className="daily">Silver Wedding Ring</span>
                    </h1>
                    <p className="w-58 d-none d-sm-block">
                      Many organizations have issued official statements
                      encouraging people to reduce their intake of sugary
                      drinks.
                    </p>
                    <button
                      onclick="location.href = 'shop';"
                      className="btn btn-animation mt-xxl-4 mt-2 home-button mend-auto"
                      fdprocessedid="i310kj"
                    >
                      Shop Now{" "}
                      <i className="fa-solid fa-right-long ms-2 icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 d-lg-inline-block d-none ratio_156">
              <div
                className="home-contain h-100 bg-size blur-up lazyloaded"
                style={{
                  backgroundImage:
                    'url("../assets/images/jewelry/sibde_band.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block",
                }}
              >
                <img
                  src="../assets/images/jewelry/sibde_band.jpg"
                  className="bg-img blur-up lazyloaded"
                  alt=""
                  style={{ display: "none" }}
                />
                <div className="home-detail p-top-left home-p-sm w-75">
                  <div>
                    <h2 className="mt-0 text-white">
                      45% <span className="discount text-title">OFF</span>
                    </h2>
                    <h3 className="text-white">CLEARANCE</h3>
                    <h5 className="text-content text-white">
                      Only this week, Don't miss..
                    </h5>
                    <Link to="/shop" className="shop-button text-white">
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
          <div className="title">
            <h2>Browse by Categories</h2>
            <span className="title-leaf">
              <svg className="icon-width">
                <use xlinkHref="../assets/svg/leaf.svg#leaf" />
              </svg>
            </span>
            <p>Top Categories Of The Week</p>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="slider-9 slick-initialized slick-slider">
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: 4212,
                      transform: "translate3d(-1458px, 0px, 0px)",
                    }}
                  >
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 162 }}
                      data-slick-index={-8}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box wow fadeInUp"
                        data-wow-delay="0.05s"
                        tabIndex={-1}
                        style={{
                          visibility: "visible",
                          animationDelay: "0.05s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div>
                          <img
                            src="../assets/images/jewelry/Diamonds.png"
                            className="blur-up lazyload"
                            alt=""
                          />
                          <h5> Diamonds</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 162 }}
                      data-slick-index={-7}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box wow fadeInUp"
                        data-wow-delay="0.1s"
                        tabIndex={-1}
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div>
                          <img
                            src="../assets/images/jewelry/Earings.png"
                            className="blur-up lazyload"
                            alt=""
                          />
                          <h5> Earings</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 162 }}
                      data-slick-index={-6}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box wow fadeInUp"
                        data-wow-delay="0.15s"
                        tabIndex={-1}
                        style={{
                          visibility: "visible",
                          animationDelay: "0.15s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div>
                          <img
                            src="../assets/images/jewelry/Jewelry-Sets.png"
                            className="blur-up lazyload"
                            alt=""
                          />
                          <h5> Jewelry Sets</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 162 }}
                      data-slick-index={-5}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box wow fadeInUp"
                        data-wow-delay="0.2s"
                        tabIndex={-1}
                        style={{
                          visibility: "visible",
                          animationDelay: "0.2s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div>
                          <img
                            src="../assets/images/jewelry/Necklesses.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5> Necklesses</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 162 }}
                      data-slick-index={-4}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box wow fadeInUp"
                        data-wow-delay="0.25s"
                        tabIndex={-1}
                        style={{
                          visibility: "visible",
                          animationDelay: "0.25s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div>
                          <img
                            src="../assets/images/jewelry/Pearles.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5> Pearles</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 162 }}
                      data-slick-index={-3}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box wow fadeInUp"
                        data-wow-delay="0.3s"
                        tabIndex={-1}
                        style={{
                          visibility: "visible",
                          animationDelay: "0.3s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div>
                          <img
                            src="../assets/images/jewelry/Pendants.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5> Pendants</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 162 }}
                      data-slick-index={-2}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box wow fadeInUp"
                        data-wow-delay="0.35s"
                        tabIndex={-1}
                        style={{
                          visibility: "visible",
                          animationDelay: "0.35s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div>
                          <img
                            src="../assets/images/jewelry/Rings.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5> Rings</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 162 }}
                      data-slick-index={-1}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box wow fadeInUp"
                        data-wow-delay="0.4s"
                        tabIndex={-1}
                        style={{
                          visibility: "visible",
                          animationDelay: "0.4s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div>
                          <img
                            src="../assets/images/jewelry/Gifts.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5> Gifts</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide"
                      style={{ width: 162 }}
                      data-slick-index={0}
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box wow fadeInUp"
                        tabIndex={-1}
                        style={{
                          visibility: "visible",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div>
                          <img
                            src="../assets/images/jewelry/beads.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5> Beads</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-current slick-active"
                      style={{ width: 162 }}
                      data-slick-index={1}
                      aria-hidden="false"
                      tabIndex={0}
                    >
                      <Link
                        to="/shop"
                        className="category-box wow fadeInUp"
                        data-wow-delay="0.05s"
                        tabIndex={0}
                        style={{
                          visibility: "visible",
                          animationDelay: "0.05s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div>
                          <img
                            src="../assets/images/jewelry/Diamonds.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5> Diamonds</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      style={{ width: 162 }}
                      data-slick-index={2}
                      aria-hidden="false"
                      tabIndex={0}
                    >
                      <Link
                        to="/shop"
                        className="category-box wow fadeInUp"
                        data-wow-delay="0.1s"
                        tabIndex={0}
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div>
                          <img
                            src="../assets/images/jewelry/Earings.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5> Earings</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      style={{ width: 162 }}
                      data-slick-index={3}
                      aria-hidden="false"
                      tabIndex={0}
                    >
                      <Link
                        to="/shop"
                        className="category-box wow fadeInUp"
                        data-wow-delay="0.15s"
                        tabIndex={0}
                        style={{
                          visibility: "visible",
                          animationDelay: "0.15s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div>
                          <img
                            src="../assets/images/jewelry/Jewelry-Sets.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5> Jewelry Sets</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      style={{ width: 162 }}
                      data-slick-index={4}
                      aria-hidden="false"
                      tabIndex={0}
                    >
                      <Link
                        to="/shop"
                        className="category-box wow fadeInUp"
                        data-wow-delay="0.2s"
                        tabIndex={0}
                        style={{
                          visibility: "visible",
                          animationDelay: "0.2s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div>
                          <img
                            src="../assets/images/jewelry/Necklesses.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5> Necklesses</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      style={{ width: 162 }}
                      data-slick-index={5}
                      aria-hidden="false"
                      tabIndex={0}
                    >
                      <Link
                        to="/shop"
                        className="category-box wow fadeInUp"
                        data-wow-delay="0.25s"
                        tabIndex={0}
                        style={{
                          visibility: "visible",
                          animationDelay: "0.25s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div>
                          <img
                            src="../assets/images/jewelry/Pearles.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5> Pearles</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      style={{ width: 162 }}
                      data-slick-index={6}
                      aria-hidden="false"
                      tabIndex={0}
                    >
                      <Link
                        to="/shop"
                        className="category-box wow fadeInUp"
                        data-wow-delay="0.3s"
                        tabIndex={0}
                        style={{
                          visibility: "visible",
                          animationDelay: "0.3s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div>
                          <img
                            src="../assets/images/jewelry/Pendants.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5> Pendants</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      style={{ width: 162 }}
                      data-slick-index={7}
                      aria-hidden="false"
                      tabIndex={0}
                    >
                      <Link
                        to="/shop"
                        className="category-box wow fadeInUp"
                        data-wow-delay="0.35s"
                        tabIndex={0}
                        style={{
                          visibility: "visible",
                          animationDelay: "0.35s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div>
                          <img
                            src="../assets/images/jewelry/Rings.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5> Rings</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      style={{ width: 162 }}
                      data-slick-index={8}
                      aria-hidden="false"
                      tabIndex={0}
                    >
                      <Link
                        to="/shop"
                        className="category-box wow fadeInUp"
                        data-wow-delay="0.4s"
                        tabIndex={0}
                        style={{
                          visibility: "visible",
                          animationDelay: "0.4s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div>
                          <img
                            src="../assets/images/jewelry/Gifts.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5> Gifts</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 162 }}
                      data-slick-index={9}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box wow fadeInUp"
                        tabIndex={-1}
                        style={{
                          visibility: "visible",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div>
                          <img
                            src="../assets/images/jewelry/beads.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5> Beads</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 162 }}
                      data-slick-index={10}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box wow fadeInUp"
                        data-wow-delay="0.05s"
                        tabIndex={-1}
                        style={{
                          visibility: "visible",
                          animationDelay: "0.05s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div>
                          <img
                            src="../assets/images/jewelry/Diamonds.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5> Diamonds</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 162 }}
                      data-slick-index={11}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box wow fadeInUp"
                        data-wow-delay="0.1s"
                        tabIndex={-1}
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div>
                          <img
                            src="../assets/images/jewelry/Earings.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5> Earings</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 162 }}
                      data-slick-index={12}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box wow fadeInUp"
                        data-wow-delay="0.15s"
                        tabIndex={-1}
                        style={{
                          visibility: "visible",
                          animationDelay: "0.15s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div>
                          <img
                            src="../assets/images/jewelry/Jewelry-Sets.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5> Jewelry Sets</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 162 }}
                      data-slick-index={13}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box wow fadeInUp"
                        data-wow-delay="0.2s"
                        tabIndex={-1}
                        style={{
                          visibility: "visible",
                          animationDelay: "0.2s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div>
                          <img
                            src="../assets/images/jewelry/Necklesses.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5> Necklesses</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 162 }}
                      data-slick-index={14}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box wow fadeInUp"
                        data-wow-delay="0.25s"
                        tabIndex={-1}
                        style={{
                          visibility: "visible",
                          animationDelay: "0.25s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div>
                          <img
                            src="../assets/images/jewelry/Pearles.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5> Pearles</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 162 }}
                      data-slick-index={15}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box wow fadeInUp"
                        data-wow-delay="0.3s"
                        tabIndex={-1}
                        style={{
                          visibility: "visible",
                          animationDelay: "0.3s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div>
                          <img
                            src="../assets/images/jewelry/Pendants.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5> Pendants</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 162 }}
                      data-slick-index={16}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box wow fadeInUp"
                        data-wow-delay="0.35s"
                        tabIndex={-1}
                        style={{
                          visibility: "visible",
                          animationDelay: "0.35s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div>
                          <img
                            src="../assets/images/jewelry/Rings.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5> Rings</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 162 }}
                      data-slick-index={17}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box wow fadeInUp"
                        data-wow-delay="0.4s"
                        tabIndex={-1}
                        style={{
                          visibility: "visible",
                          animationDelay: "0.4s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div>
                          <img
                            src="../assets/images/jewelry/Gifts.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5> Gifts</h5>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
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
              <div className="banner-contain">
                <div
                  className="banner-contain hover-effect bg-size blur-up lazyloaded"
                  style={{
                    backgroundImage:
                      'url("../assets/images/jewelry/vid_ban.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    display: "block",
                  }}
                >
                  <img
                    src="../assets/images/jewelry/vid_ban.jpg"
                    className="bg-img blur-up lazyload"
                    alt=""
                    style={{ display: "none" }}
                  />
                  <div className="banner-details p-center p-sm-4 p-3 text-white text-center">
                    <div>
                      <h3 className="lh-base fw-bold text-light">
                        Get $3 Cashback! Min Purchase of $30
                      </h3>
                      <h6 className="coupon-code">Use Code : RING1920</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discount Section End */}
      {/* Product Section Start */}
      <section>
        <div className="container-fluid-lg">
          <div className="title">
            <h2>Top Save Today</h2>
            <span className="title-leaf">
              <svg className="icon-width">
                <use xlinkHref="../assets/svg/leaf.svg#leaf" />
              </svg>
            </span>
            <p>A virtual assistant collects the products from your list</p>
          </div>
          <div className="product-border border-row">
            <div className="slider-6_2 no-arrow slick-initialized slick-slider">
              <div className="slick-list draggable">
                <div
                  className="slick-track"
                  style={{
                    opacity: 1,
                    width: 4826,
                    transform: "translate3d(-2540px, 0px, 0px)",
                  }}
                >
                  <div
                    className="slick-slide slick-cloned"
                    style={{ width: 254 }}
                    data-slick-index={-5}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product1.png"
                                className="img-fluid blur-up lazyload"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                A Dream Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product2.jpg"
                                className="img-fluid blur-up lazyload"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    style={{ width: 254 }}
                    data-slick-index={-4}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyload"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyload"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    style={{ width: 254 }}
                    data-slick-index={-3}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    style={{ width: 254 }}
                    data-slick-index={-2}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    style={{ width: 254 }}
                    data-slick-index={-1}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                  <div
                    className="slick-slide"
                    style={{ width: 254 }}
                    data-slick-index={0}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product1.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                A Dream Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                  fdprocessedid="nfa5xk"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product2.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                  fdprocessedid="lrac5w"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                  <div
                    className="slick-slide"
                    style={{ width: 254 }}
                    data-slick-index={1}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                  fdprocessedid="zqml3"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                  fdprocessedid="kue7fm"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                  <div
                    className="slick-slide"
                    style={{ width: 254 }}
                    data-slick-index={2}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product1.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                A Dream Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                  fdprocessedid="jvgwu9"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product2.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                  fdprocessedid="6wt4mj"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                  <div
                    className="slick-slide"
                    style={{ width: 254 }}
                    data-slick-index={3}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                  fdprocessedid="hplc8l"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                  fdprocessedid="bty053"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                  <div
                    className="slick-slide"
                    style={{ width: 254 }}
                    data-slick-index={4}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                  fdprocessedid="bjk8x"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                  fdprocessedid="ibcpbx"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                  <div
                    className="slick-slide slick-current slick-active"
                    style={{ width: 254 }}
                    data-slick-index={5}
                    aria-hidden="false"
                    tabIndex={0}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={0}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={0}
                                  fdprocessedid="9kpru"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={0}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      </div>
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={0}
                                  fdprocessedid="8hkp3k"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={0}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-active"
                    style={{ width: 254 }}
                    data-slick-index={6}
                    aria-hidden="false"
                    tabIndex={0}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={0}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={0}
                                  fdprocessedid="a6ydt"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={0}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      </div>
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={0}
                                  fdprocessedid="vntpji"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={0}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-cloned slick-active"
                    style={{ width: 254 }}
                    data-slick-index={7}
                    id=""
                    aria-hidden="false"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={0}>
                              <img
                                src="../assets/images/jewelry/product1.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                A Dream Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={0}
                                  fdprocessedid="b8g7ab"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={0}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      </div>
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product2.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={0}
                                  fdprocessedid="3bhtdq"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={0}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-cloned slick-active"
                    style={{ width: 254 }}
                    data-slick-index={8}
                    id=""
                    aria-hidden="false"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={0}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={0}
                                  fdprocessedid="uszx1"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={0}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      </div>
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={0}
                                  fdprocessedid="29pr27"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={0}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-cloned slick-active"
                    style={{ width: 254 }}
                    data-slick-index={9}
                    id=""
                    aria-hidden="false"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={0}>
                              <img
                                src="../assets/images/jewelry/product1.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                A Dream Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={0}
                                  fdprocessedid="9vojt6"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={0}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      </div>
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product2.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={0}
                                  fdprocessedid="l97q5j"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={0}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    style={{ width: 254 }}
                    data-slick-index={10}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                  fdprocessedid="2h339a"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                  fdprocessedid="46k6c"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    style={{ width: 254 }}
                    data-slick-index={11}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    style={{ width: 254 }}
                    data-slick-index={12}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    style={{ width: 254 }}
                    data-slick-index={13}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section End */}
      {/* Offer Section Start */}
      <section>
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div
                className="offer-box hover-effect bg-size blur-up lazyloaded"
                style={{
                  backgroundImage: 'url("../assets/images/jewelry/sld5.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block",
                }}
              >
                <img
                  src="../assets/images/jewelry/sld5.jpg"
                  className="bg-img blur-up lazyload"
                  alt=""
                  style={{ display: "none" }}
                />
                <div className="offer-contain p-4">
                  <div className="offer-detail">
                    <h2 className="text-white">
                      Special Offers{" "}
                      <span className="text-danger fw-bold">of the week!</span>
                    </h2>
                    <p className="text-content text-white">
                      Special offer on this discount, Hurry Up!
                    </p>
                  </div>
                  <div className="offer-timing">
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
                            <div className="minutes">49</div>
                          </div>
                        </li>
                        <li>
                          <div className="counter">
                            <div className="seconds">45</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section End */}
      {/* Product Section Start */}
      <section>
        <div className="container-fluid-lg">
          <div className="title">
            <h2>Our Best Seller</h2>
            <span className="title-leaf">
              <svg className="icon-width">
                <use xlinkHref="../assets/svg/leaf.svg#leaf" />
              </svg>
            </span>
            <p>A virtual assistant collects the products from your list</p>
          </div>
          <div className="product-border border-row">
            <div className="slider-6_2 no-arrow slick-initialized slick-slider">
              <div className="slick-list draggable">
                <div
                  className="slick-track"
                  style={{
                    opacity: 1,
                    width: 4826,
                    transform: "translate3d(-1778px, 0px, 0px)",
                  }}
                >
                  <div
                    className="slick-slide slick-cloned"
                    style={{ width: 254 }}
                    data-slick-index={-5}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product1.png"
                                className="img-fluid blur-up lazyload"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                A Dream Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product2.jpg"
                                className="img-fluid blur-up lazyload"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    style={{ width: 254 }}
                    data-slick-index={-4}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyload"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyload"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    style={{ width: 254 }}
                    data-slick-index={-3}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    style={{ width: 254 }}
                    data-slick-index={-2}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    style={{ width: 254 }}
                    data-slick-index={-1}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                  <div
                    className="slick-slide"
                    style={{ width: 254 }}
                    data-slick-index={0}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product1.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                A Dream Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                  fdprocessedid="yqlcdj"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product2.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                  fdprocessedid="ilca1"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                  <div
                    className="slick-slide"
                    style={{ width: 254 }}
                    data-slick-index={1}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                  fdprocessedid="ktfofl"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                  fdprocessedid="lccvff"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                  <div
                    className="slick-slide slick-current slick-active"
                    style={{ width: 254 }}
                    data-slick-index={2}
                    aria-hidden="false"
                    tabIndex={0}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={0}>
                              <img
                                src="../assets/images/jewelry/product1.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                A Dream Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={0}
                                  fdprocessedid="11iom"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={0}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      </div>
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product2.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={0}
                                  fdprocessedid="yhcnty"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={0}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-active"
                    style={{ width: 254 }}
                    data-slick-index={3}
                    aria-hidden="false"
                    tabIndex={0}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={0}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={0}
                                  fdprocessedid="db1hp7"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={0}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      </div>
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={0}
                                  fdprocessedid="0oo83q"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={0}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-active"
                    style={{ width: 254 }}
                    data-slick-index={4}
                    aria-hidden="false"
                    tabIndex={0}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={0}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={0}
                                  fdprocessedid="w0nbf"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={0}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      </div>
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={0}
                                  fdprocessedid="fc8ly8"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={0}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-active"
                    style={{ width: 254 }}
                    data-slick-index={5}
                    aria-hidden="false"
                    tabIndex={0}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={0}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={0}
                                  fdprocessedid="525sok"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={0}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      </div>
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={0}
                                  fdprocessedid="6w34ld"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={0}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-active"
                    style={{ width: 254 }}
                    data-slick-index={6}
                    aria-hidden="false"
                    tabIndex={0}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={0}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={0}
                                  fdprocessedid="6763ie"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={0}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      </div>
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={0}
                                  fdprocessedid="7632et"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={0}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    style={{ width: 254 }}
                    data-slick-index={7}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product1.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                A Dream Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                  fdprocessedid="0xvzar"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product2.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                  fdprocessedid="a7tzp"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    style={{ width: 254 }}
                    data-slick-index={8}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                  fdprocessedid="vsa5w"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                  fdprocessedid="slbol7"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    style={{ width: 254 }}
                    data-slick-index={9}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product1.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                A Dream Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                  fdprocessedid="37i0fh"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product2.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                  fdprocessedid="i6pmeh"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    style={{ width: 254 }}
                    data-slick-index={10}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                  fdprocessedid="pcjil"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                  fdprocessedid="fuqgs9"
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    style={{ width: 254 }}
                    data-slick-index={11}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    style={{ width: 254 }}
                    data-slick-index={12}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    style={{ width: 254 }}
                    data-slick-index={13}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
                          style={{
                            visibility: "visible",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-image">
                            <Link to="/product" tabIndex={-1}>
                              <img
                                src="../assets/images/jewelry/product4.jpg"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Silver Wedding Ring
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                      <div className="col-12 px-0">
                        <div
                          className="product-box wow fadeIn"
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
                                src="../assets/images/jewelry/product5.png"
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                            </Link>
                            <ul className="product-option justify-content-around">
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
                              <h6 className="name name-2 h-100">
                                Custom Ring Design
                              </h6>
                            </Link>
                            <div className="product-rating mt-2">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6 className="sold weight text-content fw-normal">
                              1 KG
                            </h6>
                            <div className="counter-box">
                              <h6 className="sold theme-color">$ 80.00</h6>
                              <div className="addtocart_btn">
                                <button
                                  className="add-button addcart-button btn buy-button text-light"
                                  tabIndex={-1}
                                >
                                  <span>Add</span>
                                  <i className="fa-solid fa-plus" />
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
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
                                      defaultValue={1}
                                      tabIndex={-1}
                                    />
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section End */}
      {/* Product Section Start */}
      <section>
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="slider-4-1 ratio_65 no-arrow product-wrapper slick-initialized slick-slider">
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
                        className="product-slider wow fadeInUp"
                        style={{
                          visibility: "visible",
                          animationName: "fadeInUp",
                        }}
                      >
                        <Link
                          to="/shop"
                          className="product-slider-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/jewelry/img1.jpg"
                            className="w-100 blur-up rounded-3 lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="product-slider-detail">
                          <div>
                            <Link to="/shop" className="d-block" tabIndex={0}>
                              <h3 className="text-title">Uncategorized</h3>
                            </Link>
                            <h5>Ruby on Rose Accessories</h5>
                            <div className="product-rating">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6>
                              By <span className="theme-color">Marry Loue</span>
                            </h6>
                            <button
                              onclick="location.href = 'shop';"
                              className="btn btn-animation product-button btn-sm"
                              tabIndex={0}
                              fdprocessedid="gbe46"
                            >
                              Shop Now{" "}
                              <i className="fa-solid fa-arrow-right icon" />
                            </button>
                          </div>
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
                        className="product-slider wow fadeInUp"
                        data-wow-delay="0.05s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.05s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <Link
                          to="/shop"
                          className="product-slider-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/jewelry/img2.jpg"
                            className="w-100 blur-up rounded-3 lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="product-slider-detail">
                          <div>
                            <Link to="/shop" className="d-block" tabIndex={0}>
                              <h3 className="text-title">Uncategorized</h3>
                            </Link>
                            <h5>Ruby on Rose Accessories</h5>
                            <div className="product-rating">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6>
                              By <span className="theme-color">Marry Loue</span>
                            </h6>
                            <button
                              onclick="location.href = 'shop';"
                              className="btn btn-animation product-button btn-sm"
                              tabIndex={0}
                              fdprocessedid="8f99y"
                            >
                              Shop Now{" "}
                              <i className="fa-solid fa-arrow-right icon" />
                            </button>
                          </div>
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
                        className="product-slider wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <Link
                          to="/shop"
                          className="product-slider-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/jewelry/img3.jpg"
                            className="w-100 blur-up rounded-3 lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="product-slider-detail">
                          <div>
                            <Link to="/shop" className="d-block" tabIndex={0}>
                              <h3 className="text-title">Uncategorized</h3>
                            </Link>
                            <h5>Ruby on Rose Accessories</h5>
                            <div className="product-rating">
                              <ul className="rating">
                                <Star />
                              </ul>
                              <span>(34)</span>
                            </div>
                            <h6>
                              By <span className="theme-color">Marry Loue</span>
                            </h6>
                            <button
                              onclick="location.href = 'shop';"
                              className="btn btn-animation product-button btn-sm"
                              tabIndex={0}
                              fdprocessedid="5tsdbn"
                            >
                              Shop Now{" "}
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
          </div>
        </div>
      </section>

      {/* Product Section End */}
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
                  data-slick-index={0}
                  aria-hidden="false"
                  tabIndex={0}
                  style={{ width: 323 }}
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
                              src="../assets/images/jewelry/product1.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>Silver Wedding Ring</h5>
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
                          className="top-selling-contain wow fadeIn"
                          data-wow-delay="0.05s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.05s",
                            animationName: "fadeIn",
                          }}
                        >
                          <Link
                            to="/product"
                            className="top-selling-image"
                            tabIndex={0}
                          >
                            <img
                              src="../assets/images/jewelry/product2.jpg"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>Silver Wedding Ring</h5>
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
                          className="top-selling-contain wow fadeIn"
                          data-wow-delay="0.1s"
                          style={{
                            visibility: "hidden",
                            animationDelay: "0.1s",
                            animationName: "none",
                          }}
                        >
                          <Link
                            to="/product"
                            className="top-selling-image"
                            tabIndex={0}
                          >
                            <img
                              src="../assets/images/jewelry/product3.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>A Dream Ring</h5>
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
                        <div
                          className="top-selling-contain wow fadeIn"
                          data-wow-delay="0.15s"
                          style={{
                            visibility: "hidden",
                            animationDelay: "0.15s",
                            animationName: "none",
                          }}
                        >
                          <Link
                            to="/product"
                            className="top-selling-image"
                            tabIndex={0}
                          >
                            <img
                              src="../assets/images/jewelry/product4.jpg"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>A Dream Ring</h5>
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
                  data-slick-index={1}
                  aria-hidden="false"
                  tabIndex={0}
                  style={{ width: 323 }}
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
                              src="../assets/images/jewelry/product1.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>Silver Wedding Ring</h5>
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
                          className="top-selling-contain wow fadeIn"
                          data-wow-delay="0.05s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.05s",
                            animationName: "fadeIn",
                          }}
                        >
                          <Link
                            to="/product"
                            className="top-selling-image"
                            tabIndex={0}
                          >
                            <img
                              src="../assets/images/jewelry/product2.jpg"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>Silver Wedding Ring</h5>
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
                          className="top-selling-contain wow fadeIn"
                          data-wow-delay="0.1s"
                          style={{
                            visibility: "hidden",
                            animationDelay: "0.1s",
                            animationName: "none",
                          }}
                        >
                          <Link
                            to="/product"
                            className="top-selling-image"
                            tabIndex={0}
                          >
                            <img
                              src="../assets/images/jewelry/product3.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>A Dream Ring</h5>
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
                        <div
                          className="top-selling-contain wow fadeIn"
                          data-wow-delay="0.15s"
                          style={{
                            visibility: "hidden",
                            animationDelay: "0.15s",
                            animationName: "none",
                          }}
                        >
                          <Link
                            to="/product"
                            className="top-selling-image"
                            tabIndex={0}
                          >
                            <img
                              src="../assets/images/jewelry/product4.jpg"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>A Dream Ring</h5>
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
                  data-slick-index={2}
                  aria-hidden="false"
                  tabIndex={0}
                  style={{ width: 323 }}
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="top-selling-box">
                        <div className="top-selling-title">
                          <h3>Trending Product</h3>
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
                              src="../assets/images/jewelry/product1.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>Silver Wedding Ring</h5>
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
                          className="top-selling-contain wow fadeIn"
                          data-wow-delay="0.05s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.05s",
                            animationName: "fadeIn",
                          }}
                        >
                          <Link
                            to="/product"
                            className="top-selling-image"
                            tabIndex={0}
                          >
                            <img
                              src="../assets/images/jewelry/product2.jpg"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>Silver Wedding Ring</h5>
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
                          className="top-selling-contain wow fadeIn"
                          data-wow-delay="0.1s"
                          style={{
                            visibility: "hidden",
                            animationDelay: "0.1s",
                            animationName: "none",
                          }}
                        >
                          <Link
                            to="/product"
                            className="top-selling-image"
                            tabIndex={0}
                          >
                            <img
                              src="../assets/images/jewelry/product3.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>A Dream Ring</h5>
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
                        <div
                          className="top-selling-contain wow fadeIn"
                          data-wow-delay="0.15s"
                          style={{
                            visibility: "hidden",
                            animationDelay: "0.15s",
                            animationName: "none",
                          }}
                        >
                          <Link
                            to="/product"
                            className="top-selling-image"
                            tabIndex={0}
                          >
                            <img
                              src="../assets/images/jewelry/product4.jpg"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>A Dream Ring</h5>
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
                  data-slick-index={3}
                  aria-hidden="false"
                  tabIndex={0}
                  style={{ width: 323 }}
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="top-selling-box">
                        <div className="top-selling-title">
                          <h3>Recentlly Added</h3>
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
                              src="../assets/images/jewelry/product1.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>Silver Wedding Ring</h5>
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
                          className="top-selling-contain wow fadeIn"
                          data-wow-delay="0.05s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.05s",
                            animationName: "fadeIn",
                          }}
                        >
                          <Link
                            to="/product"
                            className="top-selling-image"
                            tabIndex={0}
                          >
                            <img
                              src="../assets/images/jewelry/product2.jpg"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>Silver Wedding Ring</h5>
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
                          className="top-selling-contain wow fadeIn"
                          data-wow-delay="0.1s"
                          style={{
                            visibility: "hidden",
                            animationDelay: "0.1s",
                            animationName: "none",
                          }}
                        >
                          <Link
                            to="/product"
                            className="top-selling-image"
                            tabIndex={0}
                          >
                            <img
                              src="../assets/images/jewelry/product3.png"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>A Dream Ring</h5>
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
                        <div
                          className="top-selling-contain wow fadeIn"
                          data-wow-delay="0.15s"
                          style={{
                            visibility: "hidden",
                            animationDelay: "0.15s",
                            animationName: "none",
                          }}
                        >
                          <Link
                            to="/product"
                            className="top-selling-image"
                            tabIndex={0}
                          >
                            <img
                              src="../assets/images/jewelry/product4.jpg"
                              className="img-fluid blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="top-selling-detail">
                            <Link to="/product" tabIndex={0}>
                              <h5>A Dream Ring</h5>
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
      {/* Blog Section Start */}
      <section>
        <div className="container-fluid-lg" style={{ marginTop: "-250px" }}>
          <div className="title">
            <h2>Featured Blog</h2>
            <span className="title-leaf">
              <svg className="icon-width">
                <use xlinkHref="../assets/svg/leaf.svg#leaf" />
              </svg>
            </span>
            <p>A virtual assistant collects the products from your list</p>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="slider-5 ratio_87 slick-initialized slick-slider">
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: 4403,
                      transform: "translate3d(-1295px, 0px, 0px)",
                    }}
                  >
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-5}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 259 }}
                    >
                      <div className="blog-box">
                        <div className="blog-box-image">
                          <Link
                            to="/blog"
                            className="blog-image bg-size blur-up lazyload"
                            tabIndex={-1}
                            style={{
                              backgroundImage:
                                'url("../assets/images/jewelry/img5.jpg")',
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                              backgroundRepeat: "no-repeat",
                              display: "block",
                            }}
                          >
                            <img
                              src="../assets/images/jewelry/img5.jpg"
                              className="bg-img blur-up lazyload"
                              alt=""
                              style={{ display: "none" }}
                            />
                          </Link>
                        </div>
                        <Link to="/blog" className="blog-detail" tabIndex={-1}>
                          <h6>Ruby on Rose Accessories</h6>
                          <h5>Uncategorized</h5>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-4}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 259 }}
                    >
                      <div className="blog-box">
                        <div className="blog-box-image">
                          <Link
                            to="/blog"
                            className="blog-image bg-size blur-up lazyload"
                            tabIndex={-1}
                            style={{
                              backgroundImage:
                                'url("../assets/images/jewelry/img6.jpg")',
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                              backgroundRepeat: "no-repeat",
                              display: "block",
                            }}
                          >
                            <img
                              src="../assets/images/jewelry/img6.jpg"
                              className="bg-img blur-up lazyload"
                              alt=""
                              style={{ display: "none" }}
                            />
                          </Link>
                        </div>
                        <Link to="/blog" className="blog-detail" tabIndex={-1}>
                          <h6>Ruby on Rose Accessories</h6>
                          <h5>Uncategorized</h5>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-3}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 259 }}
                    >
                      <div className="blog-box">
                        <div className="blog-box-image">
                          <Link
                            to="/blog"
                            className="blog-image bg-size blur-up lazyloaded"
                            tabIndex={-1}
                            style={{
                              backgroundImage:
                                'url("../assets/images/jewelry/img4.jpg")',
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                              backgroundRepeat: "no-repeat",
                              display: "block",
                            }}
                          >
                            <img
                              src="../assets/images/jewelry/img4.jpg"
                              className="bg-img blur-up lazyload"
                              alt=""
                              style={{ display: "none" }}
                            />
                          </Link>
                        </div>
                        <div className="blog-detail">
                          <h6>Ruby on Rose Accessories</h6>
                          <h5>Uncategorized</h5>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-2}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 259 }}
                    >
                      <div className="blog-box">
                        <div className="blog-box-image">
                          <Link
                            to="/blog"
                            className="blog-image bg-size blur-up lazyloaded"
                            tabIndex={-1}
                            style={{
                              backgroundImage:
                                'url("../assets/images/jewelry/img5.jpg")',
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                              backgroundRepeat: "no-repeat",
                              display: "block",
                            }}
                          >
                            <img
                              src="../assets/images/jewelry/img5.jpg"
                              className="bg-img blur-up lazyload"
                              alt=""
                              style={{ display: "none" }}
                            />
                          </Link>
                        </div>
                        <Link to="/blog" className="blog-detail" tabIndex={-1}>
                          <h6>Ruby on Rose Accessories</h6>
                          <h5>Uncategorized</h5>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-1}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 259 }}
                    >
                      <div className="blog-box">
                        <div className="blog-box-image">
                          <Link
                            to="/blog"
                            className="blog-image bg-size blur-up lazyloaded"
                            tabIndex={-1}
                            style={{
                              backgroundImage:
                                'url("../assets/images/jewelry/img6.jpg")',
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                              backgroundRepeat: "no-repeat",
                              display: "block",
                            }}
                          >
                            <img
                              src="../assets/images/jewelry/img6.jpg"
                              className="bg-img blur-up lazyload"
                              alt=""
                              style={{ display: "none" }}
                            />
                          </Link>
                        </div>
                        <Link to="/blog" className="blog-detail" tabIndex={-1}>
                          <h6>Ruby on Rose Accessories</h6>
                          <h5>Uncategorized</h5>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-current slick-active"
                      data-slick-index={0}
                      aria-hidden="false"
                      tabIndex={0}
                      style={{ width: 259 }}
                    >
                      <div className="blog-box">
                        <div className="blog-box-image">
                          <Link
                            to="/blog"
                            className="blog-image bg-size blur-up lazyloaded"
                            tabIndex={0}
                            style={{
                              backgroundImage:
                                'url("../assets/images/jewelry/img4.jpg")',
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                              backgroundRepeat: "no-repeat",
                              display: "block",
                            }}
                          >
                            <img
                              src="../assets/images/jewelry/img4.jpg"
                              className="bg-img blur-up lazyload"
                              alt=""
                              style={{ display: "none" }}
                            />
                          </Link>
                        </div>
                        <div className="blog-detail">
                          <h6>Ruby on Rose Accessories</h6>
                          <h5>Uncategorized</h5>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      data-slick-index={1}
                      aria-hidden="false"
                      tabIndex={0}
                      style={{ width: 259 }}
                    >
                      <div className="blog-box">
                        <div className="blog-box-image">
                          <Link
                            to="/blog"
                            className="blog-image bg-size blur-up lazyloaded"
                            tabIndex={0}
                            style={{
                              backgroundImage:
                                'url("../assets/images/jewelry/img5.jpg")',
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                              backgroundRepeat: "no-repeat",
                              display: "block",
                            }}
                          >
                            <img
                              src="../assets/images/jewelry/img5.jpg"
                              className="bg-img blur-up lazyload"
                              alt=""
                              style={{ display: "none" }}
                            />
                          </Link>
                        </div>
                        <Link to="/blog" className="blog-detail" tabIndex={0}>
                          <h6>Ruby on Rose Accessories</h6>
                          <h5>Uncategorized</h5>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      data-slick-index={2}
                      aria-hidden="false"
                      tabIndex={0}
                      style={{ width: 259 }}
                    >
                      <div className="blog-box">
                        <div className="blog-box-image">
                          <Link
                            to="/blog"
                            className="blog-image bg-size blur-up lazyloaded"
                            tabIndex={0}
                            style={{
                              backgroundImage:
                                'url("../assets/images/jewelry/img6.jpg")',
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                              backgroundRepeat: "no-repeat",
                              display: "block",
                            }}
                          >
                            <img
                              src="../assets/images/jewelry/img6.jpg"
                              className="bg-img blur-up lazyload"
                              alt=""
                              style={{ display: "none" }}
                            />
                          </Link>
                        </div>
                        <Link to="/blog" className="blog-detail" tabIndex={0}>
                          <h6>Ruby on Rose Accessories</h6>
                          <h5>Uncategorized</h5>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      data-slick-index={3}
                      aria-hidden="false"
                      tabIndex={0}
                      style={{ width: 259 }}
                    >
                      <div className="blog-box">
                        <div className="blog-box-image">
                          <Link
                            to="/blog"
                            className="blog-image bg-size blur-up lazyloaded"
                            tabIndex={0}
                            style={{
                              backgroundImage:
                                'url("../assets/images/jewelry/img4.jpg")',
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                              backgroundRepeat: "no-repeat",
                              display: "block",
                            }}
                          >
                            <img
                              src="../assets/images/jewelry/img4.jpg"
                              className="bg-img blur-up lazyload"
                              alt=""
                              style={{ display: "none" }}
                            />
                          </Link>
                        </div>
                        <div className="blog-detail">
                          <h6>Ruby on Rose Accessories</h6>
                          <h5>Uncategorized</h5>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      data-slick-index={4}
                      aria-hidden="false"
                      tabIndex={0}
                      style={{ width: 259 }}
                    >
                      <div className="blog-box">
                        <div className="blog-box-image">
                          <Link
                            to="/blog"
                            className="blog-image bg-size blur-up lazyloaded"
                            tabIndex={0}
                            style={{
                              backgroundImage:
                                'url("../assets/images/jewelry/img5.jpg")',
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                              backgroundRepeat: "no-repeat",
                              display: "block",
                            }}
                          >
                            <img
                              src="../assets/images/jewelry/img5.jpg"
                              className="bg-img blur-up lazyload"
                              alt=""
                              style={{ display: "none" }}
                            />
                          </Link>
                        </div>
                        <Link to="/blog" className="blog-detail" tabIndex={0}>
                          <h6>Ruby on Rose Accessories</h6>
                          <h5>Uncategorized</h5>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="slick-slide"
                      data-slick-index={5}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 259 }}
                    >
                      <div className="blog-box">
                        <div className="blog-box-image">
                          <Link
                            to="/blog"
                            className="blog-image bg-size blur-up lazyloaded"
                            tabIndex={-1}
                            style={{
                              backgroundImage:
                                'url("../assets/images/jewelry/img6.jpg")',
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                              backgroundRepeat: "no-repeat",
                              display: "block",
                            }}
                          >
                            <img
                              src="../assets/images/jewelry/img6.jpg"
                              className="bg-img blur-up lazyload"
                              alt=""
                              style={{ display: "none" }}
                            />
                          </Link>
                        </div>
                        <Link to="/blog" className="blog-detail" tabIndex={-1}>
                          <h6>Ruby on Rose Accessories</h6>
                          <h5>Uncategorized</h5>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={6}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 259 }}
                    >
                      <div className="blog-box">
                        <div className="blog-box-image">
                          <Link
                            to="/blog"
                            className="blog-image bg-size blur-up lazyloaded"
                            tabIndex={-1}
                            style={{
                              backgroundImage:
                                'url("../assets/images/jewelry/img4.jpg")',
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                              backgroundRepeat: "no-repeat",
                              display: "block",
                            }}
                          >
                            <img
                              src="../assets/images/jewelry/img4.jpg"
                              className="bg-img blur-up lazyload"
                              alt=""
                              style={{ display: "none" }}
                            />
                          </Link>
                        </div>
                        <div className="blog-detail">
                          <h6>Ruby on Rose Accessories</h6>
                          <h5>Uncategorized</h5>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={7}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 259 }}
                    >
                      <div className="blog-box">
                        <div className="blog-box-image">
                          <Link
                            to="/blog"
                            className="blog-image bg-size blur-up lazyloaded"
                            tabIndex={-1}
                            style={{
                              backgroundImage:
                                'url("../assets/images/jewelry/img5.jpg")',
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                              backgroundRepeat: "no-repeat",
                              display: "block",
                            }}
                          >
                            <img
                              src="../assets/images/jewelry/img5.jpg"
                              className="bg-img blur-up lazyload"
                              alt=""
                              style={{ display: "none" }}
                            />
                          </Link>
                        </div>
                        <Link to="/blog" className="blog-detail" tabIndex={-1}>
                          <h6>Ruby on Rose Accessories</h6>
                          <h5>Uncategorized</h5>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={8}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 259 }}
                    >
                      <div className="blog-box">
                        <div className="blog-box-image">
                          <Link
                            to="/blog"
                            className="blog-image bg-size blur-up lazyload"
                            tabIndex={-1}
                            style={{
                              backgroundImage:
                                'url("../assets/images/jewelry/img6.jpg")',
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                              backgroundRepeat: "no-repeat",
                              display: "block",
                            }}
                          >
                            <img
                              src="../assets/images/jewelry/img6.jpg"
                              className="bg-img blur-up lazyload"
                              alt=""
                              style={{ display: "none" }}
                            />
                          </Link>
                        </div>
                        <Link to="/blog" className="blog-detail" tabIndex={-1}>
                          <h6>Ruby on Rose Accessories</h6>
                          <h5>Uncategorized</h5>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={9}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 259 }}
                    >
                      <div className="blog-box">
                        <div className="blog-box-image">
                          <Link
                            to="/blog"
                            className="blog-image bg-size blur-up lazyload"
                            tabIndex={-1}
                            style={{
                              backgroundImage:
                                'url("../assets/images/jewelry/img4.jpg")',
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                              backgroundRepeat: "no-repeat",
                              display: "block",
                            }}
                          >
                            <img
                              src="../assets/images/jewelry/img4.jpg"
                              className="bg-img blur-up lazyload"
                              alt=""
                              style={{ display: "none" }}
                            />
                          </Link>
                        </div>
                        <div className="blog-detail">
                          <h6>Ruby on Rose Accessories</h6>
                          <h5>Uncategorized</h5>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={10}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 259 }}
                    >
                      <div className="blog-box">
                        <div className="blog-box-image">
                          <Link
                            to="/blog"
                            className="blog-image bg-size blur-up lazyload"
                            tabIndex={-1}
                            style={{
                              backgroundImage:
                                'url("../assets/images/jewelry/img5.jpg")',
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                              backgroundRepeat: "no-repeat",
                              display: "block",
                            }}
                          >
                            <img
                              src="../assets/images/jewelry/img5.jpg"
                              className="bg-img blur-up lazyload"
                              alt=""
                              style={{ display: "none" }}
                            />
                          </Link>
                        </div>
                        <Link to="/blog" className="blog-detail" tabIndex={-1}>
                          <h6>Ruby on Rose Accessories</h6>
                          <h5>Uncategorized</h5>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={11}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 259 }}
                    >
                      <div className="blog-box">
                        <div className="blog-box-image">
                          <Link
                            to="/blog"
                            className="blog-image bg-size blur-up lazyload"
                            tabIndex={-1}
                            style={{
                              backgroundImage:
                                'url("../assets/images/jewelry/img6.jpg")',
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                              backgroundRepeat: "no-repeat",
                              display: "block",
                            }}
                          >
                            <img
                              src="../assets/images/jewelry/img6.jpg"
                              className="bg-img blur-up lazyload"
                              alt=""
                              style={{ display: "none" }}
                            />
                          </Link>
                        </div>
                        <Link to="/blog" className="blog-detail" tabIndex={-1}>
                          <h6>Ruby on Rose Accessories</h6>
                          <h5>Uncategorized</h5>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section End */}
      {/* Newsletter Section Start */}
      <section className="newsletter-section section-b-space">
        <div className="container-fluid-lg">
          <div className="newsletter-box newsletter-box-2">
            <div className="newsletter-contain py-5">
              <div className="container-fluid">
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
                        <button className="sub-btn btn">
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
                      src="../assets/images/jewelry/product1.png"
                      className="img-fluid  lazyload"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-sidebar-modal">
                    <h4 className="title-name">Silver Wedding Ring</h4>
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
                        onClick={() => {
                          window.location.href = "cart";
                        }}
                        className="btn btn-md add-cart-button icon"
                      >
                        Add To Cart
                      </button>
                      <button
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
                          src="../assets/images/jewelry/product1.png"
                          className=" lazyload"
                          alt=""
                        />
                      </Link>
                      <Link to="/shop" className="deal-contain">
                        <h5>Silver Wedding Ring</h5>
                        <h6>
                          $52.57 <del>57.62</del>
                        </h6>
                      </Link>
                    </div>
                  </li>
                  <li className="list-2">
                    <div className="deal-offer-contain">
                      <Link to="/shop" className="deal-image">
                        <img
                          src="../assets/images/jewelry/product5.png"
                          className=" lazyload"
                          alt=""
                        />
                      </Link>
                      <Link to="/shop" className="deal-contain">
                        <h5>Custom Ring Design</h5>
                        <h6>
                          $52.57 <del>57.62</del>
                        </h6>
                      </Link>
                    </div>
                  </li>
                  <li className="list-3">
                    <div className="deal-offer-contain">
                      <Link to="/shop" className="deal-image">
                        <img
                          src="../assets/images/jewelry/product1.png"
                          className=" lazyload"
                          alt=""
                        />
                      </Link>
                      <Link to="/shop" className="deal-contain">
                        <h5>Silver Wedding Ring</h5>
                        <h6>
                          $52.57 <del>57.62</del>
                        </h6>
                      </Link>
                    </div>
                  </li>
                  <li className="list-1">
                    <div className="deal-offer-contain">
                      <Link to="/shop" className="deal-image">
                        <img
                          src="../assets/images/jewelry/product5.png"
                          className=" lazyload"
                          alt=""
                        />
                      </Link>
                      <Link to="/shop" className="deal-contain">
                        <h5>Custom Ring Design</h5>
                        <h6>
                          $52.57 <del>57.62</del>
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
      {/* Bg overlay End */}
      {/* Bg overlay Start */}
      <div className="bg-overlay" />
    </>
  );
}

export default IndexJwellary;
