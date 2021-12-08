import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header>
        <Link to="/" className="logo">
          <i className="fas fa-utensils"></i>
          My Shop!</Link>
        <nav className="navbar">
          <Link to="/" className="active">Home</Link>
          <Link to="/category/Desayuno">Desayuno</Link>
          <Link to="/category/Almuerzo">Almuerzo</Link>
          <Link to="/category/Postre">Postre</Link>
          <Link to="/category/Bebida">Bebida</Link>
        </nav>
        <div className="icons">
          <i className="fas fa-bars" id="menu-bars"></i>
          <i class="fas fa-search" id="search-icon"></i>
          <a href="#home" className="fas fa-user"> </a>
          < CartWidget />
        </div>
      </header>
    </>
  );
}

export default NavBar;
