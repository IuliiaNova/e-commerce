import React, { useState, useEffect } from 'react';
import './App.css';
import { Header, ProductsList, ShoppingCart } from "./components";


function App() {
  return (
    <div className="App">
        <Header />
        <hr />
        <ProductsList />
        <ShoppingCart />
       
    </div>
  );
}

export default App;
