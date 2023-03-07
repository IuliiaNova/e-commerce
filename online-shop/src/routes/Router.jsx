import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login";
import Wishlist from "../pages/Wishlist/Wishlist";

const RouterPaths = () => {
    return(
        <>
        <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/productpage/:idProduct" element={<div>ProductPage</div>}/>
          <Route path="/about" element={<div>About</div>}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/*" element={<Navigate replace to="/" />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/wishlist" element={<Wishlist />}/>
        </Routes>
      </BrowserRouter>
        </>
    )
}

export default RouterPaths; 