import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Header";
import Footer from "./Footer";
import { DeleteWishList, WishListItems } from "./HttpServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import BreadCrumb from "./BreadCrumb";
import Star from "./Star";
import { useSelector } from "react-redux";
import {
  useAddToCartMutation,
  useGetWishListDetailsMutation,
} from "../services/Post";
import Swal from "sweetalert2";

function WishList() {
  const ecommercetoken = useSelector((data) => data?.local?.ecomWebtoken);
  const ecomUserId = useSelector((data) => data?.local?.ecomUserid);
  const [wishListDetails] = useGetWishListDetailsMutation();
  const [addtocart] = useAddToCartMutation();
  const [wishList, setWishList] = useState([]);
  localStorage?.setItem("totalWish", wishList?.length);
  const [cartListItems, setCartListItems] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [count, setCount] = useState([]);

  useEffect(() => {
    const initialCounts = wishList?.map(() => 1);
    setCount(initialCounts);
  }, [wishList]);

  const navigate = useNavigate();

  const handleCountChange = (index, newCount) => {
    const newCounts = [...count];
    newCounts[index] = newCount >= 0 ? newCount : 0;
    setCount(newCounts);
  };

  const handleAddToCart = async (e, item, price, index, variantId) => {
    e.preventDefault();
    if (!ecommercetoken) {
      Swal.fire({
        title: "Login Required",
        text: "Please login before add to cart.",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#0da487",
        confirmButtonText: "Login",
        cancelButtonText: "Cancel",
        customClass: {
          confirmButton: "custom-confirm-button-class me-3",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
      return;
    }
    console.log("item added id", item?._id);
    e.preventDefault();
    const data = {
      product_Id: item._id,
      quantity: count[index],
      Price: price * count[index],
      varient_Id: variantId,
      user_Id: ecomUserId,
      ecommercetoken: ecommercetoken,
    };
    try {
      const response = await addtocart(data);

      navigate("/cart");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (ecomUserId) {
      handleWishList(ecomUserId);
    }
  }, [ecomUserId]);

  const handleWishList = async () => {
    const datas = {
      ecomUserId,
      ecommercetoken,
    };

    try {
      const respone = await wishListDetails(datas);

      setWishList(respone?.data?.results?.list);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("wishlist", wishList);
  const deleteWishList = (_id) => {
    deleteData(_id);
  };
  const deleteData = async (_id) => {
    try {
      const { data, error } = await DeleteWishList(_id);
      error ? console.log(error) : console.log(data);
      setWishList((prevWishList) =>
        prevWishList.filter((item) => item._id !== _id)
      );
      console.log(data.results.deleteDta);
    } catch (error) {
      console.log(error);
    }
  };
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
                <h2>Wishlist</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/index">
                        <i className="fa-solid fa-house" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Wishlist
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}
      {/* Wishlist Section Start */}
      <section className="wishlist-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-3 g-2">
            {wishList.map((item, index) => {
              const totalRatings = item?.product_Id?.ratings?.reduce(
                (sum, rating) => sum + rating?.star,
                0
              );
              const averageRating =
                totalRatings / item?.product_Id?.ratings?.length;
              return (
                <div
                  className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain"
                  style={{ width: "32vh" }}
                  key={index}
                >
                  <div className="product-box-3 h-100">
                    <div className="product-header">
                      <div className="product-image">
                        <Link to="/product">
                          <img
                            src={
                              item?.product_Id?.addVarient[0]?.product_Pic[0]
                            }
                            className="img-fluid  lazyload"
                            alt=""
                          />
                        </Link>
                        <div className="product-header-top">
                          <button
                            className="btn wishlist-button close_button"
                            onClick={() => deleteWishList(item._id)}
                          >
                            <FontAwesomeIcon icon={faXmark} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="product-footer">
                      <Link to="/product">
                        <h5 className="name">
                          <strong>{item?.product_Id?.productName_en}</strong>
                        </h5>
                      </Link>
                      <div className="product-detail">
                        {/* <span className="span-name">
                          {item?.product_Id?.productName_en}
                        </span> */}
                        {/* <Link to="/product">
                          <h5 className="name">
                            {item?.product_Id?.productName_en}
                          </h5>
                        </Link> */}
                        <div
                          className="product-rating mt-2"
                          style={{ marginLeft: "-10px" }}
                        >
                          <Star
                            rating={averageRating || 0}
                            totalRating={item?.totalRating}
                          />
                          <span>
                            {" "}
                            {item?.product_Id?.ratings?.length} reviews{" "}
                          </span>
                        </div>
                        <h6 className="unit mt-1">
                          {item?.product_Id?.weight}
                        </h6>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div>
                            <h6 className="unit">
                              {item?.product_Id?.addVarient?.[0]?.stockQuantity}{" "}
                              units{" "}
                            </h6>
                          </div>
                          <div className="">
                            <div className="cart_qty qty-box product-qty">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  onClick={() =>
                                    handleCountChange(index, count[index] - 1)
                                  }
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <div className="m-2">
                                  {" "}
                                  {count[index] ? count[index] : "1"}
                                </div>

                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  onClick={() =>
                                    handleCountChange(index, count[index] + 1)
                                  }
                                  disabled={
                                    count[index] ===
                                    item?.product_Id?.addVarient?.[0]
                                      ?.stockQuantity
                                  }
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h5 className="price">
                          <span className="theme-color">
                            ${item?.product_Id?.addVarient?.[0]?.Price}{" "}
                          </span>
                          <del>
                            ${item?.product_Id?.addVarient?.[0]?.oldPrice}
                          </del>
                        </h5>
                        <div className="add-to-cart-box bg-white mt-2">
                          <button
                            className="btn btn-add-cart addcart-button"
                            onClick={(e) =>
                              handleAddToCart(
                                e,
                                item,
                                item?.product_Id?.addVarient[0]?.Price,
                                index,
                                item?.product_Id?.addVarient[0]?._id
                              )
                            }
                          >
                            Add To Cart
                            {/* <span className="add-icon bg-light-gray">
                              <i className="fa-solid fa-plus" />
                            </span> */}
                          </button>
                          <div className="cart_qty qty-box">
                            <div className="input-group bg-white">
                              <button
                                type="button"
                                className="qty-left-minus bg-gray"
                                data-type="minus"
                                data-field=""
                              >
                                <i className="fa fa-minus" aria-hidden="true" />
                              </button>
                              <input
                                className="form-control input-number qty-input"
                                type="text"
                                name="quantity"
                                defaultValue={0}
                              />
                              <button
                                type="button"
                                className="qty-right-plus bg-gray"
                                data-type="plus"
                                data-field=""
                              >
                                <i className="fa fa-plus" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Wishlist Section End */}
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

export default WishList;
