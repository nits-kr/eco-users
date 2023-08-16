import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
     <footer className="section-t-space">
        <div className="container-fluid-lg">
          <div className="service-section">
            <div className="row g-3">
              <div className="col-12">
                <div className="service-contain">
                  <div className="service-box">
                    <div className="service-image">
                      <img
                        src="../../assets/svg/product.svg"
                        className=" lazyload"
                        alt=""
                      />
                    </div>
                    <div className="service-detail">
                      <h5>Every Fresh Products</h5>
                    </div>
                  </div>
                  <div className="service-box">
                    <div className="service-image">
                      <img
                        src="../../assets/svg/delivery.svg"
                        className=" lazyload"
                        alt=""
                      />
                    </div>
                    <div className="service-detail">
                      <h5>Free Delivery For Order Over $50</h5>
                    </div>
                  </div>
                  <div className="service-box">
                    <div className="service-image">
                      <img
                        src="../../assets/svg/discount.svg"
                        className=" lazyload"
                        alt=""
                      />
                    </div>
                    <div className="service-detail">
                      <h5>Daily Mega Discounts</h5>
                    </div>
                  </div>
                  <div className="service-box">
                    <div className="service-image">
                      <img
                        src="../../assets/svg/market.svg"
                        className=" lazyload"
                        alt=""
                      />
                    </div>
                    <div className="service-detail">
                      <h5>Best Price On The Market</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-footer section-b-space section-t-space">
            <div className="row g-md-4 g-3">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-logo">
                  <div className="theme-logo">
                    <Link to="/index">
                      <img
                        src="../../assets/images/logo/logo.png"
                        className=" lazyload"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="footer-logo-contain">
                    <p>
                      We are a friendly bar serving a variety of cocktails,
                      wines and beers. Our bar is a perfect place for a couple.
                    </p>
                    <ul className="address">
                      <li>
                        <i data-feather="home" />
                        <Link to="#">1418 Riverwood Drive, CA 96052, US</Link>
                      </li>
                      <li>
                        <i data-feather="mail" />
                        <Link to="#">support@dummy.com</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="footer-title">
                  <h4>Categories</h4>
                </div>
                <div className="footer-contain">
                  <ul>
                    <li>
                      <Link to="/shop" className="text-content">
                        Vegetables &amp; Fruit
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop" className="text-content">
                        Beverages
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop" className="text-content">
                        Meats &amp; Seafood
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop" className="text-content">
                        Frozen Foods
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop" className="text-content">
                        Biscuits &amp; Snacks
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop" className="text-content">
                        Grocery &amp; Staples
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl col-lg-2 col-sm-3">
                <div className="footer-title">
                  <h4>Useful Links</h4>
                </div>
                <div className="footer-contain">
                  <ul>
                    <li>
                      <Link to="/indexgrocery" className="text-content">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop" className="text-content">
                        Shop
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us" className="text-content">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="text-content">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact-us" className="text-content">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-sm-3">
                <div className="footer-title">
                  <h4>Help Center</h4>
                </div>
                <div className="footer-contain">
                  <ul>
                    <li>
                      <Link to="/order-success" className="text-content">
                        Your Order
                      </Link>
                    </li>
                    <li>
                      <Link to="/user-dashboard" className="text-content">
                        Your Account
                      </Link>
                    </li>
                    <li>
                      <Link to="/order-success" className="text-content">
                        Track Order
                      </Link>
                    </li>
                    <li>
                      <Link to="/wishlist" className="text-content">
                        Your Wishlist
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop/:id" className="text-content">
                        Search
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq" className="text-content">
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-title">
                  <h4>Contact Us</h4>
                </div>
                <div className="footer-contact">
                  <ul>
                    <li>
                      <div className="footer-number">
                        <i data-feather="phone" />
                        <div className="contact-number">
                          <h6 className="text-content">Hotline 24/7 :</h6>
                          <h5>+91 888 104 2340</h5>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="footer-number">
                        <i data-feather="mail" />
                        <div className="contact-number">
                          <h6 className="text-content">Email Address :</h6>
                          <h5>dummy@hotmail.com</h5>
                        </div>
                      </div>
                    </li>
                    <li className="social-app mb-0">
                      <h5 className="mb-2 text-content">Download App :</h5>
                      <ul>
                        <li className="mb-0">
                          <Link
                            to="https://play.google.com/store/apps"
                            target="_blank"
                          >
                            <img
                              src="../../assets/images/playstore.svg"
                              className=" lazyload"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li className="mb-0">
                          <Link
                            to="https://www.apple.com/in/app-store/"
                            target="_blank"
                          >
                            <img
                              src="../../assets/images/appstore.svg"
                              className=" lazyload"
                              alt=""
                            />
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="sub-footer section-small-space">
            <div className="reserve">
              <h6 className="text-content">
                2023 Copyright By TechGropse eCommerce
              </h6>
            </div>
            <div className="payment">
              <img
                src="../../assets/images/payment/1.png"
                className=" lazyload"
                alt=""
              />
            </div>
            <div className="social-link">
              <h6 className="text-content">Stay connected :</h6>
              <ul>
                <li>
                  <Link to="https://www.facebook.com/" target="_blank">
                    <i className="fa-brands fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link to="https://twitter.com/" target="_blank">
                    <i className="fa-brands fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/" target="_blank">
                    <i className="fa-brands fa-instagram" />
                  </Link>
                </li>
                <li>
                  <Link to="https://in.pinterest.com/" target="_blank">
                    <i className="fa-brands fa-pinterest-p" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer> 
    </>
  )
}

export default Footer
