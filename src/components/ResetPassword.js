import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Header";
import BreadCrumb from "./BreadCrumb";
import MobileFixMenu from "./MobileFixMenu";
import Footer from "./Footer";
import { useResetPasswordMutation } from "../services/Post";

function ResetPassword() {
  const [reset, { isLoading, isSuccess, isError }] = useResetPasswordMutation();
  const [password, setPassword] = useState([]);
  const [resetPassword, setResetPassword] = useState([]);
  const [userEmail, setUserEmail] = useState([]);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();
  const handleSaveChanges = async (e) => {
    e.preventDefault();
    const newAddress = {
      password: password,
      confirm_Password: resetPassword,
      userEmail: userEmail,
    };

    try {
      await reset(newAddress);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  if (isSuccess) {
    Swal.fire({
      title: "Changed!",
      icon: "success",
      text: "Your Password Changed Successfully",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
        setTimeout(() => {
          window?.location?.reload();
        }, 500);
      }
    });
  } else if (isError) {
    Swal.fire({
      title: "Failed!",
      icon: "error",
      text: "Password Not Match.",
    });
  }
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <>
      <Header />
      <BreadCrumb />
      <MobileFixMenu />
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
                    <h3>Reset Password</h3>
                    <h4>Enter New Password</h4>
                  </div>
                  <div className="input-box">
                    <form className="row g-4">
                      <div className="col-12">
                        <div className="form-floating theme-form-floating log-in-form d-flex">
                          <input
                            type="password"
                            className="form-control text-center"
                            id="password"
                            placeholder="New Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label htmlFor="email">New Password</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating theme-form-floating log-in-form d-flex">
                          <input
                            type="password"
                            className="form-control text-center"
                            id="passwordNew"
                            placeholder="Confirm New Password"
                            value={resetPassword}
                            onChange={(e) => setResetPassword(e.target.value)}
                          />
                          <label htmlFor="passwordNew">
                            Confirm New Password
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating theme-form-floating log-in-form d-flex">
                          <input
                            type="email"
                            className="form-control text-center"
                            id="email"
                            placeholder="Enter Email"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                          />
                          <label htmlFor="passwordNew">Enter Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <Link
                          to="#"
                          className="btn btn-animation w-100"
                          onClick={handleSaveChanges}
                        >
                          Save
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
    </>
  );
}

export default ResetPassword;
