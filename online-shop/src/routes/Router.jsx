import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login";
import Wishlist from "../pages/Wishlist/Wishlist";
import { ShowCart } from "../config/routes/paths";
import { Log } from "../config/routes/paths";
import { WishList } from "../config/routes/paths";

const RouterPaths = () => {
    return(
        <>
        <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/productpage/:idProduct" element={<div>ProductPage</div>}/>
          <Route path="/about" element={<div>About</div>}/>
          <Route path={ShowCart} element={<Cart />}/>
          <Route path="/*" element={<Navigate replace to="/" />}/>
          <Route path={Log} element={<Login />}/>
          <Route path={WishList} element={<Wishlist />}/>
        </Routes>
      </BrowserRouter>
        </>
    )
}

export default RouterPaths; 