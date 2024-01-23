import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

// import { CreateContact } from "./HttpServices";
import Header from "./Header";
import Footer from "./Footer";
import Spinner from "./Spinner";
import { useCreateContactMutation } from "../services/Post";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import classNames from "classnames";

function ContactUs(props) {
  const ecommercetoken = useSelector((data) => data?.local?.ecomWebtoken);
  const ecomUserId = useSelector((data) => data?.local?.ecomUserid);

  const [CreateContact, res] = useCreateContactMutation();

  const [message, setMessage] = useState("");
  const [currentLocation, setCurrentLocation] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);
  console.log(longitude);
  console.log(latitude);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const position = {
    lat: +latitude ? +latitude : 50,
    lng: +longitude ? +longitude : 50,
  };
  const containerStyle = {
    width: "100%",
    height: "400px",
  };
  const center = {
    lat: +latitude ? +latitude : 50,
    lng: +longitude ? +longitude : 50,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA1X0VM5k6DeAGJSWM6W8KkPCVYnohdTg8",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    setMap(map);
  }, []);
  const onLoadMark = (marker) => {
    console.log("marker: ", marker);
  };

  const handleCreateContact = async (data) => {
    // e.preventDefault();
    const newContactData = {
      firstName: data?.firstName,
      lastName: data?.lastName,
      Email: data?.email,
      mobileNumber: data?.phoneNumber,
      message: message,
      ...(longitude && { longitude: longitude }),
      ...(latitude && { latitude: latitude }),
      // latitude,
      ecommercetoken: ecommercetoken,
    };

    try {
      const createdContact = await CreateContact(newContactData);
      console.log("Contact created successfully:", createdContact);
      Swal.fire({
        title: "Contact Created!",
        text: "Your contact has been successfully created.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Error creating contact:", error);
    }
  };

  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <>
      {loading && <Spinner />}

      {/* Header Start */}
      <Header Dash={"contact"} />
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
                <h2>Contact Us</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/index">
                        <i className="fa-solid fa-house" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Contact Us
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}
      {/* Contact Box Section Start */}
      <section className="contact-box-section">
        <div className="container-fluid-lg">
          <div className="row g-lg-5 g-3">
            <div className="col-lg-6">
              <div className="left-sidebar-box">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="contact-image">
                      <img
                        src="../assets/images/inner-page/contact-us.png"
                        className="img-fluid  lazyloaded"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="contact-title">
                      <h3>Get In Touch</h3>
                    </div>
                    <div className="contact-detail">
                      <div className="row g-4">
                        <div className="col-xxl-6 col-lg-12 col-sm-6">
                          <div className="contact-detail-box">
                            <div className="contact-icon">
                              <i className="fa-solid fa-phone" />
                            </div>
                            <div className="contact-detail-title">
                              <h4>Phone</h4>
                            </div>
                            <div className="contact-detail-contain">
                              <p>(+1) 618 190 496</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-lg-12 col-sm-6">
                          <div className="contact-detail-box">
                            <div className="contact-icon">
                              <i className="fa-solid fa-envelope" />
                            </div>
                            <div className="contact-detail-title">
                              <h4>Email</h4>
                            </div>
                            <div className="contact-detail-contain">
                              <p>geweto9420@chokxus.com</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-lg-12 col-sm-6">
                          <div className="contact-detail-box">
                            <div className="contact-icon">
                              <i className="fa-solid fa-location-dot" />
                            </div>
                            <div className="contact-detail-title">
                              <h4>London Office</h4>
                            </div>
                            <div className="contact-detail-contain">
                              <p>Cruce Casa de Postas 29</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-lg-12 col-sm-6">
                          <div className="contact-detail-box">
                            <div className="contact-icon">
                              <i className="fa-solid fa-building" />
                            </div>
                            <div className="contact-detail-title">
                              <h4>Bournemouth Office</h4>
                            </div>
                            <div className="contact-detail-contain">
                              <p>Visitación de la Encina 22</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="title d-xxl-none d-block">
                <h2>Contact Us</h2>
              </div>
              <div className="right-sidebar-box">
                <form onSubmit={handleSubmit(handleCreateContact)}>
                  <div className="row">
                    <div className="col-xxl-6 col-lg-12 col-sm-6">
                      <div className="mb-md-4 mb-3 custom-form">
                        <label htmlFor="firstName" className="form-label">
                          First Name<span className="text-danger">*</span>
                        </label>
                        <div className="custom-input mb-2">
                          <input
                            type="text"
                            // className="form-control"
                            id="firstName"
                            placeholder="Enter First Name"
                            // value={firstName}
                            // onChange={(e) => setFirstName(e.target.value)}
                            className={classNames(
                              "form-control  border border-secondary signup_fields",
                              { "is-invalid": errors.firstName }
                            )}
                            {...register("firstName", {
                              required: "Enter Your FirstName Name*",
                              pattern: {
                                value: /^[A-Za-z]+$/,
                                message: "First Name must contain only letters",
                              },
                              minLength: {
                                value: 3,
                                message: "minimium 3 Charcarters",
                              },
                              maxLength: {
                                value: 20,
                                message: "maximum 20 Charcarters",
                              },
                            })}
                          />
                          <i className="fa-solid fa-user" />
                        </div>
                        {errors.firstName && (
                          <small className="errorText mx-1 fw-bold text-danger">
                            {errors.firstName?.message}
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="col-xxl-6 col-lg-12 col-sm-6">
                      <div className="mb-md-4 mb-3 custom-form">
                        <label htmlFor="lastName" className="form-label">
                          Last Name<span className="text-danger">*</span>
                        </label>
                        <div className="custom-input mb-2">
                          <input
                            type="text"
                            // className="form-control"
                            id="lastName"
                            placeholder="Enter Last Name"
                            // value={lastName}
                            // onChange={(e) => setLastName(e.target.value)}
                            className={classNames(
                              "form-control  border border-secondary signup_fields",
                              { "is-invalid": errors.lastName }
                            )}
                            {...register("lastName", {
                              required: "Enter Your LastName Name*",
                              pattern: {
                                value: /^[A-Za-z]+$/,
                                message: "Last Name must contain only letters",
                              },
                              minLength: {
                                value: 3,
                                message: "minimium 3 Charcarters",
                              },
                              maxLength: {
                                value: 20,
                                message: "maximum 20 Charcarters",
                              },
                            })}
                          />
                          <i className="fa-solid fa-user" />
                        </div>
                        {errors.lastName && (
                          <small className="errorText mx-1 fw-bold text-danger">
                            {errors.lastName?.message}
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="col-xxl-6 col-lg-12 col-sm-6">
                      <div className="mb-md-4 mb-3 custom-form">
                        <label htmlFor="email" className="form-label">
                          Email Address<span className="text-danger">*</span>
                        </label>
                        <div className="custom-input mb-2">
                          <input
                            type="email"
                            className="form-control border border-secondary"
                            id="email"
                            placeholder="Enter Email Address"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            {...register("email", {
                              required: "Email is Required*",
                              pattern: {
                                value:
                                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Invalid email address",
                              },
                            })}
                          />
                          <i className="fa-solid fa-envelope" />
                        </div>
                        {errors.email && (
                          <small className="errorText mx-1 fw-bold text-danger">
                            {errors.email?.message}
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="col-xxl-6 col-lg-12 col-sm-6">
                      <div className="mb-md-4 mb-3 custom-form">
                        <label htmlFor="phoneNumber" className="form-label">
                          Phone Number<span className="text-danger">*</span>
                        </label>
                        <div className="custom-input mb-2">
                          <input
                            type="tel"
                            // className="form-control"
                            id="phoneNumber"
                            placeholder="Enter Your Phone Number"
                            className={classNames(
                              "form-control  border border-secondary signup_fields ",
                              { "is-invalid": errors.phoneNumber }
                            )}
                            {...register("phoneNumber", {
                              required: "Phone Number is Required*",
                              maxLength: {
                                value: 10,
                                message: "maximium 10 Charcarters",
                              },
                              minLength: {
                                value: 10,
                                message: "minimium 10 Charcarters",
                              },
                            })}
                          />
                          <i className="fa-solid fa-mobile-screen-button" />
                        </div>
                        {errors.phoneNumber && (
                          <small className="errorText mx-1 fw-bold text-danger">
                            {errors.phoneNumber?.message}
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mb-md-4 mb-3 custom-form">
                        <label htmlFor="message" className="form-label">
                          Message
                        </label>
                        <div className="custom-textarea">
                          <textarea
                            className="form-control"
                            id="message"
                            placeholder="Enter Your Message"
                            rows={6}
                            // value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          />
                          <i className="fa-solid fa-message" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-animation btn-md fw-bold ms-auto"
                    type="submit"
                  >
                    Create Contact
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Box Section End */}
      {/* Map Section Start */}
      {/* <section className="map-section">
        <div className="container-fluid p-0">
          <div className="map-box">
            {latitude !== null && longitude !== null ? (
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${latitude}%2C${longitude}!5e0!3m2!1sen!2sin!4v1652217109535!5m2!1sen!2sin`}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <p>Loading map...</p>
            )}
          </div>
        </div>
      </section> */}
      <section className="map-section">
        <div className="container-fluid p-0">
          <div className="map-box">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                zoom={14}
                center={center}
                onLoad={onLoad}
                // onUnmount={onUnmount}
              >
                <>
                  <MarkerF onLoad={onLoadMark} position={position} />
                </>
              </GoogleMap>
            ) : null}
          </div>
        </div>
      </section>
      {/* Map Section End */}
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

export default ContactUs;
