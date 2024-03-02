import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetBannerListQuery } from "../../services/Post";

function Bottombanner() {
  const [bannerList, setBannerList] = useState([]);

  const { data: categoryBanner } = useGetBannerListQuery({
    area: "Bottom Banner",
  });
  useEffect(() => {
    if (categoryBanner) {
      setBannerList(categoryBanner?.results?.banners);
    }
  }, [categoryBanner]);

  console.log("bottom banner", bannerList);
  return (
    <>
      <div className="section-t-space">
        {bannerList?.slice(0, 1)?.map((item, index) => (
          <Link
            to="/shop"
            state={{
              URLType: item.URLType,
              ...(item.URLType === "Category" && {
                category_Id: item.category_Id,
              }),
              ...(item.URLType === "Subcategory" && {
                subCategory_Id: item.subCategory_Id,
              }),
              ...(item.URLType === "subSubcategory" && {
                subSubCategory_Id: item.subSubCategory_Id,
              }),
              ...(item.URLType === "product" && {
                product_Id: item.product_Id,
              }),
            }}
            key={index}
          >
            <div
              className="banner-contain hover-effect"
              style={{
                backgroundImage: `url(${item?.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                display: "block",
              }}
            >
              <div className="banner-details p-center banner-b-space w-100 text-center">
                <div>
                  <h6 className="ls-expanded theme-color mb-sm-3 mb-1">
                    {item?.category_Id?.categoryName_en}
                  </h6>
                  <h2 className="banner-title">VEGETABLE</h2>
                  <h5 className="lh-sm mx-auto mt-1 text-content">
                    Save up to 5% OFF
                  </h5>
                  <button
                    onClick={() => {
                      window.location.href = `/Banner-list/${item.category_Id._id}`;
                    }}
                    className="btn btn-animation btn-sm mx-auto mt-sm-3 mt-2"
                  >
                    Shop Now <i className="fa-solid fa-arrow-right icon" />
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Bottombanner;
