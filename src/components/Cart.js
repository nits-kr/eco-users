import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import Footer from "./Footer";
import { ApplyCoupan, DeleteCartProduct, ApplyCoupan2 } from "./HttpServices";
import LocationModel from "./LocationModel";
import DealBoxModel from "./DealBoxModel";
import TapToTop from "./TapToTop";
import { useApplyCoupan2Mutation, useGetCartListQuery } from "../services/Post";
import { useSelector } from "react-redux";
import { useUpdateQuantityMutation } from "../services/Post";
import { useAddToWislistListMutation } from "../services/Post";
import { useApplyCoupanMutation } from "../services/Post";

function Cart() {
  const [applyCoupan, response] = useApplyCoupanMutation();
  const [applyCoupan2, response2] = useApplyCoupan2Mutation();
  console.log("applyCoupan", applyCoupan);
  const [cartListItems, setCartListItems] = useState([]);
  console.log("cartListItems", cartListItems);
  const [cartTotal, setCartTotal] = useState(0);
  localStorage?.setItem("cartId", cartListItems[0]?._id);
  const [cartCount, setCartCount] = useState([]);
  console.log("cartCount", cartCount);
  const [wishAdd] = useAddToWislistListMutation();
  const [updateQuantity] = useUpdateQuantityMutation();
  const [coupan, setCoupan] = useState([]);
  console.log("coupan", coupan);
  const [coupan2, setCoupan2] = useState([]);
  console.log("coupan2", coupan2);
  const [coupanCode, setCoupanCode] = useState("25753411");
  const [CreateWishItems, setCreateWishItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const coupanCode2 = coupanCode || "";
  const { data: cartListQuery, isSuccess } = useGetCartListQuery();
  const cart = useSelector((state) => state.cart);
  const [singleItemPrice, setSingleItemPrice] = useState([]);
  localStorage?.setItem("cartTotal", cartTotal);

  const [count1, setCount1] = useState();
  const handleIncrement = (id) => {
    setCartListItems((prevCartListItems) => {
      return prevCartListItems.map((item) =>
        id === item?._id
          ? {
              ...item,
              products: [
                {
                  ...item.products[0],
                  quantity: item.products[0]?.quantity + 1,
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
          <strong>{item.products[0]?.product_Id?.productName_en}</strong>
        </>,
        {
          position: "bottom-left",
        }
      );
    }
    HandleIncrease(id);
    applyCoupanCode();
  };
  const handleDecrement = (id) => {
    setCartListItems((prevCartListItems) => {
      return prevCartListItems.map((item) =>
        id === item?._id
          ? {
              ...item,
              products: [
                {
                  ...item.products[0],
                  quantity: item.products[0]?.quantity - 1,
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
          <strong>{item.products[0]?.product_Id?.productName_en}</strong>
        </>,
        {
          position: "bottom-left",
        }
      );
    }
    HandleDecrease(id);
    applyCoupanCode();
  };
  const HandleIncrease = async (id) => {
    console.log("HandleIncrease", id);
    const formData = {
      id: id,
      quantity: 1,
    };
    try {
      const { data } = await updateQuantity(formData);
      console.log(data);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };
  const HandleDecrease = async (id) => {
    console.log("HandleIncrease", id);
    const formData = {
      id: id,
      quantity: -1,
    };
    try {
      const { data } = await updateQuantity(formData);
      console.log(data);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  useEffect(() => {
    fetchCartListData();
  }, [cartListQuery, count1]);
  const fetchCartListData = () => {
    if (isSuccess) {
      const items = cartListQuery?.results?.list || [];
      // localStorage?.setItem("allCartItems", items);
      localStorage?.setItem(
        "allCartItems",
        encodeURIComponent(JSON.stringify(items))
      );
      let total = 0;
      items.forEach((item) => {
        if (item?.products && item.products.length > 0) {
          item.products.forEach((product) => {
            if (product.Price) {
              total += product.Price;
              // total += product.Price * (item.quantity || 1);
              setTotalPrice(total);
            }
          });
        }
      });

      setCartTotal(total);
      setCartListItems(items);
      console.log("total", total);
    }
  };

  // useEffect(() => {
  //   handleCoupan();
  // }, []);
  const applyCoupanCode = async () => {
    let cartList = [];

    cartList =
      cartListItems?.map((order) => ({
        product_Id: order?.products[0]?.product_Id?._id,
        quantity: order?.products[0]?.quantity,
        Price: order?.products[0]?.Price,
      })) || [];

    const newOrderData = {
      coupanCode: coupanCode2,
      carts: cartList,
      user_Id: userId,
    };

    try {
      const createNewOrder = await applyCoupan(newOrderData);
      let totalPrice = 0;
      createNewOrder?.data?.results.product.forEach((product) => {
        totalPrice += parseInt(product.Price);
        // totalPrice += parseInt(product.Price) * parseInt(product.quantity);
      });

      const discountPercentage =
        createNewOrder?.data?.results.DiscountType[0] || 0;
      const discountedPrice =
        totalPrice - (totalPrice * discountPercentage) / 100;

      setCoupan({
        ...createNewOrder?.data?.results,
        cartsTotalSum: discountedPrice || cartTotal,
      });
      console.log(createNewOrder);
      // setCoupan(createNewOrder?.data?.results);
    } catch (error) {
      console.error("An error occurred while placing the order.");
    }
  };
  const handlePrice = (item) => {
    setSingleItemPrice(item);
    localStorage?.setItem("buyItem", encodeURIComponent(JSON.stringify(item)));
    window.onbeforeunload = function () {
      // Remove the 'theme' item from local storage
      localStorage.removeItem("allCartItems");
    };
    console.log(item);
  };
  const handleCoupan2 = async (item, quantity, id) => {
    const newOrderData = {
      coupanCode: coupanCode2,
      carts: [{ product_Id: id, Price: item, quantity: quantity }],
      user_Id: userId,
    };

    try {
      const createNewOrder = await applyCoupan2(newOrderData);
      console.log("createNewOrder", createNewOrder);
      let totalPrice = 0;
      createNewOrder?.data?.results.product.forEach((product) => {
        totalPrice += parseInt(product.Price);
        // totalPrice += parseInt(product.Price) * parseInt(product.quantity);
      });

      const discountPercentage =
        createNewOrder?.data?.results.DiscountType[0] || 0;
      const discountedPrice =
        totalPrice - (totalPrice * discountPercentage) / 100;

      setCoupan2({
        ...createNewOrder?.data?.results,
        cartsTotalSum: discountedPrice || cartTotal,
      });
      // setCoupan2(createNewOrder?.data?.results);
    } catch (error) {
      console.error("An error occurred while placing the order.");
    }
  };

  const deleteCartItem = async (_id) => {
    try {
      const { data, error } = await DeleteCartProduct(_id);
      error ? console.log(error) : console.log(data);
      setCartListItems((prevCartList) =>
        prevCartList.filter((item) => item._id !== _id)
      );
      // console.log(data.results.deleteDta);
    } catch (error) {
      console.log(error);
    }
  };
  const userId = localStorage?.getItem("loginId");

  // console.log("coupan", coupan);
  useEffect(() => {
    feather.replace();
  }, []);

  // const checkoutUrl =
  //   coupan?.length !== 0
  //     ? `/check-out/${encodeURIComponent(
  //         JSON.stringify(coupan2.length !== 0 ? coupan2 : coupan)
  //       )}`
  //     : "/check-outall";
  const checkoutUrl =
    coupan2 && coupan2.length !== 0
      ? `/check-out/${encodeURIComponent(JSON.stringify(coupan2))}`
      : coupan && coupan.length !== 0
      ? `/check-out/${encodeURIComponent(JSON.stringify(coupan))}`
      : "/check-outall";

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
                  <table className="table" style={{ marginLeft: "-21px" }}>
                    <tbody>
                      {cartListItems
                        ?.slice()
                        ?.reverse()
                        ?.map((item, index) => {
                          return (
                            <tr className="product-box-contain" key={index}>
                              <td className="product-detail">
                                <div className="product border-0">
                                  <Link to="/product" className="product-image">
                                    <img
                                      src={
                                        item?.products[0]?.product_Id
                                          ?.addVarient[0]?.product_Pic[0]
                                      }
                                      className="img-fluid  lazyload"
                                      alt=""
                                    />
                                  </Link>
                                  <div className="product-detail">
                                    <ul>
                                      <li className="name">
                                        {item?.products?.map(
                                          (product, index) => (
                                            <Link to={`/product`} key={index}>
                                              <strong>
                                                {product?.product_Id?.productName_en?.slice(
                                                  0,
                                                  15
                                                )}
                                              </strong>
                                            </Link>
                                          )
                                        )}
                                      </li>
                                      <li className="text-content">
                                        <span className="text-title">
                                          Sold By:
                                        </span>{" "}
                                        Fresho
                                      </li>
                                      {/* <li className="text-content">
                                        <span className="text-title">
                                          Quantity
                                        </span>{" "}
                                        -{" "}
                                        {item?.products[0]?.product_Id?.weight}
                                      </li> */}
                                      {/* <li className="quantity-price-box">
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
                                      </li> */}
                                      {/* <li>
                                        <h5>Total: $35.10</h5>
                                      </li> */}
                                    </ul>
                                  </div>
                                </div>
                              </td>
                              {/* <td className="price">
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
                                  ${
                                    item?.products[0]?.product_Id?.Discount
                                  }{" "}
                                </h6>
                              </td> */}
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
                                                  handleDecrement(item?._id)
                                                }
                                              >
                                                <i
                                                  className="fa fa-minus ms-0"
                                                  aria-hidden="true"
                                                />
                                              </button>
                                            </div>
                                          )}
                                          <div>
                                            {item?.products[0]?.quantity}
                                          </div>
                                          <div>
                                            <button
                                              type="button"
                                              className="btn qty-right-plus ms-2"
                                              data-type="plus"
                                              data-field=""
                                              onClick={() =>
                                                handleIncrement(item?._id)
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
                                <h5>${item?.products[0]?.Price}</h5>
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
                                  }}
                                >
                                  <Link
                                    to="#"
                                    className="btn btn-animation proceed-btn fw-bold me-2"
                                    style={{ height: "35px", width: "35px" }}
                                    onClick={() => {
                                      // handleCoupan2(
                                      //   item,
                                      //   item?.products[0]?.quantity,
                                      //   item?.products[0]?.product_Id?._id
                                      // );
                                      handlePrice(item);
                                    }}
                                  >
                                    Buy
                                  </Link>
                                  <Link
                                    to="#"
                                    className="btn btn-animation proceed-btn fw-bold"
                                    style={{ height: "35px", width: "35px" }}
                                    title4="Wishlist"
                                    onClick={() => deleteCartItem(item._id)}
                                  >
                                    <FontAwesomeIcon
                                      icon={faTrash}
                                      // style={{ color: "#fa0000" }}
                                    />
                                  </Link>

                                  {/* <Link
                                  className="btn  p-0 position-relative header-wishlist ms-2"
                                  to="#"
                                  title4="Wishlist"
                                  onClick={() => deleteCartItem(item._id)}
                                >
                                  <FontAwesomeIcon
                                    icon={faTrash}
                                    style={{ color: "#fa0000" }}
                                  />
                                </Link> */}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <Link
                to="#"
                className="btn btn-animation proceed-btn fw-bold me-2 mt-2"
                style={{ height: "35px", width: "125px", marginLeft: "792px" }}
              >
                Buy All
              </Link> */}
            </div>
            <div className="col-xxl-3">
              <div className="summery-box p-sticky">
                <div className="summery-header">
                  <h3>Cart Total</h3>
                </div>
                <div className="summery-contain">
                  {singleItemPrice.length !== 0 ? (
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
                          onClick={() =>
                            handleCoupan2(
                              singleItemPrice?.products[0]?.Price,
                              singleItemPrice?.products[0]?.quantity,
                              singleItemPrice?.products[0]?.product_Id?._id
                            )
                          }
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  ) : (
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
                          onClick={() => applyCoupanCode()}
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  )}

                  {singleItemPrice.length !== 0 ? (
                    <ul>
                      <li>
                        <h4>Subtotal</h4>
                        <h4 className="price">
                          ${singleItemPrice?.products[0]?.Price}
                        </h4>
                      </li>
                      <li>
                        <h4>Coupon Discount</h4>
                        <h4 className="price"> - {coupan2.DiscountType} %</h4>
                      </li>
                    </ul>
                  ) : (
                    <ul>
                      <li>
                        <h4>Subtotal</h4>
                        <h4 className="price">
                          ${coupan?.subtotal || cartTotal}
                        </h4>
                      </li>
                      <li>
                        <h4>Coupon Discount</h4>
                        <h4 className="price"> - {coupan?.DiscountType} %</h4>
                      </li>
                    </ul>
                  )}

                  {/* <ul>
                    <li>
                      <h4>Subtotal</h4>
                      <h4 className="price">
                        $
                        {coupan2?.length !== 0
                          ? coupan2?.subtotal
                          : coupan?.subtotal}
                      </h4>
                    </li>
                    <li>
                      <h4>Coupon Discount</h4>
                      <h4 className="price">
                        {" "}
                        -{" "}
                        {coupan2?.length !== 0
                          ? coupan2?.DiscountType
                          : coupan?.DiscountType}{" "}
                        %
                      </h4>
                    </li>
                  </ul> */}
                </div>
                <ul className="summery-total">
                  <li className="list-total border-top-0">
                    <h4>Total (USD)</h4>
                    {/* {coupan !== 0 ? (
                      <h4 className="price theme-color">
                        $
                        {coupan?.cartsTotalSum
                          ? coupan?.cartsTotalSum
                          : cartTotal}
                      </h4>
                    ) : (
                      <h4 className="price theme-color">
                        $
                        {coupan2?.length !== 0
                          ? coupan2?.cartsTotalSum
                          : coupan?.cartsTotalSum}
                      </h4>
                    )} */}
                    {singleItemPrice?.length !== 0 ? (
                      <h4 className="price theme-color">
                        $
                        {coupan2.length !== 0
                          ? coupan2?.cartsTotalSum?.toFixed(2)
                          : singleItemPrice?.products[0]?.Price}
                      </h4>
                    ) : (
                      <h4 className="price theme-color">
                        $
                        {coupan2.length !== 0
                          ? coupan2?.cartsTotalSum?.toFixed(2)
                          : coupan?.cartsTotalSum?.toFixed(2) || cartTotal}
                      </h4>
                    )}
                    {/* <h4 className="price theme-color">
                      $
                      {coupan2.length !== 0
                        ? coupan2?.cartsTotalSum?.toFixed(2)
                        : coupan?.cartsTotalSum?.toFixed(2) || cartTotal}
                    </h4> */}

                    {/* <h4 className="price theme-color">
                      $
                      {coupan2?.length !== 0
                        ? coupan2?.cartsTotalSum
                        : coupan?.cartsTotalSum}
                    </h4> */}
                  </li>
                </ul>
                <div className="button-group cart-button">
                  <ul>
                    <li>
                      {/* <Link
                        // to="/check-out"
                        to={`/check-out/${encodeURIComponent(
                          JSON.stringify(coupan2)
                        )}`}
                        className="btn btn-animation proceed-btn fw-bold"
                      >
                        Process To Checkout
                      </Link> */}
                      <Link
                        to={checkoutUrl}
                        className="btn btn-animation proceed-btn fw-bold"
                      >
                        Process To Checkout
                      </Link>
                      {/* {coupan || coupan2 ? (
                        <Link
                          to={`/check-out/${encodeURIComponent(
                            JSON.stringify(
                              coupan2.length !== 0 ? coupan2 : coupan
                            )
                          )}`}
                          className="btn btn-animation proceed-btn fw-bold"
                        >
                          Process To Checkout
                        </Link>
                      ) : (
                        <Link
                          to="/check-out"
                          className="btn btn-animation proceed-btn fw-bold"
                        >
                          Process To Checkout
                        </Link>
                      )} */}
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

            {/* <div className="col-xxl-3">
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
                      <h4 className="price">${coupan?.subtotal} </h4>
                    </li>
                    <li>
                      <h4>Coupon Discount</h4>
                      <h4 className="price"> - {coupan?.DiscountType} % </h4>
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
            </div> */}
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
