import React, { useState } from 'react';
import { ProductItem } from "./ProductItem";
import "./products.css";
import { products } from "../../data/products";



export const ProductsList = () => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const newCartItems = [...cartItems, item];
    setCartItems(newCartItems);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };




  return (
    <div className="products-list">
      {products.map((product, idx) => {
        return <ProductItem 
        key={`beauty-item-${idx}`} 
        item={product} 
        id={product.id} 
        url={product.url} 
        title={product.title} 
        price={product.price} 
        count={product.count}
        handleAddToCart={addToCart}/>;
      })}
    </div>
  );
};

export default ProductsList;