import React, { useEffect, useState, useMemo } from 'react';
import ProductItem from '../../ProductList/ProductItem';


export const Bestseller = () => {

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

    const memoizedProducts = useMemo(() => {
        const filteredProducts = products.filter(product => [1, 6, 4].includes(product.id));
        return filteredProducts.map((product, idx) => (
          <ProductItem
            key={`beauty-item-${idx}`}
            item={product}
            id={product.id}
            url={product.url}
            title={product.title}
            price={product.price}
            count={product.count}
          />
        ));
      }, [products]);

  return (
    <div className='mt-8'>
     <p className='ml-40'>Our best sellers</p> 
    <div className="products-list-best flex flex-row">
      {memoizedProducts}
    </div>
    </div>
  )
}
