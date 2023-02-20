import "./Carrito.css";
import React, { useState } from 'react';
import ShoppingCart from './ShoppingCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

export const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  function openCart() {
    setIsCartOpen(true);
  }

  function closeCart() {
    setIsCartOpen(false);
  }

  return (
    <div>
      <button className="cart-icon" onClick={openCart}><FontAwesomeIcon icon={faBagShopping} /></button>

      {isCartOpen && (
        <div className="cart-popup">
          <ShoppingCart />
          <button onClick={closeCart}>Close</button>
        </div>
      )}
    </div>
  )

}

export default Cart;

