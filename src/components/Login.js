import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Swal from "sweetalert2";

import Header from "./Header";
import Footer from "./Footer";
import { useUserLoginMutation } from "../services/Post";
import { useDispatch } from "react-redux";
import { setEcomUserId, setEcomWebToken } from "../app/slice/localSlice";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { Button } from "rsuite";
import { Spinner } from "react-bootstrap";

function Login() {
  const [loader, setLoader] = useState(false);

  const [loginData] = useUserLoginMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const handleSaveChanges = async (data) => {
    setLoader(true);
    try {
      const response = await loginData({
        userEmail: data.email,
        password: data.password,
      });
      setLoader(false);
      console.log("login response", response);

      if (
        response?.data?.error === false &&
        response?.data?.message === "login SuccessFully"
      ) {
        Swal.fire({
          title: "Login Successful!",
          icon: "success",
          text: "You have successfully logged in.",
          showConfirmButton: false,
          timer: 500,
        }).then((result) => {
          navigate("/");
        });
        console.log("response login", response);
        localStorage.setItem(
          "loginId",
          response.data?.results?.verifyUser?._id
        );
        dispatch(setEcomUserId(response.data?.results?.verifyUser?._id));
        localStorage.setItem(
          "userName",
          response.data?.results?.verifyUser?.userName
        );
        localStorage.setItem(
          "userEmail",
          response.data?.results?.verifyUser?.userEmail
        );

        dispatch(setEcomWebToken(response.data?.results?.token));
        localStorage.setItem(
          "mobileNumber",
          response.data?.results?.verifyUser?.mobileNumber
        );
      } else if (
        response?.error?.data?.message === "User Password Are Incorrect"
      ) {
        Swal.fire({
          title: "Login Failed!",
          icon: "error",
          text: "Incorrect password. Please try again.",
        });
      } else {
        Swal.fire({
          title: "Login Failed!",
          icon: "error",
          text: "An error occurred during login.",
        });
      }
    } catch (error) {
      console.error("Login error:", error);

      Swal.fire({
        title: "Login Failed!",
        icon: "error",
        text: "An error occurred during login.",
      });
    }
  };

  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <>
      <Header />

      {/* Header End */}
      {/* mobile fix menu start */}
      <div className="mobile-menu d-md-none d-block mobile-cart">
        <ul>
          <li className="active">
            <Link to="#">
              <i className="iconly-Home icli" />
              <span>Home</span>
            </Link>
          </li>
          <li className="mobile-category">
            <Link to="/">
              <i className="iconly-Category icli js-link" />
              <span>Category</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="search-box">
              <i className="iconly-Search icli" />
              <span>Search</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="notifi-wishlist">
              <i className="iconly-Heart icli" />
              <span>My Wish</span>
            </Link>
          </li>
          <li>
            <Link to="/">
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
                <h2 className="mb-2">Log In</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <i className="fa-solid fa-house" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">Log In</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}
      {/* log in section start */}
      <section className="log-in-section background-image-2 section-b-space">
        <div className="container-fluid-lg w-100">
          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
              <div className="image-contain">
                <img
                  src="../assets/images/inner-page/log-in.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
              <div className="log-in-box">
                <div className="log-in-title">
                  <h5>Welcome to Techgropse eCommerce</h5>
                  <h3>Log In Your Account</h3>
                </div>
                <div className="input-box">
                  <form
                    className="row g-4"
                    onSubmit={handleSubmit(handleSaveChanges)}
                  >
                    <div className="col-12">
                      <div className="form-floating theme-form-floating log-in-form">
                        <input
                          type="email"
                          className={classNames("form-control signup_fields ", {
                            "is-invalid": errors.email,
                          })}
                          id="email"
                          placeholder="Email Address"
                          {...register("email", {
                            required: "Email is Required*",
                            pattern: {
                              value:
                                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              message: "Invalid email address",
                            },
                          })}
                        />
                        {errors.email && (
                          <small className="errorText mx-1 fw-bold text-danger">
                            {errors.email?.message}
                          </small>
                        )}
                        <label htmlFor="email">
                          Email Address<span className="text-danger">*</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating theme-form-floating log-in-form">
                        <input
                          type="password"
                          className={classNames("form-control", {
                            "is-invalid": errors.password,
                          })}
                          id="password"
                          placeholder="Password"
                          {...register("password", {
                            required: "Password is required",
                            minLength: {
                              value: 8,
                              message:
                                "Password must be at least 8 characters long",
                            },
                            pattern: {
                              value:
                                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])(?=.*[A-Z])[A-Za-z\d@$!%*#?&]+$/,
                              message:
                                "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character",
                            },
                          })}
                        />
                        {errors.password && (
                          <small className="errorText mx-1 fw-bold text-danger">
                            {errors.password.message}
                          </small>
                        )}
                        <label htmlFor="password">
                          Password<span className="text-danger">*</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="forgot-box">
                        <div className="form-check ps-0 m-0 remember-box">
                          <input
                            className="checkbox_animated check-box"
                            type="checkbox"
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Remember me
                          </label>
                        </div>
                        <Link to="/forgot" className="forgot-password">
                          Forgot Password?
                        </Link>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-animation w-100"
                        type="submit"
                        disabled={loader}
                        style={{ cursor: loader ? "not-allowed" : "" }}
                        title={`${loader ? "Please wait..." : "Login"}`}
                      >
                        {loader ? <Spinner /> : "Log In"}
                      </button>
                    </div>
                  </form>
                </div>
                <div className="other-log-in">
                  <h6>or</h6>
                </div>
                <div className="log-in-button">
                  <ul>
                    <li>
                      <Link
                        to="https://www.google.com/"
                        className="btn google-button w-100"
                      >
                        <img
                          src="../assets/images/inner-page/google.png"
                          className=" lazyload"
                          alt=""
                        />{" "}
                        Log In with Google
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.facebook.com/"
                        className="btn google-button w-100"
                      >
                        <img
                          src="../assets/images/inner-page/facebook.png"
                          className=" lazyload"
                          alt=""
                        />{" "}
                        Log In with Facebook
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="other-log-in">{/* <h6 /> */}</div>
                <div className="sign-up-box">
                  <h4>Don't have an account?</h4>
                  <Link to="/sign-up">Sign Up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* log in section end */}
      {/* Footer Section Start */}
      <Footer />
      {/* Footer Section End */}
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

export default Login;
