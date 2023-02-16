import "./header.css";
import Logo from "../image/logo.png";
import Search from "../Search/Search";
import { Cart } from "../Carrito/Carrito";

//import {Search} from "../Search/Search.jsx";
//import {Carrito} from "../Carrito/Carrito.jsx";

export const Header = () => {
    return (
        <header className="header">
        <nav className="nav">
            <a href="/" className="nav-item">HOME</a>
            <a href="/" className="nav-item">ABOUT</a>
            <a href="/" className="nav-item">CARE</a>
            <img src={Logo} className="nav-logo" alt="logo"></img>
            <Search />
            <Cart />
            
        </nav>
        </header>
    )
}
