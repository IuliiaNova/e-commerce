import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Cart from "../pages/Cart/Cart";
//import Login from "../pages/Login";
import Login from "../pages/Login/Login";
import Wishlist from "../pages/Wishlist/Wishlist";
import { Log } from "../config/routes/paths";
import PrivateRoutes from "./PrivatRouts";
import ProductDetail from "../pages/ProductDetails/ProductDetail";

const RouterPaths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/productpage/:idProduct" element={<ProductDetail />} />
          <Route path={Log} element={<Login />} />
          <Route path="/*" element={
            <PrivateRoutes>
              <Routes>
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
              </Routes>
            </PrivateRoutes>
          } />

        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default RouterPaths; 