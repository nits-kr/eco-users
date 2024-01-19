import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Slider from "react-slick";
import "react-input-range/lib/css/index.css";
import "jquery-ui-dist/jquery-ui";
import Header from "./Header";
import Footer from "./Footer";
import {
  AddToCart,
  CreateWish,
  ProductDetails,
  ProductList,
  CartList,
  LowPriceProduct,
  HighPriceProduct,
  AscendingProduct,
  DescendingProduct,
  TrandingProduct,
  DiscountProduct,
  AddCompare,
} from "./HttpServices";
import { useGetSubCategoryListQuery } from "../services/Post";
import Star from "./Star";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faArrowsRotate,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import LocationModel from "./LocationModel";
import DealBoxModel from "./DealBoxModel";
import Spinner from "./Spinner";
import { useAddToWislistListMutation } from "../services/Post";
import { useSubSubProductMutation } from "../services/Post";
import { useFilterPriceMutation } from "../services/Post";
import { addToCart } from "../app/slice/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSubCategoryProductListMutation } from "../services/Post";
import { default as ReactSelect } from "react-select";
import Pagination from "./shopping/Pagination";
import CategoryTop from "./shopping/CategoryTop";

function Shop(props) {
  const [productListItems, setProductListItems] = useState([]);
  const [subCategoryProduct] = useSubCategoryProductListMutation();
  const subCategoryListItems = useGetSubCategoryListQuery();
  const [subCategoryListData, setSubCategoryListData] = useState([]);
  const [wishAdd, res] = useAddToWislistListMutation();
  const [productListDetails, setProductListDetails] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [CreateWishItems, setCreateWishItems] = useState([]);
  const [addCompareItems, setAddCompareItems] = useState([]);
  const [cartListItems, setCartListItems] = useState([]);
  const [selectedWeight, setSelectedWeight] = useState("");
  const [loading, setLoading] = useState(false);
  const [subSubProduct, r] = useSubSubProductMutation();
  const [filterProduct, re] = useFilterPriceMutation();
  const [quantity, setQuantity] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState("");
  const location = useLocation();
  let id = location.state?.id;

  const navigate = useNavigate();

  const selector = useSelector((data) => data?.search?.query);

  const [count, setCount] = useState([]);
  useEffect(() => {
    const initialCounts = productListItems?.map(() => 1);
    setCount(initialCounts);
  }, [productListItems]);
  const [subCategoryProductItems, setSubCategoryProductItems] = useState([]);

  const [selectedSubcategories, setSelectedSubcategories] = useState([]);

  axios.defaults.headers.common["x-auth-token-user"] =
    localStorage.getItem("token");

  const handleSaveChanges1 = async (categoryId) => {
    setSelectedSubcategories((prevSelected) => {
      if (prevSelected.includes(categoryId)) {
        return prevSelected.filter((id) => id !== categoryId);
      } else {
        return [...prevSelected, categoryId];
      }
    });
  };

  useEffect(() => {
    fetchProductsForSelectedSubcategories();
  }, [selectedSubcategories]);

  const fetchProductsForSelectedSubcategories = async () => {
    const selectedProducts = await Promise.all(
      selectedSubcategories.map(async (categoryId) => {
        const result = await subCategoryProduct({ id: categoryId });
        return result.data?.results?.listData;
      })
    );
    const flattenedProducts = selectedProducts.flat();
    setProductListItems(flattenedProducts);
  };

  const handleCountChange = (index, newCount) => {
    const newCounts = [...count];
    newCounts[index] = newCount >= 0 ? newCount : 0;
    setCount(newCounts);
  };
  const [currentValue, setCurrentValue] = useState(0);
  const storedId = localStorage.getItem("loginId");
  const [searchQuery, setSearchQuery] = useState("");
  const totalRatings = selectedProduct?.ratings?.reduce(
    (sum, rating) => sum + rating.star,
    0
  );
  const averageRating = totalRatings / selectedProduct?.ratings?.length;
  useEffect(() => {
    if (id) {
      handleSubSubProduct(id);
      localStorage?.removeItem("searchQuerymain");
    } else if (selector || searchQuery) {
      handleSearch(selector || searchQuery);
    } else if (!id || !selector || !searchQuery) {
      localStorage?.removeItem("searchQuerymain");
      fetchData();
    }
  }, [id, selector, searchQuery]);
  const handleSubSubProduct = async (id) => {
    try {
      const { data, error } = await subSubProduct(id);
      if (error) {
        console.log(error);
        return;
      }
      setProductListItems(data?.results?.listData);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = async (event) => {
    const newValue = parseInt(event.target.value, 10);
    setCurrentValue(newValue);
    document.getElementById("rangeValue").textContent = `$0 - $${newValue}`;

    const newAddress = {
      min: "0",
      max: newValue.toString(),
    };

    try {
      const result = await filterProduct(newAddress);
      setProductListItems(result.data?.results?.list);
    } catch (error) {
      console.error("Error filtering products:", error);
    }
  };
  useEffect(() => {
    cartData();
  }, []);
  const cartData = async () => {
    try {
      const data = await CartList();
      setCartListItems(data?.data?.carts);
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   localStorage?.removeItem("searchQuerymain");
  //   fetchData();
  // }, []);
  const fetchData = async () => {
    try {
      props.setProgress(10);
      setLoading(true);
      const { data, error } = await ProductList();
      setProductListItems(data?.results?.list);
      props.setProgress(100);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewClick = (item) => {
    setSelectedProduct(item);
  };
  const handleWishClick = async (item) => {
    try {
      const editAddress = {
        product_Id: item?._id,
        userId: storedId,
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
  const handleTranding = async () => {
    try {
      const { data, error } = await TrandingProduct();
      if (error) {
        console.log(error);
        return;
      }
      setProductListItems(data?.results?.productlist || []);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLowToHigh = async () => {
    try {
      const { data, error } = await LowPriceProduct();
      if (error) {
        console.log(error);
        return;
      }
      setProductListItems(data?.results?.productlist);
    } catch (error) {
      console.log(error);
    }
  };
  const handleHighToLow = async () => {
    try {
      const { data, error } = await HighPriceProduct();
      if (error) {
        console.log(error);
        return;
      }
      setProductListItems(data?.results?.productList || []);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAscending = async () => {
    try {
      const { data, error } = await AscendingProduct();
      if (error) {
        console.log(error);
        return;
      }
      setProductListItems(data?.results?.productList || []);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDescending = async () => {
    try {
      const { data, error } = await DescendingProduct();
      if (error) {
        console.log(error);
        return;
      }
      setProductListItems(data?.results?.productList || []);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDiscount = async () => {
    try {
      const { data, error } = await DiscountProduct();
      if (error) {
        console.log(error);
        return;
      }
      setProductListItems(data?.results?.productData);
    } catch (error) {
      console.log(error);
    }
  };
  var w = window.innerWidth;
  useEffect(() => {
    feather.replace();
  }, []);
  var settings1 = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: w > 500 ? 6 : 1,
    // autoplay: true,
    slidesToScroll: 1,
  };
  const handleViewDetails = () => {
    document?.getElementById("closeModal").click();
    // setTimeout(() => {
    //   window.location.reload();
    // }, 1000);
  };
  useEffect(() => {
    if (searchQuery) {
      handleSearch();
    }
  }, [searchQuery]);

  const handleSearch = async () => {
    try {
      const url1 =
        searchQuery !== ""
          ? `${process.env.REACT_APP_APIENDPOINT}user/product/product/search-product`
          : `${process.env.REACT_APP_APIENDPOINT}user/product/product/list`;
      const response = await axios.post(url1, {
        productName_en: searchQuery,
      });
      const { error, results } = response.data;
      if (error) {
        throw new Error("Error searching for products. Data is not found.");
      } else {
        setProductListItems(
          searchQuery !== "" ? results?.productData : results?.list?.reverse()
        );
      }
    } catch (error) {
      if (error.response) {
        Swal.fire({
          title: "Error!",
          text: error.response.data,
          icon: "error",
          confirmButtonText: "OK",
        });
      } else if (error.request) {
        Swal.fire({
          title: "Error!",
          text: "Network error. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };
  useEffect(() => {
    const reversedList =
      subCategoryListItems?.data?.results?.list?.slice().reverse() ?? [];
    setSubCategoryListData(reversedList);
  }, [subCategoryListItems]);

  const [selectOptions1, setSelectOptions1] = useState([]);

  const handleChange1 = (selected) => {
    setSelectOptions1(selected);

    if (selected.length > 0) {
      const selectedItemId = selected[selected.length - 1].value;
      handleSaveChanges1(selectedItemId);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage, setItemsPerPage] = useState(4);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentItems = productListItems?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const slidersTop = () => {
    return subCategoryListData?.map((item, index) => {
      return (
        <div key={index}>
          <div
            className="shop-category-box d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "#e0e0e0",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            <Link to="#" onClick={() => handleSaveChanges1(item?._id)}>
              <div className="shop-category-image d-flex align-items-center justify-content-center">
                <img
                  src={
                    item
                      ? item?.subCategoryPic
                      : "../assets/svg/1/vegetable.svg"
                  }
                  className=" lazyload mt-2"
                  alt=""
                  style={{
                    height: "100px",
                    width: "162px",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div className="category-box-name d-flex align-items-center justify-content-center m-2">
                <h6 style={{ whiteSpace: "nowrap" }}>
                  <strong className="m-2">
                    {item?.subCategoryName_en || ""}
                  </strong>{" "}
                </h6>
              </div>
            </Link>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      {loading}
      <Header setProductListItems={setProductListItems} Dash={"shop"} />

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
                <h2>Shop </h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/index">
                        <i className="fa-solid fa-house" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Shop
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <CategoryTop subCategoryListData={subCategoryListData} /> */}
      <section className="product-list-section ">
        <div className="container-fluid-lg">
          <Slider {...settings1}>{slidersTop()}</Slider>
        </div>
      </section>

      <section className="section-b-space shop-section">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-3 wow fadeInUp">
              <div className="left-box">
                <div className="shop-left-sidebar">
                  <div className="back-button">
                    <h3>
                      <i className="fa-solid fa-arrow-left" /> Back
                    </h3>
                  </div>
                  <div className="filter-category">
                    <div className="filter-title">
                      <h2>Filters</h2>
                      <Link to="#">Clear All</Link>
                    </div>

                    <ReactSelect
                      options={
                        subCategoryListData?.map((item) => ({
                          value: item._id,
                          label: item.subCategoryName_en,
                        })) || []
                      }
                      isMulti
                      closeMenuOnSelect={false}
                      hideSelectedOptions={false}
                      onChange={handleChange1}
                      allowSelectAll={true}
                      value={selectOptions1}
                    />
                  </div>
                  <div
                    className="accordion custome-accordion"
                    id="accordionExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingOne"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <span>Categories</span>
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingOne"
                      >
                        <div className="accordion-body">
                          <div className="form-floating theme-form-floating-2 search-box">
                            <input
                              type="search"
                              className="form-control"
                              id="search"
                              placeholder="Search .."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <label htmlFor="search">Search</label>
                          </div>
                          <ul className="category-list pe-3 custom-height">
                            {subCategoryListData?.map((item, index) => {
                              return (
                                <li key={index}>
                                  <div className="form-check ps-0 m-0 category-list-box">
                                    <input
                                      className="checkbox_animated"
                                      type="checkbox"
                                      id={`checkbox_${item?._id}`}
                                      defaultChecked={selectedSubcategories.includes(
                                        item?._id
                                      )}
                                      onChange={() =>
                                        handleSaveChanges1(item?._id)
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor={`checkbox_${item?._id}`}
                                    >
                                      <span className="name">
                                        {item?.subCategoryName_en}
                                      </span>
                                      {/* <span className="number">({productListItems?.length})</span> */}
                                    </label>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingThree"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <span>Price</span>
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingThree"
                      >
                        <div className="accordion-body">
                          <>
                            <span
                              className="irs-min"
                              style={{
                                visibility: "visible",
                                display: "inline-block",
                              }}
                            >
                              $0
                            </span>
                            <span
                              className="irs-max"
                              style={{
                                visibility: "visible",
                                marginLeft: "210px",
                                display: "inline-block",
                              }}
                            >
                              $11000
                            </span>
                            <input
                              type="range"
                              className="form-range text-success"
                              min={0}
                              max={11000}
                              step="1"
                              id="customRange3"
                              value={currentValue}
                              onChange={handleChange}
                            />
                            <div
                              className="mb-4 form-control border-success"
                              id="rangeValue"
                              placeholder="$0 - $10000"
                            ></div>
                          </>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-9 wow fadeInUp">
              <div className="show-button">
                <div className="filter-button-group mt-0">
                  <div className="filter-button d-inline-block d-lg-none">
                    <Link>
                      <i className="fa-solid fa-filter" /> Filter Menu
                    </Link>
                  </div>
                </div>
                <div className="top-filter-menu">
                  <div className="category-dropdown">
                    <h5 className="text-content">Sort By :</h5>
                    <div className="dropdown">
                      <button
                        className="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                      >
                        <span>Most Popular</span>{" "}
                        <i className="fa-solid fa-angle-down" />
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <Link
                            className="dropdown-item"
                            id="pop"
                            to="#"
                            onClick={() => handleTranding()}
                          >
                            Popularity
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            id="low"
                            to="#"
                            onClick={() => handleLowToHigh()}
                          >
                            Low - High Price
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            id="high"
                            to="#"
                            onClick={() => handleHighToLow()}
                          >
                            High - Low Price
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" id="rating" to="#">
                            Average Rating
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            id="aToz"
                            to="#"
                            onClick={() => handleAscending()}
                          >
                            A - Z Order
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            id="zToa"
                            to="#"
                            onClick={() => handleDescending()}
                          >
                            Z - A Order
                          </Link>
                        </li>
                        {/* <li>
                              <Link
                                className="dropdown-item"
                                id="off"
                                to="#"
                                onClick={() => handleDiscount()}
                              >
                                % Off - Hight To Low
                              </Link>
                            </li> */}
                      </ul>
                    </div>
                  </div>
                  <div className="grid-option d-none d-md-block">
                    <ul>
                      <li className="three-grid">
                        <Link to="#">
                          <img
                            src="../assets/svg/grid-3.svg"
                            className=" lazyload"
                            alt=""
                          />
                        </Link>
                      </li>
                      <li className="grid-btn d-xxl-inline-block d-none active">
                        <Link to="#">
                          <img
                            src="../assets/svg/grid-4.svg"
                            className=" lazyload d-lg-inline-block d-none"
                            alt=""
                          />
                          <img
                            src="../assets/svg/grid.svg"
                            className=" lazyload img-fluid d-lg-none d-inline-block"
                            alt=""
                          />
                        </Link>
                      </li>
                      <li className="list-btn">
                        <Link to="#">
                          <img
                            src="../assets/svg/list.svg"
                            className=" lazyload"
                            alt=""
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {loading ? (
                <div className="" style={{ marginLeft: "150px" }}>
                  {" "}
                  <Spinner />
                </div>
              ) : (
                <>
                  <div className="row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section">
                    {currentItems?.map((item, index) => {
                      const totalRatings = item?.ratings?.reduce(
                        (sum, rating) => sum + rating?.star,
                        0
                      );
                      const averageRating =
                        totalRatings / item?.ratings?.length;
                      const isItemInCart = cartListItems?.some(
                        (cartItem) => cartItem?.product_Id?._id === item._id
                      );

                      const totalPrice =
                        (item?.addVarient[0]?.Price || 0) * (count[index] || 1);
                      return (
                        <div key={index}>
                          <div className="product-box-3 h-100 wow fadeInUp">
                            <div className="product-header">
                              <div className="product-image">
                                <Link to="/product">
                                  <img
                                    src={item?.addVarient[0]?.product_Pic[0]}
                                    className="img-fluid  lazyload"
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
                                      // to="/product-details-page"
                                      // state={{ id: item?._id }}
                                      to={`/product-details-page/${item?._id}`}
                                      // data-bs-toggle="modal"
                                      // data-bs-target="#view"
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
                                  <li
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                  >
                                    {item?.like === "false" ? (
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
                                            e.currentTarget.style.color =
                                              "black";
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
                                    {item.productName_en}
                                  </h5>
                                </Link>
                                <p className="text-content mt-1 mb-2 product-content">
                                  Cheesy feet cheesy grin brie. Mascarpone
                                  cheese and wine hard cheese the big cheese
                                  everyone loves smelly cheese macaroni cheese
                                  croque monsieur.
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
                                      style={{
                                        margin: "0px",
                                        fontSize: "15px",
                                      }}
                                    >
                                      {item?.addVarient[0]?.stockQuantity >
                                      0 ? (
                                        item?.stockQuantity <= 5 ? (
                                          <span
                                            style={{ color: "rgb(199, 0, 85)" }}
                                          >
                                            Only few left
                                          </span>
                                        ) : item?.addVarient[0]
                                            ?.stockQuantity <= 10 ? (
                                          <span
                                            style={{ color: "rgb(199, 0, 85)" }}
                                          >
                                            Only{" "}
                                            {item?.addVarient[0]?.stockQuantity}{" "}
                                            left
                                          </span>
                                        ) : (
                                          <span style={{ color: "green" }}>
                                            In Stock
                                          </span>
                                        )
                                      ) : (
                                        <span style={{ color: "red" }}>
                                          Out Of Stock
                                        </span>
                                      )}
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
                                            handleCountChange(
                                              index,
                                              count[index] - 1
                                            )
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
                                            handleCountChange(
                                              index,
                                              count[index] + 1
                                            )
                                          }
                                          disabled={
                                            count[index] === item?.stockQuantity
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
                                    ${totalPrice}
                                  </span>{" "}
                                  <del>${item?.addVarient[0]?.oldPrice} </del>
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
                                            item?.addVarient[0]?.Price,
                                            index,
                                            item?.addVarient[0]?._id
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
                    })}
                  </div>
                </>
              )}
              <nav className="custome-pagination">
                <ul className="pagination justify-content-center">
                  <Pagination
                    totalItems={productListItems?.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={onPageChange}
                  />
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section End */}
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
                id="closeModal"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="modal-body">
              <div className="row g-sm-4 g-2">
                <div className="col-lg-6">
                  <div className="slider-image">
                    <img
                      src={selectedProduct?.addVarient[0]?.product_Pic[0]}
                      className="img-fluid lazyload"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-sidebar-modal">
                    <div>
                      <h4 className="title-name">
                        {selectedProduct?.productName_en}
                      </h4>
                      <h4 className="price">
                        ${selectedProduct?.addVarient[0]?.Price}{" "}
                      </h4>
                      <div className="product-rating">
                        <Star rating={averageRating} />
                        <span className="ms-2">
                          {selectedProduct?.ratings?.length} Reviews
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
                            <h6> {selectedProduct?.brandName} </h6>
                          </div>
                        </li>
                        <li>
                          <div className="brand-box">
                            <h5>Product Code:</h5>
                            <h6>{selectedProduct?.SKU} </h6>
                          </div>
                        </li>
                        <li>
                          <div className="brand-box">
                            <h5>Product Type:</h5>
                            <h6>{selectedProduct?.Tags} </h6>
                          </div>
                        </li>
                      </ul>
                      <div className="select-size">
                        <h4>Size :</h4>
                        <select
                          className="form-select select-form-size"
                          value={selectedWeight}
                          onChange={(e) => setSelectedWeight(e.target.value)}
                        >
                          <option value="">Select Size</option>
                          <option value="0.5">1/2 KG</option>
                          <option value="1">1 KG</option>
                          <option value="1.5">1.5 KG</option>
                        </select>
                      </div>
                      <div className="modal-button">
                        <Link to="/cart">
                          <button
                            className="btn btn-md add-cart-button icon"
                            onClick={() => handleAddToCart(selectedProduct)}
                          >
                            Add To Cart
                          </button>
                        </Link>
                        <Link
                          to="/product-details-page"
                          state={{ id: selectedProduct?._id }}
                          // to={`/product/${selectedProduct?._id}`}
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
      </div>

      {/* Quick View Modal Box End */}
      {/* Location Modal Start */}
      <LocationModel />
      {/* Location Modal End */}
      {/* Deal Box Modal Start */}
      <DealBoxModel />

      {/* Deal Box Modal End */}
      {/* Add to cart Modal Start */}
      <div className="add-cart-box">
        <div className="add-iamge">
          <img
            src="../assets/images/cake/pro/1.jpg"
            className="img-fluid  lazyload"
            alt=""
          />
        </div>
        <div className="add-contain">
          <h6>Added to Cart</h6>
        </div>
      </div>
      {/* Add to cart Modal End */}
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

export default Shop;
