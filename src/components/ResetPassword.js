import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import feather from "feather-icons";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Header";
import BreadCrumb from "./BreadCrumb";
import MobileFixMenu from "./MobileFixMenu";
import Footer from "./Footer";
import { useResetPasswordMutation } from "../services/Post";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { Button } from "rsuite";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function ResetPassword() {
  const varificationEmail = useSelector(
    (data) => data?.local?.varificationEmail
  );
  const [loader, setLoader] = useState(false);

  const [reset] = useResetPasswordMutation();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    trigger,
    watch,
  } = useForm();

  const handleSaveChanges = async (data) => {
    const newAddress = {
      password: data.password,
      confirm_Password: data.confirmPassword,
      userEmail: varificationEmail,
    };
    setLoader(true);
    try {
      const res = await reset(newAddress);
      console.log("reset res", res);
      setLoader(false);
      if (res?.data?.message === "Password Updated Successfully") {
        toast.success("Password Resetted Successfully!");
        navigate("/login");
      } else if (res?.error?.data?.message) {
        toast.error(res.error.data.message);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <>
      <Header />
      <BreadCrumb />
      <MobileFixMenu />
      <section className="log-in-section section-b-space forgot-section">
        <div className="container-fluid-lg w-100">
          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
              <div className="image-contain">
                <img
                  src="../assets/images/inner-page/forgot.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
              <div className="d-flex align-items-center justify-content-center h-100">
                <div className="log-in-box">
                  <div className="log-in-title">
                    <h3>Reset Password</h3>
                    <h4>Enter New Password</h4>
                  </div>
                  <div className="input-box">
                    <form
                      className="row g-4"
                      onSubmit={handleSubmit(handleSaveChanges)}
                    >
                      <div className="col-12">
                        <div className="form-floating theme-form-floating log-in-form d-flex">
                          <input
                            type="password"
                            className={classNames("form-control", {
                              "is-invalid": errors.password,
                            })}
                            id="password"
                            placeholder="New Password"
                            {...register("password", {
                              required: "Password is required",
                              minLength: {
                                value: 8,
                                message:
                                  "Password must be at least 8 characters long",
                              },
                              pattern: {
                                value:
                                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])(?=.*[A-Z])[A-Za-z\d@$!%*#?&]+$/,
                                message:
                                  "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character",
                              },
                            })}
                          />

                          <label htmlFor="email">
                            New Password<span className="text-danger">*</span>
                          </label>
                        </div>
                        {errors.password && (
                          <small className="errorText mx-1 fw-bold text-danger">
                            {errors.password.message}
                          </small>
                        )}
                      </div>
                      <div className="col-12">
                        <div className="form-floating theme-form-floating log-in-form d-flex">
                          <input
                            type="password"
                            className={classNames("form-control", {
                              "is-invalid": errors.confirmPassword,
                            })}
                            id="confirmPassword"
                            placeholder="Confirm New Password"
                            {...register("confirmPassword", {
                              required: "Please confirm your password",
                              validate: (value) =>
                                value === watch("password", "") ||
                                "Passwords do not match",
                            })}
                          />

                          <label htmlFor="passwordNew">
                            Confirm New Password
                            <span className="text-danger">*</span>
                          </label>
                        </div>
                        {errors.confirmPassword && (
                          <small className="errorText mx-1 fw-bold text-danger">
                            {errors.confirmPassword.message}
                          </small>
                        )}
                      </div>

                      <div className="col-12">
                        <button
                          className="btn btn-animation w-100"
                          type="submit"
                          loading={loader}
                          appearance="primary"
                          style={{
                            backgroundColor: "#3e4093",
                            color: "#fff",
                            height: "50px",
                          }}
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ResetPassword;
