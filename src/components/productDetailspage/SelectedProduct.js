import React from "react";

function SelectedProduct({ selectedVariantData }) {
  return (
    <>
      <div className="col-xl-5 col-lg-5 wow fadeInUp">
        <div className="product-left-box">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              {selectedVariantData?.product_Pic
                ?.slice(0, 8)
                ?.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-label={`Slide ${index + 1}`}
                  >
                    <img src={image} alt={`Product ${index + 1}`} />
                  </button>
                ))}
            </div>
            <div className="carousel-inner">
              {selectedVariantData?.product_Pic?.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <div className="d-flex h-100 align-items-center justify-content-center">
                    <img src={image} alt={`Product ${index + 1}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectedProduct;
