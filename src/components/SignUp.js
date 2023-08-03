import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { UserSignUp } from "./HttpServices";
import Header from "./Header";
import Footer from "./Footer";

function SignUp() {
   const [fullName, setFullName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleSignUp = async (e) => {
      e.preventDefault();

      try {
         const { data, error } = await UserSignUp(fullName, email, password);
         if (error) {
            console.log(error);
         } else {
            console.log(data);
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
                        <h2>Sign In</h2>
                        <nav>
                           <ol className="breadcrumb mb-0">
                              <li className="breadcrumb-item">
                                 <Link to="/index">
                                    <i className="fa-solid fa-house" />
                                 </Link>
                              </li>
                              <li className="breadcrumb-item active">Sign In</li>
                           </ol>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* Breadcrumb Section End */}
         {/* log in section start */}
         <section className="log-in-section section-b-space">
            <div className="container-fluid-lg w-100">
               <div className="row">
                  <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
                     <div className="image-contain">
                        <img
                           src="../assets/images/inner-page/sign-up.png"
                           className="img-fluid"
                           alt=""
                        />
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
                     <div className="log-in-box">
                        <div className="log-in-title">
                           <h3>Welcome to Techgropse eCommerce</h3>
                           <h4>Create New Account</h4>
                        </div>
                        <div className="input-box">
                           <form className="row g-4" onSubmit={handleSignUp}>
                              <div className="col-12">
                                 <div className="form-floating theme-form-floating">
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="fullname"
                                       placeholder="Full Name"
                                       value={fullName}
                                       onChange={(e) => setFullName(e.target.value)}
                                    />
                                    <label htmlFor="fullname">Full Name</label>
                                 </div>
                              </div>
                              <div className="col-12">
                                 <div className="form-floating theme-form-floating">
                                    <input
                                       type="email"
                                       className="form-control"
                                       id="email"
                                       placeholder="Email Address"
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label htmlFor="email">Email Address</label>
                                 </div>
                              </div>
                              <div className="col-12">
                                 <div className="form-floating theme-form-floating">
                                    <input
                                       type="password"
                                       className="form-control"
                                       id="password"
                                       placeholder="Password"
                                       value={password}
                                       onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label htmlFor="password">Password</label>
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
                                          I agree with
                                          <span>Terms</span> and <span>Privacy</span>
                                       </label>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-12">
                                 <button className="btn btn-animation w-100" type="submit">
                                    Sign Up
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
                                    to="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                                    className="btn google-button w-100"
                                 >
                                    <img
                                       src="../assets/images/inner-page/google.png"
                                       className=" lazyload"
                                       alt=""
                                    />
                                    Sign up with Google
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
                                    Sign up with Facebook
                                 </Link>
                              </li>
                           </ul>
                        </div>
                        <div className="other-log-in">{/* <h6 /> */}</div>
                        <div className="sign-up-box">
                           <h4>Already have an account?</h4>
                           <Link to="/login">Log In</Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-7 col-xl-6 col-lg-6" />
               </div>
            </div>
         </section>
         {/* log in section end */}
         <Footer/>
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

export default SignUp;
