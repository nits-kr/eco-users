import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Star from "./Star";

function IndexPage() {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <>
      {/* Header Section Start */}
      <header>
        <div className="top-header">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-12">
                <nav className="navbar custom-navbar navbar-expand-xl navbar-light justify-content-start">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <Link
                    className="navbar-brand"
                    to="/indexPage"
                    target="_blank"
                  >
                    <img src="assets/images/landing-image/logo.png" alt="" />
                  </Link>
                  <button className="btn-md btn-md-animation ms-xl-0 ms-auto order-xl-2">
                    Buy Now <i className="fa-solid fa-right-long icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ms-auto me-4">
                      <li className="nav-item">
                        <Link className="nav-link active" to="#home">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#demo">
                          Demo
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header Section End */}
      {/* Home Section Start */}
      <section className="home-section pt-0 ratio_46 mt-5" id="home">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div
                className="home-icon"
                style={{
                  backgroundImage: 'url("../images/landing-image/bg.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block",
                }}
              ></div>
              <div
                className="home-contain"
                style={{ display: "flex", textAlign: "center" }}
              >
                <h1>
                  MULTI-PURPOSE TECHGROPSE{" "}
                  <span className="theme-color">ECOMMERCE</span> TEMPLATE
                </h1>
              </div>
              <div className="home-image">
                <img
                  src="assets/images/landing-image/home.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Section End */}
      {/* Home Pages Section Start */}
      <section className="layout-section section-b-space" id="demo">
        <div className="container-fluid-lg">
          <div className="row g-xl-5 g-4 justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="layout-page-box wow fadeIn">
                <div className="layout-image">
                  <Link target="_blank" to="*">
                    <img
                      src="assets/images/landing-image/theme/front-end/Grocery.png"
                      className="w-100"
                      alt=""
                    />
                  </Link>
                </div>
                <Link target="_blank" to="*" className="layout-name">
                  <h4 style={{ textAlign: "center", color: "grey" }}>
                    Grocery
                  </h4>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 fixed-height">
              <div
                className="layout-page-box wow fadeIn"
                data-wow-delay="0.35s"
              >
                <div className="layout-image">
                  <Link target="_blank" to="/shop/:id">
                    <img
                      src="assets/images/landing-image/theme/front-end/Food.png"
                      className="w-100"
                      alt=""
                    />
                  </Link>
                </div>
                <Link target="_blank" to="/shop/:id" className="layout-name">
                  <h4 style={{ textAlign: "center", color: "grey" }}>Food</h4>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 fixed-height">
              <div
                className="layout-page-box wow fadeIn"
                data-wow-delay="0.35s"
              >
                <div className="layout-image">
                  <Link target="" to="#">
                    <img
                      src="assets/images/landing-image/theme/front-end/jewelry.png"
                      className="w-100"
                      alt=""
                    />
                  </Link>
                </div>
                <Link
                  // target="_blank"
                  // to="/index-jwellary"
                  className="layout-name"
                >
                  <h4 style={{ textAlign: "center", color: "grey" }}>
                    Jewelry
                  </h4>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="layout-page-box wow fadeIn"
                data-wow-delay="0.35s"
              >
                <div className="layout-image">
                  <Link target="" to="#">
                    <img
                      src="assets/images/landing-image/theme/front-end/flower-business.png"
                      className="w-100"
                      alt=""
                    />
                  </Link>
                </div>
                <Link
                  // target="_blank"
                  // to="/index-flower-business"
                  className="layout-name"
                >
                  <h4 style={{ textAlign: "center", color: "grey" }}>
                    Flower Business
                  </h4>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="layout-page-box wow fadeIn" data-wow-delay="0.4s">
                <div className="layout-image">
                  <Link target="" to="#">
                    <img
                      src="assets/images/landing-image/theme/front-end/General-Things.png"
                      className="w-100"
                      alt=""
                    />
                  </Link>
                </div>
                <Link
                  // target="_blank"
                  // to="/index-general-things"
                  className="layout-name"
                >
                  <h4 style={{ textAlign: "center", color: "grey" }}>
                    General Things
                  </h4>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="layout-page-box wow fadeIn"
                data-wow-delay="0.25s"
              >
                <div className="layout-image">
                  <Link target="" to="#">
                    <img
                      src="assets/images/landing-image/theme/front-end/Furniture.png"
                      className="w-100"
                      alt=""
                    />
                  </Link>
                </div>
                <Link
                  // target="_blank"
                  // to="/index-furniture"
                  className="layout-name"
                >
                  <h4 style={{ textAlign: "center", color: "grey" }}>
                    Furniture
                  </h4>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="layout-page-box wow fadeIn"
                data-wow-delay="0.05s"
              >
                <div className="layout-image">
                  <Link target="" to="#">
                    <img
                      src="assets/images/landing-image/theme/front-end/Lifestyle.png"
                      className="w-100"
                      alt=""
                    />
                  </Link>
                </div>
                <Link
                  // target="_blank"
                  // to="/index-lifestyle"
                  className="layout-name"
                >
                  <h4 style={{ textAlign: "center", color: "grey" }}>
                    Lifestyle
                  </h4>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="layout-page-box wow fadeIn"
                data-wow-delay="0.45s"
              >
                <div className="layout-image">
                  <Link target="" to="#">
                    <img
                      src="assets/images/landing-image/theme/front-end/Electronics.png"
                      className="w-100"
                      alt=""
                    />
                  </Link>
                </div>
                <Link
                  // target="_blank"
                  // to="/index-electronics"
                  className="layout-name"
                >
                  <h4 style={{ textAlign: "center", color: "grey" }}>
                    Electronics
                  </h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Home Pages Section End */}
      {/* Footer Section Start */}
      <footer>
        <div className="container-fluid-lg footer-container">
          <div className="row">
            <div className="col-12">
              <div className="main-footer">
                <h2>Love our Works</h2>
                <div className="theme-rating">
                  <h3>Please don't forget to rate</h3>
                  <ul className="rating">
                    <Star />
                  </ul>
                  <h3>our TechGropse eCommerce Templates. Thank you!</h3>
                </div>
                <button className="btn btn-2 theme-bg-color text-white m-auto">
                  Purchase TechGropse eCommerce
                </button>
              </div>
              <div className="sub-footer">
                <div className="container-fluid-lg">
                  <div className="row">
                    <div className="col-12">
                      <h4>© 2023 TechGropse eCommerce</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default IndexPage;
