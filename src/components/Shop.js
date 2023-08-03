import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Slider from "react-slick";
import "react-input-range/lib/css/index.css";
import "jquery-ui-dist/jquery-ui";
import Header from "./Header";
import Footer from "./Footer";
import {
  AddToCart,
  CreateWish,
  ProductDetails,
  ProductList,
  CartList,
  LowPriceProduct,
  HighPriceProduct,
  AscendingProduct,
  DescendingProduct,
  TrandingProduct,
  DiscountProduct,
  FilterPrice,
  AddCompare,
  ProductRating,
} from "./HttpServices";
import Star from "./Star";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faArrowsRotate,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import LocationModel from "./LocationModel";
import DealBoxModel from "./DealBoxModel";
import Spinner from "./Spinner";
import { useCreateOrderMutation } from "../services/Post";

function Shop(props) {
  const [productListItems, setProductListItems] = useState([]);
  console.log("productListItems", productListItems);
  const [productListDetails, setProductListDetails] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [CreateWishItems, setCreateWishItems] = useState([]);
  const [addCompareItems, setAddCompareItems] = useState([]);
  const [addCart, setAddCart] = useState([]);
  const [cartListItems, setCartListItems] = useState([]);
  const [selectedWeight, setSelectedWeight] = useState("");
  const [priceRange, setPriceRange] = useState([0, 11000]); // Initial price range
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState([])
  const [createOrder, responseInfo] = useCreateOrderMutation();
  const handleSaveChanges = (id) => {
    const newAddress = {
      carts:[
          {
          product_Id:id,
           quantity:"2"
          },
           {
          product_Id:"6482b78584e5342a120adbb4",
          quantity:"2"
          }
      ],
      user_Id:"6479bd30adce522c085b2705",
      address_Id:"6482c98e76841b2dc23c2241",
      shippingPrice:"30",
      taxPrice:"20",
      deliverdBy:"64807a3f998cb060711aac1c",
      orderStatus:"Delivered"
     
  }
  createOrder(newAddress);
  };

  const handleChange = (e) => {
    const currentValue = e.target.value;
    filterData(currentValue);
    document.getElementById("rangeValue").textContent = `$0 - $${currentValue}`;
  };
  console.log("price range", priceRange);
  console.log("selected weight", selectedWeight);
  const filterData = async (currentValue) => {
    try {
      const { data, error } = await FilterPrice(currentValue);
      error ? console.log(error) : console.log(data);
      setProductListItems(data?.results?.filterData);
      console.log("filter data", data?.results?.filterData);
    } catch (error) {
      console.log(error);
    }
  };

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
      const { data, error } = await ProductList();
      error ? console.log(error) : console.log(data);
      setProductListItems(data?.results?.list);
      setLoading(true);
      props.setProgress(50);
      console.log(data?.results?.list);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (productListItems?.length > 0) {
      getData();
    }
  }, [productListItems]);
  const getData = async () => {
    try {
      props.setProgress(70);
      setLoading(true);
      const ids = productListItems.map((item) => item._id); // Get all _id values
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
  const handleTranding = async () => {
    try {
      const { data, error } = await TrandingProduct();
      if (error) {
        console.log(error);
        return;
      }
      setProductListItems(data?.results?.productlist || []);
      console.log("Trending product", data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLowToHigh = async () => {
    try {
      const { data, error } = await LowPriceProduct();
      if (error) {
        console.log(error);
        return;
      }
      setProductListItems(data?.results?.productlist);
      console.log("low to high setProductListItems", data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleHighToLow = async () => {
    try {
      const { data, error } = await HighPriceProduct();
      if (error) {
        console.log(error);
        return;
      }
      setProductListItems(data?.results?.productList || []);
      console.log("high to low setProductListItems", data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAscending = async () => {
    try {
      const { data, error } = await AscendingProduct();
      if (error) {
        console.log(error);
        return;
      }
      setProductListItems(data?.results?.productList || []);
      console.log("Ascending order product", data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDescending = async () => {
    try {
      const { data, error } = await DescendingProduct();
      if (error) {
        console.log(error);
        return;
      }
      setProductListItems(data?.results?.productList || []);
      console.log("Descending order product", data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDiscount = async () => {
    try {
      const { data, error } = await DiscountProduct();
      if (error) {
        console.log(error);
        return;
      }
      setProductListItems(data?.results?.productData);
      console.log("Discount product", data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("productList", productListItems);
  console.log("productListDetails", productListDetails);
  console.log("createWish", CreateWishItems);
  console.log("cart list item new", cartListItems);
  var w = window.innerWidth;
  useEffect(() => {
    feather.replace();
  }, []);
  var settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: w > 500 ? 6 : 1,
    autoplay: true,
    slidesToScroll: 1,
  };
  return (
    <>
      {loading}
      {/* Header Start */}
      <Header setProductListItems={setProductListItems} />
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
                <h2>Shop Right Sidebar</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/index">
                        <i className="fa-solid fa-house" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Shop Right Sidebar
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}
      {/* Category Section Start */}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="wow fadeInUp">
            <div className="container-fluid-lg">
              <div className="row">
                <div className="col-12">
                  <div className="slider-7_1 no-space shop-box no-arrow">
                    <Slider {...settings1}>
                      <div>
                        <div className="shop-category-box">
                          <Link to="/shop">
                            <div className="shop-category-image">
                              <img
                                src="../assets/svg/1/vegetable.svg"
                                className=" lazyload"
                                alt=""
                              />
                            </div>
                            <div className="category-box-name">
                              <h6>Vegetables &amp; Fruit</h6>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="shop-category-box">
                          <Link to="/shop">
                            <div className="shop-category-image">
                              <img
                                src="../assets/svg/1/cup.svg"
                                className=" lazyload"
                                alt=""
                              />
                            </div>
                            <div className="category-box-name">
                              <h6>Beverages</h6>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="shop-category-box">
                          <Link to="/shop">
                            <div className="shop-category-image">
                              <img
                                src="../assets/svg/1/meats.svg"
                                className=" lazyload"
                                alt=""
                              />
                            </div>
                            <div className="category-box-name">
                              <h6>Meats &amp; Seafood</h6>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="shop-category-box">
                          <Link to="/shop">
                            <div className="shop-category-image">
                              <img
                                src="../assets/svg/1/breakfast.svg"
                                className=" lazyload"
                                alt=""
                              />
                            </div>
                            <div className="category-box-name">
                              <h6>Breakfast</h6>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="shop-category-box">
                          <Link to="/shop">
                            <div className="shop-category-image">
                              <img
                                src="../assets/svg/1/frozen.svg"
                                className=" lazyload"
                                alt=""
                              />
                            </div>
                            <div className="category-box-name">
                              <h6>Frozen Foods</h6>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="shop-category-box">
                          <Link to="/shop">
                            <div className="shop-category-image">
                              <img
                                src="../assets/svg/1/milk.svg"
                                className=" lazyload"
                                alt=""
                              />
                            </div>
                            <div className="category-box-name">
                              <h6>Milk &amp; Dairies</h6>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="shop-category-box">
                          <Link to="/shop">
                            <div className="shop-category-image">
                              <img
                                src="../assets/svg/1/pet.svg"
                                className=" lazyload"
                                alt=""
                              />
                            </div>
                            <div className="category-box-name">
                              <h6>Pet Food</h6>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="shop-category-box">
                          <Link to="/shop">
                            <div className="shop-category-image">
                              <img
                                src="../assets/svg/1/biscuit.svg"
                                className=" lazyload"
                                alt=""
                              />
                            </div>
                            <div className="category-box-name">
                              <h6>Biscuits &amp; Snacks</h6>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="shop-category-box">
                          <Link to="/shop">
                            <div className="shop-category-image">
                              <img
                                src="../assets/svg/1/grocery.svg"
                                className=" lazyload"
                                alt=""
                              />
                            </div>
                            <div className="category-box-name">
                              <h6>Grocery &amp; Staples</h6>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Category Section End */}
          {/* Shop Section Start */}

          <section className="section-b-space shop-section">
            <div className="container-fluid-lg">
              <div className="row">
                <div className="col-3 wow fadeInUp">
                  <div className="left-box">
                    <div className="shop-left-sidebar">
                      <div className="back-button">
                        <h3>
                          <i className="fa-solid fa-arrow-left" /> Back
                        </h3>
                      </div>
                      <div className="filter-category">
                        <div className="filter-title">
                          <h2>Filters</h2>
                          <Link to="#">Clear All</Link>
                        </div>
                        <ul>
                          <li>
                            <Link to="#">Vegetable</Link>
                          </li>
                          <li>
                            <Link to="#">Fruit</Link>
                          </li>
                          <li>
                            <Link to="#">Fresh</Link>
                          </li>
                          <li>
                            <Link to="#">Milk</Link>
                          </li>
                          <li>
                            <Link to="#">Meat</Link>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="accordion custome-accordion"
                        id="accordionExample"
                      >
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="panelsStayOpen-headingOne"
                          >
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              <span>Categories</span>
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="panelsStayOpen-headingOne"
                          >
                            <div className="accordion-body">
                              <div className="form-floating theme-form-floating-2 search-box">
                                <input
                                  type="search"
                                  className="form-control"
                                  id="search"
                                  placeholder="Search .."
                                />
                                <label htmlFor="search">Search</label>
                              </div>
                              <ul className="category-list pe-3 custom-height">
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="fruit"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="fruit"
                                    >
                                      <span className="name">
                                        Fruits &amp; Vegetables
                                      </span>
                                      <span className="number">(15)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="cake"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="cake"
                                    >
                                      <span className="name">
                                        Bakery, Cake &amp; Dairy
                                      </span>
                                      <span className="number">(12)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="behe"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="behe"
                                    >
                                      <span className="name">Beverages</span>
                                      <span className="number">(20)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="snacks"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="snacks"
                                    >
                                      <span className="name">
                                        Snacks &amp; Branded Foods
                                      </span>
                                      <span className="number">(05)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="beauty"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="beauty"
                                    >
                                      <span className="name">
                                        Beauty &amp; Household
                                      </span>
                                      <span className="number">(30)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="pets"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="pets"
                                    >
                                      <span className="name">
                                        Kitchen, Garden &amp; Pets
                                      </span>
                                      <span className="number">(50)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="egg"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="egg"
                                    >
                                      <span className="name">
                                        Eggs, Meat &amp; Fish
                                      </span>
                                      <span className="number">(19)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="food"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="food"
                                    >
                                      <span className="name">
                                        Gourment &amp; World Food
                                      </span>
                                      <span className="number">(30)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="care"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="care"
                                    >
                                      <span className="name">Baby Care</span>
                                      <span className="number">(20)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="fish"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="fish"
                                    >
                                      <span className="name">
                                        Fish &amp; Seafood
                                      </span>
                                      <span className="number">(10)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="marinades"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="marinades"
                                    >
                                      <span className="name">Marinades</span>
                                      <span className="number">(05)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="lamb"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="lamb"
                                    >
                                      <span className="name">
                                        Mutton &amp; Lamb
                                      </span>
                                      <span className="number">(09)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="other"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="other"
                                    >
                                      <span className="name">
                                        Port &amp; other Meats
                                      </span>
                                      <span className="number">(06)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="pour"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="pour"
                                    >
                                      <span className="name">Pourltry</span>
                                      <span className="number">(01)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="salami"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="salami"
                                    >
                                      <span className="name">
                                        Sausages, bacon &amp; Salami
                                      </span>
                                      <span className="number">(03)</span>
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="panelsStayOpen-headingTwo"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              <span>Food Preference</span>
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse show"
                            aria-labelledby="panelsStayOpen-headingTwo"
                          >
                            <div className="accordion-body">
                              <ul className="category-list custom-padding">
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="veget"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="veget"
                                    >
                                      <span className="name">Vegetarian</span>
                                      <span className="number">(08)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="non"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="non"
                                    >
                                      <span className="name">
                                        Non Vegetarian
                                      </span>
                                      <span className="number">(09)</span>
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="panelsStayOpen-headingThree"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              <span>Price</span>
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse show"
                            aria-labelledby="panelsStayOpen-headingThree"
                          >
                            <div className="accordion-body">
                              <>
                                <span
                                  className="irs-min"
                                  style={{
                                    visibility: "visible",
                                    display: "inline-block",
                                  }}
                                >
                                  $0
                                </span>
                                <span
                                  className="irs-max"
                                  style={{
                                    visibility: "visible",
                                    marginLeft: "210px",
                                    display: "inline-block",
                                  }}
                                >
                                  $11000
                                </span>
                                <input
                                  type="range"
                                  className="form-range text-success"
                                  min={0}
                                  max={11000}
                                  step="1"
                                  id="customRange3"
                                  onChange={handleChange}
                                />
                                <div
                                  className="mb-4 form-control border-success"
                                  id="rangeValue"
                                  placeholder="$0 - $10000"
                                ></div>
                              </>
                            </div>
                          </div>
                        </div>

                        {/* <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="panelsStayOpen-headingSix"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseSix"
                              aria-expanded="false"
                              aria-controls="collapseSix"
                            >
                              <span>Rating</span>
                            </button>
                          </h2>
                          <div
                            id="collapseSix"
                            className="accordion-collapse collapse show"
                            aria-labelledby="panelsStayOpen-headingSix"
                          >
                            <div className="accordion-body">
                              <ul className="category-list custom-padding">
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                    />
                                    <div className="form-check-label">
                                      <ul className="rating">
                                        <Star/>
                                      </ul>
                                      <span className="text-content">
                                        (5 Star)
                                      </span>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                    />
                                    <div className="form-check-label">
                                      <ul className="rating">
                                        <Star/>
                                      </ul>
                                      <span className="text-content">
                                        (4 Star)
                                      </span>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                    />
                                    <div className="form-check-label">
                                      <ul className="rating">
                                        <Star/>
                                      </ul>
                                      <span className="text-content">
                                        (3 Star)
                                      </span>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                    />
                                    <div className="form-check-label">
                                      <ul className="rating">
                                        <Star/>
                                      </ul>
                                      <span className="text-content">
                                        (2 Star)
                                      </span>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                    />
                                    <div className="form-check-label">
                                      <ul className="rating">
                                        <Star/>
                                      </ul>
                                      <span className="text-content">
                                        (1 Star)
                                      </span>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div> */}
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="panelsStayOpen-headingFour"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              <span>Discount</span>
                            </button>
                          </h2>
                          <div
                            id="collapseFour"
                            className="accordion-collapse collapse show"
                            aria-labelledby="panelsStayOpen-headingFour"
                          >
                            <div className="accordion-body">
                              <ul className="category-list custom-padding">
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="flexCheckDefault"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault"
                                    >
                                      <span className="name">upto 5%</span>
                                      <span className="number">(06)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="flexCheckDefault1"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault1"
                                    >
                                      <span className="name">5% - 10%</span>
                                      <span className="number">(08)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="flexCheckDefault2"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault2"
                                    >
                                      <span className="name">10% - 15%</span>
                                      <span className="number">(10)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="flexCheckDefault3"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault3"
                                    >
                                      <span className="name">15% - 25%</span>
                                      <span className="number">(14)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="flexCheckDefault4"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault4"
                                    >
                                      <span className="name">
                                        More than 25%
                                      </span>
                                      <span className="number">(13)</span>
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="panelsStayOpen-headingFive"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFive"
                              aria-expanded="false"
                              aria-controls="collapseFive"
                            >
                              <span>Pack Size</span>
                            </button>
                          </h2>
                          <div
                            id="collapseFive"
                            className="accordion-collapse collapse show"
                            aria-labelledby="panelsStayOpen-headingFive"
                          >
                            <div className="accordion-body">
                              <ul className="category-list pe-3 custom-height">
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="flexCheckDefault5"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault5"
                                    >
                                      <span className="name">400 to 500 g</span>
                                      <span className="number">(05)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="flexCheckDefault6"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault6"
                                    >
                                      <span className="name">500 to 700 g</span>
                                      <span className="number">(02)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="flexCheckDefault7"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault7"
                                    >
                                      <span className="name">700 to 1 kg</span>
                                      <span className="number">(04)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="flexCheckDefault8"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault8"
                                    >
                                      <span className="name">
                                        120 - 150 g each Vacuum 2 pcs
                                      </span>
                                      <span className="number">(06)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="flexCheckDefault9"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault9"
                                    >
                                      <span className="name">1 pc</span>
                                      <span className="number">(09)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="flexCheckDefault10"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault10"
                                    >
                                      <span className="name">1 to 1.2 kg</span>
                                      <span className="number">(06)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="flexCheckDefault11"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault11"
                                    >
                                      <span className="name">
                                        2 x 24 pcs Multipack
                                      </span>
                                      <span className="number">(03)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="flexCheckDefault12"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault12"
                                    >
                                      <span className="name">
                                        2x6 pcs Multipack
                                      </span>
                                      <span className="number">(04)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="flexCheckDefault13"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault13"
                                    >
                                      <span className="name">
                                        4x6 pcs Multipack
                                      </span>
                                      <span className="number">(05)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="flexCheckDefault14"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault14"
                                    >
                                      <span className="name">
                                        5x6 pcs Multipack
                                      </span>
                                      <span className="number">(09)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="flexCheckDefault15"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault15"
                                    >
                                      <span className="name">
                                        Combo 2 Items
                                      </span>
                                      <span className="number">(10)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="flexCheckDefault16"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault16"
                                    >
                                      <span className="name">
                                        Combo 3 Items
                                      </span>
                                      <span className="number">(14)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="flexCheckDefault17"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault17"
                                    >
                                      <span className="name">2 pcs</span>
                                      <span className="number">(19)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="flexCheckDefault18"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault18"
                                    >
                                      <span className="name">3 pcs</span>
                                      <span className="number">(14)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="flexCheckDefault19"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault19"
                                    >
                                      <span className="name">
                                        2 pcs Vacuum (140 g to 180 g each )
                                      </span>
                                      <span className="number">(13)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="flexCheckDefault20"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault20"
                                    >
                                      <span className="name">4 pcs</span>
                                      <span className="number">(18)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="flexCheckDefault21"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault21"
                                    >
                                      <span className="name">
                                        4 pcs Vacuum (140 g to 180 g each )
                                      </span>
                                      <span className="number">(07)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="flexCheckDefault22"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault22"
                                    >
                                      <span className="name">6 pcs</span>
                                      <span className="number">(09)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="flexCheckDefault23"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault23"
                                    >
                                      <span className="name">6 pcs carton</span>
                                      <span className="number">(11)</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id="flexCheckDefault24"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault24"
                                    >
                                      <span className="name">6 pcs Pouch</span>
                                      <span className="number">(16)</span>
                                    </label>
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
                <div className="col-9 wow fadeInUp">
                  <div className="show-button">
                    <div className="filter-button-group mt-0">
                      <div className="filter-button d-inline-block d-lg-none">
                        <Link>
                          <i className="fa-solid fa-filter" /> Filter Menu
                        </Link>
                      </div>
                    </div>
                    <div className="top-filter-menu">
                      <div className="category-dropdown">
                        <h5 className="text-content">Sort By :</h5>
                        <div className="dropdown">
                          <button
                            className="dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                          >
                            <span>Most Popular</span>{" "}
                            <i className="fa-solid fa-angle-down" />
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <li>
                              <Link
                                className="dropdown-item"
                                id="pop"
                                to="#"
                                onClick={() => handleTranding()}
                              >
                                Popularity
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                id="low"
                                to="#"
                                onClick={() => handleLowToHigh()}
                              >
                                Low - High Price
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                id="high"
                                to="#"
                                onClick={() => handleHighToLow()}
                              >
                                High - Low Price
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                id="rating"
                                to="#"
                              >
                                Average Rating
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                id="aToz"
                                to="#"
                                onClick={() => handleAscending()}
                              >
                                A - Z Order
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                id="zToa"
                                to="#"
                                onClick={() => handleDescending()}
                              >
                                Z - A Order
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                id="off"
                                to="#"
                                onClick={() => handleDiscount()}
                              >
                                % Off - Hight To Low
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="grid-option d-none d-md-block">
                        <ul>
                          <li className="three-grid">
                            <Link to="#">
                              <img
                                src="../assets/svg/grid-3.svg"
                                className=" lazyload"
                                alt=""
                              />
                            </Link>
                          </li>
                          <li className="grid-btn d-xxl-inline-block d-none active">
                            <Link to="#">
                              <img
                                src="../assets/svg/grid-4.svg"
                                className=" lazyload d-lg-inline-block d-none"
                                alt=""
                              />
                              <img
                                src="../assets/svg/grid.svg"
                                className=" lazyload img-fluid d-lg-none d-inline-block"
                                alt=""
                              />
                            </Link>
                          </li>
                          <li className="list-btn">
                            <Link to="#">
                              <img
                                src="../assets/svg/list.svg"
                                className=" lazyload"
                                alt=""
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section">
                    {productListItems?.map((item, index) => {
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
                                      <FontAwesomeIcon icon={faArrowsRotate} />
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
                                <span className="span-name"> {item._id} </span>
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
                                  <span> {item.totalRating} reviews </span>
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
                                <div className="add-to-cart-box bg-danger mt-2">
                                  <button className="btn btn-add-cart addcart-button">
                                    <Link
                                    className="text-light"
                                      to="/cart"
                                      onClick={() => handleSaveChanges(item?._id)}
                                    >
                                    {/* className="text-light"
                                      to="/cart"
                                      onClick={() => handleSaveChanges(item?._id,user_Id,
                                      address_Id,
                                      shippingPrice,
                                      taxPrice,
                                      deliverdBy,
                                      orderStatus )}
                                    > */}
                                      Buy Now
                                      {/* <span className="add-icon bg-light-gray">
                                        <i className="fa-solid fa-plus" />
                                      </span> */}
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
              </div>
            </div>
          </section>
        </>
      )}
      {/* Shop Section End */}
      {/* Footer Section Start */}
      <Footer />
      {/* Footer Section End */}
      {/* Quick View Modal Box Start */}

      {selectedProduct && (
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
                        src={selectedProduct.product_Pic[0]}
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="right-sidebar-modal">
                      <div>
                        <h4 className="title-name">
                          {selectedProduct.productName}
                        </h4>
                        <h4 className="price">${selectedProduct.Price} </h4>
                        <div className="product-rating">
                          <Star rating={selectedProduct?.totalRating} />
                          <span className="ms-2">
                            {selectedProduct.totalRating} Reviews
                          </span>
                          <span className="ms-2 text-danger">
                            6 sold in last 16 hours
                          </span>
                        </div>
                        <div className="product-detail">
                          <h4>Product Details :</h4>
                          <p>{selectedProduct.Description}</p>
                        </div>
                        <ul className="brand-list">
                          <li>
                            <div className="brand-box">
                              <h5>Brand Name:</h5>
                              <h6> {selectedProduct?.brandName} </h6>
                            </div>
                          </li>
                          <li>
                            <div className="brand-box">
                              <h5>Product Code:</h5>
                              <h6>{selectedProduct?.SKU} </h6>
                            </div>
                          </li>
                          <li>
                            <div className="brand-box">
                              <h5>Product Type:</h5>
                              <h6>{selectedProduct?.Tags} </h6>
                            </div>
                          </li>
                        </ul>
                        <div className="select-size">
                          <h4>Cake Size :</h4>
                          <select
                            className="form-select select-form-size"
                            value={selectedWeight}
                            onChange={(e) => setSelectedWeight(e.target.value)}
                          >
                            <option value="">Select Size</option>
                            <option value="0.5">1/2 KG</option>
                            <option value="1">1 KG</option>
                            <option value="1.5">1.5 KG</option>
                          </select>
                        </div>
                        <div className="modal-button">
                          <Link to="/cart">
                            <button
                              className="btn btn-md add-cart-button icon"
                              onClick={() => handleAddToCart(selectedProduct)}
                            >
                              Add To Cart
                            </button>
                          </Link>
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
        </div>
      )}
      {/* Quick View Modal Box End */}
      {/* Location Modal Start */}
      <LocationModel />
      {/* Location Modal End */}
      {/* Deal Box Modal Start */}
      <DealBoxModel />

      {/* Deal Box Modal End */}
      {/* Add to cart Modal Start */}
      <div className="add-cart-box">
        <div className="add-iamge">
          <img
            src="../assets/images/cake/pro/1.jpg"
            className="img-fluid  lazyload"
            alt=""
          />
        </div>
        <div className="add-contain">
          <h6>Added to Cart</h6>
        </div>
      </div>
      {/* Add to cart Modal End */}
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

export default Shop;
