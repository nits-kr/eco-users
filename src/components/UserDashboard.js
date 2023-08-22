import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Star from "./Star";
import axios from "axios";
import Swal from "sweetalert2";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Header";
import Footer from "./Footer";
import {
  useCreateAddressMutation,
  useCreateCardMutation,
  useDeleteAccountMutation,
} from "../services/Post";
import { useGetAddressListQuery } from "../services/Post";
import { useDeleteAddressMutation } from "../services/Post";
import { useUpdateAddressMutation } from "../services/Post";
import { useGetCardListQuery } from "../services/Post";
import { useDeleteCardMutation } from "../services/Post";
import { useUpdateCardMutation } from "../services/Post";
import { useGetOrderListQuery } from "../services/Post";
import { useGetPendingOrderQuery } from "../services/Post";
import { WishListItems, DeleteWishList } from "./HttpServices";
import { AddToCart } from "./HttpServices";

function UserDashboard() {
  const [wishList, setWishList] = useState([]);
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [locality, setLocality] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [cardNumbers, setCardNumbers] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cardValid, setCardValid] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardNumbers1, setCardNumbers1] = useState("");
  const [cardHolder1, setCardHolder1] = useState("");
  const [cardValid1, setCardValid1] = useState("");
  const [cvv1, setCvv1] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [editedAddress, setEditedAddress] = useState("");
  const [itemId, setItemId] = useState("");
  const [createAddress, responseInfo] = useCreateAddressMutation();
  const [updateAddress, res] = useUpdateAddressMutation();
  const [updateCard, re] = useUpdateCardMutation();
  const [createCard, r] = useCreateCardMutation();
  const addressList = useGetAddressListQuery();
  const orderList = useGetOrderListQuery();
  const [orderListData, setOrderListData] = useState([]);
  console.log("order list", orderList);
  const cardList = useGetCardListQuery();
  const { data } = useGetPendingOrderQuery();
  console.log("pending data", data?.results?.pending);
  const [deleteAddress, deleteAddressInfo] = useDeleteAddressMutation();
  const [deleteCard, deleteCardInfo] = useDeleteCardMutation();
  const [deleteAccount] = useDeleteAccountMutation();
  const [newAddress, setNewAddress] = useState([]);
  const [newCard, setNewCard] = useState([]);
  const [isSaveCardDisabled, setIsSaveCardDisabled] = useState(false);
  const [formData, setFormData] = useState([]);

  const [selectedImage1, setSelectedImage1] = useState(null);
  const storedId = localStorage.getItem("loginId");
  const storedPic = localStorage.getItem("profilePic");
  const storedOrder = localStorage?.getItem("totalOrder");
  const storedWish = localStorage?.getItem("totalWish");
  const navigate = useNavigate();

  const [count, setCount] = useState([]);

  const handleCountChange = (index, newCount) => {
    const newCounts = [...count];
    newCounts[index] = newCount >= 0 ? newCount : 0;
    setCount(newCounts);
  };

  const handleAddToCart = async (item, index) => {
    try {
      const { data, error } = await AddToCart(
        item?.product_Id?._id,
        count[index]
      );
      if (error) {
        console.log(error);
        return;
      }
      // const newCartItems = [...wishList, data];
      // setWishList(newCartItems);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      window?.location?.reload();
    }, 500);
  };

  const deleteWishList = (_id) => {
    deleteData(_id);
  };
  const deleteData = async (_id) => {
    try {
      const { data, error } = await DeleteWishList(_id);
      error ? console.log(error) : console.log(data);
      setWishList((prevWishList) =>
        prevWishList.filter((item) => item._id !== _id)
      );
      console.log(data.results.deleteDta);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const { data, error } = await WishListItems();
      error ? console.log(error) : console.log(data);
      setWishList(data?.results?.list);
      console.log(data?.results?.list);
    } catch (error) {
      console.log(error);
    }
  };

  const getReversedList = (list) => {
    return list?.data?.results?.addressData?.slice().reverse() ?? [];
  };
  useEffect(() => {
    const reversedList = getReversedList(addressList);
    setNewAddress(reversedList);
  }, [addressList]);
  const getNewCardList = (list) => {
    return list?.data?.results?.list?.slice().reverse() ?? [];
  };
  useEffect(() => {
    const reversedList = getNewCardList(cardList);
    setNewCard(reversedList);
  }, [cardList]);

  useEffect(() => {
    const reversedList =
      orderList?.data?.results?.orderList?.slice().reverse() ?? [];
    setOrderListData(reversedList);
  }, [orderList]);

  const handleDeleteCard = (cardId) => {
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
        deleteCard(cardId)
          .then(() => {
            const updatedList = newCard.filter((card) => card._id !== cardId);
            setNewCard(updatedList);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  const userId = localStorage.getItem("loginId");
  const handleDeleteAccount = (cardId) => {
    Swal.fire({
      title: "Confirm Deletion",
      text: "Are you sure you want to delete your Account ?",
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
        deleteAccount(cardId)
          .then(() => {
            // const updatedList = newCard.filter((card) => card._id !== cardId);
            // setNewCard(updatedList);
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  localStorage?.setItem("addressId", newAddress[0]?._id);
  const addressId = localStorage?.getItem("addressId");

  const handleSaveChanges = async () => {
    const newAddressData = {
      title: title,
      address: address,
      locality: locality,
      city: city,
      country: country,
      user_Id: storedId,
    };

    try {
      const createdAddress = await createAddress(newAddressData);
      setNewAddress([createdAddress, ...newAddress]);
    } catch (error) {}
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
        deleteAddress(addressId)
          .then(() => {
            const updatedList = newAddress.filter(
              (address) => address._id !== addressId
            );
            setNewAddress(updatedList);
          })
          .catch((error) => {});
      }
    });
  };

  const handleSaveCards = () => {
    const newAddress = {
      cardNumber: cardNumbers,
      cardHolderName: cardHolder,
      validTime: cardValid,
      cvv: cvv,
    };
    createCard(newAddress).then(() => {
      Swal.fire({
        title: "Card Created!",
        text: "Your card has been successfully created.",
        icon: "success",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          setIsSaveCardDisabled(true);
        }
      });
    });
  };

  const handleSaveChanges1 = () => {
    console.log("handleSaveChanges1", itemId);
    const editAddress = {
      id: itemId,
      country: selectedCountry,
      city: selectedCity,
      editedAddress: editedAddress,
    };
    updateAddress(editAddress);
  };
  const handleItem = (item) => {
    console.log(item);
    setCardNumbers1(item?.cardNumber);
    setCardHolder1(item?.cardHolderName);
    setCvv1(item?.cvv);
    setCardValid1(item?.validTime);
  };
  const handleSaveChanges2 = () => {
    console.log("handleSaveChanges1", itemId);
    const editCard = {
      id: itemId,
      cardNumber: cardNumbers,
      cardHolderName: cardHolder,
      validTime: cardValid,
      cvv: cvv,
      cardType: "master",
    };
    updateCard(editCard);
  };
  useEffect(() => {
    feather.replace();
  }, []);
  const handleImageUpload1 = (event) => {
    const file = event.target.files[0];
    setSelectedImage1(URL.createObjectURL(file));
    setFormData({ ...formData, uploadImage: event.target.files[0] });
    // setImageUrl1(URL.createObjectURL(file));
  };
  const handleOnSave = () => {
    const data = new FormData();
    data.append("address_Id", addressId);
    // data.append("password", "userEmail");
    // data.append("mobileNumber", "userName");
    // data.append("gender", "userEmail");
    // data.append("birthDay", "userEmail");
    data.append("profile_Pic", formData.uploadImage);
    axios
      .post(
        `http://ec2-65-2-108-172.ap-south-1.compute.amazonaws.com:5000/user/user/user/edit-profile/${storedId}`,
        data
      )
      .then((response) => {
        setFormData(response.data.results);
        localStorage.setItem(
          "profilePic",
          response?.data?.results?.profile?.profile_Pic
        );
        console.log(response.data.results);
        Swal.fire({
          title: "Profile Updated!",
          text: "Your Profile has been updated successfully.",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/dashboard");
          }
        });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
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
                        {/* <img
                          src="../assets/images/inner-page/user/1.jpg"
                          className=" lazyload update_img"
                          alt=""
                        /> */}
                        {selectedImage1 ? (
                          <img
                            src={selectedImage1}
                            alt=""
                            style={{ height: "150px" }}
                          />
                        ) : storedPic ? (
                          <img src={storedPic} alt="" />
                        ) : (
                          <img
                            src="../assets/images/inner-page/user/1.jpg"
                            alt=""
                          />
                        )}
                        <div className="cover-icon">
                          <i className="fa-solid fa-pen">
                            {/* <input type="file" onChange="readURL(this,0)" /> */}
                            <input
                              className="file-upload"
                              type="file"
                              accept="image/*"
                              name="upload-image"
                              id="upload-image"
                              onChange={(e) =>
                                handleImageUpload1(e, "uploadImage")
                              }
                            />
                          </i>
                        </div>
                      </div>
                    </div>
                    <div className="profile-name">
                      <h3>Vicki E. Pope</h3>
                      <h6 className="text-content">vicki.pope@gmail.com</h6>
                    </div>
                  </div>
                </div>
                <ul
                  className="nav nav-pills user-nav-pills"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-dashboard-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-dashboard"
                      type="button"
                      role="tab"
                      aria-controls="pills-dashboard"
                      aria-selected="true"
                    >
                      <i data-feather="home" />
                      DashBoard
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
                      id="pills-wishlist-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-wishlist"
                      type="button"
                      role="tab"
                      aria-controls="pills-wishlist"
                      aria-selected="false"
                    >
                      <i data-feather="heart" />
                      Wishlist
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-card-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-card"
                      type="button"
                      role="tab"
                      aria-controls="pills-card"
                      aria-selected="false"
                    >
                      <i data-feather="credit-card" /> Saved Card
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-address-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-address"
                      type="button"
                      role="tab"
                      aria-controls="pills-address"
                      aria-selected="false"
                    >
                      <i data-feather="map-pin" />
                      Address
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
                      <i data-feather="shield" />
                      Privacy
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
                          view a snapshot of your recent account activity and
                          update your account information. Select a link below
                          to view or edit information.
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
                                <h5>Total Order</h5>
                                <h3>{storedOrder}</h3>
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
                                <h5>Total Pending Order</h5>
                                <h3>
                                  {" "}
                                  {data?.results?.pending?.length === 0
                                    ? "0"
                                    : data?.results?.pending?.length}{" "}
                                </h3>
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
                                <h5>Total Wishlist</h5>
                                <h3> {storedWish} </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="dashboard-title">
                        <h3>Account Information</h3>
                      </div>
                      <div className="row g-4">
                        <div className="col-xxl-6">
                          <div className="dashboard-contant-title">
                            <h4>
                              Contact Information{" "}
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#editProfile"
                              >
                                Edit
                              </Link>
                            </h4>
                          </div>
                          <div className="dashboard-detail">
                            <h6 className="text-content">MARK JECNO</h6>
                            <h6 className="text-content">
                              vicki.pope@gmail.com
                            </h6>
                            <Link to="#">Change Password</Link>
                          </div>
                        </div>
                        <div className="col-xxl-6">
                          <div className="dashboard-contant-title">
                            <h4>
                              Newsletters{" "}
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#editProfile"
                              >
                                Edit
                              </Link>
                            </h4>
                          </div>
                          <div className="dashboard-detail">
                            <h6 className="text-content">
                              You are currently not subscribed to any newsletter
                            </h6>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="dashboard-contant-title">
                            <h4>
                              Address Book{" "}
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#editProfile"
                              >
                                Edit
                              </Link>
                            </h4>
                          </div>
                          <div className="row g-4">
                            <div className="col-xxl-6">
                              <div className="dashboard-detail">
                                <h6 className="text-content">
                                  Default Billing Address
                                </h6>
                                <h6 className="text-content">
                                  You have not set a default billing address.
                                </h6>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#editProfile"
                                >
                                  Edit Address
                                </Link>
                              </div>
                            </div>
                            <div className="col-xxl-6">
                              <div className="dashboard-detail">
                                <h6 className="text-content">
                                  Default Shipping Address
                                </h6>
                                <h6 className="text-content">
                                  You have not set a default shipping address.
                                </h6>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#editProfile"
                                >
                                  Edit Address
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show"
                    id="pills-wishlist"
                    role="tabpanel"
                    aria-labelledby="pills-wishlist-tab"
                  >
                    <div className="dashboard-wishlist">
                      <div className="title">
                        <h2>My Wishlist History</h2>
                        <span className="title-leaf title-leaf-gray">
                          <svg className="icon-width bg-gray">
                            <use xlinkHref="../assets/svg/leaf.svg#leaf" />
                          </svg>
                        </span>
                      </div>
                      <div className="row g-sm-4 g-3">
                        {wishList.map((item, index) => {
                          const totalRatings =
                            item?.product_Id?.ratings?.reduce(
                              (sum, rating) => sum + rating?.star,
                              0
                            );
                          const averageRating =
                            totalRatings / item?.product_Id?.ratings?.length;
                          return (
                            <div
                              className="col-xxl-3 col-lg-6 col-md-4 col-sm-6"
                              key={index}
                            >
                              <div className="product-box-3 theme-bg-white h-100">
                                <div className="product-header">
                                  <div className="product-image">
                                    <Link to="/product">
                                      <img
                                        src={item?.product_Id?.product_Pic[0]}
                                        className="img-fluid  lazyload"
                                        alt=""
                                      />
                                    </Link>
                                    <div className="product-header-top">
                                      <button
                                        className="btn wishlist-button close_button"
                                        onClick={() => deleteWishList(item._id)}
                                      >
                                        <i data-feather="x" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="product-footer">
                                  <div className="product-detail">
                                    <span className="span-name">Vegetable</span>
                                    <Link to="/product">
                                      <h5 className="name">
                                        {item?.product_Id?.productName_en}
                                      </h5>
                                    </Link>
                                    <p className="text-content mt-1 mb-2 product-content">
                                      Cheesy feet cheesy grin brie. Mascarpone
                                      cheese and wine hard cheese the big cheese
                                      everyone loves smelly cheese macaroni
                                      cheese croque monsieur.
                                    </p>
                                    <h6 className="unit mt-1">
                                      {item?.product_Id?.weight}
                                    </h6>
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                      }}
                                    >
                                      <div>
                                        <h6 className="unit">
                                          {item?.product_Id?.stockQuantity}{" "}
                                          units{" "}
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
                                              {count[index]
                                                ? count[index]
                                                : "0"}
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
                                        ${item?.product_Id?.Price}
                                      </span>
                                      <del>${item?.product_Id?.oldPrice}</del>
                                    </h5>
                                    <div className="add-to-cart-box mt-2">
                                      <Link
                                        to="/cart"
                                        className="btn btn-add-cart addcart-button"
                                        tabIndex={0}
                                        onClick={() =>
                                          handleAddToCart(item, index)
                                        }
                                      >
                                        Add To Cart
                                        {/* <span className="add-icon">
                                          <i className="fa-solid fa-plus" />
                                        </span> */}
                                      </Link>
                                      <div className="cart_qty qty-box">
                                        <div className="input-group">
                                          <button
                                            type="button"
                                            className="qty-left-minus"
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
                                            className="qty-right-plus"
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
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show"
                    id="pills-order"
                    role="tabpanel"
                    aria-labelledby="pills-order-tab"
                  >
                    <div className="dashboard-order">
                      <div className="title">
                        <h2>My Orders History</h2>
                        <span className="title-leaf title-leaf-gray">
                          <svg className="icon-width bg-gray">
                            <use xlinkHref="../assets/svg/leaf.svg#leaf" />
                          </svg>
                        </span>
                      </div>
                      <div className="order-contain">
                        {orderListData?.map((item, index) => {
                          const totalRatings =
                            item?.products[0]?.product_Id?.ratings?.reduce(
                              (sum, rating) => sum + rating?.star,
                              0
                            );
                          const averageRating =
                            totalRatings /
                            item?.products[0]?.product_Id?.ratings?.length;
                          return (
                            <div
                              className="order-box dashboard-bg-box"
                              key={index}
                            >
                              <div className="order-container">
                                <div className="order-icon">
                                  <i data-feather="box" />
                                </div>
                                <div className="order-detail">
                                  <h4>
                                    {
                                      item?.products[0]?.product_Id
                                        ?.productName_en
                                    }{" "}
                                    <span> {item?.orderStatus} </span>
                                  </h4>
                                  <h6 className="text-content">
                                    {
                                      item?.products[0]?.product_Id
                                        ?.careInstuctions
                                    }
                                  </h6>
                                </div>
                              </div>
                              <div className="product-order-detail">
                                <Link to="/product" className="order-image">
                                  <img
                                    src={
                                      item?.products[0]?.product_Id
                                        ?.product_Pic[0]
                                    }
                                    className=" lazyload"
                                    alt=""
                                    height="200px"
                                    width="200px"
                                  />
                                </Link>
                                <div className="order-wrap">
                                  <Link to="/product">
                                    <h3>
                                      {
                                        item?.products[0]?.product_Id
                                          ?.productName_en
                                      }
                                    </h3>
                                  </Link>
                                  <p className="text-content">
                                    {item?.products[0]?.product_Id?.Description}
                                  </p>
                                  <ul className="product-size">
                                    <li>
                                      <div className="size-box">
                                        <h6 className="text-content">
                                          Price :{" "}
                                        </h6>
                                        <h5>
                                          {" "}
                                          $
                                          {item?.products[0]?.product_Id?.Price}
                                        </h5>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="size-box">
                                        <h6 className="text-content">
                                          Rate :{" "}
                                        </h6>
                                        <div className="product-rating ms-2">
                                          <ul className="rating">
                                            <Star rating={averageRating} />
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="size-box">
                                        <h6 className="text-content">
                                          Sold By :{" "}
                                        </h6>
                                        <h5>Fresho</h5>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="size-box">
                                        <h6 className="text-content">
                                          Quantity :{" "}
                                        </h6>
                                        <h5>
                                          {" "}
                                          {
                                            item?.products[0]?.product_Id
                                              ?.stockQuantity
                                          }
                                        </h5>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show"
                    id="pills-address"
                    role="tabpanel"
                    aria-labelledby="pills-address-tab"
                  >
                    <div className="dashboard-address">
                      <div className="title title-flex">
                        <div>
                          <h2>My Address Book</h2>
                          <span className="title-leaf">
                            <svg className="icon-width bg-gray">
                              <use xlinkHref="../assets/svg/leaf.svg#leaf" />
                            </svg>
                          </span>
                        </div>
                        <button
                          className="btn theme-bg-color text-white btn-sm fw-bold mt-lg-0 mt-3"
                          data-bs-toggle="modal"
                          data-bs-target="#add-address"
                        >
                          <i data-feather="plus" className="me-2" /> Add New
                          Address
                        </button>
                      </div>
                      <div className="row g-sm-4 g-3">
                        {newAddress?.map((item, index) => {
                          return (
                            <div
                              className="col-xxl-4 col-xl-6 col-lg-12 col-md-6"
                              key={index}
                            >
                              <div className="address-box">
                                <div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="jack"
                                      id="flexRadioDefault2"
                                      defaultChecked=""
                                    />
                                  </div>
                                  <div className="label">
                                    <label> {item?.title} </label>
                                  </div>
                                  <div className="table-responsive address-table">
                                    <table className="table">
                                      <tbody>
                                        <tr>
                                          <td colSpan={2}>Jack Jennas</td>
                                        </tr>
                                        <tr>
                                          <td>Address :</td>
                                          <td>
                                            <p>{item?.address}</p>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Locality :</td>
                                          <td> {item?.locality} </td>
                                        </tr>
                                        <tr>
                                          <td>City :</td>
                                          <td> {item?.city} </td>
                                        </tr>
                                        <tr>
                                          <td>Country :</td>
                                          <td> {item?.country} </td>
                                        </tr>
                                        <tr>
                                          <td>Phone :</td>
                                          <td>+ 812-710-3798</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                                <div className="button-group">
                                  <button
                                    className="btn btn-sm add-button w-100"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editProfile"
                                    onClick={() => setItemId(item?._id)}
                                  >
                                    <i data-feather="edit" />
                                    Edit
                                  </button>
                                  <button
                                    className="btn btn-sm add-button w-100"
                                    // data-bs-toggle="modal"
                                    // data-bs-target="#removeProfile"
                                    onClick={() => {
                                      handleRemoveAddress(item?._id);
                                    }}
                                  >
                                    <i data-feather="trash-2" />
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show"
                    id="pills-card"
                    role="tabpanel"
                    aria-labelledby="pills-card-tab"
                  >
                    <div className="dashboard-card">
                      <div className="title title-flex">
                        <div>
                          <h2>My Card Details</h2>
                          <span className="title-leaf">
                            <svg className="icon-width bg-gray">
                              <use xlinkHref="../assets/svg/leaf.svg#leaf" />
                            </svg>
                          </span>
                        </div>
                        <button
                          className="btn theme-bg-color text-white btn-sm fw-bold mt-lg-0 mt-3"
                          data-bs-toggle="modal"
                          data-bs-target="#editCard"
                        >
                          <i data-feather="plus" className="me-2" /> Add New
                          Card
                        </button>
                      </div>
                      <div className="row g-4">
                        {newCard?.map((item, index) => {
                          return (
                            <div
                              className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6"
                              key={index}
                            >
                              <div className="payment-card-detail">
                                <div className="card-details">
                                  <div className="card-number">
                                    <h4>
                                      XXXX-XXXX-XXXX-
                                      {String(item?.cardNumber).slice(-4)}
                                    </h4>
                                  </div>
                                  <div className="valid-detail">
                                    <div className="title">
                                      <span>valid</span>
                                      <span>thru</span>
                                    </div>
                                    <div className="date">
                                      <h3> {item?.validTime} </h3>
                                    </div>
                                    <div className="primary">
                                      <span className="badge bg-pill badge-light">
                                        primary
                                      </span>
                                    </div>
                                  </div>
                                  <div className="name-detail">
                                    <div className="name">
                                      <h5>
                                        {item?.firstName && item?.lastName
                                          ? `${item.firstName} ${item.lastName}`
                                          : item?.cardHolderName}
                                      </h5>
                                    </div>
                                    <div className="card-img">
                                      <img
                                        src="../assets/images/payment-icon/1.jpg"
                                        className="img-fluid  lazyloaded"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="edit-card">
                                  <Link
                                    data-bs-toggle="modal"
                                    data-bs-target="#editCard1"
                                    to="#"
                                    onClick={() => {
                                      setItemId(item?._id);
                                      handleItem(item);
                                    }}
                                  >
                                    <i className="far fa-edit" /> edit
                                  </Link>
                                  <Link
                                    to="#"
                                    // data-bs-toggle="modal"
                                    // data-bs-target="#removeProfile"
                                    // onClick={() => {
                                    //   deleteCard(item?._id);
                                    // }}
                                    onClick={() => handleDeleteCard(item._id)}
                                  >
                                    <i className="far fa-minus-square" /> delete
                                  </Link>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show"
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
                      <div className="profile-detail dashboard-bg-box">
                        <div className="dashboard-title">
                          <h3>Profile Name</h3>
                        </div>
                        <div className="profile-name-detail">
                          <div className="d-sm-flex align-items-center d-block">
                            <h3>Vicki E. Pope</h3>
                            <div className="product-rating profile-rating">
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
                                  <i data-feather="star" />
                                </li>
                                <li>
                                  <i data-feather="star" />
                                </li>
                              </ul>
                            </div>
                          </div>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#editProfile"
                          >
                            Edit
                          </Link>
                        </div>
                        <div className="location-profile">
                          <ul>
                            <li>
                              <div className="location-box">
                                <i data-feather="map-pin" />
                                <h6>Downers Grove, IL</h6>
                              </div>
                            </li>
                            <li>
                              <div className="location-box">
                                <i data-feather="mail" />
                                <h6>vicki.pope@gmail.com</h6>
                              </div>
                            </li>
                            <li>
                              <div className="location-box">
                                <i data-feather="check-square" />
                                <h6>Licensed for 2 years</h6>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="profile-description">
                          <p>
                            Residences can be classified by and how they are
                            connected to neighbouring residences and land.
                            Different types of housing tenure can be used for
                            the same physical type.
                          </p>
                        </div>
                      </div>
                      <div className="profile-about dashboard-bg-box">
                        <div className="row">
                          <div className="col-xxl-7">
                            <div className="dashboard-title mb-3">
                              <h3>Profile About</h3>
                            </div>
                            <div className="table-responsive">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td>Gender :</td>
                                    <td>Female</td>
                                  </tr>
                                  <tr>
                                    <td>Birthday :</td>
                                    <td>21/05/1997</td>
                                  </tr>
                                  <tr>
                                    <td>Phone Number :</td>
                                    <td>
                                      <Link to="#"> +91 846 - 547 - 210</Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Address :</td>
                                    <td>
                                      549 Sulphur Springs Road, Downers, IL
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="dashboard-title mb-3">
                              <h3>Login Details</h3>
                            </div>
                            <div className="table-responsive">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td>Email :</td>
                                    <td>
                                      <Link to="#">
                                        vicki.pope@gmail.com
                                        <span
                                          data-bs-toggle="modal"
                                          data-bs-target="#editProfile"
                                        >
                                          Edit
                                        </span>
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Password :</td>
                                    <td>
                                      <Link to="#">
                                        ●●●●●●
                                        <span
                                          data-bs-toggle="modal"
                                          data-bs-target="#editProfile"
                                        >
                                          Edit
                                        </span>
                                      </Link>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="col-xxl-5">
                            <div className="profile-image">
                              <img
                                src="../assets/images/inner-page/dashboard-profile.png"
                                className="img-fluid  lazyload"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show"
                    id="pills-security"
                    role="tabpanel"
                    aria-labelledby="pills-security-tab"
                  >
                    <div className="dashboard-privacy">
                      <div className="dashboard-bg-box">
                        <div className="dashboard-title mb-4">
                          <h3>Privacy</h3>
                        </div>
                        <div className="privacy-box">
                          <div className="d-flex align-items-start">
                            <h6>Allows others to see my profile</h6>
                            <div className="form-check form-switch switch-radio ms-auto">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="redio"
                                aria-checked="false"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="redio"
                              />
                            </div>
                          </div>
                          <p className="text-content">
                            all peoples will be able to see my profile
                          </p>
                        </div>
                        <div className="privacy-box">
                          <div className="d-flex align-items-start">
                            <h6>
                              who has save this profile only that people see my
                              profile
                            </h6>
                            <div className="form-check form-switch switch-radio ms-auto">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="redio2"
                                aria-checked="false"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="redio2"
                              />
                            </div>
                          </div>
                          <p className="text-content">
                            all peoples will not be able to see my profile
                          </p>
                        </div>
                        <button className="btn theme-bg-color btn-md fw-bold mt-4 text-white">
                          Save Changes
                        </button>
                      </div>
                      <div className="dashboard-bg-box mt-4">
                        <div className="dashboard-title mb-4">
                          <h3>Account settings</h3>
                        </div>
                        <div className="privacy-box">
                          <div className="d-flex align-items-start">
                            <h6>Deleting Your Account Will Permanently</h6>
                            <div className="form-check form-switch switch-radio ms-auto">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="redio3"
                                aria-checked="false"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="redio3"
                              />
                            </div>
                          </div>
                          <p className="text-content">
                            Once your account is deleted, you will be logged out
                            and will be unable to log in back.
                          </p>
                        </div>
                        <div className="privacy-box">
                          <div className="d-flex align-items-start">
                            <h6>Deleting Your Account Will Temporary</h6>
                            <div className="form-check form-switch switch-radio ms-auto">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="redio4"
                                aria-checked="false"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="redio4"
                              />
                            </div>
                          </div>
                          <p className="text-content">
                            Once your account is deleted, you will be logged out
                            and you will be create new account
                          </p>
                        </div>
                        <button
                          className="btn theme-bg-color btn-md fw-bold mt-4 text-white"
                          onClick={() => handleDeleteAccount(userId)}
                        >
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
      <Footer />
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
                    id="title"
                    name="title"
                    placeholder="Enter First Name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label htmlFor="fname">Title</label>
                </div>
              </form>
              <form>
                <div className="form-floating mb-4 theme-form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    placeholder="Enter Last Name"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <label htmlFor="lname">address</label>
                </div>
              </form>
              <form>
                <div className="form-floating mb-4 theme-form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="locality"
                    name="locality"
                    placeholder="Enter Email Address"
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                  />
                  <label htmlFor="email">Locality</label>
                </div>
              </form>

              <form>
                <div className="form-floating mb-4 theme-form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="city"
                    name="city"
                    placeholder="Enter Email Address"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <label htmlFor="email">city</label>
                </div>
              </form>
              <form>
                <div className="form-floating mb-4 theme-form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="countary"
                    name="countary"
                    placeholder="Enter Email Address"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                  <label htmlFor="email">countary</label>
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
                onClick={handleSaveChanges}
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
                        // onInput="javascript: if (this.value.length > this.maxLength) this.value =
                        //               this.value.slice(0, this.maxLength);"
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
                        onChange={(e) => setEditedAddress(e.target.value)}
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
                        defaultValue=" "
                        onChange={(e) => setSelectedCountry(e.target.value)}
                      >
                        <option value="India">Choose Your Country</option>
                        <option value="United kindom">United Kingdom</option>
                        <option value="Unitedstates">United States</option>
                        <option value="France">France</option>
                        <option value="china">China</option>
                        <option value="Spain">Spain</option>
                        <option value="Italy">Italy</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Germany">Germany</option>
                        <option value="Russian Federation">
                          Russian Federation
                        </option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Austria">Austria</option>
                        <option value="Hong Kong SAR, China">
                          Hong Kong SAR, China
                        </option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Canada">Canada</option>
                        <option value="Singapore">Singapore</option>
                      </select>
                      <label htmlFor="floatingSelect">Country</label>
                    </div>
                  </form>
                </div>
                <div className="col-xxl-4">
                  <form>
                    <div className="form-floating theme-form-floating">
                      <select
                        className="form-select"
                        id="floatingSelect"
                        defaultValue=""
                        onChange={(e) => setSelectedCity(e.target.value)}
                      >
                        <option value="">Choose Your City</option>
                        <option value="kindom">kindom</option>
                        <option value="Canada">Canada</option>
                        <option value="Dubai">Dubai</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="Thailand">Thailand</option>
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
                onClick={handleOnSave}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Profile End */}
      {/* Add Card Start */}
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
                Add Card
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              >
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
                        value={cardHolder}
                        onChange={(e) => setCardHolder(e.target.value)}
                      />
                      <label htmlFor="finame">Card Holder Name</label>
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
                        value={cardNumbers}
                        onChange={(e) => setCardNumbers(e.target.value)}
                      />
                      <label htmlFor="laname">Card Number</label>
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
                        value={cardValid}
                        onChange={(e) => setCardValid(e.target.value)}
                      />
                      <label htmlFor="laname">Valid UpTo</label>
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
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                      />
                      <label htmlFor="laname"> CVV </label>
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
                        defaultValue=" "
                      >
                        <option value="">Card Type</option>
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
            <div
              className="modal-footer"
              style={{ cursor: isSaveCardDisabled ? "not-allowed" : "pointer" }}
            >
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
                onClick={handleSaveCards}
                disabled={isSaveCardDisabled}
                // style={{ cursor: isSaveCardDisabled ? 'not-allowed' : 'pointer' }}
              >
                Save Card
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Card End */}
      {/* Edit Card Start */}
      <div
        className="modal fade theme-modal"
        id="editCard1"
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
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              >
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
                        defaultValue={cardHolder1}
                        onChange={(e) => setCardHolder(e.target.value)}
                      />
                      <label htmlFor="finame">Card Holder Name</label>
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
                        defaultValue={cardNumbers1}
                        onChange={(e) => setCardNumbers(e.target.value)}
                      />
                      <label htmlFor="laname">Card Number</label>
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
                        defaultValue={cardValid1}
                        onChange={(e) => setCardValid(e.target.value)}
                      />
                      <label htmlFor="laname">Valid UpTo</label>
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
                        defaultValue={cvv1}
                        onChange={(e) => setCvv(e.target.value)}
                      />
                      <label htmlFor="laname"> CVV </label>
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
                        defaultValue=" "
                      >
                        <option value="">Card Type</option>
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
                onClick={handleSaveChanges2}
              >
                Save Card
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
                  The permission for the use/group, preview is inherited from
                  the object, object will create a new permission for this
                  object
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
    </>
  );
}

export default UserDashboard;
