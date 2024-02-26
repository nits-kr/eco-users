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
import {
  useSendEmailMutation,
  useUserSignUpWithPhoneMutation,
  useVarifyOtpLoginMutation,
  // useVarifyOtpMutation,
} from "../services/Post";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  setEcomWebToken,
  setProfileCompleted,
  setVarificationOtp,
} from "../app/slice/localSlice";

function Varification() {
  const profileCompleted = useSelector((data) => data?.local?.profileCompleted);
  const varificationToken = useSelector((data) => data?.local?.ecomWebtoken);
  const varificationOtp = useSelector((data) => data?.local?.varificationOtp);
  const varificationMobile = useSelector(
    (data) => data?.local?.varificationMobile
  );

  const [loginData] = useUserSignUpWithPhoneMutation();

  const [sendMailData] = useSendEmailMutation();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const [email, setEmail] = useState("");
  const [otpVarify] = useVarifyOtpLoginMutation();
  // const [otpVarify] = useVarifyOtpMutation();
  const [counter, setCounter] = useState(60);
  const [intervalId, setIntervalId] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log("profileCompleted", profileCompleted);

  useEffect(() => {
    if (profileCompleted === false) {
      navigate("/update-profile");
    }
  }, [profileCompleted]);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter, email]);

  const handleInputChange = (event, index) => {
    const { value } = event.target;
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;
      return newOtp;
    });

    if (value.length === 1 && index < 5) {
      refs[index + 1].current.focus();
    }
    // if (value.length === 1 && index === 3) {
    //   clearInterval(intervalId);
    //   setIntervalId(null);
    //   setCounter(null);
    // }
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    const otpString = otp.join("");
    const newAddress = {
      countryCode: "+91",
      otp: otpString,
      mobileNumber: varificationMobile,
    };

    try {
      const res = await otpVarify(newAddress);
      console.log("varification res", res);
      if (res?.data?.message === "OTP Verified") {
        dispatch(setEcomWebToken(res?.data?.results?.token));
        dispatch(setProfileCompleted(res?.data?.results?.profileComleted));
        // toast.success("OTP Varified Successfully");
        Swal.fire({
          title: "OTP Varified!",
          icon: "success",
          text: "OTP Varified Successfully.",
          showConfirmButton: false,
          timer: 500,
          timerProgressBar: true,
        }).then((result) => {
          if (res?.data?.results?.profileComleted === true) {
            navigate("/");
          } else {
            navigate("/update-profile");
          }
        });
      } else if (res?.error?.data?.message === "InValid Otp") {
        toast.error("Invalid OTP Entered");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const resendOtp = async (e) => {
    setOtp(["", "", "", "", "", ""]);
    setCounter(60);
    e.preventDefault();
    const data = {
      mobileNumber: varificationMobile,
      countryCode: "+91",
    };
    try {
      const response = await loginData(data);
      if (
        response?.data?.message === "Signup Successful" ||
        response?.data?.message === "Login successful"
      ) {
        toast.success(`Your OTP is: ${response.data?.results?.otp}`);
        dispatch(setVarificationOtp(response.data?.results?.otp));
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                      </div>
                      <div className="form-group col-12 text-center">
                        <span className="count_Sec">
                          {/* {counter > 0
                            ? `00:${counter.toString().padStart(2, "0")}`
                            : "Time's up!"} */}
                          {counter ? <p>00:{counter}</p> : null}
                        </span>
                      </div>
                      <div className="form-group col-12 text-center mt-3">
                        <label className="text-center" htmlFor="">
                          Didn't received the OTP?{" "}
                          <Link to="#" onClick={(e) => resendOtp(e)}>
                            Request again
                          </Link>
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
