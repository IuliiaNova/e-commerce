import React, { useState } from 'react';
import "./header.css";
import Search from "../Search/Search";
import { Cart } from "../Carrito/Carrito";
import { Link } from 'react-router-dom';
import flower from "../image/flower.png"

export const Header = () => {
  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuHidden(!isMobileMenuHidden);
  };

  return (
    <main className="header">
      <nav className="nav backdrop-blur bg-gray-100 bg-opacity-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <a href="#" className="flex items-center py-4 px-2">
                  <img src={flower} alt="Logo" className="h-8 w-8 mr-2" />
                </a>
              </div>
              <div className="div-container-nav-links hidden md:flex items-center space-x-1">
                <Link to="/" className="nav-item"> HOME </Link>
                <Link to="/shop" className="nav-item"> SHOP </Link>
                <Link to="/about" className="nav-item"> ABOUT </Link>
                <Search />
                <Cart />
              </div>
            </div>


            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button" onClick={toggleMobileMenu}>
                <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                  x-show="!showMenu" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
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
            </nav>
            </main>

        )
    }
