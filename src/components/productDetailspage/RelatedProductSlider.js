import React, { useEffect, useState } from "react";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import {
  useAddCompareMutation,
  useAddToCartMutation,
  useAddToWislistListMutation,
  useGetBannerMutation,
  useGetCartListheaderMutation,
} from "../../services/Post";
import { Link, useNavigate } from "react-router-dom";
import Star from "../Star";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faArrowsRotate,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
function RelatedProductSlider({ id }) {
  const ecommercetoken = useSelector((data) => data?.local?.ecomWebtoken);
  const ecomUserId = useSelector((data) => data?.local?.ecomUserid);
  const [relatedDetails, respons] = useGetBannerMutation();
  const [wishAdd] = useAddToWislistListMutation();
  const [addtocart] = useAddToCartMutation();
  const [cartListQuery] = useGetCartListheaderMutation();
  const [compare] = useAddCompareMutation();

  const [relatedProductItems, setRelatedProductItems] = useState([]);
  const [cartListItems, setCartListItems] = useState([]);
  const [addCompareItems, setAddCompareItems] = useState([]);

  const [count, setCount] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const initialCounts = relatedProductItems?.map(() => 1);
    setCount(initialCounts);
  }, [relatedProductItems]);

  const handleCountChange = (index, newCount) => {
    const newCounts = [...count];
    newCounts[index] = newCount >= 0 ? newCount : 0;
    setCount(newCounts);
  };

  useEffect(() => {
    if (id) {
      handleGetBanners(id);
    }
  }, [id]);

  const handleGetBanners = async (cateid) => {
    window.scrollTo(0, 0);
    const data = {
      category: cateid,

      ecommercetoken: ecommercetoken,
    };

    console.log(data);

    try {
      const res = await relatedDetails(data);

      setRelatedProductItems(res?.data?.results?.products);
    } catch (error) {
      console.log(error);
    }
  };

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

      console.log("respone cart", respone);

      setCartListItems(respone?.data?.results?.cart?.products?.[0]?.products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleWishClick = async (item) => {
    if (!ecommercetoken) {
      Swal.fire({
        title: "Login Required",
        text: "Please login before add to wish list.",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#0da487",
        confirmButtonText: "Login",
        cancelButtonText: "Cancel",
        customClass: {
          confirmButton: "custom-confirm-button-class me-3",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
      return;
    }
    try {
      const res = await wishAdd({
        ecommercetoken,
        ecomUserId: item?._id,
      });
      if (res) {
        navigate("/wishlist");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleViewClick = (item) => {
    setTimeout(() => {
      window?.location?.reload();
    }, 500);
  };
  const handleCompareClick = async (id) => {
    if (!ecommercetoken) {
      Swal.fire({
        title: "Login Required",
        text: "Please login before add to compare list.",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#0da487",
        confirmButtonText: "Login",
        cancelButtonText: "Cancel",
        customClass: {
          confirmButton: "custom-confirm-button-class me-3",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
      return;
    }
    const data = {
      product_Id: id,
      ecommercetoken: ecommercetoken,
    };
    try {
      const res = await compare(data);

      navigate("/compare");
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddToCart = async (e, item, price, index, variantId) => {
    if (!ecommercetoken) {
      Swal.fire({
        title: "Login Required",
        text: "Please login before add to cart.",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#0da487",
        confirmButtonText: "Login",
        cancelButtonText: "Cancel",
        customClass: {
          confirmButton: "custom-confirm-button-class me-3",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
      return;
    }
    console.log("item added id", item?._id);
    e.preventDefault();
    const data = {
      product_Id: item._id,
      quantity: count[index],
      Price: price * count[index],
      varient_Id: variantId,
      user_Id: ecomUserId,
      ecommercetoken: ecommercetoken,
    };
    try {
      const response = await addtocart(data);

      navigate("/cart");
    } catch (error) {
      console.log(error);
    }
  };

  var w = window.innerWidth;
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: w > 500 ? 3 : 1,
    autoplay: true,
    slidesToScroll: 1,
  };

  const sliders2 = () => {
    return relatedProductItems?.map((item, index) => {
      const totalRatings = item?.productDetails?.[0]?.ratings?.reduce(
        (sum, rating) => sum + rating?.star,
        0
      );
      const averageRating =
        totalRatings / item?.productDetails?.[0]?.ratings?.length;
      const isItemInCart = cartListItems?.some(
        (cartItem) => cartItem?.productId?._id === item?._id
      );

      const imageUrl = item?.varient?.product_Pic[0];

      return (
        <div key={index}>
          <div
            className="product-box-3 h-100 wow fadeInUp my-2"
            style={{ width: "270px", height: "270px" }}
          >
            <div className="product-header">
              <div className="product-image">
                <Link to={`/product-details-page/${item?._id}`}>
                  <img
                    src={imageUrl}
                    className="img-fluid  lazyload mb-2"
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
                      // to="#"
                      // data-bs-toggle="modal"
                      // data-bs-target="#view"
                      to={`/product-details-page/${item?._id}`}
                      onClick={() => {
                        handleViewClick(item);
                      }}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </Link>
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Compare"
                    onClick={() => handleCompareClick(item?._id)}
                  >
                    <Link to="/compare">
                      <FontAwesomeIcon icon={faArrowsRotate} />
                    </Link>
                  </li>
                  <li data-bs-toggle="tooltip" data-bs-placement="top">
                    {item?.like === false ? (
                      <Link
                        className="btn p-0 position-relative header-wishlist me-2"
                        to="#"
                        title3="Wishlist"
                        onClick={() => handleWishClick(item)}
                      >
                        <FontAwesomeIcon
                          icon={faHeart}
                          style={{
                            fontSize: "20px",
                            color: "black",
                          }}
                          data-tip="Add to Wishlist"
                          data-for="wishlist-tooltip"
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "red";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "black";
                          }}
                        />
                      </Link>
                    ) : (
                      <Link
                        className="btn p-0 position-relative header-wishlist me-2"
                        to="#"
                        title5="Wishlist"
                        disabled
                        style={{ cursor: "not-allowed" }}
                      >
                        <FontAwesomeIcon
                          icon={faHeart}
                          style={{
                            fontSize: "20px",
                            color: "red",
                          }}
                          data-tip="Add to Wishlist"
                          data-for="wishlist-tooltip"
                        />
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-footer">
              <div className="product-detail">
                <Link to="/product">
                  <h5 className="name">
                    {item?.productName_en?.slice(0, 20) +
                      (item?.productName_en.length > 20 ? "..." : "")}
                  </h5>
                </Link>
                {/* <p className="text-content mt-1 mb-2 product-content">
                  Cheesy feet cheesy grin brie. Mascarpone cheese and wine hard
                  cheese the big cheese everyone loves smelly cheese macaroni
                  cheese croque monsieur.
                </p> */}
                <div className="product-rating mt-2">
                  <Star
                    rating={averageRating || 0}
                    totalRating={item.totalRating}
                  />
                  <span> {item?.ratings?.length} reviews </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h6
                      className="unit"
                      style={{ margin: "0px", fontSize: "15px" }}
                    >
                      {item?.varient?.stockQuantity > 0 ? (
                        item?.varient?.stockQuantity <= 5 ? (
                          <span style={{ color: "rgb(199, 0, 85)" }}>
                            Only few left
                          </span>
                        ) : item?.varient?.stockQuantity <= 10 ? (
                          <span style={{ color: "rgb(199, 0, 85)" }}>
                            Only {item?.varient?.stockQuantity} left
                          </span>
                        ) : (
                          <span style={{ color: "green" }}>In Stock</span>
                        )
                      ) : (
                        <span style={{ color: "red" }}>Out Of Stock</span>
                      )}
                    </h6>
                  </div>
                  {item?.varient?.stockQuantity <= 0 ? (
                    <div className=" mt-3">
                      <div className="cart_qty qty-box product-qty">
                        <div
                          className="input-group"
                          style={{ alignItems: "center" }}
                        >
                          <button
                            type="button"
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                            disabled
                            style={{ cursor: "not-allowed" }}
                          >
                            <i className="fa fa-minus" aria-hidden="true" />
                          </button>
                          <div className="m-2">
                            {" "}
                            {count[index] ? count[index] : "0"}
                          </div>
                          <button
                            type="button"
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                            disabled
                            style={{ cursor: "not-allowed" }}
                          >
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className=" mt-3">
                      <div className="cart_qty qty-box product-qty">
                        <div
                          className="input-group"
                          style={{ alignItems: "center" }}
                        >
                          <button
                            type="button"
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                            onClick={() =>
                              handleCountChange(index, count[index] - 1)
                            }
                          >
                            <i className="fa fa-minus" aria-hidden="true" />
                          </button>
                          <div className="m-2">
                            {" "}
                            {count[index] ? count[index] : "1"}
                          </div>
                          <button
                            type="button"
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                            onClick={() =>
                              handleCountChange(index, count[index] + 1)
                            }
                            disabled={count[index] === item?.stockQuantity}
                          >
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <h5 className="price">
                  <span className="theme-color">
                    ${item?.varient?.Price * count[index]}
                  </span>{" "}
                  <del>${item?.varient?.oldPrice} </del>
                </h5>

                {isItemInCart ? (
                  <div className="add-to-cart-box bg-white mt-2">
                    <button className="btn btn-add-cart addcart-button">
                      <Link
                        to="/cart"
                        // onClick={() =>
                        //   handleAddToCart(item, item?.addVarient[0]?.Price, index)
                        // }
                      >
                        Go To Cart
                      </Link>
                    </button>
                  </div>
                ) : (
                  <div className="add-to-cart-box bg-white mt-2">
                    <button className="btn btn-add-cart addcart-button">
                      <Link
                        to="#"
                        onClick={(e) =>
                          handleAddToCart(
                            e,
                            item,
                            item?.varient?.Price,
                            index,
                            item?.varient?._id
                          )
                        }
                      >
                        Add To Cart
                      </Link>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <section
        className="product-list-section section-b-space"
        style={{ display: relatedProductItems?.length > 2 ? "" : "none" }}
      >
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
                <Slider {...settings}>{sliders2()}</Slider>
                {/* <div>
                  <div className="product-box-3 wow fadeInUp">
                    <div className="product-header">
                      <div className="product-image">
                        <a href="product-left-2.html">
                          <img
                            src="../assets/images/cake/product/11.png"
                            className="img-fluid lazyload"
                            alt=""
                          />
                        </a>
                        <ul className="product-option">
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="View"
                          >
                            <a
                              href="javascript:void(0)"
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                            >
                              <i data-feather="eye" />
                            </a>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Compare"
                          >
                            <a href="compare.html">
                              <i data-feather="refresh-cw" />
                            </a>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Wishlist"
                          >
                            <a href="wishlist.html" className="notifi-wishlist">
                              <i data-feather="heart" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-footer">
                      <div className="product-detail">
                        <span className="span-name">Cake</span>
                        <a href="product.html">
                          <h5 className="name">Chocolate Chip Cookies 250 g</h5>
                        </a>
                        <div className="product-rating mt-2">
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
                              <i data-feather="star" className="fill" />
                            </li>
                          </ul>
                          <span>(5.0)</span>
                        </div>
                        <h6 className="unit">500 G</h6>
                        <h5 className="price">
                          <span className="theme-color">$10.25</span>{" "}
                          <del>$12.57</del>
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
                <div>
                  <div
                    className="product-box-3 wow fadeInUp"
                    data-wow-delay="0.05s"
                  >
                    <div className="product-header">
                      <div className="product-image">
                        <a href="product.html">
                          <img
                            src="../assets/images/cake/product/2.png"
                            className="img-fluid lazyload"
                            alt=""
                          />
                        </a>
                        <ul className="product-option">
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="View"
                          >
                            <a
                              href="javascript:void(0)"
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                            >
                              <i data-feather="eye" />
                            </a>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Compare"
                          >
                            <a href="compare.html">
                              <i data-feather="refresh-cw" />
                            </a>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Wishlist"
                          >
                            <a href="wishlist.html" className="notifi-wishlist">
                              <i data-feather="heart" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-footer">
                      <div className="product-detail">
                        <span className="span-name">Vegetable</span>
                        <a href="product.html">
                          <h5 className="name">
                            Fresh Bread and Pastry Flour 200 g
                          </h5>
                        </a>
                        <div className="product-rating mt-2">
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
                          <span>(4.0)</span>
                        </div>
                        <h6 className="unit">250 ml</h6>
                        <h5 className="price">
                          <span className="theme-color">$08.02</span>{" "}
                          <del>$15.15</del>
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
                <div>
                  <div
                    className="product-box-3 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="product-header">
                      <div className="product-image">
                        <a href="product.html">
                          <img
                            src="../assets/images/cake/product/3.png"
                            className="img-fluid lazyload"
                            alt=""
                          />
                        </a>
                        <ul className="product-option">
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="View"
                          >
                            <a
                              href="javascript:void(0)"
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                            >
                              <i data-feather="eye" />
                            </a>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Compare"
                          >
                            <a href="compare.html">
                              <i data-feather="refresh-cw" />
                            </a>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Wishlist"
                          >
                            <a href="wishlist.html" className="notifi-wishlist">
                              <i data-feather="heart" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-footer">
                      <div className="product-detail">
                        <span className="span-name">Vegetable</span>
                        <a href="product.html">
                          <h5 className="name">
                            Peanut Butter Bite Premium Butter Cookies 600 g
                          </h5>
                        </a>
                        <div className="product-rating mt-2">
                          <ul className="rating">
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                          </ul>
                          <span>(2.4)</span>
                        </div>
                        <h6 className="unit">350 G</h6>
                        <h5 className="price">
                          <span className="theme-color">$04.33</span>{" "}
                          <del>$10.36</del>
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
                <div>
                  <div
                    className="product-box-3 wow fadeInUp"
                    data-wow-delay="0.15s"
                  >
                    <div className="product-header">
                      <div className="product-image">
                        <a href="product.html">
                          <img
                            src="../assets/images/cake/product/4.png"
                            className="img-fluid lazyload"
                            alt=""
                          />
                        </a>
                        <ul className="product-option">
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="View"
                          >
                            <a
                              href="javascript:void(0)"
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                            >
                              <i data-feather="eye" />
                            </a>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Compare"
                          >
                            <a href="compare.html">
                              <i data-feather="refresh-cw" />
                            </a>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Wishlist"
                          >
                            <a href="wishlist.html" className="notifi-wishlist">
                              <i data-feather="heart" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-footer">
                      <div className="product-detail">
                        <span className="span-name">Snacks</span>
                        <a href="product.html">
                          <h5 className="name">
                            SnackAmor Combo Pack of Jowar Stick and Jowar Chips
                          </h5>
                        </a>
                        <div className="product-rating mt-2">
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
                              <i data-feather="star" className="fill" />
                            </li>
                          </ul>
                          <span>(5.0)</span>
                        </div>
                        <h6 className="unit">570 G</h6>
                        <h5 className="price">
                          <span className="theme-color">$12.52</span>{" "}
                          <del>$13.62</del>
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
                <div>
                  <div
                    className="product-box-3 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="product-header">
                      <div className="product-image">
                        <a href="product.html">
                          <img
                            src="../assets/images/cake/product/5.png"
                            className="img-fluid lazyload"
                            alt=""
                          />
                        </a>
                        <ul className="product-option">
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="View"
                          >
                            <a
                              href="javascript:void(0)"
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                            >
                              <i data-feather="eye" />
                            </a>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Compare"
                          >
                            <a href="compare.html">
                              <i data-feather="refresh-cw" />
                            </a>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Wishlist"
                          >
                            <a href="wishlist.html" className="notifi-wishlist">
                              <i data-feather="heart" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-footer">
                      <div className="product-detail">
                        <span className="span-name">Snacks</span>
                        <a href="product.html">
                          <h5 className="name">
                            Yumitos Chilli Sprinkled Potato Chips 100 g
                          </h5>
                        </a>
                        <div className="product-rating mt-2">
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
                              <i data-feather="star" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                          </ul>
                          <span>(3.8)</span>
                        </div>
                        <h6 className="unit">100 G</h6>
                        <h5 className="price">
                          <span className="theme-color">$10.25</span>{" "}
                          <del>$12.36</del>
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
                <div>
                  <div
                    className="product-box-3 wow fadeInUp"
                    data-wow-delay="0.25s"
                  >
                    <div className="product-header">
                      <div className="product-image">
                        <a href="product.html">
                          <img
                            src="../assets/images/cake/product/6.png"
                            className="img-fluid lazyload"
                            alt=""
                          />
                        </a>
                        <ul className="product-option">
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="View"
                          >
                            <a
                              href="javascript:void(0)"
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                            >
                              <i data-feather="eye" />
                            </a>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Compare"
                          >
                            <a href="compare.html">
                              <i data-feather="refresh-cw" />
                            </a>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Wishlist"
                          >
                            <a href="wishlist.html" className="notifi-wishlist">
                              <i data-feather="heart" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-footer">
                      <div className="product-detail">
                        <span className="span-name">Vegetable</span>
                        <a href="product.html">
                          <h5 className="name">
                            Fantasy Crunchy Choco Chip Cookies
                          </h5>
                        </a>
                        <div className="product-rating mt-2">
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
                          <span>(4.0)</span>
                        </div>
                        <h6 className="unit">550 G</h6>
                        <h5 className="price">
                          <span className="theme-color">$14.25</span>{" "}
                          <del>$16.57</del>
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
                <div>
                  <div
                    className="product-box-3 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="product-header">
                      <div className="product-image">
                        <a href="product.html">
                          <img
                            src="../assets/images/cake/product/7.png"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                        <ul className="product-option">
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="View"
                          >
                            <a
                              href="javascript:void(0)"
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                            >
                              <i data-feather="eye" />
                            </a>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Compare"
                          >
                            <a href="compare.html">
                              <i data-feather="refresh-cw" />
                            </a>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Wishlist"
                          >
                            <a href="wishlist.html" className="notifi-wishlist">
                              <i data-feather="heart" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-footer">
                      <div className="product-detail">
                        <span className="span-name">Vegetable</span>
                        <a href="product.html">
                          <h5 className="name">
                            Fresh Bread and Pastry Flour 200 g
                          </h5>
                        </a>
                        <div className="product-rating mt-2">
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
                              <i data-feather="star" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                          </ul>
                          <span>(3.8)</span>
                        </div>
                        <h6 className="unit">1 Kg</h6>
                        <h5 className="price">
                          <span className="theme-color">$12.68</span>{" "}
                          <del>$14.69</del>
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Releted Product Section End */}
    </>
  );
}

export default RelatedProductSlider;
