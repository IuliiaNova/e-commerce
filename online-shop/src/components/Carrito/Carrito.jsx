import "./Carrito.css";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Cart = () => {
  
  return (
    <div>
      <Link to="/cart"><FontAwesomeIcon icon={faBagShopping} className="cart-icon"/></Link>
    </div>
  )
}

export default Cart;
