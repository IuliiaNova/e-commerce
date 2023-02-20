import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import "./CounterButton.css";

export const Counter = ({ id, url, title, price }) => {

    const [count, setCount] = useState(0);


    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleChange = (event) => {
        setCount(parseInt(event.target.value));
    };

    const handleRemove = () => {
        setCount(0);
    };

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
    
  
  
  
    const handleAddToCart = ({ id, url, title, price, count }) => {
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      const item = {
        id: id,
        title: title,
        price: price,
        count: count,
        url: url,
      };
      setCartItems([...cartItems, item]);
  }
  

    return (
        <div className=" mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="container-counter flex items-center border-gray-100">
                <button onClick={handleRemove}><FontAwesomeIcon icon={faTrash} /></button>
                <button onClick={handleDecrement} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </button>
                <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="text" value={count} min="0" onChange={handleChange}/>
                <button onClick={handleIncrement} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </button>
                <button onClick={() => handleAddToCart({ url, id, title, price, count })} className="button-add">Add to cart</button>
              </div>
            </div>

    );
}

export default Counter;

