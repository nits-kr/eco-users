import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Header";
import Footer from "./Footer";
import {
  useBlogCommentListQuery,
  useCreateBlogCommentMutation,
  useGetTrendingProductQuery,
} from "../services/Post";

function BlogDetails() {
  const { data } = useBlogCommentListQuery();
  const [addBlogComment] = useCreateBlogCommentMutation();
  const trendingProduct = useGetTrendingProductQuery();
  const [trendingList, setTrendingList] = useState([]);
  const [blogCommentList, setBlogCommentList] = useState();
  const [fullName, setFullName] = useState([]);
  const [email, setEmail] = useState([]);
  const [url, setUrl] = useState([]);
  const [comments1, setComments] = useState([]);
  const [items, setItems] = useState([]);
  const { item } = useParams();

  const location = useLocation();
  let id = location.state?.id;

  console.log("state id", id);

  useEffect(() => {
    if (trendingProduct?.data?.results?.productlist) {
      setTrendingList(trendingProduct?.data?.results?.productlist);
    }
  }, [trendingProduct?.data?.results?.productlist]);
  useEffect(() => {
    if (item) {
      const decodedItem = JSON.parse(decodeURIComponent(item));
      setItems(decodedItem);
      console.log("blog id", decodedItem?._id);
    }
  }, [item]);
  console.log("blog item", items);
  useEffect(() => {
    feather.replace();
    if (data?.results?.list) {
      setBlogCommentList(data?.results?.list);
    } else {
      setBlogCommentList(data?.results?.list);
    }
  }, [data]);
  const userId = localStorage?.getItem("loginId");
  const userPic = localStorage?.getItem("profilePic");

  const handleOnSave = async (e) => {
    e.preventDefault();
    const comments = {
      fullName: fullName,
      email: email,
      enterUrl: url,
      commnets: comments1,
      user_Id: userId,
      blog_Id: items?._id,
    };
    try {
      const response = await addBlogComment(comments);
      console.log(response);

      // Display a Swal notification on success
      Swal.fire({
        title: "Comment Created",
        text: "Your comment has been successfully created.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // Reload the page when "OK" is clicked
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
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
                <h2>Blog Details Page</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/index">
                        <i className="fa-solid fa-house" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Blog
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Blog Details
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}
      {/* Blog Details Section Start */}
      <section className="blog-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3">
            <div className="col-xxl-3 col-xl-4 col-lg-5 d-lg-block d-none">
              <div className="left-sidebar-box">
                <div className="left-search-box">
                  <div className="search-box">
                    <input
                      type="search"
                      className="form-control"
                      id="exampleFormControlInput4"
                      placeholder="Search...."
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
                            <li>
                              <Link to="/blog-list">
                                <div className="category-name">
                                  <h5>Latest Recipes</h5>
                                  <span>10</span>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link to="/blog-list">
                                <div className="category-name">
                                  <h5>Diet Food</h5>
                                  <span>6</span>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link to="/blog-list">
                                <div className="category-name">
                                  <h5>Low calorie Items</h5>
                                  <span>8</span>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link to="/blog-list">
                                <div className="category-name">
                                  <h5>Cooking Method</h5>
                                  <span>9</span>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link to="/blog-list">
                                <div className="category-name">
                                  <h5>Dairy Free</h5>
                                  <span>12</span>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link to="/blog-list">
                                <div className="category-name">
                                  <h5>Vegetarian Food</h5>
                                  <span>10</span>
                                </div>
                              </Link>
                            </li>
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
                                  <Link to="/shop/:id" className="offer-image">
                                    <img
                                      // src={item?.addVarient[0]?.product_Pic[0]}
                                      className=" lazyload"
                                      alt=""
                                    />
                                  </Link>
                                  <div className="offer-detail">
                                    <div>
                                      <Link to="/shop/:id">
                                        <h6 className="name">
                                          {item?.productName_en}
                                        </h6>
                                      </Link>
                                      <span>
                                        {/* {
                                          item?.addVarient[0]?.values_Id
                                            ?.valuesName_en
                                        } */}
                                      </span>
                                      {/* <h6 className="price theme-color">
                                        $
                                        {item?.addVarient[0]?.dollarPrice?.toFixed(
                                          2
                                        )}
                                      </h6> */}
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
            <div className="col-xxl-9 col-xl-8 col-lg-7 ratio_50">
              <div
                className="blog-detail-image rounded-3 mb-4 bg-size blur-up lazyloaded"
                style={{
                  backgroundImage:
                    'url("../assets/images/inner-page/blog/1.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  display: "block",
                }}
              >
                <img
                  src="../assets/images/inner-page/blog/1.jpg"
                  className="bg-img blur-up lazyloaded"
                  alt=""
                  style={{ display: "none" }}
                />
                <div className="blog-image-contain">
                  <ul className="contain-list">
                    <li>backpack</li>
                    <li>life style</li>
                    <li>organic</li>
                  </ul>
                  <h2> {blogCommentList?.title} </h2>
                  <ul className="contain-comment-list">
                    <li>
                      <div className="user-list">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-user"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx={12} cy={7} r={4} />
                        </svg>
                        <span>Caroline</span>
                      </div>
                    </li>
                    <li>
                      <div className="user-list">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-calendar"
                        >
                          <rect
                            x={3}
                            y={4}
                            width={18}
                            height={18}
                            rx={2}
                            ry={2}
                          />
                          <line x1={16} y1={2} x2={16} y2={6} />
                          <line x1={8} y1={2} x2={8} y2={6} />
                          <line x1={3} y1={10} x2={21} y2={10} />
                        </svg>
                        <span>April 19, 2022</span>
                      </div>
                    </li>
                    <li>
                      <div className="user-list">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-message-square"
                        >
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        <span>82 Comment</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="blog-detail-contain">
                <p>
                  <span className="first">
                    {" "}
                    {items?.description?.slice(0, 1)}{" "}
                  </span>{" "}
                  {items?.description?.slice(1)}
                </p>
                <p>
                  Let's unpack that later everyone thinks the soup tastes better
                  after theyâ€™ve pissed in it pivot, re-inventing the wheel,
                  and it's not hard guys. Market-facing pushback back of the
                  net, for pro-sumer software let's see if we can dovetail these
                  two projects but turn the crank for they have downloaded gmail
                  and seems to be working for now. This is not the hill i want
                  to die on you better eat a reality sandwich before you walk
                  back in that boardroom land the plane yet exposing new ways to
                  evolve our design language design thinking nor poop, so can
                  you put it into a banner that is not alarming, but eye
                  catching and not too giant. That is a good problem to have dog
                  and pony show we're ahead of the curve on that one.
                </p>
                <p>
                  {" "}
                  Waste of resources can you run this by clearance? hot johnny
                  coming through driving the initiative forward our competitors
                  are jumping the shark. Unlock meaningful moments of
                  relaxation. Copy and paste from stack overflow a tentative
                  event rundown is attached for your reference, including other
                  happenings on the day you are most welcome to join us
                  beforehand for a light lunch we would also like to invite you
                  to other activities on the day, including the interim and
                  closing panel discussions on the intersection of businesses
                  and social innovation, and on building a stronger social
                  innovation eco-system respectively what are the expectations,
                  on-brand but completeley fresh we can't hear you.
                </p>
                <div className="blog-details-quote">
                  <h3>
                    Adipisicing elit Qui ipsam natus aspernatur quaerat impedit
                    eveniet ipsum dolor
                  </h3>
                  <h5>- Denny Dose</h5>
                </div>
                <p>
                  Agile currying favour pulling teeth collaboration through
                  advanced technlogy. Everyone thinks the soup tastes better
                  after theyâ€™ve pissed in it can you put it on my calendar?.
                  Low-hanging fruit. Data-point blue sky yet first-order optimal
                  strategies shotgun approach. Land it in region. Idea shower
                  prairie dogging a set of certitudes based on deductions
                  founded on false premise nor three-martini lunch. Baseline.
                  Run it up the flag pole big boy pants so game-plan, and it
                  just needs more cowbell pixel pushing, but we need to make the
                  new version clean and sexy. Back of the net we need a recap by
                  eod, cob or whatever comes first for we need evergreen
                  content.
                </p>
                <p className="mb-0">
                  We need to harvest synergy effects land it in region nor time
                  to open the kimono, but we need to touch base off-line before
                  we fire the new ux experience. Moving the goalposts. Lean into
                  that problem we need to get all stakeholders up to speed and
                  in the right place. Get all your ducks in a row this proposal
                  is a win-win situation which will cause a stellar paradigm
                  shift, and produce a multi-fold increase in deliverables or
                  dunder mifflin for high-level nor gain alignment into the
                  weeds. Open door policy. Goalposts player-coach but quick win,
                  so effort made was a lot for game-plan in an ideal world
                  commitment to the cause . Service as core &amp;innovations as
                  power makes our brand meeting assassin core competencies run
                  it up the flagpole, ping the boss and circle back but zoom
                  meeting at 2:30 today.
                </p>
              </div>
              <div className="comment-box overflow-hidden">
                <div className="leave-title">
                  <h3>Comments({blogCommentList?.length})</h3>
                </div>
                <div className="user-comment-box">
                  <ul>
                    {blogCommentList?.map((item, index) => {
                      return (
                        <li key={index}>
                          <div className="user-box border-color">
                            <div className="reply-button">
                              <i className="fa-solid fa-reply" />
                              <span className="theme-color">Reply</span>
                            </div>
                            <div className="user-iamge">
                              <img
                                // src="../assets/images/inner-page/user/1.jpg"
                                src={
                                  userPic
                                    ? userPic
                                    : "../assets/images/inner-page/user/1.jpg"
                                }
                                className="img-fluid blur-up lazyloaded"
                                alt=""
                              />
                              <div className="user-name">
                                <h6> {item?.createdAt?.slice(0, 10)} </h6>
                                <h5 className="text-content">
                                  {" "}
                                  {item?.fullName}{" "}
                                </h5>
                              </div>
                            </div>
                            <div className="user-contain">
                              <p>{item?.commnets}</p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <form className="leave-box" onSubmit={handleOnSave}>
                <div className="leave-title mt-0">
                  <h3>Leave Comment</h3>
                </div>
                <div className="leave-comment">
                  <div className="comment-notes">
                    <p className="text-content mb-4">
                      Your email address will not be published. Required fields
                      are marked
                    </p>
                  </div>
                  <div className="row g-3">
                    <div className="col-xxl-4 col-lg-12 col-sm-6">
                      <div className="blog-input">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Full Name"
                          fdprocessedid="wke4hk"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-xxl-4 col-lg-12 col-sm-6">
                      <div className="blog-input">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput2"
                          placeholder="Enter Email Address"
                          fdprocessedid="8sjdms"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-xxl-4 col-lg-12 col-sm-6">
                      <div className="blog-input">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput3"
                          placeholder="Enter URL"
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="blog-input">
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows={4}
                          placeholder="Comments"
                          // defaultValue={""}
                          value={comments1}
                          name="comments"
                          onChange={(e) => setComments(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-check d-flex mt-4 p-0">
                    <input
                      className="checkbox_animated"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label text-content"
                      htmlFor="flexCheckDefault"
                    >
                      <span className="color color-1">
                        {" "}
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </span>
                    </label>
                  </div>
                  <button
                    className="btn btn-animation ms-xxl-auto mt-xxl-0 mt-3 btn-md fw-bold"
                    fdprocessedid="gzi2l"
                  >
                    Post Comment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Details Section End */}
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

export default BlogDetails;
