import React from 'react';
import Counter from "../Counter/CounterButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


export const ProductItem = ({ id, url, title, price, count, handleChange, handleRemove }) => {


  return (
    <div>
      <div className="div-image-product">
      <img src={url} alt="product" className="product-item"/>
      <FontAwesomeIcon icon={faHeart} className="product-item-like hover:text-rose-700"/>
      </div>
      <div className="product-info-container">
        <p>{title}</p>
        <p>{price}€</p>
        <Counter id={id} url={url} title={title} price={price} count={count} handleChange={handleChange} handleRemove={handleRemove}  />
      </div>
    </div>
  );
};

export default ProductItem;