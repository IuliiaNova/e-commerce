import React from 'react';
import { ProductItem } from "./ProductItem";
import "./products.css";
import { products } from "../../data/products";


export const ProductsList = () => {

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
        count={product.count} />;
      })}
    </div>
  );
};

export default ProductsList;