import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Header";
import Footer from "./Footer";
import TapToTop from "./TapToTop";
import MobileFixMenu from "./MobileFixMenu";
import BreadCrumb from "./BreadCrumb";
import { useVarifyOtpMutation } from "../services/Post";

function Varification() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const refs = [useRef(), useRef(), useRef(), useRef()];
  const [email, setEmail] = useState("");
  const [otpVarify, { isLoading, isSuccess, isError }] = useVarifyOtpMutation();
  const [counter, setCounter] = useState(5);
  const [intervalId, setIntervalId] = useState(null);
  const navigate = useNavigate();
  const handleInputChange = (event, index) => {
    const { value } = event.target;
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;
      return newOtp;
    });

    if (value.length === 1 && index < 3) {
      refs[index + 1].current.focus();
    }
    if (value.length === 1 && index === 3) {
      clearInterval(intervalId);
      setIntervalId(null);
      setCounter(null);
    }
  };
  // const handleSaveChanges = (event) => {
  //   event.preventDefault();
  //   const otpString = otp.join(""); // Join the OTP array into a single string
  //   const newAddress = {
  //     otp: otpString,
  //     userEmail: email,
  //   };
  //   otpVarify(newAddress);
  // };
  const handleSaveChanges = async (e) => {
    e.preventDefault();
    const otpString = otp.join("");
    const newAddress = {
      otp: otpString,
      userEmail: email,
    };

    try {
      await otpVarify(newAddress);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  if (isSuccess) {
    Swal.fire({
      title: "Verified!",
      icon: "success",
      text: "Verify Otp Successfully",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/reset-password");
        setTimeout(() => {
          window?.location?.reload();
        }, 500);
      }
    });
  } else if (isError) {
    Swal.fire({
      title: "OTP Sending Failed!",
      icon: "error",
      text: "An error occurred while sending the OTP.",
    });
  }
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <>
      <Header />
      <MobileFixMenu />
      <BreadCrumb />
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
                    <h3>Verification</h3>
                    <h4>
                      Please enter the OTP received on your Email Address{" "}
                    </h4>
                  </div>
                  <div className="input-box">
                    <form className="row g-4">
                      <div className="col-12">
                        <div className="form-floating theme-form-floating log-in-form d-flex">
                          {/* <input
                            type="text"
                            className="form-control me-3 px-1 text-center"
                            maxLength="1"
                            placeholder="2"
                            name="name"
                            id="name"
                            ref={refs[0]}
                            value={otp[0]}
                            onChange={(event) => handleInputChange(event, 0)}
                          />
                          <input
                            type="text"
                            className="form-control me-3 px-1 text-center"
                            maxLength="1"
                            placeholder="4"
                            name="name"
                            id="name"
                            ref={refs[1]}
                            value={otp[1]}
                            onChange={(event) => handleInputChange(event, 1)}
                          />
                          <input
                            type="text"
                            className="form-control me-3 px-1 text-center"
                            maxLength="1"
                            placeholder="6"
                            name="name"
                            id="name"
                            ref={refs[2]}
                            value={otp[2]}
                            onChange={(event) => handleInputChange(event, 2)}
                          />
                          <input
                            type="text"
                            className="form-control me-3 px-1 text-center"
                            maxLength="1"
                            placeholder="8"
                            name="name"
                            id="name"
                            ref={refs[3]}
                            value={otp[3]}
                            onChange={(event) => handleInputChange(event, 3)}
                          /> */}
                          {refs.map((ref, index) => (
                            <input
                              key={index}
                              type="text"
                              className="form-control me-3 px-1 text-center"
                              maxLength="1"
                              placeholder={(index + 1) * 2}
                              ref={ref}
                              value={otp[index]}
                              onChange={(event) =>
                                handleInputChange(event, index)
                              }
                            />
                          ))}
                        </div>
                        <input
                          type="email"
                          className="form-control mt-3"
                          id="email"
                          placeholder="Email Address"
                          // value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        {/* <label htmlFor="email">Email Address</label> */}
                      </div>
                      <div className="form-group col-12 text-center">
                        <span className="count_Sec">
                          {counter > 0
                            ? `00:${counter.toString().padStart(2, "0")}`
                            : "Time's up!"}
                        </span>
                      </div>
                      <div className="form-group col-12 text-center mt-3">
                        <label className="text-center" htmlFor="">
                          Didn't received the OTP?{" "}
                          <Link to="/forgot">Request again</Link>
                        </label>
                      </div>

                      <div className="col-12">
                        <Link to="/reset-password">
                          <button
                            className="btn btn-animation w-100"
                            type="submit"
                            onClick={handleSaveChanges}
                          >
                            Confirm
                          </button>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <TapToTop />
    </>
  );
}

export default Varification;
