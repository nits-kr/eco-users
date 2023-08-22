import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Header";
import Footer from "./Footer";
import { OrderSummary } from "./HttpServices";
import { useCreateOrderMutation } from "../services/Post";
import { useGetAddressListQuery } from "../services/Post";

function CheckOut() {
  const [orderItemSummary, setOrderItemSummary] = useState([]);
  const [orderItemSummaryPrice, setOrderItemSummaryPrice] = useState([]);
  const [createOrder, response] = useCreateOrderMutation();
  const [newAddress, setNewAddress] = useState([]);
  const addressList = useGetAddressListQuery();
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const userId = localStorage.getItem("loginId");
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddressSelection = (addressId) => {
    setSelectedAddressId(addressId);
  };

  const getReversedList = (list) => {
    return list?.data?.results?.addressData?.slice().reverse() ?? [];
  };
  useEffect(() => {
    const reversedList = getReversedList(addressList);
    setNewAddress(reversedList);
  }, [addressList]);

  const fetchData = async () => {
    try {
      const { data, error } = await OrderSummary();
      error ? console.log(error) : console.log(data);
      setOrderItemSummary(data?.results?.product);
      setOrderItemSummaryPrice(data.results);
      console.log(data.results.product);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    feather.replace();
  }, []);

  const placeOrder = async () => {
    const orderList = orderItemSummary?.map((order) => ({
      product_Id: order.products[0].product_Id._id,
      quantity: order.products[0].quantity,
    }));
    const newOrderData = {
      carts: orderList,
      user_Id: userId,
      address_Id: selectedAddressId,
      // shippingPrice: "30",
      // taxPrice: "20",
      // deliverdBy: "64997c95488af9cf3dfb8d69",
    };
    const confirmationResult = await Swal.fire({
      title: "Place Order Confirmation",
      text: "Are you sure you want to place the order?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Place Order",
      cancelButtonText: "Cancel",
      customClass: {
        confirmButton: "custom-confirm-button-class m-3",
      },
    });

    if (confirmationResult.isConfirmed) {
      try {
        const createNewOrder = await createOrder(newOrderData);
        console.log(createNewOrder);
        await Swal.fire({
          title: "Order Placed!",
          text: "Your order has been placed successfully.",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/shop/:id");
          }
        });
      } catch (error) {
        // Show error alert
        await Swal.fire({
          title: "Error",
          text: "An error occurred while placing the order.",
          icon: "error",
        });
      }
    }
  };

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
                <h2>Checkout</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/index">
                        <i className="fa-solid fa-house" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Checkout
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}
      {/* Checkout section Start */}
      <section className="checkout-section-2 section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3">
            <div className="col-lg-8">
              <div className="left-sidebar-checkout">
                <div className="checkout-detail-box">
                  <ul>
                    <li>
                      <div className="checkout-icon">
                        <lord-icon
                          target=".nav-item"
                          src="https://cdn.lordicon.com/ggihhudh.json"
                          trigger="loop-on-hover"
                          colors="primary:#121331,secondary:#646e78,tertiary:#0baf9a"
                          className="lord-icon"
                        ></lord-icon>
                      </div>
                      <div className="checkout-box">
                        <div className="checkout-title">
                          <h4>Delivery Address</h4>
                        </div>
                        <div className="checkout-detail">
                          <div className="row g-4">
                            {newAddress?.map((item, index) => {
                              return (
                                <div
                                  className="col-xxl-6 col-lg-12 col-md-6"
                                  key={item._id}
                                >
                                  <div className="delivery-address-box">
                                    <div>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="address"
                                          id={`addressRadio-${item._id}`}
                                          checked={
                                            selectedAddressId === item._id
                                          }
                                          onChange={() =>
                                            handleAddressSelection(item._id)
                                          }
                                        />
                                      </div>
                                      <div className="label">
                                        <label> {item?.title} </label>
                                      </div>
                                      <ul className="delivery-address-detail">
                                        <li>
                                          <h4 className="fw-500">
                                            Jack Jennas
                                          </h4>
                                        </li>
                                        <li>
                                          <p className="text-content">
                                            <span className="text-title">
                                              Address :{" "}
                                            </span>
                                            {item?.address}
                                          </p>
                                        </li>
                                        <li>
                                          <p className="text-content">
                                            <span className="text-title">
                                              Mobile Number :{" "}
                                            </span>
                                            {item?.mobileNumber}
                                          </p>
                                        </li>
                                        <li>
                                          <p className="text-content">
                                            <span className="text-title">
                                              Locality :{" "}
                                            </span>
                                            {item?.locality}
                                          </p>
                                        </li>
                                        <li>
                                          <p className="text-content">
                                            <span className="text-title">
                                              City :{" "}
                                            </span>
                                            {item?.city}
                                          </p>
                                        </li>
                                        <li>
                                          <h6 className="text-content">
                                            <span className="text-title">
                                              Pin Code :
                                            </span>{" "}
                                            {item?.pinCode}
                                          </h6>
                                        </li>
                                        <li>
                                          <h6 className="text-content">
                                            <span className="text-title">
                                              Country :
                                            </span>{" "}
                                            {item?.country}
                                          </h6>
                                        </li>
                                        <li>
                                          <h6 className="text-content mb-0">
                                            <span className="text-title">
                                              Phone :
                                            </span>{" "}
                                            + 380 (0564) 53 - 29 - 68
                                          </h6>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="checkout-icon">
                        <lord-icon
                          target=".nav-item"
                          src="https://cdn.lordicon.com/oaflahpk.json"
                          trigger="loop-on-hover"
                          colors="primary:#0baf9a"
                          className="lord-icon"
                        ></lord-icon>
                      </div>
                      <div className="checkout-box">
                        <div className="checkout-title">
                          <h4>Delivery Option</h4>
                        </div>
                        <div className="checkout-detail">
                          <div className="row g-4">
                            <div className="col-xxl-6">
                              <div className="delivery-option">
                                <div className="delivery-category">
                                  <div className="shipment-detail">
                                    <div className="form-check custom-form-check hide-check-box">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="standard"
                                        id="standard"
                                        defaultChecked="checked"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="standard"
                                      >
                                        Standard Delivery Option
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-6">
                              <div className="delivery-option">
                                <div className="delivery-category">
                                  <div className="shipment-detail">
                                    <div className="form-check mb-0 custom-form-check show-box-checked">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="standard"
                                        id="future"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="future"
                                      >
                                        Future Delivery Option
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 future-box">
                              <div className="future-option">
                                <div className="row g-md-0 gy-4">
                                  <div className="col-md-6">
                                    <div className="delivery-items">
                                      <div>
                                        <h5 className="items text-content">
                                          <span>3 Items</span>@ $693.48
                                        </h5>
                                        <h5 className="charge text-content">
                                          Delivery Charge $34.67
                                          <button
                                            type="button"
                                            className="btn p-0"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Extra Charge"
                                          >
                                            <i className="fa-solid fa-circle-exclamation" />
                                          </button>
                                        </h5>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <form className="form-floating theme-form-floating date-box">
                                      <input
                                        type="date"
                                        className="form-control"
                                      />
                                      <label>Select Date</label>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="checkout-icon">
                        <lord-icon
                          target=".nav-item"
                          src="https://cdn.lordicon.com/qmcsqnle.json"
                          trigger="loop-on-hover"
                          colors="primary:#0baf9a,secondary:#0baf9a"
                          className="lord-icon"
                        ></lord-icon>
                      </div>
                      <div className="checkout-box">
                        <div className="checkout-title">
                          <h4>Payment Option</h4>
                        </div>
                        <div className="checkout-detail">
                          <div
                            className="accordion accordion-flush custom-accordion"
                            id="accordionFlushExample"
                          >
                            <div className="accordion-item">
                              <div
                                className="accordion-header"
                                id="flush-headingFour"
                              >
                                <div
                                  className="accordion-button collapsed"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-collapseFour"
                                >
                                  <div className="custom-form-check form-check mb-0">
                                    <label
                                      className="form-check-label"
                                      htmlFor="cash"
                                    >
                                      <input
                                        className="form-check-input mt-0"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="cash"
                                        defaultChecked="checked"
                                      />{" "}
                                      Cash On Delivery
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="flush-collapseFour"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#accordionFlushExample"
                              >
                                <div className="accordion-body">
                                  <p className="cod-review">
                                    Pay digitally with SMS Pay Link. Cash may
                                    not be accepted in COVID restricted areas.{" "}
                                    <Link to="#">Know more.</Link>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <div
                                className="accordion-header"
                                id="flush-headingOne"
                              >
                                <div
                                  className="accordion-button collapsed"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-collapseOne"
                                >
                                  <div className="custom-form-check form-check mb-0">
                                    <label
                                      className="form-check-label"
                                      htmlFor="credit"
                                    >
                                      <input
                                        className="form-check-input mt-0"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="credit"
                                      />
                                      Credit or Debit Card
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="flush-collapseOne"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                              >
                                <div className="accordion-body">
                                  <div className="row g-2">
                                    <div className="col-12">
                                      <div className="payment-method">
                                        <div className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="credit2"
                                            placeholder="Enter Credit & Debit Card Number"
                                          />
                                          <label htmlFor="credit2">
                                            Enter Credit &amp; Debit Card Number
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xxl-4">
                                      <div className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="expiry"
                                          placeholder="Enter Expiry Date"
                                        />
                                        <label htmlFor="expiry">
                                          Expiry Date
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-xxl-4">
                                      <div className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="cvv"
                                          placeholder="Enter CVV Number"
                                        />
                                        <label htmlFor="cvv">CVV Number</label>
                                      </div>
                                    </div>
                                    <div className="col-xxl-4">
                                      <div className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                        <input
                                          type="password"
                                          className="form-control"
                                          id="password"
                                          placeholder="Enter Password"
                                        />
                                        <label htmlFor="password">
                                          Password
                                        </label>
                                      </div>
                                    </div>
                                    <div className="button-group mt-0">
                                      <ul>
                                        <li>
                                          <button className="btn btn-light shopping-button">
                                            Cancel
                                          </button>
                                        </li>
                                        <li>
                                          <button className="btn btn-animation">
                                            Use This Card
                                          </button>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <div
                                className="accordion-header"
                                id="flush-headingTwo"
                              >
                                <div
                                  className="accordion-button collapsed"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-collapseTwo"
                                >
                                  <div className="custom-form-check form-check mb-0">
                                    <label
                                      className="form-check-label"
                                      htmlFor="banking"
                                    >
                                      <input
                                        className="form-check-input mt-0"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="banking"
                                      />
                                      Net Banking
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="flush-collapseTwo"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                              >
                                <div className="accordion-body">
                                  <h5 className="text-uppercase mb-4">
                                    Select Your Bank
                                  </h5>
                                  <div className="row g-2">
                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="bank1"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="bank1"
                                        >
                                          Industrial &amp; Commercial Bank
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="bank2"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="bank2"
                                        >
                                          Agricultural Bank
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="bank3"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="bank3"
                                        >
                                          Bank of America
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="bank4"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="bank4"
                                        >
                                          Construction Bank Corp.
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="bank5"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="bank5"
                                        >
                                          HSBC Holdings
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="bank6"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="bank6"
                                        >
                                          JPMorgan Chase &amp; Co.
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-12">
                                      <div className="select-option">
                                        <div className="form-floating theme-form-floating">
                                          <select
                                            className="form-select theme-form-select"
                                            aria-label="Default select example"
                                            defaultValue="hsbc"
                                          >
                                            <option value="hsbc">
                                              HSBC Holdings
                                            </option>
                                            <option value="loyds">
                                              Lloyds Banking Group
                                            </option>
                                            <option value="natwest">
                                              Nat West Group
                                            </option>
                                            <option value="Barclays">
                                              Barclays
                                            </option>
                                            <option value="other">
                                              Others Bank
                                            </option>
                                          </select>
                                          <label>Select Other Bank</label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <div
                                className="accordion-header"
                                id="flush-headingThree"
                              >
                                <div
                                  className="accordion-button collapsed"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-collapseThree"
                                >
                                  <div className="custom-form-check form-check mb-0">
                                    <label
                                      className="form-check-label"
                                      htmlFor="wallet"
                                    >
                                      <input
                                        className="form-check-input mt-0"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="wallet"
                                      />
                                      My Wallet
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="flush-collapseThree"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                              >
                                <div className="accordion-body">
                                  <h5 className="text-uppercase mb-4">
                                    Select Your Wallet
                                  </h5>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <label
                                          className="form-check-label"
                                          htmlFor="amazon"
                                        >
                                          <input
                                            className="form-check-input mt-0"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="amazon"
                                          />
                                          Amazon Pay
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="gpay"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="gpay"
                                        >
                                          Google Pay
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="airtel"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="airtel"
                                        >
                                          Airtel Money
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="paytm"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="paytm"
                                        >
                                          Paytm Pay
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="jio"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="jio"
                                        >
                                          JIO Money
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="free"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="free"
                                        >
                                          Freecharge
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="right-side-summery-box">
                <div className="summery-box-2">
                  <div className="summery-header">
                    <h3>Order Summery</h3>
                  </div>
                  <ul className="summery-contain">
                    {orderItemSummary.map((order, index) => {
                      return (
                        <li key={index}>
                          <img
                            src={
                              order.products[0]?.product_Id?.product_Pic[0] ||
                              ""
                            }
                            className="img-fluid lazyloaded checkout-image"
                            alt=""
                          />
                          <h4>
                            {order.products[0]?.product_Id?.productName_en}{" "}
                            <span>X {order?.products[0]?.quantity}</span>
                          </h4>
                          <h4 className="price">${order?.cartsTotal}</h4>
                        </li>
                      );
                    })}
                  </ul>
                  <ul className="summery-total">
                    <li>
                      <h4>Subtotal(Discounted Price) </h4>
                      <h4 className="price">
                        ${orderItemSummaryPrice?.cartsTotal}
                      </h4>
                    </li>
                    <li>
                      <h4>Shipping</h4>
                      <h4 className="price">
                        {" "}
                        ${orderItemSummaryPrice?.shipping}{" "}
                      </h4>
                    </li>
                    <li>
                      <h4>Tax</h4>
                      <h4 className="price">${orderItemSummaryPrice?.Tax} </h4>
                    </li>
                    {/* <li>
                      <h4>Coupon/Code</h4>
                      <h4 className="price">
                        $-{orderItemSummaryPrice?.DiscountType}{" "}
                      </h4>
                    </li> */}
                    <li className="list-total">
                      <h4>Total (USD)</h4>
                      <h4 className="price">
                        ${orderItemSummaryPrice?.cartsTotalSum}{" "}
                      </h4>
                    </li>
                  </ul>
                </div>

                <div className="checkout-offer">
                  <div className="offer-title">
                    <div className="offer-icon">
                      <img
                        src="../assets/images/inner-page/offer.svg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="offer-name">
                      <h6>Available Offers</h6>
                    </div>
                  </div>
                  <ul className="offer-detail">
                    <li>
                      <p>
                        Combo: BB Royal Almond/Badam Californian, Extra Bold 100
                        gm...
                      </p>
                    </li>
                    <li>
                      <p>
                        combo: Royal Cashew Californian, Extra Bold 100 gm + BB
                        Royal Honey 500 gm
                      </p>
                    </li>
                  </ul>
                </div>
                <button
                  className="btn theme-bg-color text-white btn-md w-100 mt-4 fw-bold"
                  onClick={placeOrder}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Checkout section End */}
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
      {/* Add address modal box start */}
      <div
        className="modal fade theme-modal"
        id="add-address"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">
                Add a new address
              </h5>
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
              <form>
                <div className="form-floating mb-4 theme-form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="fname"
                    placeholder="Enter First Name"
                  />
                  <label htmlFor="fname">First Name</label>
                </div>
              </form>
              <form>
                <div className="form-floating mb-4 theme-form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="lname"
                    placeholder="Enter Last Name"
                  />
                  <label htmlFor="lname">Last Name</label>
                </div>
              </form>
              <form>
                <div className="form-floating mb-4 theme-form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Email Address"
                  />
                  <label htmlFor="email">Email Address</label>
                </div>
              </form>
              <form>
                <div className="form-floating mb-4 theme-form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="address"
                    style={{ height: 100 }}
                    defaultValue={""}
                  />
                  <label htmlFor="address">Enter Address</label>
                </div>
              </form>
              <form>
                <div className="form-floating mb-4 theme-form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="pin"
                    placeholder="Enter Pin Code"
                  />
                  <label htmlFor="pin">Pin Code</label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary btn-md"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn theme-bg-color btn-md text-white"
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Add address modal box end */}
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

export default CheckOut;
