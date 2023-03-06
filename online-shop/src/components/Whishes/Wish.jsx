import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export const Wish = ({id, url, title, price }) => {

  const [wishlist, setWishlist] = useState([]);
  
  const deleteFromWishlist = (id, url, title, price) => {
    setWishlist([...wishlist, { id, url, title, price }]);
  };

  return (
    <div>
      <div id={id} className="div-wish">
      <img src={url} alt="product" className="product-item"/>
      <FontAwesomeIcon icon={faHeart} className="product-item-like hover:text-rose-700" onClick={() => deleteFromWishlist(id, title, price)}/>
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