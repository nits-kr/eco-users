import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faArrowsRotate,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Star from "../Star";

function Foodcupboard() {
  return (
    <>
      <div className="title d-block">
        <h2>Food Cupboard</h2>
        <span className="title-leaf">
          <svg className="icon-width">
            <use xlinkHref="../../assets/svg/leaf.svg#leaf" />
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
                            src="../../assets/images/vegetable/product/3.png"
                            className="img-fluid  lazyloaded"
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
                              <FontAwesomeIcon icon={faEye} />
                            </Link>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Compare"
                          >
                            <Link to="/compare" tabIndex={-1}>
                              <FontAwesomeIcon icon={faArrowsRotate} />
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
                              <FontAwesomeIcon icon={faHeart} />
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
                          <span className="theme-color price">$26.69</span>
                          <del>28.56</del>
                        </h5>
                        <div className="product-rating mt-sm-2 mt-1">
                          <ul className="rating">
                            <Star />
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
                                <i className="fa fa-minus" aria-hidden="true" />
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
                                <i className="fa fa-plus" aria-hidden="true" />
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
                            src="../../assets/images/vegetable/product/4.png"
                            className="img-fluid  lazyloaded"
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
                              <FontAwesomeIcon icon={faEye} />
                            </Link>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Compare"
                          >
                            <Link to="/compare" tabIndex={-1}>
                              <FontAwesomeIcon icon={faArrowsRotate} />
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
                              <FontAwesomeIcon icon={faHeart} />
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
                          <span className="theme-color price">$26.69</span>
                          <del>28.56</del>
                        </h5>
                        <div className="product-rating mt-sm-2 mt-1">
                          <ul className="rating">
                            <Star />
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
                                <i className="fa fa-minus" aria-hidden="true" />
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
                                <i className="fa fa-plus" aria-hidden="true" />
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
                            src="../../assets/images/vegetable/product/5.png"
                            className="img-fluid  lazyloaded"
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
                              <FontAwesomeIcon icon={faEye} />
                            </Link>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Compare"
                          >
                            <Link to="/compare" tabIndex={-1}>
                              <FontAwesomeIcon icon={faArrowsRotate} />
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
                              <FontAwesomeIcon icon={faHeart} />
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
                          <span className="theme-color price">$26.69</span>
                          <del>28.56</del>
                        </h5>
                        <div className="product-rating mt-sm-2 mt-1">
                          <ul className="rating">
                            <Star />
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
                                <i className="fa fa-minus" aria-hidden="true" />
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
                                <i className="fa fa-plus" aria-hidden="true" />
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
                            src="../../assets/images/vegetable/product/4.png"
                            className="img-fluid  lazyloaded"
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
                              <FontAwesomeIcon icon={faEye} />
                            </Link>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Compare"
                          >
                            <Link to="/compare" tabIndex={-1}>
                              <FontAwesomeIcon icon={faArrowsRotate} />
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
                              <FontAwesomeIcon icon={faHeart} />
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
                          <span className="theme-color price">$26.69</span>
                          <del>28.56</del>
                        </h5>
                        <div className="product-rating mt-sm-2 mt-1">
                          <ul className="rating">
                            <Star />
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
                                <i className="fa fa-minus" aria-hidden="true" />
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
                                <i className="fa fa-plus" aria-hidden="true" />
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
                            src="../../assets/images/vegetable/product/1.png"
                            className="img-fluid  lazyloaded"
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
                              <FontAwesomeIcon icon={faEye} />
                            </Link>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Compare"
                          >
                            <Link to="/compare" tabIndex={0}>
                              <FontAwesomeIcon icon={faArrowsRotate} />
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
                              <FontAwesomeIcon icon={faHeart} />
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
                          <span className="theme-color price">$26.69</span>
                          <del>28.56</del>
                        </h5>
                        <div className="product-rating mt-sm-2 mt-1">
                          <ul className="rating">
                            <Star />
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
                                <i className="fa fa-minus" aria-hidden="true" />
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
                                <i className="fa fa-plus" aria-hidden="true" />
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
                            src="../../assets/images/vegetable/product/2.png"
                            className="img-fluid  lazyloaded"
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
                              <FontAwesomeIcon icon={faEye} />
                            </Link>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Compare"
                          >
                            <Link to="/compare" tabIndex={0}>
                              <FontAwesomeIcon icon={faArrowsRotate} />
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
                              <FontAwesomeIcon icon={faHeart} />
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
                          <span className="theme-color price">$26.69</span>
                          <del>28.56</del>
                        </h5>
                        <div className="product-rating mt-sm-2 mt-1">
                          <ul className="rating">
                            <Star />
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
                                <i className="fa fa-minus" aria-hidden="true" />
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
                                <i className="fa fa-plus" aria-hidden="true" />
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
                            src="../../assets/images/vegetable/product/3.png"
                            className="img-fluid  lazyloaded"
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
                              <FontAwesomeIcon icon={faEye} />
                            </Link>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Compare"
                          >
                            <Link to="/compare" tabIndex={0}>
                              <FontAwesomeIcon icon={faArrowsRotate} />
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
                              <FontAwesomeIcon icon={faHeart} />
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
                          <span className="theme-color price">$26.69</span>
                          <del>28.56</del>
                        </h5>
                        <div className="product-rating mt-sm-2 mt-1">
                          <ul className="rating">
                            <Star />
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
                                <i className="fa fa-minus" aria-hidden="true" />
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
                                <i className="fa fa-plus" aria-hidden="true" />
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
                            src="../../assets/images/vegetable/product/4.png"
                            className="img-fluid  lazyloaded"
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
                              <FontAwesomeIcon icon={faEye} />
                            </Link>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Compare"
                          >
                            <Link to="/compare" tabIndex={0}>
                              <FontAwesomeIcon icon={faArrowsRotate} />
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
                              <FontAwesomeIcon icon={faHeart} />
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
                          <span className="theme-color price">$26.69</span>
                          <del>28.56</del>
                        </h5>
                        <div className="product-rating mt-sm-2 mt-1">
                          <ul className="rating">
                            <Star />
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
                                <i className="fa fa-minus" aria-hidden="true" />
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
                                <i className="fa fa-plus" aria-hidden="true" />
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
                            src="../../assets/images/vegetable/product/5.png"
                            className="img-fluid  lazyloaded"
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
                              <FontAwesomeIcon icon={faEye} />
                            </Link>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Compare"
                          >
                            <Link to="/compare" tabIndex={-1}>
                              <FontAwesomeIcon icon={faArrowsRotate} />
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
                              <FontAwesomeIcon icon={faHeart} />
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
                          <span className="theme-color price">$26.69</span>
                          <del>28.56</del>
                        </h5>
                        <div className="product-rating mt-sm-2 mt-1">
                          <ul className="rating">
                            <Star />
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
                                <i className="fa fa-minus" aria-hidden="true" />
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
                                <i className="fa fa-plus" aria-hidden="true" />
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
                            src="../../assets/images/vegetable/product/4.png"
                            className="img-fluid  lazyloaded"
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
                              <FontAwesomeIcon icon={faEye} />
                            </Link>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Compare"
                          >
                            <Link to="/compare" tabIndex={-1}>
                              <FontAwesomeIcon icon={faArrowsRotate} />
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
                              <FontAwesomeIcon icon={faHeart} />
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
                          <span className="theme-color price">$26.69</span>
                          <del>28.56</del>
                        </h5>
                        <div className="product-rating mt-sm-2 mt-1">
                          <ul className="rating">
                            <Star />
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
                                <i className="fa fa-minus" aria-hidden="true" />
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
                                <i className="fa fa-plus" aria-hidden="true" />
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
                            src="../../assets/images/vegetable/product/1.png"
                            className="img-fluid  lazyloaded"
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
                              <FontAwesomeIcon icon={faEye} />
                            </Link>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Compare"
                          >
                            <Link to="/compare" tabIndex={-1}>
                              <FontAwesomeIcon icon={faArrowsRotate} />
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
                              <FontAwesomeIcon icon={faHeart} />
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
                          <span className="theme-color price">$26.69</span>
                          <del>28.56</del>
                        </h5>
                        <div className="product-rating mt-sm-2 mt-1">
                          <ul className="rating">
                            <Star />
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
                                <i className="fa fa-minus" aria-hidden="true" />
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
                                <i className="fa fa-plus" aria-hidden="true" />
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
                            src="../../assets/images/vegetable/product/2.png"
                            className="img-fluid  lazyload"
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
                              <FontAwesomeIcon icon={faEye} />
                            </Link>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Compare"
                          >
                            <Link to="/compare" tabIndex={-1}>
                              <FontAwesomeIcon icon={faArrowsRotate} />
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
                              <FontAwesomeIcon icon={faHeart} />
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
                          <span className="theme-color price">$26.69</span>
                          <del>28.56</del>
                        </h5>
                        <div className="product-rating mt-sm-2 mt-1">
                          <ul className="rating">
                            <Star />
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
                                <i className="fa fa-minus" aria-hidden="true" />
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
                                <i className="fa fa-plus" aria-hidden="true" />
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
                            src="../../assets/images/vegetable/product/3.png"
                            className="img-fluid  lazyload"
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
                              <FontAwesomeIcon icon={faEye} />
                            </Link>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Compare"
                          >
                            <Link to="/compare" tabIndex={-1}>
                              <FontAwesomeIcon icon={faArrowsRotate} />
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
                              <FontAwesomeIcon icon={faHeart} />
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
                          <span className="theme-color price">$26.69</span>
                          <del>28.56</del>
                        </h5>
                        <div className="product-rating mt-sm-2 mt-1">
                          <ul className="rating">
                            <Star />
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
                                <i className="fa fa-minus" aria-hidden="true" />
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
                                <i className="fa fa-plus" aria-hidden="true" />
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
                            src="../../assets/images/vegetable/product/4.png"
                            className="img-fluid  lazyload"
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
                              <FontAwesomeIcon icon={faEye} />
                            </Link>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Compare"
                          >
                            <Link to="/compare" tabIndex={-1}>
                              <FontAwesomeIcon icon={faArrowsRotate} />
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
                              <FontAwesomeIcon icon={faHeart} />
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
                          <span className="theme-color price">$26.69</span>
                          <del>28.56</del>
                        </h5>
                        <div className="product-rating mt-sm-2 mt-1">
                          <ul className="rating">
                            <Star />
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
                                <i className="fa fa-minus" aria-hidden="true" />
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
                                <i className="fa fa-plus" aria-hidden="true" />
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
                            src="../../assets/images/vegetable/product/5.png"
                            className="img-fluid  lazyload"
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
                              <FontAwesomeIcon icon={faEye} />
                            </Link>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Compare"
                          >
                            <Link to="/compare" tabIndex={-1}>
                              <FontAwesomeIcon icon={faArrowsRotate} />
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
                              <FontAwesomeIcon icon={faHeart} />
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
                          <span className="theme-color price">$26.69</span>
                          <del>28.56</del>
                        </h5>
                        <div className="product-rating mt-sm-2 mt-1">
                          <ul className="rating">
                            <Star />
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
                                <i className="fa fa-minus" aria-hidden="true" />
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
                                <i className="fa fa-plus" aria-hidden="true" />
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
                            src="../../assets/images/vegetable/product/4.png"
                            className="img-fluid  lazyload"
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
                              <FontAwesomeIcon icon={faEye} />
                            </Link>
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="Compare"
                          >
                            <Link to="/compare" tabIndex={-1}>
                              <FontAwesomeIcon icon={faArrowsRotate} />
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
                              <FontAwesomeIcon icon={faHeart} />
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
                          <span className="theme-color price">$26.69</span>
                          <del>28.56</del>
                        </h5>
                        <div className="product-rating mt-sm-2 mt-1">
                          <ul className="rating">
                            <Star />
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
                                <i className="fa fa-minus" aria-hidden="true" />
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
                                <i className="fa fa-plus" aria-hidden="true" />
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
    </>
  );
}

export default Foodcupboard;
