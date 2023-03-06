import React, {useState, useEffect } from 'react';
import { ProductItem } from "./ProductItem";
import "./products.css";


export const ProductsList = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:3000/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

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