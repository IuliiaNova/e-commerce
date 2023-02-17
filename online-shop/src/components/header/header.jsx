import "./header.css";
import Logo from "../image/logo.png";
import Search from "../Search/Search";
import { Cart } from "../Carrito/Carrito";


export const Header = () => {
    return (
        <header className="header">
        <nav className="nav">
            <div className="div-container-nav-links">
            <a href="/" className="nav-item">HOME</a>
            <a href="/" className="nav-item">ABOUT</a>
            <a href="/" className="nav-item">CARE</a>
            </div>
            <img src={Logo} className="nav-logo" alt="logo"></img>
            <div className="div-nav-components-icons">
            <Search />
            <Cart  />
            </div>
        </nav>
        </header>
    )
}
