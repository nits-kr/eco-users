import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import Footer from "./Footer";
import { ApplyCoupan, CartList, DeleteCartProduct } from "./HttpServices";
import LocationModel from "./LocationModel";
import DealBoxModel from "./DealBoxModel";
import TapToTop from "./TapToTop";
import { useGetCartListQuery } from "../services/Post";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateQuantityMutation } from "../services/Post";
import {
  increment,
  decrement,
  selectCartCount,
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../app/slice/CartSlice";
import { useAddToWislistListMutation } from "../services/Post";
// import { selectCartCount } from "../app/slice/CartSlice";
import { useAddToCartMutation } from "../services/Post";
import { AddToCart } from "./HttpServices";

function Cart() {
  const [cartListItems, setCartListItems] = useState([]);
  const [wishAdd, response] = useAddToWislistListMutation();
  const [updateQuantity, respons] = useUpdateQuantityMutation();
  const [addItem, res] = useAddToCartMutation();
  const [coupan, setCoupan] = useState([]);
  const [coupanCode, setCoupanCode] = useState("25753411");
  const [CreateWishItems, setCreateWishItems] = useState([]);
  const [count, setCount] = useState(1);

  // const handleCountChange = (index, newCount) => {
  //   const newCounts = [...count1];
  //   newCounts[index] = newCount >= 0 ? newCount : 0;
  //   setCount1(newCounts);
  // };
  // console.log(count1);
  const coupanCode2 = coupanCode || "";
  const {
    data: cartListQuery,
    error,
    isLoading,
    isSuccess,
  } = useGetCartListQuery();
  console.log(cartListQuery);
  const dispatch = useDispatch();
  const counts = useSelector(selectCartCount);
  const cart = useSelector((state) => state.cart);
  localStorage?.setItem("cartTotal", coupan?.cartsTotalSum);
  console.log(cart);

  const [count1, setCount1] = useState();
  console.log("count1", count1);
  const HandleDecrease = async (product, id, index) => {
    if (product?.products[0]?.quantity > 1) {
      const formData = {
        id: id,
        quantity: product?.products[0]?.quantity - 1,
      };
      console.log(id);
      console.log("product qu", product?.products[0]?.quantity);
      const { data } = await updateQuantity(formData);
      console.log(data);
      if (!data.error) {
        fetchCartListData();
        setCount1(!count1);
      }
    }
  };
  const HandleIncrease = async (product, id, index) => {
    if (product?.products[0]?.quantity > 1) {
      const formData = {
        id: id,
        quantity: product?.products[0]?.quantity + 1,
      };
      console.log(id);
      console.log("product qu", product?.products[0]?.quantity);
      const { data } = await updateQuantity(formData);
      console.log(data);
      if (!data.error) {
        fetchCartListData();
        setCount1(!count1);
      }
    }
  };
  // const HandleIncrease = async (product, id) => {
  //   if (product.quantity > 1) {
  //     const formData = {
  //       id: id,
  //       quantity: product.quantity + 1,
  //     };

  //     const { data } = await updateQuantity(formData);
  //     console.log(data);
  //   }
  // };

  console.log("cartlist item", cartListItems);

  const fetchCartListData = () => {
    if (isSuccess) {
      setCartListItems(cartListQuery?.results?.list);
    }
  };
  useEffect(() => {
    fetchCartListData();
  }, [cartListQuery, count1]);

  useEffect(() => {
    handleCoupan();
  }, []);

  const handleCoupan = async () => {
    try {
      const { data, error } = await ApplyCoupan(coupanCode2);
      error ? console.log(error) : console.log(data);
      setCoupan(data.results);
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCartItem = async (_id) => {
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
  const handleWishClick = async (item) => {
    try {
      const editAddress = {
        product_Id: item?.products[0]?.product_Id?._id,
        like: true,
      };
      console.log(item?._id);
      const { data, error } = await wishAdd(editAddress);
      if (error) {
        console.log(error);
        return;
      }
      const newCreateWishItems = [...CreateWishItems, data];
      setCreateWishItems(newCreateWishItems);
      setTimeout(() => {
        window?.location?.reload();
      }, 500);
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
      <Header />
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
                      {cartListItems?.map((item, index) => {
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
                                      {item?.products?.map((product, index) => (
                                        <Link to={`/product`} key={index}>
                                          <strong>
                                            {
                                              product?.product_Id
                                                ?.productName_en
                                            }
                                          </strong>
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
                                $
                                {item?.products?.map(
                                  (product) => product?.product_Id?.Price
                                )}{" "}
                                <del className="text-content">
                                  {" "}
                                  $
                                  {item?.products?.map(
                                    (product) => product?.product_Id?.oldPrice
                                  )}{" "}
                                </del>
                              </h5>
                              <h6 className="theme-color">
                                {" "}
                                $
                                {item?.products?.map(
                                  (product) => product?.product_Id?.Discount
                                )}{" "}
                              </h6>
                            </td>
                            <td className="quantity">
                              <div className="quantity-price">
                                <div className="cart_qty">
                                  <div className="input-group">
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                      }}
                                    >
                                      <div className="table-title text-content">
                                        Qty
                                      </div>
                                      <div
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                          justifyContent: "space-between",
                                        }}
                                      >
                                        {" "}
                                        {item?.products[0]?.quantity === 1 ? (
                                          <div
                                            style={{
                                              cursor: "not-allowed",
                                            }}
                                          >
                                            <button
                                              type="button"
                                              className="btn qty-left-minus me-2"
                                              data-type="minus"
                                              data-field=""
                                              style={{
                                                filter: "blur(0.7px)",
                                                background: "lightgray",
                                                color: "darkgray",
                                              }}
                                              disabled
                                            >
                                              <i
                                                className="fa fa-minus ms-0"
                                                aria-hidden="true"
                                              />
                                            </button>
                                          </div>
                                        ) : (
                                          <div>
                                            <button
                                              type="button"
                                              className="btn qty-left-minus me-2"
                                              data-type="minus"
                                              data-field=""
                                              onClick={() =>
                                                HandleDecrease(
                                                  item,
                                                  item?._id,
                                                  index
                                                )
                                              }
                                            >
                                              <i
                                                className="fa fa-minus ms-0"
                                                aria-hidden="true"
                                              />
                                            </button>
                                          </div>
                                        )}
                                        <div>{item?.products[0]?.quantity}</div>
                                        <div>
                                          <button
                                            type="button"
                                            className="btn qty-right-plus ms-2"
                                            data-type="plus"
                                            data-field=""
                                            onClick={() =>
                                              HandleIncrease(item, item?._id)
                                            }
                                          >
                                            <i
                                              className="fa fa-plus ms-0"
                                              aria-hidden="true"
                                            />
                                          </button>
                                        </div>
                                      </div>
                                    </div>
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
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                {/* {item?.products[0]?.product_Id?.like === "false" ? <Link
                                  className="btn p-0 position-relative header-wishlist me-2"
                                  // to="/wishlist"
                                  title3="Wishlist"
                                  onClick={() => handleWishClick(item)}
                                >
                                  <FontAwesomeIcon
                                    icon={faHeart}
                                    style={{
                                      fontSize: "20px",
                                      color: "black",
                                    }}
                                    data-tip="Add to Wishlist"
                                    data-for="wishlist-tooltip"
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.color = "red";
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.color = "black";
                                    }}
                                  />
                                </Link> : <Link
                                  className="btn p-0 position-relative header-wishlist me-2"
                                  to="#"
                                  title3="Wishlist"
                                  disabled
                                >
                                  <FontAwesomeIcon
                                    icon={faHeart}
                                    style={{
                                      fontSize: "20px",
                                      color: "red",
                                    }}
                                    data-tip="Add to Wishlist"
                                    data-for="wishlist-tooltip"
                                  />
                                </Link>} */}
                                <Link
                                  className="btn p-0 position-relative header-wishlist me-2"
                                  to="/wishlist"
                                  title3="Wishlist"
                                  onClick={() => handleWishClick(item)}
                                >
                                  <FontAwesomeIcon
                                    icon={faHeart}
                                    style={{
                                      fontSize: "20px",
                                      color: "black",
                                    }}
                                    data-tip="Add to Wishlist"
                                    data-for="wishlist-tooltip"
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.color = "red";
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.color = "black";
                                    }}
                                  />
                                </Link>
                                <Link
                                  className="btn p-0 position-relative header-wishlist ms-2"
                                  to="#"
                                  title4="Wishlist"
                                  onClick={() => deleteCartItem(item._id)}
                                >
                                  <FontAwesomeIcon
                                    icon={faTrash}
                                    style={{ color: "#fa0000" }}
                                  />
                                </Link>
                              </div>
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
                        type="text"
                        className="form-control"
                        id="coupanCode"
                        name="coupanCode"
                        placeholder="Enter Coupon Code Here..."
                        value={coupanCode}
                        onChange={(e) => setCoupanCode(e.target.value)}
                      />
                      <button
                        className="btn-apply"
                        onClick={() => handleCoupan()}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <h4>Subtotal</h4>
                      <h4 className="price">${coupan.subtotal} </h4>
                    </li>
                    <li>
                      <h4>Coupon Discount</h4>
                      <h4 className="price"> - ${coupan.DiscountType} </h4>
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
                      ${coupan && coupan?.cartsTotalSum}
                    </h4>
                  </li>
                </ul>
                <div className="button-group cart-button">
                  <ul>
                    <li>
                      <Link
                        to="/check-out"
                        className="btn btn-animation proceed-btn fw-bold"
                      >
                        Process To Checkout
                      </Link>
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
