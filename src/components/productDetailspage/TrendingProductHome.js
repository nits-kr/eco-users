import React, { useEffect, useState } from "react";
import Spinners2 from "../Spinners2";
import {
  useAddCompareMutation,
  useAddToCartMutation,
  useAddToWislistListMutation,
  useGetCartListheaderMutation,
  useGetTrendingProductQuery,
} from "../../services/Post";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faArrowsRotate,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Star from "../Star";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function TrendingProductHome(props) {
  const ecommercetoken = useSelector((data) => data?.local?.ecomWebtoken);
  const ecomUserId = useSelector((data) => data?.local?.ecomUserid);
  const [cartListQuery] = useGetCartListheaderMutation();
  const [loading, setLoading] = useState(false);
  const trendingProduct = useGetTrendingProductQuery({ ecommercetoken });
  const [wishAdd] = useAddToWislistListMutation();
  const [compare] = useAddCompareMutation();
  const [addtocart] = useAddToCartMutation();
  const [cartListItems, setCartListItems] = useState([]);
  const [trendingList, setTrendingList] = useState([]);

  const [count, setCount] = useState([]);

  const navigate = useNavigate();

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

      setCartListItems(respone?.data?.results?.cart?.products?.[0]?.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const initialCounts = trendingList?.map(() => 1);
    setCount(initialCounts);
  }, [trendingList]);

  const handleCountChange = (index, newCount) => {
    const newCounts = [...count];
    newCounts[index] = newCount >= 0 ? newCount : 0;
    setCount(newCounts);
  };
  useEffect(() => {
    setLoading(true);
    if (trendingProduct?.data?.results?.productlist) {
      setTrendingList(trendingProduct?.data?.results?.productlist);

      setLoading(false);
    }
  });

  const handleViewClick = (item) => {
    setTimeout(() => {
      window?.location?.reload();
    }, 500);
  };

  const userId = localStorage?.getItem("loginId");
  const handleWishClick = async (item) => {
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
      const res = await wishAdd({
        ecommercetoken,
        ecomUserId: item?._id,
      });
      if (res) {
        navigate("/wishlist");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleCompareClick = async (id) => {
    if (!ecommercetoken) {
      Swal.fire({
        title: "Login Required",
        text: "Please login before add to compare list.",
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
    const data = {
      product_Id: id,
      ecommercetoken: ecommercetoken,
    };
    try {
      const res = await compare(data);

      navigate("/compare");
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddToCart = async (e, item, price, index, variantId) => {
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

  const handleViewDetails = () => {
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  var w = window.innerWidth;

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    lazyLoad: "ondemand",
  };

  const sliders2 = () => {
    return trendingList?.map((item, index) => {
      const totalRatings = item?.productDetails?.[0]?.ratings?.reduce(
        (sum, rating) => sum + rating?.star,
        0
      );
      const averageRating =
        totalRatings / item?.productDetails?.[0]?.ratings?.length;
      const isItemInCart = cartListItems?.some(
        (cartItem) => cartItem?.productId?._id === item?._id
      );

      const imageUrl = item?.varient?.product_Pic[0];

      return (
        <SwiperSlide>
          <div
            className="product-box-3 h-100 wow fadeInUp my-2"
            // style={{ width: "270px", height: "270px" }}
            key={index}
          >
            <div className="product-header">
              <div className="product-image">
                <Link to={`/product-details-page/${item?._id}`}>
                  <img
                    src={imageUrl}
                    className="img-fluid  lazyload mb-2"
                    alt=""
                  />
                </Link>
                <ul className="product-option">
                  <li
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="View"
                  >
                    <Link
                      // to="#"
                      // data-bs-toggle="modal"
                      // data-bs-target="#view"
                      to={`/product-details-page/${item?._id}`}
                      onClick={() => {
                        handleViewClick(item);
                      }}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </Link>
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Compare"
                    onClick={() => handleCompareClick(item?._id)}
                  >
                    <Link to="/compare">
                      <FontAwesomeIcon icon={faArrowsRotate} />
                    </Link>
                  </li>
                  <li data-bs-toggle="tooltip" data-bs-placement="top">
                    {item?.like === false ? (
                      <Link
                        className="btn p-0 position-relative header-wishlist me-2"
                        to="#"
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
                    ) : (
                      <Link
                        className="btn p-0 position-relative header-wishlist me-2"
                        to="#"
                        title5="Wishlist"
                        disabled
                        style={{ cursor: "not-allowed" }}
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
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-footer">
              <div className="product-detail">
                <Link to="/product">
                  <h5 className="name">
                    {item?.productName_en?.slice(0, 20) +
                      (item?.productName_en.length > 20 ? "..." : "")}
                  </h5>
                </Link>
                {/* <p className="text-content mt-1 mb-2 product-content">
                  Cheesy feet cheesy grin brie. Mascarpone cheese and wine hard
                  cheese the big cheese everyone loves smelly cheese macaroni
                  cheese croque monsieur.
                </p> */}
                <div className="product-rating mt-2">
                  <Star
                    rating={averageRating || 0}
                    totalRating={item.totalRating}
                  />
                  <span> {item?.ratings?.length} reviews </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h6
                      className="unit"
                      style={{ margin: "0px", fontSize: "15px" }}
                    >
                      {item?.varient?.stockQuantity > 0 ? (
                        item?.varient?.stockQuantity <= 5 ? (
                          <span style={{ color: "rgb(199, 0, 85)" }}>
                            Only few left
                          </span>
                        ) : item?.varient?.stockQuantity <= 10 ? (
                          <span style={{ color: "rgb(199, 0, 85)" }}>
                            Only {item?.varient?.stockQuantity} left
                          </span>
                        ) : (
                          <span style={{ color: "green" }}>In Stock</span>
                        )
                      ) : (
                        <span style={{ color: "red" }}>Out Of Stock</span>
                      )}
                    </h6>
                  </div>
                  {item?.varient?.stockQuantity <= 0 ? (
                    <div className=" mt-3">
                      <div className="cart_qty qty-box product-qty">
                        <div
                          className="input-group"
                          style={{ alignItems: "center" }}
                        >
                          <button
                            type="button"
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                            disabled
                            style={{ cursor: "not-allowed" }}
                          >
                            <i className="fa fa-minus" aria-hidden="true" />
                          </button>
                          <div className="m-2">
                            {" "}
                            {count[index] ? count[index] : "0"}
                          </div>
                          <button
                            type="button"
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                            disabled
                            style={{ cursor: "not-allowed" }}
                          >
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className=" mt-3">
                      <div className="cart_qty qty-box product-qty">
                        <div
                          className="input-group"
                          style={{ alignItems: "center" }}
                        >
                          <button
                            type="button"
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                            onClick={() =>
                              handleCountChange(index, count[index] - 1)
                            }
                          >
                            <i className="fa fa-minus" aria-hidden="true" />
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
                            disabled={count[index] === item?.stockQuantity}
                          >
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <h5 className="price">
                  <span className="theme-color">
                    ${item?.varient?.Price * count[index]}
                  </span>{" "}
                  <del>${item?.varient?.oldPrice} </del>
                </h5>

                {isItemInCart ? (
                  <div className="add-to-cart-box bg-white mt-2">
                    <button className="btn btn-add-cart addcart-button">
                      <Link
                        to="/cart"
                        // onClick={() =>
                        //   handleAddToCart(item, item?.addVarient[0]?.Price, index)
                        // }
                      >
                        Go To Cart
                      </Link>
                    </button>
                  </div>
                ) : (
                  <div className="add-to-cart-box bg-white mt-2">
                    <button className="btn btn-add-cart addcart-button">
                      <Link
                        to="#"
                        onClick={(e) =>
                          handleAddToCart(
                            e,
                            item,
                            item?.varient?.Price,
                            index,
                            item?.varient?._id
                          )
                        }
                      >
                        Add To Cart
                      </Link>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    });
  };
  return (
    <>
      {loading ? (
        <Spinners2 />
      ) : (
        <>
          <section
            className="product-list-section section-b-space pb-2"
            style={{ display: trendingList?.length > 0 ? "" : "none" }}
          >
            <div className="container-fluid-lg">
              <div className="title">
                <h2>Trending Products</h2>
                <span className="title-leaf">
                  <svg className="icon-width">
                    <use xlinkHref="../assets/svg/leaf.svg#leaf" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="col-12 wow fadeInUp mx-3">
              <div className="row g-sm-4 g-3 row-cols-xxl-4 ms-2 pe-5 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section heading11">
                <div className="heading11 mb-5">
                  {/* <Slider {...settings1}>{sliders2()}</Slider> */}
                  <Swiper
                    className="mySwiper"
                    spaceBetween={35}
                    // slidesPerView={5}
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                        // spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 3,
                        // spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 5,
                        // spaceBetween: 50,
                      },
                    }}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    navigation={{ clickable: true }}
                    // pagination={{ clickable: true }}
                    modules={[Pagination, Navigation, Autoplay]}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    loop={true}
                  >
                    {sliders2()}
                  </Swiper>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default TrendingProductHome;
