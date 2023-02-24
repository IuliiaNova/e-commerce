import "./Carrito.css";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Cart = () => {
 /* 
 import ShoppingCart from './ShoppingCart';
 const [isCartOpen, setIsCartOpen] = useState(false);

  function openCart() {
    setIsCartOpen(true);
  }

  function closeCart() {
    setIsCartOpen(false);
  }

<button c onClick={openCart}></button>{isCartOpen && (
        <div className="cart-popup">
          <ShoppingCart />
          <button onClick={closeCart}>Close</button>
        </div>
      )}*/
  
  return (
    <div>
      <Link to="/cart"><FontAwesomeIcon icon={faBagShopping} className="cart-icon"/></Link>
  
    </div>
  )

}

export default Cart;
