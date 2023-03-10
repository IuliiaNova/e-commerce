import React, { useState } from 'react';
import "./header.css";
import { Cart } from "../Carrito/Carrito";
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuHidden(!isMobileMenuHidden);
  };

  const login = localStorage.getItem('userLogin');

  return (
    <nav className="header nav backdrop-blur w-full ">
      <div className="flex flex-row gap-96">
        <div className="nav-item logo p-8 hidden md:flex items-center h-24 w-68 font-bold">
          <Link to="/" > SIMPLE CARE</Link>
        </div>
           <div className="md:hidden flex items-center">
        <button className="outline-none mobile-menu-button" onClick={toggleMobileMenu}>
          <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
            x-show="!showMenu" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>


      {isMobileMenuHidden ? null : (
        <div className="mobile-menu">
          <ul className="">
            <Link to="/" className="nav-item"> HOME </Link>
            <Link to="/shop" className="nav-item"> SHOP </Link>
            <Link to="/about" className="nav-item"> ABOUT </Link>
          </ul>
        </div>
      )}

        <div className="div-container-nav-links flex gap-14 hidden md:flex items-center w-80 ml-72 p-8">
          
          <Link to="/" className="nav-item"> HOME </Link>
          <Link to="/shop" className="nav-item"> SHOP </Link>
          <Link to='/wishlist' className="nav-item">MYLIST</Link>
          <Link to="/login" className="nav-item"> {login ? "LOGOUT" : "LOGIN"} </Link>
          <Cart />
        </div>
      
      </div>
    </nav>
  )
}
