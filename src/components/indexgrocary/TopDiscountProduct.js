import React, { useEffect, useState } from "react";
import {
  useAddCompareMutation,
  useAddToCartMutation,
  useAddToWislistListMutation,
  useGetCartListheaderMutation,
  useGetTopDiscountProductQuery,
} from "../../services/Post";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faArrowsRotate,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Star from "../Star";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

function TopDiscountProduct() {
  const ecommercetoken = useSelector((data) => data?.local?.ecomWebtoken);
  const ecomUserId = useSelector((data) => data?.local?.ecomUserid);

  const { data: topDiscountedProduct } = useGetTopDiscountProductQuery();
  const [topDiscount, setTopDiscount] = useState([]);
  const [count, setCount] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [CreateWishItems, setCreateWishItems] = useState([]);

  const [cartListQuery] = useGetCartListheaderMutation();
  const [addtocart] = useAddToCartMutation();
  const [compare] = useAddCompareMutation();
  const [wishAdd] = useAddToWislistListMutation();

  const navigate = useNavigate();

  const [cartListItems, setCartListItems] = useState([]);
  useEffect(() => {
    if (ecomUserId) {
      cartData(ecomUserId);
    }
  }, [ecomUserId]);
  const cartData = async () => {
    try {
      const res = await cartListQuery({ ecomUserId, ecommercetoken });

      setCartListItems(res?.data?.carts);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("topDiscount", topDiscount);
  console.log("topDiscountedProduct", topDiscountedProduct);

  useEffect(() => {
    if (topDiscountedProduct) {
      setTopDiscount(topDiscountedProduct?.results?.productList);
    }
  }, [topDiscountedProduct]);

  const handleCountChange = (index, newCount) => {
    const newCounts = [...count];
    newCounts[index] = newCount >= 0 ? newCount : 0;
    setCount(newCounts);
  };

  useEffect(() => {
    const initialCounts = topDiscount?.map(() => 1);
    setCount(initialCounts);
  }, [topDiscount]);

  const handleViewClick = (item) => {
    setSelectedProduct(item);
  };

  const userId = localStorage?.getItem("loginId");
  const handleWishClick = async (item) => {
    try {
      const editAddress = {
        product_Id: item?._id,
        userId: userId,
        like: true,
      };

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

  const settings1 = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  const sliders2 = () => {
    return topDiscount?.map((item, index) => {
      const totalRatings = item?.ratings?.reduce(
        (sum, rating) => sum + rating?.star,
        0
      );
      const averageRating = totalRatings / item?.ratings?.length;
      const isItemInCart = cartListItems?.some(
        (cartItem) => cartItem?.product_Id?._id === item?._id
      );

      const totalPrice =
        (item?.addVarient?.[0]?.Price || 0) * (count[index] || 1);
      const imageUrl = item?.addVarient?.[0]?.product_Pic[0];

      return (
        <div key={index}>
          <div className="product-box-3 h-100 wow fadeInUp">
            <div className="product-header">
              <div className="product-image">
                <Link to={`/product-details-page/${item?._id}`}>
                  <img src={imageUrl} className="img-fluid  lazyload" alt="" />
                </Link>
                <ul className="product-option">
                  <li
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="View"
                  >
                    <Link
                      to={`/product-details-page/${item?._id}`}
                      onClick={() => handleViewClick(item)}
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
                    <Link to="#">
                      <FontAwesomeIcon icon={faArrowsRotate} />
                    </Link>
                  </li>
                  <li data-bs-toggle="tooltip" data-bs-placement="top">
                    {item?.productDetails?.[0]?.like === "false" ? (
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
                  <h5 className="name">{item?.productName_en}</h5>
                </Link>
                <p className="text-content mt-1 mb-2 product-content">
                  Cheesy feet cheesy grin brie. Mascarpone cheese and wine hard
                  cheese the big cheese everyone loves smelly cheese macaroni
                  cheese croque monsieur.
                </p>
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
                      {item?.addVarient?.[0]?.stockQuantity > 0 ? (
                        item?.addVarient?.[0]?.stockQuantity <= 5 ? (
                          <span style={{ color: "rgb(199, 0, 85)" }}>
                            Only few left
                          </span>
                        ) : item?.addVarient?.[0]?.stockQuantity <= 10 ? (
                          <span style={{ color: "rgb(199, 0, 85)" }}>
                            Only {item?.addVarient?.[0]?.stockQuantity} left
                          </span>
                        ) : (
                          <span style={{ color: "green" }}>In Stock</span>
                        )
                      ) : (
                        <span style={{ color: "red" }}>Out Of Stock</span>
                      )}
                    </h6>
                  </div>
                  {item?.addVarient?.[0]?.stockQuantity <= 0 ? (
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
                            disabled={
                              count[index] ===
                                item?.addVarient?.[0]?.stockQuantity ||
                              item?.addVarient?.[0]?.stockQuantity <= 0
                            }
                          >
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <h5 className="price">
                  <span className="theme-color">${totalPrice}</span>{" "}
                  <del>${item?.addVarient?.[0]?.oldPrice} </del>
                </h5>

                {isItemInCart ? (
                  <div className="add-to-cart-box bg-white mt-2">
                    <button className="btn btn-add-cart addcart-button">
                      <Link to="/cart">Go To Cart</Link>
                    </button>
                  </div>
                ) : (
                  <div className="add-to-cart-box bg-white mt-2">
                    <button
                      className="btn btn-add-cart addcart-button"
                      onClick={(e) =>
                        handleAddToCart(
                          e,
                          item,
                          item?.addVarient?.[0]?.Price,
                          index,
                          item?.addVarient?.[0]?._id
                        )
                      }
                    >
                      Add To Cart
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <div className="col-12 wow fadeInUp">
        <h3 className="mb-3">
          <strong>Top Discounted Products</strong>{" "}
        </h3>
        <div className="row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section heading11">
          <div className="heading11 mb-5">
            <Slider {...settings1}>{sliders2()}</Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopDiscountProduct;