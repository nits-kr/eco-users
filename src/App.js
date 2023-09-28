//import logo from './logo.svg';
import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IndexPage from "./components/IndexPage";
import IndexElectronics from "./components/IndexElectronics";
import SellerGrid from "./components/SellerGrid";
import Shop from "./components/Shop";
import SignUp from "./components/SignUp";
import UserDashboard from "./components/UserDashboard";
import WishList from "./components/WishList";
import SellerDetails from "./components/SellerDetails";
import SellerBecome from "./components/SellerBecome";
import SellerDashboard from "./components/SellerDashboard";
import Product from "./components/Product";
import Search from "./components/Search";
import IndexFurniture from "./components/IndexFurniture";
import IndexLifestyle from "./components/IndexLifestyle";
import Login from "./components/Login";
import OrderSuccess from "./components/OrderSuccess";
import Otp from "./components/Otp";
import IndexFlowerBusiness from "./components/IndexFlowerBusiness";
import IndexGeneralThings from "./components/IndexGeneralThings";
import IndexFood from "./components/IndexFood";
import IndexJwellary from "./components/IndexJwellary";
import ContactUs from "./components/ContactUs";
import Faq from "./components/Faq";
import Forgot from "./components/Forgot";
import IndexGrocary from "./components/IndexGrocary";
import Compare from "./components/Compare";
import ComingSoon from "./components/ComingSoon";
import CheckOut from "./components/CheckOut";
import Blog from "./components/Blog";
import Cart from "./components/Cart";
import BlogDetails from "./components/BlogDetails";
import AboutUs from "./components/AboutUs";
import Badrequest from "./components/Badrequest";
import Varification from "./components/Varification";
import ResetPassword from "./components/ResetPassword";
import MobileFixMenu from "./components/MobileFixMenu";
import BreadCrumb from "./components/BreadCrumb";
import LoadingBar from "react-top-loading-bar";
import OrderTracking from "./components/OrderTracking";
import Shop2 from "./components/Shop2";
import GetStar from "./components/GetStar";
import Shop3 from "./components/Shop3";
import CheckOutNew from "./components/CheckOutNew";
import BannerShop from "./components/BannerShop";

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
        <Routes>
          <Route exact className="active" path="/" element={<Login />} />
          <Route
            exact
            className="active"
            path="/Badrequest"
            element={<Badrequest />}
          />
          <Route
            exact
            className="active"
            path="/about-us"
            element={<AboutUs />}
          />
          <Route
            exact
            className="active"
            path="/blog-details/:item"
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
            path="/check-out/:coupan2"
            element={<CheckOut />}
          />
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
          <Route exact className="active" path="/faq" element={<Faq />} />
          <Route exact className="active" path="/forgot" element={<Forgot />} />
          <Route
            exact
            className="active"
            path="/index-electronics"
            element={<IndexElectronics />}
          />
          <Route
            exact
            className="active"
            path="*"
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
            path="/product/:id"
            element={<Product setProgress={setProgress} />}
          />
          <Route exact className="active" path="/search" element={<Search />} />
          <Route
            exact
            className="active"
            path="/seller-become"
            element={<SellerBecome />}
          />
          <Route
            exact
            className="active"
            path="/<seller-dashboard"
            element={<SellerDashboard />}
          />
          <Route
            exact
            className="active"
            path="/<seller-details"
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
            path="/shop/:id"
            element={<Shop setProgress={setProgress} />}
          />
          <Route
            exact
            className="active"
            path="/shop2/:query"
            element={<Shop2 setProgress={setProgress} />}
          />
          <Route
            exact
            className="active"
            path="/shop3/:id"
            element={<Shop3 setProgress={setProgress} />}
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
            path="/bread-crumb"
            element={<BreadCrumb />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
