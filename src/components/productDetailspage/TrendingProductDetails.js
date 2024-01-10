import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetTrendingProductQuery } from "../../services/Post";

function TrendingProductDetails() {
  const trendingProduct = useGetTrendingProductQuery();
  const [trendingList, setTrendingList] = useState([]);
  useEffect(() => {
    if (trendingProduct?.data?.results?.productlist) {
      setTrendingList(trendingProduct?.data?.results?.productlist);
    }
  });
  return (
    <>
      <div className="pt-25">
        <div className="category-menu">
          <h3>Trending Products</h3>
          <ul className="product-list product-right-sidebar border-0 p-0">
            {trendingList.map((item, index) => {
              return (
                <li key={index}>
                  <div className="offer-product">
                    <Link to="/product" className="offer-image">
                      <img
                        src={
                          item?.productDetails?.[0]?.addVarient?.[0]
                            ?.product_Pic[0]
                        }
                        className="img-fluid  lazyload"
                        alt=""
                      />
                    </Link>
                    <div className="offer-detail">
                      <div>
                        <Link to="/product">
                          <h6 className="name">
                            {item?.productDetails?.[0]?.productName_en}
                          </h6>
                        </Link>
                        <span>
                          <strong>
                            {" "}
                            {
                              item?.productDetails?.[0]?.addVarient?.[0]
                                ?.values_Id?.valuesName_en
                            }
                          </strong>{" "}
                        </span>
                        <h6 className="price theme-color">
                          $
                          {item?.productDetails?.[0]?.addVarient?.[0]?.dollarPrice?.toFixed(
                            2
                          )}{" "}
                        </h6>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TrendingProductDetails;
