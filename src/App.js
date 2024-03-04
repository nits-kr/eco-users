// //import logo from './logo.svg';
// import { useState, useEffect } from "react";
// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import IndexPage from "./components/IndexPage";
// import IndexElectronics from "./components/IndexElectronics";
// import SellerGrid from "./components/SellerGrid";
// import Shop from "./components/Shop";
// import SignUp from "./components/SignUp";
// import UserDashboard from "./components/UserDashboard";
// import WishList from "./components/WishList";
// import SellerDetails from "./components/SellerDetails";
// import SellerBecome from "./components/SellerBecome";
// import SellerDashboard from "./components/SellerDashboard";
// import Product from "./components/Product";
// import Search from "./components/Search";
// import IndexFurniture from "./components/IndexFurniture";
// import IndexLifestyle from "./components/IndexLifestyle";
// import Login from "./components/Login";
// import OrderSuccess from "./components/OrderSuccess";
// import Otp from "./components/Otp";
// import IndexFlowerBusiness from "./components/IndexFlowerBusiness";
// import IndexGeneralThings from "./components/IndexGeneralThings";
// import IndexFood from "./components/IndexFood";
// import IndexJwellary from "./components/IndexJwellary";
// import ContactUs from "./components/ContactUs";
// import Faq from "./components/Faq";
// import Forgot from "./components/Forgot";
// import IndexGrocary from "./components/IndexGrocary";
// import Compare from "./components/Compare";
// import ComingSoon from "./components/ComingSoon";
// // import CheckOut from "./components/CheckOut";
// import Blog from "./components/Blog";
// import Cart from "./components/Cart";
// import BlogDetails from "./components/BlogDetails";
// import AboutUs from "./components/AboutUs";
// import Badrequest from "./components/Badrequest";
// import Varification from "./components/Varification";
// import ResetPassword from "./components/ResetPassword";
// import MobileFixMenu from "./components/MobileFixMenu";
// import BreadCrumb from "./components/BreadCrumb";
// import LoadingBar from "react-top-loading-bar";
// import OrderTracking from "./components/OrderTracking";
// import GetStar from "./components/GetStar";
// import CheckOutNew from "./components/CheckOutNew";
// import BannerShop from "./components/BannerShop";
// import Products from "./components/productDetailspage/Products";
// import TrendingProductHome from "./components/productDetailspage/TrendingProductHome";
// import UpdateProfilessection from "./components/profiles/UpdateProfilessection";

// function App() {
//   const [progress, setProgress] = useState(0);
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       // Increment the progress value
//       setProgress(100);
//     }, 2000); // Change the timeout duration as needed

//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <>
//       <BrowserRouter>
//         <ToastContainer />
//         <LoadingBar height={3} color="#f11946" progress={progress} />
//         <Routes>
//           <Route exact className="active" path="/login" element={<Login />} />
//           <Route exact className="active" path="*" element={<Badrequest />} />
//           <Route
//             exact
//             className="active"
//             path="/about-us"
//             element={<AboutUs />}
//           />
//           <Route
//             exact
//             className="active"
//             path="/blog-details"
//             element={<BlogDetails />}
//           />
//           <Route
//             exact
//             className="active"
//             path="/blog"
//             element={<Blog setProgress={setProgress} />}
//           />
//           <Route exact className="active" path="/cart" element={<Cart />} />

//           <Route
//             exact
//             className="active"
//             path="/check-outall"
//             element={<CheckOutNew />}
//           />

//           <Route
//             exact
//             className="active"
//             path="/coming-soon"
//             element={<ComingSoon />}
//           />
//           <Route
//             exact
//             className="active"
//             path="/compare"
//             element={<Compare />}
//           />
//           <Route
//             exact
//             className="active"
//             path="/contact-us"
//             element={<ContactUs setProgress={setProgress} />}
//           />
//           <Route
//             exact
//             className="active"
//             path="/trending-details"
//             element={<TrendingProductHome setProgress={setProgress} />}
//           />

