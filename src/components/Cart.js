import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Header";
import Footer from "./Footer";
import { ApplyCoupan, CartList, DeleteCartProduct } from "./HttpServices";
import LocationModel from "./LocationModel";
import DealBoxModel from "./DealBoxModel";
import TapToTop from "./TapToTop";

function Cart() {
  const [cartListItems, setCartListItems] = useState([]);
  const [coupan, setCoupan] = useState([]);
  const [coupanCode, setCoupanCode] = useState("25753411");
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const { data, error } = await CartList();
      error ? console.log(error) : console.log(data);
      setCartListItems(data.results.list);
      console.log(data.results.list);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const { data, error } = await ApplyCoupan(coupanCode);
      error ? console.log(error) : console.log(data);
      setCoupan(data.results);
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCartItem = (_id) => {
    alert(_id);
    deleteData(_id);
  };
  const deleteData = async (_id) => {
    try {
      const { data, error } = await DeleteCartProduct(_id);
      error ? console.log(error) : console.log(data);
      setCartListItems((prevCartList) =>
        prevCartList.filter((item) => item._id !== _id)
      );
      console.log(data.results.deleteDta);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("coupan", coupan);
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
                <h2>Cart</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/index">
                        <i className="fa-solid fa-house" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Cart
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}
      {/* Cart Section Start */}
      <section className="cart-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-5 g-3">
            <div className="col-xxl-9">
              <div className="cart-table">
                <div className="table-responsive-xl">
                  <table className="table">
                    <tbody>
                      {cartListItems.map((item, index) => {
                        return (
                          <tr className="product-box-contain" key={index}>
                            <td className="product-detail">
                              <div className="product border-0">
                                <Link to="/product" className="product-image">
                                  <img
                                    src={item?.products?.map(
                                      (product) =>
                                        product?.product_Id?.product_Pic[0]
                                    )}
                                    className="img-fluid  lazyload"
                                    alt=""
                                  />
                                </Link>
                                <div className="product-detail">
                                  <ul>
                                    <li className="name">
                                      {item?.products?.map((product) => (
                                        <Link
                                          to={`/product`}
                                        >
                                          {product?.product_Id?.productName}
                                        </Link>
                                      ))}
                                    </li>
                                    <li className="text-content">
                                      <span className="text-title">
                                        Sold By:
                                      </span>{" "}
                                      Fresho
                                    </li>
                                    <li className="text-content">
                                      <span className="text-title">
                                        Quantity
                                      </span>{" "}
                                      - 500 g
                                    </li>
                                    <li className="quantity-price-box">
                                      <div className="cart_qty">
                                        <div className="input-group">
                                          <button
                                            type="button"
                                            className="btn qty-left-minus"
                                            data-type="minus"
                                            data-field=""
                                          >
                                            <i
                                              className="fa fa-minus ms-0"
                                              aria-hidden="true"
                                            />
                                          </button>
                                          <input
                                            className="form-control input-number qty-input"
                                            type="text"
                                            name="quantity"
                                            defaultValue={0}
                                          />
                                          <button
                                            type="button"
                                            className="btn qty-right-plus"
                                            data-type="plus"
                                            data-field=""
                                          >
                                            <i
                                              className="fa fa-plus ms-0"
                                              aria-hidden="true"
                                            />
                                          </button>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <h5>Total: $35.10</h5>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                            <td className="price">
                              <h4 className="table-title text-content">
                                Price
                              </h4>
                              <h5>
                              ${item?.products?.map((product) => (product?.product_Id?.Price))}{" "}
                                <del className="text-content"> ${item?.products?.map((product) => (product?.product_Id?.oldPrice))}{" "}</del>
                              </h5>
                              <h6 className="theme-color"> ${item?.products?.map((product) => (product?.product_Id?.Discount))}{" "}</h6>
                            </td>
                            <td className="quantity">
                              <h4 className="table-title text-content">Qty</h4>
                              <div className="quantity-price">
                                <div className="cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
                                      data-type="minus"
                                      data-field=""
                                      onClick={() => {
                                        setCount(count - 1);
                                      }}
                                    >
                                      <i
                                        className="fa fa-minus ms-0"
                                        aria-hidden="true"
                                      />
                                    </button>
                                    <input
                                      className="form-control input-number qty-input"
                                      type="text"
                                      name="quantity"
                                      defaultValue=""
                                    />{" "}
                                    <strong className="mt-2 me-1">
                                      {" "}
                                      {count}
                                    </strong>{" "}
                                    <button
                                      type="button"
                                      className="btn qty-right-plus"
                                      data-type="plus"
                                      data-field=""
                                      onClick={() => {
                                        setCount(count + 1);
                                      }}
                                    >
                                      <i
                                        className="fa fa-plus ms-0"
                                        aria-hidden="true"
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="subtotal">
                              <h4 className="table-title text-content">
                                Total
                              </h4>
                              <h5>${item?.cartsTotal}</h5>
                            </td>
                            <td className="save-remove">
                              <h4 className="table-title text-content">
                                Action
                              </h4>
                              <Link className="save notifi-wishlist" to="#">
                                Save for later
                              </Link>
                              <Link
                                className="remove close_button"
                                to="#"
                                onClick={() => deleteCartItem(item._id)}
                                // onClick={() => deleteCartItem(item?.products?.map((product) => product?.product_Id?._id))}
                              >
                                Remove
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-xxl-3">
              <div className="summery-box p-sticky">
                <div className="summery-header">
                  <h3>Cart Total</h3>
                </div>
                <div className="summery-contain">
                  <div className="coupon-cart">
                    <h6 className="text-content mb-2">Coupon Apply</h6>
                    <div className="mb-3 coupon-box input-group">
                      <input
                        type="email"
                        className="form-control"
                        id="coupanCode"
                        name="coupanCode"
                        placeholder="Enter Coupon Code Here..."
                        value={coupanCode}
                        onChange={(e) => setCoupanCode(e.target.value)}
                      />
                      <button className="btn-apply">Apply</button>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <h4>Subtotal</h4>
                      <h4 className="price">${coupan.subtotal} </h4>
                    </li>
                    <li>
                      <h4>Coupon Discount</h4>
                      <h4 className="price"> - {coupan.DiscountType} </h4>
                    </li>
                    <li className="align-items-start">
                      <h4>Shipping</h4>
                      <h4 className="price text-end">$6.90</h4>
                    </li>
                  </ul>
                </div>
                <ul className="summery-total">
                  <li className="list-total border-top-0">
                    <h4>Total (USD)</h4>
                    <h4 className="price theme-color">
                      ${coupan && coupan.cartsTotalSum}
                    </h4>
                  </li>
                </ul>
                <div className="button-group cart-button">
                  <ul>
                    <li>
                      <button
                        onClick={() => {
                          window.location.href = "/check-out";
                        }}
                        className="btn btn-animation proceed-btn fw-bold"
                      >
                        Process To Checkout
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          window.location.href = "/index";
                        }}
                        className="btn btn-light shopping-button text-dark"
                      >
                        <i className="fa-solid fa-arrow-left-long" />
                        Return To Shopping
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cart Section End */}
      {/* Footer Section Start */}
      <Footer />
      {/* Footer Section End */}
      {/* Location Modal Start */}
      <LocationModel />
      {/* Location Modal End */}
      {/* Deal Box Modal Start */}
      <DealBoxModel />
      {/* Deal Box Modal End */}
      {/* Tap to top start */}
      <TapToTop />
      {/* Tap to top end */}
      {/* Bg overlay Start */}
      <div className="bg-overlay" />
    </>
  );
}

export default Cart;
