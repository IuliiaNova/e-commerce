import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "../Whishes/wish.css"
import Counter from '../Counter/CounterButton';
import CartContext from '../../context/Cart/CartContext';
import { useContext } from 'react';

export const Wish = ({id, url, title, price, deleteFromWishlist }) => {

  const { count, handleAddToCart }= useContext(CartContext)

  return (
    <div>
      <div id={id} className="div-wish">
      <img src={url} alt="product" className="product-img-item"/>
      <FontAwesomeIcon 
      icon={faHeart} 
      className="product-item-like hover:text-rose-700" 
      onClick={() => deleteFromWishlist(id)}/>
      </div>
      <div className="product-info-container">
        <p>{title}</p>
        <p>{price}€</p>
        <Counter id={id} url={url} title={title} price={price} count={count} handleAddToCart={handleAddToCart }/>
      </div>
    </div>
  );
};

export default Wish;