// import React, { useState, useEffect } from "react";
import React from "react";

import ItemCount from "./ItemCount";

export const ItemDetail = ({ item }) => {
  console.log(item);
  return (
    <section className="about" id="about">
      <h1 className="heading"> Product Detail </h1>
      <div className="row">
        <div className="image">
          <img src={item.image} alt="" />
        </div>
        <div className="content">
          <h3>Product Name: {item.name}</h3>
          <p>Description: {item.description}</p>
          <div className="icons-container">
            <div className="icons">
            <i class="fas fa-sort-numeric-up-alt"></i>
              <span>Product ID: {item.id}</span>
            </div>
            <div className="icons">
              <i className="fas fa-dollar-sign"></i>
              <span>Price: ${item.price}</span>
            </div>
            <div className="icons">
            <i class="fas fa-utensils"></i>
              <span>Category: {item.categoria}</span>
            </div>
          </div>
          <ItemCount stock={item.stock} id={item.id} />
        </div>
      </div>
    </section>
  );
};
export default ItemDetail;
