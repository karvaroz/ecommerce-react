/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import CartWidget from "./CartWidget";



function NavBar() {
  return (
    <>
      <header>
        <a href="#home" className="logo">
          <i className="fas fa-utensils"></i>
          My Shop!
        </a>

        <nav className="navbar">
          <a className="active" href="#Home">
            Home
          </a>
          <a href="#Products">Products</a>
        </nav>

        <div className="icons">
          <i className="fas fa-bars" id="menu-bars"></i>
          <i class="fas fa-search" id="search-icon"></i>
          <a href="#user" className="fas fa-user" />
          < CartWidget /> 
        </div>
      </header>
    </>
  );
}

export default NavBar;