//           <Route exact className="active" path="/faq" element={<Faq />} />
//           <Route exact className="active" path="/forgot" element={<Forgot />} />
//           <Route
//             exact
//             className="active"
//             path="/index-electronics"
//             element={<IndexElectronics />}
//           />
//           <Route
//             exact
//             className="active"
//             path="/"
//             element={<IndexGrocary setProgress={setProgress} />}
//           />
//           <Route
//             exact
//             className="active"
//             path="/index-food"
//             element={<IndexFood />}
//           />
//           <Route
//             exact
//             className="active"
//             path="/index-jwellary"
//             element={<IndexJwellary />}
//           />
//           <Route
//             exact
//             className="active"
//             path="/index-flower-business"
//             element={<IndexFlowerBusiness />}
//           />
//           <Route
//             exact
//             className="active"
//             path="/index-general-things"
//             element={<IndexGeneralThings />}
//           />
//           <Route
//             exact
//             className="active"
//             path="/index-furniture"
//             element={<IndexFurniture />}
//           />

//           <Route
//             exact
//             className="active"
//             path="/index-lifestyle"
//             element={<IndexLifestyle />}
//           />
//           <Route
//             exact
//             className="active"
//             path="/order-success"
//             element={<OrderSuccess />}
//           />
//           <Route
//             exact
//             className="active"
//             path="/order-tracking/:id"
//             element={<OrderTracking />}
//           />

//           <Route exact className="active" path="/otp" element={<Otp />} />
//           {/* <Route
//             exact
//             className="active"
//             path="/product/:id"
//             element={<Product setProgress={setProgress} />}
//           /> */}
//           <Route
//             exact
//             className="active"
//             path="/product-details-page/:id"
//             element={<Products setProgress={setProgress} />}
//           />

//           <Route exact className="active" path="/search" element={<Search />} />
//           <Route
//             exact
//             className="active"
//             path="/seller-become"
//             element={<SellerBecome />}
//           />
//           <Route
//             exact
//             className="active"
//             path="/<seller-dashboard"
//             element={<SellerDashboard />}
//           />
//           <Route
//             exact
//             className="active"
//             path="/<seller-details"
//             element={<SellerDetails />}
//           />
//           <Route
//             exact
//             className="active"
//             path="/seller-grid"
//             element={<SellerGrid />}
//           />
//           <Route
//             exact
//             className="active"
//             path="/shop"
//             element={<Shop setProgress={setProgress} />}
//           />

//           <Route
//             exact
//             className="active"
//             path="/Banner-list/:id"
//             element={<BannerShop setProgress={setProgress} />}
//           />

//           <Route
//             exact
//             className="active"
//             path="/sign-up"
//             element={<SignUp />}
//           />
//           <Route
//             exact
//             className="active"
//             path="/get-star"
//             element={<GetStar />}
//           />

//           <Route
//             exact
//             className="active"
//             path="/user-dashboard"
//             element={<UserDashboard />}
//           />
//           <Route
//             exact
//             className="active"
//             path="/wishlist"
//             element={<WishList />}
//           />
//           <Route
//             exact
//             className="active"
//             path="/index"
//             element={<IndexPage />}
//           />
//           <Route
//             exact
//             className="active"
//             path="/varification"
//             element={<Varification />}
//           />
//           <Route
//             exact
//             className="active"
//             path="/reset-password"
//             element={<ResetPassword />}
//           />

//           <Route
//             exact
//             className="active"
//             path="/mobile-fix"
//             element={<MobileFixMenu />}
//           />
//           <Route
//             exact
//             className="active"
//             path="/update-profile"
//             element={<UpdateProfilessection />}
//           />

//           <Route
//             exact
//             className="active"
//             path="/bread-crumb"
//             element={<BreadCrumb />}
//           />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

