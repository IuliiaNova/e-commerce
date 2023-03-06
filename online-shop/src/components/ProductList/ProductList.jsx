import React, {useState, useEffect, useMemo } from 'react';
import { ProductItem } from "./ProductItem";
import "./products.css";

export const ProductsList = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

// Here we prevent unnecessary re-renders of the ProductItem components if the products state hasn't changed

  const memoizedProducts = useMemo(() => {
    return products.map((product, idx) => {
      return <ProductItem 
      key={`beauty-item-${idx}`} 
      item={product} 
      id={product.id} 
      url={product.url} 
      title={product.title} 
      price={product.price} 
      count={product.count} />;
    });
  }, [products]);

  return (
    <div className='mt-8'>
     <p className='ml-40'>Have a good shoping</p> 
    <div className="products-list">
      {memoizedProducts}
    </div>
    </div>
  );
};

export default ProductsList;