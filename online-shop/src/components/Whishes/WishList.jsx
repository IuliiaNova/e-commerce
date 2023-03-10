import React, {useContext} from "react";
import CartContext from "../../context/Cart/CartContext";
import Wish from "./Wish";


const WishList = ()=>{

    const { wishlist, deleteFromWishlist } = useContext(CartContext);

    return (
        <div className="m-8">
            <h2 className="text-2xl w-full p-6 text-center font-semibold"> Here your wish list</h2>
        <div className="wishlist-items flex flex-row justify-center gap-10 m-8">
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
            <h4 className="text-2xl w-full p-6 text-center">It is time to make a wish!</h4>
          </div>
        )}
      </div>
      </div>
    )

}

export default WishList;