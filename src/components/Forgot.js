import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Header";
import Footer from "./Footer";
import { useSendEmailMutation } from "../services/Post";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { Button } from "rsuite";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setVarificationEmail } from "../app/slice/localSlice";
import { Spinner } from "react-bootstrap";

function Forgot() {
  const [loader, setLoader] = useState(false);

  const [sendMailData] = useSendEmailMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const handleSaveChanges = async (data) => {
    dispatch(setVarificationEmail(data.email));
    // e.preventDefault();
    const newAddress = {
      userEmail: data.email,
    };
    setLoader(true);

    try {
      const res = await sendMailData(newAddress);
      console.log("otp res", res);
      setLoader(false);
      if (res?.data?.message === "Mail Send Successfully") {
        Swal.fire({
          title: "OTP Sent Successfully!",
          icon: "success",
          text: "The OTP has been sent in your Email successfully.",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/varification");
          }
        });
      } else if (res?.data?.message === " userEmail are incorrect") {
        toast.error("Email are incorrect");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <>
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
                <h2>Forgot Password</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/index">
                        <i className="fa-solid fa-house" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">Forgot Password</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}
      {/* log in section start */}
      <section className="log-in-section section-b-space forgot-section">
        <div className="container-fluid-lg w-100">
          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
              <div className="image-contain">
                <img
                  src="../assets/images/inner-page/forgot.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
              <div className="d-flex align-items-center justify-content-center h-100">
                <div className="log-in-box">
                  <div className="log-in-title">
                    <h5>Welcome to Techgropse eCommerce</h5>
                    <h3>Forgot your password</h3>
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
                            className={classNames(
                              "form-control signup_fields ",
                              {
                                "is-invalid": errors.email,
                              }
                            )}
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
                          <label htmlFor="email">Email Address</label>
                        </div>
                      </div>
                      <div className="col-12">
                        {/* <Link to="/varification">
                          
                        </Link> */}
                        <button
                          className="btn btn-animation w-100"
                          type="submit"
                          disabled={loader}
                          style={{ cursor: loader ? "not-allowed" : "" }}
                          title={`${loader ? "Please wait..." : "Send Otp"}`}
                        >
                          {loader ? <Spinner /> : "Send OTP"}
                        </button>
                      </div>
                    </form>
                  </div>
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

export default Forgot;
