import React, {useContext} from "react";
import CartContext from "../../context/Cart/CartContext";
import Wish from "./Wish";


const WishList = ()=>{

    const { wishlist, setWishlist, deleteFromWishlist } = useContext(CartContext);

    return (
        <div>
            <h2> Here your wish list</h2>
        <div className="wishlist-items flex flex-row justify-center gap-10">
        {wishlist.length > 0 ? (
          wishlist.map((item) => (
            <Wish
              key={item.id}
              id={item.id}
              url={item.url}
              title={item.title}
              price={item.price}
              deleteFromWishlist= {deleteFromWishlist}
            />
          ))
        ) : (
          <div className="col mb-4">
            <h4>It is time to make a wish!</h4>
          </div>
        )}
      </div>
      </div>
    )

}

export default WishList;