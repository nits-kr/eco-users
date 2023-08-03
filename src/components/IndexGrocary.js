import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Slider from "react-slick";
import { HandleOkButtonClick, UseCountdownTimer } from "./JavaScriptFunction";
import Header from "./Header";
import Footer from "./Footer";
import { useGetTrendingProductQuery } from "../services/Post";
import Spinner from "./Spinner";
import {
  AddToCart,
  CreateWish,
  ProductDetails,
  CartList,
  DiscountProduct,
  AddCompare,
} from "./HttpServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faArrowsRotate,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Star from "./Star";
function IndexGrocary(props) {
  const trendingProduct = useGetTrendingProductQuery();
  console.log("useGetTrendingProductQuery", trendingProduct);
  const [trendingList, setTrendingList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [discountProduct, setDiscountProduct] = useState([]);
  console.log("discountProduct", discountProduct);
  const [productListDetails, setProductListDetails] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [CreateWishItems, setCreateWishItems] = useState([]);
  const [addCompareItems, setAddCompareItems] = useState([]);
  const [cartListItems, setCartListItems] = useState([]);
  const [selectedWeight, setSelectedWeight] = useState("");
  const [priceRange, setPriceRange] = useState([0, 11000]);
  console.log("price range", priceRange);
  console.log("selected weight", selectedWeight);

  useEffect(() => {
    cartData();
  }, []);
  const cartData = async () => {
    try {
      const { data, error } = await CartList();
      error ? console.log(error) : console.log(data);
      setCartListItems(data.results.list);
      console.log(data.results.list);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      props.setProgress(10);
      setLoading(true);
      const { data, error } = await DiscountProduct();
      error ? console.log(error) : console.log(data);
      setDiscountProduct(data?.results?.productData);
      setLoading(true);
      props.setProgress(50);
      console.log(data?.results?.productData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (discountProduct?.length > 0) {
      getData();
    }
  }, [discountProduct]);
  const getData = async () => {
    try {
      props.setProgress(70);
      setLoading(true);
      const ids = discountProduct.map((item) => item._id); // Get all _id values
      const promises = ids.map((id) => ProductDetails(id)); // Create an array of promises
      const results = await Promise.all(promises); // Wait for all promises to resolve

      const details = results.map((result) => result?.data?.results?.details); // Extract details from each result
      setProductListDetails(details);
      props.setProgress(100);
      setLoading(false);
      console.log(details);
    } catch (error) {
      console.log(error);
    }
  };
  const handleViewClick = (item) => {
    setSelectedProduct(item);
  };
  const handleWishClick = async (item) => {
    try {
      const { data, error } = await CreateWish(item._id);
      if (error) {
        console.log(error);
        return;
      }
      const newCreateWishItems = [...CreateWishItems, data];
      setCreateWishItems(newCreateWishItems);
      console.log(newCreateWishItems);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCompareClick = async (item) => {
    try {
      const { data, error } = await AddCompare(item._id);
      if (error) {
        console.log(error);
        return;
      }
      const newCreateCompareItems = [...addCompareItems, data];
      setAddCompareItems(newCreateCompareItems);
      console.log("newCreateCompareItems", newCreateCompareItems);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddToCart = async (item) => {
    try {
      const { data, error } = await AddToCart(item._id, item?.stockQuantity);
      if (error) {
        console.log(error);
        return;
      }
      const newCartItems = [...cartListItems, data];
      setCartListItems(newCartItems);
      console.log("prevCartItems", newCartItems);
      console.log("New cart items", cartListItems);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("productList", discountProduct);
  console.log("productListDetails", productListDetails);
  console.log("createWish", CreateWishItems);
  console.log("cart list item new", cartListItems);
  useEffect(() => {
    props.setProgress(10);
    setLoading(true);
    if (trendingProduct?.data?.results?.productlist) {
      setTrendingList(trendingProduct?.data?.results?.productlist);
      props.setProgress(100);
      setLoading(false);
    }
  });

  var w = window.innerWidth;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: w > 500 ? 3 : 1,
    autoplay: true,
    slidesToScroll: 1,
  };
  useEffect(() => {
    feather.replace();
  }, []);

  var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  UseCountdownTimer(deadline);

  const handleOkButtonClick = () => {
    HandleOkButtonClick();
  };

  return (
    <>
      {loading}
      {/* Header Start */}
      <Header />
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

      <section className="home-section pt-2">
        <div className="container-fluid-lg">
          <div className="row g-4">
            <div className="col-xl-8 ratio_65">
              <div className="home-contain h-100">
                <div
                  className="h-100 bg-size blur-up lazyloaded"
                  style={{
                    backgroundImage:
                      'url("../assets/images/vegetable/banner/1.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    display: "block",
                  }}
                >
                  <img
                    src="../assets/images/vegetable/banner/1.jpg"
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
                      Stay home &amp; delivered your{" "}
                      <span className="daily">Daily Needs</span>
                    </h1>
                    <p className="w-75 d-none d-sm-block">
                      Vegetables contain many vitamins and minerals that are
                      good for your health.
                    </p>
                    <button
                      onClick={() => {
                        window.location.href = "/shop";
                      }}
                      className="btn btn-animation mt-xxl-4 mt-2 home-button mend-auto"
                    >
                      Shop Now <i className="fa-solid fa-right-long icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 ratio_65">
              <div className="row g-4">
                <div className="col-xl-12 col-md-6">
                  <div
                    className="home-contain bg-size blur-up lazyloaded"
                    style={{
                      backgroundImage:
                        'url("../assets/images/vegetable/banner/2.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      display: "block",
                    }}
                  >
                    <img
                      src="../assets/images/vegetable/banner/2.jpg"
                      className="bg-img blur-up lazyloaded"
                      alt=""
                      style={{ display: "none" }}
                    />
                    <div className="home-detail p-center-left home-p-sm w-75">
                      <div>
                        <h2 className="mt-0 text-danger">
                          45% <span className="discount text-title">OFF</span>
                        </h2>
                        <h3 className="theme-color">Nut Collection</h3>
                        <p className="w-75">
                          We deliver organic vegetables &amp; fruits
                        </p>
                        <Link to="shop" className="shop-button">
                          Shop Now <i className="fa-solid fa-right-long" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-6">
                  <div
                    className="home-contain bg-size blur-up lazyloaded"
                    style={{
                      backgroundImage:
                        'url("../assets/images/vegetable/banner/3.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      display: "block",
                    }}
                  >
                    <img
                      src="../assets/images/vegetable/banner/3.jpg"
                      className="bg-img blur-up lazyloaded"
                      alt=""
                      style={{ display: "none" }}
                    />
                    <div className="home-detail p-center-left home-p-sm w-75">
                      <div>
                        <h3 className="mt-0 theme-color fw-bold">
                          Healthy Food
                        </h3>
                        <h4 className="text-danger">Organic Market</h4>
                        <p className="organic">
                          Start your daily shopping with some Organic food
                        </p>
                        <Link to="shop" className="shop-button">
                          Shop Now <i className="fa-solid fa-right-long" />
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

      {/* Home Section End */}
      {/* Banner Section Start */}
      <section className="banner-section ratio_60 wow fadeInUp">
        <div className="container-fluid-lg">
          <div className="banner-slider ">
            <Slider {...settings}>
              <div className="banner-contain hover-effect ">
                <img
                  src="../assets/images/vegetable/banner/4.jpg"
                  className="bg-img  lazyload"
                  alt=""
                />
                <div className="banner-details">
                  <div className="banner-box">
                    <h6 className="text-danger">5% OFF</h6>
                    <h5>Hot Deals on New Items</h5>
                    <h6 className="text-content">
                      Daily Essentials Eggs &amp; Dairy
                    </h6>
                  </div>
                  <Link to="/shop" className="banner-button text-white">
                    Shop Now <i className="fa-solid fa-right-long ms-2" />
                  </Link>
                </div>
              </div>
              <div>
                <div className="banner-contain hover-effect">
                  <img
                    src="../assets/images/vegetable/banner/5.jpg"
                    className="bg-img  lazyload"
                    alt=""
                  />
                  <div className="banner-details">
                    <div className="banner-box">
                      <h6 className="text-danger">5% OFF</h6>
                      <h5>Buy More &amp; Save More</h5>
                      <h6 className="text-content">Fresh Vegetables</h6>
                    </div>
                    <Link to="/shop" className="banner-button text-white">
                      Shop Now <i className="fa-solid fa-right-long ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="banner-contain hover-effect">
                  <img
                    src="../assets/images/vegetable/banner/6.jpg"
                    className="bg-img  lazyload"
                    alt=""
                  />
                  <div className="banner-details">
                    <div className="banner-box">
                      <h6 className="text-danger">5% OFF</h6>
                      <h5>Organic Meat Prepared</h5>
                      <h6 className="text-content">Delivered to Your Home</h6>
                    </div>
                    <Link to="/shop" className="banner-button text-white">
                      Shop Now <i className="fa-solid fa-right-long ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="banner-contain hover-effect">
                  <img
                    src="../assets/images/vegetable/banner/7.jpg"
                    className="bg-img  lazyload"
                    alt=""
                  />
                  <div className="banner-details">
                    <div className="banner-box">
                      <h6 className="text-danger">5% OFF</h6>
                      <h5>Buy More &amp; Save More</h5>
                      <h6 className="text-content">Nuts &amp; Snacks</h6>
                    </div>
                    <Link to="/shop" className="banner-button text-white">
                      Shop Now <i className="fa-solid fa-right-long ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </Slider>
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
                          src="../assets/svg/1/vegetable.svg"
                          className=" lazyload"
                          alt=""
                        />
                        <h5>
                          <Link to="/shop">Vegetables &amp; Fruit</Link>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <img
                          src="../assets/svg/1/cup.svg"
                          className=" lazyload"
                          alt=""
                        />
                        <h5>
                          <Link to="/shop">Beverages</Link>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <img
                          src="../assets/svg/1/meats.svg"
                          className=" lazyload"
                          alt=""
                        />
                        <h5>
                          <Link to="/shop">Meats &amp; Seafood</Link>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <img
                          src="../assets/svg/1/breakfast.svg"
                          className=" lazyload"
                          alt=""
                        />
                        <h5>
                          <Link to="/shop">Breakfast &amp; Dairy</Link>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <img
                          src="../assets/svg/1/frozen.svg"
                          className=" lazyload"
                          alt=""
                        />
                        <h5>
                          <Link to="/shop">Frozen Foods</Link>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <img
                          src="../assets/svg/1/biscuit.svg"
                          className=" lazyload"
                          alt=""
                        />
                        <h5>
                          <Link to="/shop">Biscuits &amp; Snacks</Link>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <img
                          src="../assets/svg/1/grocery.svg"
                          className=" lazyload"
                          alt=""
                        />
                        <h5>
                          <Link to="/shop">Grocery &amp; Staples</Link>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <img
                          src="../assets/svg/1/drink.svg"
                          className=" lazyload"
                          alt=""
                        />
                        <h5>
                          <Link to="/shop">Wines &amp; Alcohol Drinks</Link>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <img
                          src="../assets/svg/1/milk.svg"
                          className=" lazyload"
                          alt=""
                        />
                        <h5>
                          <Link to="/shop">Milk &amp; Dairies</Link>
                        </h5>
                      </div>
                    </li>
                    <li className="pb-30">
                      <div className="category-list">
                        <img
                          src="../assets/svg/1/pet.svg"
                          className=" lazyload"
                          alt=""
                        />
                        <h5>
                          <Link to="/shop">Pet Foods</Link>
                        </h5>
                      </div>
                    </li>
                  </ul>
                  <ul className="value-list">
                    <li>
                      <div className="category-list">
                        <h5 className="ms-0 text-title">
                          <Link to="/shop">Value of the Day</Link>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <h5 className="ms-0 text-title">
                          <Link to="/shop">Top 50 Offers</Link>
                        </h5>
                      </div>
                    </li>
                    <li className="mb-0">
                      <div className="category-list">
                        <h5 className="ms-0 text-title">
                          <Link to="/shop">New Arrivals</Link>
                        </h5>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="ratio_156 section-t-space">
                  <div className="home-contain hover-effect">
                    <img
                      src="../assets/images/vegetable/banner/8.jpg"
                      className="bg-img  lazyload w-100"
                      alt=""
                    />
                    <div className="home-detail p-top-left home-p-medium">
                      <div>
                        <h6 className="text-yellow home-banner">Seafood</h6>
                        <h3 className="text-uppercase fw-normal">
                          <span className="theme-color fw-bold">Freshes</span>{" "}
                          Products
                        </h3>
                        <h3 className="fw-light">every hour</h3>
                        <button
                          onClick={() => {
                            window.location.href = "/shop";
                          }}
                          className="btn btn-animation btn-md mend-auto"
                        >
                          Shop Now{" "}
                          <i className="fa-solid fa-arrow-right icon" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ratio_medium section-t-space">
                  <div className="home-contain hover-effect">
                    <img
                      src="../assets/images/vegetable/banner/11.jpg"
                      className="img-fluid  lazyload"
                      alt=""
                    />
                    <div className="home-detail p-top-left home-p-medium">
                      <div>
                        <h4 className="text-yellow text-exo home-banner">
                          Organic
                        </h4>
                        <h2 className="text-uppercase fw-normal mb-0 text-russo theme-color">
                          fresh
                        </h2>
                        <h2 className="text-uppercase fw-normal text-title">
                          Vegetables
                        </h2>
                        <p className="mb-3">Super Offer to 50% Off</p>
                        <button
                          onClick={() => {
                            window.location.href = "/shop";
                          }}
                          className="btn btn-animation btn-md mend-auto"
                        >
                          Shop Now{" "}
                          <i className="fa-solid fa-arrow-right icon" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section-t-space">
                  {loading ? (
                    <Spinner />
                  ) : (
                    <>
                      <div className="category-menu">
                        <h3>Trending Products</h3>
                        <ul className="product-list border-0 p-0 d-block">
                          {trendingList.map((item, index) => {
                            return (
                              <li>
                                <div className="offer-product">
                                  <Link to="/product" className="offer-image">
                                    <img
                                      src={item?.product_Pic[0]}
                                      className=" lazyload"
                                      alt=""
                                    />
                                  </Link>
                                  <div className="offer-detail">
                                    <div>
                                      <Link
                                        to="/product"
                                        className="text-title"
                                      >
                                        <h6 className="name">
                                          {item?.productName}
                                        </h6>
                                      </Link>
                                      <span> {item?.stockQuantity} left </span>
                                      <h6 className="price theme-color">
                                        ${item?.Price}{" "}
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
                <div className="section-t-space">
                  <div className="category-menu">
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
                            className="img-fluid  lazyload"
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
                    Don't miss this opportunity at a special discount just for
                    this week.
                  </p>
                </div>
                <div className="timing-box">
                  <div className="timing ">
                    <i data-feather="clock" />
                    <h6 className="name">Expires in:</h6>
                    <div className="time" id="clockdiv-1">
                      <ul>
                        <li>
                          <div className="counter">
                            <div className="days">
                              <h6 id="days">0</h6>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="counter">
                            <div className="hours">
                              <h6 id="hours">00</h6>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="counter">
                            <div className="minutes">
                              <h6 id="minutes">00</h6>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="counter">
                            <div className="seconds">
                              <h6 id="seconds">00</h6>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {loading ? (
                <Spinner />
              ) : (
                <>
                  <div className="col-12 wow fadeInUp">
                    <div className="row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section">
                      {discountProduct?.map((item, index) => {
                        return (
                          <div key={index}>
                            <div className="product-box-3 h-100 wow fadeInUp">
                              <div className="product-header">
                                <div className="product-image">
                                  <Link to="/product">
                                    <img
                                      src={item.product_Pic[0]}
                                      className="img-fluid  lazyload"
                                      alt=""
                                    />
                                  </Link>
                                  <ul className="product-option">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="View"
                                    >
                                      <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#view"
                                        onClick={() => handleViewClick(item)}
                                      >
                                        <FontAwesomeIcon icon={faEye} />
                                      </Link>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Compare"
                                      onClick={() => handleCompareClick(item)}
                                    >
                                      <Link to="/compare">
                                        <FontAwesomeIcon
                                          icon={faArrowsRotate}
                                        />
                                      </Link>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Wishlist"
                                      onClick={() => handleWishClick(item)}
                                    >
                                      <Link
                                        to="/wishlist"
                                        className="notifi-wishlist"
                                      >
                                        <FontAwesomeIcon icon={faHeart} />
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-footer">
                                <div className="product-detail">
                                  <span className="span-name">
                                    {" "}
                                    {item._id}{" "}
                                  </span>
                                  <Link to="/product">
                                    <h5 className="name">{item.productName}</h5>
                                  </Link>
                                  <p className="text-content mt-1 mb-2 product-content">
                                    Cheesy feet cheesy grin brie. Mascarpone
                                    cheese and wine hard cheese the big cheese
                                    everyone loves smelly cheese macaroni cheese
                                    croque monsieur.
                                  </p>
                                  <div className="product-rating mt-2">
                                    <Star rating={item?.totalRating} />
                                    <span> In Stock </span>
                                  </div>
                                  <h6 className="unit">
                                    {item.stockQuantity} units{" "}
                                  </h6>
                                  <h5 className="price">
                                    <span className="theme-color">
                                      ${item.Price}
                                    </span>{" "}
                                    <del>${item.oldPrice} </del>
                                  </h5>
                                  <div className="add-to-cart-box bg-white">
                                    <button className="btn btn-add-cart addcart-button">
                                      <Link
                                        to="/cart"
                                        onClick={() => handleAddToCart(item)}
                                      >
                                        Add
                                        <span className="add-icon bg-light-gray">
                                          <i className="fa-solid fa-plus" />
                                        </span>
                                      </Link>
                                    </button>
                                    <div className="cart_qty qty-box">
                                      <div className="input-group bg-white">
                                        <button
                                          type="button"
                                          className="qty-left-minus bg-gray"
                                          data-type="minus"
                                          data-field=""
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
                                        />
                                        <button
                                          type="button"
                                          className="qty-right-plus bg-gray"
                                          data-type="plus"
                                          data-field=""
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
                        );
                      })}
                    </div>
                    <nav className="custome-pagination">
                      <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                          <Link
                            className="page-link"
                            to="#"
                            tabIndex={-1}
                            aria-disabled="true"
                          >
                            <i className="fa-solid fa-angles-left" />
                          </Link>
                        </li>
                        <li className="page-item active">
                          <Link className="page-link" to="#">
                            1
                          </Link>
                        </li>
                        <li className="page-item" aria-current="page">
                          <Link className="page-link" to="#">
                            2
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="#">
                            3
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="#">
                            <i className="fa-solid fa-angles-right" />
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </>
              )}
              <div className="title">
                <h2>Bowse by Categories</h2>
                <span className="title-leaf">
                  <svg className="icon-width">
                    <use xlinkHref="../assets/svg/leaf.svg#leaf" />
                  </svg>
                </span>
                <p>Top Categories Of The Week</p>
              </div>
              <div className="category-slider-2 product-wrapper no-arrow">
                <Slider {...settings}>
                  <div>
                    <Link to="/shop" className="category-box category-dark">
                      <div>
                        <img
                          src="../assets/svg/1/vegetable.svg"
                          className=" lazyload"
                          alt=""
                        />
                        <h5>Vegetables &amp; Fruit</h5>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="/shop" className="category-box category-dark">
                      <div>
                        <img
                          src="../assets/svg/1/cup.svg"
                          className=" lazyload"
                          alt=""
                        />
                        <h5>Beverages</h5>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="/shop" className="category-box category-dark">
                      <div>
                        <img
                          src="../assets/svg/1/meats.svg"
                          className=" lazyload"
                          alt=""
                        />
                        <h5>Meats &amp; Seafood</h5>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="/shop" className="category-box category-dark">
                      <div>
                        <img
                          src="../assets/svg/1/breakfast.svg"
                          className=" lazyload"
                          alt=""
                        />
                        <h5>Breakfast</h5>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="/shop" className="category-box category-dark">
                      <div>
                        <img
                          src="../assets/svg/1/frozen.svg"
                          className=" lazyload"
                          alt=""
                        />
                        <h5>Frozen Foods</h5>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="/shop" className="category-box category-dark">
                      <div>
                        <img
                          src="../assets/svg/1/milk.svg"
                          className=" lazyload"
                          alt=""
                        />
                        <h5>Milk &amp; Dairies</h5>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="/shop" className="category-box category-dark">
                      <div>
                        <img
                          src="../assets/svg/1/pet.svg"
                          className=" lazyload"
                          alt=""
                        />
                        <h5>Pet Food</h5>
                      </div>
                    </Link>
                  </div>
                </Slider>
              </div>
              <div className="section-t-space section-b-space">
                <div className="row g-md-4 g-3">
                  <div className="col-md-6">
                    <div
                      className="banner-contain hover-effect"
                      style={{
                        backgroundImage: `url(../assets/images/vegetable/banner/9.jpg) `,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block",
                      }}
                    >
                      {/* <img
                                                src="../assets/images/vegetable/banner/9.jpg"
                                                className="bg-img  lazyload"
                                                alt=""
                                            /> */}
                      <div className="banner-details p-center-left p-4">
                        <div>
                          <h3 className="text-exo">50% offer</h3>
                          <h4 className="text-russo fw-normal theme-color mb-2">
                            Testy Mushrooms
                          </h4>
                          <button
                            onClick={() => {
                              window.location.href = "/shop";
                            }}
                            className="btn btn-animation btn-sm mend-auto"
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
                      className="banner-contain hover-effect"
                      style={{
                        backgroundImage: `url(../assets/images/vegetable/banner/10.jpg) `,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block",
                      }}
                    >
                      {/* <img
                                                src="../assets/images/vegetable/banner/10.jpg"
                                                className="bg-img  lazyload"
                                                alt=""
                                            /> */}
                      <div className="banner-details p-center-left p-4">
                        <div>
                          <h3 className="text-exo">50% offer</h3>
                          <h4 className="text-russo fw-normal theme-color mb-2">
                            Fresh MEAT
                          </h4>
                          <button
                            onClick={() => {
                              window.location.href = "/shop";
                            }}
                            className="btn btn-animation btn-sm mend-auto"
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
                        transform: "translate3d(-940px, 0px, 0px)",
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
                                <Link to="/product" tabIndex={-1}>
                                  <img
                                    src="../assets/images/vegetable/product/3.png"
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
                                  <h6
                                    className="name h-100"
                                    style={{
                                      minHeight: 0,
                                      maxHeight: "none",
                                      height: 44,
                                    }}
                                  >
                                    Butter Croissant
                                  </h6>
                                </Link>
                                <h5 className="sold text-content">
                                  <span className="theme-color price">
                                    $26.69
                                  </span>
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
                                <Link to="/product" tabIndex={-1}>
                                  <img
                                    src="../assets/images/vegetable/product/4.png"
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
                                  <h6
                                    className="name h-100"
                                    style={{
                                      minHeight: 0,
                                      maxHeight: "none",
                                      height: 44,
                                    }}
                                  >
                                    Dark Chocalate
                                  </h6>
                                </Link>
                                <h5 className="sold text-content">
                                  <span className="theme-color price">
                                    $26.69
                                  </span>
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
                                <Link to="/product" tabIndex={-1}>
                                  <img
                                    src="../assets/images/vegetable/product/5.png"
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
                                  <h6
                                    className="name h-100"
                                    style={{
                                      minHeight: 0,
                                      maxHeight: "none",
                                      height: 44,
                                    }}
                                  >
                                    Mix-sweet-food
                                  </h6>
                                </Link>
                                <h5 className="sold text-content">
                                  <span className="theme-color price">
                                    $26.69
                                  </span>
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
                                <Link to="/product" tabIndex={-1}>
                                  <img
                                    src="../assets/images/vegetable/product/4.png"
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
                                  <h6
                                    className="name h-100"
                                    style={{
                                      minHeight: 0,
                                      maxHeight: "none",
                                      height: 44,
                                    }}
                                  >
                                    Dark Chocalate
                                  </h6>
                                </Link>
                                <h5 className="sold text-content">
                                  <span className="theme-color price">
                                    $26.69
                                  </span>
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
                                <Link to="/product" tabIndex={0}>
                                  <img
                                    src="../assets/images/vegetable/product/1.png"
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
                                  <h6
                                    className="name h-100"
                                    style={{
                                      minHeight: 0,
                                      maxHeight: "none",
                                      height: 44,
                                    }}
                                  >
                                    Chocalate Powder
                                  </h6>
                                </Link>
                                <h5 className="sold text-content">
                                  <span className="theme-color price">
                                    $26.69
                                  </span>
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
                                <Link to="/product" tabIndex={0}>
                                  <img
                                    src="../assets/images/vegetable/product/2.png"
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
                                  <h6
                                    className="name h-100"
                                    style={{
                                      minHeight: 0,
                                      maxHeight: "none",
                                      height: 44,
                                    }}
                                  >
                                    Sandwich Cookies
                                  </h6>
                                </Link>
                                <h5 className="sold text-content">
                                  <span className="theme-color price">
                                    $26.69
                                  </span>
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
                                <Link to="/product" tabIndex={0}>
                                  <img
                                    src="../assets/images/vegetable/product/3.png"
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
                                  <h6
                                    className="name h-100"
                                    style={{
                                      minHeight: 0,
                                      maxHeight: "none",
                                      height: 44,
                                    }}
                                  >
                                    Butter Croissant
                                  </h6>
                                </Link>
                                <h5 className="sold text-content">
                                  <span className="theme-color price">
                                    $26.69
                                  </span>
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
                                <Link to="/product" tabIndex={0}>
                                  <img
                                    src="../assets/images/vegetable/product/4.png"
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
                                  <h6
                                    className="name h-100"
                                    style={{
                                      minHeight: 0,
                                      maxHeight: "none",
                                      height: 44,
                                    }}
                                  >
                                    Dark Chocalate
                                  </h6>
                                </Link>
                                <h5 className="sold text-content">
                                  <span className="theme-color price">
                                    $26.69
                                  </span>
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
                                <Link to="/product" tabIndex={-1}>
                                  <img
                                    src="../assets/images/vegetable/product/5.png"
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
                                  <h6
                                    className="name h-100"
                                    style={{
                                      minHeight: 0,
                                      maxHeight: "none",
                                      height: 44,
                                    }}
                                  >
                                    Mix-sweet-food
                                  </h6>
                                </Link>
                                <h5 className="sold text-content">
                                  <span className="theme-color price">
                                    $26.69
                                  </span>
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
                                <Link to="/product" tabIndex={-1}>
                                  <img
                                    src="../assets/images/vegetable/product/4.png"
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
                                  <h6
                                    className="name h-100"
                                    style={{
                                      minHeight: 0,
                                      maxHeight: "none",
                                      height: 44,
                                    }}
                                  >
                                    Dark Chocalate
                                  </h6>
                                </Link>
                                <h5 className="sold text-content">
                                  <span className="theme-color price">
                                    $26.69
                                  </span>
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
                                <Link to="/product" tabIndex={-1}>
                                  <img
                                    src="../assets/images/vegetable/product/1.png"
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
                                  <h6
                                    className="name h-100"
                                    style={{
                                      minHeight: 0,
                                      maxHeight: "none",
                                      height: 44,
                                    }}
                                  >
                                    Chocalate Powder
                                  </h6>
                                </Link>
                                <h5 className="sold text-content">
                                  <span className="theme-color price">
                                    $26.69
                                  </span>
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
                                <Link to="/product" tabIndex={-1}>
                                  <img
                                    src="../assets/images/vegetable/product/2.png"
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
                                  <h6
                                    className="name h-100"
                                    style={{
                                      minHeight: 0,
                                      maxHeight: "none",
                                      height: 44,
                                    }}
                                  >
                                    Sandwich Cookies
                                  </h6>
                                </Link>
                                <h5 className="sold text-content">
                                  <span className="theme-color price">
                                    $26.69
                                  </span>
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
                                <Link to="/product" tabIndex={-1}>
                                  <img
                                    src="../assets/images/vegetable/product/3.png"
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
                                  <h6
                                    className="name h-100"
                                    style={{
                                      minHeight: 0,
                                      maxHeight: "none",
                                      height: 44,
                                    }}
                                  >
                                    Butter Croissant
                                  </h6>
                                </Link>
                                <h5 className="sold text-content">
                                  <span className="theme-color price">
                                    $26.69
                                  </span>
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
                                <Link to="/product" tabIndex={-1}>
                                  <img
                                    src="../assets/images/vegetable/product/4.png"
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
                                  <h6
                                    className="name h-100"
                                    style={{
                                      minHeight: 0,
                                      maxHeight: "none",
                                      height: 44,
                                    }}
                                  >
                                    Dark Chocalate
                                  </h6>
                                </Link>
                                <h5 className="sold text-content">
                                  <span className="theme-color price">
                                    $26.69
                                  </span>
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
                                <Link to="/product" tabIndex={-1}>
                                  <img
                                    src="../assets/images/vegetable/product/5.png"
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
                                  <h6
                                    className="name h-100"
                                    style={{
                                      minHeight: 0,
                                      maxHeight: "none",
                                      height: 44,
                                    }}
                                  >
                                    Mix-sweet-food
                                  </h6>
                                </Link>
                                <h5 className="sold text-content">
                                  <span className="theme-color price">
                                    $26.69
                                  </span>
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
                                <Link to="/product" tabIndex={-1}>
                                  <img
                                    src="../assets/images/vegetable/product/4.png"
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
                                  <h6
                                    className="name h-100"
                                    style={{
                                      minHeight: 0,
                                      maxHeight: "none",
                                      height: 44,
                                    }}
                                  >
                                    Dark Chocalate
                                  </h6>
                                </Link>
                                <h5 className="sold text-content">
                                  <span className="theme-color price">
                                    $26.69
                                  </span>
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
                  className="banner-contain"
                  style={{
                    backgroundImage: `url(../assets/images/vegetable/banner/15.jpg) `,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    display: "block",
                  }}
                >
                  <div className="banner-details p-center p-4 text-white text-center">
                    <div>
                      <h3 className="lh-base fw-bold offer-text">
                        Get $3 Cashback! Min Order of $30
                      </h3>
                      <h6 className="coupon-code">Use Code : GROCERY1920</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-t-space section-b-space">
                <div className="row g-md-4 g-3">
                  <div className="col-xxl-8 col-xl-12 col-md-7">
                    <div
                      className="banner-contain hover-effect"
                      style={{
                        backgroundImage: `url(../assets/images/vegetable/banner/12.jpg) `,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block",
                      }}
                    >
                      <div className="banner-details p-center-left p-4">
                        <div>
                          <h2 className="text-kaushan fw-normal theme-color">
                            Get Ready To
                          </h2>
                          <h3 className="mt-2 mb-3">TAKE ON THE DAY!</h3>
                          <p className="text-content banner-text">
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text commonly used to demonstrate.
                          </p>
                          <button
                            onClick={() => {
                              window.location.href = "/shop";
                            }}
                            className="btn btn-animation btn-sm mend-auto"
                          >
                            Shop Now{" "}
                            <i className="fa-solid fa-arrow-right icon" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-12 col-md-5">
                    <Link
                      to="/shop"
                      className="banner-contain hover-effect h-100"
                      style={{
                        backgroundImage: `url(../assets/images/vegetable/banner/13.jpg) `,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block",
                      }}
                    >
                      <div className="banner-details p-center-left p-4 h-100">
                        <div>
                          <h2 className="text-kaushan fw-normal text-danger">
                            20% Off
                          </h2>
                          <h3 className="mt-2 mb-2 theme-color">SUMMRY</h3>
                          <h3 className="fw-normal product-name text-title">
                            Product
                          </h3>
                        </div>
                      </div>
                    </Link>
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
                  <p>
                    A virtual assistant collects the products from your list
                  </p>
                </div>
              </div>
              <div className="best-selling-slider product-wrapper wow fadeInUp">
                <Slider {...settings}>
                  <div>
                    <ul className="product-list">
                      <li>
                        <div className="offer-product">
                          <Link to="/product" className="offer-image">
                            <img
                              src="../assets/images/vegetable/product/11.png"
                              className=" lazyload"
                              alt=""
                            />
                          </Link>
                          <div className="offer-detail">
                            <div>
                              <Link to="/product" className="text-title">
                                <h6 className="name">
                                  Tuffets Whole Wheat Bread
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
                          <Link to="/product" className="offer-image">
                            <img
                              src="../assets/images/vegetable/product/12.png"
                              className=" lazyload"
                              alt=""
                            />
                          </Link>
                          <div className="offer-detail">
                            <div>
                              <Link to="/product" className="text-title">
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
                          <Link to="/product" className="offer-image">
                            <img
                              src="../assets/images/vegetable/product/13.png"
                              className=" lazyload"
                              alt=""
                            />
                          </Link>
                          <div className="offer-detail">
                            <div>
                              <Link to="/product" className="text-title">
                                <h6 className="name">Green Chilli</h6>
                              </Link>
                              <span>200 G</span>
                              <h6 className="price theme-color">$ 10.00</h6>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="offer-product">
                          <Link to="/product" className="offer-image">
                            <img
                              src="../assets/images/vegetable/product/14.png"
                              className=" lazyload"
                              alt=""
                            />
                          </Link>
                          <div className="offer-detail">
                            <div>
                              <Link to="/product" className="text-title">
                                <h6 className="name">Muffets Burger Bun</h6>
                              </Link>
                              <span>150 G</span>
                              <h6 className="price theme-color">$ 10.00</h6>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="product-list">
                      <li>
                        <div className="offer-product">
                          <Link to="/product" className="offer-image">
                            <img
                              src="../assets/images/vegetable/product/15.png"
                              className=" lazyload"
                              alt=""
                            />
                          </Link>
                          <div className="offer-detail">
                            <div>
                              <Link to="/product" className="text-title">
                                <h6 className="name">
                                  Tuffets Britannia Cheezza
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
                          <Link to="/product" className="offer-image">
                            <img
                              src="../assets/images/vegetable/product/16.png"
                              className=" lazyload"
                              alt=""
                            />
                          </Link>
                          <div className="offer-detail">
                            <div>
                              <Link to="/product" className="text-title">
                                <h6 className="name">Long Life Toned Milk</h6>
                              </Link>
                              <span>1 L</span>
                              <h6 className="price theme-color">$ 10.00</h6>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="offer-product">
                          <Link to="/product" className="offer-image">
                            <img
                              src="../assets/images/vegetable/product/17.png"
                              className=" lazyload"
                              alt=""
                            />
                          </Link>
                          <div className="offer-detail">
                            <div>
                              <Link to="/product" className="text-title">
                                <h6 className="name">Organic Tomato</h6>
                              </Link>
                              <span>1 KG</span>
                              <h6 className="price theme-color">$ 10.00</h6>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="offer-product">
                          <Link to="/product" className="offer-image">
                            <img
                              src="../assets/images/vegetable/product/18.png"
                              className=" lazyload"
                              alt=""
                            />
                          </Link>
                          <div className="offer-detail">
                            <div>
                              <Link to="/product" className="text-title">
                                <h6 className="name">Organic Jam</h6>
                              </Link>
                              <span>150 G</span>
                              <h6 className="price theme-color">$ 10.00</h6>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="product-list">
                      <li>
                        <div className="offer-product">
                          <Link to="/product" className="offer-image">
                            <img
                              src="../assets/images/vegetable/product/19.png"
                              className=" lazyload"
                              alt=""
                            />
                          </Link>
                          <div className="offer-detail">
                            <div>
                              <Link to="/product" className="text-title">
                                <h6 className="name">
                                  Good Life Refined Sunflower Oil
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
                          <Link to="/product" className="offer-image">
                            <img
                              src="../assets/images/vegetable/product/20.png"
                              className=" lazyload"
                              alt=""
                            />
                          </Link>
                          <div className="offer-detail">
                            <div>
                              <Link to="/product" className="text-title">
                                <h6 className="name">Good Life Raw Peanuts</h6>
                              </Link>
                              <span>500 G</span>
                              <h6 className="price theme-color">$ 10.00</h6>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="offer-product">
                          <Link to="/product" className="offer-image">
                            <img
                              src="../assets/images/vegetable/product/21.png"
                              className=" lazyload"
                              alt=""
                            />
                          </Link>
                          <div className="offer-detail">
                            <div>
                              <Link to="/product" className="text-title">
                                <h6 className="name">
                                  TufBest Farms Moong Dal
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
                          <Link to="/product" className="offer-image">
                            <img
                              src="../assets/images/vegetable/product/22.png"
                              className=" lazyload"
                              alt=""
                            />
                          </Link>
                          <div className="offer-detail">
                            <div>
                              <Link to="/product" className="text-title">
                                <h6 className="name">Frooti Mango Drink</h6>
                              </Link>
                              <span>160 ML</span>
                              <h6 className="price theme-color">$ 10.00</h6>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Slider>
              </div>
              <div className="section-t-space">
                <div
                  className="banner-contain hover-effect"
                  style={{
                    backgroundImage: `url(../assets/images/vegetable/banner/14.jpg) `,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    display: "block",
                  }}
                >
                  <div className="banner-details p-center banner-b-space w-100 text-center">
                    <div>
                      <h6 className="ls-expanded theme-color mb-sm-3 mb-1">
                        SUMMER
                      </h6>
                      <h2 className="banner-title">VEGETABLE</h2>
                      <h5 className="lh-sm mx-auto mt-1 text-content">
                        Save up to 5% OFF
                      </h5>
                      <button
                        onClick={() => {
                          window.location.href = "/shop";
                        }}
                        className="btn btn-animation btn-sm mx-auto mt-sm-3 mt-2"
                      >
                        Shop Now <i className="fa-solid fa-arrow-right icon" />
                      </button>
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
              <div className="slider-3-blog ratio_65 no-arrow product-wrapper">
                <Slider {...settings}>
                  <div>
                    <div className="blog-box">
                      <div className="blog-box-image">
                        <Link to="/blog" className="blog-image">
                          <img
                            src="../assets/images/vegetable/blog/1.jpg"
                            className="bg-img  lazyload"
                            alt=""
                          />
                        </Link>
                      </div>
                      <Link to="/blog" className="blog-detail">
                        <h6>20 March, 2022</h6>
                        <h5>Fresh Vegetable Online</h5>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="blog-box">
                      <div className="blog-box-image">
                        <Link to="/blog" className="blog-image">
                          <img
                            src="../assets/images/vegetable/blog/2.jpg"
                            className="bg-img  lazyload"
                            alt=""
                          />
                        </Link>
                      </div>
                      <Link to="/blog" className="blog-detail">
                        <h6>10 April, 2022</h6>
                        <h5>Fresh Combo Fruit</h5>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="blog-box">
                      <div className="blog-box-image">
                        <Link to="/blog" className="blog-image">
                          <img
                            src="../assets/images/vegetable/blog/3.jpg"
                            className="bg-img  lazyload"
                            alt=""
                          />
                        </Link>
                      </div>
                      <Link to="/blog" className="blog-detail">
                        <h6>10 April, 2022</h6>
                        <h5>Nuts to Eat for Better Health</h5>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="blog-box">
                      <div className="blog-box-image">
                        <Link to="/blog" className="blog-image">
                          <img
                            src="../assets/images/vegetable/blog/1.jpg"
                            className="bg-img  lazyload"
                            alt=""
                          />
                        </Link>
                      </div>
                      <Link to="/blog" className="blog-detail">
                        <h6>20 March, 2022</h6>
                        <h5>Fresh Vegetable Online</h5>
                      </Link>
                    </div>
                  </div>
                </Slider>
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
                      src="../assets/images/vegetable/product/5.png"
                      className="img-fluid  lazyload"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-sidebar-modal">
                    <h4 className="title-name">
                      Yumitos Chilli Sprinkled Potato Chips 100 g{" "}
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
                        onClick={() => {
                          window.location.href = "/cart";
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
                {/* <i className="fa-solid fa-xmark" /> */}
                <i className="fas fa-times" />
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
              className="lazyload"
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
          <button className="btn ok-button" onClick={handleOkButtonClick}>
            OK
          </button>
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
  );
}

export default IndexGrocary;