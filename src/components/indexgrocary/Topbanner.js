import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetBannerListQuery } from "../../services/Post";

function Topbanner() {
  const [bannerList, setBannerList] = useState([]);

  const { data: categoryBanner } = useGetBannerListQuery({
    area: "Top Banner",
  });
  useEffect(() => {
    if (categoryBanner) {
      setBannerList(categoryBanner?.results?.banners);
    }
  }, [categoryBanner]);

  const filteredBanners = bannerList?.banners?.filter(
    (banner) => banner.area === "Top Banner"
  );

  return (
    <>
      <section className="home-section pt-2">
        <div className="container-fluid-lg">
          <div className="row g-4">
            <div className="col-xl-8 ratio_65">
              <div className="home-contain h-100">
                <div className="h-100 blur-up lazyloaded">
                  {bannerList?.slice(0, 1)?.map((item, index) => (
                    <Link to={`/Banner-list/${item?.subCategory_Id?._id}`}>
                      <div
                        key={index}
                        style={{
                          backgroundImage: `url(${item?.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat",
                          display: "block",
                          height: "555px",
                        }}
                        className="hover-effect"
                      >
                        <img
                          src={item.image}
                          className="bg-img lazyloaded"
                          alt=""
                          style={{ height: "555px" }}
                        />
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="home-detail p-center-left w-75">
                  <div style={{ marginTop: "400px" }}>
                    <button
                      onClick={() => {
                        window.location.href = "/shop/:id";
                      }}
                      className="btn btn-animation mt-xxl-4 mt-2 home-button mend-auto"
                    >
                      Shop Now <i className="fa-solid fa-right-long icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 ratio_65">
              <div className="row g-4">
                {bannerList?.slice(1, 3)?.map((item, index) => {
                  return (
                    <div className="col-xl-12 col-md-6" key={index}>
                      <Link to={`/Banner-list/${item?.subCategory_Id?._id}`}>
                        <div
                          className="home-contain bg-size blur-up lazyloaded hover-effect"
                          style={{
                            backgroundImage: `url(${item?.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                            backgroundRepeat: "no-repeat",
                            display: "block",
                          }}
                        >
                          <img
                            src={item?.image}
                            className="bg-img hover-effect lazyloaded"
                            alt=""
                            style={{ display: "none" }}
                          />
                          <div className="home-detail p-center-left home-p-sm w-75">
                            <div>
                              <h2 className="mt-0 text-danger">
                                45%{" "}
                                <span className="discount text-title">OFF</span>
                              </h2>
                              <h3 className="theme-color">Nut Collection</h3>
                              <p className="w-75">
                                We deliver organic vegetables &amp; fruits
                              </p>
                              <Link to="shop" className="shop-button">
                                Shop Now{" "}
                                <i className="fa-solid fa-right-long" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Topbanner;
