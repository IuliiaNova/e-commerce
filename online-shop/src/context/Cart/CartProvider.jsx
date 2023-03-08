import React, { useState, useEffect } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {

  // Below I will use context to create a global scope to cartItems and its function + useEffects

  const [cartItems, setItems] = useState([]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setItems(savedCartItems);
  }, []);


  const handleAddToCart = (id, url, title, price, count) => {

    /*const logged = localStorage.getItem('userLogin');
    console.log(logged)

    if (logged == null) {
      alert("Please log in")
    } else {}*/

      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      const itemIndex = cartItems.findIndex(item => item.id === id);

      if (itemIndex !== -1) {
        // Product is already in the cart, update count
        const newCartItems = [...cartItems];
        newCartItems[itemIndex].count += count;
        setItems(newCartItems);
      } else {
        // Product is not in the cart, add as new item
        const item = { id, url, title, price, count };
        setItems([...cartItems, item]);
      }
    
  };


  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);


  const addToWishlist = (id, url, title, price) => {
    const wishItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    const item = { id, url, title, price };
    setWishlist([...wishItems, item]);
  };

  const [wisheslist, removeFromWishlist ] = useState([]);

  const deleteFromWishlist = (id) => {
    const wishItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    const index = wishItems.findIndex((wishItem) => wishItem.id === id);
  
    if (index !== -1) {
      // Item exists in wishlist, so remove it
      wishItems.splice(index, 1);
      // Update the wishlist state with the new array
      setWishlist([...wishItems]);
      // Save the updated wishlist in local storage
      localStorage.setItem('wishlist', JSON.stringify(wishItems));
    }
  };


  return (
    <>
      <CartContext.Provider value={{ cartItems, setItems, handleAddToCart, addToWishlist, wishlist, setWishlist, deleteFromWishlist, wisheslist, removeFromWishlist }}>
        {children}
      </CartContext.Provider>
    </>
  )
}

export default CartProvider; 