import React, { useState, useEffect, Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";

const IndexPage = React.lazy(() => import("./components/IndexPage"));
const IndexElectronics = React.lazy(() =>
  import("./components/IndexElectronics")
);
const SellerGrid = React.lazy(() => import("./components/SellerGrid"));
const Shop = React.lazy(() => import("./components/Shop"));
const SignUp = React.lazy(() => import("./components/SignUp"));
const UserDashboard = React.lazy(() => import("./components/UserDashboard"));
const WishList = React.lazy(() => import("./components/WishList"));
const SellerDetails = React.lazy(() => import("./components/SellerDetails"));
const SellerBecome = React.lazy(() => import("./components/SellerBecome"));
const SellerDashboard = React.lazy(() =>
  import("./components/SellerDashboard")
);
const Product = React.lazy(() => import("./components/Product"));
const Search = React.lazy(() => import("./components/Search"));
const IndexFurniture = React.lazy(() => import("./components/IndexFurniture"));
const IndexLifestyle = React.lazy(() => import("./components/IndexLifestyle"));
const Login = React.lazy(() => import("./components/Login"));
const OrderSuccess = React.lazy(() => import("./components/OrderSuccess"));
const Otp = React.lazy(() => import("./components/Otp"));
const IndexFlowerBusiness = React.lazy(() =>
  import("./components/IndexFlowerBusiness")
);
const IndexGeneralThings = React.lazy(() =>
  import("./components/IndexGeneralThings")
);
const IndexFood = React.lazy(() => import("./components/IndexFood"));
const IndexJwellary = React.lazy(() => import("./components/IndexJwellary"));
const ContactUs = React.lazy(() => import("./components/ContactUs"));
const Faq = React.lazy(() => import("./components/Faq"));
const Forgot = React.lazy(() => import("./components/Forgot"));
const IndexGrocary = React.lazy(() => import("./components/IndexGrocary"));
const Compare = React.lazy(() => import("./components/Compare"));
const ComingSoon = React.lazy(() => import("./components/ComingSoon"));
const Blog = React.lazy(() => import("./components/Blog"));
const Cart = React.lazy(() => import("./components/Cart"));
const BlogDetails = React.lazy(() => import("./components/BlogDetails"));
const AboutUs = React.lazy(() => import("./components/AboutUs"));
const Badrequest = React.lazy(() => import("./components/Badrequest"));
const Varification = React.lazy(() => import("./components/Varification"));
const ResetPassword = React.lazy(() => import("./components/ResetPassword"));
const MobileFixMenu = React.lazy(() => import("./components/MobileFixMenu"));
const BreadCrumb = React.lazy(() => import("./components/BreadCrumb"));
const OrderTracking = React.lazy(() => import("./components/OrderTracking"));
const GetStar = React.lazy(() => import("./components/GetStar"));
const CheckOutNew = React.lazy(() => import("./components/CheckOutNew"));
const BannerShop = React.lazy(() => import("./components/BannerShop"));
const Products = React.lazy(() =>
  import("./components/productDetailspage/Products")
);
const TrendingProductHome = React.lazy(() =>
  import("./components/productDetailspage/TrendingProductHome")
);
const UpdateProfilessection = React.lazy(() =>
  import("./components/profiles/UpdateProfilessection")
);

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Increment the progress value
      setProgress(100);
    }, 2000); // Change the timeout duration as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Suspense
          fallback={
            <div className="d-flex align-items-center justify-content-center mt-5">
              <Spinner /> <div className="ms-2">Loading...</div>
            </div>
          }
        >
          <Routes>
            <Route exact className="active" path="/login" element={<Login />} />
            <Route exact className="active" path="*" element={<Badrequest />} />
            <Route
              exact
              className="active"
              path="/about-us"
              element={<AboutUs />}
            />
            <Route
              exact
              className="active"
              path="/blog-details"
              element={<BlogDetails />}
            />
            <Route
              exact
              className="active"
              path="/blog"
              element={<Blog setProgress={setProgress} />}
            />
            <Route exact className="active" path="/cart" element={<Cart />} />
            <Route
              exact
              className="active"
              path="/check-outall"
              element={<CheckOutNew />}
            />
            <Route
              exact
              className="active"
              path="/coming-soon"
              element={<ComingSoon />}
            />
            <Route
              exact
              className="active"
              path="/compare"
              element={<Compare />}
            />
            <Route
              exact
              className="active"
              path="/contact-us"
              element={<ContactUs setProgress={setProgress} />}
            />
            <Route
              exact
              className="active"
              path="/trending-details"
              element={<TrendingProductHome setProgress={setProgress} />}
            />
            <Route exact className="active" path="/faq" element={<Faq />} />
            <Route
              exact
              className="active"
              path="/forgot"
              element={<Forgot />}
            />
            <Route
              exact
              className="active"
              path="/index-electronics"
              element={<IndexElectronics />}
            />
            <Route
              exact
              className="active"
              path="/"
              element={<IndexGrocary setProgress={setProgress} />}
            />
            <Route
              exact
              className="active"
              path="/index-food"
              element={<IndexFood />}
            />
            <Route
              exact
              className="active"
              path="/index-jwellary"
              element={<IndexJwellary />}
            />
            <Route
              exact
              className="active"
              path="/index-flower-business"
              element={<IndexFlowerBusiness />}
            />
            <Route
              exact
              className="active"
              path="/index-general-things"
              element={<IndexGeneralThings />}
            />
            <Route
              exact
              className="active"
              path="/index-furniture"
              element={<IndexFurniture />}
            />
            <Route
              exact
              className="active"
              path="/index-lifestyle"
              element={<IndexLifestyle />}
            />
            <Route
              exact
              className="active"
              path="/order-success"
              element={<OrderSuccess />}
            />
            <Route
              exact
              className="active"
              path="/order-tracking/:id"
              element={<OrderTracking />}
            />
            <Route exact className="active" path="/otp" element={<Otp />} />
            <Route
              exact
              className="active"
              path="/product-details-page/:id"
              element={<Products setProgress={setProgress} />}
            />
            <Route
              exact
              className="active"
              path="/search"
              element={<Search />}
            />
            <Route
              exact
              className="active"
              path="/seller-become"
              element={<SellerBecome />}
            />
            <Route
              exact
              className="active"
              path="/seller-dashboard"
              element={<SellerDashboard />}
            />
            <Route
              exact
              className="active"
              path="/seller-details"
              element={<SellerDetails />}
            />
            <Route
              exact
              className="active"
              path="/seller-grid"
              element={<SellerGrid />}
            />
            <Route
              exact
              className="active"
              path="/shop"
              element={<Shop setProgress={setProgress} />}
            />
            <Route
              exact
              className="active"
              path="/Banner-list/:id"
              element={<BannerShop setProgress={setProgress} />}
            />
            <Route
              exact
              className="active"
              path="/sign-up"
              element={<SignUp />}
            />
            <Route
              exact
              className="active"
              path="/get-star"
              element={<GetStar />}
            />
            <Route
              exact
              className="active"
              path="/user-dashboard"
              element={<UserDashboard />}
            />
            <Route
              exact
              className="active"
              path="/wishlist"
              element={<WishList />}
            />
            <Route
              exact
              className="active"
              path="/index"
              element={<IndexPage />}
            />
            <Route
              exact
              className="active"
              path="/varification"
              element={<Varification />}
            />
            <Route
              exact
              className="active"
              path="/reset-password"
              element={<ResetPassword />}
            />
            <Route
              exact
              className="active"
              path="/mobile-fix"
              element={<MobileFixMenu />}
            />
            <Route
              exact
              className="active"
              path="/update-profile"
              element={<UpdateProfilessection />}
            />
            <Route
              exact
              className="active"
              path="/bread-crumb"
              element={<BreadCrumb />}
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
