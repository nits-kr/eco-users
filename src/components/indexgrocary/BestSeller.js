import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function BestSeller() {
  var w = window.innerWidth;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: w > 500 ? 3 : 1,
    autoplay: true,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="title d-block">
        <div>
          <h2>Our best Seller</h2>
          <span className="title-leaf">
            <svg className="icon-width">
              <use xlinkHref="../assets/svg/leaf.svg#leaf" />
            </svg>
          </span>
          <p>A virtual assistant collects the products from your list</p>
        </div>
      </div>
      <div className="best-selling-slider product-wrapper wow fadeInUp">
        <Slider {...settings}>
          <div>
            <ul className="product-list">
              <li>
                <div className="offer-product">
                  <Link to="/product" className="offer-image">
                    <img
                      src="../../assets/images/vegetable/product/11.png"
                      className=" lazyload"
                      alt=""
                    />
                  </Link>
                  <div className="offer-detail">
                    <div>
                      <Link to="/product" className="text-title">
                        <h6 className="name">Tuffets Whole Wheat Bread</h6>
                      </Link>
                      <span>500 G</span>
                      <h6 className="price theme-color">$ 10.00</h6>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="offer-product">
                  <Link to="/product" className="offer-image">
                    <img
                      src="../../assets/images/vegetable/product/12.png"
                      className=" lazyload"
                      alt=""
                    />
                  </Link>
                  <div className="offer-detail">
                    <div>
                      <Link to="/product" className="text-title">
                        <h6 className="name">Potato</h6>
                      </Link>
                      <span>500 G</span>
                      <h6 className="price theme-color">$ 10.00</h6>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="offer-product">
                  <Link to="/product" className="offer-image">
                    <img
                      src="../../assets/images/vegetable/product/13.png"
                      className=" lazyload"
                      alt=""
                    />
                  </Link>
                  <div className="offer-detail">
                    <div>
                      <Link to="/product" className="text-title">
                        <h6 className="name">Green Chilli</h6>
                      </Link>
                      <span>200 G</span>
                      <h6 className="price theme-color">$ 10.00</h6>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="offer-product">
                  <Link to="/product" className="offer-image">
                    <img
                      src="../../assets/images/vegetable/product/14.png"
                      className=" lazyload"
                      alt=""
                    />
                  </Link>
                  <div className="offer-detail">
                    <div>
                      <Link to="/product" className="text-title">
                        <h6 className="name">Muffets Burger Bun</h6>
                      </Link>
                      <span>150 G</span>
                      <h6 className="price theme-color">$ 10.00</h6>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul className="product-list">
              <li>
                <div className="offer-product">
                  <Link to="/product" className="offer-image">
                    <img
                      src="../../assets/images/vegetable/product/15.png"
                      className=" lazyload"
                      alt=""
                    />
                  </Link>
                  <div className="offer-detail">
                    <div>
                      <Link to="/product" className="text-title">
                        <h6 className="name">Tuffets Britannia Cheezza</h6>
                      </Link>
                      <span>500 G</span>
                      <h6 className="price theme-color">$ 10.00</h6>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="offer-product">
                  <Link to="/product" className="offer-image">
                    <img
                      src="../../assets/images/vegetable/product/16.png"
                      className=" lazyload"
                      alt=""
                    />
                  </Link>
                  <div className="offer-detail">
                    <div>
                      <Link to="/product" className="text-title">
                        <h6 className="name">Long Life Toned Milk</h6>
                      </Link>
                      <span>1 L</span>
                      <h6 className="price theme-color">$ 10.00</h6>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="offer-product">
                  <Link to="/product" className="offer-image">
                    <img
                      src="../../assets/images/vegetable/product/17.png"
                      className=" lazyload"
                      alt=""
                    />
                  </Link>
                  <div className="offer-detail">
                    <div>
                      <Link to="/product" className="text-title">
                        <h6 className="name">Organic Tomato</h6>
                      </Link>
                      <span>1 KG</span>
                      <h6 className="price theme-color">$ 10.00</h6>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="offer-product">
                  <Link to="/product" className="offer-image">
                    <img
                      src="../../assets/images/vegetable/product/18.png"
                      className=" lazyload"
                      alt=""
                    />
                  </Link>
                  <div className="offer-detail">
                    <div>
                      <Link to="/product" className="text-title">
                        <h6 className="name">Organic Jam</h6>
                      </Link>
                      <span>150 G</span>
                      <h6 className="price theme-color">$ 10.00</h6>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul className="product-list">
              <li>
                <div className="offer-product">
                  <Link to="/product" className="offer-image">
                    <img
                      src="../../assets/images/vegetable/product/19.png"
                      className=" lazyload"
                      alt=""
                    />
                  </Link>
                  <div className="offer-detail">
                    <div>
                      <Link to="/product" className="text-title">
                        <h6 className="name">
                          Good Life Refined Sunflower Oil
                        </h6>
                      </Link>
                      <span>1 L</span>
                      <h6 className="price theme-color">$ 10.00</h6>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="offer-product">
                  <Link to="/product" className="offer-image">
                    <img
                      src="../../assets/images/vegetable/product/20.png"
                      className=" lazyload"
                      alt=""
                    />
                  </Link>
                  <div className="offer-detail">
                    <div>
                      <Link to="/product" className="text-title">
                        <h6 className="name">Good Life Raw Peanuts</h6>
                      </Link>
                      <span>500 G</span>
                      <h6 className="price theme-color">$ 10.00</h6>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="offer-product">
                  <Link to="/product" className="offer-image">
                    <img
                      src="../../assets/images/vegetable/product/21.png"
                      className=" lazyload"
                      alt=""
                    />
                  </Link>
                  <div className="offer-detail">
                    <div>
                      <Link to="/product" className="text-title">
                        <h6 className="name">TufBest Farms Moong Dal</h6>
                      </Link>
                      <span>1 KG</span>
                      <h6 className="price theme-color">$ 10.00</h6>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="offer-product">
                  <Link to="/product" className="offer-image">
                    <img
                      src="../../assets/images/vegetable/product/22.png"
                      className=" lazyload"
                      alt=""
                    />
                  </Link>
                  <div className="offer-detail">
                    <div>
                      <Link to="/product" className="text-title">
                        <h6 className="name">Frooti Mango Drink</h6>
                      </Link>
                      <span>160 ML</span>
                      <h6 className="price theme-color">$ 10.00</h6>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default BestSeller;
