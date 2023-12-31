import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearch,
  faExchangeAlt,
  faHeart,
  faShoppingBag,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import Star from "./Star";

function IndexFlowerBusiness() {
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
      <header className="header-2">
        <div className="header-notification theme-bg-color overflow-hidden py-2">
          <div className="notification-slider">
            <div>
              <div className="timer-notification text-center">
                <h6>
                  <strong className="me-1">
                    Welcome to Techgropse eCommerce!
                  </strong>
                  Wrap new offers/gift every signle day on Weekends.
                  <strong className="ms-1">New Coupon Code: Fast024</strong>
                </h6>
              </div>
            </div>
            <div>
              <div className="timer-notification text-center">
                <h6>
                  Something you love is now on sale!
                  <Link to="/shop" className="text-white">
                    Buy Now !
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <button className="btn close-notification">
            <span>Close</span> <i className="fas fa-times" />
          </button>
        </div>
        <div className="top-nav top-header sticky-header sticky-header-3">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-12">
                <div className="navbar-top">
                  <button
                    className="navbar-toggler d-xl-none d-block p-0 me-3"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#primaryMenu"
                  >
                    <span className="navbar-toggler-icon">
                      <i className="iconly-Category icli theme-color" />
                    </span>
                  </button>
                  <Link
                    to="/index-flower-business"
                    className="web-logo nav-logo"
                  >
                    <img
                      src="../assets/images/logo/logo.png"
                      className="img-fluid  lazyload"
                      alt=""
                    />
                  </Link>
                  <div className="search-full">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i data-feather="search" className="font-light" />
                      </span>
                      <input
                        type="text"
                        className="form-control search-type"
                        placeholder="Search here.."
                      />
                      <span className="input-group-text close-search">
                        <i data-feather="x" className="font-light" />
                      </span>
                    </div>
                  </div>
                  <div className="middle-box">
                    <div className="center-box">
                      <div className="searchbar-box order-xl-1 d-none d-xl-block">
                        <input
                          type="search"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="search for product, delivered to your door..."
                        />
                        <button className="btn search-button">
                          <i className="iconly-Search icli" />
                        </button>
                      </div>
                      <div className="location-box-2">
                        <button
                          className="btn location-button"
                          data-bs-toggle="modal"
                          data-bs-target="#locationModal"
                        >
                          <i className="iconly-Location icli" />
                          <span className="locat-name">Your Location</span>
                          <i className="fa-solid fa-angle-down down-arrow" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="rightside-menu">
                    <div className="dropdown-dollar">
                      <div className="dropdown">
                        <button
                          className="dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span>Language</span>{" "}
                          <i className="fa-solid fa-angle-down" />
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <Link id="eng" className="dropdown-item" to="#">
                              English
                            </Link>
                          </li>
                          <li>
                            <Link id="hin" className="dropdown-item" to="#">
                              Hindi
                            </Link>
                          </li>
                          <li>
                            <Link id="guj" className="dropdown-item" to="#">
                              Gujarati
                            </Link>
                          </li>
                          <li>
                            <Link id="arb" className="dropdown-item" to="#">
                              Arbic
                            </Link>
                          </li>
                          <li>
                            <Link id="rus" className="dropdown-item" to="#">
                              Rusia
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              Chinese
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="dropdown">
                        <button
                          className="dropdown-toggle m-0"
                          type="button"
                          id="dropdownMenuButton2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span>Dollar</span>{" "}
                          <i className="fa-solid fa-angle-down" />
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <Link id="usd" className="dropdown-item" to="#">
                              USD
                            </Link>
                          </li>
                          <li>
                            <Link id="inr" className="dropdown-item" to="#">
                              INR
                            </Link>
                          </li>
                          <li>
                            <Link id="eur" className="dropdown-item" to="#">
                              EUR
                            </Link>
                          </li>
                          <li>
                            <Link id="aud" className="dropdown-item" to="#">
                              AUD
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="option-list">
                      <ul>
                        <li>
                          <Link
                            to="#"
                            className="header-icon user-icon search-icon"
                          >
                            <i className="iconly-Profile icli" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="header-icon search-box search-icon"
                          >
                            <i className="iconly-Search icli" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/compare" className="header-icon">
                            <small className="badge-number">2</small>
                            <i className="iconly-Swap icli" />
                          </Link>
                        </li>
                        <li className="onhover-dropdown">
                          <Link to="#" className="header-icon swap-icon">
                            <i className="iconly-Heart icli" />
                          </Link>
                        </li>
                        <li className="onhover-dropdown">
                          <Link to="/cart" className="header-icon bag-icon">
                            <small className="badge-number">2</small>
                            <i className="iconly-Bag-2 icli" />
                          </Link>
                          <div className="onhover-div">
                            <ul className="cart-list">
                              <li>
                                <div className="drop-cart">
                                  <Link to="/product" className="drop-image">
                                    <img
                                      src="../assets/images/flower-business/productcategory1.png"
                                      className=" lazyload"
                                      alt=""
                                    />
                                  </Link>
                                  <div className="drop-contain">
                                    <Link to="/product">
                                      <h5>Lity Majesty Palm</h5>
                                    </Link>
                                    <h6>
                                      <span>1 x</span> $80.58
                                    </h6>
                                    <button className="close-button">
                                      <i className="fa-solid fa-xmark" />
                                    </button>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="drop-cart">
                                  <Link to="/product" className="drop-image">
                                    <img
                                      src="../assets/images/flower-business/productcategory2.png"
                                      className=" lazyload"
                                      alt=""
                                    />
                                  </Link>
                                  <div className="drop-contain">
                                    <Link to="/product">
                                      <h5>Scarlet Sage</h5>
                                    </Link>
                                    <h6>
                                      <span>1 x</span> $25.68
                                    </h6>
                                    <button className="close-button">
                                      <i className="fa-solid fa-xmark" />
                                    </button>
                                  </div>
                                </div>
                              </li>
                            </ul>
                            <div className="price-box">
                              <h5>Price :</h5>
                              <h4 className="theme-color fw-bold">$106.58</h4>
                            </div>
                            <div className="button-group">
                              <Link
                                to="/cart"
                                className="btn btn-sm cart-button"
                              >
                                View Cart
                              </Link>
                              <Link
                                to="/checkout"
                                className="btn btn-sm cart-button theme-bg-color text-white"
                              >
                                Checkout
                              </Link>
                            </div>
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
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="main-nav">
                <div className="header-nav-left">
                  <button className="dropdown-category dropdown-category-2">
                    <i className="iconly-Category icli" />
                    <span>All Categories</span>
                  </button>
                  <div className="category-dropdown">
                    <div className="category-title">
                      <h5>Categories</h5>
                      <button
                        type="button"
                        className="btn p-0 close-button text-content"
                      >
                        <i className="fa-solid fa-xmark" />
                      </button>
                    </div>
                    <ul className="category-list">
                      <li className="onhover-category-list">
                        <Link to="#" className="category-name">
                          <img
                            src="../assets/images/flower-business/Annual-flowers.png"
                            alt=""
                          />
                          <h6>Annual flowers</h6>
                          <i className="fa-solid fa-angle-right" />
                        </Link>
                        <div className="onhover-category-box">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Lorem ipsum</h5>
                            </div>
                            <ul>
                              <li>
                                <Link to="#">Sub Category 1</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 2</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 3</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 4</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 5</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 6</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 7</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 8</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="list-2">
                            <div className="category-title-box">
                              <h5>Lorem ipsum 1</h5>
                            </div>
                            <ul>
                              <li>
                                <Link to="#">Sub Category 1</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 2</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 3</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 4</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 5</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 6</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 7</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 8</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="onhover-category-list">
                        <Link to="#" className="category-name">
                          <img
                            src="../assets/images/flower-business/Perennial-flowers.png"
                            alt=""
                          />
                          <h6>Perennial flowers</h6>
                          <i className="fa-solid fa-angle-right" />
                        </Link>
                        <div className="onhover-category-box">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Lorem ipsum</h5>
                            </div>
                            <ul>
                              <li>
                                <Link to="#">Sub Category 1</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 2</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 3</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 4</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 5</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 6</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 7</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 8</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="list-2">
                            <div className="category-title-box">
                              <h5>Lorem ipsum 1</h5>
                            </div>
                            <ul>
                              <li>
                                <Link to="#">Sub Category 1</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 2</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 3</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 4</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 5</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 6</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 7</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 8</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="onhover-category-list">
                        <Link to="#" className="category-name">
                          <img
                            src="../assets/images/flower-business/Biennial-flowers.png"
                            alt=""
                          />
                          <h6>Biennial flowers</h6>
                          <i className="fa-solid fa-angle-right" />
                        </Link>
                        <div className="onhover-category-box">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Lorem ipsum</h5>
                            </div>
                            <ul>
                              <li>
                                <Link to="#">Sub Category 1</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 2</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 3</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 4</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 5</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 6</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 7</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 8</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="list-2">
                            <div className="category-title-box">
                              <h5>Lorem ipsum 1</h5>
                            </div>
                            <ul>
                              <li>
                                <Link to="#">Sub Category 1</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 2</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 3</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 4</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 5</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 6</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 7</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 8</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="onhover-category-list">
                        <Link to="#" className="category-name">
                          <img
                            src="../assets/images/flower-business/Shrub-flowers.png"
                            alt=""
                          />
                          <h6>Shrub flowers</h6>
                          <i className="fa-solid fa-angle-right" />
                        </Link>
                        <div className="onhover-category-box">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Lorem ipsum</h5>
                            </div>
                            <ul>
                              <li>
                                <Link to="#">Sub Category 1</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 2</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 3</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 4</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 5</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 6</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 7</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 8</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="list-2">
                            <div className="category-title-box">
                              <h5>Lorem ipsum 1</h5>
                            </div>
                            <ul>
                              <li>
                                <Link to="#">Sub Category 1</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 2</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 3</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 4</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 5</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 6</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 7</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 8</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="onhover-category-list">
                        <Link to="#" className="category-name">
                          <img
                            src="../assets/images/flower-business/Tree-flowers.png"
                            alt=""
                          />
                          <h6>Tree flowers</h6>
                          <i className="fa-solid fa-angle-right" />
                        </Link>
                        <div className="onhover-category-box">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Lorem ipsum</h5>
                            </div>
                            <ul>
                              <li>
                                <Link to="#">Sub Category 1</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 2</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 3</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 4</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 5</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 6</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 7</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 8</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="list-2">
                            <div className="category-title-box">
                              <h5>Lorem ipsum 1</h5>
                            </div>
                            <ul>
                              <li>
                                <Link to="#">Sub Category 1</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 2</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 3</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 4</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 5</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 6</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 7</Link>
                              </li>
                              <li>
                                <Link to="#">Sub Category 8</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                  <div
                    className="offcanvas offcanvas-collapse order-xl-2"
                    id="primaryMenu"
                  >
                    <div className="offcanvas-header navbar-shadow">
                      <h5>Menu</h5>
                      <button
                        className="btn-close lead"
                        type="button"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                    <div className="offcanvas-body">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link className="nav-link" to="*">
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/shop">
                            Shop
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/product">
                            Product
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link dropdown-toggle"
                            to="/about-us"
                          >
                            About Us
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link dropdown-toggle"
                            to="/contact-us"
                          >
                            Contact Us
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link dropdown-toggle" to="/blog">
                            Blog
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="right-nav">
                  <div className="nav-number">
                    <img
                      src="../assets/images/icon/music.png"
                      className="img-fluid  lazyload"
                      alt=""
                    />
                    <span>(123) 456 7890</span>
                  </div>
                  <Link
                    to="#"
                    className="btn theme-bg-color ms-3 fire-button"
                    data-bs-toggle="modal"
                    data-bs-target="#deal-box"
                  >
                    <div className="fire">
                      <img
                        src="../assets/images/icon/hot-sale.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <span>Hot Deals</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header End */}
      {/* mobile fix menu start */}
      <div className="mobile-menu d-md-none d-block mobile-cart">
        <ul>
          <li className="active">
            <Link to="/index-flower-business">
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
      {/* home section start */}
      <section className="home-section-2 home-section-small flower-business-bg section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-4">
            <div className="col-xxl-6 col-md-8">
              <div
                className="home-contain h-100 bg-size blur-up lazyloaded"
                style={{
                  backgroundImage:
                    'url("../assets/images/flower-business/banner.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block",
                }}
              >
                <img
                  src="../assets/images/flower-business/banner.jpg"
                  className="img-fluid bg-img blur-up lazyloaded"
                  alt=""
                  style={{ display: "none" }}
                />
                <div className="home-detail home-width p-center-left position-relative">
                  <div>
                    <h6 className="ls-expanded theme-color">Best</h6>
                    <h1 className="fw-bold w-100">Sale up 70% Off</h1>
                    <h3 className="text-content fw-light">
                      {" "}
                      Only over orders on $99.99{" "}
                    </h3>
                    <p className="d-sm-block d-none">
                      Free shipping on all your order. we deliver you enjoy
                    </p>
                    <button
                      onclick="location.href = 'shop.html';"
                      className="btn mt-sm-4 btn-2 theme-bg-color text-white mend-auto btn-2-animation"
                      fdprocessedid="vcnieq"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-4 ratio_medium d-md-block d-none">
              <div className="home-contain home-small h-100">
                <div
                  className="h-100 bg-size blur-up lazyloaded"
                  style={{
                    backgroundImage:
                      'url("../assets/images/flower-business/right_bg.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    display: "block",
                  }}
                >
                  <img
                    src="../assets/images/flower-business/right_bg.png"
                    className="img-fluid bg-img blur-up lazyloaded"
                    alt=""
                    style={{ display: "none" }}
                  />
                </div>
                <div className="home-detail text-center p-top-center w-100 text-white">
                  <div>
                    <h4 className="fw-bold">Sale up 70% Off</h4>
                    <h5 className="text-center">Flowers market</h5>
                    <button
                      className="btn bg-white theme-color mt-3 home-button mx-auto btn-2"
                      onclick="location.href = 'shop.html';"
                      fdprocessedid="s2a2q"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 ratio_65 d-xxl-block d-none">
              <div className="row g-3">
                <div className="col-xxl-12 col-sm-6">
                  <div className="home-contain">
                    <a
                      href="shop.html"
                      className="bg-size blur-up lazyloaded"
                      style={{
                        backgroundImage:
                          'url("../assets/images/veg-3/home/3.png")',
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block",
                      }}
                    >
                      <img
                        src="../assets/images/veg-3/home/3.png"
                        className="img-fluid bg-img blur-up lazyloaded"
                        alt=""
                        style={{ display: "none" }}
                      />
                    </a>
                    <div className="home-detail text-white p-center text-center">
                      <div>
                        <h4 className="text-center">Organic Lifestyle</h4>
                        <h5 className="text-center">Best Weekend Sales</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-12 col-sm-6">
                  <div className="home-contain">
                    <a
                      href="shop.html"
                      className="bg-size blur-up lazyloaded"
                      style={{
                        backgroundImage:
                          'url("../assets/images/veg-3/home/4.png")',
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block",
                      }}
                    >
                      <img
                        src="../assets/images/veg-3/home/4.png"
                        className="img-fluid bg-img blur-up lazyload"
                        alt=""
                        style={{ display: "none" }}
                      />
                    </a>
                    <div className="home-detail text-white w-50 p-center-left home-p-sm">
                      <div>
                        <h4 className="fw-bold">Safe food saves lives</h4>
                        <h5>Discount Offer</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Section End */}
      {/* Category Section Start */}
      <section className="category-section-2">
        <div className="container-fluid-lg">
          <div className="title">
            <h2>Shop By Categories</h2>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="category-slider arrow-slider slick-initialized slick-slider">
                <button
                  className="slick-prev slick-arrow"
                  aria-label="Previous"
                  type="button"
                  style={{}}
                  fdprocessedid="xqcc9e"
                >
                  Previous
                </button>
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: 4255,
                      transform: "translate3d(-1295px, 0px, 0px)",
                    }}
                  >
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 185 }}
                      data-slick-index={-7}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="shop-category-box border-0 wow fadeIn"
                        data-wow-delay="0.05s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.05s",
                          animationName: "fadeIn",
                        }}
                      >
                        <a href="shop.html" className="circle-2" tabIndex={-1}>
                          <img
                            src="../assets/images/flower-business/productcategory2.png"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </a>
                        <div className="category-name">
                          <h6>Perennial flowers</h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 185 }}
                      data-slick-index={-6}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="shop-category-box border-0 wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeIn",
                        }}
                      >
                        <a href="shop.html" className="circle-3" tabIndex={-1}>
                          <img
                            src="../assets/images/flower-business/productcategory3.png"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </a>
                        <div className="category-name">
                          <h6>Biennial flowers</h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 185 }}
                      data-slick-index={-5}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="shop-category-box border-0 wow fadeIn"
                        data-wow-delay="0.15s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.15s",
                          animationName: "fadeIn",
                        }}
                      >
                        <a href="shop.html" className="circle-4" tabIndex={-1}>
                          <img
                            src="../assets/images/flower-business/productcategory4.png"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </a>
                        <div className="category-name">
                          <h6>Shrub flowers</h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 185 }}
                      data-slick-index={-4}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="shop-category-box border-0 wow fadeIn"
                        data-wow-delay="0.2s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.2s",
                          animationName: "fadeIn",
                        }}
                      >
                        <a href="shop.html" className="circle-4" tabIndex={-1}>
                          <img
                            src="../assets/images/flower-business/productcategory5.png"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </a>
                        <div className="category-name">
                          <h6>Tree flowers</h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 185 }}
                      data-slick-index={-3}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="shop-category-box border-0 wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <a href="shop.html" className="circle-1" tabIndex={-1}>
                          <img
                            src="../assets/images/flower-business/productcategory1.png"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </a>
                        <div className="category-name">
                          <h6>Annual flowers</h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 185 }}
                      data-slick-index={-2}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="shop-category-box border-0 wow fadeIn"
                        data-wow-delay="0.05s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.05s",
                          animationName: "fadeIn",
                        }}
                      >
                        <a href="shop.html" className="circle-2" tabIndex={-1}>
                          <img
                            src="../assets/images/flower-business/productcategory2.png"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </a>
                        <div className="category-name">
                          <h6>Perennial flowers</h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 185 }}
                      data-slick-index={-1}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="shop-category-box border-0 wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeIn",
                        }}
                      >
                        <a href="shop.html" className="circle-3" tabIndex={-1}>
                          <img
                            src="../assets/images/flower-business/productcategory3.png"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </a>
                        <div className="category-name">
                          <h6>Biennial flowers</h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-current slick-active"
                      style={{ width: 185 }}
                      data-slick-index={0}
                      aria-hidden="false"
                      tabIndex={0}
                    >
                      <div
                        className="shop-category-box border-0 wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <a href="shop.html" className="circle-1" tabIndex={0}>
                          <img
                            src="../assets/images/flower-business/productcategory1.png"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </a>
                        <div className="category-name">
                          <h6>Annual flowers</h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      style={{ width: 185 }}
                      data-slick-index={1}
                      aria-hidden="false"
                      tabIndex={0}
                    >
                      <div
                        className="shop-category-box border-0 wow fadeIn"
                        data-wow-delay="0.05s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.05s",
                          animationName: "fadeIn",
                        }}
                      >
                        <a href="shop.html" className="circle-2" tabIndex={0}>
                          <img
                            src="../assets/images/flower-business/productcategory2.png"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </a>
                        <div className="category-name">
                          <h6>Perennial flowers</h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      style={{ width: 185 }}
                      data-slick-index={2}
                      aria-hidden="false"
                      tabIndex={0}
                    >
                      <div
                        className="shop-category-box border-0 wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeIn",
                        }}
                      >
                        <a href="shop.html" className="circle-3" tabIndex={0}>
                          <img
                            src="../assets/images/flower-business/productcategory3.png"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </a>
                        <div className="category-name">
                          <h6>Biennial flowers</h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      style={{ width: 185 }}
                      data-slick-index={3}
                      aria-hidden="false"
                      tabIndex={0}
                    >
                      <div
                        className="shop-category-box border-0 wow fadeIn"
                        data-wow-delay="0.15s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.15s",
                          animationName: "fadeIn",
                        }}
                      >
                        <a href="shop.html" className="circle-4" tabIndex={0}>
                          <img
                            src="../assets/images/flower-business/productcategory4.png"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </a>
                        <div className="category-name">
                          <h6>Shrub flowers</h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      style={{ width: 185 }}
                      data-slick-index={4}
                      aria-hidden="false"
                      tabIndex={0}
                    >
                      <div
                        className="shop-category-box border-0 wow fadeIn"
                        data-wow-delay="0.2s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.2s",
                          animationName: "fadeIn",
                        }}
                      >
                        <a href="shop.html" className="circle-4" tabIndex={0}>
                          <img
                            src="../assets/images/flower-business/productcategory5.png"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </a>
                        <div className="category-name">
                          <h6>Tree flowers</h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      style={{ width: 185 }}
                      data-slick-index={5}
                      aria-hidden="false"
                      tabIndex={0}
                    >
                      <div
                        className="shop-category-box border-0 wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <a href="shop.html" className="circle-1" tabIndex={0}>
                          <img
                            src="../assets/images/flower-business/productcategory1.png"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </a>
                        <div className="category-name">
                          <h6>Annual flowers</h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      style={{ width: 185 }}
                      data-slick-index={6}
                      aria-hidden="false"
                      tabIndex={0}
                    >
                      <div
                        className="shop-category-box border-0 wow fadeIn"
                        data-wow-delay="0.05s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.05s",
                          animationName: "fadeIn",
                        }}
                      >
                        <a href="shop.html" className="circle-2" tabIndex={0}>
                          <img
                            src="../assets/images/flower-business/productcategory2.png"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </a>
                        <div className="category-name">
                          <h6>Perennial flowers</h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide"
                      style={{ width: 185 }}
                      data-slick-index={7}
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="shop-category-box border-0 wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeIn",
                        }}
                      >
                        <a href="shop.html" className="circle-3" tabIndex={-1}>
                          <img
                            src="../assets/images/flower-business/productcategory3.png"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </a>
                        <div className="category-name">
                          <h6>Biennial flowers</h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 185 }}
                      data-slick-index={8}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="shop-category-box border-0 wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <a href="shop.html" className="circle-1" tabIndex={-1}>
                          <img
                            src="../assets/images/flower-business/productcategory1.png"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </a>
                        <div className="category-name">
                          <h6>Annual flowers</h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 185 }}
                      data-slick-index={9}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="shop-category-box border-0 wow fadeIn"
                        data-wow-delay="0.05s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.05s",
                          animationName: "fadeIn",
                        }}
                      >
                        <a href="shop.html" className="circle-2" tabIndex={-1}>
                          <img
                            src="../assets/images/flower-business/productcategory2.png"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </a>
                        <div className="category-name">
                          <h6>Perennial flowers</h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 185 }}
                      data-slick-index={10}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="shop-category-box border-0 wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeIn",
                        }}
                      >
                        <a href="shop.html" className="circle-3" tabIndex={-1}>
                          <img
                            src="../assets/images/flower-business/productcategory3.png"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </a>
                        <div className="category-name">
                          <h6>Biennial flowers</h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 185 }}
                      data-slick-index={11}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="shop-category-box border-0 wow fadeIn"
                        data-wow-delay="0.15s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.15s",
                          animationName: "fadeIn",
                        }}
                      >
                        <a href="shop.html" className="circle-4" tabIndex={-1}>
                          <img
                            src="../assets/images/flower-business/productcategory4.png"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </a>
                        <div className="category-name">
                          <h6>Shrub flowers</h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 185 }}
                      data-slick-index={12}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="shop-category-box border-0 wow fadeIn"
                        data-wow-delay="0.2s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.2s",
                          animationName: "fadeIn",
                        }}
                      >
                        <a href="shop.html" className="circle-4" tabIndex={-1}>
                          <img
                            src="../assets/images/flower-business/productcategory5.png"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </a>
                        <div className="category-name">
                          <h6>Tree flowers</h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 185 }}
                      data-slick-index={13}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="shop-category-box border-0 wow fadeIn"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        <a href="shop.html" className="circle-1" tabIndex={-1}>
                          <img
                            src="../assets/images/flower-business/productcategory1.png"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </a>
                        <div className="category-name">
                          <h6>Annual flowers</h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 185 }}
                      data-slick-index={14}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="shop-category-box border-0 wow fadeIn"
                        data-wow-delay="0.05s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.05s",
                          animationName: "fadeIn",
                        }}
                      >
                        <a href="shop.html" className="circle-2" tabIndex={-1}>
                          <img
                            src="../assets/images/flower-business/productcategory2.png"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </a>
                        <div className="category-name">
                          <h6>Perennial flowers</h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 185 }}
                      data-slick-index={15}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div
                        className="shop-category-box border-0 wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeIn",
                        }}
                      >
                        <a href="shop.html" className="circle-3" tabIndex={-1}>
                          <img
                            src="../assets/images/flower-business/productcategory3.png"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </a>
                        <div className="category-name">
                          <h6>Biennial flowers</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="slick-next slick-arrow"
                  aria-label="Next"
                  type="button"
                  style={{}}
                  fdprocessedid="xcq21"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Section End */}
      {/* Deal Section Start */}
      <section className="deal-section">
        <div className="container-fluid-lg">
          <div className="title">
            <h2>Deal Of The Day</h2>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="three-slider-1 arrow-slider slick-initialized slick-slider">
                <button
                  className="slick-prev slick-arrow"
                  aria-label="Previous"
                  type="button"
                  style={{}}
                  fdprocessedid="w1zs2r"
                >
                  Previous
                </button>
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: 4741,
                      transform: "translate3d(-1293px, 0px, 0px)",
                    }}
                  >
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-3}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 431 }}
                    >
                      <div
                        className="deal-box wow fadeInUp"
                        data-wow-delay="0.05s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.05s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <a
                          href="shop.html"
                          className="category-image order-sm-2"
                          tabIndex={-1}
                        >
                          <img
                            src="../assets/images/flower-business/productcategory2.png"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </a>
                        <div className="deal-detail order-sm-1">
                          <button
                            className="buy-box btn theme-bg-color text-white btn-cart"
                            tabIndex={-1}
                          >
                            <i className="iconly-Buy icli m-0" />
                          </button>
                          <div className="hot-deal">
                            <span>Hot Deals</span>
                          </div>
                          <ul className="rating">
                            <Star />
                          </ul>
                          <a
                            href="shop.html"
                            className="text-title"
                            tabIndex={-1}
                          >
                            <h5>Scarlet Sage</h5>
                          </a>
                          <h5 className="price">
                            $70.21 <span>$65.00</span>
                          </h5>
                          <div className="progress custom-progressbar">
                            <div
                              className="progress-bar"
                              style={{ width: "50%" }}
                              role="progressbar"
                              aria-valuenow={0}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <h4 className="item">
                            Sold: <span>30 Items</span>
                          </h4>
                          <h4 className="offer">Hurry up offer end in</h4>
                          <div
                            className="timer"
                            id=""
                            data-hours={1}
                            data-minutes={2}
                            data-seconds={3}
                          >
                            <ul>
                              <li>
                                <div className="counter">
                                  <div className="days">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="hours">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="minutes">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="seconds">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-2}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 431 }}
                    >
                      <div
                        className="deal-box wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <a
                          href="shop.html"
                          className="category-image order-sm-2"
                          tabIndex={-1}
                        >
                          <img
                            src="../assets/images/veg-3/cate1/3.png"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </a>
                        <div className="deal-detail order-sm-1">
                          <button
                            className="buy-box btn theme-bg-color text-white btn-cart"
                            tabIndex={-1}
                          >
                            <i className="iconly-Buy icli m-0" />
                          </button>
                          <div className="hot-deal">
                            <span>Hot Deals</span>
                          </div>
                          <ul className="rating">
                            <Star />
                          </ul>
                          <a
                            href="shop.html"
                            className="text-title"
                            tabIndex={-1}
                          >
                            <h5>Onion</h5>
                          </a>
                          <h5 className="price">
                            $70.21 <span>$65.00</span>
                          </h5>
                          <div className="progress custom-progressbar">
                            <div
                              className="progress-bar"
                              style={{ width: "50%" }}
                              role="progressbar"
                              aria-valuenow={0}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <h4 className="item">
                            Sold: <span>30 Items</span>
                          </h4>
                          <h4 className="offer">Hurry up offer end in</h4>
                          <div
                            className="timer"
                            id=""
                            data-hours={1}
                            data-minutes={2}
                            data-seconds={3}
                          >
                            <ul>
                              <li>
                                <div className="counter">
                                  <div className="days">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="hours">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="minutes">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="seconds">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-1}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 431 }}
                    >
                      <div
                        className="deal-box wow fadeInUp"
                        data-wow-delay="0.15s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.15s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="category-image order-sm-2">
                          <img
                            src="../assets/images/veg-3/cate1/1.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="deal-detail order-sm-1">
                          <button
                            className="buy-box btn theme-bg-color text-white btn-cart"
                            tabIndex={-1}
                          >
                            <i className="iconly-Buy icli m-0" />
                          </button>
                          <div className="hot-deal">
                            <span>Hot Deals</span>
                          </div>
                          <ul className="rating">
                            <Star />
                          </ul>
                          <a
                            href="shop.html"
                            className="text-title"
                            tabIndex={-1}
                          >
                            <h5>Bell pepper</h5>
                          </a>
                          <h5 className="price">
                            $70.21 <span>$65.00</span>
                          </h5>
                          <div className="progress custom-progressbar">
                            <div
                              className="progress-bar"
                              style={{ width: "50%" }}
                              role="progressbar"
                              aria-valuenow={0}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <h4 className="item">
                            Sold: <span>30 Items</span>
                          </h4>
                          <h4 className="offer">Hurry up offer end in</h4>
                          <div
                            className="timer"
                            id=""
                            data-hours={1}
                            data-minutes={2}
                            data-seconds={3}
                          >
                            <ul>
                              <li>
                                <div className="counter">
                                  <div className="days">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="hours">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="minutes">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="seconds">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-current slick-active"
                      data-slick-index={0}
                      aria-hidden="false"
                      tabIndex={0}
                      style={{ width: 431 }}
                    >
                      <div
                        className="deal-box wow fadeInUp"
                        style={{
                          visibility: "visible",
                          animationName: "fadeInUp",
                        }}
                      >
                        <a
                          href="shop.html"
                          className="category-image order-sm-2"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/flower-business/productcategory1.png"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </a>
                        <div className="deal-detail order-sm-1">
                          <button
                            className="buy-box btn theme-bg-color text-white btn-cart"
                            tabIndex={0}
                            fdprocessedid="nzfukk"
                          >
                            <i className="iconly-Buy icli m-0" />
                          </button>
                          <div className="hot-deal">
                            <span>Hot Deals</span>
                          </div>
                          <ul className="rating">
                            <Star />
                          </ul>
                          <a
                            href="shop.html"
                            className="text-title"
                            tabIndex={0}
                          >
                            <h5>Lity Majesty Palm</h5>
                          </a>
                          <h5 className="price">
                            $70.21 <span>$65.00</span>
                          </h5>
                          <div className="progress custom-progressbar">
                            <div
                              className="progress-bar"
                              style={{ width: "50%" }}
                              role="progressbar"
                              aria-valuenow={0}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <h4 className="item">
                            Sold: <span>30 Items</span>
                          </h4>
                          <h4 className="offer">Hurry up offer end in</h4>
                          <div
                            className="timer"
                            id="clockdiv-4"
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
                                  <div className="minutes">40</div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="seconds">51</div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      data-slick-index={1}
                      aria-hidden="false"
                      tabIndex={0}
                      style={{ width: 431 }}
                    >
                      <div
                        className="deal-box wow fadeInUp"
                        data-wow-delay="0.05s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.05s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <a
                          href="shop.html"
                          className="category-image order-sm-2"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/flower-business/productcategory2.png"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </a>
                        <div className="deal-detail order-sm-1">
                          <button
                            className="buy-box btn theme-bg-color text-white btn-cart"
                            tabIndex={0}
                            fdprocessedid="shoz8p"
                          >
                            <i className="iconly-Buy icli m-0" />
                          </button>
                          <div className="hot-deal">
                            <span>Hot Deals</span>
                          </div>
                          <ul className="rating">
                            <Star />
                          </ul>
                          <a
                            href="shop.html"
                            className="text-title"
                            tabIndex={0}
                          >
                            <h5>Scarlet Sage</h5>
                          </a>
                          <h5 className="price">
                            $70.21 <span>$65.00</span>
                          </h5>
                          <div className="progress custom-progressbar">
                            <div
                              className="progress-bar"
                              style={{ width: "50%" }}
                              role="progressbar"
                              aria-valuenow={0}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <h4 className="item">
                            Sold: <span>30 Items</span>
                          </h4>
                          <h4 className="offer">Hurry up offer end in</h4>
                          <div
                            className="timer"
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
                                  <div className="minutes">40</div>
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
                    <div
                      className="slick-slide slick-active"
                      data-slick-index={2}
                      aria-hidden="false"
                      tabIndex={0}
                      style={{ width: 431 }}
                    >
                      <div
                        className="deal-box wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <a
                          href="shop.html"
                          className="category-image order-sm-2"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/veg-3/cate1/3.png"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </a>
                        <div className="deal-detail order-sm-1">
                          <button
                            className="buy-box btn theme-bg-color text-white btn-cart"
                            tabIndex={0}
                            fdprocessedid="66kxps"
                          >
                            <i className="iconly-Buy icli m-0" />
                          </button>
                          <div className="hot-deal">
                            <span>Hot Deals</span>
                          </div>
                          <ul className="rating">
                            <Star />
                          </ul>
                          <a
                            href="shop.html"
                            className="text-title"
                            tabIndex={0}
                          >
                            <h5>Onion</h5>
                          </a>
                          <h5 className="price">
                            $70.21 <span>$65.00</span>
                          </h5>
                          <div className="progress custom-progressbar">
                            <div
                              className="progress-bar"
                              style={{ width: "50%" }}
                              role="progressbar"
                              aria-valuenow={0}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <h4 className="item">
                            Sold: <span>30 Items</span>
                          </h4>
                          <h4 className="offer">Hurry up offer end in</h4>
                          <div
                            className="timer"
                            id="clockdiv-2"
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
                                  <div className="minutes">40</div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="seconds">51</div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide"
                      data-slick-index={3}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 431 }}
                    >
                      <div
                        className="deal-box wow fadeInUp"
                        data-wow-delay="0.15s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.15s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="category-image order-sm-2">
                          <img
                            src="../assets/images/veg-3/cate1/1.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="deal-detail order-sm-1">
                          <button
                            className="buy-box btn theme-bg-color text-white btn-cart"
                            tabIndex={-1}
                          >
                            <i className="iconly-Buy icli m-0" />
                          </button>
                          <div className="hot-deal">
                            <span>Hot Deals</span>
                          </div>
                          <ul className="rating">
                            <Star />
                          </ul>
                          <a
                            href="shop.html"
                            className="text-title"
                            tabIndex={-1}
                          >
                            <h5>Bell pepper</h5>
                          </a>
                          <h5 className="price">
                            $70.21 <span>$65.00</span>
                          </h5>
                          <div className="progress custom-progressbar">
                            <div
                              className="progress-bar"
                              style={{ width: "50%" }}
                              role="progressbar"
                              aria-valuenow={0}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <h4 className="item">
                            Sold: <span>30 Items</span>
                          </h4>
                          <h4 className="offer">Hurry up offer end in</h4>
                          <div
                            className="timer"
                            id="clockdiv-3"
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
                                  <div className="minutes">40</div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="seconds">51</div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={4}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 431 }}
                    >
                      <div
                        className="deal-box wow fadeInUp"
                        style={{
                          visibility: "visible",
                          animationName: "fadeInUp",
                        }}
                      >
                        <a
                          href="shop.html"
                          className="category-image order-sm-2"
                          tabIndex={-1}
                        >
                          <img
                            src="../assets/images/flower-business/productcategory1.png"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </a>
                        <div className="deal-detail order-sm-1">
                          <button
                            className="buy-box btn theme-bg-color text-white btn-cart"
                            tabIndex={-1}
                          >
                            <i className="iconly-Buy icli m-0" />
                          </button>
                          <div className="hot-deal">
                            <span>Hot Deals</span>
                          </div>
                          <ul className="rating">
                            <Star />
                          </ul>
                          <a
                            href="shop.html"
                            className="text-title"
                            tabIndex={-1}
                          >
                            <h5>Lity Majesty Palm</h5>
                          </a>
                          <h5 className="price">
                            $70.21 <span>$65.00</span>
                          </h5>
                          <div className="progress custom-progressbar">
                            <div
                              className="progress-bar"
                              style={{ width: "50%" }}
                              role="progressbar"
                              aria-valuenow={0}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <h4 className="item">
                            Sold: <span>30 Items</span>
                          </h4>
                          <h4 className="offer">Hurry up offer end in</h4>
                          <div
                            className="timer"
                            id=""
                            data-hours={1}
                            data-minutes={2}
                            data-seconds={3}
                          >
                            <ul>
                              <li>
                                <div className="counter">
                                  <div className="days">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="hours">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="minutes">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="seconds">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={5}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 431 }}
                    >
                      <div
                        className="deal-box wow fadeInUp"
                        data-wow-delay="0.05s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.05s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <a
                          href="shop.html"
                          className="category-image order-sm-2"
                          tabIndex={-1}
                        >
                          <img
                            src="../assets/images/flower-business/productcategory2.png"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </a>
                        <div className="deal-detail order-sm-1">
                          <button
                            className="buy-box btn theme-bg-color text-white btn-cart"
                            tabIndex={-1}
                          >
                            <i className="iconly-Buy icli m-0" />
                          </button>
                          <div className="hot-deal">
                            <span>Hot Deals</span>
                          </div>
                          <ul className="rating">
                            <Star />
                          </ul>
                          <a
                            href="shop.html"
                            className="text-title"
                            tabIndex={-1}
                          >
                            <h5>Scarlet Sage</h5>
                          </a>
                          <h5 className="price">
                            $70.21 <span>$65.00</span>
                          </h5>
                          <div className="progress custom-progressbar">
                            <div
                              className="progress-bar"
                              style={{ width: "50%" }}
                              role="progressbar"
                              aria-valuenow={0}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <h4 className="item">
                            Sold: <span>30 Items</span>
                          </h4>
                          <h4 className="offer">Hurry up offer end in</h4>
                          <div
                            className="timer"
                            id=""
                            data-hours={1}
                            data-minutes={2}
                            data-seconds={3}
                          >
                            <ul>
                              <li>
                                <div className="counter">
                                  <div className="days">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="hours">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="minutes">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="seconds">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={6}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 431 }}
                    >
                      <div
                        className="deal-box wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <a
                          href="shop.html"
                          className="category-image order-sm-2"
                          tabIndex={-1}
                        >
                          <img
                            src="../assets/images/veg-3/cate1/3.png"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </a>
                        <div className="deal-detail order-sm-1">
                          <button
                            className="buy-box btn theme-bg-color text-white btn-cart"
                            tabIndex={-1}
                          >
                            <i className="iconly-Buy icli m-0" />
                          </button>
                          <div className="hot-deal">
                            <span>Hot Deals</span>
                          </div>
                          <ul className="rating">
                            <Star />
                          </ul>
                          <a
                            href="shop.html"
                            className="text-title"
                            tabIndex={-1}
                          >
                            <h5>Onion</h5>
                          </a>
                          <h5 className="price">
                            $70.21 <span>$65.00</span>
                          </h5>
                          <div className="progress custom-progressbar">
                            <div
                              className="progress-bar"
                              style={{ width: "50%" }}
                              role="progressbar"
                              aria-valuenow={0}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <h4 className="item">
                            Sold: <span>30 Items</span>
                          </h4>
                          <h4 className="offer">Hurry up offer end in</h4>
                          <div
                            className="timer"
                            id=""
                            data-hours={1}
                            data-minutes={2}
                            data-seconds={3}
                          >
                            <ul>
                              <li>
                                <div className="counter">
                                  <div className="days">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="hours">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="minutes">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="seconds">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={7}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 431 }}
                    >
                      <div
                        className="deal-box wow fadeInUp"
                        data-wow-delay="0.15s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.15s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div className="category-image order-sm-2">
                          <img
                            src="../assets/images/veg-3/cate1/1.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="deal-detail order-sm-1">
                          <button
                            className="buy-box btn theme-bg-color text-white btn-cart"
                            tabIndex={-1}
                          >
                            <i className="iconly-Buy icli m-0" />
                          </button>
                          <div className="hot-deal">
                            <span>Hot Deals</span>
                          </div>
                          <ul className="rating">
                            <Star />
                          </ul>
                          <a
                            href="shop.html"
                            className="text-title"
                            tabIndex={-1}
                          >
                            <h5>Bell pepper</h5>
                          </a>
                          <h5 className="price">
                            $70.21 <span>$65.00</span>
                          </h5>
                          <div className="progress custom-progressbar">
                            <div
                              className="progress-bar"
                              style={{ width: "50%" }}
                              role="progressbar"
                              aria-valuenow={0}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <h4 className="item">
                            Sold: <span>30 Items</span>
                          </h4>
                          <h4 className="offer">Hurry up offer end in</h4>
                          <div
                            className="timer"
                            id=""
                            data-hours={1}
                            data-minutes={2}
                            data-seconds={3}
                          >
                            <ul>
                              <li>
                                <div className="counter">
                                  <div className="days">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="hours">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="minutes">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="counter">
                                  <div className="seconds">
                                    <h6 />
                                  </div>
                                </div>
                              </li>
                            </ul>
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
                  style={{}}
                  fdprocessedid="bx80eh"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Deal Section End */}
      {/* Product Sction Start */}
      <section className="product-section">
        <div className="container-fluid-lg">
          <div className="title">
            <h2>Our Products</h2>
          </div>
          <div className="slider-6 img-slider slick-slider-1 arrow-slider slick-initialized slick-slider">
            <div className="slick-list draggable">
              <div
                className="slick-track"
                style={{
                  opacity: 1,
                  width: 4403,
                  transform: "translate3d(-2072px, 0px, 0px)",
                }}
              >
                <div
                  className="slick-slide slick-cloned"
                  style={{ width: 259 }}
                  data-slick-index={-5}
                  id=""
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div
                    className="product-box-4 wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={-1}
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/flower-business/productcategory3.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={-1}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={-1}>
                        <h5 className="name">Lity Majesty Palm</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={-1}
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={-1}
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="product-box-4 wow fadeInUp"
                    data-wow-delay="0.05s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.05s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={-1}
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/flower-business/productcategory4.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={-1}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={-1}>
                        <h5 className="name">Foxglove Flower</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={-1}
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={-1}
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-cloned"
                  style={{ width: 259 }}
                  data-slick-index={-4}
                  id=""
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div
                    className="product-box-4 wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={-1}
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/flower-business/productcategory5.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={-1}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={-1}>
                        <h5 className="name">Sweet Alyssum</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={-1}
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={-1}
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="product-box-4 wow fadeInUp"
                    data-wow-delay="0.05s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.05s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={-1}
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/flower-business/productcategory6.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={-1}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={-1}>
                        <h5 className="name">Wild Roses</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={-1}
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={-1}
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-cloned"
                  style={{ width: 259 }}
                  data-slick-index={-3}
                  id=""
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div
                    className="product-box-4 wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={-1}
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/flower-business/productcategory1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={-1}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={-1}>
                        <h5 className="name">Scarlet Sage</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={-1}
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={-1}
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="product-box-4 wow fadeInUp"
                    data-wow-delay="0.05s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.05s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <div className="discount">
                          <label>-25%</label>
                        </div>
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={-1}
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/flower-business/productcategory2.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={-1}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={-1}>
                        <h5 className="name">Wild Roses</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={-1}
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={-1}
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-cloned"
                  style={{ width: 259 }}
                  data-slick-index={-2}
                  id=""
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div
                    className="product-box-4 wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={-1}
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/flower-business/productcategory3.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={-1}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={-1}>
                        <h5 className="name">Lity Majesty Palm</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={-1}
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={-1}
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="product-box-4 wow fadeInUp"
                    data-wow-delay="0.05s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.05s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={-1}
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/flower-business/productcategory4.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={-1}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={-1}>
                        <h5 className="name">Foxglove Flower</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={-1}
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={-1}
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-cloned"
                  style={{ width: 259 }}
                  data-slick-index={-1}
                  id=""
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div
                    className="product-box-4 wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={-1}
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/flower-business/productcategory5.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={-1}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={-1}>
                        <h5 className="name">Sweet Alyssum</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={-1}
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={-1}
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="product-box-4 wow fadeInUp"
                    data-wow-delay="0.05s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.05s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={-1}
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/flower-business/productcategory6.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={-1}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={-1}>
                        <h5 className="name">Wild Roses</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={-1}
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={-1}
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide"
                  style={{ width: 259 }}
                  data-slick-index={0}
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div
                    className="product-box-4 wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={-1}
                          fdprocessedid="lc6go"
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/flower-business/productcategory1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={-1}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={-1}>
                        <h5 className="name">Scarlet Sage</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={-1}
                              fdprocessedid="oqhnx"
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={-1}
                          fdprocessedid="yz4wnb"
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="product-box-4 wow fadeInUp"
                    data-wow-delay="0.05s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.05s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <div className="discount">
                          <label>-25%</label>
                        </div>
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={-1}
                          fdprocessedid="pgr21b"
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/flower-business/productcategory2.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={-1}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={-1}>
                        <h5 className="name">Wild Roses</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={-1}
                              fdprocessedid="izowp"
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={-1}
                          fdprocessedid="ht82kg"
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide"
                  style={{ width: 259 }}
                  data-slick-index={1}
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div
                    className="product-box-4 wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={-1}
                          fdprocessedid="z4t9wk"
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/flower-business/productcategory3.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={-1}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={-1}>
                        <h5 className="name">Lity Majesty Palm</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={-1}
                              fdprocessedid="ao8vfr"
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={-1}
                          fdprocessedid="nsf8ac"
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="product-box-4 wow fadeInUp"
                    data-wow-delay="0.05s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.05s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={-1}
                          fdprocessedid="nvlg3g"
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/flower-business/productcategory4.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={-1}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={-1}>
                        <h5 className="name">Foxglove Flower</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={-1}
                              fdprocessedid="zoi8t"
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={-1}
                          fdprocessedid="ct5a5d"
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide"
                  style={{ width: 259 }}
                  data-slick-index={2}
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div
                    className="product-box-4 wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={-1}
                          fdprocessedid="htuwx2"
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/flower-business/productcategory5.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={-1}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={-1}>
                        <h5 className="name">Sweet Alyssum</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={-1}
                              fdprocessedid="tnyuu"
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={-1}
                          fdprocessedid="wq8d2i"
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="product-box-4 wow fadeInUp"
                    data-wow-delay="0.05s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.05s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={-1}
                          fdprocessedid="z7wohi"
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/flower-business/productcategory6.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={-1}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={-1}>
                        <h5 className="name">Wild Roses</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={-1}
                              fdprocessedid="8i8k3h"
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={-1}
                          fdprocessedid="4632one"
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-current slick-active"
                  style={{ width: 259 }}
                  data-slick-index={3}
                  aria-hidden="false"
                  tabIndex={0}
                >
                  <div
                    className="product-box-4 wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={0}
                          fdprocessedid="yjtw3o"
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={0}>
                        <img
                          src="../assets/images/flower-business/productcategory1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={0}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={0}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={0}>
                        <h5 className="name">Scarlet Sage</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={0}
                              fdprocessedid="m8uv6"
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={0}
                          fdprocessedid="d5gc4e"
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="product-box-4 wow fadeInUp"
                    data-wow-delay="0.05s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.05s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <div className="discount">
                          <label>-25%</label>
                        </div>
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={0}
                          fdprocessedid="nrz6o"
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={0}>
                        <img
                          src="../assets/images/flower-business/productcategory2.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={0}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={0}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={0}>
                        <h5 className="name">Wild Roses</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={0}
                              fdprocessedid="1mbvd9"
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={0}
                          fdprocessedid="cl5xft"
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-active"
                  style={{ width: 259 }}
                  data-slick-index={4}
                  aria-hidden="false"
                  tabIndex={0}
                >
                  <div
                    className="product-box-4 wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={0}
                          fdprocessedid="1duzfl"
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={0}>
                        <img
                          src="../assets/images/flower-business/productcategory3.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={0}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={0}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={0}>
                        <h5 className="name">Lity Majesty Palm</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={0}
                              fdprocessedid="zs553l"
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={0}
                          fdprocessedid="162fei"
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="product-box-4 wow fadeInUp"
                    data-wow-delay="0.05s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.05s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={0}
                          fdprocessedid="nagexr"
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={0}>
                        <img
                          src="../assets/images/flower-business/productcategory4.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={0}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={0}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={0}>
                        <h5 className="name">Foxglove Flower</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={0}
                              fdprocessedid="mlty5g"
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={0}
                          fdprocessedid="vkcqc"
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-active"
                  style={{ width: 259 }}
                  data-slick-index={5}
                  aria-hidden="false"
                  tabIndex={0}
                >
                  <div
                    className="product-box-4 wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={0}
                          fdprocessedid="w8rqlq"
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={0}>
                        <img
                          src="../assets/images/flower-business/productcategory5.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={0}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={0}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={0}>
                        <h5 className="name">Sweet Alyssum</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={0}
                              fdprocessedid="w1rq3"
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={0}
                          fdprocessedid="5m2s3b"
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="product-box-4 wow fadeInUp"
                    data-wow-delay="0.05s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.05s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={0}
                          fdprocessedid="4x9dt"
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={0}>
                        <img
                          src="../assets/images/flower-business/productcategory6.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={0}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={0}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={0}>
                        <h5 className="name">Wild Roses</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={0}
                              fdprocessedid="6yxbawa"
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={0}
                          fdprocessedid="g1cdoh"
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-cloned slick-active"
                  style={{ width: 259 }}
                  data-slick-index={6}
                  id=""
                  aria-hidden="false"
                  tabIndex={-1}
                >
                  <div
                    className="product-box-4 wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={0}
                          fdprocessedid="cjup0m"
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={0}>
                        <img
                          src="../assets/images/flower-business/productcategory1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={0}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={0}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={0}>
                        <h5 className="name">Scarlet Sage</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={0}
                              fdprocessedid="px9c5"
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={0}
                          fdprocessedid="v7x9ks"
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="product-box-4 wow fadeInUp"
                    data-wow-delay="0.05s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.05s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <div className="discount">
                          <label>-25%</label>
                        </div>
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={0}
                          fdprocessedid="i2tuqr"
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={0}>
                        <img
                          src="../assets/images/flower-business/productcategory2.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={0}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={0}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={0}>
                        <h5 className="name">Wild Roses</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={0}
                              fdprocessedid="0d9r43p"
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={0}
                          fdprocessedid="6yil2a"
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-cloned slick-active"
                  style={{ width: 259 }}
                  data-slick-index={7}
                  id=""
                  aria-hidden="false"
                  tabIndex={-1}
                >
                  <div
                    className="product-box-4 wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={0}
                          fdprocessedid="xt7yzo"
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={0}>
                        <img
                          src="../assets/images/flower-business/productcategory3.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={0}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={0}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={0}>
                        <h5 className="name">Lity Majesty Palm</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={0}
                              fdprocessedid="tqdj7f"
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={0}
                          fdprocessedid="6vako"
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="product-box-4 wow fadeInUp"
                    data-wow-delay="0.05s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.05s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={0}
                          fdprocessedid="tb0jna"
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={0}>
                        <img
                          src="../assets/images/flower-business/productcategory4.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={0}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={0}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={0}>
                        <h5 className="name">Foxglove Flower</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={0}
                              fdprocessedid="6vmsfv"
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={0}
                          fdprocessedid="zcckef"
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-cloned"
                  style={{ width: 259 }}
                  data-slick-index={8}
                  id=""
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div
                    className="product-box-4 wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={-1}
                          fdprocessedid="4jhcoo"
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/flower-business/productcategory5.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={-1}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={-1}>
                        <h5 className="name">Sweet Alyssum</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={-1}
                              fdprocessedid="btbcpu"
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={-1}
                          fdprocessedid="zquf4s"
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="product-box-4 wow fadeInUp"
                    data-wow-delay="0.05s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.05s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={-1}
                          fdprocessedid="ry944u"
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/flower-business/productcategory6.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={-1}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={-1}>
                        <h5 className="name">Wild Roses</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={-1}
                              fdprocessedid="v04jb"
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={-1}
                          fdprocessedid="lebiu5"
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-cloned"
                  style={{ width: 259 }}
                  data-slick-index={9}
                  id=""
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div
                    className="product-box-4 wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={-1}
                          fdprocessedid="3j43h9"
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/flower-business/productcategory1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={-1}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={-1}>
                        <h5 className="name">Scarlet Sage</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={-1}
                              fdprocessedid="elnld"
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={-1}
                          fdprocessedid="tb42u2"
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="product-box-4 wow fadeInUp"
                    data-wow-delay="0.05s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.05s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <div className="discount">
                          <label>-25%</label>
                        </div>
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={-1}
                          fdprocessedid="axpzaj"
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/flower-business/productcategory2.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={-1}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={-1}>
                        <h5 className="name">Wild Roses</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={-1}
                              fdprocessedid="x6s9j"
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={-1}
                          fdprocessedid="qr0fb"
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-cloned"
                  style={{ width: 259 }}
                  data-slick-index={10}
                  id=""
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div
                    className="product-box-4 wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={-1}
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/flower-business/productcategory3.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={-1}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={-1}>
                        <h5 className="name">Lity Majesty Palm</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={-1}
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={-1}
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="product-box-4 wow fadeInUp"
                    data-wow-delay="0.05s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.05s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={-1}
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/flower-business/productcategory4.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={-1}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={-1}>
                        <h5 className="name">Foxglove Flower</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={-1}
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={-1}
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-cloned"
                  style={{ width: 259 }}
                  data-slick-index={11}
                  id=""
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div
                    className="product-box-4 wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={-1}
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/flower-business/productcategory5.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={-1}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={-1}>
                        <h5 className="name">Sweet Alyssum</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={-1}
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={-1}
                        >
                          <i className="iconly-Buy icli text-white m-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="product-box-4 wow fadeInUp"
                    data-wow-delay="0.05s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.05s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="product-image">
                      <div className="label-flex">
                        <button
                          className="btn p-0 wishlist btn-wishlist notifi-wishlist"
                          tabIndex={-1}
                        >
                          <i className="iconly-Heart icli" />
                        </button>
                      </div>
                      <a href="product.html" tabIndex={-1}>
                        <img
                          src="../assets/images/flower-business/productcategory6.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                      <ul className="option">
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Quick View"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#view"
                            tabIndex={-1}
                          >
                            <i className="iconly-Show icli" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Compare"
                        >
                          <a href="compare.html" tabIndex={-1}>
                            <i className="iconly-Swap icli" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-detail">
                      <ul className="rating">
                        <Star />
                      </ul>
                      <a href="product.html" tabIndex={-1}>
                        <h5 className="name">Wild Roses</h5>
                      </a>
                      <h5 className="price theme-color">
                        $70.21<del>$65.25</del>
                      </h5>
                      <div className="price-qty">
                        <div className="counter-number">
                          <div className="counter">
                            <div
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa-solid fa-minus" />
                            </div>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={0}
                              tabIndex={-1}
                            />
                            <div
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa-solid fa-plus" />
                            </div>
                          </div>
                        </div>
                        <button
                          className="buy-button buy-button-2 btn btn-cart"
                          tabIndex={-1}
                        >
                          <i className="iconly-Buy icli text-white m-0" />
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
      {/* Product Sction End */}
      {/* Banner Section Start */}
      <section className="banner-section">
        <div className="container-fluid-lg">
          <div className="row gy-xl-0 gy-3">
            <div className="col-xl-6">
              <div
                className="banner-contain-3 hover-effect bg-size"
                style={{
                  backgroundImage:
                    'url("../assets/images/flower-business/img-2.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block",
                }}
              >
                <img
                  src="../assets/images/flower-business/img-2.jpg"
                  className="bg-img img-fluid"
                  alt=""
                  style={{ display: "none" }}
                />
                <div className="banner-detail text-dark p-center-left w-100 position-relative mend-auto">
                  <div>
                    <h6 className="ls-expanded text-uppercase">Premium</h6>
                    <h3 className="mb-sm-3 mb-1">Beauty Flower</h3>
                    <h4>SAVE UP TO 40% OFF</h4>
                    <button
                      className="btn theme-color bg-white btn-md fw-bold mt-sm-3 mt-1 mend-auto"
                      onclick="location.href = 'shop.html';"
                      fdprocessedid="zrm1dz"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="banner-contain-3 hover-effect bg-size"
                style={{
                  backgroundImage:
                    'url("../assets/images/flower-business/img-1.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block",
                }}
              >
                <img
                  src="../assets/images/flower-business/img-1.jpg"
                  className="bg-img img-fluid"
                  alt=""
                  style={{ display: "none" }}
                />
                <div className="banner-detail text-dark p-center-left w-100 position-relative mend-auto">
                  <div>
                    <h6 className="ls-expanded text-uppercase">Available</h6>
                    <h3 className="mb-sm-3 mb-1">New Arrivals</h3>
                    <h4 className="text-content">SAVE UP TO 30% OFF</h4>
                    <button
                      className="btn theme-bg-color text-white btn-md fw-bold mt-sm-3 mt-1 mend-auto"
                      onclick="location.href = 'shop.html';"
                      fdprocessedid="erityi"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End */}
      {/* Product Section Start */}
      <section className="product-section-2">
        <div className="container-fluid-lg">
          <div className="row gy-sm-5 gy-4">
            <div className="col-xxl-3 col-md-6">
              <div className="row">
                <div className="col-xl-12">
                  <div className="title title-border d-block">
                    <h3>NEW PRODUCTS</h3>
                  </div>
                  <div className="product-category-1 arrow-slider-2 slick-initialized slick-slider">
                    <button
                      className="slick-prev slick-arrow"
                      aria-label="Previous"
                      type="button"
                      style={{}}
                      fdprocessedid="zdt7gp"
                    >
                      Previous
                    </button>
                    <div className="slick-list draggable">
                      <div
                        className="slick-track"
                        style={{
                          opacity: 1,
                          width: 1600,
                          transform: "translate3d(-320px, 0px, 0px)",
                        }}
                      >
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={-1}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory4.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory5.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory6.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-current slick-active"
                          data-slick-index={0}
                          aria-hidden="false"
                          tabIndex={0}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={0}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory1.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={0}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={0}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={0}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={0}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={0}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={0}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory2.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={0}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={0}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={0}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={0}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={0}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={0}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory3.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={0}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={0}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={0}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={0}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={0}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide"
                          data-slick-index={1}
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory4.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory5.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory6.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={2}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory1.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory2.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory3.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={3}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory4.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory5.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory6.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
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
                      style={{}}
                      fdprocessedid="10v4bq"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6">
              <div className="row">
                <div className="col-xl-12">
                  <div className="title title-border d-block">
                    <h3>FEATURE PRODUCT</h3>
                  </div>
                  <div className="product-category-1 arrow-slider-2 slick-initialized slick-slider">
                    <button
                      className="slick-prev slick-arrow"
                      aria-label="Previous"
                      type="button"
                      style={{}}
                      fdprocessedid="o4k7ib"
                    >
                      Previous
                    </button>
                    <div className="slick-list draggable">
                      <div
                        className="slick-track"
                        style={{
                          opacity: 1,
                          width: 1600,
                          transform: "translate3d(-320px, 0px, 0px)",
                        }}
                      >
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={-1}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory4.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory5.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory6.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-current slick-active"
                          data-slick-index={0}
                          aria-hidden="false"
                          tabIndex={0}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={0}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory1.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={0}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={0}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={0}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={0}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={0}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={0}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory2.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={0}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={0}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={0}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={0}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={0}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={0}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory3.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={0}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={0}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={0}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={0}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={0}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide"
                          data-slick-index={1}
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory4.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory5.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory6.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={2}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory1.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory2.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory3.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={3}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory4.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory5.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory6.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
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
                      style={{}}
                      fdprocessedid="k16mgb"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6">
              <div className="row">
                <div className="col-xl-12">
                  <div className="title title-border d-block">
                    <h3>BEST SELLER</h3>
                  </div>
                  <div className="product-category-1 arrow-slider-2 slick-initialized slick-slider">
                    <button
                      className="slick-prev slick-arrow"
                      aria-label="Previous"
                      type="button"
                      style={{}}
                      fdprocessedid="jdmldf"
                    >
                      Previous
                    </button>
                    <div className="slick-list draggable">
                      <div
                        className="slick-track"
                        style={{
                          opacity: 1,
                          width: 1600,
                          transform: "translate3d(-320px, 0px, 0px)",
                        }}
                      >
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={-1}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory4.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory5.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory6.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-current slick-active"
                          data-slick-index={0}
                          aria-hidden="false"
                          tabIndex={0}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={0}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory1.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={0}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={0}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={0}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={0}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={0}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={0}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory2.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={0}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={0}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={0}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={0}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={0}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={0}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory3.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={0}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={0}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={0}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={0}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={0}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide"
                          data-slick-index={1}
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory4.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory5.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory6.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={2}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory1.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory2.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory3.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={3}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory4.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory5.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory6.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
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
                      style={{}}
                      fdprocessedid="hzi9ar"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6">
              <div className="row">
                <div className="col-xl-12">
                  <div className="title title-border d-block">
                    <h3>ON SELL</h3>
                  </div>
                  <div className="product-category-1 arrow-slider-2 slick-initialized slick-slider">
                    <button
                      className="slick-prev slick-arrow"
                      aria-label="Previous"
                      type="button"
                      style={{}}
                      fdprocessedid="ld4mce"
                    >
                      Previous
                    </button>
                    <div className="slick-list draggable">
                      <div
                        className="slick-track"
                        style={{
                          opacity: 1,
                          width: 1600,
                          transform: "translate3d(-320px, 0px, 0px)",
                        }}
                      >
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={-1}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory4.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory5.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory6.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-current slick-active"
                          data-slick-index={0}
                          aria-hidden="false"
                          tabIndex={0}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={0}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory1.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={0}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={0}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={0}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={0}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={0}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={0}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory2.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={0}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={0}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={0}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={0}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={0}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={0}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory3.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={0}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={0}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={0}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={0}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={0}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide"
                          data-slick-index={1}
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory4.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory5.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory6.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={2}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory1.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory2.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory3.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={3}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory4.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory5.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory6.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
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
                      style={{}}
                      fdprocessedid="q14mxm"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Section End */}
      {/* Banner Section Start */}
      <section className="banner-section">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div
                className="banner-contain-3 section-b-space section-t-space hover-effect bg-size"
                style={{
                  backgroundImage:
                    'url("../assets/images/flower-business/full_bg.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block",
                }}
              >
                <img
                  src="../assets/images/flower-business/full_bg.jpg"
                  className="img-fluid bg-img"
                  alt=""
                  style={{ display: "none" }}
                />
                <div className="banner-detail p-center text-dark position-relative text-center p-0">
                  <div>
                    <h4 className="ls-expanded text-uppercase text-white">
                      Try Our New
                    </h4>
                    <h2 className="my-3 text-white">Sale Up To 40%</h2>
                    <h4 className="text-content fw-300 text-white">
                      It is a long established facr that a reader will be
                      distracted by the <br />
                      readable content of a page when looking at its layout
                    </h4>
                    <button
                      className="btn theme-bg-color mt-sm-4 btn-md mx-auto text-white fw-bold"
                      onclick="location.href = 'shop.html';"
                      fdprocessedid="wjfnqn"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section End */}
      {/* Product Sction Start */}
      <section className="product-section-2">
        <div className="container-fluid-lg">
          <div className="row gy-sm-5 gy-4">
            <div className="col-xxl-3 col-md-6">
              <div className="row">
                <div className="col-xl-12">
                  <div className="title title-border d-block">
                    <h3>NEW PRODUCTS</h3>
                  </div>
                  <div className="product-category-1 arrow-slider-2 slick-initialized slick-slider">
                    <button
                      className="slick-prev slick-arrow"
                      aria-label="Previous"
                      type="button"
                      style={{}}
                      fdprocessedid="uh1mnd"
                    >
                      Previous
                    </button>
                    <div className="slick-list draggable">
                      <div
                        className="slick-track"
                        style={{
                          opacity: 1,
                          width: 1600,
                          transform: "translate3d(-320px, 0px, 0px)",
                        }}
                      >
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={-1}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory4.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory5.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory6.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-current slick-active"
                          data-slick-index={0}
                          aria-hidden="false"
                          tabIndex={0}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={0}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory1.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={0}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={0}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={0}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={0}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={0}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={0}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory2.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={0}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={0}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={0}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={0}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={0}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={0}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory3.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={0}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={0}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={0}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={0}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={0}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide"
                          data-slick-index={1}
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory4.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory5.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory6.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={2}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory1.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory2.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory3.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={3}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory4.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory5.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory6.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
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
                      style={{}}
                      fdprocessedid="3t7e3o"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6">
              <div className="row">
                <div className="col-xl-12">
                  <div className="title title-border d-block">
                    <h3>FEATURE PRODUCT</h3>
                  </div>
                  <div className="product-category-1 arrow-slider-2 slick-initialized slick-slider">
                    <button
                      className="slick-prev slick-arrow"
                      aria-label="Previous"
                      type="button"
                      style={{}}
                      fdprocessedid="bkqom"
                    >
                      Previous
                    </button>
                    <div className="slick-list draggable">
                      <div
                        className="slick-track"
                        style={{
                          opacity: 1,
                          width: 1600,
                          transform: "translate3d(-320px, 0px, 0px)",
                        }}
                      >
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={-1}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory4.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory5.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory6.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-current slick-active"
                          data-slick-index={0}
                          aria-hidden="false"
                          tabIndex={0}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={0}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory1.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={0}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={0}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={0}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={0}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={0}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={0}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory2.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={0}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={0}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={0}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={0}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={0}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={0}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory3.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={0}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={0}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={0}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={0}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={0}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide"
                          data-slick-index={1}
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory4.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory5.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory6.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={2}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory1.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory2.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory3.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={3}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory4.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory5.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory6.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
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
                      style={{}}
                      fdprocessedid="ubos49"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6">
              <div className="row">
                <div className="col-xl-12">
                  <div className="title title-border d-block">
                    <h3>BEST SELLER</h3>
                  </div>
                  <div className="product-category-1 arrow-slider-2 slick-initialized slick-slider">
                    <button
                      className="slick-prev slick-arrow"
                      aria-label="Previous"
                      type="button"
                      style={{}}
                      fdprocessedid="84jlb7"
                    >
                      Previous
                    </button>
                    <div className="slick-list draggable">
                      <div
                        className="slick-track"
                        style={{
                          opacity: 1,
                          width: 1600,
                          transform: "translate3d(-320px, 0px, 0px)",
                        }}
                      >
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={-1}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory4.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory5.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory6.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-current slick-active"
                          data-slick-index={0}
                          aria-hidden="false"
                          tabIndex={0}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={0}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory1.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={0}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={0}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={0}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={0}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={0}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={0}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory2.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={0}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={0}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={0}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={0}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={0}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={0}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory3.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={0}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={0}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={0}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={0}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={0}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide"
                          data-slick-index={1}
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory4.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory5.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory6.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={2}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory1.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory2.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory3.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={3}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory4.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory5.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory6.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
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
                      style={{}}
                      fdprocessedid="y0z0m"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6">
              <div className="row">
                <div className="col-xl-12">
                  <div className="title title-border d-block">
                    <h3>ON SELL</h3>
                  </div>
                  <div className="product-category-1 arrow-slider-2 slick-initialized slick-slider">
                    <button
                      className="slick-prev slick-arrow"
                      aria-label="Previous"
                      type="button"
                      style={{}}
                      fdprocessedid="8r1jv"
                    >
                      Previous
                    </button>
                    <div className="slick-list draggable">
                      <div
                        className="slick-track"
                        style={{
                          opacity: 1,
                          width: 1600,
                          transform: "translate3d(-320px, 0px, 0px)",
                        }}
                      >
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={-1}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory4.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory5.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory6.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-current slick-active"
                          data-slick-index={0}
                          aria-hidden="false"
                          tabIndex={0}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={0}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory1.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={0}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={0}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={0}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={0}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={0}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={0}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory2.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={0}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={0}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={0}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={0}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={0}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={0}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory3.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={0}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={0}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={0}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={0}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={0}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide"
                          data-slick-index={1}
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory4.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory5.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory6.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={2}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory1.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory2.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory3.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={3}
                          id=""
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 320 }}
                        >
                          <div className="row gy-sm-4 gy-3">
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                style={{
                                  visibility: "visible",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory4.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Sweet Alyssum</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp"
                                data-wow-delay="0.05s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.05s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory5.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Lity Majesty Palm</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="product-box-4 wow fadeInUp pb-1"
                                data-wow-delay="0.1s"
                                style={{
                                  visibility: "visible",
                                  animationDelay: "0.1s",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <a
                                  href="shop.html"
                                  className="product-image"
                                  tabIndex={-1}
                                >
                                  <img
                                    src="../assets/images/flower-business/productcategory6.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </a>
                                <div className="product-details">
                                  <ul className="rating">
                                    <Star />
                                  </ul>
                                  <a href="product.html" tabIndex={-1}>
                                    <h4 className="name">Scarlet Sage</h4>
                                  </a>
                                  <h5 className="price">
                                    $75.20<del>$65.21</del>
                                  </h5>
                                  <ul className="option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Add to Cart"
                                    >
                                      <a href="cart.html" tabIndex={-1}>
                                        <i className="iconly-Buy icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Quick View"
                                    >
                                      <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        tabIndex={-1}
                                      >
                                        <i className="iconly-Show icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Wishlist"
                                    >
                                      <a href="wishlist.html" tabIndex={-1}>
                                        <i className="iconly-Heart icli" />
                                      </a>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title=""
                                      data-bs-original-title="Compare"
                                    >
                                      <a href="compare.html" tabIndex={-1}>
                                        <i className="iconly-Swap icli" />
                                      </a>
                                    </li>
                                  </ul>
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
                      style={{}}
                      fdprocessedid="e4wmg"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Sction End */}
      {/* Blog Section Start */}
      <section className="blog-section pb-5">
        <div className="container-fluid-lg">
          <div className="title">
            <h2>Blog</h2>
          </div>
          <div className="slider-3 arrow-slider slick-initialized slick-slider">
            <div className="slick-list draggable">
              <div
                className="slick-track"
                style={{
                  opacity: 1,
                  width: 4741,
                  transform: "translate3d(-1293px, 0px, 0px)",
                }}
              >
                <div
                  className="slick-slide slick-cloned"
                  data-slick-index={-3}
                  id=""
                  aria-hidden="true"
                  tabIndex={-1}
                  style={{ width: 431 }}
                >
                  <div className="blog-box ratio_50">
                    <div className="blog-box-image">
                      <a
                        href="blog.html"
                        tabIndex={-1}
                        className="bg-size"
                        style={{
                          backgroundImage:
                            'url("../assets/images/flower-business/blog-2.jpg")',
                          backgroundSize: "cover",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat",
                          display: "block",
                        }}
                      >
                        <img
                          src="../assets/images/flower-business/blog-2.jpg"
                          className="img-fluid bg-img"
                          alt=""
                          style={{ display: "none" }}
                        />
                      </a>
                    </div>
                    <div className="blog-detail">
                      <label>Conversion rate optimization</label>
                      <a href="blog.html" tabIndex={-1}>
                        <h2>Choose For Yourself The Flobal Chiffon Dress</h2>
                      </a>
                      <div className="blog-list">
                        <span>March 9, 2021</span>
                        <span>By Emil Kristensen</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-cloned"
                  data-slick-index={-2}
                  id=""
                  aria-hidden="true"
                  tabIndex={-1}
                  style={{ width: 431 }}
                >
                  <div className="blog-box ratio_50">
                    <div className="blog-box-image">
                      <a
                        href="blog.html"
                        tabIndex={-1}
                        className="bg-size"
                        style={{
                          backgroundImage:
                            'url("../assets/images/flower-business/blog-1.jpg")',
                          backgroundSize: "cover",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat",
                          display: "block",
                        }}
                      >
                        <img
                          src="../assets/images/flower-business/blog-1.jpg"
                          className="img-fluid bg-img"
                          alt=""
                          style={{ display: "none" }}
                        />
                      </a>
                    </div>
                    <div className="blog-detail">
                      <label>Conversion rate optimization</label>
                      <a href="blog.html" tabIndex={-1}>
                        <h2>Choose For Yourself The Flobal Chiffon Dress</h2>
                      </a>
                      <div className="blog-list">
                        <span>March 9, 2021</span>
                        <span>By Emil Kristensen</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-cloned"
                  data-slick-index={-1}
                  id=""
                  aria-hidden="true"
                  tabIndex={-1}
                  style={{ width: 431 }}
                >
                  <div className="blog-box ratio_50">
                    <div className="blog-box-image">
                      <a
                        href="blog.html"
                        tabIndex={-1}
                        className="bg-size"
                        style={{
                          backgroundImage:
                            'url("../assets/images/flower-business/blog-2.jpg")',
                          backgroundSize: "cover",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat",
                          display: "block",
                        }}
                      >
                        <img
                          src="../assets/images/flower-business/blog-2.jpg"
                          className="img-fluid bg-img"
                          alt=""
                          style={{ display: "none" }}
                        />
                      </a>
                    </div>
                    <div className="blog-detail">
                      <label>Conversion rate optimizations</label>
                      <a href="blog.html" tabIndex={-1}>
                        <h2>Choose For Yourself The Flobal Chiffon Dress</h2>
                      </a>
                      <div className="blog-list">
                        <span>March 9, 2021</span>
                        <span>By Emil Kristensen</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-current slick-active"
                  data-slick-index={0}
                  aria-hidden="false"
                  tabIndex={0}
                  style={{ width: 431 }}
                >
                  <div className="blog-box ratio_50">
                    <div className="blog-box-image">
                      <a
                        href="blog.html"
                        tabIndex={0}
                        className="bg-size"
                        style={{
                          backgroundImage:
                            'url("../assets/images/flower-business/blog-1.jpg")',
                          backgroundSize: "cover",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat",
                          display: "block",
                        }}
                      >
                        <img
                          src="../assets/images/flower-business/blog-1.jpg"
                          className="img-fluid bg-img"
                          alt=""
                          style={{ display: "none" }}
                        />
                      </a>
                    </div>
                    <div className="blog-detail">
                      <label>Conversion rate optimization</label>
                      <a href="blog.html" tabIndex={0}>
                        <h2>Choose For Yourself The Flobal Chiffon Dress</h2>
                      </a>
                      <div className="blog-list">
                        <span>March 9, 2021</span>
                        <span>By Emil Kristensen</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-active"
                  data-slick-index={1}
                  aria-hidden="false"
                  tabIndex={0}
                  style={{ width: 431 }}
                >
                  <div className="blog-box ratio_50">
                    <div className="blog-box-image">
                      <a
                        href="blog.html"
                        tabIndex={0}
                        className="bg-size"
                        style={{
                          backgroundImage:
                            'url("../assets/images/flower-business/blog-2.jpg")',
                          backgroundSize: "cover",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat",
                          display: "block",
                        }}
                      >
                        <img
                          src="../assets/images/flower-business/blog-2.jpg"
                          className="img-fluid bg-img"
                          alt=""
                          style={{ display: "none" }}
                        />
                      </a>
                    </div>
                    <div className="blog-detail">
                      <label>Conversion rate optimization</label>
                      <a href="blog.html" tabIndex={0}>
                        <h2>Choose For Yourself The Flobal Chiffon Dress</h2>
                      </a>
                      <div className="blog-list">
                        <span>March 9, 2021</span>
                        <span>By Emil Kristensen</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-active"
                  data-slick-index={2}
                  aria-hidden="false"
                  tabIndex={0}
                  style={{ width: 431 }}
                >
                  <div className="blog-box ratio_50">
                    <div className="blog-box-image">
                      <a
                        href="blog.html"
                        tabIndex={0}
                        className="bg-size"
                        style={{
                          backgroundImage:
                            'url("../assets/images/flower-business/blog-1.jpg")',
                          backgroundSize: "cover",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat",
                          display: "block",
                        }}
                      >
                        <img
                          src="../assets/images/flower-business/blog-1.jpg"
                          className="img-fluid bg-img"
                          alt=""
                          style={{ display: "none" }}
                        />
                      </a>
                    </div>
                    <div className="blog-detail">
                      <label>Conversion rate optimization</label>
                      <a href="blog.html" tabIndex={0}>
                        <h2>Choose For Yourself The Flobal Chiffon Dress</h2>
                      </a>
                      <div className="blog-list">
                        <span>March 9, 2021</span>
                        <span>By Emil Kristensen</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide"
                  data-slick-index={3}
                  aria-hidden="true"
                  tabIndex={-1}
                  style={{ width: 431 }}
                >
                  <div className="blog-box ratio_50">
                    <div className="blog-box-image">
                      <a
                        href="blog.html"
                        tabIndex={-1}
                        className="bg-size"
                        style={{
                          backgroundImage:
                            'url("../assets/images/flower-business/blog-2.jpg")',
                          backgroundSize: "cover",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat",
                          display: "block",
                        }}
                      >
                        <img
                          src="../assets/images/flower-business/blog-2.jpg"
                          className="img-fluid bg-img"
                          alt=""
                          style={{ display: "none" }}
                        />
                      </a>
                    </div>
                    <div className="blog-detail">
                      <label>Conversion rate optimizations</label>
                      <a href="blog.html" tabIndex={-1}>
                        <h2>Choose For Yourself The Flobal Chiffon Dress</h2>
                      </a>
                      <div className="blog-list">
                        <span>March 9, 2021</span>
                        <span>By Emil Kristensen</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-cloned"
                  data-slick-index={4}
                  id=""
                  aria-hidden="true"
                  tabIndex={-1}
                  style={{ width: 431 }}
                >
                  <div className="blog-box ratio_50">
                    <div className="blog-box-image">
                      <a
                        href="blog.html"
                        tabIndex={-1}
                        className="bg-size"
                        style={{
                          backgroundImage:
                            'url("../assets/images/flower-business/blog-1.jpg")',
                          backgroundSize: "cover",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat",
                          display: "block",
                        }}
                      >
                        <img
                          src="../assets/images/flower-business/blog-1.jpg"
                          className="img-fluid bg-img"
                          alt=""
                          style={{ display: "none" }}
                        />
                      </a>
                    </div>
                    <div className="blog-detail">
                      <label>Conversion rate optimization</label>
                      <a href="blog.html" tabIndex={-1}>
                        <h2>Choose For Yourself The Flobal Chiffon Dress</h2>
                      </a>
                      <div className="blog-list">
                        <span>March 9, 2021</span>
                        <span>By Emil Kristensen</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-cloned"
                  data-slick-index={5}
                  id=""
                  aria-hidden="true"
                  tabIndex={-1}
                  style={{ width: 431 }}
                >
                  <div className="blog-box ratio_50">
                    <div className="blog-box-image">
                      <a
                        href="blog.html"
                        tabIndex={-1}
                        className="bg-size"
                        style={{
                          backgroundImage:
                            'url("../assets/images/flower-business/blog-2.jpg")',
                          backgroundSize: "cover",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat",
                          display: "block",
                        }}
                      >
                        <img
                          src="../assets/images/flower-business/blog-2.jpg"
                          className="img-fluid bg-img"
                          alt=""
                          style={{ display: "none" }}
                        />
                      </a>
                    </div>
                    <div className="blog-detail">
                      <label>Conversion rate optimization</label>
                      <a href="blog.html" tabIndex={-1}>
                        <h2>Choose For Yourself The Flobal Chiffon Dress</h2>
                      </a>
                      <div className="blog-list">
                        <span>March 9, 2021</span>
                        <span>By Emil Kristensen</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-cloned"
                  data-slick-index={6}
                  id=""
                  aria-hidden="true"
                  tabIndex={-1}
                  style={{ width: 431 }}
                >
                  <div className="blog-box ratio_50">
                    <div className="blog-box-image">
                      <a
                        href="blog.html"
                        tabIndex={-1}
                        className="bg-size"
                        style={{
                          backgroundImage:
                            'url("../assets/images/flower-business/blog-1.jpg")',
                          backgroundSize: "cover",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat",
                          display: "block",
                        }}
                      >
                        <img
                          src="../assets/images/flower-business/blog-1.jpg"
                          className="img-fluid bg-img"
                          alt=""
                          style={{ display: "none" }}
                        />
                      </a>
                    </div>
                    <div className="blog-detail">
                      <label>Conversion rate optimization</label>
                      <a href="blog.html" tabIndex={-1}>
                        <h2>Choose For Yourself The Flobal Chiffon Dress</h2>
                      </a>
                      <div className="blog-list">
                        <span>March 9, 2021</span>
                        <span>By Emil Kristensen</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-cloned"
                  data-slick-index={7}
                  id=""
                  aria-hidden="true"
                  tabIndex={-1}
                  style={{ width: 431 }}
                >
                  <div className="blog-box ratio_50">
                    <div className="blog-box-image">
                      <a
                        href="blog.html"
                        tabIndex={-1}
                        className="bg-size"
                        style={{
                          backgroundImage:
                            'url("../assets/images/flower-business/blog-2.jpg")',
                          backgroundSize: "cover",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat",
                          display: "block",
                        }}
                      >
                        <img
                          src="../assets/images/flower-business/blog-2.jpg"
                          className="img-fluid bg-img"
                          alt=""
                          style={{ display: "none" }}
                        />
                      </a>
                    </div>
                    <div className="blog-detail">
                      <label>Conversion rate optimizations</label>
                      <a href="blog.html" tabIndex={-1}>
                        <h2>Choose For Yourself The Flobal Chiffon Dress</h2>
                      </a>
                      <div className="blog-list">
                        <span>March 9, 2021</span>
                        <span>By Emil Kristensen</span>
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
      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
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
                      src="../assets/images/flower-business/product1.jpg"
                      className="img-fluid  lazyload"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-sidebar-modal">
                    <h4 className="title-name">Lity Majesty Palm</h4>
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
      {/* Items section Start */}
      <div className="button-item">
        <button className="item-btn btn text-white">
          <i className="iconly-Bag-2 icli" />
        </button>
      </div>
      <div className="item-section">
        <button className="close-button">
          <i className="fas fa-times" />
        </button>
        <h6>
          <i className="iconly-Bag-2 icli" />
          <span>5 Items</span>
        </h6>
        <ul className="items-image">
          <li>
            <img src="../assets/images/veg-3/cate1/1.png" alt="" />
          </li>
          <li>
            <img src="../assets/images/veg-3/cate1/2.png" alt="" />
          </li>
          <li>+3</li>
        </ul>
        <button
          // onclick="location.href = 'cart';"
          onClick={() => {
            window.location.href = "/cart";
          }}
          className="btn item-button btn-sm fw-bold"
        >
          $ 20.70
        </button>
      </div>
      {/* Items section End */}
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

export default IndexFlowerBusiness;
