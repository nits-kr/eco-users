import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../Header";
import RelatedProductSlider from "./RelatedProductSlider";
import {
  useAddCompareMutation,
  useAddToCartMutation,
  useAddToWislistListMutation,
  useCreateReportMutation,
  useGetCartListheaderMutation,
  useGetCompareListQuery,
  useGetProductListDetailsMutation,
  useGetRelatedProductQuery,
} from "../../services/Post";
import SelectedProduct from "./SelectedProduct";
import feather from "feather-icons";
import CustomTimer from "./CustomTimer";
import { MyTimer } from "./TimerHook";
import Star from "../Star";
import Swal from "sweetalert2";
import GetStar from "../GetStar";
import Addreview from "./Addreview";
import Footer from "../Footer";
import TrendingProductDetails from "./TrendingProductDetails";
import TrendingProductHome from "./TrendingProductHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faArrowsRotate,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Products(props) {
  const ecommercetoken = useSelector((data) => data?.local?.ecomWebtoken);
  const ecomUserId = useSelector((data) => data?.local?.ecomUserid);
  const [productDetails] = useGetProductListDetailsMutation();
  const [cartListQuery] = useGetCartListheaderMutation();
  const [reportData] = useCreateReportMutation();
  const [compare] = useAddCompareMutation();

  const [addtocart] = useAddToCartMutation();
  const [loading, setLoading] = useState(false);
  const [wishAdd] = useAddToWislistListMutation();
  const relatedProduct = useGetRelatedProductQuery();
  const compareItems = useGetCompareListQuery();

  const [productDetail, setProductDetail] = useState("");
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [cartListItems, setCartListItems] = useState([]);
  const [CreateWishItems, setCreateWishItems] = useState([]);
  const [addCompareItems, setAddCompareItems] = useState([]);
  const [newCompare, setNewCompare] = useState([]);

  const userEmail = localStorage?.getItem("userEmail");
  const mobileNumber = localStorage?.getItem("mobileNumber");
  const userName = localStorage?.getItem("userName");
  const [formData, setFormData] = useState({
    r1: "",
    description: "",
  });
  const [report, setReport] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const storedId = localStorage.getItem("loginId");

  const navigate = useNavigate();

  const [count, setCount] = useState(1);

  const [area, setArea] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      handleProductDetails(id);
    }
  }, [id]);

  const handleProductDetails = async () => {
    const datas = {
      id,
      ecommercetoken,
    };

    try {
      const respone = await productDetails(datas);

      setProductDetail(respone?.data?.results?.details);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (ecomUserId) {
      handleCartList(ecomUserId);
    }
  }, [ecomUserId]);

  const handleCartList = async () => {
    const datas = {
      ecomUserId,
      ecommercetoken,
    };

    try {
      const respone = await cartListQuery(datas);

      console.log("respone cart", respone);

      setCartListItems(respone?.data?.carts);
    } catch (error) {
      console.log(error);
    }
  };

  const totalRatings = productDetail?.ratings?.reduce(
    (sum, rating) => sum + rating.star,
    0
  );
  const averageRating = totalRatings / productDetail?.ratings?.length;

  const variants = productDetail?.addVarient || [];

  const handleVariantChange = (index) => {
    setSelectedVariant(index);
  };

  const selectedVariantData = variants[selectedVariant];

  const price = count
    ? selectedVariantData?.Price * count
    : selectedVariantData?.Price;
  const oldPrice = count
    ? selectedVariantData?.oldPrice * count
    : selectedVariantData?.oldPrice;
  const quantity = selectedVariantData?.stockQuantity;

  const isVariantInCart = cartListItems?.some((item) => {
    return item?.products?.some((product) => {
      return product?.product_Id?._id === selectedVariantData?._id;
    });
  });

  const isItemInCart = cartListItems?.some(
    (cartItem) => cartItem?.product_Id?._id === id
  );

  const variantId = selectedVariantData?._id;

  const handleAddToCart = async (e, item) => {
    // e.preventDefault();
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
    // e.preventDefault();
    const data = {
      product_Id: id,
      quantity: count,
      Price: price,
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

  const handleWishClick = async (id) => {
    if (!ecommercetoken) {
      Swal.fire({
        title: "Login Required",
        text: "Please login before add to wish list.",
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
    try {
      const data = {
        product_Id: id,
        userId: storedId,
        like: true,
        ecommercetoken: ecommercetoken,
      };
      const response = await wishAdd(data);
      navigate("/wishlist");

      const newCreateWishItems = [...CreateWishItems, data];
      setCreateWishItems(newCreateWishItems);
      // setTimeout(() => {
      //   window?.location?.reload();
      // }, 500);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCompareClick = async (id) => {
    const data = {
      product_Id: id,
      ecommercetoken: ecommercetoken,
    };
    try {
      const response = await compare(data);
      navigate("/compare");
      setTimeout(() => {
        window?.location?.reload();
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (compareItems) {
      setNewCompare(compareItems?.data?.results?.comparelist);
    }
  }, [compareItems]);

  const isCompareItems = newCompare?.some(
    (compareItem) => compareItem?.product_Id?._id === id
  );

  const handleExpand = () => {
    setArea(false);
  };
  const handleCompress = () => {
    setArea(true);
  };

  const handleSaveReport = () => {
    Swal.fire({
      title: "Confirm",
      text: "Are you sure you want to save this report?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      customClass: {
        confirmButton: "btn btn-primary mx-2",
        cancelButton: "btn btn-secondary mx-2",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const newAddress = {
          reason: formData.r1,
          description: report,
          user_Id: ecomUserId,
          product_Id: id,
          reporterName: userName,
          reporterNumber: mobileNumber,
          reporterEmail: userEmail,
          ecommercetoken: ecommercetoken,
        };
        reportData(newAddress);
        document?.getElementById("cancelReport").click();
      }
    });
  };

  const handleReportAuth = () => {
    if (!ecommercetoken) {
      Swal.fire({
        title: "Login Required",
        text: "Please login before add report.",
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
  };

  useEffect(() => {
    feather.replace();
  }, []);

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 3600);
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
      <Header Dash={"details"} />
      {/* Header End */}
      {/* mobile fix menu start */}
      <div className="mobile-menu d-md-none d-block mobile-cart">
        <ul>
          <li className="active">
            <a href="index-1-grocery.html">
              <i className="iconly-Home icli" />
              <span>Home</span>
            </a>
          </li>
          <li className="mobile-category">
            <a href="javascript:void(0)">
              <i className="iconly-Category icli js-link" />
              <span>Category</span>
            </a>
          </li>
          <li>
            <a href="search.html" className="search-box">
              <i className="iconly-Search icli" />
              <span>Search</span>
            </a>
          </li>
          <li>
            <a href="wishlist.html" className="notifi-wishlist">
              <i className="iconly-Heart icli" />
              <span>My Wish</span>
            </a>
          </li>
          <li>
            <a href="cart.html">
              <i className="iconly-Bag-2 icli fly-cate" />
              <span>Cart</span>
            </a>
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
                <h2>
                  {productDetail?.productName_en?.toUpperCase()?.length > 20
                    ? productDetail?.productName_en?.slice(0, 20) + "..."
                    : productDetail?.productName_en || "N/A"}
                </h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="index.html">
                        <i className="fa-solid fa-house" />
                      </a>
                    </li>
                    <li className="breadcrumb-item active">
                      {productDetail?.productName_en?.toUpperCase()?.length > 20
                        ? productDetail?.productName_en?.slice(0, 20) + "..."
                        : productDetail?.productName_en || "N/A"}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}
      {/* Product Left Sidebar Start */}
      <section className="product-section">
        <div className="container-fluid px-4">
          <div className="row">
            <div className="col-12 wow fadeInUp">
              <div className="row g-4">
                <SelectedProduct selectedVariantData={selectedVariantData} />

                <div
                  className="col-xl-7 col-lg-7 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="right-box-contain">
                    <div className="row align-items-center mb-4">
                      <div className="col-6">
                        <h6 className="offer-top mb-0">30% Off</h6>
                      </div>
                      <div className="col-6 text-end">
                        <a
                          className="report_btns"
                          data-bs-toggle={`${
                            ecommercetoken ? "modal" : "click"
                          }`}
                          onClick={() =>
                            ecommercetoken ? null : handleReportAuth()
                          }
                          data-bs-target="#report_modal"
                          href="javascript:;"
                        >
                          <img src="../assets/images/report.svg" alt="" />
                        </a>
                      </div>
                    </div>
                    <h2 className="name">{productDetail?.productName_en}</h2>
                    <div className="price-rating">
                      <h3 className="theme-color price">
                        ${price || ""}{" "}
                        <del className="text-content">${oldPrice || ""}</del>{" "}
                        <span className="offer theme-color">(8% off)</span>
                      </h3>
                      <div>
                        <Star rating={averageRating} />
                        <span className="ms-1">
                          {" "}
                          {productDetail?.ratings?.length} reviews{" "}
                        </span>
                      </div>
                    </div>
                    <div className="procuct-contain">
                      <p>
                        Lollipop cake chocolate chocolate cake dessert jujubes.
                        Shortbread sugar plum dessert powder cookie sweet
                        brownie. Cake cookie apple pie dessert sugar plum muffin
                        cheesecake.
                      </p>
                    </div>
                    <div className="product-packege">
                      <div className="product-title">
                        <h4>
                          Select:{" "}
                          <strong style={{ color: "var(--theme-color)" }}>
                            {variants?.[0]?.attribute_Id?.attributeName_en}
                          </strong>{" "}
                        </h4>
                      </div>
                      <ul className="select-packege">
                        {variants.map((variant, index) => (
                          <li key={index}>
                            <Link
                              className={`variant-button ${
                                selectedVariant === index ? "active" : ""
                              }`}
                              onClick={() => handleVariantChange(index)}
                            >
                              {variant.values_Id?.valuesName_en}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <MyTimer
                      dataDays={1}
                      dataHours={1}
                      dataMinutes={2}
                      dataSeconds={3}
                    />

                    <div className="row">
                      <div className="col-md-6">
                        <div className="note-box product-packege">
                          {selectedVariantData?.stockQuantity <= 0 ? (
                            <div className="cart_qty qty-box product-qty">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  style={{ cursor: "not-allowed" }}
                                  disabled
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  value={count}
                                />

                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  disabled
                                  style={{ cursor: "not-allowed" }}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="cart_qty qty-box product-qty">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                  onClick={() => setCount(count - 1)}
                                  disabled={count <= 1}
                                >
                                  <i
                                    className="fa fa-minus"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  value={count}
                                />

                                <button
                                  type="button"
                                  className="qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                  onClick={() => setCount(count + 1)}
                                  disabled={
                                    count === selectedVariantData?.stockQuantity
                                  }
                                  title={`${
                                    count === selectedVariantData?.stockQuantity
                                      ? "Items Limited"
                                      : ""
                                  }`}
                                >
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          )}

                          {isItemInCart ? (
                            <Link
                              to="/cart"
                              className="btn btn-md bg-dark cart-button text-white w-100"
                            >
                              Go to Cart
                            </Link>
                          ) : (
                            <Link
                              // to="/cart"
                              className="btn btn-md bg-dark cart-button text-white w-100"
                              onClick={() =>
                                selectedVariantData?.stockQuantity <= 0
                                  ? toast.error("Out Of Stock")
                                  : handleAddToCart()
                              }
                            >
                              Add to Cart
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="buy-box">
                      {productDetail?.like === "false" ? (
                        <Link
                          to="#"
                          title="Add To Wishlist"
                          onClick={() => handleWishClick(id)}
                        >
                          {/* <i data-feather="heart" /> */}
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
                          <span>Add To Wishlist</span>
                        </Link>
                      ) : (
                        <Link
                          to="/wishlist"
                          title="Wishlist"
                          // onClick={() => handleWishClick(id)}
                        >
                          {/* <i data-feather="heart" /> */}
                          <FontAwesomeIcon
                            icon={faHeart}
                            style={{
                              fontSize: "20px",
                              color: "red",
                            }}
                            // data-tip="Add to Wishlist"
                            // data-for="wishlist-tooltip"
                          />
                          <span>Added To Wishlist</span>
                        </Link>
                      )}

                      {isCompareItems ? (
                        <Link
                          to="/compare"
                          // onClick={() => handleCompareClick(id)}
                        >
                          <i data-feather="shuffle" />
                          <span>Add To Compare</span>
                        </Link>
                      ) : (
                        <Link to="#" onClick={() => handleCompareClick(id)}>
                          <i data-feather="shuffle" />
                          <span>Add To Compare</span>
                        </Link>
                      )}
                    </div>
                    <div className="pickup-box">
                      {area ? (
                        <div className="procuct-contain">
                          <div className="product-title">
                            <h4>Description</h4>
                          </div>
                          <p>
                            {productDetail?.Description?.slice(0, 140)}
                            <strong>...</strong>
                          </p>
                          <Link
                            to=""
                            className="blog-button"
                            onClick={handleExpand}
                          >
                            Read More
                            <i className="fa-solid fa-right-long ms-2" />
                          </Link>
                        </div>
                      ) : (
                        <div className="procuct-contain">
                          <div className="product-title">
                            <h4>Description</h4>
                          </div>
                          <p>{productDetail?.Description}</p>
                          <Link
                            to=""
                            className="blog-button"
                            onClick={handleCompress}
                          >
                            Hide More
                            <i className="fa-solid fa-right-long ms-2" />
                          </Link>
                        </div>
                      )}

                      <div className="product-info">
                        <ul className="product-info-list product-info-list-2">
                          <li>
                            Type :{" "}
                            <Link to="#">{productDetail?.productType}</Link>
                          </li>
                          <li>
                            SKU : <Link to="#">{selectedVariantData?.SKU}</Link>
                          </li>
                          <li>
                            MFG :{" "}
                            <Link to="#">
                              {" "}
                              {productDetail?.publishDate?.slice(0, 10)}{" "}
                            </Link>
                          </li>
                          <li>
                            Stock :{" "}
                            <Link to="#">
                              {" "}
                              {selectedVariantData?.stockQuantity}{" "}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="paymnet-option">
                      <div className="product-title">
                        <h4>Guaranteed Safe Checkout</h4>
                      </div>
                      <ul>
                        <li>
                          <a href="javascript:void(0)">
                            <img
                              src="../assets/images/product/payment/1.svg"
                              className=" lazyload"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <img
                              src="../assets/images/product/payment/2.svg"
                              className="lazyload"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <img
                              src="../assets/images/product/payment/3.svg"
                              className="lazyload"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <img
                              src="../assets/images/product/payment/4.svg"
                              className="lazyload"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <img
                              src="../assets/images/product/payment/5.svg"
                              className="lazyload"
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-section-box ">
                      <ul
                        className="nav nav-tabs custom-nav"
                        id="myTab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="review-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#review"
                            type="button"
                            role="tab"
                            aria-controls="review"
                            aria-selected="false"
                          >
                            Review
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="description-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#description"
                            type="button"
                            role="tab"
                            aria-controls="description"
                            aria-selected="true"
                          >
                            Description
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="info-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#info"
                            type="button"
                            role="tab"
                            aria-controls="info"
                            aria-selected="false"
                          >
                            Additional info
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="care-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#care"
                            type="button"
                            role="tab"
                            aria-controls="care"
                            aria-selected="false"
                          >
                            Care Instuctions
                          </button>
                        </li>
                      </ul>
                      <Addreview
                        productDetail={productDetail}
                        averageRating={averageRating}
                        id={id}
                      />
                    </div>
                    <div className="right-sidebar-box">
                      <div className="vendor-box">
                        <div className="verndor-contain">
                          <div className="vendor-image">
                            <img
                              src="../assets/images/product/vendor.png"
                              className="lazyload"
                              alt=""
                            />
                          </div>
                          <div className="vendor-name">
                            <h5 className="fw-500">Noodles Co.</h5>
                            <div className="product-rating mt-1">
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
                              <span>(36 Reviews)</span>
                            </div>
                          </div>
                        </div>
                        <p className="vendor-detail">
                          Noodles &amp; Company is an American fast-casual
                          restaurant that offers international and American
                          noodle dishes and pasta.
                        </p>
                        <div className="vendor-list">
                          <ul>
                            <li>
                              <div className="address-contact">
                                <i data-feather="map-pin" />
                                <h5>
                                  Address:{" "}
                                  <span className="text-content">
                                    1288 Franklin Avenue
                                  </span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <div className="address-contact">
                                <i data-feather="headphones" />
                                <h5>
                                  Contact Seller:{" "}
                                  <span className="text-content">
                                    (+1)-123-456-789
                                  </span>
                                </h5>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* <TrendingProductDetails /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TrendingProductHome />
      {/* Product Left Sidebar End */}
      <RelatedProductSlider id={id} />
      {/* Footer Section Start */}
      <Footer />
      {/* Footer Section End */}
      {/* Quick View Modal Box Start */}
      <div
        className="modal fade theme-modal view-modal"
        id="view"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header p-0">
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
              <div className="row g-sm-4 g-2">
                <div className="col-lg-6">
                  <div className="slider-image">
                    <img
                      src="../assets/images/product/category/1.jpg"
                      className="img-fluid lazyload"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-sidebar-modal">
                    <h4 className="title-name">
                      Peanut Butter Bite Premium Butter Cookies 600 g
                    </h4>
                    <h4 className="price">$36.99</h4>
                    <div className="product-rating">
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
                      <span className="ms-2">8 Reviews</span>
                      <span className="ms-2 text-danger">
                        6 sold in last 16 hours
                      </span>
                    </div>
                    <div className="product-detail">
                      <h4>Product Details :</h4>
                      <p>
                        Candy canes sugar plum tart cotton candy chupa chups
                        sugar plum chocolate I love. Caramels marshmallow icing
                        dessert candy canes I love soufflé I love toffee.
                        Marshmallow pie sweet sweet roll sesame snaps tiramisu
                        jelly bear claw. Bonbon muffin I love carrot cake sugar
                        plum dessert bonbon.
                      </p>
                    </div>
                    <ul className="brand-list">
                      <li>
                        <div className="brand-box">
                          <h5>Brand Name:</h5>
                          <h6>Black Forest</h6>
                        </div>
                      </li>
                      <li>
                        <div className="brand-box">
                          <h5>Product Code:</h5>
                          <h6>W0690034</h6>
                        </div>
                      </li>
                      <li>
                        <div className="brand-box">
                          <h5>Product Type:</h5>
                          <h6>lorem ipsum</h6>
                        </div>
                      </li>
                    </ul>
                    <div className="select-size">
                      <h4>Cake Size :</h4>
                      <select className="form-select select-form-size">
                        <option selected="">Select Size</option>
                        <option value="1.2">1/2 KG</option>
                        <option value={0}>1 KG</option>
                        <option value="1.5">1/5 KG</option>
                        <option value="red">Red Roses</option>
                        <option value="pink">With Pink Roses</option>
                      </select>
                    </div>
                    <div className="modal-button">
                      <button
                        onclick="location.href = 'cart.html';"
                        className="btn btn-md add-cart-button icon"
                      >
                        Add To Cart
                      </button>
                      <button
                        onclick="location.href = 'product-left.html';"
                        className="btn theme-bg-color view-button icon text-white fw-bold btn-md"
                      >
                        View More Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Quick View Modal Box End */}
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
                    <a href="javascript:void(0)">
                      <h6>Alabama</h6>
                      <span>Min: $130</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <h6>Arizona</h6>
                      <span>Min: $150</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <h6>California</h6>
                      <span>Min: $110</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <h6>Colorado</h6>
                      <span>Min: $140</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <h6>Florida</h6>
                      <span>Min: $160</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <h6>Georgia</h6>
                      <span>Min: $120</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <h6>Kansas</h6>
                      <span>Min: $170</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <h6>Minnesota</h6>
                      <span>Min: $120</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <h6>New York</h6>
                      <span>Min: $110</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <h6>Washington</h6>
                      <span>Min: $130</span>
                    </a>
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
                      <a href="shop.html" className="deal-image">
                        <img
                          src="../assets/images/vegetable/product/10.png"
                          className="lazyload"
                          alt=""
                        />
                      </a>
                      <a href="shop.html" className="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </a>
                    </div>
                  </li>
                  <li className="list-2">
                    <div className="deal-offer-contain">
                      <a href="shop.html" className="deal-image">
                        <img
                          src="../assets/images/vegetable/product/11.png"
                          className="lazyload"
                          alt=""
                        />
                      </a>
                      <a href="shop.html" className="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </a>
                    </div>
                  </li>
                  <li className="list-3">
                    <div className="deal-offer-contain">
                      <a href="shop.html" className="deal-image">
                        <img
                          src="../assets/images/vegetable/product/12.png"
                          className="lazyload"
                          alt=""
                        />
                      </a>
                      <a href="shop.html" className="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </a>
                    </div>
                  </li>
                  <li className="list-1">
                    <div className="deal-offer-contain">
                      <a href="shop.html" className="deal-image">
                        <img
                          src="../assets/images/vegetable/product/13.png"
                          className="lazyload"
                          alt=""
                        />
                      </a>
                      <a href="shop.html" className="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Deal Box Modal End */}
      {/* Add to cart Modal Start */}
      <div className="add-cart-box">
        <div className="add-iamge">
          <img
            src="../assets/images/cake/pro/1.jpg"
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="add-contain">
          <h6>Added to Cart</h6>
        </div>
      </div>
      {/* Add to cart Modal End */}
      {/* Tap to top start */}
      <div className="theme-option theme-option-2">
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
          <a id="back-to-top" href="#">
            <i className="fas fa-chevron-up" />
          </a>
        </div>
      </div>
      {/* Tap to top end */}
      {/* Bg overlay Start */}
      <div className="bg-overlay" />
      <div
        className="modal fade report_modal"
        id="report_modal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="cancelReport"
              />
              <div className="report_modal_inner">
                <h3>Report Product</h3>
                <form className="form_design row px-2 mx-0" action="">
                  <div className="form-group col-12 mb-3">
                    <div className="checkbox_new d-inline-block">
                      <input
                        type="radio"
                        defaultChecked=""
                        id="r1"
                        name="r1"
                        className="d-none"
                        value="Inppropriate"
                        onChange={handleInputChange}
                      />
                      <label htmlFor="r1">Inppropriate</label>
                    </div>
                  </div>
                  <div className="form-group col-12 mb-3">
                    <div className="checkbox_new d-inline-block">
                      <input
                        type="radio"
                        defaultChecked=""
                        id="r2"
                        name="r1"
                        className="d-none"
                        value="Spam"
                        onChange={handleInputChange}
                      />
                      <label htmlFor="r2">Spam</label>
                    </div>
                  </div>
                  <div className="form-group col-12 mb-3">
                    <div className="checkbox_new d-inline-block">
                      <input
                        type="radio"
                        defaultChecked=""
                        id="r3"
                        name="r1"
                        className="d-none"
                        value="None of the Above"
                        onChange={handleInputChange}
                      />
                      <label htmlFor="r3">None of the Above</label>
                    </div>
                  </div>
                  <div className="form-group col-12 mb-3">
                    <textarea
                      className="form-control"
                      name=""
                      id=""
                      style={{ height: 100 }}
                      defaultValue={""}
                      // value={formData.description}
                      onChange={(e) => setReport(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-12 mb-0">
                    <Link
                      className="btn btn-animation btn-sm mx-auto"
                      to="#"
                      onClick={handleSaveReport}
                    >
                      Send
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      wrap long lines
    </>
  );
}

export default Products;
