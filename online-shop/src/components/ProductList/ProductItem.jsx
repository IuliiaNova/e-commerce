import "./products.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


export const ProductItem = ({ item }) => {

  const { url, title, price, rating } = item;

  return (
    <div>
      <div className="div-image-product">
      <img src={url} alt="image-product" className="product-item"/>
      <FontAwesomeIcon icon={faHeart} className="product-item-like"/>
      </div>
      <div className="product-info-container">
        <p>{title}</p>
        <p>{price}€</p>
        <p>{rating}</p>
      </div>
    </div>
  );
};