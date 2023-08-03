import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Header";
import Footer from "./Footer";

function Otp() {
   useEffect(() => {
      feather.replace();
   }, []);
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
      <Header/>
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
                        <h2>OTP</h2>
                        <nav>
                           <ol className="breadcrumb mb-0">
                              <li className="breadcrumb-item">
                                 <Link to="/index">
                                    <i className="fa-solid fa-house" />
                                 </Link>
                              </li>
                              <li className="breadcrumb-item active">OTP</li>
                           </ol>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* Breadcrumb Section End */}
         {/* log in section start */}
         <section className="log-in-section otp-section section-b-space">
            <div className="container-fluid-lg">
               <div className="row">
                  <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
                     <div className="image-contain">
                        <img
                           src="../assets/images/inner-page/otp.png"
                           className="img-fluid"
                           alt=""
                        />
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
                     <div className="d-flex align-items-center justify-content-center h-100">
                        <div className="log-in-box">
                           <div className="log-in-title">
                              <h3 className="text-title">
                                 Please enter the one time password to verify your account
                              </h3>
                              <h5 className="text-content">
                                 A code has been sent to <span>*******9897</span>
                              </h5>
                           </div>
                           <div
                              id="otp"
                              className="inputs d-flex flex-row justify-content-center"
                           >
                              <input
                                 className="text-center form-control rounded"
                                 type="text"
                                 id="first"
                                 maxLength={1}
                                 placeholder={0}
                              />
                              <input
                                 className="text-center form-control rounded"
                                 type="text"
                                 id="second"
                                 maxLength={1}
                                 placeholder={0}
                              />
                              <input
                                 className="text-center form-control rounded"
                                 type="text"
                                 id="third"
                                 maxLength={1}
                                 placeholder={0}
                              />
                              <input
                                 className="text-center form-control rounded"
                                 type="text"
                                 id="fourth"
                                 maxLength={1}
                                 placeholder={0}
                              />
                              <input
                                 className="text-center form-control rounded"
                                 type="text"
                                 id="fifth"
                                 maxLength={1}
                                 placeholder={0}
                              />
                              <input
                                 className="text-center form-control rounded"
                                 type="text"
                                 id="sixth"
                                 maxLength={1}
                                 placeholder={0}
                              />
                           </div>
                           <div className="send-box pt-4">
                              <h5>
                                 Didn't get the code?{" "}
                                 <Link to="#" className="theme-color fw-bold">
                                    Resend It
                                 </Link>
                              </h5>
                           </div>
                           <button
                              // onclick="location.href = 'index';"
                              onClick={() => {
                                 window.location.href = "/index";
                              }}
                              className="btn btn-animation w-100 mt-3"
                              type="submit"
                           >
                              Validate
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* log in section end */}
         {/* Footer Section Start */}
         <Footer/>
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

export default Otp;
