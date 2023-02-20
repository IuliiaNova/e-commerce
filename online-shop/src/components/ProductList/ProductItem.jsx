import React, { useState, useEffect } from 'react';
import { products } from "./products.css";
import Counter from "../Counter/CounterButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


export const ProductItem = ({ id, url, title, price, count, handleChange, handleRemove, handleAddToCart }) => {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  



  const handleAddToCart = ({ id, title, price, count }) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const item = {
      id: id,
      title: title,
      price: price,
      count: count,
    };
    setCartItems([...cartItems, item]);
}

  return (
    <div>
      <div className="div-image-product">
      <img src={url} alt="image-product" className="product-item"/>
      <FontAwesomeIcon icon={faHeart} className="product-item-like"/>
      </div>
      <div className="product-info-container">
        <p>{title}</p>
        <p>{price}€</p>
        <Counter {...title} {...price} count={count} handleChange={handleChange} handleRemove={handleRemove} />
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductItem;