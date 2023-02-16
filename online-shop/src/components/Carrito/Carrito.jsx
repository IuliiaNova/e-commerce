import "./Carrito.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

export const  Cart = () => {
    return (
      <span className="cart-icon">
          <FontAwesomeIcon icon= { faBagShopping } />
      </span>
    );
  }

  export default Cart;

