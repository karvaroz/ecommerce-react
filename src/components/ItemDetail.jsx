import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const [irCart, setIrCart] = useState(false);
  console.log(item);

  const onAdd = (contador) => {
    console.log("Udselecciono ", contador);
    setIrCart(true);
  };

  return (
    <div class="box-container">
      <div className="box">
        <div className="image">
          <img src={item.image} alt="item" />
          <a href="#content" className="fas fa-heart"></a>
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
          <h2>{item.categoria}</h2>
          <span className="price">{item.price}</span>
          <div>
            {irCart ? (
              <Link to={`/cart`}>
                <button className="btn">Ir a Cart</button>
              </Link>
            ) : (
              <ItemCount onAdd={onAdd} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ItemDetail;
