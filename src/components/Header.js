import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { CategoryList, ProductSearch, SubCategoryList } from "./HttpServices";
import { Modal } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useGetCategoryListQuery } from "../services/Post";
import { useSubCategoryListMutation } from "../services/Post";

function Header(props) {
  // console.log("product search items", props.productListItems);
  const categoryListItems = useGetCategoryListQuery();
  const [subCategoryList, res] = useSubCategoryListMutation();
  console.log(res);
  const [categoryListData, setCategoryListData] = useState([]);
  const [subCategoryListData, setSubCategoryListData] = useState([]);
  const [hoveredCategoryId, setHoveredCategoryId] = useState(null);
  const [subCategoryItems, setSubCategoryItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showSale, setShowSale] = useState(false);
  const [itemId, setItemId] = useState("");
  console.log(itemId);
  axios.defaults.headers.common["x-auth-token-user"] =
    localStorage.getItem("token");
  useEffect(() => {
    const reversedList =
      categoryListItems?.data?.results?.list?.slice().reverse() ?? [];
    setCategoryListData(reversedList);
  }, [categoryListItems]);
  const handleOnhover = async (categoryId) => {
    setItemId(categoryId);
    // try {
    //   const { data } = await SubCategoryList(categoryId);
    //   setHoveredCategoryId(categoryId);
    //   setSubCategoryItems(data);
    //   console.log(categoryId);
    //   getData();
    // } catch (error) {
    //   console.log(error);
    // }
    setTimeout(() => {
      handleSaveChanges1();
    }, 500);
  };
  useEffect(() => {
    if (res) {
      setSubCategoryItems(res?.data?.results?.listData);
    }
  }, [res]);

  const handleSaveChanges1 = () => {
    console.log("handleSaveChanges1", itemId);
    const editAddress = {
      id: itemId,
    };
    subCategoryList(editAddress);
  };

  useEffect(() => {
    const welcomeInterval = setInterval(() => {
      setShowWelcome(true);
      setShowSale(false);
    }, 1000);

    const saleInterval = setInterval(() => {
      setShowWelcome(false);
      setShowSale(true);
    }, 2000);

    return () => {
      clearInterval(welcomeInterval);
      clearInterval(saleInterval);
    };
  }, []);

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   searchData();
  // };
  const handleSearch = (e) => {
    e.preventDefault();
    setShowModal(true);
    searchData();
  };

  const searchData = async () => {
    try {
      const { data, error } = await ProductSearch(searchQuery);
      error ? console.log(error) : console.log("product search", data);
      console.log("product list", data.results.productData);
      setSuggestion(data.results.productData);
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = async () => {
  //   try {
  //     const { data, error } = await CategoryList();
  //     error ? console.log(error) : console.log(data);
  //     setCategoryListData(data.results.list);
  //     console.log(data.results.list);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getData = async () => {
    try {
      const id = hoveredCategoryId;
      const { data, error } = await SubCategoryList(id);
      if (error) {
        console.log(error);
      } else {
        console.log(data?.results?.listData);
        setSubCategoryListData(data?.results?.listData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("Data", categoryListData);
  // console.log("subData", subCategoryListData);

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
              <div className="col-xxl-6 col-lg-9 d-lg-block d-none">
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
                    {/* <form onSubmit={handleSearch}>
                      <div className="search-box">
                        <div className="input-group">
                          <input
                            type="search"
                            className="form-control"
                            placeholder="I'm searching for..."
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                          
                          <button
                            className="btn"
                            type="button"
                            id="button-addon2"
                          >
                            <i data-feather="search" />
                          </button>
                        </div>
                        {suggestion && (
                            <ul className="suggestion-list">
                              {suggestion.map((product) => (
                                <li key={product._id}>{product.productName}</li>
                              ))}
                            </ul>
                          )}
                      </div>
                    </form> */}
                    <form onSubmit={handleSearch}>
                      <div className="search-box">
                        <div className="input-group">
                          <input
                            type="search"
                            className="form-control"
                            placeholder="I'm searching for..."
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                          <button
                            className="btn"
                            type="button"
                            id="button-addon2"
                            onClick={handleSearch}
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </form>

                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                      <Modal.Header closeButton>
                        <Modal.Title>Suggestions</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <ul className="dot-list">
                          {suggestion.map((product) => (
                            <li key={product._id}>
                              <Link to={`/product/${product._id}`}>
                                {product.productName}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </Modal.Body>
                    </Modal>
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
                        <Link to="/contact-us" className="delivery-login-box">
                          <div className="delivery-icon">
                            <i data-feather="phone-call" />
                          </div>
                          <div className="delivery-detail">
                            <h6>24/7 Delivery</h6>
                            <h5>+91 888 104 2340</h5>
                          </div>
                        </Link>
                      </li>
                      <li className="right-side">
                        <Link
                          to="/wishlist"
                          className="btn p-0 position-relative header-wishlist"
                        >
                          <i data-feather="heart" />
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
                                      src="../assets/images/vegetable/product/5.png"
                                      className=" lazyload"
                                      alt=""
                                    />
                                  </Link>
                                  <div className="drop-contain">
                                    <Link to="/product">
                                      <h5>
                                        Yumitos Chilli Sprinkled Potato Chips
                                        100 g
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
                              <Link to="/">Log In</Link>
                            </li>
                            <li className="product-box-contain">
                              <Link to="/sign-up">Register</Link>
                            </li>
                            <li className="product-box-contain">
                              <Link to="/forgot">Forgot Password</Link>
                            </li>
                            <li className="product-box-contain">
                              <Link to="/">Logout</Link>
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
                      {categoryListData.map((item, index) => {
                        return (
                          <li
                            className="onhover-category-list"
                            key={index}
                            onMouseEnter={() => handleOnhover(item?._id)}
                          >
                            <Link to="#" className="category-name">
                              <img src={item?.categoryPic} alt="image" />
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
                                  <h5>Organic Vegetables</h5>
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
                                            to="#"
                                            className="category-name"
                                          >
                                            <img
                                              src={items?.subCategoryPic}
                                              alt="image"
                                            />
                                            <Link to="#">
                                              {" "}
                                              {items?.subCategoryName_en}{" "}
                                            </Link>
                                          </Link>
                                        </li>
                                      );
                                    }
                                  )}
                                </ul>
                              </div>
                              <div className="list-2">
                                <div className="category-title-box">
                                  <h5>Fresh Fruit</h5>
                                </div>
                                <ul>
                                  <li>
                                    <Link to="#">Banana &amp; Papaya</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Kiwi, Citrus Fruit</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Apples &amp; Pomegranate</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Seasonal Fruits</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Mangoes</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Fruit Baskets</Link>
                                  </li>
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
                            <Link className="nav-link" to="*">
                              Home
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/shop">
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
                <div className="header-nav-right">
                  <button
                    className="btn deal-button"
                    data-bs-toggle="modal"
                    data-bs-target="#deal-box"
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
    </>
  );
}

export default Header;
