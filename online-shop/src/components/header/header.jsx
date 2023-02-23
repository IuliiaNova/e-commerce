import React from 'react';
import "./header.css";
import Search from "../Search/Search";
import { Cart } from "../Carrito/Carrito";
import { Link } from 'react-router-dom';


export const Header = () => {
    return (
        <main className="header">
        <nav className="nav">
            <div className="div-container-nav-links">
            <Link to="/" className="nav-item"> HOME </Link>
            <Link to="/shop" className="nav-item"> SHOP </Link>
            <Link to="/about" className="nav-item"> ABOUT </Link>
            </div>
            <h1 className="page-name">SimpleCare</h1>
            <div className="div-nav-components-icons">
            <Search />
            <Cart  />
            </div>
        </nav>
        </main>
    )
}
