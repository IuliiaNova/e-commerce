import React from "react";

export const ShoppingCartItem = ({id, title, url, price, count, handleRemove}) => {

    return (
        <div id={id} className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-2/5">
              <div className="flex flex-col justify-between items-center ml-4">
                <span className="font-bold text-sm">{title}</span>
                <img src={url} alt="your-product" className="w-16 m-auto mt-2" />
                <button onClick={handleRemove} className="font-semibold hover:text-red-500 text-gray-500 text-xs mt-2">Remove</button>
              </div>
            </div>
            <div className="flex justify-center w-1/5">{count}</div>
            <span className="text-center w-1/5 font-semibold text-sm">{price}€</span>
            <span className="text-center w-1/5 font-semibold text-sm">{(count * price).toFixed(2)}€</span>
          </div>
    )
}

export default ShoppingCartItem;