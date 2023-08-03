import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import feather from 'feather-icons';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function IndexLifestyle() {
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
                                       <strong className="ms-1">New Coupon Code: Fast024</strong>
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
                                       <Link
                                          className="dropdown-item"
                                          to="#"
                                          id="english"
                                       >
                                          <img
                                             src="../assets/images/country/united-kingdom.png"
                                             className="img-fluid  lazyload"
                                             alt=""
                                          />
                                          <span>English</span>
                                       </Link>
                                    </li>
                                    <li>
                                       <Link
                                          className="dropdown-item"
                                          to="#"
                                          id="france"
                                       >
                                          <img
                                             src="../assets/images/country/germany.png"
                                             className="img-fluid  lazyload"
                                             alt=""
                                          />
                                          <span>Germany</span>
                                       </Link>
                                    </li>
                                    <li>
                                       <Link
                                          className="dropdown-item"
                                          to="#"
                                          id="chinese"
                                       >
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
                                       <Link
                                          className="dropdown-item"
                                          id="aud"
                                          to="#"
                                       >
                                          AUD
                                       </Link>
                                    </li>
                                    <li>
                                       <Link
                                          className="dropdown-item"
                                          id="eur"
                                          to="#"
                                       >
                                          EUR
                                       </Link>
                                    </li>
                                    <li>
                                       <Link
                                          className="dropdown-item"
                                          id="cny"
                                          to="#"
                                       >
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
                              className="navbar-toggler d-xl-none d-inline navbar-menu-button"
                              type="button"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#primaryMenu"
                           >
                              <span className="navbar-toggler-icon">
                                 <i className="fa-solid fa-bars" />
                              </span>
                           </button>
                           <Link to="/index-lifestyle" className="web-logo nav-logo">
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
                                                         src="../assets/images/fashion/product/5.jpg"
                                                         className=" lazyload"
                                                         alt=""
                                                      />
                                                   </Link>
                                                   <div className="drop-contain">
                                                      <Link to="/product">
                                                         <h5>Black Gown</h5>
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
                                                         src="../assets/images/fashion/product/6.jpg"
                                                         className=" lazyload"
                                                         alt=""
                                                      />
                                                   </Link>
                                                   <div className="drop-contain">
                                                      <Link to="/product">
                                                         <h5>Dark Gown</h5>
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
                  <Link to="/index-lifestyle">
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
         <section className="home-section-2 home-section-bg pt-0 overflow-hidden">
            <div className="container-fluid p-0">
               <div className="row">
                  <div className="col-12">
                     <div className="slider-animate">
                        <div>
                           <div
                              className="home-contain rounded-0 p-0 bg-size blur-up lazyloaded"
                              style={{
                                 backgroundImage:
                                    'url("../assets/images/fashion/home-banner/1.jpg")',
                                 backgroundSize: "cover",
                                 backgroundPosition: "center center",
                                 backgroundRepeat: "no-repeat",
                                 display: "block"
                              }}
                           >
                              <img
                                 src="../assets/images/fashion/home-banner/1.jpg"
                                 className="img-fluid bg-img blur-up lazyloaded"
                                 alt=""
                                 style={{ display: "none" }}
                              />
                              <div className="home-detail home-big-space p-center-left home-overlay position-relative">
                                 <div className="container-fluid-lg">
                                    <div>
                                       <h6 className="ls-expanded text-uppercase text-danger">
                                          Weekend Special offer
                                       </h6>
                                       <h1 className="heding-2">Premium Quality</h1>
                                       <h5 className="text-content">
                                          Fresh &amp; Top Quality Dry Fruits are available here!
                                       </h5>
                                       <button
                                          onclick="location.href = 'shop.html';"
                                          className="btn theme-bg-color btn-md text-white fw-bold mt-md-4 mt-2 mend-auto"
                                          fdprocessedid="n81rfe"
                                       >
                                          Shop Now <i className="fa-solid fa-arrow-right icon" />
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
         </section>

         {/* Home Section End */}
         {/* Category Section Start */}
         <section>
            <div className="container-fluid-lg">
               <div className="row">
                  <div className="col-12">
                     <div className="slider-9 slick-initialized slick-slider">
                        <div className="slick-list draggable">
                           <div
                              className="slick-track"
                              style={{
                                 opacity: 1,
                                 width: 4212,
                                 transform: "translate3d(-1620px, 0px, 0px)"
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
                                 <a
                                    href="shop.html"
                                    className="category-box category-dark wow fadeInUp"
                                    data-wow-delay="0.05s"
                                    tabIndex={-1}
                                    style={{
                                       visibility: "visible",
                                       animationDelay: "0.05s",
                                       animationName: "fadeInUp"
                                    }}
                                 >
                                    <div>
                                       <img
                                          src="../assets/svg/fashion/jeans.svg"
                                          className="blur-up lazyload"
                                          alt=""
                                       />
                                       <h5>bottoms</h5>
                                    </div>
                                 </a>
                              </div>
                              <div
                                 className="slick-slide slick-cloned"
                                 style={{ width: 162 }}
                                 data-slick-index={-7}
                                 id=""
                                 aria-hidden="true"
                                 tabIndex={-1}
                              >
                                 <a
                                    href="shop.html"
                                    className="category-box category-dark wow fadeInUp"
                                    data-wow-delay="0.1s"
                                    tabIndex={-1}
                                    style={{
                                       visibility: "visible",
                                       animationDelay: "0.1s",
                                       animationName: "fadeInUp"
                                    }}
                                 >
                                    <div>
                                       <img
                                          src="../assets/svg/fashion/cords.svg"
                                          className="blur-up lazyload"
                                          alt=""
                                       />
                                       <h5>co-ords</h5>
                                    </div>
                                 </a>
                              </div>
                              <div
                                 className="slick-slide slick-cloned"
                                 style={{ width: 162 }}
                                 data-slick-index={-6}
                                 id=""
                                 aria-hidden="true"
                                 tabIndex={-1}
                              >
                                 <a
                                    href="shop.html"
                                    className="category-box category-dark wow fadeInUp"
                                    data-wow-delay="0.15s"
                                    tabIndex={-1}
                                    style={{
                                       visibility: "visible",
                                       animationDelay: "0.15s",
                                       animationName: "fadeInUp"
                                    }}
                                 >
                                    <div>
                                       <img
                                          src="../assets/svg/fashion/jacket.svg"
                                          className="blur-up lazyload"
                                          alt=""
                                       />
                                       <h5>jackets</h5>
                                    </div>
                                 </a>
                              </div>
                              <div
                                 className="slick-slide slick-cloned"
                                 style={{ width: 162 }}
                                 data-slick-index={-5}
                                 id=""
                                 aria-hidden="true"
                                 tabIndex={-1}
                              >
                                 <a
                                    href="shop.html"
                                    className="category-box category-dark wow fadeInUp"
                                    data-wow-delay="0.2s"
                                    tabIndex={-1}
                                    style={{
                                       visibility: "visible",
                                       animationDelay: "0.2s",
                                       animationName: "fadeInUp"
                                    }}
                                 >
                                    <div>
                                       <img
                                          src="../assets/svg/fashion/blzer.svg"
                                          className="blur-up lazyloaded"
                                          alt=""
                                       />
                                       <h5>blazers</h5>
                                    </div>
                                 </a>
                              </div>
                              <div
                                 className="slick-slide slick-cloned"
                                 style={{ width: 162 }}
                                 data-slick-index={-4}
                                 id=""
                                 aria-hidden="true"
                                 tabIndex={-1}
                              >
                                 <a
                                    href="shop.html"
                                    className="category-box category-dark wow fadeInUp"
                                    data-wow-delay="0.25s"
                                    tabIndex={-1}
                                    style={{
                                       visibility: "visible",
                                       animationDelay: "0.25s",
                                       animationName: "fadeInUp"
                                    }}
                                 >
                                    <div>
                                       <img
                                          src="../assets/svg/fashion/shapewear.svg"
                                          className="blur-up lazyloaded"
                                          alt=""
                                       />
                                       <h5>shapewear</h5>
                                    </div>
                                 </a>
                              </div>
                              <div
                                 className="slick-slide slick-cloned"
                                 style={{ width: 162 }}
                                 data-slick-index={-3}
                                 id=""
                                 aria-hidden="true"
                                 tabIndex={-1}
                              >
                                 <a
                                    href="shop.html"
                                    className="category-box category-dark wow fadeInUp"
                                    data-wow-delay="0.3s"
                                    tabIndex={-1}
                                    style={{
                                       visibility: "visible",
                                       animationDelay: "0.3s",
                                       animationName: "fadeInUp"
                                    }}
                                 >
                                    <div>
                                       <img
                                          src="../assets/svg/fashion/sleepwear.svg"
                                          className="blur-up lazyloaded"
                                          alt=""
                                       />
                                       <h5>sleepwear</h5>
                                    </div>
                                 </a>
                              </div>
                              <div
                                 className="slick-slide slick-cloned"
                                 style={{ width: 162 }}
                                 data-slick-index={-2}
                                 id=""
                                 aria-hidden="true"
                                 tabIndex={-1}
                              >
                                 <a
                                    href="shop.html"
                                    className="category-box category-dark wow fadeInUp"
                                    data-wow-delay="0.35s"
                                    tabIndex={-1}
                                    style={{
                                       visibility: "visible",
                                       animationDelay: "0.35s",
                                       animationName: "fadeInUp"
                                    }}
                                 >
                                    <div>
                                       <img
                                          src="../assets/svg/fashion/swimwear.svg"
                                          className="blur-up lazyloaded"
                                          alt=""
                                       />
                                       <h5>swimwear</h5>
                                    </div>
                                 </a>
                              </div>
                              <div
                                 className="slick-slide slick-cloned"
                                 style={{ width: 162 }}
                                 data-slick-index={-1}
                                 id=""
                                 aria-hidden="true"
                                 tabIndex={-1}
                              >
                                 <a
                                    href="shop.html"
                                    className="category-box category-dark wow fadeInUp"
                                    data-wow-delay="0.4s"
                                    tabIndex={-1}
                                    style={{
                                       visibility: "visible",
                                       animationDelay: "0.4s",
                                       animationName: "fadeInUp"
                                    }}
                                 >
                                    <div>
                                       <img
                                          src="../assets/svg/fashion/gown.svg"
                                          className="blur-up lazyloaded"
                                          alt=""
                                       />
                                       <h5>Gown</h5>
                                    </div>
                                 </a>
                              </div>
                              <div
                                 className="slick-slide"
                                 style={{ width: 162 }}
                                 data-slick-index={0}
                                 aria-hidden="true"
                                 tabIndex={-1}
                              >
                                 <a
                                    href="shop.html"
                                    className="category-box category-dark wow fadeInUp"
                                    tabIndex={-1}
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div>
                                       <img
                                          src="../assets/svg/fashion/t-shirt.svg"
                                          className="blur-up lazyloaded"
                                          alt=""
                                       />
                                       <h5>tops</h5>
                                    </div>
                                 </a>
                              </div>
                              <div
                                 className="slick-slide"
                                 style={{ width: 162 }}
                                 data-slick-index={1}
                                 aria-hidden="true"
                                 tabIndex={-1}
                              >
                                 <a
                                    href="shop.html"
                                    className="category-box category-dark wow fadeInUp"
                                    data-wow-delay="0.05s"
                                    tabIndex={-1}
                                    style={{
                                       visibility: "visible",
                                       animationDelay: "0.05s",
                                       animationName: "fadeInUp"
                                    }}
                                 >
                                    <div>
                                       <img
                                          src="../assets/svg/fashion/jeans.svg"
                                          className="blur-up lazyloaded"
                                          alt=""
                                       />
                                       <h5>bottoms</h5>
                                    </div>
                                 </a>
                              </div>
                              <div
                                 className="slick-slide slick-current slick-active"
                                 style={{ width: 162 }}
                                 data-slick-index={2}
                                 aria-hidden="false"
                                 tabIndex={0}
                              >
                                 <a
                                    href="shop.html"
                                    className="category-box category-dark wow fadeInUp"
                                    data-wow-delay="0.1s"
                                    tabIndex={0}
                                    style={{
                                       visibility: "visible",
                                       animationDelay: "0.1s",
                                       animationName: "fadeInUp"
                                    }}
                                 >
                                    <div>
                                       <img
                                          src="../assets/svg/fashion/cords.svg"
                                          className="blur-up lazyloaded"
                                          alt=""
                                       />
                                       <h5>co-ords</h5>
                                    </div>
                                 </a>
                              </div>
                              <div
                                 className="slick-slide slick-active"
                                 style={{ width: 162 }}
                                 data-slick-index={3}
                                 aria-hidden="false"
                                 tabIndex={0}
                              >
                                 <a
                                    href="shop.html"
                                    className="category-box category-dark wow fadeInUp"
                                    data-wow-delay="0.15s"
                                    tabIndex={0}
                                    style={{
                                       visibility: "visible",
                                       animationDelay: "0.15s",
                                       animationName: "fadeInUp"
                                    }}
                                 >
                                    <div>
                                       <img
                                          src="../assets/svg/fashion/jacket.svg"
                                          className="blur-up lazyloaded"
                                          alt=""
                                       />
                                       <h5>jackets</h5>
                                    </div>
                                 </a>
                              </div>
                              <div
                                 className="slick-slide slick-active"
                                 style={{ width: 162 }}
                                 data-slick-index={4}
                                 aria-hidden="false"
                                 tabIndex={0}
                              >
                                 <a
                                    href="shop.html"
                                    className="category-box category-dark wow fadeInUp"
                                    data-wow-delay="0.2s"
                                    tabIndex={0}
                                    style={{
                                       visibility: "visible",
                                       animationDelay: "0.2s",
                                       animationName: "fadeInUp"
                                    }}
                                 >
                                    <div>
                                       <img
                                          src="../assets/svg/fashion/blzer.svg"
                                          className="blur-up lazyloaded"
                                          alt=""
                                       />
                                       <h5>blazers</h5>
                                    </div>
                                 </a>
                              </div>
                              <div
                                 className="slick-slide slick-active"
                                 style={{ width: 162 }}
                                 data-slick-index={5}
                                 aria-hidden="false"
                                 tabIndex={0}
                              >
                                 <a
                                    href="shop.html"
                                    className="category-box category-dark wow fadeInUp"
                                    data-wow-delay="0.25s"
                                    tabIndex={0}
                                    style={{
                                       visibility: "visible",
                                       animationDelay: "0.25s",
                                       animationName: "fadeInUp"
                                    }}
                                 >
                                    <div>
                                       <img
                                          src="../assets/svg/fashion/shapewear.svg"
                                          className="blur-up lazyloaded"
                                          alt=""
                                       />
                                       <h5>shapewear</h5>
                                    </div>
                                 </a>
                              </div>
                              <div
                                 className="slick-slide slick-active"
                                 style={{ width: 162 }}
                                 data-slick-index={6}
                                 aria-hidden="false"
                                 tabIndex={0}
                              >
                                 <a
                                    href="shop.html"
                                    className="category-box category-dark wow fadeInUp"
                                    data-wow-delay="0.3s"
                                    tabIndex={0}
                                    style={{
                                       visibility: "visible",
                                       animationDelay: "0.3s",
                                       animationName: "fadeInUp"
                                    }}
                                 >
                                    <div>
                                       <img
                                          src="../assets/svg/fashion/sleepwear.svg"
                                          className="blur-up lazyloaded"
                                          alt=""
                                       />
                                       <h5>sleepwear</h5>
                                    </div>
                                 </a>
                              </div>
                              <div
                                 className="slick-slide slick-active"
                                 style={{ width: 162 }}
                                 data-slick-index={7}
                                 aria-hidden="false"
                                 tabIndex={0}
                              >
                                 <a
                                    href="shop.html"
                                    className="category-box category-dark wow fadeInUp"
                                    data-wow-delay="0.35s"
                                    tabIndex={0}
                                    style={{
                                       visibility: "visible",
                                       animationDelay: "0.35s",
                                       animationName: "fadeInUp"
                                    }}
                                 >
                                    <div>
                                       <img
                                          src="../assets/svg/fashion/swimwear.svg"
                                          className="blur-up lazyloaded"
                                          alt=""
                                       />
                                       <h5>swimwear</h5>
                                    </div>
                                 </a>
                              </div>
                              <div
                                 className="slick-slide slick-active"
                                 style={{ width: 162 }}
                                 data-slick-index={8}
                                 aria-hidden="false"
                                 tabIndex={0}
                              >
                                 <a
                                    href="shop.html"
                                    className="category-box category-dark wow fadeInUp"
                                    data-wow-delay="0.4s"
                                    tabIndex={0}
                                    style={{
                                       visibility: "visible",
                                       animationDelay: "0.4s",
                                       animationName: "fadeInUp"
                                    }}
                                 >
                                    <div>
                                       <img
                                          src="../assets/svg/fashion/gown.svg"
                                          className="blur-up lazyloaded"
                                          alt=""
                                       />
                                       <h5>Gown</h5>
                                    </div>
                                 </a>
                              </div>
                              <div
                                 className="slick-slide slick-cloned slick-active"
                                 style={{ width: 162 }}
                                 data-slick-index={9}
                                 id=""
                                 aria-hidden="false"
                                 tabIndex={-1}
                              >
                                 <a
                                    href="shop.html"
                                    className="category-box category-dark wow fadeInUp"
                                    tabIndex={0}
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div>
                                       <img
                                          src="../assets/svg/fashion/t-shirt.svg"
                                          className="blur-up lazyloaded"
                                          alt=""
                                       />
                                       <h5>tops</h5>
                                    </div>
                                 </a>
                              </div>
                              <div
                                 className="slick-slide slick-cloned"
                                 style={{ width: 162 }}
                                 data-slick-index={10}
                                 id=""
                                 aria-hidden="true"
                                 tabIndex={-1}
                              >
                                 <a
                                    href="shop.html"
                                    className="category-box category-dark wow fadeInUp"
                                    data-wow-delay="0.05s"
                                    tabIndex={-1}
                                    style={{
                                       visibility: "visible",
                                       animationDelay: "0.05s",
                                       animationName: "fadeInUp"
                                    }}
                                 >
                                    <div>
                                       <img
                                          src="../assets/svg/fashion/jeans.svg"
                                          className="blur-up lazyloaded"
                                          alt=""
                                       />
                                       <h5>bottoms</h5>
                                    </div>
                                 </a>
                              </div>
                              <div
                                 className="slick-slide slick-cloned"
                                 style={{ width: 162 }}
                                 data-slick-index={11}
                                 id=""
                                 aria-hidden="true"
                                 tabIndex={-1}
                              >
                                 <a
                                    href="shop.html"
                                    className="category-box category-dark wow fadeInUp"
                                    data-wow-delay="0.1s"
                                    tabIndex={-1}
                                    style={{
                                       visibility: "visible",
                                       animationDelay: "0.1s",
                                       animationName: "fadeInUp"
                                    }}
                                 >
                                    <div>
                                       <img
                                          src="../assets/svg/fashion/cords.svg"
                                          className="blur-up lazyloaded"
                                          alt=""
                                       />
                                       <h5>co-ords</h5>
                                    </div>
                                 </a>
                              </div>
                              <div
                                 className="slick-slide slick-cloned"
                                 style={{ width: 162 }}
                                 data-slick-index={12}
                                 id=""
                                 aria-hidden="true"
                                 tabIndex={-1}
                              >
                                 <a
                                    href="shop.html"
                                    className="category-box category-dark wow fadeInUp"
                                    data-wow-delay="0.15s"
                                    tabIndex={-1}
                                    style={{
                                       visibility: "visible",
                                       animationDelay: "0.15s",
                                       animationName: "fadeInUp"
                                    }}
                                 >
                                    <div>
                                       <img
                                          src="../assets/svg/fashion/jacket.svg"
                                          className="blur-up lazyloaded"
                                          alt=""
                                       />
                                       <h5>jackets</h5>
                                    </div>
                                 </a>
                              </div>
                              <div
                                 className="slick-slide slick-cloned"
                                 style={{ width: 162 }}
                                 data-slick-index={13}
                                 id=""
                                 aria-hidden="true"
                                 tabIndex={-1}
                              >
                                 <a
                                    href="shop.html"
                                    className="category-box category-dark wow fadeInUp"
                                    data-wow-delay="0.2s"
                                    tabIndex={-1}
                                    style={{
                                       visibility: "visible",
                                       animationDelay: "0.2s",
                                       animationName: "fadeInUp"
                                    }}
                                 >
                                    <div>
                                       <img
                                          src="../assets/svg/fashion/blzer.svg"
                                          className="blur-up lazyloaded"
                                          alt=""
                                       />
                                       <h5>blazers</h5>
                                    </div>
                                 </a>
                              </div>
                              <div
                                 className="slick-slide slick-cloned"
                                 style={{ width: 162 }}
                                 data-slick-index={14}
                                 id=""
                                 aria-hidden="true"
                                 tabIndex={-1}
                              >
                                 <a
                                    href="shop.html"
                                    className="category-box category-dark wow fadeInUp"
                                    data-wow-delay="0.25s"
                                    tabIndex={-1}
                                    style={{
                                       visibility: "visible",
                                       animationDelay: "0.25s",
                                       animationName: "fadeInUp"
                                    }}
                                 >
                                    <div>
                                       <img
                                          src="../assets/svg/fashion/shapewear.svg"
                                          className="blur-up lazyloaded"
                                          alt=""
                                       />
                                       <h5>shapewear</h5>
                                    </div>
                                 </a>
                              </div>
                              <div
                                 className="slick-slide slick-cloned"
                                 style={{ width: 162 }}
                                 data-slick-index={15}
                                 id=""
                                 aria-hidden="true"
                                 tabIndex={-1}
                              >
                                 <a
                                    href="shop.html"
                                    className="category-box category-dark wow fadeInUp"
                                    data-wow-delay="0.3s"
                                    tabIndex={-1}
                                    style={{
                                       visibility: "visible",
                                       animationDelay: "0.3s",
                                       animationName: "fadeInUp"
                                    }}
                                 >
                                    <div>
                                       <img
                                          src="../assets/svg/fashion/sleepwear.svg"
                                          className="blur-up lazyloaded"
                                          alt=""
                                       />
                                       <h5>sleepwear</h5>
                                    </div>
                                 </a>
                              </div>
                              <div
                                 className="slick-slide slick-cloned"
                                 style={{ width: 162 }}
                                 data-slick-index={16}
                                 id=""
                                 aria-hidden="true"
                                 tabIndex={-1}
                              >
                                 <a
                                    href="shop.html"
                                    className="category-box category-dark wow fadeInUp"
                                    data-wow-delay="0.35s"
                                    tabIndex={-1}
                                    style={{
                                       visibility: "visible",
                                       animationDelay: "0.35s",
                                       animationName: "fadeInUp"
                                    }}
                                 >
                                    <div>
                                       <img
                                          src="../assets/svg/fashion/swimwear.svg"
                                          className="blur-up lazyloaded"
                                          alt=""
                                       />
                                       <h5>swimwear</h5>
                                    </div>
                                 </a>
                              </div>
                              <div
                                 className="slick-slide slick-cloned"
                                 style={{ width: 162 }}
                                 data-slick-index={17}
                                 id=""
                                 aria-hidden="true"
                                 tabIndex={-1}
                              >
                                 <a
                                    href="shop.html"
                                    className="category-box category-dark wow fadeInUp"
                                    data-wow-delay="0.4s"
                                    tabIndex={-1}
                                    style={{
                                       visibility: "visible",
                                       animationDelay: "0.4s",
                                       animationName: "fadeInUp"
                                    }}
                                 >
                                    <div>
                                       <img
                                          src="../assets/svg/fashion/gown.svg"
                                          className="blur-up lazyloaded"
                                          alt=""
                                       />
                                       <h5>Gown</h5>
                                    </div>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Category Section End */}
         {/* Deal Section Start */}
         <section className="product-section product-section-3">
  <div className="container-fluid-lg">
    <div className="title">
      <h2>Top Selling Items</h2>
    </div>
    <div className="row g-sm-4 g-3">
      <div className="col-xxl-12 ratio_110">
        <div className="slider-6 img-slider slick-initialized slick-slider">
          <div className="slick-list draggable">
            <div
              className="slick-track"
              style={{
                opacity: 1,
                width: 4403,
                transform: "translate3d(-1295px, 0px, 0px)"
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
                  className="product-box-5 wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="product-image">
                    <a
                      href="product.html"
                      tabIndex={-1}
                      className="bg-size blur-up lazyload"
                      style={{
                        backgroundImage:
                          'url("../assets/images/fashion/product/2.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block"
                      }}
                    >
                      <img
                        src="../assets/images/fashion/product/2.jpg"
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                        style={{ display: "none" }}
                      />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="wishlist-top"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      tabIndex={-1}
                      data-bs-original-title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-bookmark"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
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
                      <h5 className="name">white top</h5>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
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
                  className="product-box-5 wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="product-image">
                    <a
                      href="product.html"
                      tabIndex={-1}
                      className="bg-size blur-up lazyload"
                      style={{
                        backgroundImage:
                          'url("../assets/images/fashion/product/3.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block"
                      }}
                    >
                      <img
                        src="../assets/images/fashion/product/3.jpg"
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                        style={{ display: "none" }}
                      />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="wishlist-top"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      tabIndex={-1}
                      data-bs-original-title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-bookmark"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
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
                      <h5 className="name">blazer with cap</h5>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
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
                  className="product-box-5 wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="product-image">
                    <a
                      href="product.html"
                      tabIndex={-1}
                      className="bg-size blur-up lazyloaded"
                      style={{
                        backgroundImage:
                          'url("../assets/images/fashion/product/4.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block"
                      }}
                    >
                      <img
                        src="../assets/images/fashion/product/4.jpg"
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                        style={{ display: "none" }}
                      />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="wishlist-top"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      tabIndex={-1}
                      data-bs-original-title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-bookmark"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
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
                      <h5 className="name">Black dotted shirt</h5>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
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
                  className="product-box-5 wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="product-image">
                    <a
                      href="product.html"
                      tabIndex={-1}
                      className="bg-size blur-up lazyloaded"
                      style={{
                        backgroundImage:
                          'url("../assets/images/fashion/product/5.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block"
                      }}
                    >
                      <img
                        src="../assets/images/fashion/product/5.jpg"
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                        style={{ display: "none" }}
                      />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="wishlist-top"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      tabIndex={-1}
                      data-bs-original-title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-bookmark"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
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
                      <h5 className="name">long brown jacket</h5>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
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
                  className="product-box-5 wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="product-image">
                    <a
                      href="product.html"
                      tabIndex={-1}
                      className="bg-size blur-up lazyloaded"
                      style={{
                        backgroundImage:
                          'url("../assets/images/fashion/product/6.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block"
                      }}
                    >
                      <img
                        src="../assets/images/fashion/product/6.jpg"
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                        style={{ display: "none" }}
                      />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="wishlist-top"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      tabIndex={-1}
                      data-bs-original-title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-bookmark"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
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
                      <h5 className="name">Black dotted jacket</h5>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="slick-slide slick-current slick-active"
                style={{ width: 259 }}
                data-slick-index={0}
                aria-hidden="false"
                tabIndex={0}
              >
                <div
                  className="product-box-5 wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="product-image">
                    <a
                      href="product.html"
                      tabIndex={0}
                      className="bg-size blur-up lazyloaded"
                      style={{
                        backgroundImage:
                          'url("../assets/images/fashion/product/1.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block"
                      }}
                    >
                      <img
                        src="../assets/images/fashion/product/1.jpg"
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                        style={{ display: "none" }}
                      />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="wishlist-top"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      tabIndex={0}
                      data-bs-original-title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-bookmark"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
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
                      <h5 className="name">brown khadi jacket</h5>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="slick-slide slick-active"
                style={{ width: 259 }}
                data-slick-index={1}
                aria-hidden="false"
                tabIndex={0}
              >
                <div
                  className="product-box-5 wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="product-image">
                    <a
                      href="product.html"
                      tabIndex={0}
                      className="bg-size blur-up lazyloaded"
                      style={{
                        backgroundImage:
                          'url("../assets/images/fashion/product/2.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block"
                      }}
                    >
                      <img
                        src="../assets/images/fashion/product/2.jpg"
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                        style={{ display: "none" }}
                      />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="wishlist-top"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      tabIndex={0}
                      data-bs-original-title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-bookmark"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
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
                      <h5 className="name">white top</h5>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="slick-slide slick-active"
                style={{ width: 259 }}
                data-slick-index={2}
                aria-hidden="false"
                tabIndex={0}
              >
                <div
                  className="product-box-5 wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="product-image">
                    <a
                      href="product.html"
                      tabIndex={0}
                      className="bg-size blur-up lazyloaded"
                      style={{
                        backgroundImage:
                          'url("../assets/images/fashion/product/3.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block"
                      }}
                    >
                      <img
                        src="../assets/images/fashion/product/3.jpg"
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                        style={{ display: "none" }}
                      />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="wishlist-top"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      tabIndex={0}
                      data-bs-original-title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-bookmark"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
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
                      <h5 className="name">blazer with cap</h5>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="slick-slide slick-active"
                style={{ width: 259 }}
                data-slick-index={3}
                aria-hidden="false"
                tabIndex={0}
              >
                <div
                  className="product-box-5 wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="product-image">
                    <a
                      href="product.html"
                      tabIndex={0}
                      className="bg-size blur-up lazyloaded"
                      style={{
                        backgroundImage:
                          'url("../assets/images/fashion/product/4.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block"
                      }}
                    >
                      <img
                        src="../assets/images/fashion/product/4.jpg"
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                        style={{ display: "none" }}
                      />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="wishlist-top"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      tabIndex={0}
                      data-bs-original-title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-bookmark"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
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
                      <h5 className="name">Black dotted shirt</h5>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
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
                  className="product-box-5 wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="product-image">
                    <a
                      href="product.html"
                      tabIndex={0}
                      className="bg-size blur-up lazyloaded"
                      style={{
                        backgroundImage:
                          'url("../assets/images/fashion/product/5.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block"
                      }}
                    >
                      <img
                        src="../assets/images/fashion/product/5.jpg"
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                        style={{ display: "none" }}
                      />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="wishlist-top"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      tabIndex={0}
                      data-bs-original-title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-bookmark"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
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
                      <h5 className="name">long brown jacket</h5>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="slick-slide"
                style={{ width: 259 }}
                data-slick-index={5}
                aria-hidden="true"
                tabIndex={-1}
              >
                <div
                  className="product-box-5 wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="product-image">
                    <a
                      href="product.html"
                      tabIndex={-1}
                      className="bg-size blur-up lazyloaded"
                      style={{
                        backgroundImage:
                          'url("../assets/images/fashion/product/6.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block"
                      }}
                    >
                      <img
                        src="../assets/images/fashion/product/6.jpg"
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                        style={{ display: "none" }}
                      />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="wishlist-top"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      tabIndex={-1}
                      data-bs-original-title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-bookmark"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
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
                      <h5 className="name">Black dotted jacket</h5>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="slick-slide slick-cloned"
                style={{ width: 259 }}
                data-slick-index={6}
                id=""
                aria-hidden="true"
                tabIndex={-1}
              >
                <div
                  className="product-box-5 wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="product-image">
                    <a
                      href="product.html"
                      tabIndex={-1}
                      className="bg-size blur-up lazyloaded"
                      style={{
                        backgroundImage:
                          'url("../assets/images/fashion/product/1.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block"
                      }}
                    >
                      <img
                        src="../assets/images/fashion/product/1.jpg"
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                        style={{ display: "none" }}
                      />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="wishlist-top"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      tabIndex={-1}
                      data-bs-original-title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-bookmark"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
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
                      <h5 className="name">brown khadi jacket</h5>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="slick-slide slick-cloned"
                style={{ width: 259 }}
                data-slick-index={7}
                id=""
                aria-hidden="true"
                tabIndex={-1}
              >
                <div
                  className="product-box-5 wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="product-image">
                    <a
                      href="product.html"
                      tabIndex={-1}
                      className="bg-size blur-up lazyloaded"
                      style={{
                        backgroundImage:
                          'url("../assets/images/fashion/product/2.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block"
                      }}
                    >
                      <img
                        src="../assets/images/fashion/product/2.jpg"
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                        style={{ display: "none" }}
                      />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="wishlist-top"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      tabIndex={-1}
                      data-bs-original-title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-bookmark"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
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
                      <h5 className="name">white top</h5>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
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
                  className="product-box-5 wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="product-image">
                    <a
                      href="product.html"
                      tabIndex={-1}
                      className="bg-size blur-up lazyloaded"
                      style={{
                        backgroundImage:
                          'url("../assets/images/fashion/product/3.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block"
                      }}
                    >
                      <img
                        src="../assets/images/fashion/product/3.jpg"
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                        style={{ display: "none" }}
                      />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="wishlist-top"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      tabIndex={-1}
                      data-bs-original-title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-bookmark"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
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
                      <h5 className="name">blazer with cap</h5>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
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
                  className="product-box-5 wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="product-image">
                    <a
                      href="product.html"
                      tabIndex={-1}
                      className="bg-size blur-up lazyloaded"
                      style={{
                        backgroundImage:
                          'url("../assets/images/fashion/product/4.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block"
                      }}
                    >
                      <img
                        src="../assets/images/fashion/product/4.jpg"
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                        style={{ display: "none" }}
                      />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="wishlist-top"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      tabIndex={-1}
                      data-bs-original-title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-bookmark"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
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
                      <h5 className="name">Black dotted shirt</h5>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
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
                  className="product-box-5 wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="product-image">
                    <a
                      href="product.html"
                      tabIndex={-1}
                      className="bg-size blur-up lazyloaded"
                      style={{
                        backgroundImage:
                          'url("../assets/images/fashion/product/5.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block"
                      }}
                    >
                      <img
                        src="../assets/images/fashion/product/5.jpg"
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                        style={{ display: "none" }}
                      />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="wishlist-top"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      tabIndex={-1}
                      data-bs-original-title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-bookmark"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
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
                      <h5 className="name">long brown jacket</h5>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
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
                  className="product-box-5 wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="product-image">
                    <a
                      href="product.html"
                      tabIndex={-1}
                      className="bg-size blur-up lazyloaded"
                      style={{
                        backgroundImage:
                          'url("../assets/images/fashion/product/6.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block"
                      }}
                    >
                      <img
                        src="../assets/images/fashion/product/6.jpg"
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                        style={{ display: "none" }}
                      />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="wishlist-top"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      tabIndex={-1}
                      data-bs-original-title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-bookmark"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
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
                      <h5 className="name">Black dotted jacket</h5>
                    </a>
                    <h5 className="sold text-content">
                      <span className="theme-color price">$26.69</span>
                      <del>28.56</del>
                    </h5>
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

         {/* Deal Section End */}
         {/* banner section start */}
         <section>
            <div className="container-fluid-lg">
               <div className="row g-md-4 g-3">
                  <div className="col-xxl-8 col-xl-12 col-md-7">
                     <div
                        className="banner-contain hover-effect bg-size blur-up lazyloaded"
                        style={{
                           backgroundImage: 'url("../assets/images/fashion/banner/1.jpg")',
                           backgroundSize: "cover",
                           backgroundPosition: "center center",
                           backgroundRepeat: "no-repeat",
                           display: "block"
                        }}
                     >
                        <img
                           src="../assets/images/fashion/banner/1.jpg"
                           className="bg-img blur-up lazyload"
                           alt=""
                           style={{ display: "none" }}
                        />
                        <div className="banner-details p-center-left p-4">
                           <div>
                              <h2 className="text-kaushan fw-normal theme-color">
                                 Get Ready To
                              </h2>
                              <h3 className="mt-2 mb-3">TAKE ON THE DAY!</h3>
                              <p className="text-content banner-text">
                                 In publishing and graphic design, Lorem ipsum is a placeholder
                                 text commonly used to demonstrate.
                              </p>
                              <button
                                 onclick="location.href = 'shop.html';"
                                 className="btn btn-animation btn-sm mend-auto"
                                 fdprocessedid="732cr7"
                              >
                                 Shop Now <i className="fa-solid fa-arrow-right icon" />
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-12 col-md-5">
                     <a
                        href="shop.html"
                        className="banner-contain hover-effect h-100 bg-size blur-up lazyloaded"
                        style={{
                           backgroundImage: 'url("../assets/images/fashion/banner/2.jpg")',
                           backgroundSize: "cover",
                           backgroundPosition: "center center",
                           backgroundRepeat: "no-repeat",
                           display: "block"
                        }}
                     >
                        <img
                           src="../assets/images/fashion/banner/2.jpg"
                           className="bg-img blur-up lazyload"
                           alt=""
                           style={{ display: "none" }}
                        />
                        <div className="banner-details p-center-left p-4 h-100">
                           <div>
                              <h2 className="text-kaushan fw-normal text-danger">20% Off</h2>
                              <h3 className="mt-2 mb-2 theme-color">SUMMRY</h3>
                              <h3 className="fw-normal product-name text-title">Product</h3>
                           </div>
                        </div>
                     </a>
                  </div>
               </div>
            </div>
         </section>

         {/* banner section end */}
         {/* Top Selling Section Start */}
         <section className="top-selling-section">
            <div className="container-fluid-lg">
               <div className="row">
                  <div className="col-xxl-3 col-lg-4 d-lg-block d-none">
                     <div className="ratio_156">
                        <div className="banner-contain-2 hover-effect">
                           <img
                              src="../assets/images/fashion/banner/3.jpg"
                              className="bg-img  lazyload"
                              alt=""
                           />
                           <div className="banner-detail-2 p-bottom-center text-center home-p-medium">
                              <div>
                                 <h2 className="text-qwitcher">Passion Meet</h2>
                                 <h3>PERFECTION</h3>
                                 <button
                                    // onclick="location.href = 'shop';"
                                    onClick={() => { window.location.href = '/shop' }}
                                    className="btn btn-md"
                                 >
                                    Shop Now <i className="fa-solid fa-arrow-right icon" />
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-9 col-lg-8">
                     <div className="slider-3_3 product-wrapper slick-initialized slick-slider">
                        <div className="slick-list draggable">
                           <div
                              className="slick-track"
                              style={{
                                 opacity: 1,
                                 width: 969,
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
                                 <div className="row">
                                    <div className="col-12">
                                       <div className="top-selling-box">
                                          <div className="top-selling-title">
                                             <h3>Top Selling</h3>
                                          </div>
                                          <div
                                             className="top-selling-contain wow fadeInUp"
                                             style={{ visibility: "visible", animationName: "fadeInUp" }}
                                          >
                                             <a
                                                href="product.html"
                                                className="top-selling-image"
                                                tabIndex={0}
                                             >
                                                <img
                                                   src="../assets/images/fashion/product/1.jpg"
                                                   className="img-fluid blur-up lazyloaded"
                                                   alt=""
                                                />
                                             </a>
                                             <div className="top-selling-detail">
                                                <a href="product.html" tabIndex={0}>
                                                   <h5>Tuffets Whole Wheat Bread</h5>
                                                </a>
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
                                                animationName: "fadeIn"
                                             }}
                                          >
                                             <a
                                                href="product.html"
                                                className="top-selling-image"
                                                tabIndex={0}
                                             >
                                                <img
                                                   src="../assets/images/fashion/product/2.jpg"
                                                   className="img-fluid blur-up lazyloaded"
                                                   alt=""
                                                />
                                             </a>
                                             <div className="top-selling-detail">
                                                <a href="product.html" tabIndex={0}>
                                                   <h5>Potato</h5>
                                                </a>
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
                                                   <span>(34)</span>
                                                </div>
                                                <h6>$ 40.00</h6>
                                             </div>
                                          </div>
                                          <div
                                             className="top-selling-contain wow fadeIn"
                                             data-wow-delay="0.1s"
                                             style={{
                                                visibility: "visible",
                                                animationDelay: "0.1s",
                                                animationName: "fadeIn"
                                             }}
                                          >
                                             <a
                                                href="product.html"
                                                className="top-selling-image"
                                                tabIndex={0}
                                             >
                                                <img
                                                   src="../assets/images/fashion/product/3.jpg"
                                                   className="img-fluid blur-up lazyloaded"
                                                   alt=""
                                                />
                                             </a>
                                             <div className="top-selling-detail">
                                                <a href="product.html" tabIndex={0}>
                                                   <h5>Green Chilli</h5>
                                                </a>
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
                                                   <span>(34)</span>
                                                </div>
                                                <h6>$ 45.00</h6>
                                             </div>
                                          </div>
                                          <div
                                             className="top-selling-contain wow fadeIn"
                                             data-wow-delay="0.15s"
                                             style={{
                                                visibility: "visible",
                                                animationDelay: "0.15s",
                                                animationName: "fadeIn"
                                             }}
                                          >
                                             <a
                                                href="product.html"
                                                className="top-selling-image"
                                                tabIndex={0}
                                             >
                                                <img
                                                   src="../assets/images/fashion/product/4.jpg"
                                                   className="img-fluid blur-up lazyloaded"
                                                   alt=""
                                                />
                                             </a>
                                             <div className="top-selling-detail">
                                                <a href="product.html" tabIndex={0}>
                                                   <h5>Muffets Burger Bun</h5>
                                                </a>
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
                                                   <span>(34)</span>
                                                </div>
                                                <h6>$ 70.00</h6>
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
                                             <h3>Trending Products</h3>
                                          </div>
                                          <div
                                             className="top-selling-contain wow fadeInUp"
                                             style={{ visibility: "visible", animationName: "fadeInUp" }}
                                          >
                                             <a
                                                href="product.html"
                                                className="top-selling-image"
                                                tabIndex={0}
                                             >
                                                <img
                                                   src="../assets/images/fashion/product/5.jpg"
                                                   className="img-fluid blur-up lazyloaded"
                                                   alt=""
                                                />
                                             </a>
                                             <div className="top-selling-detail">
                                                <a href="product.html" tabIndex={0}>
                                                   <h5>Good Life Refined Sunflower Oil</h5>
                                                </a>
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
                                                animationName: "fadeIn"
                                             }}
                                          >
                                             <a
                                                href="product.html"
                                                className="top-selling-image"
                                                tabIndex={0}
                                             >
                                                <img
                                                   src="../assets/images/fashion/product/6.jpg"
                                                   className="img-fluid blur-up lazyloaded"
                                                   alt=""
                                                />
                                             </a>
                                             <div className="top-selling-detail">
                                                <a href="product.html" tabIndex={0}>
                                                   <h5>Good Life Raw Peanuts</h5>
                                                </a>
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
                                                   <span>(34)</span>
                                                </div>
                                                <h6>$ 40.00</h6>
                                             </div>
                                          </div>
                                          <div
                                             className="top-selling-contain wow fadeIn"
                                             data-wow-delay="0.1s"
                                             style={{
                                                visibility: "visible",
                                                animationDelay: "0.1s",
                                                animationName: "fadeIn"
                                             }}
                                          >
                                             <a
                                                href="product.html"
                                                className="top-selling-image"
                                                tabIndex={0}
                                             >
                                                <img
                                                   src="../assets/images/fashion/product/7.jpg"
                                                   className="img-fluid blur-up lazyloaded"
                                                   alt=""
                                                />
                                             </a>
                                             <div className="top-selling-detail">
                                                <a href="product.html" tabIndex={0}>
                                                   <h5>Good Life Raw Peanuts</h5>
                                                </a>
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
                                                   <span>(34)</span>
                                                </div>
                                                <h6>$ 85.00</h6>
                                             </div>
                                          </div>
                                          <div
                                             className="top-selling-contain wow fadeIn"
                                             data-wow-delay="0.15s"
                                             style={{
                                                visibility: "visible",
                                                animationDelay: "0.15s",
                                                animationName: "fadeIn"
                                             }}
                                          >
                                             <a
                                                href="product.html"
                                                className="top-selling-image"
                                                tabIndex={0}
                                             >
                                                <img
                                                   src="../assets/images/fashion/product/8.jpg"
                                                   className="img-fluid blur-up lazyloaded"
                                                   alt=""
                                                />
                                             </a>
                                             <div className="top-selling-detail">
                                                <a href="product.html" tabIndex={0}>
                                                   <h5>Frooti Mango Drink</h5>
                                                </a>
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
                                                   <span>(34)</span>
                                                </div>
                                                <h6>$ 10.00</h6>
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
                                             <h3>Recently added</h3>
                                          </div>
                                          <div
                                             className="top-selling-contain wow fadeInUp"
                                             style={{ visibility: "visible", animationName: "fadeInUp" }}
                                          >
                                             <a
                                                href="product.html"
                                                className="top-selling-image"
                                                tabIndex={0}
                                             >
                                                <img
                                                   src="../assets/images/fashion/product/9.jpg"
                                                   className="img-fluid blur-up lazyloaded"
                                                   alt=""
                                                />
                                             </a>
                                             <div className="top-selling-detail">
                                                <a href="product.html" tabIndex={0}>
                                                   <h5>Tuffets Britannia Cheezza</h5>
                                                </a>
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
                                                animationName: "fadeIn"
                                             }}
                                          >
                                             <a
                                                href="product.html"
                                                className="top-selling-image"
                                                tabIndex={0}
                                             >
                                                <img
                                                   src="../assets/images/fashion/product/10.jpg"
                                                   className="img-fluid blur-up lazyloaded"
                                                   alt=""
                                                />
                                             </a>
                                             <div className="top-selling-detail">
                                                <a href="product.html" tabIndex={0}>
                                                   <h5>Long Life Toned Milk</h5>
                                                </a>
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
                                                   <span>(34)</span>
                                                </div>
                                                <h6>$ 40.00</h6>
                                             </div>
                                          </div>
                                          <div
                                             className="top-selling-contain wow fadeIn"
                                             data-wow-delay="0.1s"
                                             style={{
                                                visibility: "visible",
                                                animationDelay: "0.1s",
                                                animationName: "fadeIn"
                                             }}
                                          >
                                             <a
                                                href="product.html"
                                                className="top-selling-image"
                                                tabIndex={0}
                                             >
                                                <img
                                                   src="../assets/images/fashion/product/11.jpg"
                                                   className="img-fluid blur-up lazyloaded"
                                                   alt=""
                                                />
                                             </a>
                                             <div className="top-selling-detail">
                                                <a href="product.html" tabIndex={0}>
                                                   <h5>Organic Tomato</h5>
                                                </a>
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
                                                   <span>(34)</span>
                                                </div>
                                                <h6>$ 45.00</h6>
                                             </div>
                                          </div>
                                          <div
                                             className="top-selling-contain wow fadeIn"
                                             data-wow-delay="0.15s"
                                             style={{
                                                visibility: "visible",
                                                animationDelay: "0.15s",
                                                animationName: "fadeIn"
                                             }}
                                          >
                                             <a
                                                href="product.html"
                                                className="top-selling-image"
                                                tabIndex={0}
                                             >
                                                <img
                                                   src="../assets/images/fashion/product/12.jpg"
                                                   className="img-fluid blur-up lazyloaded"
                                                   alt=""
                                                />
                                             </a>
                                             <div className="top-selling-detail">
                                                <a href="product.html" tabIndex={0}>
                                                   <h5>Organic Pure Honey</h5>
                                                </a>
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
                                                   <span>(34)</span>
                                                </div>
                                                <h6>$ 90.00</h6>
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
         {/* Top Selling Section End */}
         {/* banner section start */}
         <section className="section-t-space">
            <div className="container-fluid-lg">
               <div
                  className="banner-contain bg-size blur-up lazyloaded"
                  style={{
                     backgroundImage: 'url("../assets/images/fashion/banner/4.jpg")',
                     backgroundSize: "cover",
                     backgroundPosition: "center center",
                     backgroundRepeat: "no-repeat",
                     display: "block"
                  }}
               >
                  <img
                     src="../assets/images/fashion/banner/4.jpg"
                     className="bg-img blur-up lazyload"
                     alt=""
                     style={{ display: "none" }}
                  />
                  <div className="banner-details p-center p-4 text-white text-center">
                     <div>
                        <h3 className="lh-base fw-bold offer-text">
                           Get $3 Cashback! Min Order of $30
                        </h3>
                        <h6 className="coupon-code coupon-code-white">
                           Use Code : GROCERY1920
                        </h6>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* banner section start */}
         {/* Deal Section Start */}
         <section className="product-section product-section-3">
            <div className="container-fluid-lg">
               <div className="title">
                  <h2>Top Selling Items</h2>
               </div>
               <div className="row g-sm-4 g-3 section-b-space">
                  <div className="col-xxl-12 ratio_110">
                     <div className="slider-6 img-slider slick-initialized slick-slider">
                        <div className="slick-list draggable">
                           <div
                              className="slick-track"
                              style={{
                                 opacity: 1,
                                 width: 4403,
                                 transform: "translate3d(-2331px, 0px, 0px)"
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={-1}
                                          className="bg-size blur-up lazyload"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/8.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/8.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={-1}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={-1}
                                          className="bg-size blur-up lazyload"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/9.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/9.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={-1}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={-1}
                                          className="bg-size blur-up lazyload"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/10.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/10.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={-1}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={-1}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/11.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/11.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={-1}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={-1}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/12.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/12.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={-1}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={-1}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/7.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/7.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={-1}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={-1}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/8.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/8.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={-1}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={-1}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/9.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/9.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={-1}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
                                    </div>
                                 </div>
                              </div>
                              <div
                                 className="slick-slide"
                                 style={{ width: 259 }}
                                 data-slick-index={3}
                                 aria-hidden="true"
                                 tabIndex={-1}
                              >
                                 <div
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={-1}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/10.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/10.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={-1}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
                                    </div>
                                 </div>
                              </div>
                              <div
                                 className="slick-slide slick-current slick-active"
                                 style={{ width: 259 }}
                                 data-slick-index={4}
                                 aria-hidden="false"
                                 tabIndex={0}
                              >
                                 <div
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={0}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/11.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/11.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={0}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={0}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/12.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/12.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={0}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={0}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/7.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/7.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={0}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={0}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/8.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/8.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={0}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
                                    </div>
                                 </div>
                              </div>
                              <div
                                 className="slick-slide slick-cloned slick-active"
                                 style={{ width: 259 }}
                                 data-slick-index={8}
                                 id=""
                                 aria-hidden="false"
                                 tabIndex={-1}
                              >
                                 <div
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={0}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/9.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/9.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={0}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={-1}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/10.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/10.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={-1}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={-1}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/11.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/11.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={-1}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={-1}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/12.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/12.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={-1}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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

         {/* Deal Section End */}
         {/* Deal Section Start */}
         <section className="product-section product-section-3">
            <div className="container-fluid-lg">
               <div className="title">
                  <h2>Top Selling Items</h2>
               </div>
               <div className="row g-sm-4 g-3">
                  <div className="col-xxl-12 ratio_110">
                     <div className="slider-6 img-slider slick-initialized slick-slider">
                        <div className="slick-list draggable">
                           <div
                              className="slick-track"
                              style={{
                                 opacity: 1,
                                 width: 4403,
                                 transform: "translate3d(-2331px, 0px, 0px)"
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={-1}
                                          className="bg-size blur-up lazyload"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/2.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/2.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={-1}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={-1}
                                          className="bg-size blur-up lazyload"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/3.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/3.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={-1}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={-1}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/4.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/4.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={-1}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={-1}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/5.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/5.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={-1}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={-1}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/6.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/6.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={-1}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={-1}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/1.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/1.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={-1}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={-1}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/2.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/2.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={-1}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={-1}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/3.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/3.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={-1}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
                                    </div>
                                 </div>
                              </div>
                              <div
                                 className="slick-slide"
                                 style={{ width: 259 }}
                                 data-slick-index={3}
                                 aria-hidden="true"
                                 tabIndex={-1}
                              >
                                 <div
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={-1}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/4.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/4.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={-1}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
                                    </div>
                                 </div>
                              </div>
                              <div
                                 className="slick-slide slick-current slick-active"
                                 style={{ width: 259 }}
                                 data-slick-index={4}
                                 aria-hidden="false"
                                 tabIndex={0}
                              >
                                 <div
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={0}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/5.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/5.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={0}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={0}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/6.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/6.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={0}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={0}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/1.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/1.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={0}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={0}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/2.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/2.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={0}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
                                    </div>
                                 </div>
                              </div>
                              <div
                                 className="slick-slide slick-cloned slick-active"
                                 style={{ width: 259 }}
                                 data-slick-index={8}
                                 id=""
                                 aria-hidden="false"
                                 tabIndex={-1}
                              >
                                 <div
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={0}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/3.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/3.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={0}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={-1}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/4.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/4.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={-1}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={-1}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/5.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/5.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={-1}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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
                                    className="product-box-5 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                 >
                                    <div className="product-image">
                                       <a
                                          href="product.html"
                                          tabIndex={-1}
                                          className="bg-size blur-up lazyloaded"
                                          style={{
                                             backgroundImage:
                                                'url("../assets/images/fashion/product/6.jpg")',
                                             backgroundSize: "cover",
                                             backgroundPosition: "center center",
                                             backgroundRepeat: "no-repeat",
                                             display: "block"
                                          }}
                                       >
                                          <img
                                             src="../assets/images/fashion/product/6.jpg"
                                             className="img-fluid blur-up lazyload bg-img"
                                             alt=""
                                             style={{ display: "none" }}
                                          />
                                       </a>
                                       <a
                                          href="javascript:void(0)"
                                          className="wishlist-top"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title=""
                                          tabIndex={-1}
                                          data-bs-original-title="Wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={24}
                                             height={24}
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-bookmark"
                                          >
                                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                          </svg>
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
                                          <h5 className="name">Black Gown</h5>
                                       </a>
                                       <h5 className="sold text-content">
                                          <span className="theme-color price">$26.69</span>
                                          <del>28.56</del>
                                       </h5>
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

         {/* Deal Section End */}
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
                           it is a long established fact that a reader will be distracted by
                           the readable content.
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
                                       TechGropse eCommerce Demo Store, Demo store india 345 -
                                       659
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
                     <p className="light-text">2023 Copyright By TechGropse eCommerce</p>
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
                                 src="../assets/images/fashion/product/4.jpg"
                                 className="img-fluid  lazyload"
                                 alt=""
                              />
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="right-sidebar-modal">
                              <h4 className="title-name">Black Dotted Shirt</h4>
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
                                 <select className="form-select select-form-size" defaultValue="Select Size">
                                    <option selected="">Select Size</option>
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
                                    onClick={() => { window.location.href = '/cart' }}
                                    className="btn btn-md add-cart-button icon"
                                 >
                                    Add To Cart
                                 </button>
                                 <button
                                    //  onclick="location.href = 'product-left';"
                                    onClick={() => { window.location.href = '/product-left' }}
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

export default IndexLifestyle
