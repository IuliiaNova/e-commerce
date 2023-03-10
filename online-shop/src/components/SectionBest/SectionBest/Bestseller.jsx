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
    if (!Array.isArray(products)) {
      return [];
    }
    const filteredProducts = products.filter(product => [1, 3, 6, 8].includes(product.id));
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
    <div className='m-8  flex flex-col justify-center'>
      <h2 className="text-2xl w-full p-6 text-center font-semibold">OUR BEST SELLERS</h2>
      <div className="products-list-best flex flex-row justify-between p-12">
        {memoizedProducts}
      </div>
    </div>
  )
}