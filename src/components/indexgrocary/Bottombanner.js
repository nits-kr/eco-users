import React from "react";
import { Link } from "react-router-dom";

function Bottombanner({ bannerList }) {
  return (
    <>
      <div className="section-t-space">
        {bannerList?.bottomBanner?.slice(0, 1)?.map((item, index) => (
          <Link to={`/Banner-list/${item?.category_Id?._id}`} key={index}>
            <div
              className="banner-contain hover-effect"
              style={{
                backgroundImage: `url(${item?.bottomBanner[0]})`,
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
