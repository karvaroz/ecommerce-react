import React from "react";
import CartWidget from "./CartWidget";


function NavBar() {
  return (
    <>
      <header>
        <a href="#home" className="logo">
          <i className="fab fa-pagelines"></i>
          Green Shop!
        </a>

        <nav className="navbar">
          <a className="active" href="#Home">
            home
          </a>
          <a href="#PersonalCare">Personal Care</a>
          <a href="#Makeup">Makeup</a>
          <a href="#Cleaning">Cleaning</a>
          <a href="#Others">Others</a>
        </nav>

        <div className="icons">
          <i className="fas fa-bars" id="menu-bars"></i>
          <i className="fas fa-search" id="search-icon"></i>
          <a href="#user" className="fas fa-user"></a>
          < CartWidget /> 
        </div>
      </header>
    </>
  );
}

export default NavBar;
