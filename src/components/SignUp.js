import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { UserSignUp } from "./HttpServices";
import Header from "./Header";
import Footer from "./Footer";
import { useUserSignUpMutation } from "../services/Post";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { Button } from "rsuite";

function SignUp() {
  const [signup, res] = useUserSignUpMutation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);
  console.log(longitude);
  console.log(latitude);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();
  useEffect(() => {
    if (res.isSuccess) {
      Swal.fire({
        title: "SignUp Successful!",
        icon: "success",
        text: "You have successfully Sign Up.",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
          setTimeout(() => {
            window?.location?.reload();
          }, 500);
        }
      });
    } else if (res.isError) {
      const errorData = res.error?.data?.errors;
      if (errorData && errorData.length > 0) {
        const errorMessage = errorData[0].msg;
        Swal.fire({
          title: "SignUp Error",
          icon: "error",
          text: errorMessage,
        });
      } else {
        Swal.fire({
          title: "SignUp Failed!",
          icon: "error",
          text: res.error?.data?.message || "An unknown error occurred.",
        });
      }
    }
  }, [res, navigate]);

  const handleSaveChanges = async (data) => {
    try {
      const requestBody = {
        userName: data?.fullname,
        userEmail: data?.email,
        password: password,
        mobileNumber: data?.phoneNumber,
      };

      if (longitude !== null && latitude !== null) {
        requestBody.longitude = longitude;
        requestBody.latitude = latitude;
      }

      const response = await signup(requestBody);
      console.log("response login", response);
    } catch (error) {
      console.error("Sign up error:", error);
      Swal.fire({
        title: "SignUp Failed!",
        icon: "error",
        text: "An error occurred during SignUp.",
      });
    }
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
      {/* <Header /> */}
      <header className="pb-md-4 pb-0">
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
                          <a href="shop.html" className="text-white">
                            Buy Now !
                          </a>
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
                          <a className="dropdown-item" href="#" id="english">
                            <img
                              src="../assets/images/country/united-kingdom.png"
                              className="img-fluid  lazyload"
                              alt=""
                            />
                            <span>English</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#" id="france">
                            <img
                              src="../assets/images/country/germany.png"
                              className="img-fluid  lazyload"
                              alt=""
                            />
                            <span>Germany</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#" id="chinese">
                            <img
                              src="../assets/images/country/turkish.png"
                              className="img-fluid  lazyload"
                              alt=""
                            />
                            <span>Turki</span>
                          </a>
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
                          <a className="dropdown-item" id="aud" href="#">
                            AUD
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" id="eur" href="#">
                            EUR
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" id="cny" href="#">
                            CNY
                          </a>
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
                    className="navbar-toggler d-xl-none d-inline navbar-menu-button"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#primaryMenu"
                  >
                    <span className="navbar-toggler-icon">
                      <i className="fa-solid fa-bars" />
                    </span>
                  </button>
                  <a href="index-1-grocery.html" className="web-logo nav-logo">
                    <img
                      src="../assets/images/logo/logo.png"
                      className="img-fluid  lazyload"
                      alt=""
                    />
                  </a>
                  <div className="middle-box">
                    <div className="location-box">
                      <button
                        className="btn location-button"
                        data-bs-toggle="modal"
                        data-bs-target="#locationModal"
                      >
                        <span className="location-arrow">
                          <i data-feather="map-pin" />
                        </span>
                        <span className="locat-name">Your Location</span>
                        <i className="fa-solid fa-angle-down" />
                      </button>
                    </div>
                    <div className="search-box">
                      <div className="input-group">
                        <input
                          type="search"
                          className="form-control"
                          placeholder="I'm searching for..."
                          aria-label="Recipient's username"
                          aria-describedby="button-addon2"
                        />
                        <button
                          className="btn"
                          type="button"
                          id="button-addon2"
                        >
                          <i data-feather="search" />
                        </button>
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
                        <a
                          href="contact-us.html"
                          className="delivery-login-box"
                        >
                          <div className="delivery-icon">
                            <i data-feather="phone-call" />
                          </div>
                          <div className="delivery-detail">
                            <h6>24/7 Delivery</h6>
                            <h5>+91 888 104 2340</h5>
                          </div>
                        </a>
                      </li>
                      <li className="right-side">
                        <a
                          href="wishlist.html"
                          className="btn p-0 position-relative header-wishlist"
                        >
                          <i data-feather="heart" />
                        </a>
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
                                  <a href="#" className="drop-image">
                                    <img
                                      src="../assets/images/vegetable/product/1.png"
                                      className=" lazyload"
                                      alt=""
                                    />
                                  </a>
                                  <div className="drop-contain">
                                    <a href="#">
                                      <h5>
                                        Fantasy Crunchy Choco Chip Cookies
                                      </h5>
                                    </a>
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
                                  <a href="#" className="drop-image">
                                    <img
                                      src="../assets/images/vegetable/product/2.png"
                                      className=" lazyload"
                                      alt=""
                                    />
                                  </a>
                                  <div className="drop-contain">
                                    <a href="#">
                                      <h5>
                                        Peanut Butter Bite Premium Butter
                                        Cookies 600 g
                                      </h5>
                                    </a>
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
                              <a href="#" className="btn btn-sm cart-button">
                                View Cart
                              </a>
                              <a
                                href="#"
                                className="btn btn-sm cart-button theme-bg-color
                                      text-white"
                              >
                                Checkout
                              </a>
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
                              <a href="#">Log In</a>
                            </li>
                            <li className="product-box-contain">
                              <a href="/sign-up">Register</a>
                            </li>
                            <li className="product-box-contain">
                              <a href="/forgot">Forgot Password</a>
                            </li>
                            <li className="product-box-contain">
                              <a href="/">Logout</a>
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
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="header-nav">
                <div className="header-nav-left">
                  <button className="dropdown-category">
                    <i data-feather="align-left" />
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
                        <a href="#" className="category-name">
                          <img src="../assets/svg/1/vegetable.svg" alt="" />
                          <h6>Vegetables &amp; Fruit</h6>
                          <i className="fa-solid fa-angle-right" />
                        </a>
                        <div className="onhover-category-box">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Organic Vegetables</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="#">Potato &amp; Tomato</a>
                              </li>
                              <li>
                                <a href="#">Cucumber &amp; Capsicum</a>
                              </li>
                              <li>
                                <a href="#">Leafy Vegetables</a>
                              </li>
                              <li>
                                <a href="#">Root Vegetables</a>
                              </li>
                              <li>
                                <a href="#">Beans &amp; Okra</a>
                              </li>
                              <li>
                                <a href="#">Cabbage &amp; Cauliflower</a>
                              </li>
                              <li>
                                <a href="#">Gourd &amp; Drumstick</a>
                              </li>
                              <li>
                                <a href="#">Specialty</a>
                              </li>
                            </ul>
                          </div>
                          <div className="list-2">
                            <div className="category-title-box">
                              <h5>Fresh Fruit</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="#">Banana &amp; Papaya</a>
                              </li>
                              <li>
                                <a href="#">Kiwi, Citrus Fruit</a>
                              </li>
                              <li>
                                <a href="#">Apples &amp; Pomegranate</a>
                              </li>
                              <li>
                                <a href="#">Seasonal Fruits</a>
                              </li>
                              <li>
                                <a href="#">Mangoes</a>
                              </li>
                              <li>
                                <a href="#">Fruit Baskets</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="onhover-category-list">
                        <a href="#" className="category-name">
                          <img src="../assets/svg/1/cup.svg" alt="" />
                          <h6>Beverages</h6>
                          <i className="fa-solid fa-angle-right" />
                        </a>
                        <div className="onhover-category-box w-100">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Energy &amp; Soft Drinks</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="#">Soda &amp; Cocktail Mix</a>
                              </li>
                              <li>
                                <a href="#">Soda &amp; Cocktail Mix</a>
                              </li>
                              <li>
                                <a href="#">Sports &amp; Energy Drinks</a>
                              </li>
                              <li>
                                <a href="#">Non Alcoholic Drinks</a>
                              </li>
                              <li>
                                <a href="#">Packaged Water</a>
                              </li>
                              <li>
                                <a href="#">Spring Water</a>
                              </li>
                              <li>
                                <a href="#">Flavoured Water</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="onhover-category-list">
                        <a href="#" className="category-name">
                          <img src="../assets/svg/1/meats.svg" alt="" />
                          <h6>Meats &amp; Seafood</h6>
                          <i className="fa-solid fa-angle-right" />
                        </a>
                        <div className="onhover-category-box">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Meat</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="#">Fresh Meat</a>
                              </li>
                              <li>
                                <a href="#">Frozen Meat</a>
                              </li>
                              <li>
                                <a href="#">Marinated Meat</a>
                              </li>
                              <li>
                                <a href="#">Fresh &amp; Frozen Meat</a>
                              </li>
                            </ul>
                          </div>
                          <div className="list-2">
                            <div className="category-title-box">
                              <h5>Seafood</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="#">Fresh Water Fish</a>
                              </li>
                              <li>
                                <a href="#">Dry Fish</a>
                              </li>
                              <li>
                                <a href="#">Frozen Fish &amp; Seafood</a>
                              </li>
                              <li>
                                <a href="#">Marine Water Fish</a>
                              </li>
                              <li>
                                <a href="#">Canned Seafood</a>
                              </li>
                              <li>
                                <a href="#">Prawans &amp; Shrimps</a>
                              </li>
                              <li>
                                <a href="#">Other Seafood</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="onhover-category-list">
                        <a href="#" className="category-name">
                          <img src="../assets/svg/1/breakfast.svg" alt="" />
                          <h6>Breakfast &amp; Dairy</h6>
                          <i className="fa-solid fa-angle-right" />
                        </a>
                        <div className="onhover-category-box">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Breakfast Cereals</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="#">Oats &amp; Porridge</a>
                              </li>
                              <li>
                                <a href="#">Kids Cereal</a>
                              </li>
                              <li>
                                <a href="#">Muesli</a>
                              </li>
                              <li>
                                <a href="#">Flakes</a>
                              </li>
                              <li>
                                <a href="#">Granola &amp; Cereal Bars</a>
                              </li>
                              <li>
                                <a href="#">Instant Noodles</a>
                              </li>
                              <li>
                                <a href="#">Pasta &amp; Macaroni</a>
                              </li>
                              <li>
                                <a href="#">Frozen Non-Veg Snacks</a>
                              </li>
                            </ul>
                          </div>
                          <div className="list-2">
                            <div className="category-title-box">
                              <h5>Dairy</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="#">Milk</a>
                              </li>
                              <li>
                                <a href="#">Curd</a>
                              </li>
                              <li>
                                <a href="#">Paneer, Tofu &amp; Cream</a>
                              </li>
                              <li>
                                <a href="#">Butter &amp; Margarine</a>
                              </li>
                              <li>
                                <a href="#">Condensed, Powdered Milk</a>
                              </li>
                              <li>
                                <a href="#">Buttermilk &amp; Lassi</a>
                              </li>
                              <li>
                                <a href="#">Yogurt &amp; Shrikhand</a>
                              </li>
                              <li>
                                <a href="#">Flavoured, Soya Milk</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="onhover-category-list">
                        <a href="#" className="category-name">
                          <img src="../assets/svg/1/frozen.svg" alt="" />
                          <h6>Frozen Foods</h6>
                          <i className="fa-solid fa-angle-right" />
                        </a>
                        <div className="onhover-category-box w-100">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Noodle, Pasta</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="#">Instant Noodles</a>
                              </li>
                              <li>
                                <a href="#">Hakka Noodles</a>
                              </li>
                              <li>
                                <a href="#">Cup Noodles</a>
                              </li>
                              <li>
                                <a href="#">Vermicelli</a>
                              </li>
                              <li>
                                <a href="#">Instant Pasta</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="onhover-category-list">
                        <a href="#" className="category-name">
                          <img src="../assets/svg/1/biscuit.svg" alt="" />
                          <h6>Biscuits &amp; Snacks</h6>
                          <i className="fa-solid fa-angle-right" />
                        </a>
                        <div className="onhover-category-box">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Biscuits &amp; Cookies</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="#">Salted Biscuits</a>
                              </li>
                              <li>
                                <a href="#">Marie, Health, Digestive</a>
                              </li>
                              <li>
                                <a href="#">Cream Biscuits &amp; Wafers</a>
                              </li>
                              <li>
                                <a href="#">Glucose &amp; Milk Biscuits</a>
                              </li>
                              <li>
                                <a href="#">Cookies</a>
                              </li>
                            </ul>
                          </div>
                          <div className="list-2">
                            <div className="category-title-box">
                              <h5>Bakery Snacks</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="#">Bread Sticks &amp; Lavash</a>
                              </li>
                              <li>
                                <a href="#">Cheese &amp; Garlic Bread</a>
                              </li>
                              <li>
                                <a href="#">Puffs, Patties, Sandwiches</a>
                              </li>
                              <li>
                                <a href="#">Breadcrumbs &amp; Croutons</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="onhover-category-list">
                        <a href="#" className="category-name">
                          <img src="../assets/svg/1/grocery.svg" alt="" />
                          <h6>Grocery &amp; Staples</h6>
                          <i className="fa-solid fa-angle-right" />
                        </a>
                        <div className="onhover-category-box">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Grocery</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="#">Lemon, Ginger &amp; Garlic</a>
                              </li>
                              <li>
                                <a href="#">Indian &amp; Exotic Herbs</a>
                              </li>
                              <li>
                                <a href="#">Organic Vegetables</a>
                              </li>
                              <li>
                                <a href="#">Organic Fruits</a>
                              </li>
                            </ul>
                          </div>
                          <div className="list-2">
                            <div className="category-title-box">
                              <h5>Organic Staples</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="#">Organic Dry Fruits</a>
                              </li>
                              <li>
                                <a href="#">Organic Dals &amp; Pulses</a>
                              </li>
                              <li>
                                <a href="#">Organic Millet &amp; Flours</a>
                              </li>
                              <li>
                                <a href="#">Organic Sugar, Jaggery</a>
                              </li>
                              <li>
                                <a href="#">Organic Masalas &amp; Spices</a>
                              </li>
                              <li>
                                <a href="#">Organic Rice, Other Rice</a>
                              </li>
                              <li>
                                <a href="#">Organic Flours</a>
                              </li>
                              <li>
                                <a href="#">Organic Edible Oil, Ghee</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
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
                            <a className="nav-link" href="#">
                              Home
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              Shop
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              Product
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link dropdown-toggle" href="#">
                              About Us
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link dropdown-toggle" href="#">
                              Contact Us
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link dropdown-toggle" href="#">
                              Blog
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header-nav-right">
                  <button
                    className="btn deal-button"
                    // data-bs-toggle="modal"
                    // data-bs-target="#deal-box"
                  >
                    <i data-feather="zap" />
                    <span>Deal Today</span>
                  </button>
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
            <Link to="*">
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
      {/* Breadcrumb Section Start */}
      <section className="breadscrumb-section pt-0">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="breadscrumb-contain">
                <h2>Sign In</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/index">
                        <i className="fa-solid fa-house" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">Sign In</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}
      {/* log in section start */}
      <section className="log-in-section section-b-space">
        <div className="container-fluid-lg w-100">
          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
              <div className="image-contain">
                <img
                  src="../assets/images/inner-page/sign-up.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
              <div className="log-in-box">
                <div className="log-in-title">
                  <h3>Welcome to Techgropse eCommerce</h3>
                  <h4>Create New Account</h4>
                </div>
                <div className="input-box">
                  <form
                    className="row g-4"
                    onSubmit={handleSubmit(handleSaveChanges)}
                  >
                    <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input
                          type="text"
                          // className="form-control"
                          id="fullname"
                          placeholder="Full Name"
                          // value={fullName}
                          // onChange={(e) => setFullName(e.target.value)}
                          className={classNames(
                            "form-control  border border-secondary signup_fields",
                            { "is-invalid": errors.fullname }
                          )}
                          {...register("fullname", {
                            required: "Enter Your Full Name*",
                            pattern: {
                              value: /^[^*|\":<>[\]{}`\\()';@$]+$/,
                              message: "Special Character not allowed",
                            },
                          })}
                        />
                        {errors.fullname && (
                          <small className="errorText mx-1 fw-bold text-danger">
                            {errors.fullname?.message}
                          </small>
                        )}
                        <label htmlFor="fullname">Full Name</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email Address"
                          // value={email}
                          // onChange={(e) => setEmail(e.target.value)}
                          {...register("email", {
                            required: "Email is Required*",
                            pattern: {
                              value:
                                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              message: "Invalid email address",
                            },
                          })}
                        />
                        {errors.email && (
                          <small className="errorText mx-1 fw-bold text-danger">
                            {errors.email?.message}
                          </small>
                        )}
                        <label htmlFor="email">Email Address</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input
                          type="number"
                          // className="form-control"
                          className={classNames(
                            "form-control  border border-secondary signup_fields ",
                            { "is-invalid": errors.phoneNumber }
                          )}
                          id="mobileNumber"
                          placeholder="**********"
                          // value={email}
                          // onChange={(e) => setMobileNumber(e.target.value)}
                          {...register("phoneNumber", {
                            required: "Phone Number is Required*",
                            maxLength: {
                              value: 10,
                              message: "maximium 10 Charcarters",
                            },
                            minLength: {
                              value: 8,
                              message: "minimium 8 Charcarters",
                            },
                          })}
                        />
                        {errors.phoneNumber && (
                          <small className="errorText mx-1 fw-bold text-danger">
                            {errors.phoneNumber?.message}
                          </small>
                        )}
                        <label htmlFor="email">Mobile Number</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Password"
                          // value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        {passwordError && (
                          <span className="error-message text-danger">
                            {passwordError}
                          </span>
                        )}
                        <label htmlFor="password">Password</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="forgot-box">
                        <div className="form-check ps-0 m-0 remember-box">
                          <input
                            className="checkbox_animated check-box"
                            type="checkbox"
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            I agree with
                            <span>Terms</span> and <span>Privacy</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-animation w-100"
                        type="submit"
                        // onClick={handleSaveChanges}
                        loading={loader}
                        appearance="primary"
                        style={{ backgroundColor: "#3e4093", color: "#fff" }}
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
                <div className="other-log-in">
                  <h6>or</h6>
                </div>
                <div className="log-in-button">
                  <ul>
                    <li>
                      <Link
                        to="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                        className="btn google-button w-100"
                      >
                        <img
                          src="../assets/images/inner-page/google.png"
                          className=" lazyload"
                          alt=""
                        />
                        Sign up with Google
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.facebook.com/"
                        className="btn google-button w-100"
                      >
                        <img
                          src="../assets/images/inner-page/facebook.png"
                          className=" lazyload"
                          alt=""
                        />{" "}
                        Sign up with Facebook
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="other-log-in">{/* <h6 /> */}</div>
                <div className="sign-up-box">
                  <h4>Already have an account?</h4>
                  <Link to="/">Log In</Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-6" />
          </div>
        </div>
      </section>
      {/* log in section end */}
      <Footer />
      {/* Tap to top start */}
      <div className="theme-option">
        <div className="setting-box">
          <button className="btn setting-button">
            <i className="fa-solid fa-gear" />
          </button>
          <div className="theme-setting-2">
            <div className="theme-box">
              <ul>
                <li>
                  <div className="setting-name">
                    <h4>Color</h4>
                  </div>
                  <div className="theme-setting-button color-picker">
                    <form className="form-control">
                      <label htmlFor="colorPick" className="form-label mb-0">
                        Theme Color
                      </label>
                      <input
                        type="color"
                        className="form-control form-control-color"
                        id="colorPick"
                        defaultValue="#0da487"
                        title="Choose your color"
                      />
                    </form>
                  </div>
                </li>
                <li>
                  <div className="setting-name">
                    <h4>Dark</h4>
                  </div>
                  <div className="theme-setting-button">
                    <button className="btn btn-2 outline" id="darkButton">
                      Dark
                    </button>
                    <button className="btn btn-2 unline" id="lightButton">
                      Light
                    </button>
                  </div>
                </li>
                <li>
                  <div className="setting-name">
                    <h4>RTL</h4>
                  </div>
                  <div className="theme-setting-button rtl">
                    <button className="btn btn-2 rtl-unline">LTR</button>
                    <button className="btn btn-2 rtl-outline">RTL</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
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

export default SignUp;
