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
  if (!Array.isArray(products)) {
    return null;
  }
  return products.map((product, idx) => {
    return (
      <ProductItem 
        key={`beauty-item-${idx}`} 
        item={product} 
        id={product.id} 
        url={product.url} 
        title={product.title} 
        price={product.price} 
        count={product.count} 
      />
    );
  });
}, [products]);

  return (
    <div className='mt-8 flex flex-col items-center'>
     <p className="text-2xl bg-lime-50 p-6 w-full font-semibold m-4 text-center">Have a good shoping</p> 
    <div className="products-list">
      {memoizedProducts}
    </div>
    </div>
  );
};

export default ProductsList;