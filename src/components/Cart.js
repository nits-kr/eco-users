import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import Footer from "./Footer";
import DealBoxModel from "./DealBoxModel";
import TapToTop from "./TapToTop";
import {
  useApplyCoupan2Mutation,
  useDeleteCartItemsMutation,
  useGetCartListQuery,
  useGetCartListheaderMutation,
  useProceedToPayMutation,
} from "../services/Post";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateQuantityMutation } from "../services/Post";
import { useAddToWislistListMutation } from "../services/Post";
import { useApplyCoupanMutation } from "../services/Post";
import { addToCart, getAllCart } from "../app/slice/CartSlice";
import { Spinner } from "react-bootstrap";
import {
  setCoupanIdlocal,
  setPayType,
  setPaymentData,
  setvarientId,
} from "../app/slice/localSlice";

function Cart() {
  const [loader, setLoader] = useState(false);
  const [loadings, setLoadings] = useState(false);
  const [loadingItems, setLoadingItems] = useState({});
  const [total, setTotal] = useState("");
  const [isQuantityChanging, setIsQuantityChanging] = useState(false);
  const [loadingItemsd, setLoadingItemsd] = useState({});
  const ecommercetoken = useSelector((data) => data?.local?.ecomWebtoken);
  const ecomUserId = useSelector((data) => data?.local?.ecomUserid);
  const [cartListQuery] = useGetCartListheaderMutation();

  const [deletecart] = useDeleteCartItemsMutation();
  const [proceedToPay] = useProceedToPayMutation();
  const [coupanId, setCoupanId] = useState("");

  const [cartListItems, setCartListItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  console.log("cartTotal", cartTotal);

  const [updateQuantity] = useUpdateQuantityMutation();

  const cart = useSelector((state) => state?.cart?.carts);

  const dispatch = useDispatch();

  localStorage?.setItem("cartTotal", cartTotal);
  const navigate = useNavigate();

  const [coupanresponse, setCoupanresponse] = useState("");

  localStorage?.setItem("coupanresponse", coupanresponse);
  const handleIncrement = (id) => {
    setCartListItems((prevCartListItems) => {
      return prevCartListItems.map((item) =>
        id === item?._id
          ? {
              ...item,
              quantity: item?.quantity + 1,
              products: [
                {
                  ...item,
                  quantity: item?.quantity + 1,
                },
              ],
            }
          : item
      );
    });
    const item = cartListItems.find((item) => item?._id === id);
    if (item) {
      toast.info(
        <>
          Increased quantity of{" "}
          <strong>{item?.product_Id?.productName_en}</strong>
        </>,
        {
          position: "bottom-left",
        }
      );
    }
    HandleIncrease(id);
  };
  const handleDecrement = (id) => {
    setCartListItems((prevCartListItems) => {
      return prevCartListItems.map((item) =>
        id === item?._id
          ? {
              ...item,
              quantity: item?.quantity - 1,
              products: [
                {
                  ...item,
                  quantity: item?.quantity - 1,
                },
              ],
            }
          : item
      );
    });
    const item = cartListItems.find((item) => item?._id === id);
    if (item) {
      toast.info(
        <>
          Decreased quantity of{" "}
          <strong>{item?.product_Id?.productName_en}</strong>
        </>,
        {
          position: "bottom-left",
        }
      );
    }
    HandleDecrease(id);
  };
  const HandleIncrease = async (id) => {
    console.log("HandleIncrease", id);
    const formData = {
      varient_Id: id,
      type: "Add",
      ecommercetoken: ecommercetoken,
    };

    setIsQuantityChanging(true);

    setLoadingItems((prevState) => ({
      ...prevState,
      [id]: true,
    }));

    try {
      const response = await updateQuantity(formData);
      if (response) {
        handleCartList();
        setLoadingItems((prevState) => ({
          ...prevState,
          [id]: false,
        }));
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
      setLoadingItems((prevState) => ({
        ...prevState,
        [id]: false,
      }));
    } finally {
      setIsQuantityChanging(false);
    }
  };

  const HandleDecrease = async (id) => {
    const formData = {
      varient_Id: id,
      type: "Sub",
      ecommercetoken: ecommercetoken,
    };

    setLoadingItemsd((prevState) => ({
      ...prevState,
      [id]: true,
    }));

    setIsQuantityChanging(true);

    try {
      const response = await updateQuantity(formData);
      if (response) {
        handleCartList();
        setLoadingItemsd((prevState) => ({
          ...prevState,
          [id]: false,
        }));
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
      setLoadingItemsd((prevState) => ({
        ...prevState,
        [id]: false,
      }));
    } finally {
      setIsQuantityChanging(false);
    }
  };

  useEffect(() => {
    if (ecomUserId) {
      handleCartList(ecomUserId);
    }
  }, [ecomUserId]);

  const handleCartList = async () => {
    if (isQuantityChanging) {
      window?.scrollTo(0, 0);
    }
    const datas = {
      ecomUserId,
      ecommercetoken,
    };

    try {
      const respone = await cartListQuery(datas);

      console.log("respone cart", respone);

      setCartListItems(respone?.data?.results?.cart?.products?.[0]?.products);
      setTotal(respone?.data?.results?.cart?.calculateTotal?.[0]);
    } catch (error) {
      console.log(error);
    }
  };

  let totalSubtotal = 0;
  cartListItems
    ?.slice()
    ?.reverse()
    ?.forEach((item) => {
      const subtotal = (item?.varient?.Price || 0) * (item?.quantity || 1);
      totalSubtotal += subtotal;
    });

  localStorage?.setItem("totalSubtotal", totalSubtotal);

  const deleteCartItem = async (id) => {
    try {
      const response = await deletecart({ ecommercetoken, id });

      if (response) {
        handleCartList();
        toast?.success("Product has been removed from the Cart!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    feather.replace();
  }, []);

  const handleShopping = () => {
    navigate("/shop");
  };

  const handlePay = async (e, item) => {
    if (item) {
      dispatch(setPayType("Single"));
      dispatch(setvarientId(item?.varient_Id));
    } else {
      dispatch(setPayType(""));
    }
    e.preventDefault();

    const data = {
      ...(coupanId && { couponId: coupanId }),
      ...(item?.varient_Id && { varient_Id: item?.varient_Id }),
      type: item ? "Single" : "All",
      ...(ecommercetoken && { ecommercetoken: ecommercetoken }),
    };
    setLoader(item ? false : true);
    setLoadings(item ? true : false);
    const res = await proceedToPay(data);
    console.log("res payment", res);
    if (res) {
      navigate(item ? "/check-outall" : "/check-outall");
      dispatch(setPaymentData(res?.data?.results?.cart?.calculateTotal[0]));
      setCartTotal(res?.data?.results?.cart?.calculateTotal[0]);
    }
    setLoader(false);
    setLoadings(false);
  };

  return (
    <>
      <Header />
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

      <section className="cart-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-5 g-3">
            <div
              className={`col-xxl-${
                cartListItems && cartListItems.length > 0 ? "12" : "12"
              }`}
            >
              {cartListItems?.length > 0 ? (
                <div className="cart-table">
                  <div className="table-responsive-xl">
                    <table className="table" style={{ marginLeft: "-21px" }}>
                      <tbody>
                        {cartListItems
                          ?.slice()
                          ?.reverse()
                          ?.map((item, index) => {
                            const subtotal =
                              (item?.varient?.Price || 0) *
                              (item?.quantity || 1);

                            return (
                              <tr className="product-box-contain" key={index}>
                                <td className="product-detail">
                                  <div className="product border-0">
                                    <Link
                                      to={`/product-details-page/${item?.productId?._id}`}
                                      className="product-image"
                                    >
                                      <img
                                        src={item?.product_Pic[0]}
                                        className="img-fluid  lazyload"
                                        alt=""
                                      />
                                    </Link>
                                    <div className="product-detail">
                                      <ul>
                                        <li className="name">
                                          <Link to={`/product`}>
                                            <strong>
                                              {item?.productId?.productName_en
                                                ?.split(" ")
                                                ?.slice(0, 3)
                                                ?.join(" ")}
                                            </strong>
                                          </Link>
                                        </li>
                                        <li className="text-content">
                                          <span className="text-title">
                                            Sold By:
                                          </span>{" "}
                                          Fresho
                                        </li>
                                        <li className="text-content">
                                          <span className="text-title">
                                            SKU :
                                          </span>{" "}
                                          {item?.SKU}
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
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
                                            {item?.quantity === 1 ? (
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
                                                      item?.varient_Id
                                                    )
                                                  }
                                                  disabled={
                                                    loadingItemsd[
                                                      item?.varient_Id
                                                    ] || item?.quantity === 1
                                                  }
                                                >
                                                  {loadingItemsd[
                                                    item?.varient_Id
                                                  ] ? (
                                                    <Spinner />
                                                  ) : (
                                                    <i
                                                      className="fa fa-minus ms-0"
                                                      aria-hidden="true"
                                                    />
                                                  )}
                                                </button>
                                              </div>
                                            )}
                                            <div>{item?.quantity}</div>
                                            <div>
                                              <button
                                                type="button"
                                                className="btn qty-right-plus ms-2"
                                                data-type="plus"
                                                data-field=""
                                                onClick={() =>
                                                  HandleIncrease(
                                                    item?.varient_Id
                                                  )
                                                }
                                                disabled={
                                                  loadingItems[
                                                    item?.varient_Id
                                                  ] ||
                                                  item?.quantity ===
                                                    item?.stockQuantity
                                                }
                                              >
                                                {loadingItems[
                                                  item?.varient_Id
                                                ] ? (
                                                  <Spinner />
                                                ) : (
                                                  <i
                                                    className="fa fa-plus ms-0"
                                                    aria-hidden="true"
                                                  />
                                                )}
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

                                  <h5>${item?.Price}</h5>
                                </td>
                                <td className="save-remove">
                                  <h3
                                    className="table-title text-content"
                                    style={{
                                      display: "flex",
                                      textAlign: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <strong>Action</strong>
                                  </h3>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <button
                                      className="btn btn-animation proceed-btn fw-bold me-2"
                                      style={{
                                        height: "35px",
                                        width: "35px",
                                        cursor: loadings
                                          ? "not-allowed"
                                          : "pointer",
                                      }}
                                      onClick={(e) => {
                                        if (!loadings) {
                                          handlePay(e, item);
                                        }
                                      }}
                                    >
                                      Buy
                                    </button>

                                    <Link
                                      to="#"
                                      className="btn btn-animation proceed-btn fw-bold"
                                      style={{ height: "35px", width: "35px" }}
                                      title4="Wishlist"
                                      onClick={() =>
                                        deleteCartItem(item?.cart_Id)
                                      }
                                    >
                                      <FontAwesomeIcon icon={faTrash} />
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
              ) : (
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <img
                    src="../assets/images/emptycart.webp"
                    className="img-fluid  lazyload "
                    alt=""
                    height={500}
                    width={500}
                  />
                  <div className="d-flex align-items-center justify-content-center mt-3">
                    <h2>
                      <strong>Your Cart Is Empty</strong>
                    </h2>
                  </div>
                  <Link
                    to="/shop"
                    className=" btn btn-animation proceed-btn fw-bold d-flex align-items-center justify-content-center mt-3"
                  >
                    Shop Now
                  </Link>
                </div>
              )}
            </div>
            <div
              className="button-group cart-button d-flex justify-content-between"
              style={{ display: cartListItems?.length > 0 ? "" : "none" }}
            >
              <button
                onClick={(e) => {
                  handleShopping(e);
                }}
                className="btn btn-light shopping-button text-dark w-25 mt-3"
                style={{ backgroundColor: "#f8f9fa", height: "50px" }}
              >
                <i className="fa-solid fa-arrow-left-long me-2" />
                Return To Shopping
              </button>
              <button
                className="btn btn-animation proceed-btn fw-bold mt-3 w-25"
                onClick={(e) => handlePay(e)}
              >
                {loader ? (
                  <Spinner />
                ) : (
                  <span>
                    Process To Checkout
                    <i className="fa-solid fa-arrow-right-long ms-2" />
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <DealBoxModel />

      <TapToTop />

      <div className="bg-overlay" />
    </>
  );
}

export default Cart;
