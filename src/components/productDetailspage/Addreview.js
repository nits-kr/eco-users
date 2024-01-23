import React, { useState } from "react";
import Star from "../Star";
import GetStar from "../GetStar";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { useAddReviewMutation } from "../../services/Post";
import { useSelector } from "react-redux";

function Addreview({ averageRating, productDetail, id }) {
  const ecommercetoken = useSelector((data) => data?.local?.ecomWebtoken);
  const ecomUserId = useSelector((data) => data?.local?.ecomUserid);
  const [addReview] = useAddReviewMutation();
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [website, setWebsite] = useState([]);
  const [title, setTitle] = useState([]);
  const [comment, setComment] = useState([]);
  const [formData, setFormData] = useState({
    r1: "",
    description: "",
  });
  const userRating = localStorage?.getItem("userRating");
  const userId = localStorage.getItem("loginId");

  const navigate = useNavigate();

  const ratings = productDetail?.ratings;

  const totalRating = ratings?.length;
  let starCounts = [0, 0, 0, 0, 0];

  ratings?.forEach((rating) => {
    starCounts[rating?.star - 1]++;
  });

  const percentages = starCounts?.map((count) => (count / totalRating) * 100);
  const fiveStar = percentages[4];
  const fourStar = percentages[3];
  const threeStar = percentages[2];
  const twoStar = percentages[1];
  const oneStar = percentages[0];

  // const location = useLocation();
  // let id = location.state?.id;

  console.log("userRating", userRating);

  const handleCreateReview = async (e) => {
    e.preventDefault();

    if (!ecommercetoken) {
      Swal.fire({
        title: "Login Required",
        text: "Please log in before creating a review.",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#0da487",
        confirmButtonText: "Login",
        cancelButtonText: "Cancel",
        customClass: {
          confirmButton: "custom-confirm-button-class me-3",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
      return;
    }
    if (userRating < 1) {
      Swal.fire({
        title: "Add Star",
        text: "Please add star before creating a review.",
        icon: "error",
        confirmButtonColor: "#0da487",
        confirmButtonText: "Ok",
      });
      return;
    }

    const newContactData = {
      yourName: name,
      Email: email,
      website: website,
      reviewTitle: title,
      comment: comment,
      rating: userRating,
      star: userRating,
      product_Id: id,
      user_Id: userId,
      postedby: userId,
    };

    try {
      const createdReview = await addReview(newContactData);
      console.log("Review created successfully:", createdReview);

      Swal.fire({
        title: "Review Created!",
        text: "Your review has been successfully created.",
        icon: "success",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    } catch (error) {
      console.error("Error creating review:", error);
    }
  };

  return (
    <>
      <div className="tab-content custom-tab" id="myTabContent">
        <div
          className="tab-pane fade show active"
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
                      <Star rating={averageRating} />
                    </ul>
                  </div>
                  <h6 className="ms-3">
                    {isNaN(averageRating)
                      ? "Not Rated"
                      : `${averageRating.toFixed(2)} Out Of 5`}
                  </h6>
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
                            style={{
                              width: `${fiveStar.toFixed(2)}%`,
                            }}
                            aria-valuenow={fiveStar}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            {isNaN(fiveStar) ? null : `${fiveStar.toFixed(2)}%`}
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
                            style={{
                              width: `${fourStar.toFixed(2)}%`,
                            }}
                            aria-valuenow={fourStar}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            {isNaN(fourStar) ? null : `${fourStar.toFixed(2)}%`}
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
                            style={{
                              width: `${threeStar.toFixed(2)}%`,
                            }}
                            aria-valuenow={threeStar}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            {isNaN(threeStar)
                              ? null
                              : `${threeStar.toFixed(2)}%`}
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
                            style={{
                              width: `${twoStar.toFixed(2)}%`,
                            }}
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            {isNaN(twoStar) ? null : `${twoStar.toFixed(2)}%`}
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
                            style={{
                              width: `${oneStar.toFixed(2)}%`,
                            }}
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            {isNaN(oneStar) ? null : `${oneStar.toFixed(2)}%`}
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <form className="col-xl-6" onSubmit={handleCreateReview}>
                <div className="review-title">
                  <h4 className="fw-500">Add a review</h4>
                </div>
                <div className="m-3">
                  <GetStar />
                </div>

                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="form-floating theme-form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label htmlFor="name">
                        Your Name
                        <span className="required-field text-danger">*</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating theme-form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email Address"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="email">
                        Email Address
                        <span className="required-field text-danger">*</span>
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
                        // required
                        onChange={(e) => setWebsite(e.target.value)}
                      />
                      <label htmlFor="website">Website</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating theme-form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="review1"
                        placeholder="Give your review a title"
                        required
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <label htmlFor="review1">
                        Review Title
                        <span className="required-field text-danger">*</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating theme-form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        name="comment"
                        id="comment"
                        style={{ height: 150 }}
                        defaultValue={""}
                        onChange={(e) => setComment(e.target.value)}
                      />
                      <label htmlFor="floatingTextarea2">
                        Write Your Comment
                        <span className="required-field text-danger">*</span>
                      </label>
                    </div>
                  </div>
                  <button
                    className="btn btn-animation btn-md fw-bold ms-auto"
                    type="submit"
                  >
                    Send Reviews
                  </button>
                </div>
              </form>
              <div className="col-12">
                <div className="review-title">
                  <h4 className="fw-500">Customer questions &amp; answers</h4>
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
                          <div className="reply">
                            <p>
                              Icing cookie carrot cake chocolate cake sugar plum
                              jelly-o danish. Dragée dragée shortbread tootsie
                              roll croissant muffin cake I love gummi bears.
                              Candy canes ice cream caramels tiramisu
                              marshmallow cake shortbread candy canes cookie.
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
                          <div className="reply">
                            <p>
                              Tootsie roll cake danish halvah powder Tootsie
                              roll candy marshmallow cookie brownie apple pie
                              pudding brownie chocolate bar. Jujubes gummi bears
                              I love powder danish oat cake tart croissant.
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
                          <div className="reply">
                            <p>
                              Biscuit chupa chups gummies powder I love sweet
                              pudding jelly beans. Lemon drops marzipan apple
                              pie gingerbread macaroon croissant cotton candy
                              pastry wafer. Carrot cake halvah I love tart
                              caramels pudding icing chocolate gummi bears.
                              Gummi bears danish cotton candy muffin marzipan
                              caramels awesome feel. <Link to="#">Reply</Link>
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
        <div
          className="tab-pane fade"
          id="description"
          role="tabpanel"
          aria-labelledby="description-tab"
        >
          <div className="product-description mb-4">
            <div className="nav-desh">
              <p>{productDetail?.Description}</p>
            </div>
            <div className="nav-desh">
              <div className="desh-title">
                <h5>Organic:</h5>
              </div>
              <p>
                vitae et leo duis ut diam quam nulla porttitor massa id neque
                aliquam vestibulum morbi blandit cursus risus at ultrices mi
                tempus imperdiet nulla malesuada pellentesque elit eget gravida
                cum sociis natoque penatibus et magnis dis parturient montes
                nascetur ridiculus mus mauris vitae ultricies leo integer
                malesuada nunc vel risus commodo viverra maecenas accumsan lacus
                vel facilisis volutpat est velit egestas dui id ornare arcu odio
                ut sem nulla pharetra diam sit amet nisl suscipit adipiscing
                bibendum est ultricies integer quis auctor elit sed vulputate mi
                sit amet mauris commodo quis imperdiet massa tincidunt nunc
                pulvinar sapien et ligula ullamcorper malesuada proin libero
                nunc consequat interdum varius sit amet mattis vulputate enim
                nulla aliquet porttitor lacus luctus accumsan.
              </p>
            </div>
            <div className="banner-contain nav-desh">
              <img
                src="../assets/images/vegetable/banner/14.jpg"
                className="bg-img blur-up lazyload"
                alt=""
              />
              <div className="banner-details p-center banner-b-space w-100 text-center">
                <div>
                  <h6 className="ls-expanded theme-color mb-sm-3 mb-1">
                    SUMMER
                  </h6>
                  <h2>VEGETABLE</h2>
                  <p className="mx-auto mt-1">Save up to 5% OFF</p>
                </div>
              </div>
            </div>
            <div className="nav-desh">
              <div className="desh-title">
                <h5>From The Manufacturer:</h5>
              </div>
              <p>
                Jelly beans shortbread chupa chups carrot cake jelly-o halvah
                apple pie pudding gingerbread. Apple pie halvah cake tiramisu
                shortbread cotton candy croissant chocolate cake. Tart cupcake
                caramels gummi bears macaroon gingerbread fruitcake marzipan
                wafer. Marzipan dessert cupcake ice cream tootsie roll. Brownie
                chocolate cake pudding cake powder candy ice cream ice cream
                cake. Jujubes soufflé chupa chups cake candy halvah donut. Tart
                tart icing lemon drops fruitcake apple pie.
              </p>
              <p>
                Dessert liquorice tart soufflé chocolate bar apple pie pastry
                danish soufflé. Gummi bears halvah gingerbread jelly icing.
                Chocolate cake chocolate bar pudding chupa chups bear claw pie
                dragée donut halvah. Gummi bears cookie ice cream jelly-o
                jujubes sweet croissant. Marzipan cotton candy gummi bears lemon
                drops lollipop lollipop chocolate. Ice cream cookie dragée cake
                sweet roll sweet roll.Lemon drops cookie muffin carrot cake
                chocolate marzipan gingerbread topping chocolate bar. Soufflé
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
                  <td>LE 014 - 20pcs Crème Bakes (Pack of 2)</td>
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
              {productDetail?.careInstuctions &&
                productDetail.careInstuctions
                  .split(".")
                  .map((instruction, index) => (
                    <li key={index}>{instruction.trim()}</li>
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addreview;
