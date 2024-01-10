import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import feather from "feather-icons";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Slider from "react-slick";
import { HandleOkButtonClick, UseCountdownTimer } from "./JavaScriptFunction";
import Header from "./Header";
import Footer from "./Footer";
import {
  useGetBannerListQuery,
  useGetTrendingProductQuery,
  useTopBannerListMutation,
} from "../services/Post";
import Spinner from "./Spinner";
import {
  AddToCart,
  CreateWish,
  ProductDetails,
  CartList,
  DiscountProduct,
  AddCompare,
} from "./HttpServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faArrowsRotate,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Star from "./Star";
import { useGetCategoryListQuery } from "../services/Post";
import { useGetAllPostQuery } from "../services/Post";
import { useAddToWislistListMutation } from "../services/Post";
import BestSeller from "./indexgrocary/BestSeller";
import Foodcupboard from "./indexgrocary/Foodcupboard";
import Blog from "./indexgrocary/Blog";
import Topbanner from "./indexgrocary/Topbanner";
import Middlebanner from "./indexgrocary/Middlebanner";
import Bottombanner from "./indexgrocary/Bottombanner";
import Spinners2 from "./Spinners2";
function IndexGrocary(props) {
  const categoryListItems = useGetCategoryListQuery();
  const trendingProduct = useGetTrendingProductQuery();
  const { data: categoryBanner } = useGetBannerListQuery();
  const [trendingList, setTrendingList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [discountProduct, setDiscountProduct] = useState([]);
  const [productListDetails, setProductListDetails] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [CreateWishItems, setCreateWishItems] = useState([]);
  const [addCompareItems, setAddCompareItems] = useState([]);
  const [cartListItems, setCartListItems] = useState([]);

  console.log("cartListItems", cartListItems);
  const [categoryListData, setCategoryListData] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [wishAdd, res] = useAddToWislistListMutation();
  const [count, setCount] = useState([]);
  const [items, setItems] = useState([]);

  const [bannerListnew] = useTopBannerListMutation();
  const [bannerList, setBannerList] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    if (categoryBanner) {
      setBannerList(categoryBanner?.results);
    }
  }, [categoryBanner]);
  useEffect(() => {
    const initialCounts = trendingList?.map(() => 1);
    setCount(initialCounts);
  }, [trendingList]);

  const handleCountChange = (index, newCount) => {
    const newCounts = [...count];
    newCounts[index] = newCount >= 0 ? newCount : 0;
    setCount(newCounts);
  };
  const blog = useGetAllPostQuery();

  const [blogList, setBlogList] = useState();
  axios.defaults.headers.common["x-auth-token-user"] =
    localStorage.getItem("token");
  const buyItem = localStorage?.getItem("bannerItems");

  const handleBannerChanges = async (categoryId) => {
    const editAddress = {
      id: categoryId,
    };
    const result = await bannerListnew(editAddress);
    if (result) {
      localStorage?.setItem(
        "bannerItems",
        encodeURIComponent(JSON.stringify(result?.data?.results?.topBanner))
      );
      // setBannerItems(result?.data?.results?.banner);
    }
  };

  useEffect(() => {
    if (buyItem) {
      try {
        const decodedBuyItem = JSON.parse(decodeURIComponent(buyItem));
        setItems(decodedBuyItem);
      } catch (error) {
        console.error("Error parsing buyItem:", error);
      }
    } else {
      console.log("buyItem not found in localStorage");
    }
  }, [buyItem]);

  useEffect(() => {
    feather.replace();
    props.setProgress(10);
    setLoading(true);
    if (blog?.data?.results?.list) {
      setBlogList(blog?.data?.results?.list);
      props.setProgress(100);
      setLoading(false);
    } else {
      setBlogList(blog?.data?.results?.list);
    }
  }, [blog]);
  useEffect(() => {
    const reversedList =
      categoryListItems?.data?.results?.list?.slice().reverse() ?? [];
    setCategoryListData(reversedList);
  }, [categoryListItems]);

  useEffect(() => {
    cartData();
  }, []);
  const cartData = async () => {
    try {
      const res = await CartList();

      setCartListItems(res?.data?.carts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      props.setProgress(10);
      setLoading(true);
      const { data, error } = await DiscountProduct();

      setDiscountProduct(data?.results?.productData);
      setLoading(true);
      props.setProgress(50);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (discountProduct?.length > 0) {
      getData();
    }
  }, [discountProduct]);
  const getData = async () => {
    try {
      props.setProgress(70);
      setLoading(true);
      const ids = discountProduct.map((item) => item._id);
      const promises = ids.map((id) => ProductDetails(id));
      const results = await Promise.all(promises);

      const details = results.map((result) => result?.data?.results?.details);
      setProductListDetails(details);
      props.setProgress(100);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
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
  const handleCompareClick = async (item) => {
    try {
      const { data, error } = await AddCompare(item._id);
      if (error) {
        console.log(error);
        return;
      }
      const newCreateCompareItems = [...addCompareItems, data];
      setAddCompareItems(newCreateCompareItems);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddToCart = async (e, item, price, index, variantId) => {
    console.log("item added id", item?._id);
    e.preventDefault();

    try {
      const { data, error } = await AddToCart(
        item._id,
        count[index],
        price * count[index],
        variantId
      );
      if (error) {
        console.log(error);
        return;
      }
      const newCartItems = [...cartListItems, data];
      setCartListItems(newCartItems);
      navigate("/cart");
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      window?.location?.reload();
    }, 500);
  };
  useEffect(() => {
    props.setProgress(10);
    setLoading(true);
    if (trendingProduct?.data?.results?.productlist) {
      setTrendingList(trendingProduct?.data?.results?.productlist);
      props.setProgress(100);
      setLoading(false);
    }
  });
  const handleViewDetails = () => {
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  var w = window.innerWidth;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: w > 500 ? 3 : 1,
    autoplay: true,
    slidesToScroll: 1,
  };
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  useEffect(() => {
    feather.replace();
  }, []);

  var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  UseCountdownTimer(deadline);

  const handleOkButtonClick = () => {
    HandleOkButtonClick();
  };

  const sliders = () => {
    return blogList?.map((item, index) => (
      <div key={index}>
        <div className="blog-box">
          <div className="product-header">
            <div className="blog-box-image">
              <Link to="/blog" className="blog-image">
                <img
                  src="../../assets/images/vegetable/blog/1.jpg"
                  className="bg-img  lazyload"
                  alt=""
                />
              </Link>
            </div>
            <Link to="/blog" className="blog-detail">
              <h6>20 March, 2022</h6>
              <h5>Fresh Vegetable Online</h5>
            </Link>
          </div>
        </div>
      </div>
    ));
  };
  const totalRatings = selectedProduct?.ratings?.reduce(
    (sum, rating) => sum + rating.star,
    0
  );
  const averageRating = totalRatings / selectedProduct?.ratings?.length;
  const sliders2 = () => {
    return trendingList?.map((item, index) => {
      const totalRatings = item?.productDetails?.[0]?.ratings?.reduce(
        (sum, rating) => sum + rating?.star,
        0
      );
      const averageRating =
        totalRatings / item?.productDetails?.[0]?.ratings?.length;
      const isItemInCart = cartListItems?.some(
        (cartItem) => cartItem?.product_Id?._id === item?._id
      );

      const totalPrice =
        (item?.productDetails?.[0]?.addVarient?.[0]?.Price || 0) *
        (count[index] || 1);
      const imageUrl =
        item?.productDetails?.[0]?.addVarient?.[0]?.product_Pic[0];

      return (
        <div key={index}>
          <div className="product-box-3 h-100 wow fadeInUp">
            <div className="product-header">
              <div className="product-image">
                <Link to="/product">
                  <img src={imageUrl} className="img-fluid  lazyload" alt="" />
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
                      onClick={() => handleViewClick(item)}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </Link>
                  </li>
                  <li
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Compare"
                    onClick={() => handleCompareClick(item)}
                  >
                    <Link to="/compare">
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
                  <h5 className="name">
                    {item?.productDetails?.[0]?.productName_en}
                  </h5>
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
                  <span>
                    {" "}
                    {item?.productDetails?.[0]?.ratings?.length} reviews{" "}
                  </span>
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
                      {item?.productDetails?.[0]?.addVarient?.[0]
                        ?.stockQuantity > 0 ? (
                        item?.productDetails?.[0]?.addVarient?.[0]
                          ?.stockQuantity <= 5 ? (
                          <span style={{ color: "rgb(199, 0, 85)" }}>
                            Only few left
                          </span>
                        ) : item?.productDetails?.[0]?.addVarient?.[0]
                            ?.stockQuantity <= 10 ? (
                          <span style={{ color: "rgb(199, 0, 85)" }}>
                            Only{" "}
                            {
                              item?.productDetails?.[0]?.addVarient?.[0]
                                ?.stockQuantity
                            }{" "}
                            left
                          </span>
                        ) : (
                          <span style={{ color: "green" }}>In Stock</span>
                        )
                      ) : (
                        <span style={{ color: "red" }}>Out Of Stock</span>
                      )}
                    </h6>
                  </div>
                  {item?.productDetails?.[0]?.addVarient?.[0]?.stockQuantity <=
                  0 ? (
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
                  <span className="theme-color">${totalPrice}</span>{" "}
                  <del>
                    ${item?.productDetails?.[0]?.addVarient?.[0]?.oldPrice}{" "}
                  </del>
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
                        to="/cart"
                        onClick={(e) =>
                          handleAddToCart(
                            e,
                            item,
                            item?.productDetails?.[0]?.addVarient?.[0]?.Price,
                            index,
                            item?.productDetails?.[0]?.addVarient?.[0]?._id
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
        </div>
      );
    });
  };

  return (
    <>
      {loading}
      {/* Header Start */}
      <Header Dash={"home"} />
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
            <Link to="/shop">
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
      {/* Home Section Start */}

      <Topbanner bannerList={bannerList} />

      {/* Home Section End */}
      {/* Banner Section Start */}
      <section className="banner-section ratio_60 wow fadeInUp">
        <div className="container-fluid-lg">
          <div className="banner-slider ">
            <Slider {...settings}>
              {bannerList?.scrollBanner?.map((item, index) => {
                return (
                  <div className="banner-contain hover-effect " key={index}>
                    <Link to={`/Banner-list/${item.subCategory_Id._id}`}>
                      <img
                        src={item?.scrollBanner[0]}
                        className="bg-img  lazyload"
                        alt=""
                        style={{ width: "455px", height: "250px" }}
                      />
                      <div className="banner-details">
                        <div className="banner-box">
                          <h6 className="text-danger">5% OFF</h6>
                          <h5>Hot Deals on New Items</h5>
                          <h6 className="text-content">
                            Daily Essentials Eggs &amp; Dairy
                          </h6>
                        </div>
                        <Link to="/shop" className="banner-button text-white">
                          Shop Now <i className="fa-solid fa-right-long ms-2" />
                        </Link>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
      {/* Banner Section End */}
      {/* Product Section Start */}
      <section className="product-section">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3">
            <div className="col-xxl-3 col-xl-4 d-none d-xl-block">
              <div className="p-sticky">
                <div className="category-menu">
                  <h3>Category</h3>
                  <ul>
                    {categoryListData?.map((item, index) => {
                      return (
                        <li key={index}>
                          <div className="category-list">
                            <img
                              src={item?.categoryPic}
                              className=" lazyload"
                              alt=""
                            />
                            <h5>
                              <Link to="/shop"> {item?.categoryName_en} </Link>
                            </h5>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <ul className="value-list">
                    <li>
                      <div className="category-list">
                        <h5 className="ms-0 text-title">
                          <Link to="/shop">Value of the Day</Link>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <h5 className="ms-0 text-title">
                          <Link to="/shop">Top 50 Offers</Link>
                        </h5>
                      </div>
                    </li>
                    <li className="mb-0">
                      <div className="category-list">
                        <h5 className="ms-0 text-title">
                          <Link to="/shop">New Arrivals</Link>
                        </h5>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="ratio_156 section-t-space">
                  <div className="home-contain hover-effect">
                    {/* <img
                      src={bannerList?.sideBanner[0]?.slice(0,1)?.sideBanner[0]}
                      className="bg-img  lazyload w-100"
                      alt=""
                    /> */}
                    <Link to="/shop">
                      {bannerList?.sideBanner?.[0]?.sideBanner?.[0] && (
                        <img
                          src={bannerList.sideBanner[0].sideBanner[0]}
                          className="bg-img lazyload w-100"
                          alt=""
                          style={{ height: "455px" }}
                        />
                      )}

                      <div className="home-detail p-top-left home-p-medium">
                        <div>
                          <h6 className="text-yellow home-banner">Seafood</h6>
                          <h3 className="text-uppercase fw-normal">
                            <span className="theme-color fw-bold">Freshes</span>{" "}
                            Products
                          </h3>
                          <h3 className="fw-light">every hour</h3>
                          <button
                            onClick={() => {
                              window.location.href = "/shop";
                            }}
                            className="btn btn-animation btn-md mend-auto"
                          >
                            Shop Now{" "}
                            <i className="fa-solid fa-arrow-right icon" />
                          </button>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="ratio_medium section-t-space">
                  <Link to="/shop">
                    <div className="home-contain hover-effect">
                      {/* <img
                      src="../../assets/images/vegetable/banner/11.jpg"
                      className="img-fluid  lazyload"
                      alt=""
                    /> */}
                      {bannerList?.sideBanner?.[1]?.sideBanner?.[0] && (
                        <img
                          src={bannerList.sideBanner[1].sideBanner[0]}
                          className="bg-img lazyload w-100"
                          alt=""
                          style={{ height: "455px" }}
                        />
                      )}

                      <div className="home-detail p-top-left home-p-medium">
                        <div>
                          <h4 className="text-yellow text-exo home-banner">
                            Organic
                          </h4>
                          <h2 className="text-uppercase fw-normal mb-0 text-russo theme-color">
                            fresh
                          </h2>
                          <h2 className="text-uppercase fw-normal text-title">
                            Vegetables
                          </h2>
                          <p className="mb-3">Super Offer to 50% Off</p>
                          <button
                            onClick={() => {
                              window.location.href = "/shop";
                            }}
                            className="btn btn-animation btn-md mend-auto"
                          >
                            Shop Now{" "}
                            <i className="fa-solid fa-arrow-right icon" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="section-t-space">
                  {loading ? (
                    <Spinners2 />
                  ) : (
                    <>
                      <div className="category-menu">
                        <h3>Trending Products</h3>
                        <ul className="product-list border-0 p-0 d-block">
                          {trendingList.map((item, index) => {
                            const imageUrl =
                              item?.productDetails?.[0]?.addVarient?.[0]
                                ?.product_Pic[0];
                            return (
                              <li key={index}>
                                <div className="offer-product">
                                  <Link to="/product" className="offer-image">
                                    <img
                                      src={imageUrl}
                                      className=""
                                      alt="Test Alt Text"
                                    />
                                  </Link>
                                  <div className="offer-detail">
                                    <div>
                                      <Link
                                        to="/product"
                                        className="text-title"
                                      >
                                        <h6 className="name">
                                          {
                                            item?.productDetails?.[0]
                                              ?.productName_en
                                          }
                                        </h6>
                                      </Link>
                                      <span>
                                        {" "}
                                        {
                                          item?.productDetails?.[0]
                                            ?.addVarient?.[0]?.stockQuantity
                                        }{" "}
                                        left{" "}
                                      </span>
                                      <h6 className="price theme-color">
                                        $
                                        {item?.productDetails?.[0]?.addVarient?.[0]?.Price?.toFixed(
                                          2
                                        )}{" "}
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
                <div className="section-t-space">
                  <div className="category-menu">
                    <h3>Customer Comment</h3>
                    <div className="review-box">
                      <div className="review-contain">
                        <h5 className="w-75">
                          We Care About Our Customer Experience
                        </h5>
                        <p>
                          In publishing and graphic design, Lorem ipsum is a
                          placeholder text commonly used to demonstrate the
                          visual form of a document or a typeface without
                          relying on meaningful content.
                        </p>
                      </div>
                      <div className="review-profile">
                        <div className="review-image">
                          <img
                            src="../../assets/images/vegetable/review/1.jpg"
                            className="img-fluid  lazyload"
                            alt=""
                          />
                        </div>
                        <div className="review-detail">
                          <h5>Tina Mcdonnale</h5>
                          <h6>Sale Manager</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-8">
              <div className="title title-flex">
                <div>
                  <h2>Top Save Today</h2>
                  <span className="title-leaf">
                    <svg className="icon-width">
                      <use xlinkHref="../assets/svg/leaf.svg#leaf" />
                    </svg>
                  </span>
                  <p>
                    Don't miss this opportunity at a special discount just for
                    this week.
                  </p>
                </div>
                <div className="timing-box">
                  <div className="timing ">
                    <i data-feather="clock" />
                    <h6 className="name">Expires in:</h6>
                    <div className="time" id="clockdiv-1">
                      <ul>
                        <li>
                          <div className="counter">
                            <div className="days">
                              <h6 id="days">0</h6>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="counter">
                            <div className="hours">
                              <h6 id="hours">00</h6>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="counter">
                            <div className="minutes">
                              <h6 id="minutes">00</h6>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="counter">
                            <div className="seconds">
                              <h6 id="seconds">00</h6>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {loading ? (
                <Spinners2 />
              ) : (
                <>
                  <div className="col-12 wow fadeInUp">
                    <div className="row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section heading11">
                      <div className="heading11 mb-5">
                        <Slider {...settings1}>{sliders2()}</Slider>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div className="title">
                <h2>Browse by Categories</h2>
                <span className="title-leaf">
                  <svg className="icon-width">
                    <use xlinkHref="../assets/svg/leaf.svg#leaf" />
                  </svg>
                </span>
                <p>Top Categories Of The Week</p>
              </div>
              <div className="category-slider-2 product-wrapper no-arrow">
                <Slider {...settings}>
                  {categoryListData.map((item, index) => {
                    return (
                      <div>
                        <Link to="/shop" className="category-box category-dark">
                          <div className="heading12">
                            <div key={index}>
                              <img
                                src={item?.categoryPic}
                                className=" lazyload"
                                alt=""
                              />
                              <h5> {item?.categoryName_en} </h5>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </Slider>
              </div>

              <div className="section-t-space section-b-space">
                <div className="row g-md-4 g-3">
                  {bannerList?.middleBanner?.slice(0, 2)?.map((item, index) => (
                    <div className="col-md-6" key={index}>
                      <Link
                        to={`/Banner-list/${item.subCategory_Id._id}`}
                        className="banner-contain hover-effect"
                        style={{
                          backgroundImage: `url(${item.middleBanner[0]})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat",
                          display: "block",
                        }}
                      >
                        <div className="banner-details p-center-left p-4">
                          <div>
                            <h3 className="text-exo">50% offer</h3>
                            <h4 className="text-russo fw-normal theme-color mb-2">
                              {item?.category_Id?.categoryName_en}
                            </h4>
                            <button
                              onClick={() => {
                                window.location.href = `/Banner-list/${item.subCategory_Id._id}`;
                              }}
                              className="btn btn-animation btn-sm mend-auto"
                            >
                              Shop Now{" "}
                              <i className="fa-solid fa-arrow-right icon" />
                            </button>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <Foodcupboard />
              <div className="section-t-space">
                <div
                  className="banner-contain"
                  style={{
                    backgroundImage: `url(../../assets/images/vegetable/banner/15.jpg) `,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    display: "block",
                  }}
                >
                  <div className="banner-details p-center p-4 text-white text-center">
                    <div>
                      <h3 className="lh-base fw-bold offer-text">
                        Get $3 Cashback! Min Order of $30
                      </h3>
                      <h6 className="coupon-code">Use Code : GROCERY1920</h6>
                    </div>
                  </div>
                </div>
              </div>

              <Middlebanner bannerList={bannerList} />

              <BestSeller />

              <Bottombanner bannerList={bannerList} />

              <Blog blogList={blogList} />
            </div>
          </div>
        </div>
      </section>
      {/* Product Section End */}
      {/* Newsletter Section Start */}
      <section className="newsletter-section section-b-space">
        <div className="container-fluid-lg">
          <div className="newsletter-box newsletter-box-2">
            <div className="newsletter-contain py-5">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xxl-4 col-lg-5 col-md-7 col-sm-9 offset-xxl-2 offset-md-1">
                    <div className="newsletter-detail">
                      <h2>Join our newsletter and get...</h2>
                      <h5>$20 discount for your first order</h5>
                      <div className="input-box">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Enter Your Email"
                        />
                        <i className="fa-solid fa-envelope arrow" />
                        <button className="sub-btn  btn-animation">
                          <span className="d-sm-block d-none">Subscribe</span>
                          <i className="fa-solid fa-arrow-right icon" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter Section End */}
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
                      src={
                        selectedProduct?.products[0]?.addVarient[0]
                          ?.product_Pic[0]
                      }
                      className="img-fluid  lazyload"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-sidebar-modal">
                    <h4 className="title-name">
                      {selectedProduct?.products[0]?.productName_en}
                    </h4>
                    <h4 className="price">
                      ${selectedProduct?.products[0]?.addVarient[0]?.Price}{" "}
                    </h4>
                    <div className="product-rating">
                      <ul className="rating">
                        <Star
                          rating={averageRating || 0}
                          totalRating={selectedProduct?.ratings?.length}
                        />
                      </ul>
                      <span className="ms-2">
                        {selectedProduct?.ratings?.length}Reviews
                      </span>
                      <span className="ms-2 text-danger">
                        6 sold in last 16 hours
                      </span>
                    </div>
                    <div className="product-detail">
                      <h4>Product Details :</h4>
                      <p>{selectedProduct?.Description}</p>
                    </div>
                    <ul className="brand-list">
                      <li>
                        <div className="brand-box">
                          <h5>Brand Name:</h5>
                          <h6>
                            {selectedProduct?.category_Id?.categoryName_en}
                          </h6>
                        </div>
                      </li>
                      <li>
                        <div className="brand-box">
                          <h5>Product Code:</h5>
                          <h6>
                            {selectedProduct?.products[0]?.addVarient[0]?.SKU}
                          </h6>
                        </div>
                      </li>
                      <li>
                        <div className="brand-box">
                          <h5>Product Type:</h5>
                          <h6>{selectedProduct?.products[0]?.productType}</h6>
                        </div>
                      </li>
                    </ul>
                    {/* <div className="select-size">
                      <h4>Cake Size :</h4>
                      <select
                        className="form-select select-form-size"
                        defaultValue="Select Size"
                      >
                        <option value="">Select Size</option>
                        <option value="1.2">1/2 KG</option>
                        <option value={0}>1 KG</option>
                        <option value="1.5">1/5 KG</option>
                        <option value="red">Red Roses</option>
                        <option value="pink">With Pink Roses</option>
                      </select>
                    </div> */}
                    <div className="modal-button">
                      <Link
                        to="/cart"
                        className="btn btn-md add-cart-button icon"
                        onClick={() => handleAddToCart(selectedProduct)}
                      >
                        Add To Cart
                      </Link>
                      <Link
                        to={`/product/${selectedProduct?._id}`}
                        className="btn theme-bg-color view-button icon text-white fw-bold btn-md"
                        onClick={handleViewDetails}
                      >
                        View More Details
                      </Link>
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
                {/* <i className="fa-solid fa-xmark" /> */}
                <i className="fas fa-times" />
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
      {/* Cookie Bar Box Start */}
      <div className="cookie-bar-box">
        <div className="cookie-box">
          <div className="cookie-image">
            <img
              src="../../assets/images/cookie-bar.png"
              className="lazyload"
              alt=""
            />
            <h2>Cookies!</h2>
          </div>
          <div className="cookie-contain">
            <h5 className="text-content">
              We use cookies to make your experience better
            </h5>
          </div>
        </div>
        <div className="button-group">
          <button className="btn privacy-button">Privacy Policy</button>
          <button className="btn ok-button" onClick={handleOkButtonClick}>
            OK
          </button>
        </div>
      </div>
      {/* Cookie Bar Box End */}
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
                          src="../../assets/images/vegetable/product/10.png"
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
                          src="../../assets/images/vegetable/product/11.png"
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
                          src="../../assets/images/vegetable/product/12.png"
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
                          src="../../assets/images/vegetable/product/13.png"
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

      {/* Tap to top start */}
      <div className="theme-option">
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

export default IndexGrocary;
