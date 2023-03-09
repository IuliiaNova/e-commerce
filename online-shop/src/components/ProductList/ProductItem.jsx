import React, { useContext } from 'react';
import Counter from "../Counter/CounterButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../context/Cart/CartContext';
import { Link } from 'react-router-dom';


export const ProductItem = ({ id, url, title, price, count, handleChange, handleRemove }) => {

  const { handleAddToCart, addToWishlist } = useContext(CartContext);

  return (
    
      <div>
        <div id={id} className="div-image-product">
          <Link to={`/productpage/${id}`} >
          <img src={url} alt="product" className="product-item" />
          </Link>
          <FontAwesomeIcon icon={faHeart} className="product-item-like text-white border-2 border-white  pl-2 hover:text-rose-700" onClick={() => addToWishlist(id, url, title, price)} />
        </div>
        <div className="product-info-container">
          <p>{title}</p>
          <p>{price}€</p>
          <Counter id={id} url={url} title={title} price={price} count={count} handleChange={handleChange} handleRemove={handleRemove} handleAddToCart={handleAddToCart} children={<FontAwesomeIcon icon={faHeart} className="product-item-like text-white border-2 border-white  pl-2 hover:text-rose-700" onClick={() => addToWishlist(id, url, title, price)} />}/>
        </div>
      </div>
    
  );
};

export default ProductItem;