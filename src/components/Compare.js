import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Header";
import Footer from "./Footer";
import { CompareList } from "./HttpServices";
import { useGetCompareListQuery } from "../services/Post";
import { useDeleteCompareMutation } from "../services/Post";
import { useAddToCartMutation } from "../services/Post";
import Star from "./Star";
import { useSelector } from "react-redux";
function Compare() {
  const ecommercetoken = useSelector((data) => data?.local?.ecomWebtoken);
  const [deleteCompare] = useDeleteCompareMutation();
  const [newCompare, setNewCompare] = useState([]);

  const compareItems = useGetCompareListQuery({ ecommercetoken });
  const [addToCart] = useAddToCartMutation();

  useEffect(() => {
    if (compareItems) {
      setNewCompare(compareItems?.data?.results?.comparelist);
    }
  }, [compareItems]);

  const handleSaveChanges = (id, stockQuantity) => {
    const newAddress = {
      carts: [
        {
          product_Id: id,
          quantity: stockQuantity,
        },
      ],
    };
    addToCart(newAddress);
  };

  const handleRemoveAddress = (addressId) => {
    Swal.fire({
      title: "Confirm Deletion",
      text: "Are you sure you want to delete this address?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "No, cancel",
      customClass: {
        confirmButton: "btn btn-danger me-2",
        cancelButton: "btn btn-primary ms-2",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCompare(addressId)
          .then(() => {
            const updatedList = newCompare?.filter(
              (address) => address._id !== addressId
            );
            setNewCompare(updatedList);
          })
          .catch((error) => {});
      }
    });
  };

  const columnData = [
    {
      header: "Product",
      accessor: (item) => (
        <Link
          className="text-title"
          to={`/product-details-page/${item?.product_Id?._id}`}
        >
          {item?.product_Id?.productName_en}
        </Link>
      ),
    },
    {
      header: "Images",
      accessor: (item) => (
        <Link
          to={`/product-details-page/${item?.product_Id?._id}`}
          className="compare-image"
        >
          <img
            src={item?.product_Id?.addVarient[0]?.product_Pic[0]}
            className="img-fluid lazyload"
            alt=""
          />
        </Link>
      ),
    },
    {
      header: "Brand Name",
      accessor: (item) => (
        <span className="text-content">
          {item?.product_Id?.brand_Id?.brandName_en}
        </span>
      ),
    },
    {
      header: "Color",
      accessor: (item) => (
        <span
          className={`text-content ${
            !item?.product_Id?.productColor ? "text-danger" : ""
          }`}
        >
          {item?.product_Id?.productColor
            ? item?.product_Id?.productColor
            : "Color Not Available"}
        </span>
      ),
    },
    {
      header: "Price",
      accessor: (item) => (
        <span className="price text-content">
          ${item?.product_Id?.addVarient?.[0]?.Price}
        </span>
      ),
    },
    {
      header: "Availability",
      accessor: (item) => {
        const stockStatus =
          item?.product_Id?.stockQuantity > 0 ? "In Stock" : "Out Of Stock";
        const backgroundColor =
          stockStatus === "In Stock" ? "success" : "danger";
        return (
          <div className="d-flex align-items-center justify-content-center">
            <button
              className={`btn btn-sm w-60 ms-4 text-light bg-${backgroundColor}`}
            >
              {stockStatus}
            </button>
          </div>
        );
      },
    },
    {
      header: "Rating",
      accessor: (item) => {
        const totalRatings = item?.product_Id?.ratings?.reduce(
          (sum, rating) => sum + rating.star,
          0
        );
        const averageRating = totalRatings / item?.product_Id?.ratings?.length;
        return (
          <div className="compare-rating">
            <ul className="rating">
              <Star
                rating={averageRating || 0}
                totalRating={item.totalRating}
              />
            </ul>
            <span className="text-content">
              {item?.product_Id?.ratings?.length}
            </span>
          </div>
        );
      },
    },
    {
      header: "Weight",
      accessor: (item) => (
        <span className="text-content">{item?.product_Id?.weight}</span>
      ),
    },
    {
      header: "Purchase",
      accessor: (item) => (
        <div className="d-flex align-items-center justify-content-center">
          <Link
            to="/cart"
            className="btn btn-animation btn-sm w-60 "
            onClick={() =>
              handleSaveChanges(
                item?.product_Id?._id,
                item?.product_Id?.stockQuantity
              )
            }
          >
            Add To Cart
          </Link>
        </div>
      ),
    },
    {
      header: "",
      accessor: (item) => (
        <Link
          to="#"
          className="text-content remove_column"
          onClick={() => handleRemoveAddress(item?._id)}
        >
          <i className="fa-solid fa-trash-can me-2" /> Remove
        </Link>
      ),
    },
  ];

  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <>
      {/* Loader End */}
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
                <h2 className="mb-2">Compare</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/index">
                        <i className="fa-solid fa-house" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item">Shop</li>
                    <li className="breadcrumb-item active">Compare</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}
      {/* Compare Section Start */}
      <section className="compare-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table compare-table">
                  <tbody>
                    {columnData.map((column, columnIndex) => (
                      <tr key={columnIndex}>
                        <th>{column?.header}</th>
                        {newCompare?.length > 0 &&
                          newCompare?.map((item, itemIndex) => (
                            <td key={itemIndex}>{column?.accessor(item)}</td>
                          ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compare Section End */}
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
export default Compare;
