import React, { useEffect, useState } from "react";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useGetBannerMutation } from "../../services/Post";
import { Link } from "react-router-dom";
import Star from "../Star";
import Slider from "react-slick";
import { useSelector } from "react-redux";

function RelatedProductSlider({ id }) {
  const ecommercetoken = useSelector((data) => data?.local?.ecomWebtoken);
  const ecomUserId = useSelector((data) => data?.local?.ecomUserid);
  const [relatedDetails, respons] = useGetBannerMutation();
  const [relatedProductItems, setRelatedProductItems] = useState([]);

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

  // useEffect(() => {
  //   related();
  // }, [id]);
  // const relatedProductDetail = respons?.data?.results?.productData;

  // const related = () => {
  //   const newAddress = {
  //     id: id,
  //   };
  //   relatedDetails(newAddress);
  // };
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
    return relatedProductItems?.map((item, index) => (
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
  return (
    <>
      <section
        className="product-list-section section-b-space"
        style={{ display: relatedProductItems?.length > 0 ? "" : "none" }}
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
