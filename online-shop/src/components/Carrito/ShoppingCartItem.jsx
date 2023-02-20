import React from "react";


export const ShoppingCartItem = ({ url, title, price, count}) => {
    return (
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-2/5">
              <div className="w-20">
                <img className="h-24" src="" alt="" />
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">{title}</span>
                <img src={url} />
                <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
              </div>
            </div>
            <div className="flex justify-center w-1/5">{count}</div>
            <span className="text-center w-1/5 font-semibold text-sm">{price}</span>
            <span className="text-center w-1/5 font-semibold text-sm">{count}*{price}</span>
          </div>
    )
}

export default ShoppingCartItem;