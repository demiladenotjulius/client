import React from "react";
import Login from "./Pages/User/LogIn/LogIn";
import Register from "./Pages/User/Register/Register";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import "./App.css";
import ContactUs from "./Components/ContactUs/ContactUs";
import ProductPage from "./Components/Product Page/ProductPage";
import ProductDetails from "./Components/ProductDetails/ProductDetails.jsx";
import Search from "./Components/Search/Search.jsx";
import Checkout from "./Components/Checkout/checkout.jsx";
import {ProductImageProvider} from './Components/productContext/productContext.jsx'
import AdminLogin from "./Components/Adminlogin/Adminlogin.jsx"

function App() {
  return (
    <>
      <div>
      <ProductImageProvider>
        <Routes>
         <Route index element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>       
          <Route path="/productpage" element={<ProductPage />}></Route>
          <Route path="/productdetails" element={<ProductDetails />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/admin" element={<AdminLogin />}></Route>

        </Routes>
        </ProductImageProvider>
      </div>
    </>
  );
}

export default App;
