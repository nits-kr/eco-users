import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Header";
import Footer from "./Footer";
import {
  useGetAllPostQuery,
  useGetCategoryListQuery,
  useGetTrendingProductQuery,
  useSearchBlogMutation,
} from "../services/Post";
import Spinner from "./Spinner";
import { useSelector } from "react-redux";

function Blog(props) {
  const ecommercetoken = useSelector((data) => data?.local?.ecomWebtoken);
  const ecomUserId = useSelector((data) => data?.local?.ecomUserid);
  const [loading, setLoading] = useState(false);
  const [blogSearch] = useSearchBlogMutation();
  const categoryListItems = useGetCategoryListQuery();
  const trendingProduct = useGetTrendingProductQuery();
  const [trendingList, setTrendingList] = useState([]);
  const [categoryListData, setCategoryListData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const blog = useGetAllPostQuery();

  const navigate = useNavigate();
  const [blogList, setBlogList] = useState();

  console.log("blogList", blogList);

  useEffect(() => {
    props.setProgress(10);
    setLoading(true);
    if (trendingProduct?.data?.results?.productlist) {
      setTrendingList(trendingProduct?.data?.results?.productlist);
      props.setProgress(100);
      setLoading(false);
    }
  }, [trendingProduct?.data?.results?.productlist, props]);

  useEffect(() => {
    const reversedList =
      categoryListItems?.data?.results?.list?.slice().reverse() ?? [];
    setCategoryListData(reversedList);
  }, [categoryListItems]);

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
  }, [blog, props]);

  useEffect(() => {
    if (searchQuery) {
      searchBlog();
    }
  }, [searchQuery]);

  const searchBlog = async () => {
    try {
      const response = await blogSearch({
        title: searchQuery,
        ecommercetoken: ecommercetoken,
      });

      console.log("blog response", response);
      if (response?.data?.message === "Success") {
        setBlogList(response?.data?.results?.blogData);
      } else if (response?.error?.data?.message === "Data are Not Found") {
        navigate("*");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading}
      {/* Header Start */}
      <Header Dash={"blog"} />
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
                <h2>Blog Grid</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/index">
                        <i className="fa-solid fa-house" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Blog Grid
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}
      {/* Blog Section Start */}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="blog-section section-b-space">
            <div className="container-fluid-lg">
              <div className="row g-4">
                <div className="col-xxl-9 col-xl-8 col-lg-7 order-lg-2">
                  <div className="row g-4 ratio_65">
                    {blogList?.map((item, index) => {
                      return (
                        <div className="col-xxl-4 col-sm-6" key={index}>
                          <div className="blog-box wow fadeInUp">
                            <div className="blog-image">
                              <Link to="/blog-detail">
                                <img
                                  src={item.blog_Pic}
                                  className="bg-img  lazyload"
                                  alt=""
                                  width="100%"
                                />
                              </Link>
                            </div>
                            <div className="blog-contain">
                              <div className="blog-label">
                                <span className="time">
                                  <i data-feather="clock" />{" "}
                                  <span> {item?.createdAt?.slice(0, 10)} </span>
                                </span>
                                <span className="super">
                                  <i data-feather="user" />{" "}
                                  <span>Mark J. Speight</span>
                                </span>
                              </div>
                              <Link to="/blog-detail">
                                <h3>{item.title}</h3>
                              </Link>
                              <Link
                                to="/blog-details"
                                state={{ id: item?._id }}
                                className="blog-button"
                              >
                                Read More
                                <i className="fa-solid fa-right-long" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <nav className="custome-pagination">
                    <ul className="pagination justify-content-center">
                      <li className="page-item disabled">
                        <Link className="page-link" to="#" tabIndex={-1}>
                          <i className="fa-solid fa-angles-left" />
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item" aria-current="page">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          <i className="fa-solid fa-angles-right" />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-5 order-lg-1">
                  <div className="left-sidebar-box wow fadeInUp">
                    <div className="left-search-box">
                      <div className="search-box">
                        <input
                          type="search"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Search...."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>
                    <div
                      className="accordion left-accordion-box"
                      id="accordionPanelsStayOpenExample"
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
                            data-bs-target="#panelsStayOpen-collapseOne"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne"
                          >
                            Recent Post
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="panelsStayOpen-headingOne"
                        >
                          <div className="accordion-body pt-0">
                            <div className="recent-post-box">
                              <div className="recent-box">
                                <Link to="/blog" className="recent-image">
                                  <img
                                    src="../assets/images/inner-page/blog/1.jpg"
                                    className="img-fluid  lazyload"
                                    alt=""
                                  />
                                </Link>
                                <div className="recent-detail">
                                  <Link to="/blog">
                                    <h5 className="recent-name">
                                      Green onion knife and salad placed
                                    </h5>
                                  </Link>
                                  <h6>
                                    25 Jan, 2022 <i data-feather="thumbs-up" />
                                  </h6>
                                </div>
                              </div>
                              <div className="recent-box">
                                <Link to="/blog" className="recent-image">
                                  <img
                                    src="../assets/images/inner-page/blog/2.jpg"
                                    className="img-fluid  lazyload"
                                    alt=""
                                  />
                                </Link>
                                <div className="recent-detail">
                                  <Link to="/blog">
                                    <h5 className="recent-name">
                                      Health and skin for your organic
                                    </h5>
                                  </Link>
                                  <h6>
                                    25 Jan, 2022 <i data-feather="thumbs-up" />
                                  </h6>
                                </div>
                              </div>
                              <div className="recent-box">
                                <Link to="/blog" className="recent-image">
                                  <img
                                    src="../assets/images/inner-page/blog/3.jpg"
                                    className="img-fluid  lazyload"
                                    alt=""
                                  />
                                </Link>
                                <div className="recent-detail">
                                  <Link to="/blog">
                                    <h5 className="recent-name">
                                      Organics mix masala fresh &amp; soft
                                    </h5>
                                  </Link>
                                  <h6>
                                    25 Jan, 2022 <i data-feather="thumbs-up" />
                                  </h6>
                                </div>
                              </div>
                              <div className="recent-box">
                                <Link to="/blog" className="recent-image">
                                  <img
                                    src="../assets/images/inner-page/blog/4.jpg"
                                    className="img-fluid  lazyload"
                                    alt=""
                                  />
                                </Link>
                                <div className="recent-detail">
                                  <Link to="/blog">
                                    <h5 className="recent-name">
                                      Fresh organics brand and picnic
                                    </h5>
                                  </Link>
                                  <h6>
                                    25 Jan, 2022 <i data-feather="thumbs-up" />
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingTwo"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTwo"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseTwo"
                          >
                            Category
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseTwo"
                          className="accordion-collapse collapse collapse show"
                          aria-labelledby="panelsStayOpen-headingTwo"
                        >
                          <div className="accordion-body p-0">
                            <div className="category-list-box">
                              <ul>
                                {categoryListData?.map((item, index) => {
                                  return (
                                    <li key={index}>
                                      <Link to="/blog-list">
                                        <div className="category-name">
                                          <h5>{item?.categoryName_en} </h5>
                                          <span>10</span>
                                        </div>
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
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
                            data-bs-target="#panelsStayOpen-collapseThree"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree"
                          >
                            Product Tags
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseThree"
                          className="accordion-collapse collapse collapse show"
                          aria-labelledby="panelsStayOpen-headingThree"
                        >
                          <div className="accordion-body pt-0">
                            <div className="product-tags-box">
                              <ul>
                                <li>
                                  <Link to="#">Fruit Cutting</Link>
                                </li>
                                <li>
                                  <Link to="#">Meat</Link>
                                </li>
                                <li>
                                  <Link to="#">organic</Link>
                                </li>
                                <li>
                                  <Link to="#">cake</Link>
                                </li>
                                <li>
                                  <Link to="#">pick fruit</Link>
                                </li>
                                <li>
                                  <Link to="#">backery</Link>
                                </li>
                                <li>
                                  <Link to="#">organix food</Link>
                                </li>
                                <li>
                                  <Link to="#">Most Expensive Fruit</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingFour"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFour"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFour"
                          >
                            Trending Products
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseFour"
                          className="accordion-collapse collapse collapse show"
                          aria-labelledby="panelsStayOpen-headingFour"
                        >
                          <div className="accordion-body">
                            <ul className="product-list product-list-2 border-0 p-0">
                              {trendingList?.map((item, index) => {
                                return (
                                  <li key={index}>
                                    <div className="offer-product">
                                      <Link
                                        to="/shop/:id"
                                        className="offer-image"
                                      >
                                        <img
                                          src={item?.blog_Pic}
                                          className=" lazyload"
                                          alt=""
                                        />
                                      </Link>
                                      <div className="offer-detail">
                                        <div>
                                          <Link to="/shop">
                                            <h6 className="name">
                                              {item?.productName_en}
                                            </h6>
                                          </Link>
                                          <span> {item?.weight} </span>
                                          <h6 className="price theme-color">
                                            {/* ${item?.addVarient[0]?.Price}{" "} */}
                                          </h6>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      {/* Blog Section End */}
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

export default Blog;
