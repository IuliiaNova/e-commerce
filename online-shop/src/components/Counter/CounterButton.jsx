/*
With useState

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import "./CounterButton.css";


export const Counter = ({ id, url, title, price, handleAddToCart }) => {

  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prevState) => prevState + 1);
  const handleRemove = () => setCount(0);
  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevState) => prevState - 1);
    }
  };
  const handleChange = (event) => {
    setCount(parseInt(event.target.value));
  };


  return (
    <div className=" mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
      <div className="container-counter flex items-center border-gray-100">
        <button onClick={handleRemove}><FontAwesomeIcon icon={faTrash} className="trash text-zinc-500 hover:text-zinc-900" /></button>
        <button onClick={handleDecrement} className="cursor-pointer rounded-l bg-zinc-100 py-1 px-3.5 duration-100 hover:bg-lime-100 hover:text-lime-900"> - </button>
        <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="text" value={count} min="0" onChange={handleChange} />
        <button onClick={handleIncrement} className="cursor-pointer rounded-r bg-zinc-100 py-1 px-3 duration-100 hover:bg-lime-100 hover:text-lime-900"> + </button>
        <button onClick={() => handleAddToCart(id, url, title, price, count)} className="button-add">Add to cart</button>
      </div>
    </div>
  );
}

export default Counter;*/

// With useReducer

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useReducer } from 'react';
import "./CounterButton.css";

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      if (state > 0) {
        return state - 1;
      }
      return state;
    case 'reset':
      return 0;
    case 'set':
      return action.payload;
    default:
      return state;
  }
};

export const Counter = ({ id, url, title, price, handleAddToCart }) => {
  const [count, dispatch] = useReducer(counterReducer, 1);

  const handleIncrement = () => dispatch({ type: 'increment' });
  const handleRemove = () => dispatch({ type: 'reset' });
  const handleDecrement = () => dispatch({ type: 'decrement' });
  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      dispatch({ type: 'set', payload: value });
    }
  };

  return (
    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
      <div className="container-counter flex items-center border-gray-100">
        <button onClick={handleRemove}><FontAwesomeIcon icon={faTrash} className="trash text-zinc-500 hover:text-zinc-900" /></button>
        <button onClick={handleDecrement} className="cursor-pointer rounded-l bg-zinc-100 py-1 px-3.5 duration-100 hover:bg-zinc-200 hover:text-zinc-900"> - </button>
        <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="text" value={count} min="0" onChange={handleChange} />
        <button onClick={handleIncrement} className="cursor-pointer rounded-r bg-zinc-100 py-1 px-3 duration-100 hover:bg-zinc-200 hover:text-zinc-900"> + </button>
        <button onClick={() => handleAddToCart(id, url, title, price, count)} className="button-add">ADD TO CART</button>
      </div>
    </div>
  );
};

export default Counter;

