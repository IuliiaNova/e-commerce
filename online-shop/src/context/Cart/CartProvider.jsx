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


    return (
        <>
            <CartContext.Provider value={{ cartItems, setItems, handleAddToCart }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export default CartProvider; 