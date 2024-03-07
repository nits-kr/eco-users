import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Header";
import Footer from "./Footer";
import {
  useApplyCoupanMutation,
  useCreateOrderMutation,
  useGetAddressListMutation,
  useGetUserCoupanListMutation,
} from "../services/Post";
import { useDispatch, useSelector } from "react-redux";
import { setCoupanIdlocal, setvarientId } from "../app/slice/localSlice";
import { toast } from "react-toastify";

function CheckOutNew() {
  const ecommercetoken = useSelector((data) => data?.local?.ecomWebtoken);
  const payType = useSelector((data) => data?.local?.payType);
  const varient_Id = useSelector((data) => data?.local?.varient_Id);

  const ecomUserId = useSelector((data) => data?.local?.ecomUserid);
  const paymentData = JSON.parse(
    useSelector((data) => data?.local?.paymentData)
  );
  const [applyCoupan] = useApplyCoupanMutation();
  const [coupanlist] = useGetUserCoupanListMutation();

  const [coupanId, setCoupanId] = useState("");

  const [addressList] = useGetAddressListMutation();

  const [createOrder] = useCreateOrderMutation();
  const [newAddress, setNewAddress] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);

  const [coupanCode, setCoupanCode] = useState("");
  const [coupanDetails, setCoupanIdDetails] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  window.onbeforeunload = function () {
    localStorage.removeItem("buyItem");
  };

  useEffect(() => {
    handleCoupanlist();
  }, []);

  const [coupanList, setCoupanList] = useState([]);

  const handleCoupanlist = async () => {
    const res = await coupanlist({ ecommercetoken });

    if (res?.data?.message === "Coupons") {
      setCoupanList(res?.data?.results?.coupons);
    } else {
      toast.error("Error Occured in fetching coupans!");
    }

    console.log("res coupan", res);
  };

  const applyCoupanCode = async () => {
    if (!coupanCode) {
      toast.error("😒 Please enter a coupon code.");
      return;
    }

    try {
      const createNewOrder = await applyCoupan({
        coupanCode: coupanCode,
        ecommercetoken,
      });

      console.log("create coupan", createNewOrder);
      if (createNewOrder?.data?.results?.validCoupan === true) {
        setCoupanId(createNewOrder?.data?.results?._id);
        setCoupanIdDetails(createNewOrder?.data?.results);
        dispatch(setCoupanIdlocal(createNewOrder?.data?.results?._id));
        toast.success(`Wow🤩🤩! coupan applied `);
      } else {
        toast.error(`😒Invalid Coupan`);
      }

      let totalPrice = 0;
      createNewOrder?.data?.results.product.forEach((product) => {
        totalPrice += parseInt(product.Price);
      });
    } catch (error) {
      console.error("An error occurred while applying coupan.");
    }
  };

  useEffect(() => {
    if (ecomUserId) {
      handleAddressList(ecomUserId);
    }
  }, [ecomUserId]);

  const handleAddressList = async () => {
    const datas = {
      ecomUserId,
      ecommercetoken,
    };

    try {
      const respone = await addressList(datas);

      setNewAddress(respone?.data?.results?.addressData?.slice().reverse());
    } catch (error) {
      console.log(error);
    }
  };

  const placeOrder = async () => {
    if (newAddress?.length > 0 && !selectedAddressId) {
      Swal.fire({
        title: "Select Address",
        text: "Please select an address before placing the order.",
        icon: "warning",
        showCancelButton: false,
        confirmButtonColor: "#0da487",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
        }
      });
      return;
    }

    if (!selectedAddressId) {
      Swal.fire({
        title: "Update Address",
        text: "Please update your address before placing the order.",
        icon: "warning",
        showCancelButton: false,
        confirmButtonColor: "#0da487",
        // confirmButtonText: "Update Address ➡️",
        confirmButtonText: "Update Address →",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/user-dashboard");
        }
      });
      return;
    }

    const newOrderData = {
      ...(coupanId && { couponId: coupanId }),
      paymentIntent: "COD",
      ...(selectedAddressId && { address_Id: selectedAddressId }),
      ...(varient_Id && { varient_Id: varient_Id }),
      type: payType === "Single" ? "Single" : "All",
      ecommercetoken: ecommercetoken,
    };

    const confirmationResult = await Swal.fire({
      title: "Place Order Confirmation",
      text: "Are you sure you want to place the order?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#0da487",
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
          confirmButtonColor: "#0da487",
          text: "Your order has been placed successfully.",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/order-success");
            dispatch(setvarientId(""));
          }
        });
      } catch (error) {
        await Swal.fire({
          title: "Error",
          text: "An error occurred while placing the order.",
          icon: "error",
        });
      }
    }
  };

  const handleAddressSelection = (addressId) => {
    setSelectedAddressId(addressId);
  };

  function formatDate(date) {
    const day = date.getDate();
    let suffix = "";
    switch (day) {
      case 1:
      case 21:
      case 31:
        suffix = "st";
        break;
      case 2:
      case 22:
        suffix = "nd";
        break;
      case 3:
      case 23:
        suffix = "rd";
        break;
      default:
        suffix = "th";
        break;
    }
    const month = date.toLocaleString("default", { month: "short" });
    return `${day}${suffix} ${month}`;
  }

  const copyToClipboard = async (text) => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);

        if (text) {
          toast.info(
            <>
              Copied To Clipboard:
              <strong>{`Your Coupan Code is: ${text}`}</strong>
            </>,
            {
              position: "bottom-right",
            }
          );
        }
        return true;
      } catch (error) {
        console.error("Error copying to clipboard:", error);
        return false;
      }
    } else {
      console.error("Clipboard API is not supported.");
      return false;
    }
  };

  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <>
      <Header />

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
                                        <label> {item?.type} </label>
                                      </div>
                                      <ul className="delivery-address-detail">
                                        <li>
                                          <h4 className="fw-500">
                                            {item?.fullName_en}
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
                                            {item?.phoneNumber}
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

                  <ul className="summery-total">
                    <div
                      className={`summery-contain ${
                        coupanlist?.length > 0 ? "" : "d-none"
                      }`}
                    >
                      <div className="coupon-cart">
                        <h6 className="text-content mb-2">Coupon Apply</h6>
                        <div className="mb-3 coupon-box input-group">
                          <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Enter Coupon Code Here..."
                            value={coupanCode}
                            onChange={(e) => setCoupanCode(e.target.value)}
                          />
                          <button
                            className="btn-apply"
                            onClick={() => applyCoupanCode()}
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>

                    <li>
                      <h4>Subtotal</h4>
                      <h4 className="price">${paymentData?.totalAmount}</h4>
                    </li>

                    <li>
                      <h4>Shipping</h4>

                      <h4 className="price">${0}</h4>
                    </li>
                    <li>
                      <h4>Discount</h4>

                      <h4 className="price">
                        {coupanDetails?.discount}
                        {coupanDetails?.DiscountType === "Fixed" ? "" : "%"}
                      </h4>
                    </li>
                    <li>
                      <h4>Tax</h4>
                      <h4 className="price">${"0"}</h4>
                    </li>

                    <li className="list-total">
                      <h4>Total (USD)</h4>

                      <h4 className="price">
                        $
                        {coupanId
                          ? coupanDetails?.DiscountType === "Fixed"
                            ? paymentData?.grandTotal - coupanDetails?.discount
                            : paymentData?.grandTotal *
                              (1 - coupanDetails?.discount / 100)
                          : paymentData?.grandTotal}
                      </h4>
                    </li>
                  </ul>
                </div>

                <div
                  className={`checkout-offer ${
                    coupanList?.length > 0 ? "" : "d-none"
                  }`}
                >
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
                    {coupanList?.map((coupon, ind) => {
                      return (
                        <li
                          key={ind}
                          style={{
                            // backgroundColor: "transparent",
                            transition: "background-color 0.3s",
                            cursor: "pointer",
                          }}
                          title={`Click to copy the coupan code: ${coupon.coupanCode}`}
                          onClick={() => copyToClipboard(coupon.coupanCode)}
                        >
                          <p>
                            Apply Coupon Code:{" "}
                            <strong>{coupon.coupanCode}</strong> and get flat{" "}
                            <strong>
                              {coupon.DiscountType === "Fixed"
                                ? `$${coupon.discount}`
                                : `${coupon.discount}%`}
                            </strong>
                            {coupon.DiscountType === "Fixed" ? "" : " off"}.{" "}
                            <div>
                              {" "}
                              <strong>Hurry Up!</strong> ,Offer only valid up
                              to:{" "}
                              <strong className="text-danger">
                                {formatDate(new Date(coupon.enddate))}
                              </strong>
                            </div>
                          </p>
                        </li>
                      );
                    })}
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

      <Footer />

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

export default CheckOutNew;
