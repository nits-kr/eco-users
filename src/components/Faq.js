import React, {useEffect} from 'react'
import { Link } from "react-router-dom";
import feather from 'feather-icons';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Header';
import Footer from './Footer';

function Faq() {
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
<Header/>
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
  <section className="faq-breadscrumb pt-0">
    <div className="container-fluid-lg">
      <div className="row">
        <div className="col-12">
          <div className="breadscrumb-contain">
            <h2>Help Center</h2>
            <p>
              We are glad having you here looking for the answer. As our team
              hardly working on the product, feel free to ask any questions. We
              Believe only your feedback might move us forward.
            </p>
            <div className="faq-form-tag">
              <div className="input-group">
                <i className="fa-solid fa-magnifying-glass" />
                <input
                  type="search"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
                <div className="dropdown">
                  <button
                    className="btn btn-md faq-dropdown-button dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                  >
                    All Product <i className="fa-solid fa-angle-down ms-2" />
                  </button>
                  <ul className="dropdown-menu faq-dropdown-menu dropdown-menu-end">
                    <li>
                      <Link className="dropdown-item" to="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Section End */}
  {/* Faq Question section Start */}
  <section className="faq-contain">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="slider-4-2 product-wrapper">
            <div>
              <div className="faq-top-box">
                <div className="faq-box-icon">
                  <img
                    src="../assets/images/inner-page/faq/start.png"
                    className=" lazyload"
                    alt=""
                  />
                </div>
                <div className="faq-box-contain">
                  <h3>Getting Started</h3>
                  <p>
                    Bring to the table win-win survival strategies to ensure
                    proactive domination.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="faq-top-box">
                <div className="faq-box-icon">
                  <img
                    src="../assets/images/inner-page/faq/help.png"
                    className=" lazyload"
                    alt=""
                  />
                </div>
                <div className="faq-box-contain">
                  <h3>Sales Question</h3>
                  <p>
                    Lorizzle ipsizzle boom shackalack sit get down get down.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="faq-top-box">
                <div className="faq-box-icon">
                  <img
                    src="../assets/images/inner-page/faq/price.png"
                    className=" lazyload"
                    alt=""
                  />
                </div>
                <div className="faq-box-contain">
                  <h3>Pricing &amp; Plans</h3>
                  <p>
                    Curabitizzle fizzle break yo neck, yall quis fo shizzle mah
                    nizzle fo rizzle.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="faq-top-box">
                <div className="faq-box-icon">
                  <img
                    src="../assets/images/inner-page/faq/contact.png"
                    className=" lazyload"
                    alt=""
                  />
                </div>
                <div className="faq-box-contain">
                  <h3>Support Contact</h3>
                  <p>
                    Gizzle fo shizzle bow wow wow bizzle leo bibendizzle check
                    out this.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Faq Question section End */}
  {/* Faq Section Start */}
  <section className="faq-box-contain section-b-space">
    <div className="container">
      <div className="row">
        <div className="col-xl-5">
          <div className="faq-contain">
            <h2>Frequently Asked Questions</h2>
            <p>
              We are answering most frequent questions. No worries if you not
              find exact one. You can find out more by searching or continuing
              clicking button below or directly{" "}
              <Link
                to="/contact-us"
                className="theme-color text-decoration-underline"
              >
                contact our support.
              </Link>
            </p>
          </div>
        </div>
        <div className="col-xl-7">
          <div className="faq-accordion">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What is Fastkart and why was the name changed?{" "}
                    <i className="fa-solid fa-angle-down" />
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Fastkart is leading the charge in transforming India’s
                      vast, unorganised grocery landscape through cutting-edge
                      technology and innovation. Blinkit is India’s largest and
                      most convenient hyper-local delivery company, which
                      enables you to order grocery, fruits &amp; vegetables, and
                      other daily essential products, directly via your mobile
                      or web browser.
                    </p>
                    <p>
                      To know the reason why we changed our brand name from
                      Grofers to Fastkart, read this{" "}
                      <span className="fw-bold">blog post.</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How to remove the impurities of Graphene oxide?{" "}
                    <i className="fa-solid fa-angle-down" />
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Discover, Explore &amp; Understanding The Product
                      Description Maecenas ullamcorper eros libero, facilisis
                      tempor mi dapibus vel. Sed ut felis ligula. Pellentesque
                      vestibulum, tellus id euismod aliquet, justo velit
                      tincidunt justo, nec pulvinar tortor elit vitae urna.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How long will delivery take?{" "}
                    <i className="fa-solid fa-angle-down" />
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Discover, Explore &amp; Understanding The Product
                      Description Maecenas ullamcorper eros libero, facilisis
                      tempor mi dapibus vel. Sed ut felis ligula. Pellentesque
                      vestibulum, tellus id euismod aliquet, justo velit
                      tincidunt justo, nec pulvinar tortor elit vitae urna.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    How do I find my Windows Product key?{" "}
                    <i className="fa-solid fa-angle-down" />
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      The product key is located inside the product packaging,
                      on the receipt or confirmation page for a digital purchase
                      or in a confirmation e-mail that shows you purchased
                      Windows. If you purchased a digital copy from Microsoft
                      Store, you can locate your product key in your Account
                      under Digital Content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    I've downloaded an ISO file, now what?{" "}
                    <i className="fa-solid fa-angle-down" />
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      You can use the ISO file to create bootable media for
                      installation or recovery. You can also install Windows on
                      your current device by opening the ISO file, selecting the
                      Setup and following the instructions.
                    </p>
                    <p>
                      To create bootable media such as a bootable USB drive or
                      DVD, you will need an ISO burning or mounting software. We
                      recommend always using a blank USB or blank DVD because
                      contents may be deleted when creating a bootable image.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    What's the difference between 32-bit and 64-bit versions of
                    Windows? <i className="fa-solid fa-angle-down" />
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      The terms 32-bit and 64-bit refer to the way a computer's
                      processor (also called a CPU) handles information. The
                      64-bit version of Windows handles large amounts of random
                      access memory (RAM) more effectively than a 32-bit system.
                      Not all devices can run the 64-bit versions of Windows.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSeven">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="true"
                    aria-controls="collapseSeven"
                  >
                    Questionnaire on online shopping behavior during COVID-19.{" "}
                    <i className="fa-solid fa-angle-down" />
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSeven"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Fastkart is leading the charge in transforming India’s
                      vast, unorganised grocery landscape through cutting-edge
                      technology and innovation. Blinkit is India’s largest and
                      most convenient hyper-local delivery company, which
                      enables you to order grocery, fruits &amp; vegetables, and
                      other daily essential products, directly via your mobile
                      or web browser.
                    </p>
                    <p>
                      To know the reason why we changed our brand name from
                      Grofers to Fastkart, read this{" "}
                      <span className="fw-bold">blog post.</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEight">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                  >
                    How Can I Get More Attention From Customers?{" "}
                    <i className="fa-solid fa-angle-down" />
                  </button>
                </h2>
                <div
                  id="collapseEight"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingEight"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingNine">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
                  >
                    What is payment method?{" "}
                    <i className="fa-solid fa-angle-down" />
                  </button>
                </h2>
                <div
                  id="collapseNine"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingNine"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries,
                      but also the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s
                      with the release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Faq Section End */}
  {/* Footer Section Start */}
 <Footer/>
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

  )
}

export default Faq
