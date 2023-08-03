import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Header";
import BreadCrumb from "./BreadCrumb";
import MobileFixMenu from "./MobileFixMenu";
import Footer from "./Footer";

function ResetPassword() {
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
                            type="email"
                            className="form-control text-center"
                            id="email"
                            placeholder="New Password"
                          />
                          <label htmlFor="email">New Password</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating theme-form-floating log-in-form d-flex">
                          <input
                            type="email"
                            className="form-control text-center"
                            id="email"
                            placeholder="Confirm New Password"
                          />
                          <label htmlFor="email">Confirm New Password</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <Link
                          to="#"
                          className="btn btn-animation w-100"
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
      <Footer/>
    </>
  );
}

export default ResetPassword;
