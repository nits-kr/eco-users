import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function CategoryTop() {
  var w = window.innerWidth;
  var settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: w > 500 ? 6 : 1,
    autoplay: true,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="wow fadeInUp">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="slider-7_1 no-space shop-box no-arrow">
                <Slider {...settings1}>
                  <div>
                    <div className="shop-category-box">
                      <Link to="/shop">
                        <div className="shop-category-image">
                          <img
                            src="../assets/svg/1/vegetable.svg"
                            className=" lazyload"
                            alt=""
                          />
                        </div>
                        <div className="category-box-name">
                          <h6>Vegetables &amp; Fruit</h6>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="shop-category-box">
                      <Link to="/shop">
                        <div className="shop-category-image">
                          <img
                            src="../assets/svg/1/cup.svg"
                            className=" lazyload"
                            alt=""
                          />
                        </div>
                        <div className="category-box-name">
                          <h6>Beverages</h6>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="shop-category-box">
                      <Link to="/shop">
                        <div className="shop-category-image">
                          <img
                            src="../assets/svg/1/meats.svg"
                            className=" lazyload"
                            alt=""
                          />
                        </div>
                        <div className="category-box-name">
                          <h6>Meats &amp; Seafood</h6>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="shop-category-box">
                      <Link to="/shop">
                        <div className="shop-category-image">
                          <img
                            src="../assets/svg/1/breakfast.svg"
                            className=" lazyload"
                            alt=""
                          />
                        </div>
                        <div className="category-box-name">
                          <h6>Breakfast</h6>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="shop-category-box">
                      <Link to="/shop">
                        <div className="shop-category-image">
                          <img
                            src="../assets/svg/1/frozen.svg"
                            className=" lazyload"
                            alt=""
                          />
                        </div>
                        <div className="category-box-name">
                          <h6>Frozen Foods</h6>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="shop-category-box">
                      <Link to="/shop">
                        <div className="shop-category-image">
                          <img
                            src="../assets/svg/1/milk.svg"
                            className=" lazyload"
                            alt=""
                          />
                        </div>
                        <div className="category-box-name">
                          <h6>Milk &amp; Dairies</h6>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="shop-category-box">
                      <Link to="/shop">
                        <div className="shop-category-image">
                          <img
                            src="../assets/svg/1/pet.svg"
                            className=" lazyload"
                            alt=""
                          />
                        </div>
                        <div className="category-box-name">
                          <h6>Pet Food</h6>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="shop-category-box">
                      <Link to="/shop">
                        <div className="shop-category-image">
                          <img
                            src="../assets/svg/1/biscuit.svg"
                            className=" lazyload"
                            alt=""
                          />
                        </div>
                        <div className="category-box-name">
                          <h6>Biscuits &amp; Snacks</h6>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="shop-category-box">
                      <Link to="/shop">
                        <div className="shop-category-image">
                          <img
                            src="../assets/svg/1/grocery.svg"
                            className=" lazyload"
                            alt=""
                          />
                        </div>
                        <div className="category-box-name">
                          <h6>Grocery &amp; Staples</h6>
                        </div>
                      </Link>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CategoryTop;
