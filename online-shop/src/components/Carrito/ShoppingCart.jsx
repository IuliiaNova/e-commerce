import React, { useState, useEffect } from "react";
import ShoppingCartItem from "./ShoppingCartItem";

export const ShoppingCart = ({ handleRemove, handleChange }) => {

const [cartItems, setItems] = useState([]);

  useEffect(() => {
    const localStorageData = localStorage.getItem('cartItems');
    if (localStorageData) {
      const parsedData = JSON.parse(localStorageData);
      setItems(parsedData);
    }
  }, []);


  function handleRemove(id) {
    const items = cartItems.filter((item) => (item.id !== id));
    setItems(items);


    const cartItemsFromStorage = JSON.parse(localStorage.getItem('cartItems'));
    const index = cartItemsFromStorage.findIndex((item) => item.id === id);
  
    if (index !== -1) {
      cartItemsFromStorage.splice(index, 1);
      localStorage.setItem('cartItems', JSON.stringify(cartItemsFromStorage));
    }
  }

  let totalCost = 0;
  cartItems.forEach((item) => {
    totalCost += item.price * item.count;
  });

const totalCostForm = totalCost.toFixed(2);


  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold  text-olive">Shopping Cart</h1>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
          </div>

          <div className="shopping-items">
      {cartItems.length > 0 ? (     
        cartItems.map((item) => (
        <ShoppingCartItem
          key={item.id}
          url={item.url}
          title={item.title}
          price={item.price}
          count={item.count}
          quantity={item.quantity}
          handleRemove={() => handleRemove(item.id)}
          handleChange={(event) => handleChange(event, item.id)}
        />
        ))
        ) : (
          <div className="col mb-4">
            <h4>It is time to buy!</h4>
          </div>
           )}  
    </div>
       </div>

        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold  border-b pb-8">Order Summary</h1>
        
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option value={5}>Standard - $5.00</option>
              <option value={10}>Express - $10.00</option>
            </select>
          </div>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase flex flex-col">
              <span className="text-gray-50">Total cost</span>
              <span className="text-gray-50">{totalCostForm}</span>
            </div>
            <button className="bg-pink-500  font-semibold hover:bg-rose-300 py-3 text-sm text-white uppercase w-full">Buy</button>
          </div>
        </div>

      </div>
    </div>
    )
}

export default ShoppingCart;