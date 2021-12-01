// import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";

// import cartContext from "../context/cartContext";
// import CartState from "../context/CartState";

export default function Item({ item }) {
  return (
    <>
      <div class="box-container">
        <div className="box" key={item.id}>
          <div className="image">
            <img src={item.image} alt="item" />
            <a href="#content" className="fas fa-heart">
              {" "}
            </a>
          </div>
          <div className="content">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <Link to={`/category/${item.categoria}`}>
              <p>Categoría: {item.categoria}</p>
            </Link>
            <span className="price">${item.price} </span>
            <br />
            <Link to={`/item/${item.id}`} className="btn">
              Ver Más
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
