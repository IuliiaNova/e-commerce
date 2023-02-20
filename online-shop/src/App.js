import React, { useState, useEffect } from 'react';
import './App.css';
import { Header, ProductsList, ShoppingCart } from "./components";


function loadItems() {
  const items = localStorage.getItem("products");

  if (items) {
    try {
      return JSON.parse(items);
    } catch (error) {
      return [];
    }
  } else {
    return [];
  }
}


function App() {
  const [cartItems, setCartItems] = useState(() => loadItems());

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(cartItems));
  }, [cartItems]);



  return (
    <div className="App">
      <Header />
      <hr />
      <ProductsList />
      <ShoppingCart title={cartItems.title} price={cartItems.price} count={cartItems.count} />

    </div>
  );
}

export default App;
