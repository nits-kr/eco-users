import React, {useEffect} from 'react'
import { Link } from "react-router-dom";
import feather from 'feather-icons';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Header';

function SellerDashboard() {
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
                    <li>
                        <Link to="*">
                            <i className="iconly-Home icli" />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className="mobile-category">
                        <Link to="javascript:void(0)">
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
                                <h2>User Dashboard</h2>
                                <nav>
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item">
                                            <Link to="/index">
                                                <i className="fa-solid fa-house" />
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            User Dashboard
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Section End */}
            {/* User Dashboard Section Start */}
            <section className="user-dashboard-section section-b-space">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-xxl-3 col-lg-4">
                            <div className="dashboard-left-sidebar">
                                <div className="close-button d-flex d-lg-none">
                                    <button className="close-sidebar">
                                        <i className="fa-solid fa-xmark" />
                                    </button>
                                </div>
                                <div className="profile-box">
                                    <div className="cover-image">
                                        <img
                                            src="../assets/images/inner-page/cover-img.jpg"
                                            className="img-fluid  lazyload"
                                            alt=""
                                        />
                                    </div>
                                    <div className="profile-contain">
                                        <div className="profile-image">
                                            <div className="position-relative">
                                                <img
                                                    src="../assets/images/vendor-page/logo.png"
                                                    className=" lazyload update_img"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="profile-name">
                                            <h3>Joshua D. Bass</h3>
                                            <h6 className="text-content">joshuadbass@rhyta.com</h6>
                                        </div>
                                    </div>
                                </div>
                                <ul
                                    className="nav nav-pills user-nav-pills"
                                    id="pills-tab"
                                    role="tablist"
                                >
                                    <li className="nav-item" role="presentation">
                                        <Link
                                            to="#pills-tabContent"
                                            className="nav-link active"
                                            id="pills-dashboard-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-dashboard"
                                            role="tab"
                                            aria-controls="pills-dashboard"
                                            aria-selected="true"
                                        >
                                            <i data-feather="home" />
                                            DashBoard
                                        </Link>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="pills-product-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-product"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-product"
                                            aria-selected="false"
                                        >
                                            <i data-feather="shopping-bag" />
                                            Products
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="pills-order-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-order"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-order"
                                            aria-selected="false"
                                        >
                                            <i data-feather="shopping-bag" />
                                            Order
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="pills-profile-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-profile"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-profile"
                                            aria-selected="false"
                                        >
                                            <i data-feather="user" />
                                            Profile
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="pills-security-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-security"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-security"
                                            aria-selected="false"
                                        >
                                            <i data-feather="settings" />
                                            Setting
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="pills-out-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-out"
                                            type="button"
                                            role="tab"
                                            aria-selected="false"
                                        >
                                            <i data-feather="log-out" />
                                            Log Out
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xxl-9 col-lg-8">
                            <button className="btn left-dashboard-show btn-animation btn-md fw-bold d-block mb-4 d-lg-none">
                                Show Menu
                            </button>
                            <div className="dashboard-right-sidebar">
                                <div className="tab-content" id="pills-tabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="pills-dashboard"
                                        role="tabpanel"
                                        aria-labelledby="pills-dashboard-tab"
                                    >
                                        <div className="dashboard-home">
                                            <div className="title">
                                                <h2>My Dashboard</h2>
                                                <span className="title-leaf">
                                                    <svg className="icon-width bg-gray">
                                                        <use xlinkHref="../assets/svg/leaf.svg#leaf" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="dashboard-user-name">
                                                <h6 className="text-content">
                                                    Hello, <b className="text-title">Vicki E. Pope</b>
                                                </h6>
                                                <p className="text-content">
                                                    From your My Account Dashboard you have the ability to
                                                    view a snapshot of your recent account activity and update
                                                    your account information. Select a link below to view or
                                                    edit information.
                                                </p>
                                            </div>
                                            <div className="total-box">
                                                <div className="row g-sm-4 g-3">
                                                    <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                                                        <div className="totle-contain">
                                                            <img
                                                                src="../assets/images/svg/order.svg"
                                                                className="img-1  lazyload"
                                                                alt=""
                                                            />
                                                            <img
                                                                src="../assets/images/svg/order.svg"
                                                                className=" lazyload"
                                                                alt=""
                                                            />
                                                            <div className="totle-detail">
                                                                <h5>Total Products</h5>
                                                                <h3>25</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                                                        <div className="totle-contain">
                                                            <img
                                                                src="../assets/images/svg/pending.svg"
                                                                className="img-1  lazyload"
                                                                alt=""
                                                            />
                                                            <img
                                                                src="../assets/images/svg/pending.svg"
                                                                className=" lazyload"
                                                                alt=""
                                                            />
                                                            <div className="totle-detail">
                                                                <h5>Total Sales</h5>
                                                                <h3>12550</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                                                        <div className="totle-contain">
                                                            <img
                                                                src="../assets/images/svg/wishlist.svg"
                                                                className="img-1  lazyload"
                                                                alt=""
                                                            />
                                                            <img
                                                                src="../assets/images/svg/wishlist.svg"
                                                                className=" lazyload"
                                                                alt=""
                                                            />
                                                            <div className="totle-detail">
                                                                <h5>Order Pending</h5>
                                                                <h3>36</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row g-4">
                                                <div className="col-xxl-6">
                                                    <div className="dashboard-bg-box">
                                                        <div id="chart" />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-6">
                                                    <div className="dashboard-bg-box">
                                                        <div id="sale" />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-6">
                                                    <div className="table-responsive dashboard-bg-box">
                                                        <div className="dashboard-title mb-4">
                                                            <h3>Trending Products</h3>
                                                        </div>
                                                        <table className="table product-table">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Images</th>
                                                                    <th scope="col">Product Name</th>
                                                                    <th scope="col">Price</th>
                                                                    <th scope="col">Sales</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="product-image">
                                                                        <img
                                                                            src="../assets/images/vegetable/product/1.png"
                                                                            className="img-fluid"
                                                                            alt=""
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <h6>Fantasy Crunchy Choco Chip Cookies</h6>
                                                                    </td>
                                                                    <td>
                                                                        <h6>$25.69</h6>
                                                                    </td>
                                                                    <td>
                                                                        <h6>152</h6>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="product-image">
                                                                        <img
                                                                            src="../assets/images/vegetable/product/2.png"
                                                                            className="img-fluid"
                                                                            alt=""
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <h6>
                                                                            Peanut Butter Bite Premium Butter Cookies 600
                                                                            g
                                                                        </h6>
                                                                    </td>
                                                                    <td>
                                                                        <h6>$35.36</h6>
                                                                    </td>
                                                                    <td>
                                                                        <h6>34</h6>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="product-image">
                                                                        <img
                                                                            src="../assets/images/vegetable/product/3.png"
                                                                            className="img-fluid"
                                                                            alt=""
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <h6>
                                                                            Yumitos Chilli Sprinkled Potato Chips 100 g
                                                                        </h6>
                                                                    </td>
                                                                    <td>
                                                                        <h6>$78.55</h6>
                                                                    </td>
                                                                    <td>
                                                                        <h6>78</h6>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="product-image">
                                                                        <img
                                                                            src="../assets/images/vegetable/product/4.png"
                                                                            className="img-fluid"
                                                                            alt=""
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <h6>healthy Long Life Toned Milk 1 L</h6>
                                                                    </td>
                                                                    <td>
                                                                        <h6>$32.98</h6>
                                                                    </td>
                                                                    <td>
                                                                        <h6>135</h6>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-6">
                                                    <div className="order-tab dashboard-bg-box">
                                                        <div className="dashboard-title mb-4">
                                                            <h3>Recent Order</h3>
                                                        </div>
                                                        <div className="table-responsive">
                                                            <table className="table order-table">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col">Order ID</th>
                                                                        <th scope="col">Product Name</th>
                                                                        <th scope="col">Status</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="product-image">#254834</td>
                                                                        <td>
                                                                            <h6>Choco Chip Cookies</h6>
                                                                        </td>
                                                                        <td>
                                                                            <label className="success">Shipped</label>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="product-image">#355678</td>
                                                                        <td>
                                                                            <h6>Premium Butter Cookies</h6>
                                                                        </td>
                                                                        <td>
                                                                            <label className="danger">Pending</label>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="product-image">#647536</td>
                                                                        <td>
                                                                            <h6>Sprinkled Potato Chips</h6>
                                                                        </td>
                                                                        <td>
                                                                            <label className="success">Shipped</label>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="product-image">#125689</td>
                                                                        <td>
                                                                            <h6>Milk 1 L</h6>
                                                                        </td>
                                                                        <td>
                                                                            <label className="danger">Pending</label>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="product-image">#215487</td>
                                                                        <td>
                                                                            <h6>Raw Mutton Leg</h6>
                                                                        </td>
                                                                        <td>
                                                                            <label className="danger">Pending</label>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="product-image">#365474</td>
                                                                        <td>
                                                                            <h6>Instant Coffee</h6>
                                                                        </td>
                                                                        <td>
                                                                            <label className="success">Shipped</label>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="product-image">#368415</td>
                                                                        <td>
                                                                            <h6>Jowar Stick and Jowar Chips</h6>
                                                                        </td>
                                                                        <td>
                                                                            <label className="danger">Pending</label>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pills-product"
                                        role="tabpanel"
                                        aria-labelledby="pills-product-tab"
                                    >
                                        <div className="product-tab">
                                            <div className="title">
                                                <h2>All Product</h2>
                                                <span className="title-leaf">
                                                    <svg className="icon-width bg-gray">
                                                        <use xlinkHref="../assets/svg/leaf.svg#leaf" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="table-responsive dashboard-bg-box">
                                                <table className="table product-table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Images</th>
                                                            <th scope="col">Product Name</th>
                                                            <th scope="col">Price</th>
                                                            <th scope="col">Stock</th>
                                                            <th scope="col">Sales</th>
                                                            <th scope="col">Edit / Delete</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="product-image">
                                                                <img
                                                                    src="../assets/images/vegetable/product/1.png"
                                                                    className="img-fluid"
                                                                    alt=""
                                                                />
                                                            </td>
                                                            <td>
                                                                <h6>Fantasy Crunchy Choco Chip Cookies</h6>
                                                            </td>
                                                            <td>
                                                                <h6 className="theme-color fw-bold">$25.69</h6>
                                                            </td>
                                                            <td>
                                                                <h6>63</h6>
                                                            </td>
                                                            <td>
                                                                <h6>152</h6>
                                                            </td>
                                                            <td className="efit-delete">
                                                                <i data-feather="edit" className="edit" />
                                                                <i data-feather="trash-2" className="delete" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="product-image">
                                                                <img
                                                                    src="../assets/images/vegetable/product/2.png"
                                                                    className="img-fluid"
                                                                    alt=""
                                                                />
                                                            </td>
                                                            <td>
                                                                <h6>
                                                                    Peanut Butter Bite Premium Butter Cookies 600 g
                                                                </h6>
                                                            </td>
                                                            <td>
                                                                <h6 className="theme-color fw-bold">$35.36</h6>
                                                            </td>
                                                            <td>
                                                                <h6>14</h6>
                                                            </td>
                                                            <td>
                                                                <h6>34</h6>
                                                            </td>
                                                            <td className="efit-delete">
                                                                <i data-feather="edit" className="edit" />
                                                                <i data-feather="trash-2" className="delete" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="product-image">
                                                                <img
                                                                    src="../assets/images/vegetable/product/3.png"
                                                                    className="img-fluid"
                                                                    alt=""
                                                                />
                                                            </td>
                                                            <td>
                                                                <h6>Yumitos Chilli Sprinkled Potato Chips 100 g</h6>
                                                            </td>
                                                            <td>
                                                                <h6 className="theme-color fw-bold">$78.55</h6>
                                                            </td>
                                                            <td>
                                                                <h6>55</h6>
                                                            </td>
                                                            <td>
                                                                <h6>78</h6>
                                                            </td>
                                                            <td className="efit-delete">
                                                                <i data-feather="edit" className="edit" />
                                                                <i data-feather="trash-2" className="delete" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="product-image">
                                                                <img
                                                                    src="../assets/images/vegetable/product/4.png"
                                                                    className="img-fluid"
                                                                    alt=""
                                                                />
                                                            </td>
                                                            <td>
                                                                <h6>healthy Long Life Toned Milk 1 L</h6>
                                                            </td>
                                                            <td>
                                                                <h6 className="theme-color fw-bold">$32.98</h6>
                                                            </td>
                                                            <td>
                                                                <h6>69</h6>
                                                            </td>
                                                            <td>
                                                                <h6>135</h6>
                                                            </td>
                                                            <td className="efit-delete">
                                                                <i data-feather="edit" className="edit" />
                                                                <i data-feather="trash-2" className="delete" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="product-image">
                                                                <img
                                                                    src="../assets/images/vegetable/product/5.png"
                                                                    className="img-fluid"
                                                                    alt=""
                                                                />
                                                            </td>
                                                            <td>
                                                                <h6>Raw Mutton Leg, Packaging 5 Kg</h6>
                                                            </td>
                                                            <td>
                                                                <h6 className="theme-color fw-bold">$36.98</h6>
                                                            </td>
                                                            <td>
                                                                <h6>35</h6>
                                                            </td>
                                                            <td>
                                                                <h6>154</h6>
                                                            </td>
                                                            <td className="efit-delete">
                                                                <i data-feather="edit" className="edit" />
                                                                <i data-feather="trash-2" className="delete" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="product-image">
                                                                <img
                                                                    src="../assets/images/vegetable/product/6.png"
                                                                    className="img-fluid"
                                                                    alt=""
                                                                />
                                                            </td>
                                                            <td>
                                                                <h6>Cold Brew Coffee Instant Coffee 50 g</h6>
                                                            </td>
                                                            <td>
                                                                <h6 className="theme-color fw-bold">$36.58</h6>
                                                            </td>
                                                            <td>
                                                                <h6>69</h6>
                                                            </td>
                                                            <td>
                                                                <h6>168</h6>
                                                            </td>
                                                            <td className="efit-delete">
                                                                <i data-feather="edit" className="edit" />
                                                                <i data-feather="trash-2" className="delete" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="product-image">
                                                                <img
                                                                    src="../assets/images/vegetable/product/7.png"
                                                                    className="img-fluid"
                                                                    alt=""
                                                                />
                                                            </td>
                                                            <td>
                                                                <h6>
                                                                    SnackAmor Combo Pack of Jowar Stick and Jowar
                                                                    Chips
                                                                </h6>
                                                            </td>
                                                            <td>
                                                                <h6 className="theme-color fw-bold">$25.69</h6>
                                                            </td>
                                                            <td>
                                                                <h6>63</h6>
                                                            </td>
                                                            <td>
                                                                <h6>152</h6>
                                                            </td>
                                                            <td className="efit-delete">
                                                                <i data-feather="edit" className="edit" />
                                                                <i data-feather="trash-2" className="delete" />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <nav className="custome-pagination">
                                                    <ul className="pagination justify-content-center">
                                                        <li className="page-item disabled">
                                                            <Link
                                                                className="page-link"
                                                                to="javascript:void(0)"
                                                                tabIndex={-1}
                                                            >
                                                                <i className="fa-solid fa-angles-left" />
                                                            </Link>
                                                        </li>
                                                        <li className="page-item active">
                                                            <Link className="page-link" to="javascript:void(0)">
                                                                1
                                                            </Link>
                                                        </li>
                                                        <li className="page-item" aria-current="page">
                                                            <Link className="page-link" to="javascript:void(0)">
                                                                2
                                                            </Link>
                                                        </li>
                                                        <li className="page-item">
                                                            <Link className="page-link" to="javascript:void(0)">
                                                                3
                                                            </Link>
                                                        </li>
                                                        <li className="page-item">
                                                            <Link className="page-link" to="javascript:void(0)">
                                                                <i className="fa-solid fa-angles-right" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pills-order"
                                        role="tabpanel"
                                        aria-labelledby="pills-order-tab"
                                    >
                                        <div className="dashboard-order">
                                            <div className="title">
                                                <h2>All Order</h2>
                                                <span className="title-leaf title-leaf-gray">
                                                    <svg className="icon-width bg-gray">
                                                        <use xlinkHref="../assets/svg/leaf.svg#leaf" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="order-tab dashboard-bg-box">
                                                <div className="table-responsive">
                                                    <table className="table order-table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Order ID</th>
                                                                <th scope="col">Product Name</th>
                                                                <th scope="col">Status</th>
                                                                <th scope="col">Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="product-image">#254834</td>
                                                                <td>
                                                                    <h6>Fantasy Crunchy Choco Chip Cookies</h6>
                                                                </td>
                                                                <td>
                                                                    <label className="success">Shipped</label>
                                                                </td>
                                                                <td>
                                                                    <h6>$25.69</h6>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="product-image">#355678</td>
                                                                <td>
                                                                    <h6>
                                                                        Peanut Butter Bite Premium Butter Cookies 600 g
                                                                    </h6>
                                                                </td>
                                                                <td>
                                                                    <label className="danger">Pending</label>
                                                                </td>
                                                                <td>
                                                                    <h6>$25.69</h6>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="product-image">#647536</td>
                                                                <td>
                                                                    <h6>
                                                                        Yumitos Chilli Sprinkled Potato Chips 100 g
                                                                    </h6>
                                                                </td>
                                                                <td>
                                                                    <label className="success">Shipped</label>
                                                                </td>
                                                                <td>
                                                                    <h6>$25.69</h6>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="product-image">#125689</td>
                                                                <td>
                                                                    <h6>healthy Long Life Toned Milk 1 L</h6>
                                                                </td>
                                                                <td>
                                                                    <label className="danger">Pending</label>
                                                                </td>
                                                                <td>
                                                                    <h6>$25.69</h6>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="product-image">#215487</td>
                                                                <td>
                                                                    <h6>Raw Mutton Leg, Packaging 5 Kg</h6>
                                                                </td>
                                                                <td>
                                                                    <label className="danger">Pending</label>
                                                                </td>
                                                                <td>
                                                                    <h6>$25.69</h6>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="product-image">#365474</td>
                                                                <td>
                                                                    <h6>Cold Brew Coffee Instant Coffee 50 g</h6>
                                                                </td>
                                                                <td>
                                                                    <label className="success">Shipped</label>
                                                                </td>
                                                                <td>
                                                                    <h6>$25.69</h6>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="product-image">#368415</td>
                                                                <td>
                                                                    <h6>
                                                                        SnackAmor Combo Pack of Jowar Stick and Jowar
                                                                        Chips
                                                                    </h6>
                                                                </td>
                                                                <td>
                                                                    <label className="danger">Pending</label>
                                                                </td>
                                                                <td>
                                                                    <h6>$25.69</h6>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <nav className="custome-pagination">
                                                    <ul className="pagination justify-content-center">
                                                        <li className="page-item disabled">
                                                            <Link
                                                                className="page-link"
                                                                to="javascript:void(0)"
                                                                tabIndex={-1}
                                                            >
                                                                <i className="fa-solid fa-angles-left" />
                                                            </Link>
                                                        </li>
                                                        <li className="page-item active">
                                                            <Link className="page-link" to="javascript:void(0)">
                                                                1
                                                            </Link>
                                                        </li>
                                                        <li className="page-item" aria-current="page">
                                                            <Link className="page-link" to="javascript:void(0)">
                                                                2
                                                            </Link>
                                                        </li>
                                                        <li className="page-item">
                                                            <Link className="page-link" to="javascript:void(0)">
                                                                3
                                                            </Link>
                                                        </li>
                                                        <li className="page-item">
                                                            <Link className="page-link" to="javascript:void(0)">
                                                                <i className="fa-solid fa-angles-right" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pills-profile"
                                        role="tabpanel"
                                        aria-labelledby="pills-profile-tab"
                                    >
                                        <div className="dashboard-profile">
                                            <div className="title">
                                                <h2>My Profile</h2>
                                                <span className="title-leaf">
                                                    <svg className="icon-width bg-gray">
                                                        <use xlinkHref="../assets/svg/leaf.svg#leaf" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="profile-tab dashboard-bg-box">
                                                <div className="dashboard-title dashboard-flex">
                                                    <h3>Profile Name</h3>
                                                    <button
                                                        className="btn btn-sm theme-bg-color text-white"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#edit-profile"
                                                    >
                                                        Edit Profile
                                                    </button>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <h5>Company Name :</h5>
                                                        <h5>Grocery Store</h5>
                                                    </li>
                                                    <li>
                                                        <h5>Email Address :</h5>
                                                        <h5>joshuadbass@rhyta.com</h5>
                                                    </li>
                                                    <li>
                                                        <h5>Country / Region :</h5>
                                                        <h5>107 Veltri Drive</h5>
                                                    </li>
                                                    <li>
                                                        <h5>Year Established :</h5>
                                                        <h5>2022</h5>
                                                    </li>
                                                    <li>
                                                        <h5>Total Employees :</h5>
                                                        <h5>154 - 360 People</h5>
                                                    </li>
                                                    <li>
                                                        <h5>Category :</h5>
                                                        <h5>Grocery</h5>
                                                    </li>
                                                    <li>
                                                        <h5>Street Address :</h5>
                                                        <h5>234 High St</h5>
                                                    </li>
                                                    <li>
                                                        <h5>City / State :</h5>
                                                        <h5>107 Veltri Drive</h5>
                                                    </li>
                                                    <li>
                                                        <h5>Zip :</h5>
                                                        <h5>B23 6SN</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pills-security"
                                        role="tabpanel"
                                        aria-labelledby="pills-security-tab"
                                    >
                                        <div className="dashboard-privacy">
                                            <div className="title">
                                                <h2>My Setting</h2>
                                                <span className="title-leaf">
                                                    <svg className="icon-width bg-gray">
                                                        <use xlinkHref="../assets/svg/leaf.svg#leaf" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="dashboard-bg-box">
                                                <div className="dashboard-title mb-4">
                                                    <h3>Notifications</h3>
                                                </div>
                                                <div className="privacy-box">
                                                    <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            id="desktop"
                                                            name="desktop"
                                                            defaultChecked=""
                                                        />
                                                        <label
                                                            className="form-check-label ms-2"
                                                            htmlFor="desktop"
                                                        >
                                                            Show Desktop Notifications
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="privacy-box">
                                                    <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            id="enable"
                                                            name="desktop"
                                                        />
                                                        <label
                                                            className="form-check-label ms-2"
                                                            htmlFor="enable"
                                                        >
                                                            Enable Notifications
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="privacy-box">
                                                    <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            id="activity"
                                                            name="desktop"
                                                        />
                                                        <label
                                                            className="form-check-label ms-2"
                                                            htmlFor="activity"
                                                        >
                                                            Get notification for my own activity
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="privacy-box">
                                                    <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            id="dnd"
                                                            name="desktop"
                                                        />
                                                        <label className="form-check-label ms-2" htmlFor="dnd">
                                                            DND
                                                        </label>
                                                    </div>
                                                </div>
                                                <button className="btn theme-bg-color btn-md fw-bold mt-4 text-white">
                                                    Save Changes
                                                </button>
                                            </div>
                                            <div className="dashboard-bg-box">
                                                <div className="dashboard-title mb-4">
                                                    <h3>Deactivate Account</h3>
                                                </div>
                                                <div className="privacy-box">
                                                    <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            id="concern"
                                                            name="concern"
                                                        />
                                                        <label
                                                            className="form-check-label ms-2"
                                                            htmlFor="concern"
                                                        >
                                                            I have a privacy concern
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="privacy-box">
                                                    <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            id="temporary"
                                                            name="concern"
                                                        />
                                                        <label
                                                            className="form-check-label ms-2"
                                                            htmlFor="temporary"
                                                        >
                                                            This is temporary
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="privacy-box">
                                                    <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            id="other"
                                                            name="concern"
                                                        />
                                                        <label
                                                            className="form-check-label ms-2"
                                                            htmlFor="other"
                                                        >
                                                            other
                                                        </label>
                                                    </div>
                                                </div>
                                                <button className="btn theme-bg-color btn-md fw-bold mt-4 text-white">
                                                    Deactivate Account
                                                </button>
                                            </div>
                                            <div className="dashboard-bg-box">
                                                <div className="dashboard-title mb-4">
                                                    <h3>Delete Account</h3>
                                                </div>
                                                <div className="privacy-box">
                                                    <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            id="usable"
                                                            name="usable"
                                                        />
                                                        <label
                                                            className="form-check-label ms-2"
                                                            htmlFor="usable"
                                                        >
                                                            No longer usable
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="privacy-box">
                                                    <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            id="account"
                                                            name="usable"
                                                        />
                                                        <label
                                                            className="form-check-label ms-2"
                                                            htmlFor="account"
                                                        >
                                                            Want to switch on other account
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="privacy-box">
                                                    <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            id="other-2"
                                                            name="usable"
                                                        />
                                                        <label
                                                            className="form-check-label ms-2"
                                                            htmlFor="other-2"
                                                        >
                                                            Other
                                                        </label>
                                                    </div>
                                                </div>
                                                <button className="btn theme-bg-color btn-md fw-bold mt-4 text-white">
                                                    Delete My Account
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
            {/* User Dashboard Section End */}
            {/* Footer Section Start */}
            <footer className="section-t-space">
                <div className="container-fluid-lg">
                    <div className="service-section">
                        <div className="row g-3">
                            <div className="col-12">
                                <div className="service-contain">
                                    <div className="service-box">
                                        <div className="service-image">
                                            <img
                                                src="../assets/svg/product.svg"
                                                className=" lazyload"
                                                alt=""
                                            />
                                        </div>
                                        <div className="service-detail">
                                            <h5>Every Fresh Products</h5>
                                        </div>
                                    </div>
                                    <div className="service-box">
                                        <div className="service-image">
                                            <img
                                                src="../assets/svg/delivery.svg"
                                                className=" lazyload"
                                                alt=""
                                            />
                                        </div>
                                        <div className="service-detail">
                                            <h5>Free Delivery For Order Over $50</h5>
                                        </div>
                                    </div>
                                    <div className="service-box">
                                        <div className="service-image">
                                            <img
                                                src="../assets/svg/discount.svg"
                                                className=" lazyload"
                                                alt=""
                                            />
                                        </div>
                                        <div className="service-detail">
                                            <h5>Daily Mega Discounts</h5>
                                        </div>
                                    </div>
                                    <div className="service-box">
                                        <div className="service-image">
                                            <img
                                                src="../assets/svg/market.svg"
                                                className=" lazyload"
                                                alt=""
                                            />
                                        </div>
                                        <div className="service-detail">
                                            <h5>Best Price On The Market</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-footer section-b-space section-t-space">
                        <div className="row g-md-4 g-3">
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="footer-logo">
                                    <div className="theme-logo">
                                        <Link to="/index">
                                            <img
                                                src="../assets/images/logo/logo.png"
                                                className=" lazyload"
                                                alt=""
                                            />
                                        </Link>
                                    </div>
                                    <div className="footer-logo-contain">
                                        <p>
                                            We are a friendly bar serving a variety of cocktails, wines
                                            and beers. Our bar is a perfect place for a couple.
                                        </p>
                                        <ul className="address">
                                            <li>
                                                <i data-feather="home" />
                                                <Link to="javascript:void(0)">
                                                    1418 Riverwood Drive, CA 96052, US
                                                </Link>
                                            </li>
                                            <li>
                                                <i data-feather="mail" />
                                                <Link to="javascript:void(0)">support@dummy.com</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <div className="footer-title">
                                    <h4>Categories</h4>
                                </div>
                                <div className="footer-contain">
                                    <ul>
                                        <li>
                                            <Link to="/shop" className="text-content">
                                                Vegetables &amp; Fruit
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/shop" className="text-content">
                                                Beverages
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/shop" className="text-content">
                                                Meats &amp; Seafood
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/shop" className="text-content">
                                                Frozen Foods
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/shop" className="text-content">
                                                Biscuits &amp; Snacks
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/shop" className="text-content">
                                                Grocery &amp; Staples
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl col-lg-2 col-sm-3">
                                <div className="footer-title">
                                    <h4>Useful Links</h4>
                                </div>
                                <div className="footer-contain">
                                    <ul>
                                        <li>
                                            <Link to="*" className="text-content">
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/shop" className="text-content">
                                                Shop
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/about-us" className="text-content">
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/blog" className="text-content">
                                                Blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contact-us" className="text-content">
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-sm-3">
                                <div className="footer-title">
                                    <h4>Help Center</h4>
                                </div>
                                <div className="footer-contain">
                                    <ul>
                                        <li>
                                            <Link to="/order-success" className="text-content">
                                                Your Order
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="user-dashboard" className="text-content">
                                                Your Account
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/order-tracking" className="text-content">
                                                Track Order
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/wishlist" className="text-content">
                                                Your Wishlist
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/search" className="text-content">
                                                Search
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/faq" className="text-content">
                                                FAQ
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="footer-title">
                                    <h4>Contact Us</h4>
                                </div>
                                <div className="footer-contact">
                                    <ul>
                                        <li>
                                            <div className="footer-number">
                                                <i data-feather="phone" />
                                                <div className="contact-number">
                                                    <h6 className="text-content">Hotline 24/7 :</h6>
                                                    <h5>+91 888 104 2340</h5>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="footer-number">
                                                <i data-feather="mail" />
                                                <div className="contact-number">
                                                    <h6 className="text-content">Email Address :</h6>
                                                    <h5>dummy@hotmail.com</h5>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="social-app mb-0">
                                            <h5 className="mb-2 text-content">Download App :</h5>
                                            <ul>
                                                <li className="mb-0">
                                                    <Link
                                                        to="https://play.google.com/store/apps"
                                                        target="_blank"
                                                    >
                                                        <img
                                                            src="../assets/images/playstore.svg"
                                                            className=" lazyload"
                                                            alt=""
                                                        />
                                                    </Link>
                                                </li>
                                                <li className="mb-0">
                                                    <Link
                                                        to="https://www.apple.com/in/app-store/"
                                                        target="_blank"
                                                    >
                                                        <img
                                                            src="../assets/images/appstore.svg"
                                                            className=" lazyload"
                                                            alt=""
                                                        />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sub-footer section-small-space">
                        <div className="reserve">
                            <h6 className="text-content">
                                2023 Copyright By TechGropse eCommerce
                            </h6>
                        </div>
                        <div className="payment">
                            <img
                                src="../assets/images/payment/1.png"
                                className=" lazyload"
                                alt=""
                            />
                        </div>
                        <div className="social-link">
                            <h6 className="text-content">Stay connected :</h6>
                            <ul>
                                <li>
                                    <Link to="https://www.facebook.com/" target="_blank">
                                        <i className="fa-brands fa-facebook-f" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://twitter.com/" target="_blank">
                                        <i className="fa-brands fa-twitter" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/" target="_blank">
                                        <i className="fa-brands fa-instagram" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://in.pinterest.com/" target="_blank">
                                        <i className="fa-brands fa-pinterest-p" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>{" "}
            {/* Footer Section End */}
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
            {/* Bg overlay End */}
            {/* Add address modal box start */}
            <div
                className="modal fade theme-modal"
                id="add-address"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Add a new address
                            </h5>
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
                            <form>
                                <div className="form-floating mb-4 theme-form-floating">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fname"
                                        placeholder="Enter First Name"
                                    />
                                    <label htmlFor="fname">First Name</label>
                                </div>
                            </form>
                            <form>
                                <div className="form-floating mb-4 theme-form-floating">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lname"
                                        placeholder="Enter Last Name"
                                    />
                                    <label htmlFor="lname">Last Name</label>
                                </div>
                            </form>
                            <form>
                                <div className="form-floating mb-4 theme-form-floating">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter Email Address"
                                    />
                                    <label htmlFor="email">Email Address</label>
                                </div>
                            </form>
                            <form>
                                <div className="form-floating mb-4 theme-form-floating">
                                    <textarea
                                        className="form-control"
                                        placeholder="Leave a comment here"
                                        id="address"
                                        style={{ height: 100 }}
                                        defaultValue={""}
                                    />
                                    <label htmlFor="address">Enter Address</label>
                                </div>
                            </form>
                            <form>
                                <div className="form-floating mb-4 theme-form-floating">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="pin"
                                        placeholder="Enter Pin Code"
                                    />
                                    <label htmlFor="pin">Pin Code</label>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary btn-md"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn theme-bg-color btn-md text-white"
                                data-bs-dismiss="modal"
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add address modal box end */}
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
                            <h5 className="modal-title" id="exampleModalLabel1">
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
                                        <Link to="javascript:void(0)">
                                            <h6>Alabama</h6>
                                            <span>Min: $130</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:void(0)">
                                            <h6>Arizona</h6>
                                            <span>Min: $150</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:void(0)">
                                            <h6>California</h6>
                                            <span>Min: $110</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:void(0)">
                                            <h6>Colorado</h6>
                                            <span>Min: $140</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:void(0)">
                                            <h6>Florida</h6>
                                            <span>Min: $160</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:void(0)">
                                            <h6>Georgia</h6>
                                            <span>Min: $120</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:void(0)">
                                            <h6>Kansas</h6>
                                            <span>Min: $170</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:void(0)">
                                            <h6>Minnesota</h6>
                                            <span>Min: $120</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:void(0)">
                                            <h6>New York</h6>
                                            <span>Min: $110</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="javascript:void(0)">
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
            {/* Edit Profile Start */}
            <div
                className="modal fade theme-modal"
                id="editProfile"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel2"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg modal-dialog-centered modal-fullscreen-sm-down">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel2">
                                Edit Profile
                            </h5>
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
                            <div className="row g-4">
                                <div className="col-xxl-12">
                                    <form>
                                        <div className="form-floating theme-form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="pname"
                                                defaultValue="Jack Jennas"
                                            />
                                            <label htmlFor="pname">Full Name</label>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-xxl-6">
                                    <form>
                                        <div className="form-floating theme-form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email1"
                                                defaultValue="vicki.pope@gmail.com"
                                            />
                                            <label htmlFor="email1">Email address</label>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-xxl-6">
                                    <form>
                                        <div className="form-floating theme-form-floating">
                                            <input
                                                className="form-control"
                                                type="tel"
                                                defaultValue={4567891234}
                                                name="mobile"
                                                id="mobile"
                                                maxLength={10}
                                                oninput="javascript: if (this.value.length > this.maxLength) this.value =
                                      this.value.slice(0, this.maxLength);"
                                            />
                                            <label htmlFor="mobile">Email address</label>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-12">
                                    <form>
                                        <div className="form-floating theme-form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="address1"
                                                defaultValue="8424 James Lane South San Francisco"
                                            />
                                            <label htmlFor="address1">Add Address</label>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-12">
                                    <form>
                                        <div className="form-floating theme-form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="address2"
                                                defaultValue="CA 94080"
                                            />
                                            <label htmlFor="address2">Add Address 2</label>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-xxl-4">
                                    <form>
                                        <div className="form-floating theme-form-floating">
                                            <select
                                                className="form-select"
                                                id="floatingSelect1"
                                                aria-label="Floating label select example"
                                            >
                                                <option selected="">Choose Your Country</option>
                                                <option value="kindom">United Kingdom</option>
                                                <option value="states">United States</option>
                                                <option value="fra">France</option>
                                                <option value="china">China</option>
                                                <option value="spain">Spain</option>
                                                <option value="italy">Italy</option>
                                                <option value="turkey">Turkey</option>
                                                <option value="germany">Germany</option>
                                                <option value="russian">Russian Federation</option>
                                                <option value="malay">Malaysia</option>
                                                <option value="mexico">Mexico</option>
                                                <option value="austria">Austria</option>
                                                <option value="hong">Hong Kong SAR, China</option>
                                                <option value="ukraine">Ukraine</option>
                                                <option value="thailand">Thailand</option>
                                                <option value="saudi">Saudi Arabia</option>
                                                <option value="canada">Canada</option>
                                                <option value="singa">Singapore</option>
                                            </select>
                                            <label htmlFor="floatingSelect">Country</label>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-xxl-4">
                                    <form>
                                        <div className="form-floating theme-form-floating">
                                            <select className="form-select" id="floatingSelect">
                                                <option selected="">Choose Your City</option>
                                                <option value="kindom">India</option>
                                                <option value="states">Canada</option>
                                                <option value="fra">Dubai</option>
                                                <option value="china">Los Angeles</option>
                                                <option value="spain">Thailand</option>
                                            </select>
                                            <label htmlFor="floatingSelect">City</label>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-xxl-4">
                                    <form>
                                        <div className="form-floating theme-form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="address3"
                                                defaultValue={94080}
                                            />
                                            <label htmlFor="address3">Pin Code</label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-animation btn-md fw-bold"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                data-bs-dismiss="modal"
                                className="btn theme-bg-color btn-md fw-bold text-light"
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Edit Profile End */}
            {/* Edit Card Start */}
            <div
                className="modal fade theme-modal"
                id="editCard"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg modal-dialog-centered modal-fullscreen-sm-down">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel8">
                                Edit Card
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal">
                                <i className="fa-solid fa-xmark" />
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row g-4">
                                <div className="col-xxl-6">
                                    <form>
                                        <div className="form-floating theme-form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="finame"
                                                defaultValue="Mark"
                                            />
                                            <label htmlFor="finame">First Name</label>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-xxl-6">
                                    <form>
                                        <div className="form-floating theme-form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="laname"
                                                defaultValue="Jecno"
                                            />
                                            <label htmlFor="laname">Last Name</label>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-xxl-4">
                                    <form>
                                        <div className="form-floating theme-form-floating">
                                            <select
                                                className="form-select"
                                                id="floatingSelect12"
                                                aria-label="Floating label select example"
                                            >
                                                <option selected="">Card Type</option>
                                                <option value="kindom">Visa Card</option>
                                                <option value="states">MasterCard Card</option>
                                                <option value="fra">RuPay Card</option>
                                                <option value="china">Contactless Card</option>
                                                <option value="spain">Maestro Card</option>
                                            </select>
                                            <label htmlFor="floatingSelect12">Card Type</label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-animation btn-md fw-bold"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn theme-bg-color btn-md fw-bold text-light"
                            >
                                Update Card
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Edit Card End */}
            {/* Remove Profile Modal Start */}
            <div
                className="modal fade theme-modal remove-profile"
                id="removeProfile"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
                    <div className="modal-content">
                        <div className="modal-header d-block text-center">
                            <h5 className="modal-title w-100" id="exampleModalLabel22">
                                Are You Sure ?
                            </h5>
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
                            <div className="remove-box">
                                <p>
                                    The permission for the use/group, preview is inherited from the
                                    object, object will create a new permission for this object
                                </p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-animation btn-md fw-bold"
                                data-bs-dismiss="modal"
                            >
                                No
                            </button>
                            <button
                                type="button"
                                className="btn theme-bg-color btn-md fw-bold text-light"
                                data-bs-target="#removeAddress"
                                data-bs-toggle="modal"
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade theme-modal remove-profile"
                id="removeAddress"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLabel12">
                                Done!
                            </h5>
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
                            <div className="remove-box text-center">
                                <h4 className="text-content">It's Removed.</h4>
                            </div>
                        </div>
                        <div className="modal-footer pt-0">
                            <button
                                type="button"
                                className="btn theme-bg-color btn-md fw-bold text-light"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Remove Profile Modal End */}
            {/* Edit Profile Modal Start */}
            <div
                className="modal fade theme-modal"
                id="edit-profile"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel3">
                                Edit Your Profile
                            </h5>
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
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="companyName" className="form-label">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="companyName"
                                        defaultValue="Grocery Store"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="emailAddress" className="form-label">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="emailAddress"
                                        defaultValue="joshuadbass@rhyta.com"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="country" className="form-label">
                                        Country / Region
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="country"
                                        defaultValue="107 Veltri Drive"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="established" className="form-label">
                                        Year Established
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="established"
                                        defaultValue={2022}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="employees" className="form-label">
                                        Total Employees
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="employees"
                                        defaultValue="154 - 360 People"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="category" className="form-label">
                                        Category
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="category"
                                        defaultValue="Grocery"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="street" className="form-label">
                                        Street Address
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="street"
                                        defaultValue="234 High St"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="city" className="form-label">
                                        City / State
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="city"
                                        defaultValue="107 Veltri Drive"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="zip" className="form-label">
                                        Zip
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="zip"
                                        defaultValue="B23 6SN"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-animation btn-md fw-bold"
                                data-bs-dismiss="modal"
                            >
                                Cancle
                            </button>
                            <button
                                type="button"
                                className="btn theme-bg-color btn-md fw-bold text-light"
                                data-bs-dismiss="modal"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default SellerDashboard
