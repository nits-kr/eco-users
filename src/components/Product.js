import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Slider from "react-slick";
import { ProductDetails, ProductList, ProductSearch } from "./HttpServices";
import {
  InitializeColorPicker,
  StickyCartScroll,
  UseCountdownTimer,
} from "./JavaScriptFunction";
import Star from "./Star";
import Header from "./Header";
import Footer from "./Footer";
import { useGetRelatedProductQuery } from "../services/Post";
import Spinner from "./Spinner";

function Product(props) {
  const relatedProduct = useGetRelatedProductQuery();
  const [relatedProductItems, setRelatedProductItems] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [productData, setProductData] = useState([]);
  const [productDetail, setProductDetail] = useState("");
  const [loading, setLoading] = useState(false);
  const ratings = 4.5;
  console.log("useGetRelatedProductQuery", relatedProduct);
    console.log("product detail", productDetail);

  useEffect(() => {
    const fetchData = async () => {
      try {
        props.setProgress(10);
        setLoading(true);
        //const details = productDetail?.results?.details?._id ?? '';
        const id = "6482ba3484e5342a120adbc1";
        //const id = productDetail?.data?.results?.details?._id ;
        console.log(id);
        const { data, error } = await ProductDetails(id);
        error ? console.log(error) : console.log(data);
        setProductDetail(data.results.details);
        props.setProgress(50);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    props.setProgress(70);
    if (relatedProduct?.data?.results?.productData) {
      setRelatedProductItems(relatedProduct?.data?.results?.productData);
      props.setProgress(100);
      setLoading(false);
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await ProductSearch(searchKey);
        console.log(data);
        setProductData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [searchKey]);
  const handleSearch = () => {
    setSearchKey(searchKey);
  };
  useEffect(() => {
    StickyCartScroll();
  }, []);
  useEffect(() => {
    InitializeColorPicker();
  }, []);

  var w = window.innerWidth;
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: w > 500 ? 3 : 1,
    autoplay: true,
    slidesToScroll: 1,
  };
  useEffect(() => {
    feather.replace();
  }, []);
  var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  UseCountdownTimer(deadline);

  return (
    <>
      {loading}
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
                <h2>Creamy Chocolate Cake</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/index">
                        <i className="fa-solid fa-house" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      Creamy Chocolate Cake
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
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="product-section">
            <div className="container-fluid-lg">
              <div className="row">
                <div className="col-xxl-9 col-xl-8 col-lg-7 wow fadeInUp">
                  <div className="row g-4">
                    <div className="col-xl-6 wow fadeInUp">
                      <div className="product-left-box">
                        <div className="row g-2">
                          <div className="col-12">
                            <div className="product-main-1 no-arrow">
                              <div>
                                <div className="slider-image">
                                  <img
                                    src="../assets/images/product/category/1.jpg"
                                    id="img-1"
                                    data-zoom-image="../assets/images/product/category/1.jpg"
                                    className="img-fluid image_zoom_cls-0  lazyload"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="slider-image">
                                  <img
                                    src="../assets/images/product/category/2.jpg"
                                    data-zoom-image="../assets/images/product/category/2.jpg"
                                    className="img-fluid image_zoom_cls-1  lazyload"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="slider-image">
                                  <img
                                    src="../assets/images/product/category/3.jpg"
                                    data-zoom-image="../assets/images/product/category/3.jpg"
                                    className="img-fluid image_zoom_cls-2  lazyload"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="slider-image">
                                  <img
                                    src="../assets/images/product/category/4.jpg"
                                    data-zoom-image="../assets/images/product/category/4.jpg"
                                    className="img-fluid image_zoom_cls-3  lazyload"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="slider-image">
                                  <img
                                    src="../assets/images/product/category/5.jpg"
                                    data-zoom-image="../assets/images/product/category/5.jpg"
                                    className="img-fluid image_zoom_cls-4  lazyload"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="slider-image">
                                  <img
                                    src="../assets/images/product/category/6.jpg"
                                    data-zoom-image="../assets/images/product/category/6.jpg"
                                    className="img-fluid image_zoom_cls-5  lazyload"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="bottom-slider-image left-slider no-arrow slick-top">
                              <div>
                                <div className="sidebar-image">
                                  <img
                                    src="../assets/images/product/category/1.jpg"
                                    className="img-fluid  lazyload"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="sidebar-image">
                                  <img
                                    src="../assets/images/product/category/2.jpg"
                                    className="img-fluid  lazyload"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="sidebar-image">
                                  <img
                                    src="../assets/images/product/category/3.jpg"
                                    className="img-fluid  lazyload"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="sidebar-image">
                                  <img
                                    src="../assets/images/product/category/4.jpg"
                                    className="img-fluid  lazyload"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="sidebar-image">
                                  <img
                                    src="../assets/images/product/category/5.jpg"
                                    className="img-fluid  lazyload"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="sidebar-image">
                                  <img
                                    src="../assets/images/product/category/6.jpg"
                                    className="img-fluid  lazyload"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-xl-6 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div className="right-box-contain">
                        <h6 className="offer-top">30% Off</h6>
                        <h2 className="name">{productDetail?.productName}</h2>
                        <div className="price-rating">
                          <h3 className="theme-color price">
                            $49.50 <del className="text-content">$58.46</del>{" "}
                            <span className="offer theme-color">(8% off)</span>
                          </h3>
                          
                          <Star rating={ratings} />
                        </div>
                        <div className="procuct-contain">
                          <p>
                            {productDetail.Description}
                            Lollipop cake chocolate chocolate cake dessert
                            jujubes. Shortbread sugar plum dessert powder cookie
                            sweet brownie. Cake cookie apple pie dessert sugar
                            plum muffin cheesecake.
                          </p>
                        </div>
                        <div className="product-packege">
                          <div className="product-title">
                            <h4>Weight</h4>
                          </div>
                          <ul className="select-packege">
                            <li>
                              <Link to="#" className="active">
                                1/2 KG
                              </Link>
                            </li>
                            <li>
                              <Link to="#">1 KG</Link>
                            </li>
                            <li>
                              <Link to="#">1.5 KG</Link>
                            </li>
                            <li>
                              <Link to="#">Red Roses</Link>
                            </li>
                            <li>
                              <Link to="#">With Pink Roses</Link>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="time deal-timer product-deal-timer mx-md-0 mx-auto"
                          id="clockdiv-1"
                          data-hours={1}
                          data-minutes={2}
                          data-seconds={3}
                        >
                          <div className="product-title">
                            <h4>Hurry up! Sales Ends In</h4>
                          </div>
                          <ul>
                            <li>
                              <div className="counter d-block">
                                <div className="days d-block">
                                  {/* <h5 /> */}
                                </div>
                                <h6>Days</h6>
                              </div>
                            </li>
                            <li>
                              <div className="counter d-block">
                                <div className="hours d-block">
                                  {/* <h5 /> */}
                                </div>
                                <h6>Hours</h6>
                              </div>
                            </li>
                            <li>
                              <div className="counter d-block">
                                <div className="minutes d-block">
                                  {/* <h5 /> */}
                                </div>
                                <h6>Min</h6>
                              </div>
                            </li>
                            <li>
                              <div className="counter d-block">
                                <div className="seconds d-block">
                                  {/* <h5 /> */}
                                </div>
                                <h6>Sec</h6>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="note-box product-packege">
                          <div className="cart_qty qty-box product-qty">
                            <div className="input-group">
                              <button
                                type="button"
                                className="qty-right-plus"
                                data-type="plus"
                                data-field=""
                              >
                                <i className="fa fa-plus" aria-hidden="true" />
                              </button>
                              <input
                                className="form-control input-number qty-input"
                                type="text"
                                name="quantity"
                                defaultValue={0}
                              />
                              <button
                                type="button"
                                className="qty-left-minus"
                                data-type="minus"
                                data-field=""
                              >
                                <i className="fa fa-minus" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              window.location.href = "/cart";
                            }}
                            className="btn btn-md bg-dark cart-button text-white w-100"
                          >
                            Add To Cart
                          </button>
                        </div>
                        <div className="buy-box">
                          <Link to="/wishlist">
                            <i data-feather="heart" />
                            <span>Add To Wishlist</span>
                          </Link>
                          <Link to="/compare">
                            <i data-feather="shuffle" />
                            <span>Add To Compare</span>
                          </Link>
                        </div>
                        <div className="pickup-box">
                          <div className="product-title">
                            <h4>Store Information</h4>
                          </div>
                          <div className="pickup-detail">
                            <h4 className="text-content">
                              Lollipop cake chocolate chocolate cake dessert
                              jujubes. Shortbread sugar plum dessert powder
                              cookie sweet brownie.
                            </h4>
                          </div>
                          <div className="product-info">
                            <ul className="product-info-list product-info-list-2">
                              <li>
                                Type : <Link to="#">Black Forest</Link>
                              </li>
                              <li>
                                SKU : <Link to="#"> {productDetail.SKU} </Link>
                              </li>
                              <li>
                                MFG :{" "}
                                <Link to="#">
                                  {" "}
                                  {productDetail.publishDate}{" "}
                                </Link>
                              </li>
                              <li>
                                Stock :{" "}
                                <Link to="#">
                                  {" "}
                                  {productDetail.stockQuantity}{" "}
                                </Link>
                              </li>
                              <li>
                                Tags :{" "}
                                <Link to="#"> {productDetail.Tags} </Link>{" "}
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
                              <Link to="#">
                                <img
                                  src="../assets/images/product/payment/1.svg"
                                  className=" lazyload"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <img
                                  src="../assets/images/product/payment/2.svg"
                                  className=" lazyload"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <img
                                  src="../assets/images/product/payment/3.svg"
                                  className=" lazyload"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <img
                                  src="../assets/images/product/payment/4.svg"
                                  className=" lazyload"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <img
                                  src="../assets/images/product/payment/5.svg"
                                  className=" lazyload"
                                  alt=""
                                />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="product-section-box">
                        <ul
                          className="nav nav-tabs custom-nav"
                          id="myTab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
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
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
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
                        </ul>
                        <div
                          className="tab-content custom-tab"
                          id="myTabContent"
                        >
                          <div
                            className="tab-pane fade show active"
                            id="description"
                            role="tabpanel"
                            aria-labelledby="description-tab"
                          >
                            <div className="product-description">
                              <div className="nav-desh">
                                <p>
                                  Jelly beans carrot cake icing biscuit oat cake
                                  gummi bears tart. Lemon drops carrot cake
                                  pudding sweet gummi bears. Chocolate cake tart
                                  cupcake donut topping liquorice sugar plum
                                  chocolate bar. Jelly beans tiramisu caramels
                                  jujubes biscuit liquorice chocolate. Pudding
                                  toffee jujubes oat cake sweet roll. Lemon
                                  drops dessert croissant danish cake cupcake.
                                  Sweet roll candy chocolate toffee jelly sweet
                                  roll halvah brownie topping. Marshmallow
                                  powder candy sesame snaps jelly beans candy
                                  canes marshmallow gingerbread pie.
                                </p>
                              </div>
                              <div className="nav-desh">
                                <div className="desh-title">
                                  <h5>Organic:</h5>
                                </div>
                                <p>
                                  vitae et leo duis ut diam quam nulla porttitor
                                  massa id neque aliquam vestibulum morbi
                                  blandit cursus risus at ultrices mi tempus
                                  imperdiet nulla malesuada pellentesque elit
                                  eget gravida cum sociis natoque penatibus et
                                  magnis dis parturient montes nascetur
                                  ridiculus mus mauris vitae ultricies leo
                                  integer malesuada nunc vel risus commodo
                                  viverra maecenas accumsan lacus vel facilisis
                                  volutpat est velit egestas dui id ornare arcu
                                  odio ut sem nulla pharetra diam sit amet nisl
                                  suscipit adipiscing bibendum est ultricies
                                  integer quis auctor elit sed vulputate mi sit
                                  amet mauris commodo quis imperdiet massa
                                  tincidunt nunc pulvinar sapien et ligula
                                  ullamcorper malesuada proin libero nunc
                                  consequat interdum varius sit amet mattis
                                  vulputate enim nulla aliquet porttitor lacus
                                  luctus accumsan.
                                </p>
                              </div>
                              <div
                                className="banner-contain nav-desh"
                                style={{
                                  backgroundImage: `url(../assets/images/vegetable/banner/14.jpg) `,
                                  backgroundSize: "cover",
                                  backgroundPosition: "center center",
                                  backgroundRepeat: "no-repeat",
                                  display: "block",
                                }}
                              >
                                {/* <img
                                                            src="../assets/images/vegetable/banner/14.jpg"
                                                            className="bg-img  lazyload"
                                                            alt=""
                                                        /> */}
                                <div className="banner-details p-center banner-b-space w-100 text-center">
                                  <div>
                                    <h6 className="ls-expanded theme-color mb-sm-3 mb-1">
                                      SUMMER
                                    </h6>
                                    <h2>VEGETABLE</h2>
                                    <p className="mx-auto mt-1">
                                      Save up to 5% OFF
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="nav-desh">
                                <div className="desh-title">
                                  <h5>From The Manufacturer:</h5>
                                </div>
                                <p>
                                  Jelly beans shortbread chupa chups carrot cake
                                  jelly-o halvah apple pie pudding gingerbread.
                                  Apple pie halvah cake tiramisu shortbread
                                  cotton candy croissant chocolate cake. Tart
                                  cupcake caramels gummi bears macaroon
                                  gingerbread fruitcake marzipan wafer. Marzipan
                                  dessert cupcake ice cream tootsie roll.
                                  Brownie chocolate cake pudding cake powder
                                  candy ice cream ice cream cake. Jujubes
                                  soufflé chupa chups cake candy halvah donut.
                                  Tart tart icing lemon drops fruitcake apple
                                  pie.
                                </p>
                                <p>
                                  Dessert liquorice tart soufflé chocolate bar
                                  apple pie pastry danish soufflé. Gummi bears
                                  halvah gingerbread jelly icing. Chocolate cake
                                  chocolate bar pudding chupa chups bear claw
                                  pie dragée donut halvah. Gummi bears cookie
                                  ice cream jelly-o jujubes sweet croissant.
                                  Marzipan cotton candy gummi bears lemon drops
                                  lollipop lollipop chocolate. Ice cream cookie
                                  dragée cake sweet roll sweet roll.Lemon drops
                                  cookie muffin carrot cake chocolate marzipan
                                  gingerbread topping chocolate bar. Soufflé
                                  tiramisu pastry sweet dessert.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="info"
                            role="tabpanel"
                            aria-labelledby="info-tab"
                          >
                            <div className="table-responsive">
                              <table className="table info-table">
                                <tbody>
                                  <tr>
                                    <td>Specialty</td>
                                    <td>Vegetarian</td>
                                  </tr>
                                  <tr>
                                    <td>Ingredient Type</td>
                                    <td>Vegetarian</td>
                                  </tr>
                                  <tr>
                                    <td>Brand</td>
                                    <td>Lavian Exotique</td>
                                  </tr>
                                  <tr>
                                    <td>Form</td>
                                    <td>Bar Brownie</td>
                                  </tr>
                                  <tr>
                                    <td>Package Information</td>
                                    <td>Box</td>
                                  </tr>
                                  <tr>
                                    <td>Manufacturer</td>
                                    <td>Prayagh Nutri Product Pvt Ltd</td>
                                  </tr>
                                  <tr>
                                    <td>Item part number</td>
                                    <td>
                                      LE 014 - 20pcs Crème Bakes (Pack of 2)
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Net Quantity</td>
                                    <td>40.00 count</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="care"
                            role="tabpanel"
                            aria-labelledby="care-tab"
                          >
                            <div className="information-box">
                              <ul>
                                <li>
                                  Store cream cakes in a refrigerator. Fondant
                                  cakes should be stored in an air conditioned
                                  environment.
                                </li>
                                <li>
                                  Slice and serve the cake at room temperature
                                  and make sure it is not exposed to heat.
                                </li>
                                <li>
                                  Use a serrated knife to cut a fondant cake.
                                </li>
                                <li>
                                  Sculptural elements and figurines may contain
                                  wire supports or toothpicks or wooden skewers
                                  for support.
                                </li>
                                <li>
                                  Please check the placement of these items
                                  before serving to small children.
                                </li>
                                <li>
                                  The cake should be consumed within 24 hours.
                                </li>
                                <li>Enjoy your cake!</li>
                              </ul>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="review"
                            role="tabpanel"
                            aria-labelledby="review-tab"
                          >
                            <div className="review-box">
                              <div className="row g-4">
                                <div className="col-xl-6">
                                  <div className="review-title">
                                    <h4 className="fw-500">Customer reviews</h4>
                                  </div>
                                  <div className="d-flex">
                                    <div className="product-rating">
                                      <ul className="rating">
                                        <li>
                                          <i
                                            data-feather="star"
                                            className="fill"
                                          />
                                        </li>
                                        <li>
                                          <i
                                            data-feather="star"
                                            className="fill"
                                          />
                                        </li>
                                        <li>
                                          <i
                                            data-feather="star"
                                            className="fill"
                                          />
                                        </li>
                                        <li>
                                          <i data-feather="star" />
                                        </li>
                                        <li>
                                          <i data-feather="star" />
                                        </li>
                                      </ul>
                                    </div>
                                    <h6 className="ms-3">4.2 Out Of 5</h6>
                                  </div>
                                  <div className="rating-box">
                                    <ul>
                                      <li>
                                        <div className="rating-list">
                                          <h5>5 Star</h5>
                                          <div className="progress">
                                            <div
                                              className="progress-bar"
                                              role="progressbar"
                                              style={{ width: "68%" }}
                                              aria-valuenow={100}
                                              aria-valuemin={0}
                                              aria-valuemax={100}
                                            >
                                              68%
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="rating-list">
                                          <h5>4 Star</h5>
                                          <div className="progress">
                                            <div
                                              className="progress-bar"
                                              role="progressbar"
                                              style={{ width: "67%" }}
                                              aria-valuenow={100}
                                              aria-valuemin={0}
                                              aria-valuemax={100}
                                            >
                                              67%
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="rating-list">
                                          <h5>3 Star</h5>
                                          <div className="progress">
                                            <div
                                              className="progress-bar"
                                              role="progressbar"
                                              style={{ width: "42%" }}
                                              aria-valuenow={100}
                                              aria-valuemin={0}
                                              aria-valuemax={100}
                                            >
                                              42%
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="rating-list">
                                          <h5>2 Star</h5>
                                          <div className="progress">
                                            <div
                                              className="progress-bar"
                                              role="progressbar"
                                              style={{ width: "30%" }}
                                              aria-valuenow={100}
                                              aria-valuemin={0}
                                              aria-valuemax={100}
                                            >
                                              30%
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="rating-list">
                                          <h5>1 Star</h5>
                                          <div className="progress">
                                            <div
                                              className="progress-bar"
                                              role="progressbar"
                                              style={{ width: "24%" }}
                                              aria-valuenow={100}
                                              aria-valuemin={0}
                                              aria-valuemax={100}
                                            >
                                              24%
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-xl-6">
                                  <div className="review-title">
                                    <h4 className="fw-500">Add a review</h4>
                                  </div>
                                  <div className="row g-4">
                                    <div className="col-md-6">
                                      <div className="form-floating theme-form-floating">
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="name"
                                          placeholder="Name"
                                        />
                                        <label htmlFor="name">Your Name</label>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-floating theme-form-floating">
                                        <input
                                          type="email"
                                          className="form-control"
                                          id="email"
                                          placeholder="Email Address"
                                        />
                                        <label htmlFor="email">
                                          Email Address
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-floating theme-form-floating">
                                        <input
                                          type="url"
                                          className="form-control"
                                          id="website"
                                          placeholder="Website"
                                        />
                                        <label htmlFor="website">Website</label>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-floating theme-form-floating">
                                        <input
                                          type="url"
                                          className="form-control"
                                          id="review1"
                                          placeholder="Give your review a title"
                                        />
                                        <label htmlFor="review1">
                                          Review Title
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-12">
                                      <div className="form-floating theme-form-floating">
                                        <textarea
                                          className="form-control"
                                          placeholder="Leave a comment here"
                                          id="floatingTextarea2"
                                          style={{ height: 150 }}
                                          defaultValue={""}
                                        />
                                        <label htmlFor="floatingTextarea2">
                                          Write Your Comment
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="review-title">
                                    <h4 className="fw-500">
                                      Customer questions &amp; answers
                                    </h4>
                                  </div>
                                  <div className="review-people">
                                    <ul className="review-list">
                                      <li>
                                        <div className="people-box">
                                          <div>
                                            <div className="people-image">
                                              <img
                                                src="../assets/images/review/1.jpg"
                                                className="img-fluid  lazyload"
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                          <div className="people-comment">
                                            <Link className="name" to="#">
                                              Tracey
                                            </Link>
                                            <div className="date-time">
                                              <h6 className="text-content">
                                                14 Jan, 2022 at 12.58 AM
                                              </h6>
                                              <div className="product-rating">
                                                <ul className="rating">
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i data-feather="star" />
                                                  </li>
                                                  <li>
                                                    <i data-feather="star" />
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="reply">
                                              <p>
                                                Icing cookie carrot cake
                                                chocolate cake sugar plum
                                                jelly-o danish. Dragée dragée
                                                shortbread tootsie roll
                                                croissant muffin cake I love
                                                gummi bears. Candy canes ice
                                                cream caramels tiramisu
                                                marshmallow cake shortbread
                                                candy canes cookie.
                                                <Link to="#">Reply</Link>
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="people-box">
                                          <div>
                                            <div className="people-image">
                                              <img
                                                src="../assets/images/review/2.jpg"
                                                className="img-fluid  lazyload"
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                          <div className="people-comment">
                                            <Link className="name" to="#">
                                              Olivia
                                            </Link>
                                            <div className="date-time">
                                              <h6 className="text-content">
                                                01 May, 2022 at 08.31 AM
                                              </h6>
                                              <div className="product-rating">
                                                <ul className="rating">
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i data-feather="star" />
                                                  </li>
                                                  <li>
                                                    <i data-feather="star" />
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="reply">
                                              <p>
                                                Tootsie roll cake danish halvah
                                                powder Tootsie roll candy
                                                marshmallow cookie brownie apple
                                                pie pudding brownie chocolate
                                                bar. Jujubes gummi bears I love
                                                powder danish oat cake tart
                                                croissant.
                                                <Link to="#">Reply</Link>
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="people-box">
                                          <div>
                                            <div className="people-image">
                                              <img
                                                src="../assets/images/review/3.jpg"
                                                className="img-fluid  lazyload"
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                          <div className="people-comment">
                                            <Link className="name" to="#">
                                              Gabrielle
                                            </Link>
                                            <div className="date-time">
                                              <h6 className="text-content">
                                                21 May, 2022 at 05.52 PM
                                              </h6>
                                              <div className="product-rating">
                                                <ul className="rating">
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i
                                                      data-feather="star"
                                                      className="fill"
                                                    />
                                                  </li>
                                                  <li>
                                                    <i data-feather="star" />
                                                  </li>
                                                  <li>
                                                    <i data-feather="star" />
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="reply">
                                              <p>
                                                Biscuit chupa chups gummies
                                                powder I love sweet pudding
                                                jelly beans. Lemon drops
                                                marzipan apple pie gingerbread
                                                macaroon croissant cotton candy
                                                pastry wafer. Carrot cake halvah
                                                I love tart caramels pudding
                                                icing chocolate gummi bears.
                                                Gummi bears danish cotton candy
                                                muffin marzipan caramels awesome
                                                feel. <Link to="#">Reply</Link>
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-5 d-none d-lg-block wow fadeInUp">
                  <div className="right-sidebar-box">
                    <div className="vendor-box">
                      <div className="verndor-contain">
                        <div className="vendor-image">
                          <img
                            src="../assets/images/product/vendor.png"
                            className=" lazyload"
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
                        restaurant that offers international and American noodle
                        dishes and pasta.
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
                    {/* Trending Product */}
                    <div className="pt-25">
                      <div className="category-menu">
                        <h3>Trending Products</h3>
                        <ul className="product-list product-right-sidebar border-0 p-0">
                          <li>
                            <div className="offer-product">
                              <Link to="/product" className="offer-image">
                                <img
                                  src="../assets/images/vegetable/product/23.png"
                                  className="img-fluid  lazyload"
                                  alt=""
                                />
                              </Link>
                              <div className="offer-detail">
                                <div>
                                  <Link to="/product">
                                    <h6 className="name">
                                      Meatigo Premium Goat Curry
                                    </h6>
                                  </Link>
                                  <span>450 G</span>
                                  <h6 className="price theme-color">$ 70.00</h6>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="offer-product">
                              <Link to="/product" className="offer-image">
                                <img
                                  src="../assets/images/vegetable/product/24.png"
                                  className=" lazyload"
                                  alt=""
                                />
                              </Link>
                              <div className="offer-detail">
                                <div>
                                  <Link to="/product">
                                    <h6 className="name">
                                      Dates Medjoul Premium Imported
                                    </h6>
                                  </Link>
                                  <span>450 G</span>
                                  <h6 className="price theme-color">$ 40.00</h6>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="offer-product">
                              <Link to="/product" className="offer-image">
                                <img
                                  src="../assets/images/vegetable/product/25.png"
                                  className=" lazyload"
                                  alt=""
                                />
                              </Link>
                              <div className="offer-detail">
                                <div>
                                  <Link to="/product">
                                    <h6 className="name">
                                      Good Life Walnut Kernels
                                    </h6>
                                  </Link>
                                  <span>200 G</span>
                                  <h6 className="price theme-color">$ 52.00</h6>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="mb-0">
                            <div className="offer-product">
                              <Link to="/product" className="offer-image">
                                <img
                                  src="../assets/images/vegetable/product/26.png"
                                  className=" lazyload"
                                  alt=""
                                />
                              </Link>
                              <div className="offer-detail">
                                <div>
                                  <Link to="/product">
                                    <h6 className="name">
                                      Apple Red Premium Imported
                                    </h6>
                                  </Link>
                                  <span>1 KG</span>
                                  <h6 className="price theme-color">$ 80.00</h6>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Banner Section */}
                    <div className="ratio_156 pt-25">
                      <div className="home-contain ">
                        <img
                          src="../assets/images/vegetable/banner/8.jpg"
                          className="bg-img w-100  lazyload"
                          alt=""
                        />
                        <div className="home-detail p-top-left home-p-medium">
                          <div>
                            <h6 className="text-yellow home-banner">Seafood</h6>
                            <h3 className="text-uppercase fw-normal">
                              <span className="theme-color fw-bold">
                                Freshes
                              </span>{" "}
                              Products
                            </h3>
                            <h3 className="fw-light">every hour</h3>
                            <button
                              //  onclick="location.href = 'shop';"
                              onClick={() => {
                                window.location.href = "/shop";
                              }}
                              className="btn btn-animation btn-md fw-bold mend-auto"
                            >
                              Shop Now{" "}
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
          {/* Product Left Sidebar End */}
          {/* Releted Product Section Start */}
          <section className="product-list-section section-b-space">
            <div className="container-fluid-lg">
              <div className="title">
                <h2>Related Products</h2>
                <span className="title-leaf">
                  <svg className="icon-width">
                    <use xlinkHref="../assets/svg/leaf.svg#leaf" />
                  </svg>
                </span>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="slider-6_1 product-wrapper">
                    <Slider {...settings}>
                      {relatedProductItems?.map((item, index) => {
                        return (
                          <div>
                            <div className="product-box-3 wow fadeInUp">
                              <div className="product-header">
                                <div className="product-image">
                                  <Link to="/product-left-2">
                                    <img
                                      src={item?.product_Pic?.map(
                                        (index) => index
                                      )}
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
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#view"
                                      >
                                        <i data-feather="eye" />
                                      </Link>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Compare"
                                    >
                                      <Link to="/compare">
                                        <i data-feather="refresh-cw" />
                                      </Link>
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Wishlist"
                                    >
                                      <Link
                                        to="/wishlist"
                                        className="notifi-wishlist"
                                      >
                                        <i data-feather="heart" />
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-footer">
                                <div className="product-detail">
                                  <span className="span-name">
                                    {" "}
                                    {item?.productName}{" "}
                                  </span>
                                  <Link to="/product">
                                    <h5 className="name">
                                      Chocolate Chip Cookies 250 g
                                    </h5>
                                  </Link>
                                  <div className="product-rating mt-2">
                                    <ul className="rating">
                                      <li>
                                        <i
                                          data-feather="star"
                                          className="fill"
                                        />
                                      </li>
                                      <li>
                                        <i
                                          data-feather="star"
                                          className="fill"
                                        />
                                      </li>
                                      <li>
                                        <i
                                          data-feather="star"
                                          className="fill"
                                        />
                                      </li>
                                      <li>
                                        <i
                                          data-feather="star"
                                          className="fill"
                                        />
                                      </li>
                                      <li>
                                        <i
                                          data-feather="star"
                                          className="fill"
                                        />
                                      </li>
                                    </ul>
                                    <span>(5.0)</span>
                                  </div>
                                  <h6 className="unit">500 G</h6>
                                  <h5 className="price">
                                    <span className="theme-color">
                                      {" "}
                                      ${item?.Price}{" "}
                                    </span>{" "}
                                    <del> ${item?.oldPrice} </del>
                                  </h5>
                                  <div className="add-to-cart-box bg-white">
                                    <button className="btn btn-add-cart addcart-button">
                                      Add
                                      <span className="add-icon bg-light-gray">
                                        <i className="fa-solid fa-plus" />
                                      </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                      <div className="input-group bg-white">
                                        <button
                                          type="button"
                                          className="qty-left-minus bg-gray"
                                          data-type="minus"
                                          data-field=""
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
                                          defaultValue={0}
                                        />
                                        <button
                                          type="button"
                                          className="qty-right-plus bg-gray"
                                          data-type="plus"
                                          data-field=""
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
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      {/* Releted Product Section End */}
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
                      className="img-fluid  lazyload"
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
                      <select
                        className="form-select select-form-size"
                        defaultValue=""
                      >
                        <option value="">Select Size</option>
                        <option value="1.2">1/2 KG</option>
                        <option value={0}>1 KG</option>
                        <option value="1.5">1/5 KG</option>
                        <option value="red">Red Roses</option>
                        <option value="pink">With Pink Roses</option>
                      </select>
                    </div>
                    <div className="modal-button">
                      <button
                        //  onclick="location.href = 'cart';"
                        onClick={() => {
                          window.location.href = "/cart";
                        }}
                        className="btn btn-md add-cart-button icon"
                      >
                        Add To Cart
                      </button>
                      <button
                        // onclick="location.href = 'product-left';"
                        onClick={() => {
                          window.location.href = "/product-left";
                        }}
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
      {/* <div className="theme-option theme-option-2">
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
            </div> */}
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
      {/* Sticky Cart Box Start */}
      <div className="sticky-bottom-cart">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="cart-content">
                <div className="product-image">
                  <img
                    src="../assets/images/product/category/1.jpg"
                    className="img-fluid  lazyload"
                    alt=""
                  />
                  <div className="content">
                    <h5>Creamy Chocolate Cake</h5>
                    <h6>
                      $32.96<del className="text-danger">$96.00</del>
                      <span>55% off</span>
                    </h6>
                  </div>
                </div>
                <div className="selection-section">
                  <div className="form-group mb-0">
                    <select
                      id="input-state"
                      className="form-control form-select"
                      defaultValue=""
                    >
                      <option disabled>Choose Weight...</option>
                      <option>1/2 KG</option>
                      <option>1 KG</option>
                      <option>1.5 KG</option>
                    </select>
                  </div>
                  <div className="cart_qty qty-box product-qty m-0">
                    <div className="input-group h-100">
                      <button
                        type="button"
                        className="qty-left-minus"
                        data-type="minus"
                        data-field=""
                      >
                        <i className="fa fa-minus" aria-hidden="true" />
                      </button>
                      <input
                        className="form-control input-number qty-input"
                        type="text"
                        name="quantity"
                        defaultValue={1}
                      />
                      <button
                        type="button"
                        className="qty-right-plus"
                        data-type="plus"
                        data-field=""
                      >
                        <i className="fa fa-plus" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="add-btn">
                  <Link
                    className="btn theme-bg-color text-white wishlist-btn"
                    to="/wishlist"
                  >
                    <i className="fa fa-bookmark" /> Wishlist
                  </Link>
                  <Link className="btn theme-bg-color text-white" to="/cart">
                    <i className="fas fa-shopping-cart" /> Add To Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sticky Cart Box End */}
      {/* Bg overlay Start */}
      <div className="bg-overlay" />
    </>
  );
}

export default Product;
