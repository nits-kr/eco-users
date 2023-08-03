import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
  const [otp, setOtp] = useState([]);
  const refs = [useRef(), useRef(), useRef(), useRef()];
  const [email, setEmail] = useState("");
  const [counter, setCounter] = useState(5);
  const [intervalId, setIntervalId] = useState(null);
  const [otpVarify] = useVarifyOtpMutation();
  console.log(" OTP varification", otpVarify);
  const handleSaveChanges = (event) => {
    event.preventDefault();
    // const otp =
    //   event.target[0].value +
    //   event.target[1].value +
    //   event.target[2].value +
    //   event.target[3].value;
    const newAddress = {
      otp: otp,
      userEmail: email,
    };
    otpVarify(newAddress);
  };
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
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter - 1);
  //   }, 1000);
  //   setIntervalId(interval);
  //   return () => clearInterval(interval);
  // }, []);

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
                    <form className="row g-4" onClick={handleSaveChanges}>
                      <div className="col-12">
                        <div className="form-floating theme-form-floating log-in-form d-flex">
                          <input
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
                          />
                        </div>
                        <input
                          type="email"
                          className="form-control mt-3"
                          id="email"
                          placeholder="Email Address"
                          value={email}
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
