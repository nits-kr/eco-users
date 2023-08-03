import React, {useEffect} from 'react'
import { Link } from "react-router-dom";
import feather from 'feather-icons';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Header';
import Footer from './Footer';

function SellerGrid() {
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
            <section className="breadscrumb-section pt-0">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadscrumb-contain">
                                <h2>Seller Grid</h2>
                                <nav>
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item">
                                            <Link to="/index">
                                                <i className="fa-solid fa-house" />
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Seller Grid
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Section End */}
            {/* Grid Section Start */}
            <section className="seller-grid-section">
                <div className="container-fluid-lg">
                    <div className="row g-4">
                        <div className="col-xxl-4 col-md-6">
                            <Link to="/shop" className="seller-grid-box">
                                <div className="grid-contain">
                                    <div className="seller-contact-details">
                                        <div className="saller-contact">
                                            <div className="seller-icon">
                                                <i className="fa-solid fa-map-pin" />
                                            </div>
                                            <div className="contact-detail">
                                                <h5>
                                                    Address: <span> 1418 Riverwood Drive, CA 96052, US</span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="saller-contact">
                                            <div className="seller-icon">
                                                <i className="fa-solid fa-phone" />
                                            </div>
                                            <div className="contact-detail">
                                                <h5>
                                                    Conact Us: <span>(386) 677-5931</span>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contain-name">
                                        <div>
                                            <h6>Since 2022</h6>
                                            <h3>Nature Food</h3>
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
                                                <h6 className="theme-color ms-2">(26)</h6>
                                            </div>
                                            <span className="product-label">380 Products</span>
                                        </div>
                                        <div className="grid-image">
                                            <img
                                                src="../assets/images/vendor-page/logo/1.png"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-4 col-md-6">
                            <Link to="/shop" className="seller-grid-box">
                                <div className="grid-contain">
                                    <div className="seller-contact-details">
                                        <div className="saller-contact">
                                            <div className="seller-icon">
                                                <i className="fa-solid fa-map-pin" />
                                            </div>
                                            <div className="contact-detail">
                                                <h5>
                                                    Address: <span> 4838 N Smalley Ave</span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="saller-contact">
                                            <div className="seller-icon">
                                                <i className="fa-solid fa-phone" />
                                            </div>
                                            <div className="contact-detail">
                                                <h5>
                                                    Conact Us: <span>(816) 453-6955</span>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contain-name">
                                        <div>
                                            <h6>Since 2022</h6>
                                            <h3>Combine Food</h3>
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
                                                <h6 className="theme-color ms-2">(26)</h6>
                                            </div>
                                            <span className="product-label">50 Products</span>
                                        </div>
                                        <div className="grid-image">
                                            <img
                                                src="../assets/images/vendor-page/logo/2.png"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-4 col-md-6">
                            <Link to="/shop" className="seller-grid-box">
                                <div className="grid-contain">
                                    <div className="seller-contact-details">
                                        <div className="saller-contact">
                                            <div className="seller-icon">
                                                <i className="fa-solid fa-map-pin" />
                                            </div>
                                            <div className="contact-detail">
                                                <h5>
                                                    Address: <span> 3625 Metro Pkwy</span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="saller-contact">
                                            <div className="seller-icon">
                                                <i className="fa-solid fa-phone" />
                                            </div>
                                            <div className="contact-detail">
                                                <h5>
                                                    Conact Us: <span>(210) 260-2517</span>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contain-name">
                                        <div>
                                            <h6>Since 2022</h6>
                                            <h3>Amara</h3>
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
                                                <h6 className="theme-color ms-2">(26)</h6>
                                            </div>
                                            <span className="product-label">312 Products</span>
                                        </div>
                                        <div className="grid-image">
                                            <img
                                                src="../assets/images/vendor-page/logo/3.png"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-4 col-md-6">
                            <Link to="/shop" className="seller-grid-box">
                                <div className="grid-contain">
                                    <div className="seller-contact-details">
                                        <div className="saller-contact">
                                            <div className="seller-icon">
                                                <i className="fa-solid fa-map-pin" />
                                            </div>
                                            <div className="contact-detail">
                                                <h5>
                                                    Address: <span> 6185 S Saginaw St</span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="saller-contact">
                                            <div className="seller-icon">
                                                <i className="fa-solid fa-phone" />
                                            </div>
                                            <div className="contact-detail">
                                                <h5>
                                                    Conact Us: <span>(866) 413-2382</span>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contain-name">
                                        <div>
                                            <h6>Since 2022</h6>
                                            <h3>Denovo Meats</h3>
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
                                                <h6 className="theme-color ms-2">(26)</h6>
                                            </div>
                                            <span className="product-label">126 Products</span>
                                        </div>
                                        <div className="grid-image">
                                            <img
                                                src="../assets/images/vendor-page/logo/4.png"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-4 col-md-6">
                            <Link to="/shop" className="seller-grid-box">
                                <div className="grid-contain">
                                    <div className="seller-contact-details">
                                        <div className="saller-contact">
                                            <div className="seller-icon">
                                                <i className="fa-solid fa-map-pin" />
                                            </div>
                                            <div className="contact-detail">
                                                <h5>
                                                    Address: <span> 2400 4th St SW</span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="saller-contact">
                                            <div className="seller-icon">
                                                <i className="fa-solid fa-phone" />
                                            </div>
                                            <div className="contact-detail">
                                                <h5>
                                                    Conact Us: <span>(641) 424-2605</span>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contain-name">
                                        <div>
                                            <h6>Since 2022</h6>
                                            <h3>Meating Place</h3>
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
                                                <h6 className="theme-color ms-2">(26)</h6>
                                            </div>
                                            <span className="product-label">258 Products</span>
                                        </div>
                                        <div className="grid-image">
                                            <img
                                                src="../assets/images/vendor-page/logo/5.png"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-4 col-md-6">
                            <Link to="/shop" className="seller-grid-box">
                                <div className="grid-contain">
                                    <div className="seller-contact-details">
                                        <div className="saller-contact">
                                            <div className="seller-icon">
                                                <i className="fa-solid fa-map-pin" />
                                            </div>
                                            <div className="contact-detail">
                                                <h5>
                                                    Address: <span> 32 Childwall Abbey Road</span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="saller-contact">
                                            <div className="seller-icon">
                                                <i className="fa-solid fa-phone" />
                                            </div>
                                            <div className="contact-detail">
                                                <h5>
                                                    Conact Us: <span>(414) 352-3920</span>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contain-name">
                                        <div>
                                            <h6>Since 2022</h6>
                                            <h3>Aven</h3>
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
                                                <h6 className="theme-color ms-2">(26)</h6>
                                            </div>
                                            <span className="product-label">69 Products</span>
                                        </div>
                                        <div className="grid-image">
                                            <img
                                                src="../assets/images/vendor-page/logo/6.png"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-4 col-md-6">
                            <Link to="/shop" className="seller-grid-box">
                                <div className="grid-contain">
                                    <div className="seller-contact-details">
                                        <div className="saller-contact">
                                            <div className="seller-icon">
                                                <i className="fa-solid fa-map-pin" />
                                            </div>
                                            <div className="contact-detail">
                                                <h5>
                                                    Address: <span> 8267 S South Chicago Avenue</span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="saller-contact">
                                            <div className="seller-icon">
                                                <i className="fa-solid fa-phone" />
                                            </div>
                                            <div className="contact-detail">
                                                <h5>
                                                    Conact Us: <span>(773) 731-2500</span>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contain-name">
                                        <div>
                                            <h6>Since 2022</h6>
                                            <h3>Organic Corn</h3>
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
                                                <h6 className="theme-color ms-2">(26)</h6>
                                            </div>
                                            <span className="product-label">360 Products</span>
                                        </div>
                                        <div className="grid-image">
                                            <img
                                                src="../assets/images/vendor-page/logo/7.png"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-4 col-md-6">
                            <Link to="/shop" className="seller-grid-box">
                                <div className="grid-contain">
                                    <div className="seller-contact-details">
                                        <div className="saller-contact">
                                            <div className="seller-icon">
                                                <i className="fa-solid fa-map-pin" />
                                            </div>
                                            <div className="contact-detail">
                                                <h5>
                                                    Address: <span> 9950 Woodlands Pkwy #400</span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="saller-contact">
                                            <div className="seller-icon">
                                                <i className="fa-solid fa-phone" />
                                            </div>
                                            <div className="contact-detail">
                                                <h5>
                                                    Conact Us: <span>(281) 298-9684</span>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contain-name">
                                        <div>
                                            <h6>Since 2022</h6>
                                            <h3>Combine Food</h3>
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
                                                <h6 className="theme-color ms-2">(26)</h6>
                                            </div>
                                            <span className="product-label">753 Products</span>
                                        </div>
                                        <div className="grid-image">
                                            <img
                                                src="../assets/images/vendor-page/logo/2.png"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-4 col-md-6">
                            <Link to="/shop" className="seller-grid-box">
                                <div className="grid-contain">
                                    <div className="seller-contact-details">
                                        <div className="saller-contact">
                                            <div className="seller-icon">
                                                <i className="fa-solid fa-map-pin" />
                                            </div>
                                            <div className="contact-detail">
                                                <h5>
                                                    Address: <span> 3510 Pacific Ave SE</span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="saller-contact">
                                            <div className="seller-icon">
                                                <i className="fa-solid fa-phone" />
                                            </div>
                                            <div className="contact-detail">
                                                <h5>
                                                    Conact Us: <span> (360) 459-3680</span>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contain-name">
                                        <div>
                                            <h6>Since 2022</h6>
                                            <h3>Nature Food</h3>
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
                                                <h6 className="theme-color ms-2">(26)</h6>
                                            </div>
                                            <span className="product-label">380 Products</span>
                                        </div>
                                        <div className="grid-image">
                                            <img
                                                src="../assets/images/vendor-page/logo/1.png"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
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
            </section>
            {/* Grid Section End */}
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
            <Footer/>
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
                                                Candy canes sugar plum tart cotton candy chupa chups sugar
                                                plum chocolate I love. Caramels marshmallow icing dessert
                                                candy canes I love soufflé I love toffee. Marshmallow pie
                                                sweet sweet roll sesame snaps tiramisu jelly bear claw.
                                                Bonbon muffin I love carrot cake sugar plum dessert bonbon.
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
                                               // onclick="location.href = 'cart';"
                                               onClick={() => {window.location.href = '/cart'}}
                                                className="btn btn-md add-cart-button icon"
                                            >
                                                Add To Cart
                                            </button>
                                            <button
                                               // onclick="location.href = 'product-left';"
                                               onClick={() => {window.location.href = '/product-left'}}
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
            {/* Cookie Bar Box Start */}
            <div className="cookie-bar-box">
                <div className="cookie-box">
                    <div className="cookie-image">
                        <img
                            src="../assets/images/cookie-bar.png"
                            className=" lazyload"
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
                    <button className="btn ok-button">OK</button>
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

export default SellerGrid
