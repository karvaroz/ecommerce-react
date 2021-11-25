// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  const [irCart, setIrCart] = useState();
  // console.log(item);
  const onAdd = (contador) => {
    console.log("Udselecciono ", contador);
    setIrCart(true);
  };

  return (
    <div className="box-detail">
      <div>
        <div>
          <img src={item.image} alt="item" /> - imagen
          {/* {console.log(item.id) } */}
        </div>
        <div className="content">
          <h3>{item.id} - id</h3>
          <h3>{item.name} - nombre</h3>
          <p>{item.description} - descripcion</p>
          <h2>{item.categoria} - categoria</h2>
          <span>{item.price} - precio</span>
        </div>
      </div>
      <div>
        {irCart ? (
          <Link to={`/cart`}>
            <button>Ir al Carrito</button>
          </Link>
        ) : (
          <ItemCount onAdd={onAdd} />
        )}
      </div>
    </div>
  )
}
export default ItemDetail;
