import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import Footer from "./Footer";
import {
  useGetOrderListMutation,
  useGetOrderListQuery,
} from "../services/Post";
import { useCancelOrderMutation } from "../services/Post";
import { useSelector } from "react-redux";
function OrderSuccess() {
  const ecommercetoken = useSelector((data) => data?.local?.ecomWebtoken);
  const ecomUserId = useSelector((data) => data?.local?.ecomUserid);
  const [orderLists] = useGetOrderListMutation();

  const [newOrder, setNewOrder] = useState([]);
  localStorage?.setItem("totalOrder", newOrder?.length);
  const [cancelOrder, re] = useCancelOrderMutation();
  const storeUser = localStorage?.getItem("userName");

  useEffect(() => {
    if (ecomUserId) {
      handleOrderList(ecomUserId);
    }
  }, [ecomUserId]);

  const handleOrderList = async () => {
    const datas = {
      ecomUserId,
      ecommercetoken,
    };

    try {
      const respone = await orderLists(datas);

      setNewOrder(respone?.data?.results?.order);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelOrder = (orderId) => {
    Swal.fire({
      title: "Confirm Cancellation",
      text: "Are you sure you want to cancel this address?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it",
      cancelButtonText: "No, cancel",
      customClass: {
        confirmButton: "btn btn-danger me-2",
        cancelButton: "btn btn-primary ms-2",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        cancelOrder({ ecommercetoken, orderId })
          .then(() => {
            handleOrderList();
          })
          .catch((error) => {});
      }
    });
  };

  const handleRate = (id) => {
    console.log(id);
  };

  useEffect(() => {
    feather.replace();
  }, []);

  function trimProductName(productName) {
    const words = productName?.split(" ");
    if (words?.length > 3) {
      return words?.slice(0, 3)?.join(" ") + " ...";
    } else {
      return productName;
    }
  }

  return (
    <>
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
              <div className="breadscrumb-contain breadscrumb-order">
                <div className="order-box">
                  {/* <div className="order-image">
                    <div className="checkmark">
                      <svg
                        className="star"
                        height={19}
                        viewBox="0 0 19 19"
                        width={19}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z"></path>
                      </svg>
                      <svg
                        className="star"
                        height={19}
                        viewBox="0 0 19 19"
                        width={19}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z"></path>
                      </svg>
                      <svg
                        className="star"
                        height={19}
                        viewBox="0 0 19 19"
                        width={19}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z"></path>
                      </svg>
                      <svg
                        className="star"
                        height={19}
                        viewBox="0 0 19 19"
                        width={19}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z"></path>
                      </svg>
                      <svg
                        className="star"
                        height={19}
                        viewBox="0 0 19 19"
                        width={19}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z"></path>
                      </svg>
                      <svg
                        className="star"
                        height={19}
                        viewBox="0 0 19 19"
                        width={19}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z"></path>
                      </svg>
                      <svg
                        className="checkmark__check"
                        height={36}
                        viewBox="0 0 48 36"
                        width={48}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M47.248 3.9L43.906.667a2.428 2.428 0 0 0-3.344 0l-23.63 23.09-9.554-9.338a2.432 2.432 0 0 0-3.345 0L.692 17.654a2.236 2.236 0 0 0 .002 3.233l14.567 14.175c.926.894 2.42.894 3.342.01L47.248 7.128c.922-.89.922-2.34 0-3.23"></path>
                      </svg>
                      <svg
                        className="checkmark__background"
                        height={115}
                        viewBox="0 0 120 115"
                        width={120}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M107.332 72.938c-1.798 5.557 4.564 15.334 1.21 19.96-3.387 4.674-14.646 1.605-19.298 5.003-4.61 3.368-5.163 15.074-10.695 16.878-5.344 1.743-12.628-7.35-18.545-7.35-5.922 0-13.206 9.088-18.543 7.345-5.538-1.804-6.09-13.515-10.696-16.877-4.657-3.398-15.91-.334-19.297-5.002-3.356-4.627 3.006-14.404 1.208-19.962C10.93 67.576 0 63.442 0 57.5c0-5.943 10.93-10.076 12.668-15.438 1.798-5.557-4.564-15.334-1.21-19.96 3.387-4.674 14.646-1.605 19.298-5.003C35.366 13.73 35.92 2.025 41.45.22c5.344-1.743 12.628 7.35 18.545 7.35 5.922 0 13.206-9.088 18.543-7.345 5.538 1.804 6.09 13.515 10.696 16.877 4.657 3.398 15.91.334 19.297 5.002 3.356 4.627-3.006 14.404-1.208 19.962C109.07 47.424 120 51.562 120 57.5c0 5.943-10.93 10.076-12.668 15.438z"></path>
                      </svg>
                    </div>
                  </div> */}
                  <div className="order-contain">
                    <h3 className="theme-color">Your Order List</h3>
                    {/* <h5 className="text-content">
                      Payment Is Successfully And Your Order Is On The Way
                    </h5>
                    <h6>Transaction ID: 1708031724431131</h6> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}
      {/* Cart Section Start */}
      <section className="cart-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3">
            <div className="col-xxl-12 col-lg-8">
              <div className="cart-table order-table order-table-2">
                <div
                  className="table-responsive"
                  style={{ overflow: "hidden" }}
                >
                  <table className="table mb-0">
                    <tbody>
                      {newOrder?.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td className="product-detail">
                              <div className="product border-0">
                                <Link
                                  to={`/product-details-page/${item?.products?.[0]?.varient_Id?.productId?._id}`}
                                  className="product-image"
                                >
                                  <img
                                    src={
                                      item?.products?.[0]?.varient_Id
                                        ?.product_Pic[0]
                                    }
                                    className="img-fluid  lazyload"
                                    alt=""
                                  />
                                </Link>
                                <div className="product-detail">
                                  <ul>
                                    {/* <li className="name">
                                      <Link to="/product">
                                        {" "}
                                        {
                                          item?.products[0]?.product_Id
                                            ?.productName_en
                                        }{" "}
                                      </Link>
                                    </li> */}
                                    <li className="name">
                                      <Link
                                        to={`/product-details-page/${item?.products?.[0]?.varient_Id?.productId?._id}`}
                                      >
                                        {" "}
                                        {trimProductName(
                                          item?.products?.[0]?.varient_Id
                                            ?.productId?.productName_en
                                        )}{" "}
                                      </Link>
                                    </li>

                                    <li className="text-content">
                                      {item?.products?.[0]?.varient_Id?.SKU}
                                    </li>
                                    {/* <li className="text-content">
                                        Quantity - {item?.quantity}
                                      </li> */}
                                  </ul>
                                </div>
                              </div>
                            </td>
                            <td className="price">
                              <h4 className="table-title text-content">
                                Price
                              </h4>
                              <h6 className="theme-color">
                                $ {item?.products?.[0]?.varient_Id?.Price}
                              </h6>
                            </td>
                            <td className="quantity">
                              <h4 className="table-title text-content">Qty</h4>
                              <h4 className="text-title">
                                {item?.products?.[0]?.quantity}
                              </h4>
                            </td>
                            <td className="subtotal">
                              <h4 className="table-title text-content">
                                Total
                              </h4>
                              <h5>${item?.totalAmount} </h5>
                            </td>
                            <td className="subtotal">
                              <h4 className="table-title text-content">
                                Discount
                              </h4>
                              <h5>${item?.discount} </h5>
                            </td>
                            <td className="subtotal">
                              <h4 className="table-title text-content">
                                Grand Total
                              </h4>
                              <h5>${item?.grandTotal} </h5>
                            </td>
                            <td className="subtotal">
                              <h4 className="table-title text-content">
                                <Link to={`/order-tracking/${item?._id}`}>
                                  <strong className="">Track Order</strong>
                                </Link>
                              </h4>
                              {item?.status === "Cancelled" ||
                              item?.status === "Pending" ||
                              item?.status === "Packed" ||
                              item?.status === "Approved" ||
                              item?.status === "Inprogress" ||
                              item?.status === "Shipped" ? (
                                <Link
                                  className={
                                    item?.status === "Cancelled"
                                      ? "text-danger"
                                      : item?.status === "Pending"
                                      ? "text-warning"
                                      : item?.status === "Packed"
                                      ? "text-info"
                                      : item?.status === "Approved"
                                      ? "text-success"
                                      : item?.status === "Inprogress"
                                      ? "text-primary"
                                      : "text-secondary"
                                  }
                                  style={{
                                    cursor: "not-allowed",
                                    filter: "blur(0.5px)",
                                    background: "#e6ebe8",
                                    color: "darkgray",
                                  }}
                                  disabled
                                >
                                  <strong>{item?.status}</strong>{" "}
                                </Link>
                              ) : item?.status === "Delivered" ? (
                                <Link
                                  to={`/product-details-page/${item?.products?.[0]?.varient_Id?.productId?._id}`}
                                  className="text-primary"
                                >
                                  <div className="text-danger">Delivered</div>
                                  <FontAwesomeIcon icon={faStar} />
                                  Rate Product{" "}
                                </Link>
                              ) : (
                                <Link
                                  className="text-danger"
                                  onClick={() => {
                                    handleCancelOrder(item?._id);
                                  }}
                                >
                                  Cancel Order{" "}
                                </Link>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <div className="col-xxl-3 col-lg-4">
              <div className="row g-4">
                <div className="col-lg-12 col-sm-6">
                  <div className="summery-box">
                    <div className="summery-header">
                      <h3>Price Details</h3>
                      <h5 className="ms-auto theme-color">(3 Items)</h5>
                    </div>
                    <ul className="summery-contain">
                      <li>
                        <h4>Vegetables Total</h4>
                        <h4 className="price">$32.34</h4>
                      </li>
                      <li>
                        <h4>Vegetables Saving</h4>
                        <h4 className="price theme-color">$12.23</h4>
                      </li>
                      <li>
                        <h4>Coupon Discount</h4>
                        <h4 className="price text-danger">$6.27</h4>
                      </li>
                    </ul>
                    <ul className="summery-total">
                      <li className="list-total">
                        <h4>Total (USD)</h4>
                        <h4 className="price">$19.28</h4>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-12 col-sm-6">
                  <div className="summery-box">
                    <div className="summery-header d-block">
                      <h3>Shipping Address</h3>
                    </div>
                    <ul className="summery-contain pb-0 border-bottom-0">
                      <li className="d-block">
                        <h4>8424 James Lane South</h4>
                        <h4 className="mt-2">San Francisco, CA 94080</h4>
                      </li>
                      <li className="pb-0">
                        <h4>Expected Date Of Delivery:</h4>
                        <h4 className="price theme-color">
                          <Link to="/order-tracking" className="text-danger">
                            Track Order
                          </Link>
                        </h4>
                      </li>
                    </ul>
                    <ul className="summery-total">
                      <li className="list-total border-top-0 pt-2">
                        <h4 className="fw-bold">Oct 21, 2021</h4>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12">
                  <div className="summery-box">
                    <div className="summery-header d-block">
                      <h3>Payment Method</h3>
                    </div>
                    <ul className="summery-contain pb-0 border-bottom-0">
                      <li className="d-block pt-0">
                        <p className="text-content">
                          Pay on Delivery (Cash/Card). Cash on delivery (COD)
                          available. Card/Net banking acceptance subject to
                          device availability.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* Cart Section End */}
      {/* Footer Section Start */}
      <Footer />
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

export default OrderSuccess;
