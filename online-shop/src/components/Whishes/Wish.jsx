import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "../Whishes/wish.css"

export const Wish = ({id, url, title, price, deleteFromWishlist }) => {

  /*const [wishlist, setWishlist] = useState([]);
  
  const deleteFromWishlist = (id) => {
    const wishItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    const index = wishItems.findIndex((wishItem) => wishItem.id === id);
  
    if (index !== -1) {
      // Item exists in wishlist, so remove it
      wishItems.splice(index, 1);
      // Update the wishlist state with the new array
      setWishlist([...wishItems]);
      // Save the updated wishlist in local storage
      localStorage.setItem('wishlist', JSON.stringify(wishItems));
    }
  };*/

  

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
        <button>Buy</button>
      </div>
    </div>
  );
};

export default Wish;