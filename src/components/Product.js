import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faHeart } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import { ProductDetails, ProductList, ProductSearch } from "./HttpServices";
import { useGetCartListQuery } from "../services/Post";
import {
  InitializeColorPicker,
  StickyCartScroll,
  UseCountdownTimer,
} from "./JavaScriptFunction";
import Star from "./Star";
import Header from "./Header";
import Footer from "./Footer";
import { useGetRelatedProductQuery } from "../services/Post";
import Spinner from "./Spinner";
import { useGetTrendingProductQuery } from "../services/Post";
import { useCreateReportMutation } from "../services/Post";
import { AddToCart } from "./HttpServices";
import { useAddReviewMutation } from "../services/Post";
import GetStar from "./GetStar";
import { useRelatedProductDetailsMutation } from "../services/Post";
import CountdownTimer from "./CountdownTimer";
import Carousel from "./Carousel ";
import SetupReadMore from "./javascript/Readmore";

function Product(props) {
  const relatedProduct = useGetRelatedProductQuery();
  const [currentSlide, setCurrentSlide] = useState(0);

  const [relatedDetails, respons] = useRelatedProductDetailsMutation();
  const [addReview, response] = useAddReviewMutation();
  const [relatedProductItems, setRelatedProductItems] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [reportData, res] = useCreateReportMutation();
  const [productDetail, setProductDetail] = useState("");
  console.log(productDetail);
  const trendingProduct = useGetTrendingProductQuery();
  const { data, error, isLoading, isSuccess } = useGetCartListQuery();
  console.log("useGetTrendingProductQuery", trendingProduct);
  const [trendingList, setTrendingList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  console.log(id);
  // const ratings = 4.5;
  console.log("useGetRelatedProductQuery", relatedProduct);
  console.log("product detail", productDetail);
  const userId = localStorage.getItem("loginId");
  const userEmail = localStorage?.getItem("userEmail");
  const mobileNumber = localStorage?.getItem("mobileNumber");
  const userName = localStorage?.getItem("userName");
  const [cartListItems, setCartListItems] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [website, setWebsite] = useState([]);
  const [title, setTitle] = useState([]);
  const [comment, setComment] = useState([]);
  const [count, setCount] = useState(0);
  const [selectedAttributeValues, setSelectedAttributeValues] = useState({});
  const [selectedVariant, setSelectedVariant] = useState(0);
  const variants = productDetail?.addVarient || [];
  const [area, setArea] = useState(true);
  console.log("variant", variants);

  const handleVariantChange = (index) => {
    setSelectedVariant(index);
  };
  const selectedVariantData = variants[selectedVariant];
  // const price = selectedVariantData?.Price;
  const price = count
    ? selectedVariantData?.Price * count
    : selectedVariantData?.Price;
  const oldPrice = count
    ? selectedVariantData?.oldPrice * count
    : selectedVariantData?.oldPrice;
  const quantity = selectedVariantData?.stockQuantity;
  console.log("quantity", quantity);

  console.log("selectedVariantData", selectedVariantData);
  const [formData, setFormData] = useState({
    r1: "",
    description: "",
  });
  const totalRatings = productDetail?.ratings?.reduce(
    (sum, rating) => sum + rating.star,
    0
  );
  const averageRating = totalRatings / productDetail?.ratings?.length;

  const ratings = productDetail?.ratings;
  const totalRating = ratings?.length;
  let starCounts = [0, 0, 0, 0, 0];

  ratings?.forEach((rating) => {
    starCounts[rating?.star - 1]++;
  });

  const percentages = starCounts?.map((count) => (count / totalRating) * 100);
  const fiveStar = percentages[4];
  const fourStar = percentages[3];
  const threeStar = percentages[2];
  const twoStar = percentages[1];
  const oneStar = percentages[0];
  console.log(fourStar);
  console.log(percentages);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const userRating = localStorage?.getItem("userRating");
  const handleCreateReview = async (e) => {
    e.preventDefault();
    const newContactData = {
      yourName: name,
      Email: email,
      website: website,
      reviewTitle: title,
      comment: comment,
      rating: userRating,
      star: userRating,
      product_Id: id,
      user_Id: userId,
      postedby: userId,
    };
    try {
      const createdReview = await addReview(newContactData);
      console.log("Review created successfully:", createdReview);
      Swal.fire({
        title: "Review Created!",
        text: "Your review has been successfully created.",
        icon: "success",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    } catch (error) {
      console.error("Error creating contact:", error);
    }
  };
  useEffect(() => {
    related();
  }, [id]);
  const relatedProductDetail = respons?.data?.results?.productData;
  console.log(relatedProductDetail);
  console.log(respons);
  const related = () => {
    const newAddress = {
      id: id,
    };
    relatedDetails(newAddress);
  };
  const handleSaveReport = () => {
    Swal.fire({
      title: "Confirm",
      text: "Are you sure you want to save this report?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      customClass: {
        confirmButton: "btn btn-primary mx-2",
        cancelButton: "btn btn-secondary mx-2",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const newAddress = {
          reason: formData.r1,
          description: formData.description,
          user_Id: userId,
          product_Id: id,
          reporterName: userName,
          reporterNumber: mobileNumber,
          reporterEmail: userEmail,
        };
        reportData(newAddress);
      }
    });
  };

  useEffect(() => {
    if (trendingProduct?.data?.results?.productlist) {
      setTrendingList(trendingProduct?.data?.results?.productlist);
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        props.setProgress(10);
        setLoading(true);
        console.log(id);
        const { data, error } = await ProductDetails(id);
        error ? console.log(error) : console.log(data);
        setProductDetail(data?.results?.details);
        props.setProgress(50);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    props.setProgress(70);
    if (relatedProduct?.data?.results?.productData) {
      setRelatedProductItems(relatedProduct?.data?.results?.productData);
      props.setProgress(100);
      setLoading(false);
    }
  });

  const handleAddToCart = async (item, index) => {
    try {
      const { data, error } = await AddToCart(id, count, price);
      if (error) {
        console.log(error);
        return;
      }
      // const newCartItems = [...cartListItems, data];
      // setCartListItems(newCartItems);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      window?.location?.reload();
    }, 500);
  };
  const fetchCartListData = () => {
    if (isSuccess) {
      setCartListItems(data?.results?.list);
    }
  };
  useEffect(() => {
    fetchCartListData();
  }, [data]);

  const handleSearch = () => {
    setSearchKey(searchKey);
  };
  useEffect(() => {
    StickyCartScroll();
  }, []);
  useEffect(() => {
    InitializeColorPicker();
  }, []);

  var w = window.innerWidth;
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: w > 500 ? 3 : 1,
    autoplay: true,
    slidesToScroll: 1,
  };
  useEffect(() => {
    feather.replace();
  }, []);
  // var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  // UseCountdownTimer(deadline);
  const sliderSettings = {
    dots: true, // Show dots (indicators)
    infinite: true, // Infinite loop
    speed: 500,
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1,
    autoplay: true,
    beforeChange: (current, next) => setCurrentSlide(next), // Update current slide index
  };

  const sliders2 = () => {
    return relatedProductDetail?.map((item, index) => (
      <div key={index}>
        <div className="product-box-3 wow fadeInUp">
          <div className="product-header">
            <div className="product-image">
              <Link to="/product-left-2">
                <img
                  src={item?.product_Pic?.map((index) => index)}
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
                  <Link to="#" data-bs-toggle="modal" data-bs-target="#view">
                    <i data-feather="eye" />
                  </Link>
                </li>
                <li
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Compare"
                >
                  <Link to="/compare">
                    <i data-feather="refresh-cw" />
                  </Link>
                </li>
                <li
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Wishlist"
                >
                  <Link to="/wishlist" className="notifi-wishlist">
                    <i data-feather="heart" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-footer">
            <div className="product-detail">
              <span className="span-name"> {item?.productName} </span>
              <Link to="/product">
                <h5 className="name">Chocolate Chip Cookies 250 g</h5>
              </Link>
              <div className="product-rating mt-2">
                <ul className="rating">
                  <Star />
                </ul>
                <span>(5.0)</span>
              </div>
              <h6 className="unit">500 G</h6>
              <h5 className="price">
                <span className="theme-color"> ${item?.Price} </span>{" "}
                <del> ${item?.oldPrice} </del>
              </h5>
              <div className="add-to-cart-box bg-white">
                <button className="btn btn-add-cart addcart-button">
                  Add
                  <span className="add-icon bg-light-gray">
                    <i className="fa-solid fa-plus" />
                  </span>
                </button>
                <div className="cart_qty qty-box">
                  <div className="input-group bg-white">
                    <button
                      type="button"
                      className="qty-left-minus bg-gray"
                      data-type="minus"
                      data-field=""
                    >
                      <i className="fa fa-minus" aria-hidden="true" />
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
                      <i className="fa fa-plus" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const handleExpand = () => {
    setArea(false);
  };
  const handleCompress = () => {
    setArea(true);
  };

  return (
    <>
      {loading}
      {/* Header Start */}
      <Header Dash={"details"} />
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
                <h2>
                  {productDetail?.productName_en?.toUpperCase()?.length > 20
                    ? productDetail.productName_en.slice(0, 20) + "..."
                    : productDetail.productName_en || "N/A"}
                </h2>

                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/index">
                        <i className="fa-solid fa-house" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      {productDetail?.productName_en?.toUpperCase()?.length > 20
                        ? productDetail.productName_en.slice(0, 20) + "..."
                        : productDetail.productName_en || "N/A"}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}
      {/* Product Left Sidebar Start */}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="product-section">
            <div className="container-fluid-lg">
              <div className="row">
                <div className="col-xxl-9 col-xl-8 col-lg-7 wow fadeInUp">
                  <div className="row g-4">
                    <div className="col-xl-7 wow fadeInUp">
                      <div className="product-left-box">
                        <div className="row g-2">
                          <div className="col-12">
                            <div className="product-main-1 no-arrow">
                              {/* {productDetail?.addVarient?.[0]?.product_Pic?.map((item, index) => {
                                return (
                                  <div key={index}>
                                    <div className="slider-image">
                                      <img
                                        src={item}
                                        id={`img-${index}`}
                                        data-zoom-image="../assets/images/product/category/1.jpg"
                                        className="img-fluid image_zoom_cls-0  lazyload"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                );
                              })} */}
                              <div className="col-12 offerdetails_product position-relative">
                                <div
                                  id="carouselExampleIndicators"
                                  className="carousel slide"
                                  data-interval="false"
                                  data-bs-ride="carousel"
                                >
                                  <div className="carousel-inner">
                                    {selectedVariantData?.product_Pic?.map(
                                      (item, index) => (
                                        <div
                                          className={`carousel-item ${
                                            index === 0 ? "active" : ""
                                          }`}
                                          key={index}
                                        >
                                          <img
                                            src={item}
                                            className="d-block w-100"
                                            alt={`Slide ${index + 1}`}
                                          />
                                          <span className="label_s">
                                            {item.label}
                                          </span>
                                        </div>
                                      )
                                    )}
                                  </div>

                                  <div className="carousel">
                                    <button
                                      type="button"
                                      className="carousel-control-prev"
                                      data-bs-target="#carouselExampleIndicators"
                                      data-bs-slide="prev"
                                    >
                                      <span
                                        className="carousel-control-prev-icon"
                                        aria-hidden="true"
                                      ></span>
                                      <span className="visually-hidden">
                                        Previous
                                      </span>
                                    </button>

                                    <div className="carousel-indicators">
                                      {selectedVariantData?.product_Pic?.map(
                                        (item, index) => (
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to={index}
                                            key={index}
                                            aria-label={`Slide ${index + 1}`}
                                            className={
                                              index === 0 ? "active" : ""
                                            }
                                          >
                                            <img
                                              src={item}
                                              className="thumnail_img"
                                              alt={`Slide ${index + 1}`}
                                            />
                                          </button>
                                        )
                                      )}
                                    </div>

                                    <button
                                      type="button"
                                      className="carousel-control-next"
                                      data-bs-target="#carouselExampleIndicators"
                                      data-bs-slide="next"
                                    >
                                      <span
                                        className="carousel-control-next-icon"
                                        aria-hidden="true"
                                      ></span>
                                      <span className="visually-hidden">
                                        Next
                                      </span>
                                    </button>
                                  </div>
                                  {/* {selectedVariantData?.product_Pic?.length <
                                  5 ? (
                                    <div className="carousel-indicators">
                                      {selectedVariantData?.product_Pic
                                        ?.slice(0, 5)
                                        ?.map((item, index) => (
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to={index}
                                            key={index}
                                            aria-label={`Slide ${index + 1}`}
                                            className={
                                              index === 0 ? "active" : ""
                                            }
                                          >
                                            <img
                                              src={item}
                                              className="thumnail_img"
                                              alt={`Slide ${index + 1}`}
                                            />
                                          </button>
                                        ))}
                                    </div>
                                  ) : (
                                    <div className="carousel">
                                      <button
                                        type="button"
                                        className="carousel-control-prev"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide="prev"
                                      >
                                        <span
                                          className="carousel-control-prev-icon"
                                          aria-hidden="true"
                                        ></span>
                                        <span className="visually-hidden">
                                          Previous
                                        </span>
                                      </button>

                                      <div className="carousel-indicators">
                                        {selectedVariantData?.product_Pic
                                          ?.map((item, index) => (
                                            <button
                                              type="button"
                                              data-bs-target="#carouselExampleIndicators"
                                              data-bs-slide-to={index}
                                              key={index}
                                              aria-label={`Slide ${index + 1}`}
                                              className={
                                                index === 0 ? "active" : ""
                                              }
                                            >
                                              <img
                                                src={item}
                                                className="thumnail_img"
                                                alt={`Slide ${index + 1}`}
                                              />
                                            </button>
                                          ))}
                                      </div>

                                      <button
                                        type="button"
                                        className="carousel-control-next"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide="next"
                                      >
                                        <span
                                          className="carousel-control-next-icon"
                                          aria-hidden="true"
                                        ></span>
                                        <span className="visually-hidden">
                                          Next
                                        </span>
                                      </button>
                                    </div>
                                  )} */}
                                </div>
                              </div>
                              {/* <Slider {...sliderSettings}>
                                {selectedVariantData?.product_Pic?.map(
                                  (item, index) => (
                                    <div key={index}>
                                      <div className="slider-image">
                                        <img
                                          src={item}
                                          id={`img-${index}`}
                                          data-zoom-image="../assets/images/product/category/1.jpg"
                                          className="img-fluid image_zoom_cls-0 lazyload"
                                          alt=""
                                          style={{
                                            width: "100%",
                                            height: "45vh",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  )
                                )}
                              </Slider>
                              {selectedVariantData?.product_Pic?.map(
                                  (item, index) => (
                                    <button
                                      type="button"
                                      data-bs-target="#carouselExampleIndicators"
                                      data-bs-slide-to={index}
                                      key={index}
                                      aria-label={`Slide ${index + 1}`}
                                      className={index === 0 ? "active" : ""}
                                    >
                                      <img
                                        src={item}
                                        className="thumnail_img"
                                        alt={`Slide ${index + 1}`}
                                      />
                                    </button>
                                  )
                                )} */}

                              {/* {selectedVariantData?.product_Pic?.map(
                                (item, index) => (
                                  <div key={index}>
                                    <div className="slider-image">
                                      <img
                                        src={item}
                                        id={`img-${index}`}
                                        data-zoom-image="../assets/images/product/category/1.jpg"
                                        className="img-fluid image_zoom_cls-0 lazyload"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                )
                              )} */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-xl-5 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div className="right-box-contain">
                        <div className="row align-items-center mb-4">
                          <div className="col-6">
                            <h6 className="offer-top mb-0">30% Off</h6>
                          </div>
                          <div className="col-6 text-end">
                            <Link
                              className="report_btns"
                              data-bs-toggle="modal"
                              data-bs-target="#report_modal"
                              to="#"
                            >
                              <img src="../assets/images/report.svg" alt="" />
                            </Link>
                          </div>
                        </div>
                        <h2 className="name">
                          {productDetail?.productName_en}
                        </h2>
                        {/* <h3 className="name">
                        Deal of the Day
                        </h3> */}
                        <Link
                          to="/cart"
                          className="btn btn-md bg-danger cart-button text-white mb-3"
                          style={{ width: "35%", height: "30px" }}
                        >
                          Deal of the Day
                        </Link>
                        <div className="price-rating">
                          <h3 className="theme-color price">
                            ${price}{" "}
                            {oldPrice && (
                              <del className="text-content">${oldPrice}</del>
                            )}
                            {/* ${productDetail?.Price}{" "}
                            <del className="text-content">
                              ${productDetail?.oldPrice}{" "}
                            </del>{" "} */}
                            {oldPrice && (
                              <span className="offer theme-color">
                                (~
                                {Math.round(
                                  ((oldPrice - price) / oldPrice) * 100
                                )}
                                % off)
                              </span>
                            )}
                            {/* <span className="offer theme-color">(8% off)</span> */}
                          </h3>

                          <div>
                            <Star rating={averageRating} />
                            <span className="ms-1">
                              {" "}
                              {productDetail?.ratings?.length} reviews{" "}
                            </span>
                          </div>
                        </div>
                        {/* <div className="procuct-contain">
                          <p>{productDetail?.Description}</p>
                        </div> */}
                        <div className="border mt-2"></div>
                        <Carousel />
                        <div className="border my-2"></div>
                        <div className="product-packege">
                          <div className="product-title">
                            <h4>
                              Select:{" "}
                              <strong style={{ color: "var(--theme-color)" }}>
                                {variants?.[0]?.attribute_Id?.attributeName_en}
                              </strong>{" "}
                            </h4>
                          </div>
                          <ul className="select-packege">
                            {variants.map((variant, index) => (
                              <li key={index}>
                                <Link
                                  className={`variant-button ${
                                    selectedVariant === index ? "active" : ""
                                  }`}
                                  onClick={() => handleVariantChange(index)}
                                >
                                  {variant.values_Id?.valuesName_en}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          {/* <div>
                            <label htmlFor="variantSelect">RAM</label>
                            <select
                              className="select-packege"
                              value={selectedVariant}
                              onChange={(event) =>
                                handleVariantChange(event.target.value)
                              }
                            >
                              {variants.map((variant, index) => (
                                <option key={index} value={index}>
                                  {variant.values_Id?.valuesName_en}
                                </option>
                              ))}
                            </select>
                          </div> */}
                        </div>
                        {/* <div
                          className="time deal-timer product-deal-timer mx-md-0 mx-auto"
                          id="clockdiv-1"
                          data-hours={1}
                          data-minutes={2}
                          data-seconds={3}
                        >
                          <div className="product-title">
                            <h4>Hurry up! Sales Ends In</h4>
                          </div>
                          <ul>
                            <li>
                              <div className="counter d-block">
                                <div className="days d-block">
                                 
                                </div>
                                <h6>Days</h6>
                              </div>
                            </li>
                            <li>
                              <div className="counter d-block">
                                <div className="hours d-block">
                                  
                                </div>
                                <h6>Hours</h6>
                              </div>
                            </li>
                            <li>
                              <div className="counter d-block">
                                <div className="minutes d-block">
                                 
                                </div>
                                <h6>Min</h6>
                              </div>
                            </li>
                            <li>
                              <div className="counter d-block">
                                <div className="seconds d-block">
                                  
                                </div>
                                <h6>Sec</h6>
                              </div>
                            </li>
                          </ul>
                        </div> */}
                        <CountdownTimer />
                        <div className="note-box product-packege">
                          <div className="cart_qty qty-box product-qty">
                            <div className="input-group">
                              <button
                                type="button"
                                className="qty-left-minus"
                                data-type="minus"
                                data-field=""
                                onClick={() => setCount(count - 1)}
                              >
                                <i className="fa fa-minus" aria-hidden="true" />
                              </button>
                              <input
                                className="form-control input-number qty-input"
                                type="text"
                                name="quantity"
                                value={count}
                              />
                              {/* {count} */}

                              <button
                                type="button"
                                className="qty-right-plus"
                                data-type="plus"
                                data-field=""
                                onClick={() => setCount(count + 1)}
                              >
                                <i className="fa fa-plus" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                          <Link
                            to="/cart"
                            // onClick={() => handleAddToCart(item)}
                            className="btn btn-md bg-dark cart-button text-white w-100"
                            onClick={() => handleAddToCart()}
                          >
                            Add To Cart
                          </Link>
                        </div>
                        <div className="buy-box">
                          <Link to="/wishlist">
                            <i data-feather="heart" />
                            <span>Add To Wishlist</span>
                          </Link>
                          <Link to="/compare">
                            <i data-feather="shuffle" />
                            <span>Add To Compare</span>
                          </Link>
                        </div>
                        {/* <div className="pickup-box">
                          <div className="product-title">
                            <h4>Store Information</h4>
                          </div>
                          <div className="pickup-detail">
                            <h4 className="text-content">
                              Lollipop cake chocolate chocolate cake dessert
                              jujubes. Shortbread sugar plum dessert powder
                              cookie sweet brownie.
                            </h4>
                          </div>
                          <div className="product-info">
                            <ul className="product-info-list product-info-list-2">
                              <li>
                                Type : <Link to="#">Black Forest</Link>
                              </li>
                              <li>
                                SKU : <Link to="#"> {productDetail?.SKU} </Link>
                              </li>
                              <li>
                                MFG :{" "}
                                <Link to="#">
                                  {" "}
                                  {productDetail?.publishDate?.slice(
                                    0,
                                    10
                                  )}{" "}
                                </Link>
                              </li>
                              <li>
                                Stock :{" "}
                                <Link to="#">
                                  {" "}
                                  {productDetail?.stockQuantity}{" "}
                                </Link>
                              </li>
                              <li>
                                Tags :{" "}
                                <Link to="#"> {productDetail?.Tags} </Link>{" "}
                              </li>
                            </ul>
                          </div>
                        </div> */}

                        {/* Other product details */}

                        <div className="pickup-box">
                          {area ? (
                            <div className="procuct-contain">
                              <div className="product-title">
                                <h4>Description</h4>
                              </div>
                              <p>
                                {productDetail?.Description?.slice(0, 140)}
                                <strong>...</strong>
                              </p>
                              <Link
                                to=""
                                className="blog-button"
                                onClick={handleExpand}
                              >
                                Read More
                                <i className="fa-solid fa-right-long ms-2" />
                              </Link>
                            </div>
                          ) : (
                            <div className="procuct-contain">
                              <div className="product-title">
                                <h4>Description</h4>
                              </div>
                              <p>{productDetail?.Description}</p>
                              <Link
                                to=""
                                className="blog-button"
                                onClick={handleCompress}
                              >
                                Hide More
                                <i className="fa-solid fa-right-long ms-2" />
                              </Link>
                            </div>
                          )}

                          {/* <div className="product-title">
                            <h4>Store Information</h4>
                          </div>
                          <div className="pickup-detail">
                            <h4 className="text-content">
                              {productDetail?.Description}
                            </h4>
                          </div> */}
                          <div className="product-info">
                            <ul className="product-info-list product-info-list-2">
                              <li>
                                Type :{" "}
                                <Link to="#">
                                  {/* {
                                    selectedVariantData?.values_Id
                                      ?.valuesName_en
                                  } */}
                                  {productDetail.productType}
                                </Link>
                              </li>
                              <li>
                                SKU :{" "}
                                <Link to="#">{selectedVariantData?.SKU}</Link>
                              </li>
                              <li>
                                MFG :{" "}
                                <Link to="#">
                                  {" "}
                                  {productDetail?.publishDate?.slice(
                                    0,
                                    10
                                  )}{" "}
                                </Link>
                              </li>
                              <li>
                                Stock :{" "}
                                <Link to="#">
                                  {" "}
                                  {selectedVariantData?.stockQuantity}{" "}
                                </Link>
                              </li>
                              {/* <li>
                                Tags : <Link to="#">{productDetail?.Tags}</Link>{" "}
                              </li> */}
                            </ul>
                          </div>
                        </div>

                        <div className="paymnet-option">
                          <div className="product-title">
                            <h4>Guaranteed Safe Checkout</h4>
                          </div>
                          <ul>
                            <li>
                              <Link to="#">
                                <img
                                  src="../assets/images/product/payment/1.svg"
                                  className=" lazyload"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <img
                                  src="../assets/images/product/payment/2.svg"
                                  className=" lazyload"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <img
                                  src="../assets/images/product/payment/3.svg"
                                  className=" lazyload"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <img
                                  src="../assets/images/product/payment/4.svg"
                                  className=" lazyload"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <img
                                  src="../assets/images/product/payment/5.svg"
                                  className=" lazyload"
                                  alt=""
                                />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="product-section-box">
                        <ul
                          className="nav nav-tabs custom-nav"
                          id="myTab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link "
                              id="description-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#description"
                              type="button"
                              role="tab"
                              aria-controls="description"
                              aria-selected="false"
                            >
                              Description
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="info-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#info"
                              type="button"
                              role="tab"
                              aria-controls="info"
                              aria-selected="false"
                            >
                              Additional info
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="care-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#care"
                              type="button"
                              role="tab"
                              aria-controls="care"
                              aria-selected="false"
                            >
                              Care Instuctions
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="review-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#review"
                              type="button"
                              role="tab"
                              aria-controls="review"
                              aria-selected="true"
                            >
                              Review
                            </button>
                          </li>
                        </ul>
                        <div
                          className="tab-content custom-tab"
                          id="myTabContent"
                        >
                          <div
                            className="tab-pane fade "
                            id="description"
                            role="tabpanel"
                            aria-labelledby="description-tab"
                          >
                            <div className="product-description">
                              <div className="nav-desh">
                                <p>{productDetail?.Description}</p>
                              </div>
                              <div className="nav-desh">
                                <div className="desh-title">
                                  <h5>Organic:</h5>
                                </div>
                                <p>
                                  vitae et leo duis ut diam quam nulla porttitor
                                  massa id neque aliquam vestibulum morbi
                                  blandit cursus risus at ultrices mi tempus
                                  imperdiet nulla malesuada pellentesque elit
                                  eget gravida cum sociis natoque penatibus et
                                  magnis dis parturient montes nascetur
                                  ridiculus mus mauris vitae ultricies leo
                                  integer malesuada nunc vel risus commodo
                                  viverra maecenas accumsan lacus vel facilisis
                                  volutpat est velit egestas dui id ornare arcu
                                  odio ut sem nulla pharetra diam sit amet nisl
                                  suscipit adipiscing bibendum est ultricies
                                  integer quis auctor elit sed vulputate mi sit
                                  amet mauris commodo quis imperdiet massa
                                  tincidunt nunc pulvinar sapien et ligula
                                  ullamcorper malesuada proin libero nunc
                                  consequat interdum varius sit amet mattis
                                  vulputate enim nulla aliquet porttitor lacus
                                  luctus accumsan.
                                </p>
                              </div>
                              <div
                                className="banner-contain nav-desh"
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
                                    <h2>VEGETABLE</h2>
                                    <p className="mx-auto mt-1">
                                      Save up to 5% OFF
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="nav-desh">
                                <div className="desh-title">
                                  <h5>From The Manufacturer:</h5>
                                </div>
                                <p>
                                  Jelly beans shortbread chupa chups carrot cake
                                  jelly-o halvah apple pie pudding gingerbread.
                                  Apple pie halvah cake tiramisu shortbread
                                  cotton candy croissant chocolate cake. Tart
                                  cupcake caramels gummi bears macaroon
                                  gingerbread fruitcake marzipan wafer. Marzipan
                                  dessert cupcake ice cream tootsie roll.
                                  Brownie chocolate cake pudding cake powder
                                  candy ice cream ice cream cake. Jujubes
                                  soufflé chupa chups cake candy halvah donut.
                                  Tart tart icing lemon drops fruitcake apple
                                  pie.
                                </p>
                                <p>
                                  Dessert liquorice tart soufflé chocolate bar
                                  apple pie pastry danish soufflé. Gummi bears
                                  halvah gingerbread jelly icing. Chocolate cake
                                  chocolate bar pudding chupa chups bear claw
                                  pie dragée donut halvah. Gummi bears cookie
                                  ice cream jelly-o jujubes sweet croissant.
                                  Marzipan cotton candy gummi bears lemon drops
                                  lollipop lollipop chocolate. Ice cream cookie
                                  dragée cake sweet roll sweet roll.Lemon drops
                                  cookie muffin carrot cake chocolate marzipan
                                  gingerbread topping chocolate bar. Soufflé
                                  tiramisu pastry sweet dessert.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="info"
                            role="tabpanel"
                            aria-labelledby="info-tab"
                          >
                            <div className="table-responsive">
                              <table className="table info-table">
                                <tbody>
                                  <tr>
                                    <td>Specialty</td>
                                    <td>Vegetarian</td>
                                  </tr>
                                  <tr>
                                    <td>Ingredient Type</td>
                                    <td>Vegetarian</td>
                                  </tr>
                                  <tr>
                                    <td>Brand</td>
                                    <td>Lavian Exotique</td>
                                  </tr>
                                  <tr>
                                    <td>Form</td>
                                    <td>Bar Brownie</td>
                                  </tr>
                                  <tr>
                                    <td>Package Information</td>
                                    <td>Box</td>
                                  </tr>
                                  <tr>
                                    <td>Manufacturer</td>
                                    <td>Prayagh Nutri Product Pvt Ltd</td>
                                  </tr>
                                  <tr>
                                    <td>Item part number</td>
                                    <td>
                                      LE 014 - 20pcs Crème Bakes (Pack of 2)
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Net Quantity</td>
                                    <td>40.00 count</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="care"
                            role="tabpanel"
                            aria-labelledby="care-tab"
                          >
                            <div className="information-box">
                              {productDetail?.careInstuctions}
                              <ul>
                                <li>
                                  Store cream cakes in a refrigerator. Fondant
                                  cakes should be stored in an air conditioned
                                  environment.
                                </li>
                                <li>
                                  Slice and serve the cake at room temperature
                                  and make sure it is not exposed to heat.
                                </li>
                                <li>
                                  Use a serrated knife to cut a fondant cake.
                                </li>
                                <li>
                                  Sculptural elements and figurines may contain
                                  wire supports or toothpicks or wooden skewers
                                  for support.
                                </li>
                                <li>
                                  Please check the placement of these items
                                  before serving to small children.
                                </li>
                                <li>
                                  The cake should be consumed within 24 hours.
                                </li>
                                <li>Enjoy your cake!</li>
                              </ul>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade show active"
                            id="review"
                            role="tabpanel"
                            aria-labelledby="review-tab"
                          >
                            <div className="review-box">
                              <div className="row g-4">
                                <div className="col-xl-6">
                                  <div className="review-title">
                                    <h4 className="fw-500">Customer reviews</h4>
                                  </div>
                                  <div className="d-flex">
                                    <div className="product-rating">
                                      <ul className="rating">
                                        <Star rating={averageRating} />
                                      </ul>
                                    </div>
                                    <h6 className="ms-3">
                                      {averageRating?.toFixed(2)} Out Of 5
                                    </h6>
                                  </div>

                                  <div className="rating-box">
                                    <ul>
                                      <li>
                                        <div className="rating-list">
                                          <h5>5 Star</h5>

                                          {/* <div
                                            className="progress"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={100}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                          >
                                            <div
                                              className="progress-bar"
                                              style={{ width: "100%" }}
                                            />
                                          </div> */}
                                          {/* <div className="progress">
                                            <div
                                              className="progress-bar"
                                              role="progressbar"
                                              style={{ width: {`${fiveStar}%`} }}
                                              aria-valuenow={100}
                                              aria-valuemin={0}
                                              aria-valuemax={100}
                                            >
                                              100%
                                            </div>
                                          </div> */}
                                          <div className="progress">
                                            <div
                                              className="progress-bar"
                                              role="progressbar"
                                              style={{
                                                width: `${fiveStar.toFixed(
                                                  2
                                                )}%`,
                                              }}
                                              aria-valuenow={fiveStar}
                                              aria-valuemin={0}
                                              aria-valuemax={100}
                                            >
                                              {`${fiveStar.toFixed(2)}%`}
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="rating-list">
                                          <h5>4 Star</h5>
                                          <div className="progress">
                                            <div
                                              className="progress-bar"
                                              role="progressbar"
                                              style={{
                                                width: `${fourStar.toFixed(
                                                  2
                                                )}%`,
                                              }}
                                              aria-valuenow={fourStar}
                                              aria-valuemin={0}
                                              aria-valuemax={100}
                                            >
                                              {`${fourStar.toFixed(2)}%`}
                                            </div>
                                          </div>
                                          {/* <div
                                            className="progress"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={75}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                          >
                                            <div
                                              className="progress-bar"
                                              style={{ width: "75%" }}
                                            />
                                          </div> */}
                                        </div>
                                      </li>
                                      <li>
                                        <div className="rating-list">
                                          <h5>3 Star</h5>
                                          {/* <div className="progress">
                                            <div
                                              className="progress-bar"
                                              role="progressbar"
                                              style={{ width: `${threeStar?.slice(0,5)}%` }}
                                              aria-valuenow={100}
                                              aria-valuemin={0}
                                              aria-valuemax={100}
                                            >
                                              {`${threeStar}%`}
                                            </div>
                                          </div> */}
                                          <div className="progress">
                                            <div
                                              className="progress-bar"
                                              role="progressbar"
                                              style={{
                                                width: `${threeStar.toFixed(
                                                  2
                                                )}%`,
                                              }}
                                              aria-valuenow={threeStar}
                                              aria-valuemin={0}
                                              aria-valuemax={100}
                                            >
                                              {`${threeStar.toFixed(2)}%`}
                                            </div>
                                          </div>

                                          {/* <div
                                            className="progress"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={50}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                          >
                                            <div
                                              className="progress-bar"
                                              style={{ width: "50%" }}
                                            />
                                          </div> */}
                                        </div>
                                      </li>
                                      <li>
                                        <div className="rating-list">
                                          <h5>2 Star</h5>
                                          <div className="progress">
                                            <div
                                              className="progress-bar"
                                              role="progressbar"
                                              style={{
                                                width: `${twoStar.toFixed(2)}%`,
                                              }}
                                              aria-valuenow={100}
                                              aria-valuemin={0}
                                              aria-valuemax={100}
                                            >
                                              {`${twoStar.toFixed(2)}%`}
                                            </div>
                                          </div>
                                          {/* <div
                                            className="progress"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={25}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                          >
                                            <div
                                              className="progress-bar"
                                              style={{ width: "25%" }}
                                            />
                                          </div> */}
                                        </div>
                                      </li>
                                      <li>
                                        <div className="rating-list">
                                          <h5>1 Star</h5>
                                          <div className="progress">
                                            <div
                                              className="progress-bar"
                                              role="progressbar"
                                              style={{
                                                width: `${oneStar.toFixed(2)}%`,
                                              }}
                                              aria-valuenow={100}
                                              aria-valuemin={0}
                                              aria-valuemax={100}
                                            >
                                              {`${oneStar.toFixed(2)}%`}
                                            </div>
                                            {/* <div
                                              className="progress"
                                              role="progressbar"
                                              aria-label="Basic example"
                                              aria-valuenow={0}
                                              aria-valuemin={0}
                                              aria-valuemax={100}
                                            >
                                              <div
                                                className="progress-bar"
                                                style={{ width: "0%" }}
                                              />
                                            </div> */}
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <form
                                  className="col-xl-6"
                                  onSubmit={handleCreateReview}
                                >
                                  <div className="review-title">
                                    <h4 className="fw-500">Add a review</h4>
                                  </div>
                                  <div className="m-3">
                                    <GetStar />
                                  </div>

                                  <div className="row g-4">
                                    <div className="col-md-6">
                                      <div className="form-floating theme-form-floating">
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="name"
                                          placeholder="Name"
                                          required
                                          onChange={(e) =>
                                            setName(e.target.value)
                                          }
                                        />
                                        <label htmlFor="name">
                                          Your Name
                                          <span className="required-field text-danger">
                                            *
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-floating theme-form-floating">
                                        <input
                                          type="email"
                                          className="form-control"
                                          id="email"
                                          placeholder="Email Address"
                                          required
                                          onChange={(e) =>
                                            setEmail(e.target.value)
                                          }
                                        />
                                        <label htmlFor="email">
                                          Email Address
                                          <span className="required-field text-danger">
                                            *
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-floating theme-form-floating">
                                        <input
                                          type="url"
                                          className="form-control"
                                          id="website"
                                          placeholder="Website"
                                          // required
                                          onChange={(e) =>
                                            setWebsite(e.target.value)
                                          }
                                        />
                                        <label htmlFor="website">Website</label>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-floating theme-form-floating">
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="review1"
                                          placeholder="Give your review a title"
                                          required
                                          onChange={(e) =>
                                            setTitle(e.target.value)
                                          }
                                        />
                                        <label htmlFor="review1">
                                          Review Title
                                          <span className="required-field text-danger">
                                            *
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-12">
                                      <div className="form-floating theme-form-floating">
                                        <textarea
                                          className="form-control"
                                          placeholder="Leave a comment here"
                                          name="comment"
                                          id="comment"
                                          style={{ height: 150 }}
                                          defaultValue={""}
                                          onChange={(e) =>
                                            setComment(e.target.value)
                                          }
                                        />
                                        <label htmlFor="floatingTextarea2">
                                          Write Your Comment
                                          <span className="required-field text-danger">
                                            *
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <button
                                      className="btn btn-animation btn-md fw-bold ms-auto"
                                      type="submit"
                                      // onClick={handleCreateReview}
                                    >
                                      Send Reviews
                                    </button>
                                  </div>
                                </form>
                                <div className="col-12">
                                  <div className="review-title">
                                    <h4 className="fw-500">
                                      Customer questions &amp; answers
                                    </h4>
                                  </div>
                                  <div className="review-people">
                                    <ul className="review-list">
                                      <li>
                                        <div className="people-box">
                                          <div>
                                            <div className="people-image">
                                              <img
                                                src="../assets/images/review/1.jpg"
                                                className="img-fluid  lazyload"
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                          <div className="people-comment">
                                            <Link className="name" to="#">
                                              Tracey
                                            </Link>
                                            <div className="date-time">
                                              <h6 className="text-content">
                                                14 Jan, 2022 at 12.58 AM
                                              </h6>
                                              <div className="product-rating">
                                                <ul className="rating">
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i data-feather="star" />
                                                  </li>
                                                  <li>
                                                    <i data-feather="star" />
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="reply">
                                              <p>
                                                Icing cookie carrot cake
                                                chocolate cake sugar plum
                                                jelly-o danish. Dragée dragée
                                                shortbread tootsie roll
                                                croissant muffin cake I love
                                                gummi bears. Candy canes ice
                                                cream caramels tiramisu
                                                marshmallow cake shortbread
                                                candy canes cookie.
                                                <Link to="#">Reply</Link>
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="people-box">
                                          <div>
                                            <div className="people-image">
                                              <img
                                                src="../assets/images/review/2.jpg"
                                                className="img-fluid  lazyload"
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                          <div className="people-comment">
                                            <Link className="name" to="#">
                                              Olivia
                                            </Link>
                                            <div className="date-time">
                                              <h6 className="text-content">
                                                01 May, 2022 at 08.31 AM
                                              </h6>
                                              <div className="product-rating">
                                                <ul className="rating">
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i data-feather="star" />
                                                  </li>
                                                  <li>
                                                    <i data-feather="star" />
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="reply">
                                              <p>
                                                Tootsie roll cake danish halvah
                                                powder Tootsie roll candy
                                                marshmallow cookie brownie apple
                                                pie pudding brownie chocolate
                                                bar. Jujubes gummi bears I love
                                                powder danish oat cake tart
                                                croissant.
                                                <Link to="#">Reply</Link>
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="people-box">
                                          <div>
                                            <div className="people-image">
                                              <img
                                                src="../assets/images/review/3.jpg"
                                                className="img-fluid  lazyload"
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                          <div className="people-comment">
                                            <Link className="name" to="#">
                                              Gabrielle
                                            </Link>
                                            <div className="date-time">
                                              <h6 className="text-content">
                                                21 May, 2022 at 05.52 PM
                                              </h6>
                                              <div className="product-rating">
                                                <ul className="rating">
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i data-feather="star" />
                                                  </li>
                                                  <li>
                                                    <i data-feather="star" />
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="reply">
                                              <p>
                                                Biscuit chupa chups gummies
                                                powder I love sweet pudding
                                                jelly beans. Lemon drops
                                                marzipan apple pie gingerbread
                                                macaroon croissant cotton candy
                                                pastry wafer. Carrot cake halvah
                                                I love tart caramels pudding
                                                icing chocolate gummi bears.
                                                Gummi bears danish cotton candy
                                                muffin marzipan caramels awesome
                                                feel. <Link to="#">Reply</Link>
                                              </p>
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-5 d-none d-lg-block wow fadeInUp">
                  <div
                    className="right-sidebar-box"
                    style={{
                      border: "2px solid #e8ebe9",
                      borderRadius: "5px",
                      padding: "25px",
                    }}
                  >
                    <div className="verndor-contain">
                      <div className="vendor-name">
                        {/* <h5 className="fw-500 fs-1 mb-3">
                          <strong>${price} </strong>{" "}
                        </h5> */}
                        <h5 className="fw-500 fs-1 mb-3">
                          <strong>
                            <span
                              style={{
                                fontSize: "0.6em",
                                verticalAlign: "top",
                              }}
                            >
                              $
                            </span>
                            {price}{" "}
                          </strong>
                        </h5>

                        <p className="vendor-detail">
                          <span>
                            <Link>FREE delivery</Link>{" "}
                          </span>{" "}
                          <span>
                            <strong>Monday , 18 September</strong>{" "}
                          </span>
                          . Order within 3 hrs. <Link>Details</Link>
                        </p>
                        <div className="" style={{ fontSize: "20px" }}>
                          <strong className="text-color-primary">
                            {quantity > 0 ? (
                              quantity <= 5 ? (
                                <span style={{ color: "rgb(199, 0, 85)" }}>
                                  Only few left
                                </span>
                              ) : quantity <= 10 ? (
                                <span style={{ color: "rgb(199, 0, 85)" }}>
                                  Only {quantity} left
                                </span>
                              ) : (
                                <span style={{ color: "green" }}>In Stock</span>
                              )
                            ) : (
                              <span style={{ color: "red" }}>Out Of Stock</span>
                            )}
                          </strong>{" "}
                        </div>
                        <div className="vendor-list">
                          <ul>
                            <li>
                              <div className="address-contact mb-3">
                                {/* <i data-feather="map-pin" /> */}
                                <Link>
                                  <FontAwesomeIcon
                                    icon={faLocationDot}
                                    className="me-2"
                                  />
                                  Select delivery location
                                  {/* <span className="text-content ms-2">
                                    Select delivery location
                                  </span> */}
                                </Link>
                                {/* <h5>
                                    Address:{" "}
                                    <span className="text-content">
                                      <Link>Select delivery location</Link>
                                    </span>
                                  </h5> */}
                              </div>
                            </li>
                            <li>
                              <div className="address-contact">
                                <i data-feather="headphones" />
                                <h5>
                                  Contact Seller:{" "}
                                  <span className="text-content">
                                    (+1)-123-456-789
                                  </span>
                                </h5>
                                <h5 className="mt-2">
                                  Sold by <Link>KRAASA</Link> and{" "}
                                  <Link>Fulfilled by TechGropse</Link>
                                </h5>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="pt-25">
                      <div className="category-menu">
                        <h3>Trending Products</h3>
                        <ul className="product-list product-right-sidebar border-0 p-0">
                          {trendingList.map((item, index) => {
                            return (
                              <li key={index}>
                                <div className="offer-product">
                                  <Link to="/product" className="offer-image">
                                    <img
                                      src={item?.addVarient[0]?.product_Pic[0]}
                                      className="img-fluid  lazyload"
                                      alt=""
                                    />
                                  </Link>
                                  <div className="offer-detail">
                                    <div>
                                      <Link to="/product">
                                        <h6 className="name">
                                          {item?.productName_en}
                                        </h6>
                                      </Link>
                                      <span>
                                        <strong>
                                          {" "}
                                          {
                                            item?.addVarient[0]?.values_Id
                                              ?.valuesName_en
                                          }
                                        </strong>{" "}
                                      </span>
                                      <h6 className="price theme-color">
                                        $
                                        {item?.addVarient[0]?.dollarPrice?.toFixed(
                                          2
                                        )}{" "}
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>

                    <div className="ratio_156 pt-25">
                      <div className="home-contain ">
                        <img
                          src="../assets/images/vegetable/banner/8.jpg"
                          className="bg-img w-100  lazyload"
                          alt=""
                        />
                        <div className="home-detail p-top-left home-p-medium">
                          <div>
                            <h6 className="text-yellow home-banner">Seafood</h6>
                            <h3 className="text-uppercase fw-normal">
                              <span className="theme-color fw-bold">
                                Freshes
                              </span>{" "}
                              Products
                            </h3>
                            <h3 className="fw-light">every hour</h3>
                            <button
                              //  onclick="location.href = 'shop';"
                              onClick={() => {
                                window.location.href = "/shop";
                              }}
                              className="btn btn-animation btn-md fw-bold mend-auto"
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
              </div>
            </div>
          </section>
          {/* Product Left Sidebar End */}
          {/* Releted Product Section Start */}
          <section className="product-list-section section-b-space">
            <div className="container-fluid-lg">
              <div className="title">
                <h2>Related Products</h2>
                <span className="title-leaf">
                  <svg className="icon-width">
                    <use xlinkHref="../assets/svg/leaf.svg#leaf" />
                  </svg>
                </span>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="slider-6_1 product-wrapper">
                    <Slider {...settings}>
                      {sliders2()}
                      {/* {relatedProductItems?.map((item, index) => {
                        return (
                          <div key={index}>
                            <div className="product-box-3 wow fadeInUp">
                              <div className="product-header">
                                <div className="product-image">
                                  <Link to="/product-left-2">
                                    <img
                                      src={item?.product_Pic?.map(
                                        (index) => index
                                      )}
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
                                      >
                                        <i data-feather="eye" />
                                      </Link>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Compare"
                                    >
                                      <Link to="/compare">
                                        <i data-feather="refresh-cw" />
                                      </Link>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Wishlist"
                                    >
                                      <Link
                                        to="/wishlist"
                                        className="notifi-wishlist"
                                      >
                                        <i data-feather="heart" />
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-footer">
                                <div className="product-detail">
                                  <span className="span-name">
                                    {" "}
                                    {item?.productName}{" "}
                                  </span>
                                  <Link to="/product">
                                    <h5 className="name">
                                      Chocolate Chip Cookies 250 g
                                    </h5>
                                  </Link>
                                  <div className="product-rating mt-2">
                                    <ul className="rating">
                                      <Star />
                                    </ul>
                                    <span>(5.0)</span>
                                  </div>
                                  <h6 className="unit">500 G</h6>
                                  <h5 className="price">
                                    <span className="theme-color">
                                      {" "}
                                      ${item?.Price}{" "}
                                    </span>{" "}
                                    <del> ${item?.oldPrice} </del>
                                  </h5>
                                  <div className="add-to-cart-box bg-white">
                                    <button className="btn btn-add-cart addcart-button">
                                      Add
                                      <span className="add-icon bg-light-gray">
                                        <i className="fa-solid fa-plus" />
                                      </span>
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
                      })} */}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      {/* Releted Product Section End */}
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
                      src="../assets/images/product/category/1.jpg"
                      className="img-fluid  lazyload"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-sidebar-modal">
                    <h4 className="title-name">
                      Peanut Butter Bite Premium Butter Cookies 600 g
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
                        defaultValue=""
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
      {/* Add to cart Modal Start */}
      <div className="add-cart-box">
        <div className="add-iamge">
          <img
            src="../assets/images/cake/pro/1.jpg"
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="add-contain">
          <h6>Added to Cart</h6>
        </div>
      </div>
      {/* Add to cart Modal End */}
      {/* Tap to top start */}
      {/* <div className="theme-option theme-option-2">
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
            </div> */}
      <div className="theme-option theme-option-2">
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
          <a id="back-to-top" href="#">
            <i className="fas fa-chevron-up" />
          </a>
        </div>
      </div>

      {/* Tap to top end */}
      {/* Sticky Cart Box Start */}
      {/* <div className="sticky-bottom-cart">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="cart-content">
                <div className="product-image">
                  <img
                    src="../assets/images/product/category/1.jpg"
                    className="img-fluid  lazyload"
                    alt=""
                  />
                  <div className="content">
                    <h5>Creamy Chocolate Cake</h5>
                    <h6>
                      $32.96<del className="text-danger">$96.00</del>
                      <span>55% off</span>
                    </h6>
                  </div>
                </div>
                <div className="selection-section">
                  <div className="form-group mb-0">
                    <select
                      id="input-state"
                      className="form-control form-select"
                      defaultValue=""
                    >
                      <option disabled>Choose Weight...</option>
                      <option>1/2 KG</option>
                      <option>1 KG</option>
                      <option>1.5 KG</option>
                    </select>
                  </div>
                  <div className="cart_qty qty-box product-qty m-0">
                    <div className="input-group h-100">
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
                <div className="add-btn">
                  <Link
                    className="btn theme-bg-color text-white wishlist-btn"
                    to="/wishlist"
                  >
                    <i className="fa fa-bookmark" /> Wishlist
                  </Link>
                  <Link className="btn theme-bg-color text-white" to="/cart">
                    <i className="fas fa-shopping-cart" /> Add To Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Sticky Cart Box End */}
      {/* Bg overlay Start */}
      <div className="bg-overlay" />
      <div
        className="modal fade report_modal"
        id="report_modal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
              <div className="report_modal_inner">
                <h3>Report Product</h3>
                <form className="form_design row px-2 mx-0" action="">
                  <div className="form-group col-12 mb-3">
                    <div className="checkbox_new d-inline-block">
                      <input
                        type="radio"
                        defaultChecked=""
                        id="r1"
                        name="r1"
                        className="d-none"
                        value="Inppropriate"
                        onChange={handleInputChange}
                      />
                      <label htmlFor="r1">Inppropriate</label>
                    </div>
                  </div>
                  <div className="form-group col-12 mb-3">
                    <div className="checkbox_new d-inline-block">
                      <input
                        type="radio"
                        defaultChecked=""
                        id="r2"
                        name="r1"
                        className="d-none"
                        value="spam"
                        onChange={handleInputChange}
                      />
                      <label htmlFor="r2">Spam</label>
                    </div>
                  </div>
                  <div className="form-group col-12 mb-3">
                    <div className="checkbox_new d-inline-block">
                      <input
                        type="radio"
                        defaultChecked=""
                        id="r3"
                        name="r1"
                        className="d-none"
                        value="None of the Above"
                        onChange={handleInputChange}
                      />
                      <label htmlFor="r3">None of the Above</label>
                    </div>
                  </div>
                  <div className="form-group col-12 mb-3">
                    <textarea
                      className="form-control"
                      name="description"
                      id="description"
                      style={{ height: 100 }}
                      // defaultValue={""}
                      value={formData.description}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group col-12 mb-0">
                    <Link
                      className="btn btn-animation btn-sm mx-auto"
                      to="#"
                      onClick={handleSaveReport}
                    >
                      Send
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
