import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Header";
import Footer from "./Footer";
import { CompareList } from "./HttpServices";
import { useGetCompareListQuery } from "../services/Post";
import { useDeleteCompareMutation } from "../services/Post";
import { useAddToCartMutation } from "../services/Post";
function Compare() {
  const [deleteCompare, responseInfo] = useDeleteCompareMutation();
  // const [itemId, setItemId] = useState("")
  // const [quantity, setQuantity] = useState("")
  const compareItems = useGetCompareListQuery();
  const [addToCart] = useAddToCartMutation();
  console.log("Compare items", compareItems);
  const handleSaveChanges = (id, stockQuantity) => {
    const newAddress = {
      carts: [
        {
          product_Id: id,
          quantity: stockQuantity,
        },
      ],
    };
    addToCart(newAddress);
  };
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <>
      {/* Loader End */}
      {/* Header Start */}
      <Header />
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
                <h2 className="mb-2">Compare</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/index">
                        <i className="fa-solid fa-house" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item">Shop</li>
                    <li className="breadcrumb-item active">Compare</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}
      {/* Compare Section Start */}
      <section className="compare-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table compare-table">
                  <tbody>
                    <tr>
                      <th>Product</th>
                      {compareItems?.data?.results?.comparelist?.map(
                        (item, index) => {
                          return (
                            <td key={index}>
                              <Link className="text-title" to="/product">
                                {item?.product_Id?.productName}
                              </Link>
                            </td>
                          );
                        }
                      )}
                    </tr>
                    <tr>
                      <th>Images</th>
                      {compareItems?.data?.results?.comparelist?.map(
                        (item, index) => {
                          return (
                            <td key={index}>
                              <Link to="/product" className="compare-image">
                                <img
                                  src={item?.product_Id?.product_Pic[0]}
                                  className="img-fluid  lazyload"
                                  alt=""
                                />
                              </Link>
                            </td>
                          );
                        }
                      )}
                    </tr>
                    <tr>
                      <th>Brand Name</th>
                      {compareItems?.data?.results?.comparelist?.map(
                        (item, index) => {
                          return (
                            <td className="text-content" key={index}>
                              {" "}
                              {item?.product_Id?.brandName}{" "}
                            </td>
                          );
                        }
                      )}
                    </tr>
                    <tr>
                      <th>Color</th>
                      {compareItems?.data?.results?.comparelist?.map(
                        (item, index) => {
                          return (
                            <td className="text-content" key={index}>
                              {item?.product_Id?.productColor}
                            </td>
                          );
                        }
                      )}
                    </tr>
                    <tr>
                      <th>Price</th>
                      {compareItems?.data?.results?.comparelist?.map(
                        (item, index) => {
                          return (
                            <td className="price text-content" key={index}>
                              ${item?.product_Id?.Price}{" "}
                            </td>
                          );
                        }
                      )}
                    </tr>
                    <tr>
                      <th>Availability</th>
                      {compareItems?.data?.results?.comparelist?.map(
                        (item, index) => {
                          const stockStatus =
                            item?.product_Id?.stockQuantity > 0
                              ? "In Stock"
                              : "Out Of Stock";
                          const backgroundColor =
                            stockStatus === "In Stock" ? "success" : "danger";
                          return (
                            <td key={index}>
                              <button
                                className={`btn btn-sm w-60 ms-4 align-items-center d-flex justify-content-center text-content text-light bg-${backgroundColor}`}
                              >
                                {stockStatus}
                              </button>
                            </td>
                          );
                        }
                      )}
                    </tr>
                    <tr>
                      <th>Rating</th>
                      {compareItems?.data?.results?.comparelist?.map(
                        (item, index) => {
                          return (
                            <td key={index}>
                              <div className="compare-rating">
                                <ul className="rating">
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                </ul>
                                <span className="text-content">
                                  {item?.product_Id?.totalRating}
                                </span>
                              </div>
                            </td>
                          );
                        }
                      )}
                    </tr>
                    <tr>
                      <th>Weight</th>
                      {compareItems?.data?.results?.comparelist?.map(
                        (item, index) => {
                          return (
                            <td className="text-content" key={index}>
                              {" "}
                              {item?.product_Id?.weight}{" "}
                            </td>
                          );
                        }
                      )}
                    </tr>
                    <tr>
                      <th>Purchase</th>
                      {compareItems?.data?.results?.comparelist?.map(
                        (item, index) => {
                          return (
                            <td key={index}>
                              <Link
                                to="/cart"
                                className="btn btn-animation btn-sm w-100"
                                onClick={() =>
                                  handleSaveChanges(
                                    item?.product_Id?._id,
                                    item?.product_Id?.stockQuantity
                                  )
                                }
                              >
                                Add To Cart
                              </Link>
                            </td>
                          );
                        }
                      )}
                    </tr>
                    <tr>
                      <th />
                      {compareItems?.data?.results?.comparelist?.map(
                        (item, index) => {
                          return (
                            <td key={index}>
                              <Link
                                to="#"
                                className="text-content remove_column"
                                onClick={() => {
                                  deleteCompare(item?._id);
                                }}
                              >
                                <i className="fa-solid fa-trash-can me-2" />{" "}
                                Remove
                              </Link>
                            </td>
                          );
                        }
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Compare Section End */}
      {/* Footer Section Start */}
      <Footer />
      {/* Footer Section End */}
      {/* Location Modal Start */}
      <div
        className="modal location-modal fade theme-modal"
        id="locationModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Choose your Delivery Location
              </h5>
              <p className="mt-1 text-content">
                Enter your address and we will specify the offer for your area.
              </p>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="modal-body">
              <div className="location-list">
                <div className="search-input">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search Your Area"
                  />
                  <i className="fa-solid fa-magnifying-glass" />
                </div>
                <div className="disabled-box">
                  <h6>Select a Location</h6>
                </div>
                <ul className="location-select custom-height">
                  <li>
                    <Link to="#">
                      <h6>Alabama</h6>
                      <span>Min: $130</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <h6>Arizona</h6>
                      <span>Min: $150</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <h6>California</h6>
                      <span>Min: $110</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <h6>Colorado</h6>
                      <span>Min: $140</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <h6>Florida</h6>
                      <span>Min: $160</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <h6>Georgia</h6>
                      <span>Min: $120</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <h6>Kansas</h6>
                      <span>Min: $170</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <h6>Minnesota</h6>
                      <span>Min: $120</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <h6>New York</h6>
                      <span>Min: $110</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <h6>Washington</h6>
                      <span>Min: $130</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Location Modal End */}
      {/* Deal Box Modal Start */}
      <div
        className="modal fade theme-modal deal-modal"
        id="deal-box"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h5 className="modal-title w-100" id="deal_today">
                  Deal Today
                </h5>
                <p className="mt-1 text-content">Recommended deals for you.</p>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="modal-body">
              <div className="deal-offer-box">
                <ul className="deal-offer-list">
                  <li className="list-1">
                    <div className="deal-offer-contain">
                      <Link to="/shop" className="deal-image">
                        <img
                          src="../assets/images/vegetable/product/10.png"
                          className=" lazyload"
                          alt=""
                        />
                      </Link>
                      <Link to="/shop" className="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </Link>
                    </div>
                  </li>
                  <li className="list-2">
                    <div className="deal-offer-contain">
                      <Link to="/shop" className="deal-image">
                        <img
                          src="../assets/images/vegetable/product/11.png"
                          className=" lazyload"
                          alt=""
                        />
                      </Link>
                      <Link to="/shop" className="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </Link>
                    </div>
                  </li>
                  <li className="list-3">
                    <div className="deal-offer-contain">
                      <Link to="/shop" className="deal-image">
                        <img
                          src="../assets/images/vegetable/product/12.png"
                          className=" lazyload"
                          alt=""
                        />
                      </Link>
                      <Link to="/shop" className="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </Link>
                    </div>
                  </li>
                  <li className="list-1">
                    <div className="deal-offer-contain">
                      <Link to="/shop" className="deal-image">
                        <img
                          src="../assets/images/vegetable/product/13.png"
                          className=" lazyload"
                          alt=""
                        />
                      </Link>
                      <Link to="/shop" className="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Deal Box Modal End */}
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
export default Compare;