import React, { useState, useEffect } from 'react';
import './App.css';
import { Header, ProductsList, ShoppingCart, Banner } from "./components";
import { Footer } from "./components/Footer/Footer";


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
  const [items, setItems] = useState([]);

  useEffect(() => {
    const localStorageData = localStorage.getItem('cartItems');
    if (localStorageData) {
      const parsedData = JSON.parse(localStorageData);
      setItems(parsedData);
    }
  }, []);



  return (
    <div className="App">
      <div className="back-image">
      <Header />
      <hr />
      <Banner />
      </div>
      <ProductsList />
      <Footer />

    </div>
  );
}

export default App;
