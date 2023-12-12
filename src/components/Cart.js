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
import { useDispatch, useSelector } from "react-redux";
import { useUpdateQuantityMutation } from "../services/Post";
import { useAddToWislistListMutation } from "../services/Post";
import { useApplyCoupanMutation } from "../services/Post";
import { addToCart, getAllCart } from "../app/slice/CartSlice";

function Cart() {
  const [applyCoupan, response] = useApplyCoupanMutation();
  const [applyCoupan2, response2] = useApplyCoupan2Mutation();

  const [cartListItems, setCartListItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  localStorage?.setItem("cartId", cartListItems[0]?._id);
  const [cartCount, setCartCount] = useState([]);
  const [wishAdd] = useAddToWislistListMutation();
  const [updateQuantity] = useUpdateQuantityMutation();
  const [coupan, setCoupan] = useState([]);
  const [coupan2, setCoupan2] = useState([]);
  const [coupanCode, setCoupanCode] = useState("25753411");
  const [CreateWishItems, setCreateWishItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const coupanCode2 = coupanCode || "";
  const { data: cartListQuery, isSuccess } = useGetCartListQuery();
  const cart = useSelector((state) => state?.cart?.carts);
  // setCartListItems(cart?.cartItems);
  console.log("useSelector", cart);
  const dispatch = useDispatch();
  const [singleItemPrice, setSingleItemPrice] = useState([]);
  localStorage?.setItem("cartTotal", cartTotal);

  const [count1, setCount1] = useState();
  const handleIncrement = (id) => {
    setCartListItems((prevCartListItems) => {
      return prevCartListItems.map((item) =>
        id === item.varient?._id
          ? {
              ...item,
              quantity: item?.quantity + 1,
              // products: [
              //   {
              //     ...item,
              //     quantity: item?.quantity + 1,
              //   },
              // ],
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
    // applyCoupanCode();
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
      const items = cartListQuery?.results?.carts || [];
      localStorage?.setItem(
        "allCartItems",
        encodeURIComponent(JSON.stringify(items))
      );
      dispatch(getAllCart(items));
      let total = 0;
      items.forEach((item) => {
        if (item?.products && item.products.length > 0) {
          item.products.forEach((product) => {
            if (product.Price) {
              total += product.Price;
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
  let totalSubtotal = 0;
  cartListItems
    ?.slice()
    ?.reverse()
    ?.forEach((item) => {
      const subtotal = (item?.varient?.Price || 0) * (item?.quantity || 1);
      totalSubtotal += subtotal;
    });

  console.log("Total Subtotal:", totalSubtotal);
  localStorage?.setItem("totalSubtotal", totalSubtotal);

  const applyCoupanCode = async () => {
    let cartList = [];

    cartList =
      cartListItems?.map((order) => ({
        product_Id: order?.product_Id?._id,
        quantity: order?.quantity,
        Price: order?.varient?.Price * order?.quantity,
        varient_Id: order?.varient?._id,
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
    console.log("cart subtotal", item);
  };
  const handleCoupan2 = async (item, quantity, id, varientId) => {
    const newOrderData = {
      coupanCode: coupanCode2,
      carts: [
        {
          product_Id: id,
          Price: item * quantity,
          quantity: quantity,
          varient_Id: varientId,
        },
      ],
      user_Id: userId,
    };

    try {
      const createNewOrder = await applyCoupan2(newOrderData);
      console.log("createNewOrder", createNewOrder);
      let totalPrice = 0;
      createNewOrder?.data?.results.product.forEach((product) => {
        totalPrice += parseInt(product.Price);
      });

      const discountPercentage =
        createNewOrder?.data?.results.DiscountType[0] || 0;
      const discountedPrice =
        totalPrice - (totalPrice * discountPercentage) / 100;

      setCoupan2({
        ...createNewOrder?.data?.results,
        cartsTotalSum: discountedPrice || cartTotal,
      });
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

  const checkoutUrl =
    coupan2 && coupan2.length !== 0
      ? `/check-out/${encodeURIComponent(JSON.stringify(coupan2))}`
      : coupan && coupan.length !== 0
      ? `/check-out/${encodeURIComponent(JSON.stringify(coupan))}`
      : "/check-outall";

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
      {/* Cart Section Start */}
      <section className="cart-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-5 g-3">
            <div className="col-xxl-9">
              <div className="cart-table">
                <div className="table-responsive-xl">
                  <table className="table" style={{ marginLeft: "-21px" }}>
                    <tbody>
                      {cart
                        ?.slice()
                        ?.reverse()
                        ?.map((item, index) => {
                          const subtotal =
                            (item?.varient?.Price || 0) * (item?.quantity || 1);

                          return (
                            <tr className="product-box-contain" key={index}>
                              <td className="product-detail">
                                <div className="product border-0">
                                  <Link to="/product" className="product-image">
                                    <img
                                      src={item?.varient?.product_Pic[0]}
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
                                                {product?.product_Id?.productName_en
                                                  ?.split(" ")
                                                  ?.slice(0, 3)
                                                  ?.join(" ")}
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
                                      <li className="text-content">
                                        <span className="text-title">
                                          SKU :
                                        </span>{" "}
                                        {item?.varient?.SKU}
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
                                          <div>{item?.quantity}</div>
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
                                {/* <h5>${item?.products[0]?.Price}</h5> */}
                                <h5>${subtotal}</h5>
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
                              singleItemPrice?.varient?.Price,
                              singleItemPrice?.quantity,
                              singleItemPrice?.product_Id?._id,
                              singleItemPrice?.varient?._id
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
                          $
                          {singleItemPrice?.varient?.Price *
                            singleItemPrice?.quantity}
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
                          ${coupan?.subtotal || totalSubtotal}
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
                    {singleItemPrice?.length !== 0 ? (
                      <h4 className="price theme-color">
                        $
                        {coupan2.length !== 0
                          ? coupan2?.cartsTotalSum?.toFixed(2)
                          : singleItemPrice?.varient?.Price *
                            singleItemPrice?.quantity}
                      </h4>
                    ) : (
                      <h4 className="price theme-color">
                        $
                        {coupan2.length !== 0
                          ? coupan2?.cartsTotalSum?.toFixed(2)
                          : coupan?.cartsTotalSum?.toFixed(2) || totalSubtotal}
                      </h4>
                    )}
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

      <Footer />

      <LocationModel />

      <DealBoxModel />

      <TapToTop />

      <div className="bg-overlay" />
    </>
  );
}

export default Cart;
