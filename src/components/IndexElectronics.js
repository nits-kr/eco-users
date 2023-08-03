import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import feather from 'feather-icons';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Header';
import Footer from './Footer';

function IndexElectronics() {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <>
      {/* Header Start */}
    <Header/>
      {/* Header End */}
      {/* mobile fix menu start */}
      <div className="mobile-menu d-md-none d-block mobile-cart">
        <ul>
          <li className="active">
            <Link to="/index-electronics">
              <i className="iconly-Home icli" />
              <span>Home</span>
            </Link>
          </li>
          <li className="mobile-category">
            <Link to="/shop">
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
      <section className="home-section pt-2 electronic_home">
        <div className="container-fluid-lg">
          <div className="row g-4">
            <div className="col-12 ratio_65">
              <div className="home-contain">
                <div
                  className="bg-size blur-up lazyloaded"
                  style={{
                    backgroundImage:
                      'url("../assets/images/electronic/main-bg1.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    display: "block"
                  }}
                >
                  <img
                    src="../assets/images/electronic/main-bg1.jpg"
                    className="bg-img blur-up lazyloaded"
                    alt=""
                    style={{ display: "none" }}
                  />
                </div>
                <div className="home-detail p-center-left w-75">
                  <div>
                    <h6>
                      Exclusive offer <span>30% Off</span>
                    </h6>
                    <h1 className="text-uppercase">
                      The New Branded{" "}
                      <span className="daily">Sony Airpods - 1000XM4</span>
                    </h1>
                    <p className="w-75 d-none d-sm-block">
                      A laptop is a computer which is easy to carry around. A modern
                      laptop is self-cont...
                    </p>
                    <button
                      onclick="location.href = 'shop.html';"
                      className="btn btn-animation mt-xxl-4 mt-2 home-button mend-auto"
                      fdprocessedid="6efcva"
                    >
                      Shop Now <i className="fa-solid fa-right-long icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Section End */}
      {/* Banner Section Start */}
      <section
        className="banner-section ratio_60 wow fadeInUp"
        style={{ visibility: "visible", animationName: "fadeInUp" }}
      >
        <div className="container-fluid-lg">
          <div className="banner-slider slick-initialized slick-slider">
            <div className="slick-list draggable">
              <div
                className="slick-track"
                style={{
                  opacity: 1,
                  width: 1292,
                  transform: "translate3d(0px, 0px, 0px)"
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
                    className="banner-contain hover-effect bg-size blur-up lazyloaded"
                    style={{
                      backgroundImage:
                        'url("../assets/images/electronic/banner-01.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      display: "block"
                    }}
                  >
                    <img
                      src="../assets/images/electronic/banner-01.jpg"
                      className="bg-img blur-up lazyloaded"
                      alt=""
                      style={{ display: "none" }}
                    />
                    <div className="banner-details">
                      <div className="banner-box">
                        <h6 className="text-danger">5% OFF</h6>
                        <h5>Smart Phones</h5>
                        <h6 className="text-content">Oneplus 8</h6>
                      </div>
                      <a
                        href="shop.html"
                        className="banner-button text-white"
                        tabIndex={0}
                      >
                        Shop Now <i className="fa-solid fa-right-long ms-2" />
                      </a>
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
                    className="banner-contain hover-effect bg-size blur-up lazyloaded"
                    style={{
                      backgroundImage:
                        'url("../assets/images/electronic/banner-02.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      display: "block"
                    }}
                  >
                    <img
                      src="../assets/images/electronic/banner-02.jpg"
                      className="bg-img blur-up lazyloaded"
                      alt=""
                      style={{ display: "none" }}
                    />
                    <div className="banner-details">
                      <div className="banner-box">
                        <h6 className="text-danger">5% OFF</h6>
                        <h5>Apple Watch</h5>
                        <h6 className="text-content">Series 4</h6>
                      </div>
                      <a
                        href="shop.html"
                        className="banner-button text-white"
                        tabIndex={0}
                      >
                        Shop Now <i className="fa-solid fa-right-long ms-2" />
                      </a>
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
                    className="banner-contain hover-effect bg-size blur-up lazyloaded"
                    style={{
                      backgroundImage:
                        'url("../assets/images/electronic/banner-01.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      display: "block"
                    }}
                  >
                    <img
                      src="../assets/images/electronic/banner-01.jpg"
                      className="bg-img blur-up lazyloaded"
                      alt=""
                      style={{ display: "none" }}
                    />
                    <div className="banner-details">
                      <div className="banner-box">
                        <h6 className="text-danger">5% OFF</h6>
                        <h5>Smart Phones</h5>
                        <h6 className="text-content">Oneplus 8</h6>
                      </div>
                      <a
                        href="shop.html"
                        className="banner-button text-white"
                        tabIndex={0}
                      >
                        Shop Now <i className="fa-solid fa-right-long ms-2" />
                      </a>
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
                  <div
                    className="banner-contain hover-effect bg-size blur-up lazyloaded"
                    style={{
                      backgroundImage:
                        'url("../assets/images/electronic/banner-02.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      display: "block"
                    }}
                  >
                    <img
                      src="../assets/images/electronic/banner-02.jpg"
                      className="bg-img blur-up lazyloaded"
                      alt=""
                      style={{ display: "none" }}
                    />
                    <div className="banner-details">
                      <div className="banner-box">
                        <h6 className="text-danger">5% OFF</h6>
                        <h5>Apple Watch</h5>
                        <h6 className="text-content">Series 4</h6>
                      </div>
                      <a
                        href="shop.html"
                        className="banner-button text-white"
                        tabIndex={0}
                      >
                        Shop Now <i className="fa-solid fa-right-long ms-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section End */}
      {/* Product Section Start */}
      <section className="product-section">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3">
          <div className="col-xxl-3 col-xl-4 d-none d-xl-block">
  <div className="p-sticky">
    <div className="category-menu">
      <h3>Category</h3>
      <ul>
        <li>
          <div className="category-list">
            <img
              src="../assets/images/electronic/Computers-&-Accessories.png"
              className="blur-up lazyloaded"
              alt=""
            />
            <h5>
              <a href="shop.html">Computers &amp; Accessories</a>
            </h5>
          </div>
        </li>
        <li>
          <div className="category-list">
            <img
              src="../assets/images/electronic/Cameras-Audio-&-Video.png"
              className="blur-up lazyloaded"
              alt=""
            />
            <h5>
              <a href="shop.html">Cameras, Audio &amp; Video</a>
            </h5>
          </div>
        </li>
        <li>
          <div className="category-list">
            <img
              src="../assets/images/electronic/Mobiles-&-Tablets.png"
              className="blur-up lazyloaded"
              alt=""
            />
            <h5>
              <a href="shop.html">Mobiles &amp; Tablets</a>
            </h5>
          </div>
        </li>
        <li>
          <div className="category-list">
            <img
              src="../assets/images/electronic/Movies-Music-&-Video-Game.png"
              className="blur-up lazyloaded"
              alt=""
            />
            <h5>
              <a href="shop.html">Movies, Music &amp; Video Game</a>
            </h5>
          </div>
        </li>
        <li>
          <div className="category-list">
            <img
              src="../assets/images/electronic/TV-&-Audio.png"
              className="blur-up lazyloaded"
              alt=""
            />
            <h5>
              <a href="shop.html">TV &amp; Audio</a>
            </h5>
          </div>
        </li>
        <li>
          <div className="category-list">
            <img
              src="../assets/images/electronic/Watches-&-Eyewear.png"
              className="blur-up lazyloaded"
              alt=""
            />
            <h5>
              <a href="shop.html">Watches &amp; Eyewear</a>
            </h5>
          </div>
        </li>
        <li>
          <div className="category-list">
            <img
              src="../assets/images/electronic/Car-Motorbike-&-Industrial.png"
              className="blur-up lazyloaded"
              alt=""
            />
            <h5>
              <a href="shop.html">Car, Motorbike &amp; Industrial</a>
            </h5>
          </div>
        </li>
        <li className="pb-30">
          <div className="category-list">
            <img
              src="../assets/images/electronic/Accessories.png"
              className="blur-up lazyloaded"
              alt=""
            />
            <h5>
              <a href="shop.html">Accessories</a>
            </h5>
          </div>
        </li>
      </ul>
      <ul className="value-list">
        <li>
          <div className="category-list">
            <h5 className="ms-0 text-title">
              <a href="shop.html">Value of the Day</a>
            </h5>
          </div>
        </li>
        <li>
          <div className="category-list">
            <h5 className="ms-0 text-title">
              <a href="shop.html">Top 50 Offers</a>
            </h5>
          </div>
        </li>
        <li className="mb-0">
          <div className="category-list">
            <h5 className="ms-0 text-title">
              <a href="shop.html">New Arrivals</a>
            </h5>
          </div>
        </li>
      </ul>
    </div>
    <div className="ratio_156 section-t-space">
      <div
        className="home-contain hover-effect bg-size blur-up lazyloaded"
        style={{
          backgroundImage: 'url("../assets/images/electronic/bg_left.png")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          display: "block"
        }}
      >
        <img
          src="../assets/images/electronic/bg_left.png"
          className="bg-img blur-up lazyload"
          alt=""
          style={{ display: "none" }}
        />
        <div className="home-detail p-top-left home-p-medium">
          <div>
            <h6 className="text-yellow home-banner mb-2">WIDESCEEN 4K</h6>
            <h3 className="text-uppercase fw-normal">
              <span className="theme-color fw-bold">WATERMA WATCH</span>{" "}
            </h3>
            <h3 className="fw-light mb-2=">BEATS STUDIO</h3>
            <button
              onclick="location.href = 'shop.html';"
              className="btn btn-animation btn-md mend-auto"
              fdprocessedid="cfu3c"
            >
              Shop Now <i className="fa-solid fa-arrow-right icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="ratio_medium section-t-space">
      <div className="home-contain hover-effect">
        <img
          src="../assets/images/electronic/bg_left1.png"
          className="img-fluid blur-up lazyloaded"
          alt=""
        />
        <div className="home-detail p-top-left home-p-medium">
          <div>
            <h4 className="text-yellow text-exo home-banner">Widesceen 4k </h4>
            <h2 className="text-uppercase fw-normal mb-2 text-russo theme-color">
              Digital Slr Camera{" "}
            </h2>
            <h2 className="text-uppercase fw-normal text-title">
              High Defination
            </h2>
            <p className="mb-3">Sumptuous, filling, and temptingly</p>
            <button
              onclick="location.href = 'shop.html';"
              className="btn btn-animation btn-md mend-auto"
              fdprocessedid="8yv0wk"
            >
              Shop Now <i className="fa-solid fa-arrow-right icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="section-t-space">
      <div className="category-menu">
        <h3>Trending Products</h3>
        <ul className="product-list border-0 p-0 d-block">
          <li>
            <div className="offer-product">
              <a href="product.html" className="offer-image">
                <img
                  src="../assets/images/electronic/product-1.jpg"
                  className="blur-up lazyloaded"
                  alt=""
                />
              </a>
              <div className="offer-detail">
                <div>
                  <a href="product.html" className="text-title">
                    <h6 className="name">
                      Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB.
                    </h6>
                  </a>
                  <h6 className="price theme-color">$ 70.00</h6>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="offer-product">
              <a href="product.html" className="offer-image">
                <img
                  src="../assets/images/electronic/product-2.jpg"
                  className="blur-up lazyloaded"
                  alt=""
                />
              </a>
              <div className="offer-detail">
                <div>
                  <a href="product.html" className="text-title">
                    <h6 className="name">
                      Tracker with IP67 Waterproof Pedometer Smart watch.
                    </h6>
                  </a>
                  <h6 className="price theme-color">$ 40.00</h6>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="offer-product">
              <a href="product.html" className="offer-image">
                <img
                  src="../assets/images/electronic/product-3.jpg"
                  className="blur-up lazyloaded"
                  alt=""
                />
              </a>
              <div className="offer-detail">
                <div>
                  <a href="product.html" className="text-title">
                    <h6 className="name">Cancelling Headphones Wireless.</h6>
                  </a>
                  <h6 className="price theme-color">$ 52.00</h6>
                </div>
              </div>
            </div>
          </li>
          <li className="mb-0">
            <div className="offer-product">
              <a href="product.html" className="offer-image">
                <img
                  src="../assets/images/electronic/product-4.jpg"
                  className="blur-up lazyloaded"
                  alt=""
                />
              </a>
              <div className="offer-detail">
                <div>
                  <a href="product.html" className="text-title">
                    <h6 className="name">
                      Professional Camera 4K Digital Video Camera.
                    </h6>
                  </a>
                  <h6 className="price theme-color">$ 80.00</h6>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="section-t-space">
      <div className="category-menu">
        <h3>Customer Comment</h3>
        <div className="review-box">
          <div className="review-contain">
            <h5 className="w-75">We Care About Our Customer Experience</h5>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
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

<div className="col-xxl-9 col-xl-8">
  <div className="title title-flex">
    <div>
      <h2>Top Save Today</h2>
      <span className="title-leaf">
        <svg className="icon-width">
          <use xlinkHref="../assets/svg/leaf.svg#leaf" />
        </svg>
      </span>
      <p>
        Don't miss this opportunity at a special discount just for this week.
      </p>
    </div>
    <div className="timing-box">
      <div className="timing">
        <svg
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
                <div className="minutes">44</div>
              </div>
            </li>
            <li>
              <div className="counter">
                <div className="seconds">52</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="section-b-space">
    <div className="product-border border-row overflow-hidden">
      <div className="product-box-slider no-arrow slick-initialized slick-slider">
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
              width: 3792,
              transform: "translate3d(-948px, 0px, 0px)"
            }}
          >
            <div
              className="slick-slide slick-cloned"
              style={{ width: 237 }}
              data-slick-index={-4}
              id=""
              aria-hidden="true"
              tabIndex={-1}
            >
              <div className="row m-0">
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/electronic/product-5.jpg"
                          className="img-fluid blur-up lazyloaded"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={-1}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          Mini Portable PD 22.5W Fast Charging Powerbank.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$26.69</span>
                        <del>28.56</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={-1}
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/electronic/product-6.jpg"
                          className="img-fluid blur-up lazyloaded"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={-1}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          CPU Cooler 2 Heat Pipes 12mm 4 Pin PWM RGB for Intel.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$26.69</span>
                        <del>28.56</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={-1}
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
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
              style={{ width: 237 }}
              data-slick-index={-3}
              id=""
              aria-hidden="true"
              tabIndex={-1}
            >
              <div className="row m-0">
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/electronic/product-1.jpg"
                          className="img-fluid blur-up lazyloaded"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={-1}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$247.00</span>
                        <del>$250.00</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={-1}
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/electronic/product-2.jpg"
                          className="img-fluid blur-up lazyloaded"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={-1}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          Tracker with IP67 Waterproof Pedometer Smart watch.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$26.69</span>
                        <del>28.56</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={-1}
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
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
              style={{ width: 237 }}
              data-slick-index={-2}
              id=""
              aria-hidden="true"
              tabIndex={-1}
            >
              <div className="row m-0">
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/electronic/product-3.jpg"
                          className="img-fluid blur-up lazyloaded"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={-1}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          Cancelling Headphones Wireless.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$120.00</span>
                        <del>28.56</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={-1}
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="label-tag">
                      <span>NEW</span>
                    </div>
                    <div className="product-image">
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/electronic/product-4.jpg"
                          className="img-fluid blur-up lazyloaded"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={-1}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          Professional Camera 4K Digital Video Camera.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$26.69</span>
                        <del>28.56</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={-1}
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
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
              style={{ width: 237 }}
              data-slick-index={-1}
              id=""
              aria-hidden="true"
              tabIndex={-1}
            >
              <div className="row m-0">
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/electronic/product-5.jpg"
                          className="img-fluid blur-up lazyloaded"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={-1}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          Mini Portable PD 22.5W Fast Charging Powerbank.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$26.69</span>
                        <del>28.56</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={-1}
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/electronic/product-6.jpg"
                          className="img-fluid blur-up lazyloaded"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={-1}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          CPU Cooler 2 Heat Pipes 12mm 4 Pin PWM RGB for Intel.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$26.69</span>
                        <del>28.56</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={-1}
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
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
              style={{ width: 237 }}
              data-slick-index={0}
              aria-hidden="false"
              tabIndex={0}
            >
              <div className="row m-0">
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <a href="product.html" tabIndex={0}>
                        <img
                          src="../assets/images/electronic/product-1.jpg"
                          className="img-fluid blur-up lazyloaded"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={0}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={0}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$247.00</span>
                        <del>$250.00</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={0}
                          fdprocessedid="61uova"
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <a href="product.html" tabIndex={0}>
                        <img
                          src="../assets/images/electronic/product-2.jpg"
                          className="img-fluid blur-up lazyloaded"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={0}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={0}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          Tracker with IP67 Waterproof Pedometer Smart watch.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$26.69</span>
                        <del>28.56</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={0}
                          fdprocessedid="i9ut9d"
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
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
              style={{ width: 237 }}
              data-slick-index={1}
              aria-hidden="false"
              tabIndex={0}
            >
              <div className="row m-0">
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <a href="product.html" tabIndex={0}>
                        <img
                          src="../assets/images/electronic/product-3.jpg"
                          className="img-fluid blur-up lazyloaded"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={0}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={0}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          Cancelling Headphones Wireless.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$120.00</span>
                        <del>28.56</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={0}
                          fdprocessedid="ezv3w"
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="label-tag">
                      <span>NEW</span>
                    </div>
                    <div className="product-image">
                      <a href="product.html" tabIndex={0}>
                        <img
                          src="../assets/images/electronic/product-4.jpg"
                          className="img-fluid blur-up lazyloaded"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={0}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={0}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          Professional Camera 4K Digital Video Camera.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$26.69</span>
                        <del>28.56</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={0}
                          fdprocessedid="vjwwv9"
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
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
              style={{ width: 237 }}
              data-slick-index={2}
              aria-hidden="false"
              tabIndex={0}
            >
              <div className="row m-0">
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <a href="product.html" tabIndex={0}>
                        <img
                          src="../assets/images/electronic/product-5.jpg"
                          className="img-fluid blur-up lazyloaded"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={0}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={0}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          Mini Portable PD 22.5W Fast Charging Powerbank.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$26.69</span>
                        <del>28.56</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={0}
                          fdprocessedid="usysug"
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <a href="product.html" tabIndex={0}>
                        <img
                          src="../assets/images/electronic/product-6.jpg"
                          className="img-fluid blur-up lazyloaded"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={0}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={0}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          CPU Cooler 2 Heat Pipes 12mm 4 Pin PWM RGB for Intel.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$26.69</span>
                        <del>28.56</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={0}
                          fdprocessedid="sa0ch"
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
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
              style={{ width: 237 }}
              data-slick-index={3}
              aria-hidden="false"
              tabIndex={0}
            >
              <div className="row m-0">
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <a href="product.html" tabIndex={0}>
                        <img
                          src="../assets/images/electronic/product-1.jpg"
                          className="img-fluid blur-up lazyloaded"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={0}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={0}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$247.00</span>
                        <del>$250.00</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={0}
                          fdprocessedid="6fdkq"
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <a href="product.html" tabIndex={0}>
                        <img
                          src="../assets/images/electronic/product-2.jpg"
                          className="img-fluid blur-up lazyloaded"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={0}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={0}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          Tracker with IP67 Waterproof Pedometer Smart watch.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$26.69</span>
                        <del>28.56</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={0}
                          fdprocessedid="3jc28l"
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
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
              style={{ width: 237 }}
              data-slick-index={4}
              aria-hidden="true"
              tabIndex={-1}
            >
              <div className="row m-0">
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/electronic/product-3.jpg"
                          className="img-fluid blur-up lazyloaded"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={-1}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          Cancelling Headphones Wireless.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$120.00</span>
                        <del>28.56</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={-1}
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="label-tag">
                      <span>NEW</span>
                    </div>
                    <div className="product-image">
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/electronic/product-4.jpg"
                          className="img-fluid blur-up lazyloaded"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={-1}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          Professional Camera 4K Digital Video Camera.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$26.69</span>
                        <del>28.56</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={-1}
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
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
              style={{ width: 237 }}
              data-slick-index={5}
              aria-hidden="true"
              tabIndex={-1}
            >
              <div className="row m-0">
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/electronic/product-5.jpg"
                          className="img-fluid blur-up lazyloaded"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={-1}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          Mini Portable PD 22.5W Fast Charging Powerbank.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$26.69</span>
                        <del>28.56</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={-1}
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/electronic/product-6.jpg"
                          className="img-fluid blur-up lazyloaded"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={-1}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          CPU Cooler 2 Heat Pipes 12mm 4 Pin PWM RGB for Intel.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$26.69</span>
                        <del>28.56</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={-1}
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
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
              style={{ width: 237 }}
              data-slick-index={6}
              id=""
              aria-hidden="true"
              tabIndex={-1}
            >
              <div className="row m-0">
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/electronic/product-1.jpg"
                          className="img-fluid blur-up lazyloaded"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={-1}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$247.00</span>
                        <del>$250.00</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={-1}
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/electronic/product-2.jpg"
                          className="img-fluid blur-up lazyloaded"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={-1}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          Tracker with IP67 Waterproof Pedometer Smart watch.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$26.69</span>
                        <del>28.56</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={-1}
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
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
              style={{ width: 237 }}
              data-slick-index={7}
              id=""
              aria-hidden="true"
              tabIndex={-1}
            >
              <div className="row m-0">
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/electronic/product-3.jpg"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={-1}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          Cancelling Headphones Wireless.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$120.00</span>
                        <del>28.56</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={-1}
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="label-tag">
                      <span>NEW</span>
                    </div>
                    <div className="product-image">
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/electronic/product-4.jpg"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={-1}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          Professional Camera 4K Digital Video Camera.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$26.69</span>
                        <del>28.56</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={-1}
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
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
              style={{ width: 237 }}
              data-slick-index={8}
              id=""
              aria-hidden="true"
              tabIndex={-1}
            >
              <div className="row m-0">
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/electronic/product-5.jpg"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={-1}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          Mini Portable PD 22.5W Fast Charging Powerbank.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$26.69</span>
                        <del>28.56</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={-1}
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/electronic/product-6.jpg"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={-1}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          CPU Cooler 2 Heat Pipes 12mm 4 Pin PWM RGB for Intel.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$26.69</span>
                        <del>28.56</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={-1}
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
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
              style={{ width: 237 }}
              data-slick-index={9}
              id=""
              aria-hidden="true"
              tabIndex={-1}
            >
              <div className="row m-0">
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/electronic/product-1.jpg"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={-1}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$247.00</span>
                        <del>$250.00</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={-1}
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/electronic/product-2.jpg"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={-1}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          Tracker with IP67 Waterproof Pedometer Smart watch.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$26.69</span>
                        <del>28.56</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={-1}
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
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
              style={{ width: 237 }}
              data-slick-index={10}
              id=""
              aria-hidden="true"
              tabIndex={-1}
            >
              <div className="row m-0">
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/electronic/product-3.jpg"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={-1}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          Cancelling Headphones Wireless.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$120.00</span>
                        <del>28.56</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={-1}
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="label-tag">
                      <span>NEW</span>
                    </div>
                    <div className="product-image">
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/electronic/product-4.jpg"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={-1}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          Professional Camera 4K Digital Video Camera.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$26.69</span>
                        <del>28.56</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={-1}
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
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
              style={{ width: 237 }}
              data-slick-index={11}
              id=""
              aria-hidden="true"
              tabIndex={-1}
            >
              <div className="row m-0">
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/electronic/product-5.jpg"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={-1}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          Mini Portable PD 22.5W Fast Charging Powerbank.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$26.69</span>
                        <del>28.56</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={-1}
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-0">
                  <div className="product-box">
                    <div className="product-image">
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/electronic/product-6.jpg"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <ul className="product-option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="View"
                        >
                          <a
                            href="javascript:void(0)"
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <svg
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
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Wishlist"
                        >
                          <a
                            href="wishlist.html"
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
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <a href="product.html" tabIndex={-1}>
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44
                          }}
                        >
                          CPU Cooler 2 Heat Pipes 12mm 4 Pin PWM RGB for Intel.
                        </h6>
                      </a>
                      <h5 className="sold text-content">
                        <span className="theme-color price">$26.69</span>
                        <del>28.56</del>
                      </h5>
                      <div className="product-rating mt-sm-2 mt-1">
                        <ul className="rating">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </li>
                        </ul>
                        <h6 className="theme-color">In Stock</h6>
                      </div>
                      <div className="add-to-cart-box">
                        <button
                          className="btn btn-add-cart addcart-button"
                          tabIndex={-1}
                        >
                          Add
                          <span className="add-icon">
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
                              <i className="fa fa-minus" aria-hidden="true" />
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
                              <i className="fa fa-plus" aria-hidden="true" />
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
  </div>
  <div className="title">
    <h2>Bowse by Categories</h2>
    <span className="title-leaf">
      <svg className="icon-width">
        <use xlinkHref="../assets/svg/leaf.svg#leaf" />
      </svg>
    </span>
    <p>Top Categories Of The Week</p>
  </div>
  <div className="category-slider-2 product-wrapper no-arrow slick-initialized slick-slider slick-dotted">
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
          width: 3686,
          transform: "translate3d(-1358px, 0px, 0px)"
        }}
      >
        <div
          className="slick-slide slick-cloned"
          style={{ width: 194 }}
          data-slick-index={-5}
          id=""
          aria-hidden="true"
          tabIndex={-1}
        >
          <a
            href="shop.html"
            className="category-box category-dark"
            tabIndex={-1}
          >
            <div>
              <img
                src="../assets/images/electronic/Mobiles-&-Tablets.png"
                className="blur-up lazyloaded"
                alt=""
              />
              <h5>Mobiles &amp; Tablets</h5>
            </div>
          </a>
        </div>
        <div
          className="slick-slide slick-cloned"
          style={{ width: 194 }}
          data-slick-index={-4}
          id=""
          aria-hidden="true"
          tabIndex={-1}
        >
          <a
            href="shop.html"
            className="category-box category-dark"
            tabIndex={-1}
          >
            <div>
              <img
                src="../assets/images/electronic/Movies-Music-&-Video-Game.png"
                className="blur-up lazyloaded"
                alt=""
              />
              <h5>Movies, Music &amp; Video Game</h5>
            </div>
          </a>
        </div>
        <div
          className="slick-slide slick-cloned"
          style={{ width: 194 }}
          data-slick-index={-3}
          id=""
          aria-hidden="true"
          tabIndex={-1}
        >
          <a
            href="shop.html"
            className="category-box category-dark"
            tabIndex={-1}
          >
            <div>
              <img
                src="../assets/images/electronic/TV-&-Audio.png"
                className="blur-up lazyloaded"
                alt=""
              />
              <h5>TV &amp; Audio</h5>
            </div>
          </a>
        </div>
        <div
          className="slick-slide slick-cloned"
          style={{ width: 194 }}
          data-slick-index={-2}
          id=""
          aria-hidden="true"
          tabIndex={-1}
        >
          <a
            href="shop.html"
            className="category-box category-dark"
            tabIndex={-1}
          >
            <div>
              <img
                src="../assets/images/electronic/Watches-&-Eyewear.png"
                className="blur-up lazyloaded"
                alt=""
              />
              <h5>Watches &amp; Eyewear</h5>
            </div>
          </a>
        </div>
        <div
          className="slick-slide slick-cloned"
          style={{ width: 194 }}
          data-slick-index={-1}
          id=""
          aria-hidden="true"
          tabIndex={-1}
        >
          <a
            href="shop.html"
            className="category-box category-dark"
            tabIndex={-1}
          >
            <div>
              <img
                src="../assets/images/electronic/Car-Motorbike-&-Industrial.png"
                className="blur-up lazyloaded"
                alt=""
              />
              <h5>Car, Motorbike &amp; Industrial</h5>
            </div>
          </a>
        </div>
        <div
          className="slick-slide"
          style={{ width: 194 }}
          data-slick-index={0}
          aria-hidden="true"
          tabIndex={-1}
          role="tabpanel"
          id="slick-slide00"
          aria-describedby="slick-slide-control00"
        >
          <a
            href="shop.html"
            className="category-box category-dark"
            tabIndex={-1}
          >
            <div>
              <img
                src="../assets/images/electronic/Computers-&-Accessories.png"
                className="blur-up lazyloaded"
                alt=""
              />
              <h5>Computers &amp; Accessories</h5>
            </div>
          </a>
        </div>
        <div
          className="slick-slide"
          style={{ width: 194 }}
          data-slick-index={1}
          aria-hidden="true"
          tabIndex={-1}
          role="tabpanel"
          id="slick-slide01"
          aria-describedby="slick-slide-control01"
        >
          <a
            href="shop.html"
            className="category-box category-dark"
            tabIndex={-1}
          >
            <div>
              <img
                src="../assets/images/electronic/Cameras-Audio-&-Video.png"
                className="blur-up lazyloaded"
                alt=""
              />
              <h5>Cameras, Audio &amp; Video</h5>
            </div>
          </a>
        </div>
        <div
          className="slick-slide slick-current slick-active"
          style={{ width: 194 }}
          data-slick-index={2}
          aria-hidden="false"
          tabIndex={0}
          role="tabpanel"
          id="slick-slide02"
          aria-describedby="slick-slide-control02"
        >
          <a
            href="shop.html"
            className="category-box category-dark"
            tabIndex={0}
          >
            <div>
              <img
                src="../assets/images/electronic/Mobiles-&-Tablets.png"
                className="blur-up lazyloaded"
                alt=""
              />
              <h5>Mobiles &amp; Tablets</h5>
            </div>
          </a>
        </div>
        <div
          className="slick-slide slick-active"
          style={{ width: 194 }}
          data-slick-index={3}
          aria-hidden="false"
          tabIndex={0}
          role="tabpanel"
          id="slick-slide03"
          aria-describedby="slick-slide-control03"
        >
          <a
            href="shop.html"
            className="category-box category-dark"
            tabIndex={0}
          >
            <div>
              <img
                src="../assets/images/electronic/Movies-Music-&-Video-Game.png"
                className="blur-up lazyloaded"
                alt=""
              />
              <h5>Movies, Music &amp; Video Game</h5>
            </div>
          </a>
        </div>
        <div
          className="slick-slide slick-active"
          style={{ width: 194 }}
          data-slick-index={4}
          aria-hidden="false"
          tabIndex={0}
          role="tabpanel"
          id="slick-slide04"
          aria-describedby="slick-slide-control04"
        >
          <a
            href="shop.html"
            className="category-box category-dark"
            tabIndex={0}
          >
            <div>
              <img
                src="../assets/images/electronic/TV-&-Audio.png"
                className="blur-up lazyloaded"
                alt=""
              />
              <h5>TV &amp; Audio</h5>
            </div>
          </a>
        </div>
        <div
          className="slick-slide slick-active"
          style={{ width: 194 }}
          data-slick-index={5}
          aria-hidden="false"
          tabIndex={0}
          role="tabpanel"
          id="slick-slide05"
          aria-describedby="slick-slide-control05"
        >
          <a
            href="shop.html"
            className="category-box category-dark"
            tabIndex={0}
          >
            <div>
              <img
                src="../assets/images/electronic/Watches-&-Eyewear.png"
                className="blur-up lazyloaded"
                alt=""
              />
              <h5>Watches &amp; Eyewear</h5>
            </div>
          </a>
        </div>
        <div
          className="slick-slide slick-active"
          style={{ width: 194 }}
          data-slick-index={6}
          aria-hidden="false"
          tabIndex={0}
          role="tabpanel"
          id="slick-slide06"
          aria-describedby="slick-slide-control06"
        >
          <a
            href="shop.html"
            className="category-box category-dark"
            tabIndex={0}
          >
            <div>
              <img
                src="../assets/images/electronic/Car-Motorbike-&-Industrial.png"
                className="blur-up lazyloaded"
                alt=""
              />
              <h5>Car, Motorbike &amp; Industrial</h5>
            </div>
          </a>
        </div>
        <div
          className="slick-slide slick-cloned"
          style={{ width: 194 }}
          data-slick-index={7}
          id=""
          aria-hidden="true"
          tabIndex={-1}
        >
          <a
            href="shop.html"
            className="category-box category-dark"
            tabIndex={-1}
          >
            <div>
              <img
                src="../assets/images/electronic/Computers-&-Accessories.png"
                className="blur-up lazyloaded"
                alt=""
              />
              <h5>Computers &amp; Accessories</h5>
            </div>
          </a>
        </div>
        <div
          className="slick-slide slick-cloned"
          style={{ width: 194 }}
          data-slick-index={8}
          id=""
          aria-hidden="true"
          tabIndex={-1}
        >
          <a
            href="shop.html"
            className="category-box category-dark"
            tabIndex={-1}
          >
            <div>
              <img
                src="../assets/images/electronic/Cameras-Audio-&-Video.png"
                className="blur-up lazyloaded"
                alt=""
              />
              <h5>Cameras, Audio &amp; Video</h5>
            </div>
          </a>
        </div>
        <div
          className="slick-slide slick-cloned"
          style={{ width: 194 }}
          data-slick-index={9}
          id=""
          aria-hidden="true"
          tabIndex={-1}
        >
          <a
            href="shop.html"
            className="category-box category-dark"
            tabIndex={-1}
          >
            <div>
              <img
                src="../assets/images/electronic/Mobiles-&-Tablets.png"
                className="blur-up lazyloaded"
                alt=""
              />
              <h5>Mobiles &amp; Tablets</h5>
            </div>
          </a>
        </div>
        <div
          className="slick-slide slick-cloned"
          style={{ width: 194 }}
          data-slick-index={10}
          id=""
          aria-hidden="true"
          tabIndex={-1}
        >
          <a
            href="shop.html"
            className="category-box category-dark"
            tabIndex={-1}
          >
            <div>
              <img
                src="../assets/images/electronic/Movies-Music-&-Video-Game.png"
                className="blur-up lazyloaded"
                alt=""
              />
              <h5>Movies, Music &amp; Video Game</h5>
            </div>
          </a>
        </div>
        <div
          className="slick-slide slick-cloned"
          style={{ width: 194 }}
          data-slick-index={11}
          id=""
          aria-hidden="true"
          tabIndex={-1}
        >
          <a
            href="shop.html"
            className="category-box category-dark"
            tabIndex={-1}
          >
            <div>
              <img
                src="../assets/images/electronic/TV-&-Audio.png"
                className="blur-up lazyloaded"
                alt=""
              />
              <h5>TV &amp; Audio</h5>
            </div>
          </a>
        </div>
        <div
          className="slick-slide slick-cloned"
          style={{ width: 194 }}
          data-slick-index={12}
          id=""
          aria-hidden="true"
          tabIndex={-1}
        >
          <a
            href="shop.html"
            className="category-box category-dark"
            tabIndex={-1}
          >
            <div>
              <img
                src="../assets/images/electronic/Watches-&-Eyewear.png"
                className="blur-up lazyloaded"
                alt=""
              />
              <h5>Watches &amp; Eyewear</h5>
            </div>
          </a>
        </div>
        <div
          className="slick-slide slick-cloned"
          style={{ width: 194 }}
          data-slick-index={13}
          id=""
          aria-hidden="true"
          tabIndex={-1}
        >
          <a
            href="shop.html"
            className="category-box category-dark"
            tabIndex={-1}
          >
            <div>
              <img
                src="../assets/images/electronic/Car-Motorbike-&-Industrial.png"
                className="blur-up lazyloaded"
                alt=""
              />
              <h5>Car, Motorbike &amp; Industrial</h5>
            </div>
          </a>
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
    <ul className="slick-dots" style={{}} role="tablist">
      <li className="" role="presentation">
        <button
          type="button"
          role="tab"
          id="slick-slide-control00"
          aria-controls="slick-slide00"
          aria-label="1 of 2"
          tabIndex={-1}
          fdprocessedid="z5hkj9"
        >
          1
        </button>
      </li>
      <li role="presentation" className="">
        <button
          type="button"
          role="tab"
          id="slick-slide-control01"
          aria-controls="slick-slide01"
          aria-label="2 of 2"
          tabIndex={-1}
          fdprocessedid="lpfkae"
        >
          2
        </button>
      </li>
      <li role="presentation" className="slick-active">
        <button
          type="button"
          role="tab"
          id="slick-slide-control02"
          aria-controls="slick-slide02"
          aria-label="3 of 2"
          tabIndex={0}
          fdprocessedid="rvm8l"
          aria-selected="true"
        >
          3
        </button>
      </li>
      <li role="presentation" className="">
        <button
          type="button"
          role="tab"
          id="slick-slide-control03"
          aria-controls="slick-slide03"
          aria-label="4 of 2"
          tabIndex={-1}
          fdprocessedid="viaj7g"
        >
          4
        </button>
      </li>
      <li role="presentation" className="">
        <button
          type="button"
          role="tab"
          id="slick-slide-control04"
          aria-controls="slick-slide04"
          aria-label="5 of 2"
          tabIndex={-1}
          fdprocessedid="o801a"
        >
          5
        </button>
      </li>
      <li role="presentation" className="">
        <button
          type="button"
          role="tab"
          id="slick-slide-control05"
          aria-controls="slick-slide05"
          aria-label="6 of 2"
          tabIndex={-1}
          fdprocessedid="0ki7ls"
        >
          6
        </button>
      </li>
      <li role="presentation" className="">
        <button
          type="button"
          role="tab"
          id="slick-slide-control06"
          aria-controls="slick-slide06"
          aria-label="7 of 2"
          tabIndex={-1}
          fdprocessedid="jzaunk"
        >
          7
        </button>
      </li>
    </ul>
  </div>
  <div className="section-t-space section-b-space">
    <div className="row g-md-4 g-3">
      <div className="col-md-6">
        <div
          className="banner-contain hover-effect bg-size blur-up lazyloaded"
          style={{
            backgroundImage: 'url("../assets/images/electronic/main-bg2.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            display: "block"
          }}
        >
          <img
            src="../assets/images/electronic/main-bg2.webp"
            className="bg-img blur-up lazyload"
            alt=""
            style={{ display: "none" }}
          />
          <div className="banner-details p-center-left p-4">
            <div>
              <h3 className="text-exo">50% offer</h3>
              <h4 className="text-russo fw-normal theme-color mb-2">
                Bluetooth Ticon Air Bit
              </h4>
              <button
                onclick="location.href = 'shop.html';"
                className="btn btn-animation btn-sm mend-auto"
                fdprocessedid="42h4ay"
              >
                Shop Now <i className="fa-solid fa-arrow-right icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div
          className="banner-contain hover-effect bg-size blur-up lazyloaded"
          style={{
            backgroundImage:
              'url("../assets/images/electronic/product-banner-1.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            display: "block"
          }}
        >
          <img
            src="../assets/images/electronic/product-banner-1.jpg"
            className="bg-img blur-up lazyload"
            alt=""
            style={{ display: "none" }}
          />
          <div className="banner-details p-center-left p-4">
            <div>
              <h3 className="text-exo">50% offer</h3>
              <h4 className="text-russo fw-normal theme-color mb-2">
                BLU G91 Pro 2022
              </h4>
              <button
                onclick="location.href = 'shop.html';"
                className="btn btn-animation btn-sm mend-auto"
                fdprocessedid="4s87xt"
              >
                Shop Now <i className="fa-solid fa-arrow-right icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="title d-block">
    <h2>Trending products</h2>
    <span className="title-leaf">
      <svg className="icon-width">
        <use xlinkHref="../assets/svg/leaf.svg#leaf" />
      </svg>
    </span>
    <p>A virtual assistant collects the products from your list</p>
  </div>
  <div
    className="product-border overflow-hidden wow fadeInUp"
    style={{ visibility: "visible", animationName: "fadeInUp" }}
  >
    <div className="product-box-slider no-arrow slick-initialized slick-slider">
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
            width: 3760,
            transform: "translate3d(-940px, 0px, 0px)"
          }}
        >
          <div
            className="slick-slide slick-cloned"
            style={{ width: 235 }}
            data-slick-index={-4}
            id=""
            aria-hidden="true"
            tabIndex={-1}
          >
            <div className="row m-0">
              <div className="col-12 px-0">
                <div className="product-box">
                  <div className="product-image">
                    <a href="product.html" tabIndex={-1}>
                      <img
                        src="../assets/images/electronic/product-3.jpg"
                        className="img-fluid blur-up lazyloaded"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="View"
                      >
                        <a
                          href="javascript:void(0)"
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Compare"
                      >
                        <a href="compare.html" tabIndex={-1}>
                          <svg
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Wishlist"
                      >
                        <a
                          href="wishlist.html"
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
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <a href="product.html" tabIndex={-1}>
                      <h6
                        className="name h-100"
                        style={{ minHeight: 0, maxHeight: "none", height: 44 }}
                      >
                        Cancelling Headphones Wireless.
                      </h6>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
                    <div className="product-rating mt-sm-2 mt-1">
                      <ul className="rating">
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                      </ul>
                      <h6 className="theme-color">In Stock</h6>
                    </div>
                    <div className="add-to-cart-box">
                      <button
                        className="btn btn-add-cart addcart-button"
                        tabIndex={-1}
                      >
                        Add
                        <span className="add-icon">
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
                            <i className="fa fa-minus" aria-hidden="true" />
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
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
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
            style={{ width: 235 }}
            data-slick-index={-3}
            id=""
            aria-hidden="true"
            tabIndex={-1}
          >
            <div className="row m-0">
              <div className="col-12 px-0">
                <div className="product-box">
                  <div className="product-image">
                    <a href="product.html" tabIndex={-1}>
                      <img
                        src="../assets/images/electronic/product-4.jpg"
                        className="img-fluid blur-up lazyloaded"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="View"
                      >
                        <a
                          href="javascript:void(0)"
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Compare"
                      >
                        <a href="compare.html" tabIndex={-1}>
                          <svg
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Wishlist"
                      >
                        <a
                          href="wishlist.html"
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
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <a href="product.html" tabIndex={-1}>
                      <h6
                        className="name h-100"
                        style={{ minHeight: 0, maxHeight: "none", height: 44 }}
                      >
                        Professional Camera 4K Digital Video Camera
                      </h6>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
                    <div className="product-rating mt-sm-2 mt-1">
                      <ul className="rating">
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                      </ul>
                      <h6 className="theme-color">In Stock</h6>
                    </div>
                    <div className="add-to-cart-box">
                      <button
                        className="btn btn-add-cart addcart-button"
                        tabIndex={-1}
                      >
                        Add
                        <span className="add-icon">
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
                            <i className="fa fa-minus" aria-hidden="true" />
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
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
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
            style={{ width: 235 }}
            data-slick-index={-2}
            id=""
            aria-hidden="true"
            tabIndex={-1}
          >
            <div className="row m-0">
              <div className="col-12 px-0">
                <div className="product-box">
                  <div className="product-image">
                    <a href="product.html" tabIndex={-1}>
                      <img
                        src="../assets/images/electronic/product-5.jpg"
                        className="img-fluid blur-up lazyloaded"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="View"
                      >
                        <a
                          href="javascript:void(0)"
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Compare"
                      >
                        <a href="compare.html" tabIndex={-1}>
                          <svg
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Wishlist"
                      >
                        <a
                          href="wishlist.html"
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
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <a href="product.html" tabIndex={-1}>
                      <h6
                        className="name h-100"
                        style={{ minHeight: 0, maxHeight: "none", height: 44 }}
                      >
                        Mini Portable PD 22.5W Fast Charging Powerbank.
                      </h6>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
                    <div className="product-rating mt-sm-2 mt-1">
                      <ul className="rating">
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                      </ul>
                      <h6 className="theme-color">In Stock</h6>
                    </div>
                    <div className="add-to-cart-box">
                      <button
                        className="btn btn-add-cart addcart-button"
                        tabIndex={-1}
                      >
                        Add
                        <span className="add-icon">
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
                            <i className="fa fa-minus" aria-hidden="true" />
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
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
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
            style={{ width: 235 }}
            data-slick-index={-1}
            id=""
            aria-hidden="true"
            tabIndex={-1}
          >
            <div className="row m-0">
              <div className="col-12 px-0">
                <div className="product-box">
                  <div className="product-image">
                    <a href="product.html" tabIndex={-1}>
                      <img
                        src="../assets/images/electronic/product-6.jpg"
                        className="img-fluid blur-up lazyloaded"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="View"
                      >
                        <a
                          href="javascript:void(0)"
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Compare"
                      >
                        <a href="compare.html" tabIndex={-1}>
                          <svg
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Wishlist"
                      >
                        <a
                          href="wishlist.html"
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
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <a href="product.html" tabIndex={-1}>
                      <h6
                        className="name h-100"
                        style={{ minHeight: 0, maxHeight: "none", height: 44 }}
                      >
                        CPU Cooler 2 Heat Pipes 12mm 4 Pin PWM RGB for Intel.
                      </h6>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
                    <div className="product-rating mt-sm-2 mt-1">
                      <ul className="rating">
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                      </ul>
                      <h6 className="theme-color">In Stock</h6>
                    </div>
                    <div className="add-to-cart-box">
                      <button
                        className="btn btn-add-cart addcart-button"
                        tabIndex={-1}
                      >
                        Add
                        <span className="add-icon">
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
                            <i className="fa fa-minus" aria-hidden="true" />
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
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
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
            style={{ width: 235 }}
            data-slick-index={0}
            aria-hidden="false"
            tabIndex={0}
          >
            <div className="row m-0">
              <div className="col-12 px-0">
                <div className="product-box">
                  <div className="product-image">
                    <a href="product.html" tabIndex={0}>
                      <img
                        src="../assets/images/electronic/product-1.jpg"
                        className="img-fluid blur-up lazyloaded"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="View"
                      >
                        <a
                          href="javascript:void(0)"
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Compare"
                      >
                        <a href="compare.html" tabIndex={0}>
                          <svg
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Wishlist"
                      >
                        <a
                          href="wishlist.html"
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
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <a href="product.html" tabIndex={0}>
                      <h6
                        className="name h-100"
                        style={{ minHeight: 0, maxHeight: "none", height: 44 }}
                      >
                        Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB.
                      </h6>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
                    <div className="product-rating mt-sm-2 mt-1">
                      <ul className="rating">
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                      </ul>
                      <h6 className="theme-color">In Stock</h6>
                    </div>
                    <div className="add-to-cart-box">
                      <button
                        className="btn btn-add-cart addcart-button"
                        tabIndex={0}
                        fdprocessedid="c5akx"
                      >
                        Add
                        <span className="add-icon">
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
                            <i className="fa fa-minus" aria-hidden="true" />
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
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
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
            style={{ width: 235 }}
            data-slick-index={1}
            aria-hidden="false"
            tabIndex={0}
          >
            <div className="row m-0">
              <div className="col-12 px-0">
                <div className="product-box">
                  <div className="product-image">
                    <a href="product.html" tabIndex={0}>
                      <img
                        src="../assets/images/electronic/product-2.jpg"
                        className="img-fluid blur-up lazyloaded"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="View"
                      >
                        <a
                          href="javascript:void(0)"
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Compare"
                      >
                        <a href="compare.html" tabIndex={0}>
                          <svg
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Wishlist"
                      >
                        <a
                          href="wishlist.html"
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
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <a href="product.html" tabIndex={0}>
                      <h6
                        className="name h-100"
                        style={{ minHeight: 0, maxHeight: "none", height: 44 }}
                      >
                        Tracker with IP67 Waterproof Pedometer Smart watch.
                      </h6>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
                    <div className="product-rating mt-sm-2 mt-1">
                      <ul className="rating">
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                      </ul>
                      <h6 className="theme-color">In Stock</h6>
                    </div>
                    <div className="add-to-cart-box">
                      <button
                        className="btn btn-add-cart addcart-button"
                        tabIndex={0}
                        fdprocessedid="gf7tix"
                      >
                        Add
                        <span className="add-icon">
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
                            <i className="fa fa-minus" aria-hidden="true" />
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
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
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
            style={{ width: 235 }}
            data-slick-index={2}
            aria-hidden="false"
            tabIndex={0}
          >
            <div className="row m-0">
              <div className="col-12 px-0">
                <div className="product-box">
                  <div className="product-image">
                    <a href="product.html" tabIndex={0}>
                      <img
                        src="../assets/images/electronic/product-3.jpg"
                        className="img-fluid blur-up lazyloaded"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="View"
                      >
                        <a
                          href="javascript:void(0)"
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Compare"
                      >
                        <a href="compare.html" tabIndex={0}>
                          <svg
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Wishlist"
                      >
                        <a
                          href="wishlist.html"
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
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <a href="product.html" tabIndex={0}>
                      <h6
                        className="name h-100"
                        style={{ minHeight: 0, maxHeight: "none", height: 44 }}
                      >
                        Cancelling Headphones Wireless.
                      </h6>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
                    <div className="product-rating mt-sm-2 mt-1">
                      <ul className="rating">
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                      </ul>
                      <h6 className="theme-color">In Stock</h6>
                    </div>
                    <div className="add-to-cart-box">
                      <button
                        className="btn btn-add-cart addcart-button"
                        tabIndex={0}
                        fdprocessedid="qmrcx"
                      >
                        Add
                        <span className="add-icon">
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
                            <i className="fa fa-minus" aria-hidden="true" />
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
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
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
            style={{ width: 235 }}
            data-slick-index={3}
            aria-hidden="false"
            tabIndex={0}
          >
            <div className="row m-0">
              <div className="col-12 px-0">
                <div className="product-box">
                  <div className="product-image">
                    <a href="product.html" tabIndex={0}>
                      <img
                        src="../assets/images/electronic/product-4.jpg"
                        className="img-fluid blur-up lazyloaded"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="View"
                      >
                        <a
                          href="javascript:void(0)"
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Compare"
                      >
                        <a href="compare.html" tabIndex={0}>
                          <svg
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Wishlist"
                      >
                        <a
                          href="wishlist.html"
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
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <a href="product.html" tabIndex={0}>
                      <h6
                        className="name h-100"
                        style={{ minHeight: 0, maxHeight: "none", height: 44 }}
                      >
                        Professional Camera 4K Digital Video Camera
                      </h6>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
                    <div className="product-rating mt-sm-2 mt-1">
                      <ul className="rating">
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                      </ul>
                      <h6 className="theme-color">In Stock</h6>
                    </div>
                    <div className="add-to-cart-box">
                      <button
                        className="btn btn-add-cart addcart-button"
                        tabIndex={0}
                        fdprocessedid="7ody9a"
                      >
                        Add
                        <span className="add-icon">
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
                            <i className="fa fa-minus" aria-hidden="true" />
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
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
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
            style={{ width: 235 }}
            data-slick-index={4}
            aria-hidden="true"
            tabIndex={-1}
          >
            <div className="row m-0">
              <div className="col-12 px-0">
                <div className="product-box">
                  <div className="product-image">
                    <a href="product.html" tabIndex={-1}>
                      <img
                        src="../assets/images/electronic/product-5.jpg"
                        className="img-fluid blur-up lazyloaded"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="View"
                      >
                        <a
                          href="javascript:void(0)"
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Compare"
                      >
                        <a href="compare.html" tabIndex={-1}>
                          <svg
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Wishlist"
                      >
                        <a
                          href="wishlist.html"
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
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <a href="product.html" tabIndex={-1}>
                      <h6
                        className="name h-100"
                        style={{ minHeight: 0, maxHeight: "none", height: 44 }}
                      >
                        Mini Portable PD 22.5W Fast Charging Powerbank.
                      </h6>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
                    <div className="product-rating mt-sm-2 mt-1">
                      <ul className="rating">
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                      </ul>
                      <h6 className="theme-color">In Stock</h6>
                    </div>
                    <div className="add-to-cart-box">
                      <button
                        className="btn btn-add-cart addcart-button"
                        tabIndex={-1}
                      >
                        Add
                        <span className="add-icon">
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
                            <i className="fa fa-minus" aria-hidden="true" />
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
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
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
            style={{ width: 235 }}
            data-slick-index={5}
            aria-hidden="true"
            tabIndex={-1}
          >
            <div className="row m-0">
              <div className="col-12 px-0">
                <div className="product-box">
                  <div className="product-image">
                    <a href="product.html" tabIndex={-1}>
                      <img
                        src="../assets/images/electronic/product-6.jpg"
                        className="img-fluid blur-up lazyloaded"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="View"
                      >
                        <a
                          href="javascript:void(0)"
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Compare"
                      >
                        <a href="compare.html" tabIndex={-1}>
                          <svg
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Wishlist"
                      >
                        <a
                          href="wishlist.html"
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
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <a href="product.html" tabIndex={-1}>
                      <h6
                        className="name h-100"
                        style={{ minHeight: 0, maxHeight: "none", height: 44 }}
                      >
                        CPU Cooler 2 Heat Pipes 12mm 4 Pin PWM RGB for Intel.
                      </h6>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
                    <div className="product-rating mt-sm-2 mt-1">
                      <ul className="rating">
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                      </ul>
                      <h6 className="theme-color">In Stock</h6>
                    </div>
                    <div className="add-to-cart-box">
                      <button
                        className="btn btn-add-cart addcart-button"
                        tabIndex={-1}
                      >
                        Add
                        <span className="add-icon">
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
                            <i className="fa fa-minus" aria-hidden="true" />
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
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
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
            style={{ width: 235 }}
            data-slick-index={6}
            id=""
            aria-hidden="true"
            tabIndex={-1}
          >
            <div className="row m-0">
              <div className="col-12 px-0">
                <div className="product-box">
                  <div className="product-image">
                    <a href="product.html" tabIndex={-1}>
                      <img
                        src="../assets/images/electronic/product-1.jpg"
                        className="img-fluid blur-up lazyloaded"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="View"
                      >
                        <a
                          href="javascript:void(0)"
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Compare"
                      >
                        <a href="compare.html" tabIndex={-1}>
                          <svg
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Wishlist"
                      >
                        <a
                          href="wishlist.html"
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
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <a href="product.html" tabIndex={-1}>
                      <h6
                        className="name h-100"
                        style={{ minHeight: 0, maxHeight: "none", height: 44 }}
                      >
                        Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB.
                      </h6>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
                    <div className="product-rating mt-sm-2 mt-1">
                      <ul className="rating">
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                      </ul>
                      <h6 className="theme-color">In Stock</h6>
                    </div>
                    <div className="add-to-cart-box">
                      <button
                        className="btn btn-add-cart addcart-button"
                        tabIndex={-1}
                      >
                        Add
                        <span className="add-icon">
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
                            <i className="fa fa-minus" aria-hidden="true" />
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
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
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
            style={{ width: 235 }}
            data-slick-index={7}
            id=""
            aria-hidden="true"
            tabIndex={-1}
          >
            <div className="row m-0">
              <div className="col-12 px-0">
                <div className="product-box">
                  <div className="product-image">
                    <a href="product.html" tabIndex={-1}>
                      <img
                        src="../assets/images/electronic/product-2.jpg"
                        className="img-fluid blur-up lazyloaded"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="View"
                      >
                        <a
                          href="javascript:void(0)"
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Compare"
                      >
                        <a href="compare.html" tabIndex={-1}>
                          <svg
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Wishlist"
                      >
                        <a
                          href="wishlist.html"
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
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <a href="product.html" tabIndex={-1}>
                      <h6
                        className="name h-100"
                        style={{ minHeight: 0, maxHeight: "none", height: 44 }}
                      >
                        Tracker with IP67 Waterproof Pedometer Smart watch.
                      </h6>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
                    <div className="product-rating mt-sm-2 mt-1">
                      <ul className="rating">
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                      </ul>
                      <h6 className="theme-color">In Stock</h6>
                    </div>
                    <div className="add-to-cart-box">
                      <button
                        className="btn btn-add-cart addcart-button"
                        tabIndex={-1}
                      >
                        Add
                        <span className="add-icon">
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
                            <i className="fa fa-minus" aria-hidden="true" />
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
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
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
            style={{ width: 235 }}
            data-slick-index={8}
            id=""
            aria-hidden="true"
            tabIndex={-1}
          >
            <div className="row m-0">
              <div className="col-12 px-0">
                <div className="product-box">
                  <div className="product-image">
                    <a href="product.html" tabIndex={-1}>
                      <img
                        src="../assets/images/electronic/product-3.jpg"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="View"
                      >
                        <a
                          href="javascript:void(0)"
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Compare"
                      >
                        <a href="compare.html" tabIndex={-1}>
                          <svg
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Wishlist"
                      >
                        <a
                          href="wishlist.html"
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
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <a href="product.html" tabIndex={-1}>
                      <h6
                        className="name h-100"
                        style={{ minHeight: 0, maxHeight: "none", height: 44 }}
                      >
                        Cancelling Headphones Wireless.
                      </h6>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
                    <div className="product-rating mt-sm-2 mt-1">
                      <ul className="rating">
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                      </ul>
                      <h6 className="theme-color">In Stock</h6>
                    </div>
                    <div className="add-to-cart-box">
                      <button
                        className="btn btn-add-cart addcart-button"
                        tabIndex={-1}
                      >
                        Add
                        <span className="add-icon">
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
                            <i className="fa fa-minus" aria-hidden="true" />
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
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
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
            style={{ width: 235 }}
            data-slick-index={9}
            id=""
            aria-hidden="true"
            tabIndex={-1}
          >
            <div className="row m-0">
              <div className="col-12 px-0">
                <div className="product-box">
                  <div className="product-image">
                    <a href="product.html" tabIndex={-1}>
                      <img
                        src="../assets/images/electronic/product-4.jpg"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="View"
                      >
                        <a
                          href="javascript:void(0)"
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Compare"
                      >
                        <a href="compare.html" tabIndex={-1}>
                          <svg
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Wishlist"
                      >
                        <a
                          href="wishlist.html"
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
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <a href="product.html" tabIndex={-1}>
                      <h6
                        className="name h-100"
                        style={{ minHeight: 0, maxHeight: "none", height: 44 }}
                      >
                        Professional Camera 4K Digital Video Camera
                      </h6>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
                    <div className="product-rating mt-sm-2 mt-1">
                      <ul className="rating">
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                      </ul>
                      <h6 className="theme-color">In Stock</h6>
                    </div>
                    <div className="add-to-cart-box">
                      <button
                        className="btn btn-add-cart addcart-button"
                        tabIndex={-1}
                      >
                        Add
                        <span className="add-icon">
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
                            <i className="fa fa-minus" aria-hidden="true" />
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
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
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
            style={{ width: 235 }}
            data-slick-index={10}
            id=""
            aria-hidden="true"
            tabIndex={-1}
          >
            <div className="row m-0">
              <div className="col-12 px-0">
                <div className="product-box">
                  <div className="product-image">
                    <a href="product.html" tabIndex={-1}>
                      <img
                        src="../assets/images/electronic/product-5.jpg"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="View"
                      >
                        <a
                          href="javascript:void(0)"
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Compare"
                      >
                        <a href="compare.html" tabIndex={-1}>
                          <svg
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Wishlist"
                      >
                        <a
                          href="wishlist.html"
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
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <a href="product.html" tabIndex={-1}>
                      <h6
                        className="name h-100"
                        style={{ minHeight: 0, maxHeight: "none", height: 44 }}
                      >
                        Mini Portable PD 22.5W Fast Charging Powerbank.
                      </h6>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
                    <div className="product-rating mt-sm-2 mt-1">
                      <ul className="rating">
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                      </ul>
                      <h6 className="theme-color">In Stock</h6>
                    </div>
                    <div className="add-to-cart-box">
                      <button
                        className="btn btn-add-cart addcart-button"
                        tabIndex={-1}
                      >
                        Add
                        <span className="add-icon">
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
                            <i className="fa fa-minus" aria-hidden="true" />
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
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
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
            style={{ width: 235 }}
            data-slick-index={11}
            id=""
            aria-hidden="true"
            tabIndex={-1}
          >
            <div className="row m-0">
              <div className="col-12 px-0">
                <div className="product-box">
                  <div className="product-image">
                    <a href="product.html" tabIndex={-1}>
                      <img
                        src="../assets/images/electronic/product-6.jpg"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="View"
                      >
                        <a
                          href="javascript:void(0)"
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Compare"
                      >
                        <a href="compare.html" tabIndex={-1}>
                          <svg
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
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Wishlist"
                      >
                        <a
                          href="wishlist.html"
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
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <a href="product.html" tabIndex={-1}>
                      <h6
                        className="name h-100"
                        style={{ minHeight: 0, maxHeight: "none", height: 44 }}
                      >
                        CPU Cooler 2 Heat Pipes 12mm 4 Pin PWM RGB for Intel.
                      </h6>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
                    <div className="product-rating mt-sm-2 mt-1">
                      <ul className="rating">
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star fill"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </li>
                      </ul>
                      <h6 className="theme-color">In Stock</h6>
                    </div>
                    <div className="add-to-cart-box">
                      <button
                        className="btn btn-add-cart addcart-button"
                        tabIndex={-1}
                      >
                        Add
                        <span className="add-icon">
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
                            <i className="fa fa-minus" aria-hidden="true" />
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
                            <i className="fa fa-plus" aria-hidden="true" />
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
  <div className="section-t-space">
    <div
      className="banner-contain bg-size blur-up lazyloaded"
      style={{
        backgroundImage: 'url("../assets/images/electronic/blog-2.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        display: "block"
      }}
    >
      <img
        src="../assets/images/electronic/blog-2.jpg"
        className="bg-img blur-up lazyload"
        alt=""
        style={{ display: "none" }}
      />
      <div className="banner-details p-center p-4 text-white text-center">
        <div>
          <h3 className="lh-base fw-bold offer-text">
            Get $3 Cashback! Min Purchase of $30
          </h3>
          <h6 className="coupon-code">Use Code : MOBILE2023</h6>
        </div>
      </div>
    </div>
  </div>
  <div className="section-t-space section-b-space">
    <div className="row g-md-4 g-3">
      <div className="col-xxl-8 col-xl-12 col-md-7">
        <div
          className="banner-contain hover-effect bg-size blur-up lazyloaded"
          style={{
            backgroundImage: 'url("../assets/images/electronic/main-bg2.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            display: "block"
          }}
        >
          <img
            src="../assets/images/electronic/main-bg2.webp"
            className="bg-img blur-up lazyload"
            alt=""
            style={{ display: "none" }}
          />
          <div className="banner-details p-center-left p-4">
            <div>
              <h2 className="text-kaushan fw-normal theme-color">
                Sale 20% off all store
              </h2>
              <h3 className="mt-2 mb-3">The New Branded</h3>
              <p className="text-content banner-text">
                Bluetooth Ticon Air Bit
              </p>
              <button
                onclick="location.href = 'shop.html';"
                className="btn btn-animation btn-sm mend-auto"
                fdprocessedid="j9evv7"
              >
                Shop Now <i className="fa-solid fa-arrow-right icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="title d-block">
    <div>
      <h2>Our best Seller</h2>
      <span className="title-leaf">
        <svg className="icon-width">
          <use xlinkHref="../assets/svg/leaf.svg#leaf" />
        </svg>
      </span>
      <p>A virtual assistant collects the products from your list</p>
    </div>
  </div>
  <div
    className="best-selling-slider product-wrapper wow fadeInUp slick-initialized slick-slider"
    style={{ visibility: "visible", animationName: "fadeInUp" }}
  >
    <div className="slick-list draggable">
      <div
        className="slick-track"
        style={{
          opacity: 1,
          width: 3553,
          transform: "translate3d(-969px, 0px, 0px)"
        }}
      >
        <div
          className="slick-slide slick-cloned"
          data-slick-index={-3}
          id=""
          aria-hidden="true"
          tabIndex={-1}
          style={{ width: 323 }}
        >
          <ul className="product-list">
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-5.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        Mini Portable PD 22.5W Fast Charging Powerbank.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-6.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        CPU Cooler 2 Heat Pipes 12mm 4 Pin PWM RGB for Intel.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-7.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        Playstation 4 2TB Slim Gaming Console.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-8.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        Mini Portable Mobile Phone Powerbank for iphone.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="slick-slide slick-cloned"
          data-slick-index={-2}
          id=""
          aria-hidden="true"
          tabIndex={-1}
          style={{ width: 323 }}
        >
          <ul className="product-list">
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-1.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-2.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        Tracker with IP67 Waterproof Pedometer Smart watch.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-3.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">Cancelling Headphones Wireless.</h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-4.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        Professional Camera 4K Digital Video Camera.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="slick-slide slick-cloned"
          data-slick-index={-1}
          id=""
          aria-hidden="true"
          tabIndex={-1}
          style={{ width: 323 }}
        >
          <ul className="product-list">
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-5.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        Mini Portable PD 22.5W Fast Charging Powerbank.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-6.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        CPU Cooler 2 Heat Pipes 12mm 4 Pin PWM RGB for Intel.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-7.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        Playstation 4 2TB Slim Gaming Console.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-8.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        Mini Portable Mobile Phone Powerbank for iphone.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="slick-slide slick-current slick-active"
          data-slick-index={0}
          aria-hidden="false"
          tabIndex={0}
          style={{ width: 323 }}
        >
          <ul className="product-list">
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={0}>
                  <img
                    src="../assets/images/electronic/product-1.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={0}>
                      <h6 className="name">
                        Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={0}>
                  <img
                    src="../assets/images/electronic/product-2.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={0}>
                      <h6 className="name">
                        Tracker with IP67 Waterproof Pedometer Smart watch.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={0}>
                  <img
                    src="../assets/images/electronic/product-3.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={0}>
                      <h6 className="name">Cancelling Headphones Wireless.</h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={0}>
                  <img
                    src="../assets/images/electronic/product-4.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={0}>
                      <h6 className="name">
                        Professional Camera 4K Digital Video Camera.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="slick-slide slick-active"
          data-slick-index={1}
          aria-hidden="false"
          tabIndex={0}
          style={{ width: 323 }}
        >
          <ul className="product-list">
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={0}>
                  <img
                    src="../assets/images/electronic/product-5.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={0}>
                      <h6 className="name">
                        Mini Portable PD 22.5W Fast Charging Powerbank.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={0}>
                  <img
                    src="../assets/images/electronic/product-6.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={0}>
                      <h6 className="name">
                        CPU Cooler 2 Heat Pipes 12mm 4 Pin PWM RGB for Intel.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={0}>
                  <img
                    src="../assets/images/electronic/product-7.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={0}>
                      <h6 className="name">
                        Playstation 4 2TB Slim Gaming Console.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={0}>
                  <img
                    src="../assets/images/electronic/product-8.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={0}>
                      <h6 className="name">
                        Mini Portable Mobile Phone Powerbank for iphone.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="slick-slide slick-active"
          data-slick-index={2}
          aria-hidden="false"
          tabIndex={0}
          style={{ width: 323 }}
        >
          <ul className="product-list">
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={0}>
                  <img
                    src="../assets/images/electronic/product-1.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={0}>
                      <h6 className="name">
                        Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={0}>
                  <img
                    src="../assets/images/electronic/product-2.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={0}>
                      <h6 className="name">
                        Tracker with IP67 Waterproof Pedometer Smart watch.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={0}>
                  <img
                    src="../assets/images/electronic/product-3.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={0}>
                      <h6 className="name">Cancelling Headphones Wireless.</h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={0}>
                  <img
                    src="../assets/images/electronic/product-4.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={0}>
                      <h6 className="name">
                        Professional Camera 4K Digital Video Camera.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="slick-slide"
          data-slick-index={3}
          aria-hidden="true"
          tabIndex={-1}
          style={{ width: 323 }}
        >
          <ul className="product-list">
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-5.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        Mini Portable PD 22.5W Fast Charging Powerbank.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-6.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        CPU Cooler 2 Heat Pipes 12mm 4 Pin PWM RGB for Intel.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-7.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        Playstation 4 2TB Slim Gaming Console.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-8.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        Mini Portable Mobile Phone Powerbank for iphone.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="slick-slide slick-cloned"
          data-slick-index={4}
          id=""
          aria-hidden="true"
          tabIndex={-1}
          style={{ width: 323 }}
        >
          <ul className="product-list">
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-1.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-2.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        Tracker with IP67 Waterproof Pedometer Smart watch.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-3.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">Cancelling Headphones Wireless.</h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-4.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        Professional Camera 4K Digital Video Camera.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="slick-slide slick-cloned"
          data-slick-index={5}
          id=""
          aria-hidden="true"
          tabIndex={-1}
          style={{ width: 323 }}
        >
          <ul className="product-list">
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-5.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        Mini Portable PD 22.5W Fast Charging Powerbank.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-6.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        CPU Cooler 2 Heat Pipes 12mm 4 Pin PWM RGB for Intel.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-7.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        Playstation 4 2TB Slim Gaming Console.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-8.jpg"
                    className="blur-up lazyloaded"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        Mini Portable Mobile Phone Powerbank for iphone.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="slick-slide slick-cloned"
          data-slick-index={6}
          id=""
          aria-hidden="true"
          tabIndex={-1}
          style={{ width: 323 }}
        >
          <ul className="product-list">
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-1.jpg"
                    className="blur-up lazyload"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-2.jpg"
                    className="blur-up lazyload"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        Tracker with IP67 Waterproof Pedometer Smart watch.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-3.jpg"
                    className="blur-up lazyload"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">Cancelling Headphones Wireless.</h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-4.jpg"
                    className="blur-up lazyload"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        Professional Camera 4K Digital Video Camera.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="slick-slide slick-cloned"
          data-slick-index={7}
          id=""
          aria-hidden="true"
          tabIndex={-1}
          style={{ width: 323 }}
        >
          <ul className="product-list">
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-5.jpg"
                    className="blur-up lazyload"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        Mini Portable PD 22.5W Fast Charging Powerbank.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-6.jpg"
                    className="blur-up lazyload"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        CPU Cooler 2 Heat Pipes 12mm 4 Pin PWM RGB for Intel.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-7.jpg"
                    className="blur-up lazyload"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        Playstation 4 2TB Slim Gaming Console.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="offer-product">
                <a href="product.html" className="offer-image" tabIndex={-1}>
                  <img
                    src="../assets/images/electronic/product-8.jpg"
                    className="blur-up lazyload"
                    alt=""
                  />
                </a>
                <div className="offer-detail">
                  <div>
                    <a href="product.html" className="text-title" tabIndex={-1}>
                      <h6 className="name">
                        Mini Portable Mobile Phone Powerbank for iphone.
                      </h6>
                    </a>
                    <h6 className="price theme-color">$ 10.00</h6>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="title section-t-space">
    <h2>Featured Blog</h2>
    <span className="title-leaf">
      <svg className="icon-width">
        <use xlinkHref="../assets/svg/leaf.svg#leaf" />
      </svg>
    </span>
    <p>A virtual assistant collects the products from your list</p>
  </div>
  <div className="slider-3-blog ratio_65 no-arrow product-wrapper slick-initialized slick-slider">
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
          width: 4840,
          transform: "translate3d(-968px, 0px, 0px)"
        }}
      >
        <div
          className="slick-slide slick-cloned"
          style={{ width: 484 }}
          data-slick-index={-2}
          id=""
          aria-hidden="true"
          tabIndex={-1}
        >
          <div className="blog-box">
            <div className="blog-box-image">
              <a
                href="blog.html"
                className="blog-image bg-size blur-up lazyloaded"
                tabIndex={-1}
                style={{
                  backgroundImage:
                    'url("../assets/images/electronic/blog-3.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block"
                }}
              >
                <img
                  src="../assets/images/electronic/blog-3.jpg"
                  className="bg-img blur-up lazyload"
                  alt=""
                  style={{ display: "none" }}
                />
              </a>
            </div>
            <a href="blog.html" className="blog-detail" tabIndex={-1}>
              <h6>10 April, 2022</h6>
              <h5>Nuts to Eat for Better Health</h5>
            </a>
          </div>
        </div>
        <div
          className="slick-slide slick-cloned"
          style={{ width: 484 }}
          data-slick-index={-1}
          id=""
          aria-hidden="true"
          tabIndex={-1}
        >
          <div className="blog-box">
            <div className="blog-box-image">
              <a
                href="blog.html"
                className="blog-image bg-size blur-up lazyloaded"
                tabIndex={-1}
                style={{
                  backgroundImage:
                    'url("../assets/images/electronic/blog-1.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block"
                }}
              >
                <img
                  src="../assets/images/electronic/blog-1.jpg"
                  className="bg-img blur-up lazyload"
                  alt=""
                  style={{ display: "none" }}
                />
              </a>
            </div>
            <a href="blog.html" className="blog-detail" tabIndex={-1}>
              <h6>20 March, 2022</h6>
              <h5>The Modern Art Clay Ceramics</h5>
            </a>
          </div>
        </div>
        <div
          className="slick-slide slick-current slick-active"
          style={{ width: 484 }}
          data-slick-index={0}
          aria-hidden="false"
          tabIndex={0}
        >
          <div className="blog-box">
            <div className="blog-box-image">
              <a
                href="blog.html"
                className="blog-image bg-size blur-up lazyloaded"
                tabIndex={0}
                style={{
                  backgroundImage:
                    'url("../assets/images/electronic/blog-1.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block"
                }}
              >
                <img
                  src="../assets/images/electronic/blog-1.jpg"
                  className="bg-img blur-up lazyload"
                  alt=""
                  style={{ display: "none" }}
                />
              </a>
            </div>
            <a href="blog.html" className="blog-detail" tabIndex={0}>
              <h6>20 March, 2022</h6>
              <h5>The Modern Art Clay Ceramics.</h5>
            </a>
          </div>
        </div>
        <div
          className="slick-slide slick-active"
          style={{ width: 484 }}
          data-slick-index={1}
          aria-hidden="false"
          tabIndex={0}
        >
          <div className="blog-box">
            <div className="blog-box-image">
              <a
                href="blog.html"
                className="blog-image bg-size blur-up lazyloaded"
                tabIndex={0}
                style={{
                  backgroundImage:
                    'url("../assets/images/electronic/blog-2.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block"
                }}
              >
                <img
                  src="../assets/images/electronic/blog-2.jpg"
                  className="bg-img blur-up lazyload"
                  alt=""
                  style={{ display: "none" }}
                />
              </a>
            </div>
            <a href="blog.html" className="blog-detail" tabIndex={0}>
              <h6>10 April, 2022</h6>
              <h5>How clothes are linked to climate</h5>
            </a>
          </div>
        </div>
        <div
          className="slick-slide"
          style={{ width: 484 }}
          data-slick-index={2}
          aria-hidden="true"
          tabIndex={-1}
        >
          <div className="blog-box">
            <div className="blog-box-image">
              <a
                href="blog.html"
                className="blog-image bg-size blur-up lazyloaded"
                tabIndex={-1}
                style={{
                  backgroundImage:
                    'url("../assets/images/electronic/blog-3.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block"
                }}
              >
                <img
                  src="../assets/images/electronic/blog-3.jpg"
                  className="bg-img blur-up lazyload"
                  alt=""
                  style={{ display: "none" }}
                />
              </a>
            </div>
            <a href="blog.html" className="blog-detail" tabIndex={-1}>
              <h6>10 April, 2022</h6>
              <h5>Nuts to Eat for Better Health</h5>
            </a>
          </div>
        </div>
        <div
          className="slick-slide"
          style={{ width: 484 }}
          data-slick-index={3}
          aria-hidden="true"
          tabIndex={-1}
        >
          <div className="blog-box">
            <div className="blog-box-image">
              <a
                href="blog.html"
                className="blog-image bg-size blur-up lazyloaded"
                tabIndex={-1}
                style={{
                  backgroundImage:
                    'url("../assets/images/electronic/blog-1.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block"
                }}
              >
                <img
                  src="../assets/images/electronic/blog-1.jpg"
                  className="bg-img blur-up lazyload"
                  alt=""
                  style={{ display: "none" }}
                />
              </a>
            </div>
            <a href="blog.html" className="blog-detail" tabIndex={-1}>
              <h6>20 March, 2022</h6>
              <h5>The Modern Art Clay Ceramics</h5>
            </a>
          </div>
        </div>
        <div
          className="slick-slide slick-cloned"
          style={{ width: 484 }}
          data-slick-index={4}
          id=""
          aria-hidden="true"
          tabIndex={-1}
        >
          <div className="blog-box">
            <div className="blog-box-image">
              <a
                href="blog.html"
                className="blog-image bg-size blur-up lazyload"
                tabIndex={-1}
                style={{
                  backgroundImage:
                    'url("../assets/images/electronic/blog-1.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block"
                }}
              >
                <img
                  src="../assets/images/electronic/blog-1.jpg"
                  className="bg-img blur-up lazyload"
                  alt=""
                  style={{ display: "none" }}
                />
              </a>
            </div>
            <a href="blog.html" className="blog-detail" tabIndex={-1}>
              <h6>20 March, 2022</h6>
              <h5>The Modern Art Clay Ceramics.</h5>
            </a>
          </div>
        </div>
        <div
          className="slick-slide slick-cloned"
          style={{ width: 484 }}
          data-slick-index={5}
          id=""
          aria-hidden="true"
          tabIndex={-1}
        >
          <div className="blog-box">
            <div className="blog-box-image">
              <a
                href="blog.html"
                className="blog-image bg-size blur-up lazyload"
                tabIndex={-1}
                style={{
                  backgroundImage:
                    'url("../assets/images/electronic/blog-2.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block"
                }}
              >
                <img
                  src="../assets/images/electronic/blog-2.jpg"
                  className="bg-img blur-up lazyload"
                  alt=""
                  style={{ display: "none" }}
                />
              </a>
            </div>
            <a href="blog.html" className="blog-detail" tabIndex={-1}>
              <h6>10 April, 2022</h6>
              <h5>How clothes are linked to climate</h5>
            </a>
          </div>
        </div>
        <div
          className="slick-slide slick-cloned"
          style={{ width: 484 }}
          data-slick-index={6}
          id=""
          aria-hidden="true"
          tabIndex={-1}
        >
          <div className="blog-box">
            <div className="blog-box-image">
              <a
                href="blog.html"
                className="blog-image bg-size blur-up lazyload"
                tabIndex={-1}
                style={{
                  backgroundImage:
                    'url("../assets/images/electronic/blog-3.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block"
                }}
              >
                <img
                  src="../assets/images/electronic/blog-3.jpg"
                  className="bg-img blur-up lazyload"
                  alt=""
                  style={{ display: "none" }}
                />
              </a>
            </div>
            <a href="blog.html" className="blog-detail" tabIndex={-1}>
              <h6>10 April, 2022</h6>
              <h5>Nuts to Eat for Better Health</h5>
            </a>
          </div>
        </div>
        <div
          className="slick-slide slick-cloned"
          style={{ width: 484 }}
          data-slick-index={7}
          id=""
          aria-hidden="true"
          tabIndex={-1}
        >
          <div className="blog-box">
            <div className="blog-box-image">
              <a
                href="blog.html"
                className="blog-image bg-size blur-up lazyload"
                tabIndex={-1}
                style={{
                  backgroundImage:
                    'url("../assets/images/electronic/blog-1.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block"
                }}
              >
                <img
                  src="../assets/images/electronic/blog-1.jpg"
                  className="bg-img blur-up lazyload"
                  alt=""
                  style={{ display: "none" }}
                />
              </a>
            </div>
            <a href="blog.html" className="blog-detail" tabIndex={-1}>
              <h6>20 March, 2022</h6>
              <h5>The Modern Art Clay Ceramics</h5>
            </a>
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

          </div>
        </div>
      </section>

      {/* Product Section End */}
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
                        <button className="sub-btn  btn-animation">
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
      <Footer/>
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
                      src="../assets/images/electronic/product-details-main-1.jpg"
                      className="img-fluid  lazyload"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-sidebar-modal">
                    <h4 className="title-name">
                      Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB.
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
                        Candy canes sugar plum tart cotton candy chupa chups sugar
                        plum chocolate I love. Caramels marshmallow icing dessert
                        candy canes I love soufflé I love toffee. Marshmallow pie
                        sweet sweet roll sesame snaps tiramisu jelly bear claw.
                        Bonbon muffin I love carrot cake sugar plum dessert bonbon.
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
                      <select className="form-select select-form-size" defaultValue="">
                        <option value="" disabled>Select Size</option>
                        <option value="0">1 KG</option>
                        <option value="1.2">1/2 KG</option>
                        <option value="1.5">1/5 KG</option>
                        <option value="red">Red Roses</option>
                        <option value="pink">With Pink Roses</option>
                      </select>
                    </div>

                    <div className="modal-button">
                      <button
                        onClick={() => { window.location.href = '/cart'; }}
                        className="btn btn-md add-cart-button icon"
                      >
                        Add To Cart
                      </button>
                      <button
                        onClick={() => { window.location.href = '/product-left'; }}
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
                          src="../assets/images/electronic/product-01.png"
                          className=" lazyload"
                          alt=""
                        />
                      </Link>
                      <Link to="/shop" className="deal-contain">
                        <h5>Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB.</h5>
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
                          src="../assets/images/electronic/product-02.png"
                          className=" lazyload"
                          alt=""
                        />
                      </Link>
                      <Link to="/shop" className="deal-contain">
                        <h5>Tracker with IP67 Waterproof Pedometer Smart watch.</h5>
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
                          src="../assets/images/electronic/product-03.png"
                          className=" lazyload"
                          alt=""
                        />
                      </Link>
                      <Link to="/shop" className="deal-contain">
                        <h5>Cancelling Headphones Wireless. </h5>
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
                          src="../assets/images/electronic/product-04.png"
                          className=" lazyload"
                          alt=""
                        />
                      </Link>
                      <Link to="/shop" className="deal-contain">
                        <h5>Professional Camera 4K Digital Video Camera. </h5>
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
    </>

  )
}

export default IndexElectronics
