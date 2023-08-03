import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Header";
import Footer from "./Footer";

export default function AboutUs() {
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
  <Header/>
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
                <h2>About Us</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/index">
                        <i className="fa-solid fa-house" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      About Us
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Section End */}
      {/* Fresh Vegetable Section Start */}
      <section className="fresh-vegetable-section section-lg-space">
        <div className="container-fluid-lg">
          <div className="row gx-xl-5 gy-xl-0 g-3 ratio_148_1">
            <div className="col-xl-6 col-12">
              <div className="row g-sm-4 g-2">
                <div className="col-6">
                  <div className="fresh-image-2">
                    <div
                      className="bg-size  lazyloaded"
                      style={{
                        backgroundImage:
                          'url("../assets/images/inner-page/about-us/1.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block",
                      }}
                    >
                      <img
                        src="../assets/images/inner-page/about-us/1.jpg"
                        className="bg-img  lazyloaded"
                        alt=""
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="fresh-image">
                    <div
                      className="bg-size  lazyloaded"
                      style={{
                        backgroundImage:
                          'url("../assets/images/inner-page/about-us/2.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block",
                      }}
                    >
                      <img
                        src="../assets/images/inner-page/about-us/2.jpg"
                        className="bg-img  lazyloaded"
                        alt=""
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-12">
              <div className="fresh-contain p-center-left">
                <div>
                  <div className="review-title">
                    <h4>About Us</h4>
                    <h2>We make Organic Food In Market</h2>
                  </div>
                  <div className="delivery-list">
                    <p className="text-content">
                      Just a few seconds to measure your body temperature. Up to
                      5 users! The battery lasts up to 2 years. There are many
                      variations of passages of Lorem Ipsum available.We started
                      in 2019 and haven't stopped smashing it since. A global
                      brand that doesn't sleep, we are 24/7 and always bringing
                      something new with over 100 new products dropping on the
                      monhtly, bringing you the latest looks for less.
                    </p>
                    <ul className="delivery-box">
                      <li>
                        <div className="delivery-box">
                          <div className="delivery-icon">
                            <img
                              src="../assets/svg/3/delivery.svg"
                              className=" lazyloaded"
                              alt=""
                            />
                          </div>
                          <div className="delivery-detail">
                            <h5 className="text">
                              Free delivery for all orders
                            </h5>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="delivery-box">
                          <div className="delivery-icon">
                            <img
                              src="../assets/svg/3/leaf.svg"
                              className=" lazyloaded"
                              alt=""
                            />
                          </div>
                          <div className="delivery-detail">
                            <h5 className="text">Only fresh foods</h5>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="delivery-box">
                          <div className="delivery-icon">
                            <img
                              src="../assets/svg/3/delivery.svg"
                              className=" lazyloaded"
                              alt=""
                            />
                          </div>
                          <div className="delivery-detail">
                            <h5 className="text">
                              Free delivery for all orders
                            </h5>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="delivery-box">
                          <div className="delivery-icon">
                            <img
                              src="../assets/svg/3/leaf.svg"
                              className=" lazyloaded"
                              alt=""
                            />
                          </div>
                          <div className="delivery-detail">
                            <h5 className="text">Only fresh foods</h5>
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

      {/* Fresh Vegetable Section End */}
      {/* Client Section Start */}
      <section className="client-section section-lg-space">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="about-us-title text-center">
                <h4>What We Do</h4>
                <h2 className="center">We are Trusted by Clients</h2>
              </div>
              <div className="slider-3_1 product-wrapper slick-initialized slick-slider">
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: 1293,
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                  >
                    <div
                      className="slick-slide slick-current slick-active"
                      data-slick-index={0}
                      aria-hidden="false"
                      tabIndex={0}
                      style={{ width: 431 }}
                    >
                      <div className="clint-contain">
                        <div className="client-icon">
                          <img
                            src="../assets/svg/3/work.svg"
                            className=" lazyloaded"
                            alt=""
                          />
                        </div>
                        <h2>10</h2>
                        <h4>Business Years</h4>
                        <p>
                          A coffee shop is a small business that sells coffee,
                          pastries, and other morning goods. There are many
                          different types of coffee shops around the world.
                        </p>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      data-slick-index={1}
                      aria-hidden="false"
                      tabIndex={0}
                      style={{ width: 431 }}
                    >
                      <div className="clint-contain">
                        <div className="client-icon">
                          <img
                            src="../assets/svg/3/buy.svg"
                            className=" lazyloaded"
                            alt=""
                          />
                        </div>
                        <h2>80 K+</h2>
                        <h4>Products Sales</h4>
                        <p>
                          Some coffee shops have a seating area, while some just
                          have a spot to order and then go somewhere else to sit
                          down. The coffee shop that I am going to.
                        </p>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      data-slick-index={2}
                      aria-hidden="false"
                      tabIndex={0}
                      style={{ width: 431 }}
                    >
                      <div className="clint-contain">
                        <div className="client-icon">
                          <img
                            src="../assets/svg/3/user.svg"
                            className=" lazyloaded"
                            alt=""
                          />
                        </div>
                        <h2>90%</h2>
                        <h4>Happy Customers</h4>
                        <p>
                          My goal for this coffee shop is to be able to get a
                          coffee and get on with my day. It's a Thursday morning
                          and I am rushing between meetings.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Section End */}
      {/* Team Section Start */}
      <section className="team-section section-lg-space">
        <div className="container-fluid-lg">
          <div className="about-us-title text-center">
            <h4 className="text-content">Our Creative Team</h4>
            <h2 className="center">fastkart team member</h2>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="slider-user product-wrapper slick-initialized slick-slider slick-dotted">
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: 5603,
                      transform: "translate3d(-2155px, 0px, 0px)",
                    }}
                  >
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 431 }}
                      data-slick-index={-3}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div className="team-box">
                        <div className="team-iamge">
                          <img
                            src="../assets/images/inner-page/user/3.jpg"
                            className="img-fluid  lazyload"
                            alt=""
                          />
                        </div>
                        <div className="team-name">
                          <h3>Anna Baranov</h3>
                          <h5>Marketing</h5>
                          <p>
                            camembert de normandie. Bocconcini rubber cheese
                            fromage frais port-salut.
                          </p>
                          <ul className="team-media">
                            <li>
                              <Link
                                to="https://www.facebook.com/"
                                className="fb-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-facebook-f" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://in.pinterest.com/"
                                className="pint-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-pinterest-p" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://twitter.com/"
                                className="twitter-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-twitter" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://www.instagram.com/"
                                className="insta-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-instagram" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 431 }}
                      data-slick-index={-2}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div className="team-box">
                        <div className="team-iamge">
                          <img
                            src="../assets/images/inner-page/user/4.jpg"
                            className="img-fluid  lazyload"
                            alt=""
                          />
                        </div>
                        <div className="team-name">
                          <h3>Anna Baranov</h3>
                          <h5>Marketing</h5>
                          <p>
                            Fondue stinking bishop goat. Macaroni cheese croque
                            monsieur cottage cheese.
                          </p>
                          <ul className="team-media">
                            <li>
                              <Link
                                to="https://www.facebook.com/"
                                className="fb-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-facebook-f" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://in.pinterest.com/"
                                className="pint-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-pinterest-p" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://twitter.com/"
                                className="twitter-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-twitter" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://www.instagram.com/"
                                className="insta-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-instagram" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 431 }}
                      data-slick-index={-1}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div className="team-box">
                        <div className="team-iamge">
                          <img
                            src="../assets/images/inner-page/user/1.jpg"
                            className="img-fluid  lazyload"
                            alt=""
                          />
                        </div>
                        <div className="team-name">
                          <h3>Anna Baranov</h3>
                          <h5>Marketing</h5>
                          <p>
                            squirty cheese cheddar macaroni cheese airedale
                            cheese triangles.
                          </p>
                          <ul className="team-media">
                            <li>
                              <Link
                                to="https://www.facebook.com/"
                                className="fb-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-facebook-f" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://in.pinterest.com/"
                                className="pint-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-pinterest-p" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://twitter.com/"
                                className="twitter-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-twitter" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://www.instagram.com/"
                                className="insta-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-instagram" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide"
                      style={{ width: 431 }}
                      data-slick-index={0}
                      aria-hidden="true"
                      tabIndex={-1}
                      role="tabpanel"
                      id="slick-slide30"
                      aria-describedby="slick-slide-control30"
                    >
                      <div className="team-box">
                        <div className="team-iamge">
                          <img
                            src="../assets/images/inner-page/user/1.jpg"
                            className="img-fluid  lazyload"
                            alt=""
                          />
                        </div>
                        <div className="team-name">
                          <h3>Anna Baranov</h3>
                          <h5>Marketing</h5>
                          <p>
                            cheeseburger airedale mozzarella the big cheese
                            fondue.
                          </p>
                          <ul className="team-media">
                            <li>
                              <Link
                                to="https://www.facebook.com/"
                                className="fb-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-facebook-f" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://in.pinterest.com/"
                                className="pint-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-pinterest-p" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://twitter.com/"
                                className="twitter-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-twitter" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://www.instagram.com/"
                                className="insta-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-instagram" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide"
                      style={{ width: 431 }}
                      data-slick-index={1}
                      aria-hidden="true"
                      tabIndex={-1}
                      role="tabpanel"
                      id="slick-slide31"
                      aria-describedby="slick-slide-control31"
                    >
                      <div className="team-box">
                        <div className="team-iamge">
                          <img
                            src="../assets/images/inner-page/user/2.jpg"
                            className="img-fluid  lazyload"
                            alt=""
                          />
                        </div>
                        <div className="team-name">
                          <h3>Anna Baranov</h3>
                          <h5>Marketing</h5>
                          <p>
                            cheese on toast mozzarella bavarian bergkase smelly
                            cheese cheesy feet.
                          </p>
                          <ul className="team-media">
                            <li>
                              <Link
                                to="https://www.facebook.com/"
                                className="fb-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-facebook-f" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://in.pinterest.com/"
                                className="pint-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-pinterest-p" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://twitter.com/"
                                className="twitter-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-twitter" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://www.instagram.com/"
                                className="insta-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-instagram" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-current slick-active"
                      style={{ width: 431 }}
                      data-slick-index={2}
                      aria-hidden="false"
                      tabIndex={0}
                      role="tabpanel"
                      id="slick-slide32"
                      aria-describedby="slick-slide-control32"
                    >
                      <div className="team-box">
                        <div className="team-iamge">
                          <img
                            src="../assets/images/inner-page/user/3.jpg"
                            className="img-fluid  lazyload"
                            alt=""
                          />
                        </div>
                        <div className="team-name">
                          <h3>Anna Baranov</h3>
                          <h5>Marketing</h5>
                          <p>
                            camembert de normandie. Bocconcini rubber cheese
                            fromage frais port-salut.
                          </p>
                          <ul className="team-media">
                            <li>
                              <Link
                                to="https://www.facebook.com/"
                                className="fb-bg"
                                tabIndex={0}
                              >
                                <i className="fa-brands fa-facebook-f" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://in.pinterest.com/"
                                className="pint-bg"
                                tabIndex={0}
                              >
                                <i className="fa-brands fa-pinterest-p" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://twitter.com/"
                                className="twitter-bg"
                                tabIndex={0}
                              >
                                <i className="fa-brands fa-twitter" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://www.instagram.com/"
                                className="insta-bg"
                                tabIndex={0}
                              >
                                <i className="fa-brands fa-instagram" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      style={{ width: 431 }}
                      data-slick-index={3}
                      aria-hidden="false"
                      tabIndex={0}
                      role="tabpanel"
                      id="slick-slide33"
                      aria-describedby="slick-slide-control33"
                    >
                      <div className="team-box">
                        <div className="team-iamge">
                          <img
                            src="../assets/images/inner-page/user/4.jpg"
                            className="img-fluid  lazyload"
                            alt=""
                          />
                        </div>
                        <div className="team-name">
                          <h3>Anna Baranov</h3>
                          <h5>Marketing</h5>
                          <p>
                            Fondue stinking bishop goat. Macaroni cheese croque
                            monsieur cottage cheese.
                          </p>
                          <ul className="team-media">
                            <li>
                              <Link
                                to="https://www.facebook.com/"
                                className="fb-bg"
                                tabIndex={0}
                              >
                                <i className="fa-brands fa-facebook-f" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://in.pinterest.com/"
                                className="pint-bg"
                                tabIndex={0}
                              >
                                <i className="fa-brands fa-pinterest-p" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://twitter.com/"
                                className="twitter-bg"
                                tabIndex={0}
                              >
                                <i className="fa-brands fa-twitter" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://www.instagram.com/"
                                className="insta-bg"
                                tabIndex={0}
                              >
                                <i className="fa-brands fa-instagram" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      style={{ width: 431 }}
                      data-slick-index={4}
                      aria-hidden="false"
                      tabIndex={0}
                      role="tabpanel"
                      id="slick-slide34"
                      aria-describedby="slick-slide-control34"
                    >
                      <div className="team-box">
                        <div className="team-iamge">
                          <img
                            src="../assets/images/inner-page/user/1.jpg"
                            className="img-fluid  lazyload"
                            alt=""
                          />
                        </div>
                        <div className="team-name">
                          <h3>Anna Baranov</h3>
                          <h5>Marketing</h5>
                          <p>
                            squirty cheese cheddar macaroni cheese airedale
                            cheese triangles.
                          </p>
                          <ul className="team-media">
                            <li>
                              <Link
                                to="https://www.facebook.com/"
                                className="fb-bg"
                                tabIndex={0}
                              >
                                <i className="fa-brands fa-facebook-f" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://in.pinterest.com/"
                                className="pint-bg"
                                tabIndex={0}
                              >
                                <i className="fa-brands fa-pinterest-p" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://twitter.com/"
                                className="twitter-bg"
                                tabIndex={0}
                              >
                                <i className="fa-brands fa-twitter" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://www.instagram.com/"
                                className="insta-bg"
                                tabIndex={0}
                              >
                                <i className="fa-brands fa-instagram" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 431 }}
                      data-slick-index={5}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div className="team-box">
                        <div className="team-iamge">
                          <img
                            src="../assets/images/inner-page/user/1.jpg"
                            className="img-fluid  lazyload"
                            alt=""
                          />
                        </div>
                        <div className="team-name">
                          <h3>Anna Baranov</h3>
                          <h5>Marketing</h5>
                          <p>
                            cheeseburger airedale mozzarella the big cheese
                            fondue.
                          </p>
                          <ul className="team-media">
                            <li>
                              <Link
                                to="https://www.facebook.com/"
                                className="fb-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-facebook-f" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://in.pinterest.com/"
                                className="pint-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-pinterest-p" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://twitter.com/"
                                className="twitter-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-twitter" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://www.instagram.com/"
                                className="insta-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-instagram" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 431 }}
                      data-slick-index={6}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div className="team-box">
                        <div className="team-iamge">
                          <img
                            src="../assets/images/inner-page/user/2.jpg"
                            className="img-fluid  lazyload"
                            alt=""
                          />
                        </div>
                        <div className="team-name">
                          <h3>Anna Baranov</h3>
                          <h5>Marketing</h5>
                          <p>
                            cheese on toast mozzarella bavarian bergkase smelly
                            cheese cheesy feet.
                          </p>
                          <ul className="team-media">
                            <li>
                              <Link
                                to="https://www.facebook.com/"
                                className="fb-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-facebook-f" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://in.pinterest.com/"
                                className="pint-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-pinterest-p" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://twitter.com/"
                                className="twitter-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-twitter" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://www.instagram.com/"
                                className="insta-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-instagram" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 431 }}
                      data-slick-index={7}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div className="team-box">
                        <div className="team-iamge">
                          <img
                            src="../assets/images/inner-page/user/3.jpg"
                            className="img-fluid  lazyload"
                            alt=""
                          />
                        </div>
                        <div className="team-name">
                          <h3>Anna Baranov</h3>
                          <h5>Marketing</h5>
                          <p>
                            camembert de normandie. Bocconcini rubber cheese
                            fromage frais port-salut.
                          </p>
                          <ul className="team-media">
                            <li>
                              <Link
                                to="https://www.facebook.com/"
                                className="fb-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-facebook-f" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://in.pinterest.com/"
                                className="pint-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-pinterest-p" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://twitter.com/"
                                className="twitter-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-twitter" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://www.instagram.com/"
                                className="insta-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-instagram" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 431 }}
                      data-slick-index={8}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div className="team-box">
                        <div className="team-iamge">
                          <img
                            src="../assets/images/inner-page/user/4.jpg"
                            className="img-fluid  lazyload"
                            alt=""
                          />
                        </div>
                        <div className="team-name">
                          <h3>Anna Baranov</h3>
                          <h5>Marketing</h5>
                          <p>
                            Fondue stinking bishop goat. Macaroni cheese croque
                            monsieur cottage cheese.
                          </p>
                          <ul className="team-media">
                            <li>
                              <Link
                                to="https://www.facebook.com/"
                                className="fb-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-facebook-f" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://in.pinterest.com/"
                                className="pint-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-pinterest-p" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://twitter.com/"
                                className="twitter-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-twitter" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://www.instagram.com/"
                                className="insta-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-instagram" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      style={{ width: 431 }}
                      data-slick-index={9}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div className="team-box">
                        <div className="team-iamge">
                          <img
                            src="../assets/images/inner-page/user/1.jpg"
                            className="img-fluid  lazyload"
                            alt=""
                          />
                        </div>
                        <div className="team-name">
                          <h3>Anna Baranov</h3>
                          <h5>Marketing</h5>
                          <p>
                            squirty cheese cheddar macaroni cheese airedale
                            cheese triangles.
                          </p>
                          <ul className="team-media">
                            <li>
                              <Link
                                to="https://www.facebook.com/"
                                className="fb-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-facebook-f" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://in.pinterest.com/"
                                className="pint-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-pinterest-p" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://twitter.com/"
                                className="twitter-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-twitter" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://www.instagram.com/"
                                className="insta-bg"
                                tabIndex={-1}
                              >
                                <i className="fa-brands fa-instagram" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="slick-dots" style={{}} role="tablist">
                  <li className="" role="presentation">
                    <button
                      type="button"
                      role="tab"
                      id="slick-slide-control30"
                      aria-controls="slick-slide30"
                      aria-label="1 of 2"
                      tabIndex={-1}
                      fdprocessedid="dj3p"
                    >
                      1
                    </button>
                  </li>
                  <li role="presentation" className="">
                    <button
                      type="button"
                      role="tab"
                      id="slick-slide-control31"
                      aria-controls="slick-slide31"
                      aria-label="2 of 2"
                      tabIndex={-1}
                    >
                      2
                    </button>
                  </li>
                  <li role="presentation" className="slick-active">
                    <button
                      type="button"
                      role="tab"
                      id="slick-slide-control32"
                      aria-controls="slick-slide32"
                      aria-label="3 of 2"
                      tabIndex={0}
                      aria-selected="true"
                    >
                      3
                    </button>
                  </li>
                  <li role="presentation" className="">
                    <button
                      type="button"
                      role="tab"
                      id="slick-slide-control33"
                      aria-controls="slick-slide33"
                      aria-label="4 of 2"
                      tabIndex={-1}
                    >
                      4
                    </button>
                  </li>
                  <li role="presentation" className="">
                    <button
                      type="button"
                      role="tab"
                      id="slick-slide-control34"
                      aria-controls="slick-slide34"
                      aria-label="5 of 2"
                      tabIndex={-1}
                    >
                      5
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section End */}
      {/* Review Section Start */}
      <section className="review-section section-lg-space">
        <div className="container-fluid">
          <div className="about-us-title text-center">
            <h4 className="text-content">Latest Testimonals</h4>
            <h2 className="center">What people say</h2>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="slider-4-half product-wrapper slick-initialized slick-slider slick-dotted">
                <div
                  className="slick-list draggable"
                  style={{ padding: "0px 200px" }}
                >
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: 7440,
                      transform: "translate3d(-1116px, 0px, 0px)",
                    }}
                  >
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-4}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 372 }}
                    >
                      <div className="reviewer-box">
                        <i className="fa-solid fa-quote-right" />
                        <div className="product-rating">
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
                        </div>
                        <h3>Top Quality, Beautiful Location</h3>
                        <p>
                          "I was skeptical of SEO and content marketing at
                          first, but the Lorem Ipsum Company not only proved
                          itself financially speaking, but the response I have
                          received from customers is incredible."
                        </p>
                        <div className="reviewer-profile">
                          <div className="reviewer-image">
                            <img
                              src="../assets/images/inner-page/user/1.jpg"
                              className=" lazyload"
                              alt=""
                            />
                          </div>
                          <div className="reviewer-name">
                            <h4>Gwen J. Geiger</h4>
                            <h6>Designer</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-3}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 372 }}
                    >
                      <div className="reviewer-box">
                        <i className="fa-solid fa-quote-right" />
                        <div className="product-rating">
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
                        </div>
                        <h3>Top Quality, Beautiful Location</h3>
                        <p>
                          "Jeramy and his team at the Lorem Ipsum Company
                          whipped my website into shape just in time for tax
                          season. I was excited by the results and am proud to
                          direct clients to my website once again."
                        </p>
                        <div className="reviewer-profile">
                          <div className="reviewer-image">
                            <img
                              src="../assets/images/inner-page/user/2.jpg"
                              className=" lazyload"
                              alt=""
                            />
                          </div>
                          <div className="reviewer-name">
                            <h4>Constance K. Whang</h4>
                            <h6>CEO, Company</h6>
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
                      style={{ width: 372 }}
                    >
                      <div className="reviewer-box">
                        <i className="fa-solid fa-quote-right" />
                        <div className="product-rating">
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
                        </div>
                        <h3>Top Quality, Beautiful Location</h3>
                        <p>
                          "Yeah, and if you were the pope they'd be all,
                          "Straighten your pope hat." And "Put on your good
                          vestments." What are their names? Yep, I remember.
                          They came in last at the Olympics!"
                        </p>
                        <div className="reviewer-profile">
                          <div className="reviewer-image">
                            <img
                              src="../assets/images/inner-page/user/3.jpg"
                              className=" lazyload"
                              alt=""
                            />
                          </div>
                          <div className="reviewer-name">
                            <h4>Christopher R. Lee</h4>
                            <h6>Managing Director</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned slick-active"
                      data-slick-index={-1}
                      id=""
                      aria-hidden="false"
                      tabIndex={-1}
                      style={{ width: 372 }}
                    >
                      <div className="reviewer-box">
                        <i className="fa-solid fa-quote-right" />
                        <div className="product-rating">
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
                        </div>
                        <h3>Top Quality, Beautiful Location</h3>
                        <p>
                          "Good man. Nixon's pro-war and pro-family. Hey, tell
                          me something. You've got all this money. How come you
                          always dress like you're doing your laundry? So, how
                          'bout them Knicks? What kind of a father would I be if
                          I said no?."
                        </p>
                        <div className="reviewer-profile">
                          <div className="reviewer-image">
                            <img
                              src="../assets/images/inner-page/user/4.jpg"
                              className=" lazyload"
                              alt=""
                            />
                          </div>
                          <div className="reviewer-name">
                            <h4>Eileen R. Chu</h4>
                            <h6>Marketing Director</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-current slick-active slick-center"
                      data-slick-index={0}
                      aria-hidden="false"
                      tabIndex={0}
                      role="tabpanel"
                      id="slick-slide10"
                      aria-describedby="slick-slide-control10"
                      style={{ width: 372 }}
                    >
                      <div className="reviewer-box">
                        <i className="fa-solid fa-quote-right" />
                        <div className="product-rating">
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
                        </div>
                        <h3>Top Quality, Beautiful Location</h3>
                        <p>
                          "I usually try to keep my sadness pent up inside where
                          it can fester quietly as a mental illness. There, now
                          he's trapped in a book I wrote: a crummy world of plot
                          holes and spelling errors! As an interesting side
                          note."
                        </p>
                        <div className="reviewer-profile">
                          <div className="reviewer-image">
                            <img
                              src="../assets/images/inner-page/user/1.jpg"
                              className=" lazyload"
                              alt=""
                            />
                          </div>
                          <div className="reviewer-name">
                            <h4>Betty J. Turner</h4>
                            <h6>CTO, Company</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      data-slick-index={1}
                      aria-hidden="false"
                      tabIndex={0}
                      role="tabpanel"
                      id="slick-slide11"
                      aria-describedby="slick-slide-control11"
                      style={{ width: 372 }}
                    >
                      <div className="reviewer-box">
                        <i className="fa-solid fa-quote-right" />
                        <div className="product-rating">
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
                        </div>
                        <h3>Top Quality, Beautiful Location</h3>
                        <p>
                          "My busy schedule leaves little, if any, time for
                          blogging and social media. The Lorem Ipsum Company has
                          been a huge part of helping me grow my business
                          through organic search and content marketing."
                        </p>
                        <div className="reviewer-profile">
                          <div className="reviewer-image">
                            <img
                              src="../assets/images/inner-page/user/2.jpg"
                              className=" lazyload"
                              alt=""
                            />
                          </div>
                          <div className="reviewer-name">
                            <h4>Alfredo S. Rocha</h4>
                            <h6>Project Manager</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide"
                      data-slick-index={2}
                      aria-hidden="true"
                      tabIndex={0}
                      role="tabpanel"
                      id="slick-slide12"
                      aria-describedby="slick-slide-control12"
                      style={{ width: 372 }}
                    >
                      <div className="reviewer-box">
                        <i className="fa-solid fa-quote-right" />
                        <div className="product-rating">
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
                        </div>
                        <h3>Top Quality, Beautiful Location</h3>
                        <p>
                          "Professional, responsive, and able to keep up with
                          ever-changing demand and tight deadlines: That's how I
                          would describe Jeramy and his team at The Lorem Ipsum
                          Company. When it comes to content marketing."
                        </p>
                        <div className="reviewer-profile">
                          <div className="reviewer-image">
                            <img
                              src="../assets/images/inner-page/user/3.jpg"
                              className=" lazyload"
                              alt=""
                            />
                          </div>
                          <div className="reviewer-name">
                            <h4>Donald C. Spurr</h4>
                            <h6>Sale Agents</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide"
                      data-slick-index={3}
                      aria-hidden="true"
                      tabIndex={-1}
                      role="tabpanel"
                      id="slick-slide13"
                      aria-describedby="slick-slide-control13"
                      style={{ width: 372 }}
                    >
                      <div className="reviewer-box">
                        <i className="fa-solid fa-quote-right" />
                        <div className="product-rating">
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
                        </div>
                        <h3>Top Quality, Beautiful Location</h3>
                        <p>
                          "After being forced to move twice within five years,
                          our customers had a hard time finding us and our sales
                          plummeted. The Lorem Ipsum Co. not only revitalized
                          our brand."
                        </p>
                        <div className="reviewer-profile">
                          <div className="reviewer-image">
                            <img
                              src="../assets/images/inner-page/user/4.jpg"
                              className=" lazyload"
                              alt=""
                            />
                          </div>
                          <div className="reviewer-name">
                            <h4>Terry G. Fain</h4>
                            <h6>Photographer</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide"
                      data-slick-index={4}
                      aria-hidden="true"
                      tabIndex={-1}
                      role="tabpanel"
                      id="slick-slide14"
                      aria-describedby="slick-slide-control14"
                      style={{ width: 372 }}
                    >
                      <div className="reviewer-box">
                        <i className="fa-solid fa-quote-right" />
                        <div className="product-rating">
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
                        </div>
                        <h3>Top Quality, Beautiful Location</h3>
                        <p>
                          "I was skeptical of SEO and content marketing at
                          first, but the Lorem Ipsum Company not only proved
                          itself financially speaking, but the response I have
                          received from customers is incredible."
                        </p>
                        <div className="reviewer-profile">
                          <div className="reviewer-image">
                            <img
                              src="../assets/images/inner-page/user/1.jpg"
                              className=" lazyload"
                              alt=""
                            />
                          </div>
                          <div className="reviewer-name">
                            <h4>Gwen J. Geiger</h4>
                            <h6>Designer</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide"
                      data-slick-index={5}
                      aria-hidden="true"
                      tabIndex={-1}
                      role="tabpanel"
                      id="slick-slide15"
                      aria-describedby="slick-slide-control15"
                      style={{ width: 372 }}
                    >
                      <div className="reviewer-box">
                        <i className="fa-solid fa-quote-right" />
                        <div className="product-rating">
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
                        </div>
                        <h3>Top Quality, Beautiful Location</h3>
                        <p>
                          "Jeramy and his team at the Lorem Ipsum Company
                          whipped my website into shape just in time for tax
                          season. I was excited by the results and am proud to
                          direct clients to my website once again."
                        </p>
                        <div className="reviewer-profile">
                          <div className="reviewer-image">
                            <img
                              src="../assets/images/inner-page/user/2.jpg"
                              className=" lazyload"
                              alt=""
                            />
                          </div>
                          <div className="reviewer-name">
                            <h4>Constance K. Whang</h4>
                            <h6>CEO, Company</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide"
                      data-slick-index={6}
                      aria-hidden="true"
                      tabIndex={-1}
                      role="tabpanel"
                      id="slick-slide16"
                      aria-describedby="slick-slide-control16"
                      style={{ width: 372 }}
                    >
                      <div className="reviewer-box">
                        <i className="fa-solid fa-quote-right" />
                        <div className="product-rating">
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
                        </div>
                        <h3>Top Quality, Beautiful Location</h3>
                        <p>
                          "Yeah, and if you were the pope they'd be all,
                          "Straighten your pope hat." And "Put on your good
                          vestments." What are their names? Yep, I remember.
                          They came in last at the Olympics!"
                        </p>
                        <div className="reviewer-profile">
                          <div className="reviewer-image">
                            <img
                              src="../assets/images/inner-page/user/3.jpg"
                              className=" lazyload"
                              alt=""
                            />
                          </div>
                          <div className="reviewer-name">
                            <h4>Christopher R. Lee</h4>
                            <h6>Managing Director</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide"
                      data-slick-index={7}
                      aria-hidden="true"
                      tabIndex={-1}
                      role="tabpanel"
                      id="slick-slide17"
                      aria-describedby="slick-slide-control17"
                      style={{ width: 372 }}
                    >
                      <div className="reviewer-box">
                        <i className="fa-solid fa-quote-right" />
                        <div className="product-rating">
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
                        </div>
                        <h3>Top Quality, Beautiful Location</h3>
                        <p>
                          "Good man. Nixon's pro-war and pro-family. Hey, tell
                          me something. You've got all this money. How come you
                          always dress like you're doing your laundry? So, how
                          'bout them Knicks? What kind of a father would I be if
                          I said no?."
                        </p>
                        <div className="reviewer-profile">
                          <div className="reviewer-image">
                            <img
                              src="../assets/images/inner-page/user/4.jpg"
                              className=" lazyload"
                              alt=""
                            />
                          </div>
                          <div className="reviewer-name">
                            <h4>Eileen R. Chu</h4>
                            <h6>Marketing Director</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={8}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 372 }}
                    >
                      <div className="reviewer-box">
                        <i className="fa-solid fa-quote-right" />
                        <div className="product-rating">
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
                        </div>
                        <h3>Top Quality, Beautiful Location</h3>
                        <p>
                          "I usually try to keep my sadness pent up inside where
                          it can fester quietly as a mental illness. There, now
                          he's trapped in a book I wrote: a crummy world of plot
                          holes and spelling errors! As an interesting side
                          note."
                        </p>
                        <div className="reviewer-profile">
                          <div className="reviewer-image">
                            <img
                              src="../assets/images/inner-page/user/1.jpg"
                              className=" lazyload"
                              alt=""
                            />
                          </div>
                          <div className="reviewer-name">
                            <h4>Betty J. Turner</h4>
                            <h6>CTO, Company</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={9}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 372 }}
                    >
                      <div className="reviewer-box">
                        <i className="fa-solid fa-quote-right" />
                        <div className="product-rating">
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
                        </div>
                        <h3>Top Quality, Beautiful Location</h3>
                        <p>
                          "My busy schedule leaves little, if any, time for
                          blogging and social media. The Lorem Ipsum Company has
                          been a huge part of helping me grow my business
                          through organic search and content marketing."
                        </p>
                        <div className="reviewer-profile">
                          <div className="reviewer-image">
                            <img
                              src="../assets/images/inner-page/user/2.jpg"
                              className=" lazyload"
                              alt=""
                            />
                          </div>
                          <div className="reviewer-name">
                            <h4>Alfredo S. Rocha</h4>
                            <h6>Project Manager</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={10}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 372 }}
                    >
                      <div className="reviewer-box">
                        <i className="fa-solid fa-quote-right" />
                        <div className="product-rating">
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
                        </div>
                        <h3>Top Quality, Beautiful Location</h3>
                        <p>
                          "Professional, responsive, and able to keep up with
                          ever-changing demand and tight deadlines: That's how I
                          would describe Jeramy and his team at The Lorem Ipsum
                          Company. When it comes to content marketing."
                        </p>
                        <div className="reviewer-profile">
                          <div className="reviewer-image">
                            <img
                              src="../assets/images/inner-page/user/3.jpg"
                              className=" lazyload"
                              alt=""
                            />
                          </div>
                          <div className="reviewer-name">
                            <h4>Donald C. Spurr</h4>
                            <h6>Sale Agents</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={11}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 372 }}
                    >
                      <div className="reviewer-box">
                        <i className="fa-solid fa-quote-right" />
                        <div className="product-rating">
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
                        </div>
                        <h3>Top Quality, Beautiful Location</h3>
                        <p>
                          "After being forced to move twice within five years,
                          our customers had a hard time finding us and our sales
                          plummeted. The Lorem Ipsum Co. not only revitalized
                          our brand."
                        </p>
                        <div className="reviewer-profile">
                          <div className="reviewer-image">
                            <img
                              src="../assets/images/inner-page/user/4.jpg"
                              className=" lazyload"
                              alt=""
                            />
                          </div>
                          <div className="reviewer-name">
                            <h4>Terry G. Fain</h4>
                            <h6>Photographer</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned slick-center"
                      data-slick-index={12}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 372 }}
                    >
                      <div className="reviewer-box">
                        <i className="fa-solid fa-quote-right" />
                        <div className="product-rating">
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
                        </div>
                        <h3>Top Quality, Beautiful Location</h3>
                        <p>
                          "I was skeptical of SEO and content marketing at
                          first, but the Lorem Ipsum Company not only proved
                          itself financially speaking, but the response I have
                          received from customers is incredible."
                        </p>
                        <div className="reviewer-profile">
                          <div className="reviewer-image">
                            <img
                              src="../assets/images/inner-page/user/1.jpg"
                              className=" lazyload"
                              alt=""
                            />
                          </div>
                          <div className="reviewer-name">
                            <h4>Gwen J. Geiger</h4>
                            <h6>Designer</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={13}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 372 }}
                    >
                      <div className="reviewer-box">
                        <i className="fa-solid fa-quote-right" />
                        <div className="product-rating">
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
                        </div>
                        <h3>Top Quality, Beautiful Location</h3>
                        <p>
                          "Jeramy and his team at the Lorem Ipsum Company
                          whipped my website into shape just in time for tax
                          season. I was excited by the results and am proud to
                          direct clients to my website once again."
                        </p>
                        <div className="reviewer-profile">
                          <div className="reviewer-image">
                            <img
                              src="../assets/images/inner-page/user/2.jpg"
                              className=" lazyload"
                              alt=""
                            />
                          </div>
                          <div className="reviewer-name">
                            <h4>Constance K. Whang</h4>
                            <h6>CEO, Company</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={14}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 372 }}
                    >
                      <div className="reviewer-box">
                        <i className="fa-solid fa-quote-right" />
                        <div className="product-rating">
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
                        </div>
                        <h3>Top Quality, Beautiful Location</h3>
                        <p>
                          "Yeah, and if you were the pope they'd be all,
                          "Straighten your pope hat." And "Put on your good
                          vestments." What are their names? Yep, I remember.
                          They came in last at the Olympics!"
                        </p>
                        <div className="reviewer-profile">
                          <div className="reviewer-image">
                            <img
                              src="../assets/images/inner-page/user/3.jpg"
                              className=" lazyload"
                              alt=""
                            />
                          </div>
                          <div className="reviewer-name">
                            <h4>Christopher R. Lee</h4>
                            <h6>Managing Director</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={15}
                      id=""
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 372 }}
                    >
                      <div className="reviewer-box">
                        <i className="fa-solid fa-quote-right" />
                        <div className="product-rating">
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
                        </div>
                        <h3>Top Quality, Beautiful Location</h3>
                        <p>
                          "Good man. Nixon's pro-war and pro-family. Hey, tell
                          me something. You've got all this money. How come you
                          always dress like you're doing your laundry? So, how
                          'bout them Knicks? What kind of a father would I be if
                          I said no?."
                        </p>
                        <div className="reviewer-profile">
                          <div className="reviewer-image">
                            <img
                              src="../assets/images/inner-page/user/4.jpg"
                              className=" lazyload"
                              alt=""
                            />
                          </div>
                          <div className="reviewer-name">
                            <h4>Eileen R. Chu</h4>
                            <h6>Marketing Director</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="slick-dots" style={{}} role="tablist">
                  <li className="slick-active" role="presentation">
                    <button
                      type="button"
                      role="tab"
                      id="slick-slide-control10"
                      aria-controls="slick-slide10"
                      aria-label="1 of 3"
                      tabIndex={0}
                      aria-selected="true"
                      fdprocessedid="kvncb5"
                    >
                      1
                    </button>
                  </li>
                  <li role="presentation">
                    <button
                      type="button"
                      role="tab"
                      id="slick-slide-control11"
                      aria-controls="slick-slide11"
                      aria-label="2 of 3"
                      tabIndex={-1}
                    >
                      2
                    </button>
                  </li>
                  <li role="presentation">
                    <button
                      type="button"
                      role="tab"
                      id="slick-slide-control12"
                      aria-controls="slick-slide12"
                      aria-label="3 of 3"
                      tabIndex={-1}
                    >
                      3
                    </button>
                  </li>
                  <li role="presentation">
                    <button
                      type="button"
                      role="tab"
                      id="slick-slide-control13"
                      aria-controls="slick-slide13"
                      aria-label="4 of 3"
                      tabIndex={-1}
                    >
                      4
                    </button>
                  </li>
                  <li role="presentation">
                    <button
                      type="button"
                      role="tab"
                      id="slick-slide-control14"
                      aria-controls="slick-slide14"
                      aria-label="5 of 3"
                      tabIndex={-1}
                    >
                      5
                    </button>
                  </li>
                  <li role="presentation">
                    <button
                      type="button"
                      role="tab"
                      id="slick-slide-control15"
                      aria-controls="slick-slide15"
                      aria-label="6 of 3"
                      tabIndex={-1}
                    >
                      6
                    </button>
                  </li>
                  <li role="presentation">
                    <button
                      type="button"
                      role="tab"
                      id="slick-slide-control16"
                      aria-controls="slick-slide16"
                      aria-label="7 of 3"
                      tabIndex={-1}
                    >
                      7
                    </button>
                  </li>
                  <li role="presentation">
                    <button
                      type="button"
                      role="tab"
                      id="slick-slide-control17"
                      aria-controls="slick-slide17"
                      aria-label="8 of 3"
                      tabIndex={-1}
                    >
                      8
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Section End */}
      {/* Blog Section Start */}
      <section className="section-lg-space">
        <div className="container-fluid-lg">
          <div className="about-us-title text-center">
            <h4 className="text-content">Our Blog</h4>
            <h2 className="center">Our Latest Blog</h2>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="slider-5 ratio_87 slick-initialized slick-slider">
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: 1295,
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                  >
                    <div
                      className="slick-slide slick-current slick-active"
                      data-slick-index={0}
                      aria-hidden="false"
                      tabIndex={0}
                      style={{ width: 259 }}
                    >
                      <div className="blog-box">
                        <div className="blog-box-image">
                          <div className="blog-image">
                            <Link
                              to="/blog"
                              className="rounded-3 bg-size  lazyload"
                              tabIndex={0}
                              style={{
                                backgroundImage:
                                  'url("../assets/images/veg-2/blog/1.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                backgroundRepeat: "no-repeat",
                                display: "block",
                              }}
                            >
                              <img
                                src="../assets/images/veg-2/blog/1.jpg"
                                className="bg-img  lazyload"
                                alt=""
                                style={{ display: "none" }}
                              />
                            </Link>
                          </div>
                        </div>
                        <Link
                          to="/blog"
                          className="blog-detail d-block"
                          tabIndex={0}
                        >
                          <h6>Farmart</h6>
                          <h5>Fresh Meat Saugage</h5>
                        </Link>
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
                          <div className="blog-image">
                            <Link
                              to="/blog"
                              className="rounded-3 bg-size  lazyload"
                              tabIndex={0}
                              style={{
                                backgroundImage:
                                  'url("../assets/images/veg-2/blog/2.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                backgroundRepeat: "no-repeat",
                                display: "block",
                              }}
                            >
                              <img
                                src="../assets/images/veg-2/blog/2.jpg"
                                className="bg-img  lazyload"
                                alt=""
                                style={{ display: "none" }}
                              />
                            </Link>
                          </div>
                        </div>
                        <Link
                          to="/blog"
                          className="blog-detail d-block"
                          tabIndex={0}
                        >
                          <h6>Soda Brand</h6>
                          <h5>Soda 500ml - 20% OFF</h5>
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
                          <div className="blog-image">
                            <Link
                              to="/blog"
                              className="rounded-3 bg-size  lazyload"
                              tabIndex={0}
                              style={{
                                backgroundImage:
                                  'url("../assets/images/veg-2/blog/3.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                backgroundRepeat: "no-repeat",
                                display: "block",
                              }}
                            >
                              <img
                                src="../assets/images/veg-2/blog/3.jpg"
                                className="bg-img  lazyload"
                                alt=""
                                style={{ display: "none" }}
                              />
                            </Link>
                          </div>
                        </div>
                        <Link
                          to="/blog"
                          className="blog-detail d-block"
                          tabIndex={0}
                        >
                          <h6>Beer Brand</h6>
                          <h5>Soda 500ml - 20% OFF</h5>
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
                          <div className="blog-image">
                            <Link
                              to="/blog"
                              className="rounded-3 bg-size  lazyload"
                              tabIndex={0}
                              style={{
                                backgroundImage:
                                  'url("../assets/images/veg-2/blog/4.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                backgroundRepeat: "no-repeat",
                                display: "block",
                              }}
                            >
                              <img
                                src="../assets/images/veg-2/blog/4.jpg"
                                className="bg-img  lazyload"
                                alt=""
                                style={{ display: "none" }}
                              />
                            </Link>
                          </div>
                        </div>
                        <Link
                          to="/blog"
                          className="blog-detail d-block"
                          tabIndex={0}
                        >
                          <h6>Beer Brand</h6>
                          <h5>Fresh Beer -30% OFF</h5>
                        </Link>
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
                        <div className="blog-image">
                          <Link
                            to="/blog"
                            className="rounded-3 bg-size  lazyload"
                            tabIndex={0}
                            style={{
                              backgroundImage:
                                'url("../assets/images/veg-2/blog/5.jpg")',
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                              backgroundRepeat: "no-repeat",
                              display: "block",
                            }}
                          >
                            <img
                              src="../assets/images/veg-2/blog/5.jpg"
                              className="bg-img  lazyload"
                              alt=""
                              style={{ display: "none" }}
                            />
                          </Link>
                        </div>
                        <Link
                          to="/blog"
                          className="blog-detail d-block"
                          tabIndex={0}
                        >
                          <h6>Milk Brand</h6>
                          <h5>Fresh Milk</h5>
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
      {/* Footer Section Start */}
     <Footer/>

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
      {/* Tap to top start */}
      <div className="theme-option">
        <div className="setting-box">
          <button className="btn setting-button" fdprocessedid="4bhr1q">
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
        <div className="back-to-top" style={{}}>
          <Link id="back-to-top" to="#">
            <i className="fas fa-chevron-up" />
          </Link>
        </div>
      </div>

      <div className="bg-overlay" />
    </>
  );
}
