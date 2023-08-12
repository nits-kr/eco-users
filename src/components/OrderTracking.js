import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import Footer from "./Footer";
import { useOrderDetailsMutation } from "../services/Post";

function OrderTracking({ orderStatus }) {
  const { id } = useParams();
  const [status, setStatus] = useState(5);
  const [page, setPage] = useState(1);
  const [orderDetails, respone] = useOrderDetailsMutation();
  const order = respone?.data?.results?.order;
  console.log(order);
  console.log(respone);
  useEffect(() => {
    handleOrderDetails();
  }, []);
  const handleOrderDetails = () => {
    const newAddress = {
      id,
    };
    orderDetails(newAddress);
  };
  useEffect(() => {
    switch (orderStatus) {
      case "pending":
        setPage(1);
        break;
      case "processing":
        setPage(2);
        break;
      case "pre-production":
        setPage(3);
        break;
      case "in-production":
        setPage(4);
        break;
      case "shipped":
        setPage(5);
        break;
      case "delivered":
        setPage(6);
        break;
      default:
        setPage(1);
    }
  }, [orderStatus]);

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
              <div className="breadscrumb-contain">
                <h2>Order Tracking</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/index">
                        <i className="fa-solid fa-house" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Order Tracking
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}
      {/* Order Detail Section Start */}
      <section className="order-detail">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3">
            <div className="col-xxl-3 col-xl-4 col-lg-6">
              <div className="order-image">
                <img
                  src="../assets/images/vegetable/product/6.png"
                  className="img-fluid  lazyload"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xxl-9 col-xl-8 col-lg-6">
              <div className="row g-sm-4 g-3">
                <div className="col-xl-4 col-sm-6">
                  <div className="order-details-contain">
                    <div className="order-tracking-icon">
                      <i data-feather="package" className="text-content" />
                    </div>
                    <div className="order-details-name">
                      <h5 className="text-content">Tracking Code</h5>
                      <h2 className="theme-color">MH4285UY</h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="order-details-contain">
                    <div className="order-tracking-icon">
                      <i data-feather="truck" className="text-content" />
                    </div>
                    <div className="order-details-name">
                      <h5 className="text-content">Service</h5>
                      <img
                        src="../assets/images/inner-page/brand-name.svg"
                        className="img-fluid  lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="order-details-contain">
                    <div className="order-tracking-icon">
                      <i className="text-content" data-feather="info" />
                    </div>
                    <div className="order-details-name">
                      <h5 className="text-content">Package Info</h5>
                      <h4>Letter</h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="order-details-contain">
                    <div className="order-tracking-icon">
                      <i className="text-content" data-feather="crosshair" />
                    </div>
                    <div className="order-details-name">
                      <h5 className="text-content">From</h5>
                      <h4>STR. Smardan 9, Bucuresti, romania.</h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="order-details-contain">
                    <div className="order-tracking-icon">
                      <i className="text-content" data-feather="map-pin" />
                    </div>
                    <div className="order-details-name">
                      <h5 className="text-content">Destination</h5>
                      <h4> {order?.address_Id?.address} </h4>
                      <h4> {order?.address_Id?.address_ar} </h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="order-details-contain">
                    <div className="order-tracking-icon">
                      <i className="text-content" data-feather="calendar" />
                    </div>
                    <div className="order-details-name">
                      <h5 className="text-content">Estimated Time</h5>
                      <h4>7 Frb, 05:05pm</h4>
                    </div>
                  </div>
                </div>
                {/* <div className="col-12 overflow-hidden">
                  <ol className="progtrckr">
                    <li
                      //  className="progtrckr-done"
                      id="status1"
                      className={
                        status >= 1 ? "progtrckr-done active" : "progtrckr-done"
                      }
                    >
                      <h5>Order Processing</h5>
                      <h6>05:43 AM</h6>
                    </li>
                    <li
                      //  className="progtrckr-done"
                      id="status2"
                      className={
                        status >= 2 ? "progtrckr-done active" : "progtrckr-done"
                      }
                    >
                      <h5>Pre-Production</h5>
                      <h6>01:21 PM</h6>
                    </li>
                    <li
                      //  className="progtrckr-done"
                      id="status3"
                      className={
                        status >= 3 ? "progtrckr-done active" : "progtrckr-done"
                      }
                    >
                      <h5>In Production</h5>
                      <h6>Processing</h6>
                    </li>
                    <li
                      //  className="progtrckr-todo"
                      id="status4"
                      className={
                        status >= 4 ? "progtrckr-todo active" : "progtrckr-todo"
                      }
                    >
                      <h5>Shipped</h5>
                      <h6>Pending</h6>
                    </li>
                    <li
                      //  className="progtrckr-todo"
                      id="status5"
                      className={
                        status >= 5 ? "progtrckr-todo active" : "progtrckr-todo"
                      }
                    >
                      <h5>Delivered</h5>
                      <h6>Pending</h6>
                    </li>
                  </ol>
                </div> */}
                {/* <main id="main" className="main mainNew">
                  <div className="container">
                    <div className="card  StaticCard">
                      <div className="card-body"> */}
                {order?.orderStatus == "Cancelled" ? (
                  <strong
                    className="fs-5"
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div>
                        <FontAwesomeIcon
                          icon={faTimesCircle}
                          size="lg"
                          className="text-danger"
                          style={{
                            fontSize: "70px",
                            // position: "absolute",
                            WebkitAnimation: "grow 3s infinite",
                            animation: "grow 3s infinite",
                            fill: "var(--theme-color)",
                            opacity: 0,
                          }}
                        />
                      </div>
                      <div>
                        {/* <span>Order Status: </span>{" "} */}
                        <span className="bg-light text-danger  ms-2 mt-2">
                          Order Cancelled
                        </span>
                      </div>
                    </div>
                  </strong>
                ) : (
                  <div className="step-progress">
                    {/* <div className="StepsHeader"> */}
                    <div className="step-slider mt-3">
                      <div
                        data-id="step1"
                        className={
                          page >= 1
                            ? "step-slider-item active"
                            : "step-slider-item"
                        }
                      >
                        <div className="Title">
                          <h5 className="text-dark">Order Processing</h5>
                          <h6 className="text-dark">05:43 AM</h6>
                        </div>
                      </div>
                      <div
                        data-id="step2"
                        className={
                          page >= 2
                            ? "step-slider-item active"
                            : "step-slider-item"
                        }
                      >
                        <div className="Title">
                          <h5 className="text-dark">Pre-Production</h5>
                          <h6 className="text-dark">01:21 PM</h6>
                        </div>
                      </div>
                      <div
                        data-id="step3"
                        className={
                          page >= 3
                            ? "step-slider-item active"
                            : "step-slider-item"
                        }
                      >
                        <div className="Title">
                          <h5 className="text-dark">In Production</h5>
                          <h6 className="text-dark">Processing</h6>
                        </div>
                      </div>
                      <div
                        data-id="step4"
                        className={
                          page >= 4
                            ? "step-slider-item active"
                            : "step-slider-item"
                        }
                      >
                        <div className="Title">
                          <h5 className="text-dark">Shipped</h5>
                          <h6 className="text-dark">Pending</h6>
                        </div>
                      </div>
                      <div
                        data-id="step5"
                        className={
                          page >= 5
                            ? "step-slider-item active"
                            : "step-slider-item"
                        }
                      >
                        <div className="Title">
                          <h5 className="text-dark">Delivered</h5>
                          <h6 className="text-dark">Pending</h6>
                        </div>
                      </div>
                    </div>
                    {/* </div> */}
                    <div className="step-content">
                      <div className="step-content-foot">
                        <button
                          type="button "
                          className="float-start active mt-5"
                          onClick={() => {
                            page <= 1 ? setPage(1) : setPage(page - 1);
                          }}
                          name="prev"
                        >
                          Prev
                        </button>
                        <button
                          type="button"
                          className="active mt-5"
                          name="next"
                          onClick={() => {
                            page === 5 ? setPage(5) : setPage(page + 1);
                          }}
                        >
                          Next
                        </button>
                        <button
                          type="button"
                          className="active out"
                          name="finish"
                        >
                          Approve
                        </button>
                        <button
                          type="button"
                          className="active out bg-danger"
                          name="finish"
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {/* </div>
                    </div>
                  </div>
                </main> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Order Detail Section End */}
      {/* Order Table Section Start */}
      <section className="order-table-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table order-tab-table">
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Order Placed</td>
                      <td>26 Sep 2021</td>
                      <td>12:00 AM</td>
                      <td>California</td>
                    </tr>
                    <tr>
                      <td>Preparing to Ship</td>
                      <td>03 Oct 2021</td>
                      <td>12:00 AM</td>
                      <td>Canada</td>
                    </tr>
                    <tr>
                      <td>Shipped</td>
                      <td>04 Oct 2021</td>
                      <td>12:00 AM</td>
                      <td>America</td>
                    </tr>
                    <tr>
                      <td>Delivered</td>
                      <td>10 Nav 2021</td>
                      <td>12:00 AM</td>
                      <td>Germany</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Order Table Section End */}
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

export default OrderTracking;
