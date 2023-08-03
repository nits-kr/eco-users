import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function IndexFurniture() {
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
      <header className="">
        <div className="header-top">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-xxl-3 d-xxl-block d-none">
                <div className="top-left-header">
                  <i className="iconly-Location icli text-white" />
                  <span className="text-white">
                    1418 Riverwood Drive, CA 96052, US
                  </span>
                </div>
              </div>
              <div className="col-xxl-6 col-lg-9 d-lg-block d-none">
                <div className="header-offer">
                  <div className="notification-slider">
                    <div>
                      <div className="timer-notification">
                        <h6>
                          <strong className="me-1">
                            Welcome to Techgropse eCommerce!
                          </strong>
                          Wrap new offers/gift every signle day on Weekends.
                          <strong className="ms-1">
                            New Coupon Code: Fast024
                          </strong>
                        </h6>
                      </div>
                    </div>
                    <div>
                      <div className="timer-notification">
                        <h6>
                          Something you love is now on sale!
                          <Link to="/shop" className="text-white">
                            Buy Now !
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <ul className="about-list right-nav-about">
                  <li className="right-nav-list">
                    <div className="dropdown theme-form-select">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="select-language"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src="../assets/images/country/united-states.png"
                          className="img-fluid  lazyload"
                          alt=""
                        />
                        <span>English</span>
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="select-language"
                      >
                        <li>
                          <Link className="dropdown-item" to="#" id="english">
                            <img
                              src="../assets/images/country/united-kingdom.png"
                              className="img-fluid  lazyload"
                              alt=""
                            />
                            <span>English</span>
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#" id="france">
                            <img
                              src="../assets/images/country/germany.png"
                              className="img-fluid  lazyload"
                              alt=""
                            />
                            <span>Germany</span>
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#" id="chinese">
                            <img
                              src="../assets/images/country/turkish.png"
                              className="img-fluid  lazyload"
                              alt=""
                            />
                            <span>Turki</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="right-nav-list">
                    <div className="dropdown theme-form-select">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="select-dollar"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span>USD</span>
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-end sm-dropdown-menu"
                        aria-labelledby="select-dollar"
                      >
                        <li>
                          <Link className="dropdown-item" id="aud" to="#">
                            AUD
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" id="eur" to="#">
                            EUR
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" id="cny" to="#">
                            CNY
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="top-nav top-header sticky-header">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-12">
                <div className="navbar-top">
                  <button
                    className="navbar-toggler d-xl-none d-inline navbar-menu-button me-2"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#primaryMenu"
                  >
                    <span className="navbar-toggler-icon">
                      <i className="fa-solid fa-bars" />
                    </span>
                  </button>
                  <Link to="/index-furniture" className="web-logo nav-logo">
                    <img
                      src="../assets/images/logo/logo.png"
                      className="img-fluid  lazyload"
                      alt=""
                    />
                  </Link>
                  <div className="header-nav-middle">
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
                              <Link
                                className="nav-link dropdown-toggle"
                                to="/blog"
                              >
                                Blog
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rightside-box">
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
                    <ul className="right-side-menu">
                      <li className="right-side">
                        <div className="delivery-login-box">
                          <div className="delivery-icon">
                            <div className="search-box">
                              <i data-feather="search" />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="right-side">
                        <Link
                          to="/wishlist"
                          className="btn p-0 position-relative header-wishlist"
                        >
                          <i data-feather="bookmark" />
                        </Link>
                      </li>
                      <li className="right-side">
                        <div className="onhover-dropdown header-badge">
                          <button
                            type="button"
                            className="btn p-0 position-relative header-wishlist"
                          >
                            <i data-feather="shopping-cart" />
                            <span className="position-absolute top-0 start-100 translate-middle badge">
                              2
                              <span className="visually-hidden">
                                unread messages
                              </span>
                            </span>
                          </button>
                          <div className="onhover-div">
                            <ul className="cart-list">
                              <li className="product-box-contain">
                                <div className="drop-cart">
                                  <Link to="/product" className="drop-image">
                                    <img
                                      src="../assets/images/furniture/9.png"
                                      className=" lazyload"
                                      alt=""
                                    />
                                  </Link>
                                  <div className="drop-contain">
                                    <Link to="/product">
                                      <h5>
                                        Handmade Brown Mango Wooden Tray Square
                                      </h5>
                                    </Link>
                                    <h6>
                                      <span>1 x</span> $80.58
                                    </h6>
                                    <button className="close-button close_button">
                                      <i className="fa-solid fa-xmark" />
                                    </button>
                                  </div>
                                </div>
                              </li>
                              <li className="product-box-contain">
                                <div className="drop-cart">
                                  <Link to="/product" className="drop-image">
                                    <img
                                      src="../assets/images/furniture/10.png"
                                      className=" lazyload"
                                      alt=""
                                    />
                                  </Link>
                                  <div className="drop-contain">
                                    <Link to="/product">
                                      <h5>heavy duty cane round basket</h5>
                                    </Link>
                                    <h6>
                                      <span>1 x</span> $25.68
                                    </h6>
                                    <button className="close-button close_button">
                                      <i className="fa-solid fa-xmark" />
                                    </button>
                                  </div>
                                </div>
                              </li>
                            </ul>
                            <div className="price-box">
                              <h5>Total :</h5>
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
                                className="btn btn-sm cart-button theme-bg-color
                                       text-white"
                              >
                                Checkout
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="right-side onhover-dropdown">
                        <div className="delivery-login-box">
                          <div className="delivery-icon">
                            <i data-feather="user" />
                          </div>
                          <div className="delivery-detail">
                            <h6>Hello,</h6>
                            <h5>My Account</h5>
                          </div>
                        </div>
                        <div className="onhover-div onhover-div-login">
                          <ul className="user-box-name">
                            <li className="product-box-contain">
                              <i />
                              <Link to="/login">Log In</Link>
                            </li>
                            <li className="product-box-contain">
                              <Link to="/sign-up">Register</Link>
                            </li>
                            <li className="product-box-contain">
                              <Link to="/forgot">Forgot Password</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
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
            <Link to="/index-furniture">
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
      <section className="home-section pt-2 ratio_50">
        <div className="container-fluid-lg">
          <div className="row g-4">
            <div className="col-xl-9 col-lg-8 ratio_50_1">
              <div className="home-contain furniture-contain-2">
                <img
                  src="../assets/images/furniture/banner/1.jpg"
                  className="bg-img  lazyload"
                  alt=""
                />
                <div className="home-detail p-top-left mend-auto w-100">
                  <div>
                    <h6>
                      Exclusive offer <span>30% Off</span>
                    </h6>
                    <h1 className="text-uppercase poster-1 text-content furniture-heading">
                      Stay home &amp; delivered your{" "}
                      <span className="daily">Daily Needs</span>
                    </h1>
                    <button
                      // onclick="location.href = 'shop';"
                      onClick={() => {
                        window.location.href = "/shop";
                      }}
                      className="btn btn-furniture mt-xxl-4 mt-3 home-button mend-auto"
                    >
                      Shop Now{" "}
                      <i className="fa-solid fa-right-long ms-2 icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 d-lg-inline-block d-none">
              <div className="home-contain h-100 home-furniture">
                <img
                  src="../assets/images/furniture/banner/2.png"
                  className="bg-img  lazyload"
                  alt=""
                />
                <div className="home-detail p-top-left home-p-sm feature-detail mend-auto">
                  <div>
                    <h2 className="mt-0 theme-color text-kaushan fw-normal">
                      Exclusive
                    </h2>
                    <h3 className="furniture-content">Furniture</h3>
                    <Link
                      to="/shop"
                      className="shop-button btn btn-furniture mt-0 d-inline-block btn-md text-content"
                    >
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
      {/* Service Section Start */}
      <section className="service-section">
        <div className="container-fluid-lg">
          <div className="row g-3 row-cols-xxl-5 row-cols-lg-3 row-cols-md-2">
            <div>
              <div className="service-contain-2">
                <svg className="icon-width">
                  <use xlinkHref="../assets/svg/svg/service-icon-4.svg#shipping" />
                </svg>
                <div className="service-detail">
                  <h3>Free Shipping</h3>
                  <h6 className="text-content">Free Shipping world wide</h6>
                </div>
              </div>
            </div>
            <div>
              <div className="service-contain-2">
                <svg className="icon-width">
                  <use xlinkHref="../assets/svg/svg/service-icon-4.svg#service" />
                </svg>
                <div className="service-detail">
                  <h3>24 x 7 Service</h3>
                  <h6 className="text-content">Online Service For 24 x 7</h6>
                </div>
              </div>
            </div>
            <div>
              <div className="service-contain-2">
                <svg className="icon-width">
                  <use xlinkHref="../assets/svg/svg/service-icon-4.svg#pay" />
                </svg>
                <div className="service-detail">
                  <h3>Online Pay</h3>
                  <h6 className="text-content">Online Payment Avaible</h6>
                </div>
              </div>
            </div>
            <div>
              <div className="service-contain-2">
                <svg className="icon-width">
                  <use xlinkHref="../assets/svg/svg/service-icon-4.svg#offer" />
                </svg>
                <div className="service-detail">
                  <h3>Festival Offer</h3>
                  <h6 className="text-content">Super Sale Upto 50% off</h6>
                </div>
              </div>
            </div>
            <div>
              <div className="service-contain-2">
                <svg className="icon-width">
                  <use xlinkHref="../assets/svg/svg/service-icon-4.svg#return" />
                </svg>
                <div className="service-detail">
                  <h3>100% Original</h3>
                  <h6 className="text-content">100% Money Back</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section End */}
      {/* Product Section Start */}
      <section className="product-section">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3">
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
                    Don't miss this opportunity at a special discount just for
                    this week.
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
                            <div className="minutes">56</div>
                          </div>
                        </li>
                        <li>
                          <div className="counter">
                            <div className="seconds">18</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-b-space">
                <div className="row row-cols-xxl-5 row-cols-md-4 row-cols-sm-3 row-cols-2 g-sm-4 g-3 no-arrow">
                  <div>
                    <div
                      className="product-box product-white-bg wow fadeIn"
                      style={{ visibility: "visible", animationName: "fadeIn" }}
                    >
                      <div className="product-image">
                        <Link to="/product">
                          <img
                            src="../assets/images/furniture/1.png"
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
                            >
                              <svg
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
                            <Link to="/compare">
                              <svg
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
                            <Link to="/wishlist" className="notifi-wishlist">
                              <svg
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
                      <div className="product-detail position-relative">
                        <Link to="/product">
                          <h6
                            className="name"
                            style={{
                              minHeight: 0,
                              maxHeight: "none",
                              height: 44,
                            }}
                          >
                            Home Decor Lucky Deer Family Matte Finish Ceramic
                            Figures
                          </h6>
                        </Link>
                        <h6 className="sold weight text-content fw-normal">
                          1 KG
                        </h6>
                        <h6 className="price theme-color">$ 80.00</h6>
                        <div className="add-to-cart-btn-2 add-to-cart-box addtocart_btn">
                          <button
                            className="btn addcart-button btn buy-button"
                            fdprocessedid="nljmwh6"
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                          <div className="cart_qty qty-box-2">
                            <div className="input-group">
                              <button
                                type="button"
                                className="qty-left-minus"
                                data-type="minus"
                                data-field=""
                              >
                                <i className="fa fa-minus" aria-hidden="true" />
                              </button>
                              <input
                                className="form-control input-number qty-input"
                                type="text"
                                name="quantity"
                                defaultValue={1}
                              />
                              <button
                                type="button"
                                className="qty-right-plus"
                                data-type="plus"
                                data-field=""
                              >
                                <i className="fa fa-plus" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="product-box product-white-bg wow fadeIn"
                      data-wow-delay="0.1s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.1s",
                        animationName: "fadeIn",
                      }}
                    >
                      <div className="product-image">
                        <Link to="/product">
                          <img
                            src="../assets/images/furniture/2.png"
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
                            >
                              <svg
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
                            <Link to="/compare">
                              <svg
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
                            <Link to="/wishlist" className="notifi-wishlist">
                              <svg
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
                      <div className="product-detail position-relative">
                        <Link to="/product">
                          <h6
                            className="name"
                            style={{
                              minHeight: 0,
                              maxHeight: "none",
                              height: 44,
                            }}
                          >
                            luxury comfort full size 17*27 jumbo border pillow
                          </h6>
                        </Link>
                        <h6 className="sold weight text-content fw-normal">
                          1 KG
                        </h6>
                        <h6 className="price theme-color">$ 80.00</h6>
                        <div className="add-to-cart-btn-2 addtocart_btn">
                          <button
                            className="btn addcart-button btn buy-button"
                            fdprocessedid="clx9d"
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                          <div className="cart_qty qty-box-2">
                            <div className="input-group">
                              <button
                                type="button"
                                className="qty-left-minus"
                                data-type="minus"
                                data-field=""
                              >
                                <i className="fa fa-minus" aria-hidden="true" />
                              </button>
                              <input
                                className="form-control input-number qty-input"
                                type="text"
                                name="quantity"
                                defaultValue={1}
                              />
                              <button
                                type="button"
                                className="qty-right-plus"
                                data-type="plus"
                                data-field=""
                              >
                                <i className="fa fa-plus" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="product-box product-white-bg wow fadeIn"
                      style={{ visibility: "visible", animationName: "fadeIn" }}
                    >
                      <div className="product-image">
                        <Link to="/product">
                          <img
                            src="../assets/images/furniture/3.png"
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
                            >
                              <svg
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
                            <Link to="/compare">
                              <svg
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
                            <Link to="/wishlist" className="notifi-wishlist">
                              <svg
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
                      <div className="product-detail position-relative">
                        <Link to="/product">
                          <h6
                            className="name"
                            style={{
                              minHeight: 0,
                              maxHeight: "none",
                              height: 44,
                            }}
                          >
                            Coral Bean Bag Chair
                          </h6>
                        </Link>
                        <h6 className="sold weight text-content fw-normal">
                          1 KG
                        </h6>
                        <h6 className="price theme-color">$ 80.00</h6>
                        <div className="add-to-cart-btn-2 addtocart_btn">
                          <button
                            className="btn addcart-button btn buy-button"
                            fdprocessedid="b4juej"
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                          <div className="cart_qty qty-box-2">
                            <div className="input-group">
                              <button
                                type="button"
                                className="qty-left-minus"
                                data-type="minus"
                                data-field=""
                              >
                                <i className="fa fa-minus" aria-hidden="true" />
                              </button>
                              <input
                                className="form-control input-number qty-input"
                                type="text"
                                name="quantity"
                                defaultValue={1}
                              />
                              <button
                                type="button"
                                className="qty-right-plus"
                                data-type="plus"
                                data-field=""
                              >
                                <i className="fa fa-plus" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="product-box product-white-bg wow fadeIn"
                      data-wow-delay="0.1s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.1s",
                        animationName: "fadeIn",
                      }}
                    >
                      <div className="product-image">
                        <Link to="/product">
                          <img
                            src="../assets/images/furniture/4.png"
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
                            >
                              <svg
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
                            <Link to="/compare">
                              <svg
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
                            <Link to="/wishlist" className="notifi-wishlist">
                              <svg
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
                      <div className="product-detail position-relative">
                        <Link to="/product">
                          <h6
                            className="name"
                            style={{
                              minHeight: 0,
                              maxHeight: "none",
                              height: 44,
                            }}
                          >
                            ELSTONE HOME White Colour Bath Towel
                          </h6>
                        </Link>
                        <h6 className="sold weight text-content fw-normal">
                          1 KG
                        </h6>
                        <h6 className="price theme-color">$ 80.00</h6>
                        <div className="add-to-cart-btn-2 addtocart_btn">
                          <button
                            className="btn addcart-button btn buy-button"
                            fdprocessedid="eickxp"
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                          <div className="cart_qty qty-box-2">
                            <div className="input-group">
                              <button
                                type="button"
                                className="qty-left-minus"
                                data-type="minus"
                                data-field=""
                              >
                                <i className="fa fa-minus" aria-hidden="true" />
                              </button>
                              <input
                                className="form-control input-number qty-input"
                                type="text"
                                name="quantity"
                                defaultValue={1}
                              />
                              <button
                                type="button"
                                className="qty-right-plus"
                                data-type="plus"
                                data-field=""
                              >
                                <i className="fa fa-plus" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="product-box product-white-bg wow fadeIn"
                      style={{ visibility: "visible", animationName: "fadeIn" }}
                    >
                      <div className="product-image">
                        <Link to="/product">
                          <img
                            src="../assets/images/furniture/5.png"
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
                            >
                              <svg
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
                            <Link to="/compare">
                              <svg
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
                            <Link to="/wishlist" className="notifi-wishlist">
                              <svg
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
                      <div className="product-detail position-relative">
                        <Link to="/product">
                          <h6
                            className="name"
                            style={{
                              minHeight: 0,
                              maxHeight: "none",
                              height: 44,
                            }}
                          >
                            Benefits of using natural stone tile flooring
                          </h6>
                        </Link>
                        <h6 className="sold weight text-content fw-normal">
                          1 KG
                        </h6>
                        <h6 className="price theme-color">$ 80.00</h6>
                        <div className="add-to-cart-btn-2 addtocart_btn">
                          <button
                            className="btn addcart-button btn buy-button"
                            fdprocessedid="dhcj9d"
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                          <div className="cart_qty qty-box-2">
                            <div className="input-group">
                              <button
                                type="button"
                                className="qty-left-minus"
                                data-type="minus"
                                data-field=""
                              >
                                <i className="fa fa-minus" aria-hidden="true" />
                              </button>
                              <input
                                className="form-control input-number qty-input"
                                type="text"
                                name="quantity"
                                defaultValue={1}
                              />
                              <button
                                type="button"
                                className="qty-right-plus"
                                data-type="plus"
                                data-field=""
                              >
                                <i className="fa fa-plus" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="product-box product-white-bg wow fadeIn"
                      data-wow-delay="0.1s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.1s",
                        animationName: "fadeIn",
                      }}
                    >
                      <div className="product-image">
                        <Link to="/product">
                          <img
                            src="../assets/images/furniture/6.png"
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
                            >
                              <svg
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
                            <Link to="/compare">
                              <svg
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
                            <Link to="/wishlist" className="notifi-wishlist">
                              <svg
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
                      <div className="product-detail position-relative">
                        <Link to="/product">
                          <h6
                            className="name"
                            style={{
                              minHeight: 0,
                              maxHeight: "none",
                              height: 44,
                            }}
                          >
                            Nature Baby Merino Knit Bassinet Blanket
                          </h6>
                        </Link>
                        <h6 className="sold weight text-content fw-normal">
                          1 KG
                        </h6>
                        <h6 className="price theme-color">$ 80.00</h6>
                        <div className="add-to-cart-btn-2 addtocart_btn">
                          <button
                            className="btn addcart-button btn buy-button"
                            fdprocessedid="nsagh"
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                          <div className="cart_qty qty-box-2">
                            <div className="input-group">
                              <button
                                type="button"
                                className="qty-left-minus"
                                data-type="minus"
                                data-field=""
                              >
                                <i className="fa fa-minus" aria-hidden="true" />
                              </button>
                              <input
                                className="form-control input-number qty-input"
                                type="text"
                                name="quantity"
                                defaultValue={1}
                              />
                              <button
                                type="button"
                                className="qty-right-plus"
                                data-type="plus"
                                data-field=""
                              >
                                <i className="fa fa-plus" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="product-box product-white-bg wow fadeIn"
                      style={{ visibility: "visible", animationName: "fadeIn" }}
                    >
                      <div className="product-image">
                        <Link to="/product">
                          <img
                            src="../assets/images/furniture/7.png"
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
                            >
                              <svg
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
                            <Link to="/compare">
                              <svg
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
                            <Link to="/wishlist" className="notifi-wishlist">
                              <svg
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
                      <div className="product-detail position-relative">
                        <Link to="/product">
                          <h6
                            className="name"
                            style={{
                              minHeight: 0,
                              maxHeight: "none",
                              height: 44,
                            }}
                          >
                            Wooden Tea Cup Coaster Coffee Drinks
                          </h6>
                        </Link>
                        <h6 className="sold weight text-content fw-normal">
                          1 KG
                        </h6>
                        <h6 className="price theme-color">$ 80.00</h6>
                        <div className="add-to-cart-btn-2 addtocart_btn">
                          <button
                            className="btn addcart-button btn buy-button"
                            fdprocessedid="0ch227"
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                          <div className="cart_qty qty-box-2">
                            <div className="input-group">
                              <button
                                type="button"
                                className="qty-left-minus"
                                data-type="minus"
                                data-field=""
                              >
                                <i className="fa fa-minus" aria-hidden="true" />
                              </button>
                              <input
                                className="form-control input-number qty-input"
                                type="text"
                                name="quantity"
                                defaultValue={1}
                              />
                              <button
                                type="button"
                                className="qty-right-plus"
                                data-type="plus"
                                data-field=""
                              >
                                <i className="fa fa-plus" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="product-box product-white-bg wow fadeIn"
                      data-wow-delay="0.1s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.1s",
                        animationName: "fadeIn",
                      }}
                    >
                      <div className="product-image">
                        <Link to="/product">
                          <img
                            src="../assets/images/furniture/8.png"
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
                            >
                              <svg
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
                            <Link to="/compare">
                              <svg
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
                            <Link to="/wishlist" className="notifi-wishlist">
                              <svg
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
                      <div className="product-detail position-relative">
                        <Link to="/product">
                          <h6
                            className="name"
                            style={{
                              minHeight: 0,
                              maxHeight: "none",
                              height: 44,
                            }}
                          >
                            Goddess Marble Hexagon Party Plates
                          </h6>
                        </Link>
                        <h6 className="sold weight text-content fw-normal">
                          1 KG
                        </h6>
                        <h6 className="price theme-color">$ 80.00</h6>
                        <div className="add-to-cart-btn-2 addtocart_btn">
                          <button
                            className="btn addcart-button btn buy-button"
                            fdprocessedid="nw0kv9"
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                          <div className="cart_qty qty-box-2">
                            <div className="input-group">
                              <button
                                type="button"
                                className="qty-left-minus"
                                data-type="minus"
                                data-field=""
                              >
                                <i className="fa fa-minus" aria-hidden="true" />
                              </button>
                              <input
                                className="form-control input-number qty-input"
                                type="text"
                                name="quantity"
                                defaultValue={1}
                              />
                              <button
                                type="button"
                                className="qty-right-plus"
                                data-type="plus"
                                data-field=""
                              >
                                <i className="fa fa-plus" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="product-box product-white-bg wow fadeIn"
                      style={{ visibility: "visible", animationName: "fadeIn" }}
                    >
                      <div className="product-image">
                        <Link to="/product">
                          <img
                            src="../assets/images/furniture/9.png"
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
                            >
                              <svg
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
                            <Link to="/compare">
                              <svg
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
                            <Link to="/wishlist" className="notifi-wishlist">
                              <svg
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
                      <div className="product-detail position-relative">
                        <Link to="/product">
                          <h6
                            className="name"
                            style={{
                              minHeight: 0,
                              maxHeight: "none",
                              height: 44,
                            }}
                          >
                            Handmade Brown Mango Wooden Tray Square
                          </h6>
                        </Link>
                        <h6 className="sold weight text-content fw-normal">
                          1 KG
                        </h6>
                        <h6 className="price theme-color">$ 80.00</h6>
                        <div className="add-to-cart-btn-2 addtocart_btn">
                          <button
                            className="btn addcart-button btn buy-button"
                            fdprocessedid="po6x4f"
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                          <div className="cart_qty qty-box-2">
                            <div className="input-group">
                              <button
                                type="button"
                                className="qty-left-minus"
                                data-type="minus"
                                data-field=""
                              >
                                <i className="fa fa-minus" aria-hidden="true" />
                              </button>
                              <input
                                className="form-control input-number qty-input"
                                type="text"
                                name="quantity"
                                defaultValue={1}
                              />
                              <button
                                type="button"
                                className="qty-right-plus"
                                data-type="plus"
                                data-field=""
                              >
                                <i className="fa fa-plus" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="product-box product-white-bg wow fadeIn"
                      data-wow-delay="0.1s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.1s",
                        animationName: "fadeIn",
                      }}
                    >
                      <div className="product-image">
                        <Link to="/product">
                          <img
                            src="../assets/images/furniture/10.png"
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
                            >
                              <svg
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
                            <Link to="/compare">
                              <svg
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
                            <Link to="/wishlist" className="notifi-wishlist">
                              <svg
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
                      <div className="product-detail position-relative">
                        <Link to="/product">
                          <h6
                            className="name"
                            style={{
                              minHeight: 0,
                              maxHeight: "none",
                              height: 44,
                            }}
                          >
                            heavy duty cane round basket
                          </h6>
                        </Link>
                        <h6 className="sold weight text-content fw-normal">
                          1 KG
                        </h6>
                        <h6 className="price theme-color">$ 80.00</h6>
                        <div className="add-to-cart-btn-2 addtocart_btn">
                          <button
                            className="btn addcart-button btn buy-button"
                            fdprocessedid="wxw06e"
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                          <div className="cart_qty qty-box-2">
                            <div className="input-group">
                              <button
                                type="button"
                                className="qty-left-minus"
                                data-type="minus"
                                data-field=""
                              >
                                <i className="fa fa-minus" aria-hidden="true" />
                              </button>
                              <input
                                className="form-control input-number qty-input"
                                type="text"
                                name="quantity"
                                defaultValue={1}
                              />
                              <button
                                type="button"
                                className="qty-right-plus"
                                data-type="plus"
                                data-field=""
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
                      transform: "translate3d(-1746px, 0px, 0px)",
                      transition: "transform 500ms ease 0s",
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
                      <Link
                        to="/shop"
                        className="category-box category-dark"
                        tabIndex={-1}
                      >
                        <div>
                          <img
                            src="../assets/images/furniture/icon/cushions.svg"
                            className="blur-up lazyload"
                            alt=""
                          />
                          <h5>Cushions</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 194 }}
                      data-slick-index={-4}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box category-dark"
                        tabIndex={-1}
                      >
                        <div>
                          <img
                            src="../assets/images/furniture/icon/blankets.svg"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5>Blankets</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 194 }}
                      data-slick-index={-3}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box category-dark"
                        tabIndex={-1}
                      >
                        <div>
                          <img
                            src="../assets/images/furniture/icon/gift.svg"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5>Giftwraps</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 194 }}
                      data-slick-index={-2}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box category-dark"
                        tabIndex={-1}
                      >
                        <div>
                          <img
                            src="../assets/images/furniture/icon/sleepware.svg"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5>Sleepwear</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 194 }}
                      data-slick-index={-1}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box category-dark"
                        tabIndex={-1}
                      >
                        <div>
                          <img
                            src="../assets/images/furniture/icon/bakeware.svg"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5>Cookware &amp; Bakeware</h5>
                        </div>
                      </Link>
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
                      <Link
                        to="/shop"
                        className="category-box category-dark"
                        tabIndex={-1}
                      >
                        <div>
                          <img
                            src="../assets/images/furniture/icon/decorations.svg"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5>Decorations</h5>
                        </div>
                      </Link>
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
                      <Link
                        to="/shop"
                        className="category-box category-dark"
                        tabIndex={-1}
                      >
                        <div>
                          <img
                            src="../assets/images/furniture/icon/pillows.svg"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5>Bed linen</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide"
                      style={{ width: 194 }}
                      data-slick-index={2}
                      aria-hidden="true"
                      tabIndex={-1}
                      role="tabpanel"
                      id="slick-slide02"
                      aria-describedby="slick-slide-control02"
                    >
                      <Link
                        to="/shop"
                        className="category-box category-dark"
                        tabIndex={-1}
                      >
                        <div>
                          <img
                            src="../assets/images/furniture/icon/cushions.svg"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5>Cushions</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide"
                      style={{ width: 194 }}
                      data-slick-index={3}
                      aria-hidden="true"
                      tabIndex={0}
                      role="tabpanel"
                      id="slick-slide03"
                      aria-describedby="slick-slide-control03"
                    >
                      <Link
                        to="/shop"
                        className="category-box category-dark"
                        tabIndex={0}
                      >
                        <div>
                          <img
                            src="../assets/images/furniture/icon/blankets.svg"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5>Blankets</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-current slick-active"
                      style={{ width: 194 }}
                      data-slick-index={4}
                      aria-hidden="false"
                      tabIndex={0}
                      role="tabpanel"
                      id="slick-slide04"
                      aria-describedby="slick-slide-control04"
                    >
                      <Link
                        to="/shop"
                        className="category-box category-dark"
                        tabIndex={0}
                      >
                        <div>
                          <img
                            src="../assets/images/furniture/icon/gift.svg"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5>Giftwraps</h5>
                        </div>
                      </Link>
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
                      <Link
                        to="/shop"
                        className="category-box category-dark"
                        tabIndex={0}
                      >
                        <div>
                          <img
                            src="../assets/images/furniture/icon/sleepware.svg"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5>Sleepwear</h5>
                        </div>
                      </Link>
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
                      <Link
                        to="/shop"
                        className="category-box category-dark"
                        tabIndex={0}
                      >
                        <div>
                          <img
                            src="../assets/images/furniture/icon/bakeware.svg"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5>Cookware &amp; Bakeware</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-cloned slick-active"
                      style={{ width: 194 }}
                      data-slick-index={7}
                      id=""
                      aria-hidden="false"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box category-dark"
                        tabIndex={0}
                      >
                        <div>
                          <img
                            src="../assets/images/furniture/icon/decorations.svg"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5>Decorations</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-cloned slick-active"
                      style={{ width: 194 }}
                      data-slick-index={8}
                      id=""
                      aria-hidden="false"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box category-dark"
                        tabIndex={-1}
                      >
                        <div>
                          <img
                            src="../assets/images/furniture/icon/pillows.svg"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5>Bed linen</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 194 }}
                      data-slick-index={9}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box category-dark"
                        tabIndex={-1}
                      >
                        <div>
                          <img
                            src="../assets/images/furniture/icon/cushions.svg"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5>Cushions</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 194 }}
                      data-slick-index={10}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box category-dark"
                        tabIndex={-1}
                      >
                        <div>
                          <img
                            src="../assets/images/furniture/icon/blankets.svg"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5>Blankets</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 194 }}
                      data-slick-index={11}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box category-dark"
                        tabIndex={-1}
                      >
                        <div>
                          <img
                            src="../assets/images/furniture/icon/gift.svg"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5>Giftwraps</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 194 }}
                      data-slick-index={12}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box category-dark"
                        tabIndex={-1}
                      >
                        <div>
                          <img
                            src="../assets/images/furniture/icon/sleepware.svg"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5>Sleepwear</h5>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 194 }}
                      data-slick-index={13}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <Link
                        to="/shop"
                        className="category-box category-dark"
                        tabIndex={-1}
                      >
                        <div>
                          <img
                            src="../assets/images/furniture/icon/bakeware.svg"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                          <h5>Cookware &amp; Bakeware</h5>
                        </div>
                      </Link>
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
                      fdprocessedid="iwgbb"
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
                      fdprocessedid="2ceh7"
                    >
                      2
                    </button>
                  </li>
                  <li role="presentation" className="">
                    <button
                      type="button"
                      role="tab"
                      id="slick-slide-control02"
                      aria-controls="slick-slide02"
                      aria-label="3 of 2"
                      tabIndex={-1}
                      fdprocessedid="smnnpr"
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
                      tabIndex={0}
                      fdprocessedid="mjfee"
                      aria-selected="true"
                    >
                      4
                    </button>
                  </li>
                  <li role="presentation" className="slick-active">
                    <button
                      type="button"
                      role="tab"
                      id="slick-slide-control04"
                      aria-controls="slick-slide04"
                      aria-label="5 of 2"
                      tabIndex={-1}
                      fdprocessedid="lhjq8i"
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
                      fdprocessedid="17xh4l"
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
                      fdprocessedid="3ws5zi"
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
                        backgroundImage:
                          'url("../assets/images/furniture/banner/4.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block",
                      }}
                    >
                      <img
                        src="../assets/images/furniture/banner/4.jpg"
                        className="bg-img blur-up lazyload"
                        alt=""
                        style={{ display: "none" }}
                      />
                      <div className="banner-details p-center-left p-4">
                        <div>
                          <h3 className="text-kaushan text-yellow">
                            50% offer
                          </h3>
                          <h4 className="theme-color mb-2 fw-normal">
                            <span className="theme-color fw-bold">
                              Restyling
                            </span>{" "}
                            your Home
                          </h4>
                          <button
                            onclick="location.href = 'shop';"
                            className="btn btn-furniture btn-sm mend-auto"
                            fdprocessedid="08zjh"
                          >
                            Shop Now{" "}
                            <i className="fa-solid fa-arrow-right icon" />
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
                          'url("../assets/images/furniture/banner/5.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block",
                      }}
                    >
                      <img
                        src="../assets/images/furniture/banner/5.jpg"
                        className="bg-img blur-up lazyload"
                        alt=""
                        style={{ display: "none" }}
                      />
                      <div className="banner-details p-center-left p-4">
                        <div>
                          <h3 className="text-kaushan text-yellow">
                            50% offer
                          </h3>
                          <h4 className="theme-color mb-2 fw-normal">
                            <span className="theme-color fw-bold">
                              New Elite
                            </span>{" "}
                            Collections
                          </h4>
                          <button
                            onclick="location.href = 'shop';"
                            className="btn btn-furniture btn-sm mend-auto"
                            fdprocessedid="kjlu7"
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
              <div className="title d-block">
                <h2>Food Cupboard</h2>
                <span className="title-leaf">
                  <svg className="icon-width">
                    <use xlinkHref="../assets/svg/leaf.svg#leaf" />
                  </svg>
                </span>
                <p>A virtual assistant collects the products from your list</p>
              </div>
              <div className="row row-cols-xxl-5 row-cols-md-4 row-cols-sm-3 row-cols-2 g-sm-4 g-3 no-arrow">
                <div>
                  <div
                    className="product-box product-white-bg wow fadeIn"
                    style={{ visibility: "visible", animationName: "fadeIn" }}
                  >
                    <div className="product-image">
                      <Link to="/product">
                        <img
                          src="../assets/images/furniture/13.png"
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
                          >
                            <svg
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
                          <Link to="/compare">
                            <svg
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
                          <Link to="/wishlist" className="notifi-wishlist">
                            <svg
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
                    <div className="product-detail position-relative">
                      <Link to="/product">
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44,
                          }}
                        >
                          Elama Fine Round Gloss Dinnerware Dish Set
                        </h6>
                      </Link>
                      <h6 className="sold weight text-content fw-normal">
                        1 KG
                      </h6>
                      <h6 className="price theme-color">$ 80.00</h6>
                      <div className="add-to-cart-btn-2 addtocart_btn">
                        <button
                          className="btn addcart-button btn buy-button"
                          fdprocessedid="0o90vi"
                        >
                          <i className="fa-solid fa-plus" />
                        </button>
                        <div className="cart_qty qty-box-2">
                          <div className="input-group">
                            <button
                              type="button"
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa fa-minus" aria-hidden="true" />
                            </button>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={1}
                            />
                            <button
                              type="button"
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="product-box product-white-bg wow fadeIn"
                    data-wow-delay="0.1s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.1s",
                      animationName: "fadeIn",
                    }}
                  >
                    <div className="product-image">
                      <Link to="/product">
                        <img
                          src="../assets/images/furniture/8.png"
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
                          >
                            <svg
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
                          <Link to="/compare">
                            <svg
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
                          <Link to="/wishlist" className="notifi-wishlist">
                            <svg
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
                    <div className="product-detail position-relative">
                      <Link to="/product">
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44,
                          }}
                        >
                          Goddess Marble Hexagon Party Plates
                        </h6>
                      </Link>
                      <h6 className="sold weight text-content fw-normal">
                        1 KG
                      </h6>
                      <h6 className="price theme-color">$ 80.00</h6>
                      <div className="add-to-cart-btn-2 addtocart_btn">
                        <button
                          className="btn addcart-button btn buy-button"
                          fdprocessedid="ekj9mi"
                        >
                          <i className="fa-solid fa-plus" />
                        </button>
                        <div className="cart_qty qty-box-2">
                          <div className="input-group">
                            <button
                              type="button"
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa fa-minus" aria-hidden="true" />
                            </button>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={1}
                            />
                            <button
                              type="button"
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="product-box product-white-bg wow fadeIn"
                    style={{ visibility: "visible", animationName: "fadeIn" }}
                  >
                    <div className="product-image">
                      <Link to="/product">
                        <img
                          src="../assets/images/furniture/10.png"
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
                          >
                            <svg
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
                          <Link to="/compare">
                            <svg
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
                          <Link to="/wishlist" className="notifi-wishlist">
                            <svg
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
                    <div className="product-detail position-relative">
                      <Link to="/product">
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44,
                          }}
                        >
                          heavy duty cane round basket
                        </h6>
                      </Link>
                      <h6 className="sold weight text-content fw-normal">
                        1 KG
                      </h6>
                      <h6 className="price theme-color">$ 80.00</h6>
                      <div className="add-to-cart-btn-2 addtocart_btn">
                        <button
                          className="btn addcart-button btn buy-button"
                          fdprocessedid="wan6td"
                        >
                          <i className="fa-solid fa-plus" />
                        </button>
                        <div className="cart_qty qty-box-2">
                          <div className="input-group">
                            <button
                              type="button"
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa fa-minus" aria-hidden="true" />
                            </button>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={1}
                            />
                            <button
                              type="button"
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="product-box product-white-bg wow fadeIn"
                    data-wow-delay="0.1s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.1s",
                      animationName: "fadeIn",
                    }}
                  >
                    <div className="product-image">
                      <Link to="/product">
                        <img
                          src="../assets/images/furniture/6.png"
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
                          >
                            <svg
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
                          <Link to="/compare">
                            <svg
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
                          <Link to="/wishlist" className="notifi-wishlist">
                            <svg
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
                    <div className="product-detail position-relative">
                      <Link to="/product">
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44,
                          }}
                        >
                          Nature Baby Merino Knit Bassinet Blanket
                        </h6>
                      </Link>
                      <h6 className="sold weight text-content fw-normal">
                        1 KG
                      </h6>
                      <h6 className="price theme-color">$ 80.00</h6>
                      <div className="add-to-cart-btn-2 addtocart_btn">
                        <button
                          className="btn addcart-button btn buy-button"
                          fdprocessedid="e1iqq6"
                        >
                          <i className="fa-solid fa-plus" />
                        </button>
                        <div className="cart_qty qty-box-2">
                          <div className="input-group">
                            <button
                              type="button"
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa fa-minus" aria-hidden="true" />
                            </button>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={1}
                            />
                            <button
                              type="button"
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa fa-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="product-box product-white-bg wow fadeIn"
                    style={{ visibility: "visible", animationName: "fadeIn" }}
                  >
                    <div className="product-image">
                      <Link to="/product">
                        <img
                          src="../assets/images/furniture/4.png"
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
                          >
                            <svg
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
                          <Link to="/compare">
                            <svg
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
                          <Link to="/wishlist" className="notifi-wishlist">
                            <svg
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
                    <div className="product-detail position-relative">
                      <Link to="/product">
                        <h6
                          className="name"
                          style={{
                            minHeight: 0,
                            maxHeight: "none",
                            height: 44,
                          }}
                        >
                          ELSTONE HOME White Colour Bath Towel
                        </h6>
                      </Link>
                      <h6 className="sold weight text-content fw-normal">
                        1 KG
                      </h6>
                      <h6 className="price theme-color">$ 80.00</h6>
                      <div className="add-to-cart-btn-2 addtocart_btn">
                        <button
                          className="btn addcart-button btn buy-button"
                          fdprocessedid="slkla"
                        >
                          <i className="fa-solid fa-plus" />
                        </button>
                        <div className="cart_qty qty-box-2">
                          <div className="input-group">
                            <button
                              type="button"
                              className="qty-left-minus"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa fa-minus" aria-hidden="true" />
                            </button>
                            <input
                              className="form-control input-number qty-input"
                              type="text"
                              name="quantity"
                              defaultValue={1}
                            />
                            <button
                              type="button"
                              className="qty-right-plus"
                              data-type="plus"
                              data-field=""
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
            <div className="col-xxl-3 col-xl-4 d-none d-xl-block">
              <div className="p-sticky">
                <div className="category-menu">
                  <h3>Shop By Product</h3>
                  <ul className="border-bottom-0">
                    <li>
                      <div className="category-list">
                        <img
                          src="../assets/images/furniture/icon/decorations.svg"
                          className="blur-up lazyloaded"
                          alt=""
                        />
                        <h5>
                          <Link to="/shop">Decorations</Link>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <img
                          src="../assets/images/furniture/icon/pillows.svg"
                          className="blur-up lazyloaded"
                          alt=""
                        />
                        <h5>
                          <Link to="/shop">Bed Linen</Link>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <img
                          src="../assets/images/furniture/icon/cushions.svg"
                          className="blur-up lazyloaded"
                          alt=""
                        />
                        <h5>
                          <Link to="/shop">Cushions</Link>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <img
                          src="../assets/images/furniture/icon/blankets.svg"
                          className="blur-up lazyloaded"
                          alt=""
                        />
                        <h5>
                          <Link to="/shop">Blankets</Link>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <img
                          src="../assets/images/furniture/icon/gift.svg"
                          className="blur-up lazyloaded"
                          alt=""
                        />
                        <h5>
                          <Link to="/shop">Giftwraps</Link>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <img
                          src="../assets/images/furniture/icon/sleepware.svg"
                          className="blur-up lazyloaded"
                          alt=""
                        />
                        <h5>
                          <Link to="/shop">Sleepwear</Link>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <img
                          src="../assets/images/furniture/icon/bakeware.svg"
                          className="blur-up lazyloaded"
                          alt=""
                        />
                        <h5>
                          <Link to="/shop">Cookware &amp; Bakeware</Link>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <img
                          src="../assets/images/furniture/icon/room-fragrance.svg"
                          className="blur-up lazyloaded"
                          alt=""
                        />
                        <h5>
                          <Link to="/shop">Room Fragrance</Link>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <img
                          src="../assets/images/furniture/icon/tableware.svg"
                          className="blur-up lazyloaded"
                          alt=""
                        />
                        <h5>
                          <Link to="/shop">Servingware &amp; Tableware</Link>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <img
                          src="../assets/images/furniture/icon/shower.svg"
                          className="blur-up lazyloaded"
                          alt=""
                        />
                        <h5>
                          <Link to="/shop">Bath &amp; Shower</Link>
                        </h5>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="ratio_156 section-t-space">
                  <div
                    className="home-contain hover-effect bg-size blur-up lazyloaded"
                    style={{
                      backgroundImage:
                        'url("../assets/images/furniture/banner/3.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      display: "block",
                    }}
                  >
                    <img
                      src="../assets/images/furniture/banner/3.jpg"
                      className="bg-img blur-up lazyload"
                      alt=""
                      style={{ display: "none" }}
                    />
                    <div className="home-detail p-top-left home-p-medium">
                      <div>
                        <h4 className="text-yellow home-banner text-kaushan">
                          New Arrival
                        </h4>
                        <h3 className="text-uppercase theme-color fw-bold mb-1">
                          Desk Table
                        </h3>
                        <p className="text-content mb-3">
                          Top Selling Of The Week! Exclusive Offer!
                        </p>
                        <button
                          onclick="location.href = 'shop';"
                          className="btn btn-furniture btn-md mend-auto"
                          fdprocessedid="mng2l"
                        >
                          Shop Now{" "}
                          <i className="fa-solid fa-arrow-right icon" />
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
                          <Link to="/product" className="offer-image">
                            <img
                              src="../assets/images/furniture/2.png"
                              className="blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="offer-detail">
                            <div>
                              <Link to="/product" className="text-title">
                                <h6 className="name">
                                  Meatigo Premium Goat Curry
                                </h6>
                              </Link>
                              <span>450 G</span>
                              <h6 className="price theme-color">$ 70.00</h6>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="offer-product">
                          <Link to="/product" className="offer-image">
                            <img
                              src="../assets/images/furniture/3.png"
                              className="blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="offer-detail">
                            <div>
                              <Link to="/product" className="text-title">
                                <h6 className="name">Coral Bean Bag Chair</h6>
                              </Link>
                              <span>450 G</span>
                              <h6 className="price theme-color">$ 40.00</h6>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="mb-0">
                        <div className="offer-product">
                          <Link to="/product" className="offer-image">
                            <img
                              src="../assets/images/furniture/5.png"
                              className="blur-up lazyloaded"
                              alt=""
                            />
                          </Link>
                          <div className="offer-detail">
                            <div>
                              <Link to="/product" className="text-title">
                                <h6 className="name">
                                  Benefits of using natural stone tile flooring
                                </h6>
                              </Link>
                              <span>1 KG</span>
                              <h6 className="price theme-color">$ 80.00</h6>
                            </div>
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
      </section>

      {/* Product Section End */}
      {/* Banner Section Start */}
      <section className="banner-section">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div
                className="banner-contain-3 section-b-space section-t-space hover-effect overflow-visible"
                style={{
                  backgroundImage:
                    'url("../assets/images/furniture/banner/6.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block",
                }}
              >
                {/* <img
                  src="../assets/images/furniture/banner/6.jpg"
                  className="bg-img"
                  alt=""
                /> */}
                {/* <img
                  src="../assets/images/furniture/banner/1-1.png"
                  className="flower-pot img-fluid"
                  alt=""
                /> */}
                <div className="banner-detail p-center-left position-relative d-block py-0 banner-furniture mend-auto">
                  <div className="row">
                    <div className="col-xl-6 offset-xxl-2 offset-xl-1 col-md-8 col-sm-9">
                      <h4 className="text-uppercase text-yellow text-kaushan furniture-title">
                        Best of Collections{" "}
                        <img
                          src="../assets/images/furniture/arrow.svg"
                          alt=""
                        />
                      </h4>
                      <h2 className="mt-sm-3 mt-1 mb-2 text-content">
                        Home Decor{" "}
                        <span className="theme-color fw-bold">LookBook</span>{" "}
                        2022
                      </h2>
                      <p className="text-content">
                        In publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to demonstrate.
                      </p>
                      <button
                        className="btn theme-bg-color mt-sm-4 mt-2 btn-md text-white fw-bold"
                        // onclick="location.href = 'shop';"
                        onClick={() => {
                          window.location.href = "/shop";
                        }}
                      >
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End */}
      {/* Best Seller Section Start */}
      <section>
        <div className="container-fluid-lg">
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
            className="banner-slider product-wrapper wow fadeInUp slick-initialized slick-slider"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
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
                  <ul className="product-list">
                    <li>
                      <div className="offer-product">
                        <Link
                          to="/product"
                          className="offer-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/furniture/1.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="offer-detail">
                          <div>
                            <Link
                              to="/product"
                              className="text-title"
                              tabIndex={0}
                            >
                              <h6 className="name">
                                Home Decor Lucky Deer Family Matte Finish
                              </h6>
                            </Link>
                            <span>500 G</span>
                            <h6 className="price theme-color">$ 10.00</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="offer-product">
                        <Link
                          to="/product"
                          className="offer-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/furniture/2.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="offer-detail">
                          <div>
                            <Link
                              to="/product"
                              className="text-title"
                              tabIndex={0}
                            >
                              <h6 className="name">Potato</h6>
                            </Link>
                            <span>500 G</span>
                            <h6 className="price theme-color">$ 10.00</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="offer-product">
                        <Link
                          to="/product"
                          className="offer-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/furniture/3.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="offer-detail">
                          <div>
                            <Link
                              to="/product"
                              className="text-title"
                              tabIndex={0}
                            >
                              <h6 className="name">Coral Bean Bag Chair</h6>
                            </Link>
                            <span>200 G</span>
                            <h6 className="price theme-color">$ 10.00</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="offer-product">
                        <Link
                          to="/product"
                          className="offer-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/furniture/4.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="offer-detail">
                          <div>
                            <Link
                              to="/product"
                              className="text-title"
                              tabIndex={0}
                            >
                              <h6 className="name">
                                ELSTONE HOME White Colour Bath Towel
                              </h6>
                            </Link>
                            <span>150 G</span>
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
                        <Link
                          to="/product"
                          className="offer-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/furniture/5.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="offer-detail">
                          <div>
                            <Link
                              to="/product"
                              className="text-title"
                              tabIndex={0}
                            >
                              <h6 className="name">
                                Benefits of using natural stone tile flooring
                              </h6>
                            </Link>
                            <span>500 G</span>
                            <h6 className="price theme-color">$ 10.00</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="offer-product">
                        <Link
                          to="/product"
                          className="offer-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/furniture/6.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="offer-detail">
                          <div>
                            <Link
                              to="/product"
                              className="text-title"
                              tabIndex={0}
                            >
                              <h6 className="name">
                                Nature Baby Merino Knit Bassinet Blanket
                              </h6>
                            </Link>
                            <span>1 L</span>
                            <h6 className="price theme-color">$ 10.00</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="offer-product">
                        <Link
                          to="/product"
                          className="offer-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/furniture/7.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="offer-detail">
                          <div>
                            <Link
                              to="/product"
                              className="text-title"
                              tabIndex={0}
                            >
                              <h6 className="name">Wooden Tea Cup Coaster</h6>
                            </Link>
                            <span>1 KG</span>
                            <h6 className="price theme-color">$ 10.00</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="offer-product">
                        <Link
                          to="/product"
                          className="offer-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/furniture/8.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="offer-detail">
                          <div>
                            <Link
                              to="/product"
                              className="text-title"
                              tabIndex={0}
                            >
                              <h6 className="name">Goddess Marble Hexagon</h6>
                            </Link>
                            <span>150 G</span>
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
                        <Link
                          to="/product"
                          className="offer-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/furniture/9.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="offer-detail">
                          <div>
                            <Link
                              to="/product"
                              className="text-title"
                              tabIndex={0}
                            >
                              <h6 className="name">
                                Handmade Brown Mango Wooden Tray Square
                              </h6>
                            </Link>
                            <span>1 L</span>
                            <h6 className="price theme-color">$ 10.00</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="offer-product">
                        <Link
                          to="/product"
                          className="offer-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/furniture/10.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="offer-detail">
                          <div>
                            <Link
                              to="/product"
                              className="text-title"
                              tabIndex={0}
                            >
                              <h6 className="name">
                                heavy duty cane round basket
                              </h6>
                            </Link>
                            <span>500 G</span>
                            <h6 className="price theme-color">$ 10.00</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="offer-product">
                        <Link
                          to="/product"
                          className="offer-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/furniture/11.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="offer-detail">
                          <div>
                            <Link
                              to="/product"
                              className="text-title"
                              tabIndex={0}
                            >
                              <h6 className="name">
                                WaahKart Antique Fiber Flower Vase
                              </h6>
                            </Link>
                            <span>1 KG</span>
                            <h6 className="price theme-color">$ 10.00</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="offer-product">
                        <Link
                          to="/product"
                          className="offer-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/furniture/12.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="offer-detail">
                          <div>
                            <Link
                              to="/product"
                              className="text-title"
                              tabIndex={0}
                            >
                              <h6 className="name">Towels Cotton Soft</h6>
                            </Link>
                            <span>160 ML</span>
                            <h6 className="price theme-color">$ 10.00</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className="slick-slide slick-active"
                  data-slick-index={3}
                  aria-hidden="false"
                  tabIndex={0}
                  style={{ width: 323 }}
                >
                  <ul className="product-list">
                    <li>
                      <div className="offer-product">
                        <Link
                          to="/product"
                          className="offer-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/furniture/13.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="offer-detail">
                          <div>
                            <Link
                              to="/product"
                              className="text-title"
                              tabIndex={0}
                            >
                              <h6 className="name">Gloss Dinnerware Dish</h6>
                            </Link>
                            <span>500 G</span>
                            <h6 className="price theme-color">$ 10.00</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="offer-product">
                        <Link
                          to="/product"
                          className="offer-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/furniture/14.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="offer-detail">
                          <div>
                            <Link
                              to="/product"
                              className="text-title"
                              tabIndex={0}
                            >
                              <h6 className="name">
                                Marble Small Amenity Tray
                              </h6>
                            </Link>
                            <span>1 L</span>
                            <h6 className="price theme-color">$ 10.00</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="offer-product">
                        <Link
                          to="/product"
                          className="offer-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/furniture/5.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="offer-detail">
                          <div>
                            <Link
                              to="/product"
                              className="text-title"
                              tabIndex={0}
                            >
                              <h6 className="name">
                                Benefits of using natural stone tile flooring
                              </h6>
                            </Link>
                            <span>1 KG</span>
                            <h6 className="price theme-color">$ 10.00</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="offer-product">
                        <Link
                          to="/product"
                          className="offer-image"
                          tabIndex={0}
                        >
                          <img
                            src="../assets/images/furniture/9.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                        </Link>
                        <div className="offer-detail">
                          <div>
                            <Link
                              to="/product"
                              className="text-title"
                              tabIndex={0}
                            >
                              <h6 className="name">
                                Handmade Brown Mango Wooden Tray Square
                              </h6>
                            </Link>
                            <span>150 G</span>
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
        </div>
      </section>

      {/* Best Seller Section End */}
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
      <footer className="section-t-space footer-section-2 footer-color-3">
        <div className="container-fluid-lg">
          <div className="main-footer">
            <div className="row g-md-4 gy-sm-5">
              <div className="col-xxl-3 col-xl-4 col-sm-6">
                <Link to="/index" className="foot-logo theme-logo">
                  <img
                    src="../assets/images/logo/logo_white.png"
                    className="img-fluid  lazyload"
                    alt=""
                  />
                </Link>
                <p className="information-text information-text-2">
                  it is a long established fact that a reader will be distracted
                  by the readable content.
                </p>
                <ul className="social-icon">
                  <li className="light-bg">
                    <Link
                      to="https://www.facebook.com/"
                      className="footer-link-color"
                    >
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li className="light-bg">
                    <Link
                      to="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                      className="footer-link-color"
                    >
                      <i className="fab fa-google" />
                    </Link>
                  </li>
                  <li className="light-bg">
                    <Link
                      to="https://twitter.com/i/flow/login"
                      className="footer-link-color"
                    >
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li className="light-bg">
                    <Link
                      to="https://www.instagram.com/"
                      className="footer-link-color"
                    >
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                  <li className="light-bg">
                    <Link
                      to="https://in.pinterest.com/"
                      className="footer-link-color"
                    >
                      <i className="fab fa-pinterest-p" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-xxl-2 col-xl-4 col-sm-6">
                <div className="footer-title">
                  <h4 className="text-white">About TechGropse eCommerce</h4>
                </div>
                <ul className="footer-list footer-contact footer-list-light">
                  <li>
                    <Link to="/about-us" className="light-text">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us" className="light-text">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="light-text">
                      Latest Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-xxl-2 col-xl-4 col-sm-6">
                <div className="footer-title">
                  <h4 className="text-white">Useful Link</h4>
                </div>
                <ul className="footer-list footer-list-light footer-contact">
                  <li>
                    <Link to="/order-success" className="light-text">
                      Your Order
                    </Link>
                  </li>
                  <li>
                    <Link to="/user-dashboard" className="light-text">
                      Your Account
                    </Link>
                  </li>
                  <li>
                    <Link to="/order-tracking" className="light-text">
                      Track Orders
                    </Link>
                  </li>
                  <li>
                    <Link to="/wishlist" className="light-text">
                      Your Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="light-text">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-xxl-2 col-xl-4 col-sm-6">
                <div className="footer-title">
                  <h4 className="text-white">Categories</h4>
                </div>
                <ul className="footer-list footer-list-light footer-contact">
                  <li>
                    <Link to="/shop" className="light-text">
                      Fresh Vegetables
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop" className="light-text">
                      Hot Spice
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop" className="light-text">
                      Brand New Bags
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop" className="light-text">
                      New Bakery
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop" className="light-text">
                      New Grocery
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-xxl-3 col-xl-4 col-sm-6">
                <div className="footer-title">
                  <h4 className="text-white">Store infomation</h4>
                </div>
                <ul className="footer-address footer-contact">
                  <li>
                    <Link to="#" className="light-text">
                      <div className="inform-box flex-start-box">
                        <i data-feather="map-pin" />
                        <p>
                          TechGropse eCommerce Demo Store, Demo store india 345
                          - 659
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="light-text">
                      <div className="inform-box">
                        <i data-feather="phone" />
                        <p>Call us: 123-456-7890</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="light-text">
                      <div className="inform-box">
                        <i data-feather="mail" />
                        <p>Email Us: Support@dummy.com</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="light-text">
                      <div className="inform-box">
                        <i data-feather="printer" />
                        <p>Fax: 123456</p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sub-footer sub-footer-lite section-b-space section-t-space">
            <div className="left-footer">
              <p className="light-text">
                2023 Copyright By TechGropse eCommerce
              </p>
            </div>
            <ul className="payment-box">
              <li>
                <img
                  src="../assets/images/icon/paymant/visa.png"
                  className=" lazyload"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="../assets/images/icon/paymant/discover.png"
                  alt=""
                  className=" lazyload"
                />
              </li>
              <li>
                <img
                  src="../assets/images/icon/paymant/american.png"
                  alt=""
                  className=" lazyload"
                />
              </li>
              <li>
                <img
                  src="../assets/images/icon/paymant/master-card.png"
                  alt=""
                  className=" lazyload"
                />
              </li>
              <li>
                <img
                  src="../assets/images/icon/paymant/giro-pay.png"
                  alt=""
                  className=" lazyload"
                />
              </li>
            </ul>
          </div>
        </div>
      </footer>
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
                      src="../assets/images/furniture/5.png"
                      className="img-fluid  lazyload"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-sidebar-modal">
                    <h4 className="title-name">
                      Handmade Brown Mango Wooden Tray Square
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
                        //  onclick="location.href = 'cart';"
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
                          src="../assets/images/furniture/10.png"
                          className=" lazyload"
                          alt=""
                        />
                      </Link>
                      <Link to="/shop" className="deal-contain">
                        <h5>Handmade Brown Mango Wooden Tray Square</h5>
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
                          src="../assets/images/furniture/9.png"
                          className=" lazyload"
                          alt=""
                        />
                      </Link>
                      <Link to="/shop" className="deal-contain">
                        <h5>heavy duty cane round basket</h5>
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
                          src="../assets/images/furniture/10.png"
                          className=" lazyload"
                          alt=""
                        />
                      </Link>
                      <Link to="/shop" className="deal-contain">
                        <h5>Handmade Brown Mango Wooden Tray Square</h5>
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

export default IndexFurniture;
