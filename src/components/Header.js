import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { ProductSearch } from "./HttpServices";
import { DeleteCartProduct } from "./HttpServices";
import {
  useGetCartListheaderMutation,
  useGetCategoryListQuery,
  useTopBannerListMutation,
} from "../services/Post";
import { useSubCategoryListMutation } from "../services/Post";
import { useGetTrendingProductQuery } from "../services/Post";
import { useDispatch, useSelector } from "react-redux";
import { searchQuerydata } from "../app/slice/SearchSlice";
import Swal from "sweetalert2";

function Header({ Dash }) {
  const ecommercetoken = useSelector((data) => data?.local?.ecomWebtoken);
  const ecomUserId = useSelector((data) => data?.local?.ecomUserid);
  console.log("ecomUserId header", ecomUserId);
  const categoryListItems = useGetCategoryListQuery();
  const [subCategoryList] = useSubCategoryListMutation();
  const [bannerList] = useTopBannerListMutation();
  const trendingProduct = useGetTrendingProductQuery();
  const [trendingList, setTrendingList] = useState([]);
  const [categoryListData, setCategoryListData] = useState([]);
  const [cartListItems, setCartListItems] = useState([]);

  const [subCategoryItems, setSubCategoryItems] = useState([]);
  const [bannerItems, setBannerItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showSale, setShowSale] = useState(false);
  const cartTotal = localStorage?.getItem("cartTotal");
  const [cartListQuery] = useGetCartListheaderMutation();

  axios.defaults.headers.common["x-auth-token-user"] =
    localStorage.getItem("token");
  localStorage?.setItem("productSearch", searchQuery);
  const loginId = localStorage?.getItem("loginId");

  useEffect(() => {
    if (ecomUserId) {
      handleCartList(ecomUserId);
    }
  }, [ecomUserId]);

  const handleCartList = async () => {
    const datas = {
      ecomUserId,
      ecommercetoken,
    };

    try {
      const respone = await cartListQuery(datas);

      setCartListItems(respone?.carts);
    } catch (error) {
      console.log(error);
    }
  };

  let totalSubtotal = 0;
  cartListItems
    ?.slice()
    ?.reverse()
    ?.forEach((item) => {
      const subtotal = (item?.varient?.Price || 0) * (item?.quantity || 1);
      totalSubtotal += subtotal;
    });

  useEffect(() => {
    if (trendingProduct?.data?.results?.productlist) {
      setTrendingList(trendingProduct?.data?.results?.productlist);
    }
  }, [trendingProduct?.data?.results?.productlist]);

  useEffect(() => {
    const reversedList =
      categoryListItems?.data?.results?.list?.slice().reverse() ?? [];
    setCategoryListData(reversedList);
  }, [categoryListItems]);

  const handleOnhover = (categoryId) => {
    handleSaveChanges1(categoryId);
  };

  const handleSaveChanges1 = async (categoryId) => {
    const editAddress = {
      id: categoryId,
    };
    const result = await subCategoryList(editAddress);
    if (result) {
      setSubCategoryItems(result?.data?.results?.listData);
    }
  };
  const handleBannerChanges = async (categoryId) => {
    const editAddress = {
      id: categoryId,
    };
    const result = await bannerList(editAddress);
    if (result) {
      localStorage?.setItem(
        "bannerItems",
        encodeURIComponent(JSON.stringify(result?.data?.results?.topBanner))
      );
      // setBannerItems(result?.data?.results?.banner);
    }
  };

  // useEffect(() => {
  //   const welcomeInterval = setInterval(() => {
  //     setShowWelcome(true);
  //     setShowSale(false);
  //   }, 1000);

  //   const saleInterval = setInterval(() => {
  //     setShowWelcome(false);
  //     setShowSale(true);
  //   }, 2000);

  //   return () => {
  //     clearInterval(welcomeInterval);
  //     clearInterval(saleInterval);
  //   };
  // }, []);

  const searchData = async () => {
    try {
      const { data, error } = await ProductSearch(searchQuery);
      if (error) {
        console.log(error);
      } else {
        console.log("product search", data);
        console.log("product list", data?.results?.productData);
        setSuggestions(data?.results?.productData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const hideSuggestions = () => {
    setSuggestions([]);
  };

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchQuery(inputValue);
    dispatch(searchQuerydata(inputValue));
    searchData();
  };

  const deleteCartItem = async (_id) => {
    try {
      const { data, error } = await DeleteCartProduct(_id);
      error ? console.log(error) : console.log(data);
      setCartListItems((prevCartList) =>
        prevCartList.filter((item) => item._id !== _id)
      );
      console.log(data.results.deleteDta);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCartButtonClick = () => {
    if (ecommercetoken) {
    } else {
      Swal.fire({
        icon: "info",
        title: "Login Required",
        text: "Please login to access the shopping cart.",
        showCancelButton: true,
        confirmButtonColor: "#0da487",
        confirmButtonText: "Login",
        cancelButtonText: "Cancel",
        customClass: {
          confirmButton: "custom-confirm-button-class me-3",
          // cancelButton: "swal-button-margin",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/login";
        }
      });
    }
  };
  return (
    <>
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
              {/* <div className="col-xxl-6 col-lg-9 d-lg-block d-none">
                <div className="header-offer">
                  <div className="notification-slider">
                    {showWelcome && (
                      <div>
                        <div
                          className={`timer-notification ${
                            showWelcome ? "fade-in" : "fade-out"
                          }`}
                        >
                          <h6>
                            <strong className="me-1">
                              Welcome to Techgropse eCommerce!
                            </strong>
                            Wrap new offers/gift every single day on Weekends.
                            <strong className="ms-1">
                              New Coupon Code: Fast024
                            </strong>
                          </h6>
                        </div>
                      </div>
                    )}

                    {showSale && (
                      <div>
                        <div
                          className={`timer-notification ${
                            showSale ? "fade-in" : "fade-out"
                          }`}
                        >
                          <h6>
                            Something you love is now on sale!
                            <Link to="/shop" className="text-white">
                              Buy Now !
                            </Link>
                          </h6>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div> */}

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
                    className="navbar-toggler d-xl-none d-inline navbar-menu-button"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#primaryMenu"
                  >
                    <span className="navbar-toggler-icon">
                      <i className="fa-solid fa-bars" />
                    </span>
                  </button>
                  <Link to="*" className="web-logo nav-logo">
                    <img
                      src="../assets/images/logo/logo.png"
                      className="img-fluid  lazyload"
                      alt=""
                    />
                  </Link>
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
                        <i className="fas fa-angle-down" />
                      </button>
                    </div>
                    <form>
                      <div className="search-box">
                        <div className="input-group">
                          <input
                            type="search"
                            className="form-control"
                            placeholder="I'm searching for..."
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                            value={searchQuery}
                            onChange={handleInputChange}
                          />
                          <button
                            className="btn"
                            type="button"
                            id="button-addon2"
                            onClick={searchData}
                          >
                            Search
                          </button>
                        </div>
                        {suggestions?.length > 0 && (
                          <div
                            className="suggestion-list shadow"
                            style={{
                              position: "absolute",
                              zIndex: "1",
                              width: "44.2%",
                            }}
                          >
                            <ul
                              className="suggestion-ul"
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                backgroundColor: "white",
                              }}
                            >
                              {suggestions.map((product) => (
                                <li
                                  key={product._id}
                                  className="suggestion-li ms-2"
                                >
                                  <Link
                                    // to={`/shop2/${encodeURIComponent(
                                    //   searchQuery
                                    // )}`}
                                    to="/shop"
                                    state={{ id: searchQuery }}
                                    className="suggestion-item"
                                    onClick={hideSuggestions}
                                  >
                                    <div className="product-image">
                                      <img
                                        src={
                                          product?.addVarient[0]?.product_Pic[0]
                                        }
                                        alt={product.productName_en}
                                        width={20}
                                        height={20}
                                      />
                                    </div>
                                    <div className="product-name">
                                      {product.productName_en}
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </form>
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
                        <div className="delivery-login-box">
                          <Link to="/contact-us" className="delivery-icon">
                            <FontAwesomeIcon
                              icon={faPhoneVolume}
                              style={{ fontSize: "20px" }}
                            />
                          </Link>
                          <div className="delivery-detail">
                            <h6>24/7 Delivery</h6>
                            <h5>+91 888 104 2340</h5>
                          </div>
                        </div>
                      </li>
                      <li className="right-side">
                        <Link
                          to="/wishlist"
                          className="btn p-0 position-relative header-wishlist"
                          title2="Wishlist"
                        >
                          <FontAwesomeIcon
                            icon={faHeart}
                            style={{
                              fontSize: "20px",
                              color: "var(--theme-color)",
                            }}
                            data-tip="Add to Wishlist"
                            data-for="wishlist-tooltip"
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "red";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color =
                                "var(--theme-color)";
                            }}
                          />
                        </Link>
                      </li>
                      <li className="right-side">
                        <div className="onhover-dropdown header-badge">
                          <button
                            type="button"
                            className="btn p-0 position-relative header-wishlist"
                            onClick={() => handleCartButtonClick()}
                          >
                            <i
                              data-feather="shopping-cart"
                              style={{ color: "var(--theme-color)" }}
                            />
                            <span className="position-absolute top-0 start-100 translate-middle badge">
                              {cartListItems?.length || 0}
                              <span className="visually-hidden">
                                unread messages
                              </span>
                            </span>
                          </button>
                          <div
                            className="onhover-div overflow-container"
                            style={{ display: ecommercetoken ? "" : "none" }}
                          >
                            <ul className="cart-list overflow">
                              {cartListItems?.map((item, index) => {
                                return (
                                  <li
                                    className="product-box-contain"
                                    key={index}
                                  >
                                    <div className="drop-cart">
                                      <Link className="drop-image">
                                        <img
                                          src={item?.varient?.product_Pic[0]}
                                          className="img-fluid  lazyload"
                                          alt=""
                                        />
                                      </Link>
                                      <div className="drop-contain">
                                        <div>
                                          <h5>
                                            <Link
                                              to={`/product/${item?.product_Id?._id}`}
                                              key={index}
                                            >
                                              <strong>
                                                {item?.product_Id?.productName_en
                                                  ?.split(" ")
                                                  ?.slice(0, 3)
                                                  ?.join(" ")}{" "}
                                              </strong>
                                            </Link>
                                          </h5>
                                        </div>
                                        <h6>
                                          <span>
                                            <strong>
                                              {item?.quantity || 0} x $
                                              {item?.Price}
                                            </strong>
                                          </span>
                                        </h6>

                                        <button
                                          title="Remove"
                                          className="close-button close_button me-2"
                                          onClick={() =>
                                            deleteCartItem(item._id)
                                          }
                                        >
                                          <i className="fa-solid fa-xmark" />
                                        </button>
                                      </div>
                                    </div>
                                    {index < cartListItems.length - 1 && <hr />}{" "}
                                  </li>
                                );
                              })}
                            </ul>
                            <div className="price-box">
                              <h5>Total :</h5>
                              <h4 className="theme-color fw-bold">
                                ${totalSubtotal}{" "}
                              </h4>
                            </div>
                            <div className="button-group">
                              <Link
                                to="/cart"
                                className="btn btn-sm cart-button"
                              >
                                View Cart
                              </Link>
                              <Link
                                to="/check-outall"
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
                            <i
                              data-feather="user"
                              style={{ color: "var(--theme-color)" }}
                            />
                          </div>
                          <div className="delivery-detail">
                            <h6>Hello,</h6>
                            <h5>My Account</h5>
                          </div>
                        </div>
                        <div className="onhover-div onhover-div-login">
                          <ul className="user-box-name">
                            {loginId ? null : (
                              <li className="product-box-contain">
                                <i />
                                <Link to="/login">Log In</Link>
                              </li>
                            )}

                            <li className="product-box-contain">
                              <Link to="/sign-up">Register</Link>
                            </li>
                            <li className="product-box-contain">
                              <Link to="/forgot">Forgot Password</Link>
                            </li>
                            {ecommercetoken ? (
                              <li className="product-box-contain">
                                <Link to="/">Logout</Link>
                              </li>
                            ) : null}
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
                      {categoryListData.map((item, index) => {
                        return (
                          <li
                            className="onhover-category-list"
                            key={index}
                            onMouseEnter={() => handleOnhover(item?._id)}
                          >
                            <Link to="#" className="category-name">
                              <img
                                src={item?.categoryPic}
                                alt={item?.categoryName_en}
                              />
                              <h6>
                                {" "}
                                {item?.categoryName_en
                                  ? item?.categoryName_en
                                  : item?.categoryName}{" "}
                              </h6>
                              <i className="fa-solid fa-angle-right" />
                            </Link>
                            <div className="onhover-category-box">
                              <div className="list-1">
                                <div className="category-title-box">
                                  {/* <h5>Organic Vegetables</h5> */}
                                </div>
                                <ul>
                                  {(subCategoryItems || []).map(
                                    (items, indexes) => {
                                      return (
                                        <li
                                          className="onhover-category-list"
                                          key={indexes}
                                        >
                                          <Link
                                            to="/shop"
                                            state={{ id: items._id }}
                                            className="category-name"
                                          >
                                            <img
                                              src={items?.subCategoryPic}
                                              alt=""
                                            />
                                            <div>
                                              {items?.subCategoryName_en ||
                                                "No Product"}
                                            </div>
                                          </Link>
                                        </li>
                                      );
                                    }
                                  )}
                                </ul>
                              </div>
                            </div>
                          </li>
                        );
                      })}
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
                            <Link
                              className={
                                Dash === "home" ? "nav-link active" : "nav-link"
                              }
                              aria-current="page"
                              to="*"
                            >
                              Home
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className={
                                Dash === "shop" ? "nav-link active" : "nav-link"
                              }
                              to="/shop"
                            >
                              Shop
                            </Link>
                          </li>
                          {/* <li className="nav-item">
                            <Link className="nav-link" to="/product">
                              Product
                            </Link>
                          </li> */}
                          <li className="nav-item">
                            <Link
                              // className="nav-link dropdown-toggle"
                              className={
                                Dash === "about"
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                              to="/about-us"
                            >
                              About Us
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className={
                                Dash === "contact"
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                              // className="nav-link dropdown-toggle"
                              to="/contact-us"
                            >
                              Contact Us
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              // className="nav-link dropdown-toggle"
                              className={
                                Dash === "blog" ? "nav-link active" : "nav-link"
                              }
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
                <div className="header-nav-right">
                  <button
                    className="btn deal-button"
                    data-bs-toggle="modal"
                    data-bs-target="#deal-box1"
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
      <div
        className="modal fade theme-modal deal-modal"
        id="deal-box1"
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
            {trendingList?.length > 0 ? (
              <div className="modal-body">
                <div className="deal-offer-box">
                  <ul className="deal-offer-list">
                    {trendingList?.map((item, index) => {
                      return (
                        <li className={`list-${index + 1}`} key={index}>
                          <div className="deal-offer-contain">
                            <Link to="/shop" className="deal-image">
                              <img
                                src={
                                  item?.productDetails?.[0]?.addVarient?.[0]
                                    ?.product_Pic[0]
                                }
                                className=" lazyload"
                                alt=""
                              />
                            </Link>
                            <Link to="/shop" className="deal-contain">
                              <h5>
                                {" "}
                                {item?.productDetails?.[0]?.productName_en}{" "}
                              </h5>
                              <h6>
                                $
                                {item?.productDetails?.[0]?.addVarient?.[0]?.Price?.toFixed(
                                  2
                                )}{" "}
                                <del>
                                  {" "}
                                  $
                                  {
                                    item?.productDetails?.[0]?.addVarient?.[0]
                                      ?.oldPrice
                                  }
                                </del>{" "}
                              </h6>
                            </Link>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ) : (
              <div
                className="d-flex align-items-center justify-content-center text-danger my-5"
                style={{ fontSize: "18px", color: "#333" }}
              >
                No list available
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
