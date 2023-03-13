import React, {  useState, useEffect } from 'react';
import "./Search.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ProductItem from '../ProductList/ProductItem';


export const Search = () => {

  const [searchItem, setSearchItem] = useState('');
  const [matchingItems, setMatchingItems] = useState([]);
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


  const searchProducts = (e) => {
    e.preventDefault();
    const filteredItems = products.filter((item) => {
        const checkItem = item.title;
        return checkItem.toLowerCase().includes(searchItem.toLowerCase());
    });
    setMatchingItems(filteredItems);
    setSearchItem('');
  };

  const renderMatchingItems = () => {
      return matchingItems.map((product, idx) => {
        return <ProductItem 
          key={`matched-product-${idx}`} 
          id={product.id} 
          url={product.url} 
          title={product.title} 
          price={product.price} 
          count={product.count} />;
      });
  };

  return (
    <div>
      <div className="input-with-icon m-8 ml-20">
        <form onSubmit={searchProducts}>
          <input type="search" className="search-input" placeholder="Search" value={searchItem} onChange={e => setSearchItem(e.target.value)} />
          <span className="icon"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
        </form>
      </div>
      {matchingItems.length > 0 &&
      <div className="matched-products flex flex-row ml-16 p-8 w-5/6">
        {renderMatchingItems()}
      </div>
    }
    </div>
  );
}
export default Search;