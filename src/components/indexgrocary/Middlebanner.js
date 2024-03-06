import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetBannerListQuery } from "../../services/Post";

function Middlebanner() {
  const [bannerList, setBannerList] = useState([]);

  const { data: categoryBanner } = useGetBannerListQuery({
    area: "Middle Banner",
  });
  useEffect(() => {
    if (categoryBanner) {
      setBannerList(categoryBanner?.results?.banners);
    }
  }, [categoryBanner]);

  console.log("middle banner", bannerList);
  return (
    <>
      <div className="section-t-space section-b-space">
        <div className="row g-md-4 g-3">
          {/* Middle Banner 1 */}
          <div className="col-xxl-6 col-xl-12 col-md-7">
            <Link
              to="/shop"
              state={{
                URLType: bannerList[0]?.URLType,
                ...(bannerList[0]?.URLType === "Category" && {
                  category_Id: bannerList[0]?.category_Id,
                }),
                ...(bannerList[0]?.URLType === "Subcategory" && {
                  subCategory_Id: bannerList[0]?.subCategory_Id,
                }),
                ...(bannerList[0]?.URLType === "subSubcategory" && {
                  subSubCategory_Id: bannerList[0]?.subSubCategory_Id,
                }),
                ...(bannerList[0]?.URLType === "product" && {
                  product_Id: bannerList[0]?.product_Id,
                }),
              }}
              className="banner-contain hover-effect"
              style={{
                backgroundImage: `url(${bannerList[0]?.image})`,
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
              to="/shop"
              state={{
                URLType: bannerList[1]?.URLType,
                ...(bannerList[1]?.URLType === "Category" && {
                  category_Id: bannerList[1]?.category_Id,
                }),
                ...(bannerList[1]?.URLType === "Subcategory" && {
                  subCategory_Id: bannerList[1]?.subCategory_Id,
                }),
                ...(bannerList[1]?.URLType === "SubSubCategory" && {
                  subSubCategory_Id: bannerList[1]?.subSubCategory_Id,
                }),
                ...(bannerList[1]?.URLType === "Product" && {
                  product_Id: bannerList[1]?.product_Id,
                }),
              }}
              className="banner-contain hover-effect h-100"
              style={{
                backgroundImage: `url(${bannerList[1]?.image})`,
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
