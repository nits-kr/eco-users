import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetBannerListQuery } from "../../services/Post";

function Sidebanner() {
  const [bannerList, setBannerList] = useState([]);

  const { data: categoryBanner } = useGetBannerListQuery({
    area: "Side Banner",
  });
  useEffect(() => {
    if (categoryBanner) {
      setBannerList(categoryBanner?.results?.banners);
    }
  }, [categoryBanner]);
  return (
    <>
      <div className="ratio_medium section-t-space">
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
        >
          <div className="home-contain hover-effect">
            {bannerList && (
              <img
                src={bannerList[0]?.image}
                className="bg-img lazyload w-100"
                alt=""
                style={{ height: "455px" }}
              />
            )}

            <div className="home-detail p-top-left home-p-medium">
              <div>
                <h4 className="text-yellow text-exo home-banner">Organic</h4>
                <h2 className="text-uppercase fw-normal mb-0 text-russo theme-color">
                  fresh
                </h2>
                <h2 className="text-uppercase fw-normal text-title">
                  Vegetables
                </h2>
                <p className="mb-3">Super Offer to 50% Off</p>
                <button
                  onClick={() => {
                    window.location.href = "/shop";
                  }}
                  className="btn btn-animation btn-md mend-auto"
                >
                  Shop Now <i className="fa-solid fa-arrow-right icon" />
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Sidebanner;
