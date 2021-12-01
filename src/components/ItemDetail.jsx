// import React, { useState, useEffect } from "react";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import useCartContext from "../context/cartContext";

export const ItemDetail = ({ item }) => {
  // const [irCart, setIrCart] = useState(false);

  // const onAdd = (contador) => {
  //   console.log("Ha seleccionado ", contador);
  //   setIrCart(true);
  // };
  const stocks = item.stock;
  const initial = 1;
  const [add, setAdd] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartContext();

  const itemQuantity = (count) => {
    setQuantity(count);
  };

  const addToCart = () => {
    addItem(item, quantity);
    setAdd(true);
    console.log("Ha seleccionado ", quantity);
  };

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
          {/* {irCart ? (
          <Link to={`/cart`}>
            <button>Ir a Cart</button>
          </Link>
        ) : (
          <ItemCount onAdd={onAdd} />
        )} */}
          <ItemCount stocks={stocks} initial={initial} onAdd={itemQuantity} />
          <button className="btn" onClick={addToCart}>
            Agregar al Carrito
          </button>
          {add ? (
            <Link to={"/cart"}>
              <button className="btn">Comprar Ahora</button>
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
};
export default ItemDetail;
