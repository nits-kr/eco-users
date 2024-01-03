import React from "react";
import { Link } from "react-router-dom";

function Middlebanner({ bannerList }) {
  return (
    <>
      <div className="section-t-space section-b-space">
        <div className="row g-md-4 g-3">
          {/* Middle Banner 1 */}
          <div className="col-xxl-6 col-xl-12 col-md-7">
            <Link
              to={`/Banner-list/${bannerList?.middleBanner?.[2]?.subCategory_Id?._id}`}
              className="banner-contain hover-effect"
              style={{
                backgroundImage: `url(${bannerList?.middleBanner?.[2]?.middleBanner?.[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                display: "block",
              }}
            >
              <div className="banner-details p-center-left p-4">
                <div>
                  <h2 className="text-kaushan fw-normal theme-color">
                    Get Ready To
                  </h2>
                  <h3 className="mt-2 mb-3">TAKE ON THE DAY!</h3>
                  <p className="text-content banner-text">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate.
                  </p>
                  <button
                    onClick={() => {
                      window.location.href = `/Banner-list/${bannerList?.middleBanner?.[2]?.category_Id?._id}`;
                    }}
                    className="btn btn-animation btn-sm mend-auto"
                  >
                    Shop Now <i className="fa-solid fa-arrow-right icon" />
                  </button>
                </div>
              </div>
            </Link>
          </div>

          {/* Middle Banner 2 */}
          <div className="col-xxl-6 col-xl-12 col-md-5">
            <Link
              to={`/Banner-list/${bannerList?.middleBanner?.[3]?.subCategory_Id?._id}`}
              className="banner-contain hover-effect h-100"
              style={{
                backgroundImage: `url(${bannerList?.middleBanner?.[3]?.middleBanner?.[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                display: "block",
              }}
            >
              <div className="banner-details p-center-left p-4 h-100">
                <div>
                  <h2 className="text-kaushan fw-normal text-danger">
                    20% Off
                  </h2>
                  <h3 className="mt-2 mb-2 theme-color">SUMMRY</h3>
                  <h3 className="fw-normal product-name text-title">Product</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Middlebanner;
