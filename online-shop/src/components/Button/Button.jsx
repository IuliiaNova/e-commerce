import React from "react";

export function AddToCart({ type = "button", children, ...props }) {
  return (
    <button type={type} {...props} className="">
      {children}
    </button>
  );
}
