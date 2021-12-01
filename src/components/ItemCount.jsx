import React, { useState } from "react";

const ItemCount = ({ onAdd }) => {
  const [contador, setContador] = useState(1);

  const incrementar = () => {
    let max = 10;
    if (contador < max) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    let min = 1;
    if (contador > min) {
      setContador(contador - 1);
    }
  };
  const handlerOnAdd = () => {
    onAdd(contador);
  };

  return (
    <>
      <div className="content">
        <button className="btn" onClick={decrementar}>-</button>
        <span className="price-detail">{contador}</span>
        <button className="btn" onClick={incrementar}>+</button>
        <button className="btn" onClick={handlerOnAdd}>Agregar al carrito</button>
      </div>
    </>
  );
};
export default ItemCount;














































// import React from 'react'

// function ItemCount({ stock, initial, onAdd}) {



//     const initial = (
//         items = [
//             (id: 1, name: 'item1', price: 100),
//             (id: 2, name: 'item3', price: 100),
//             (id: 3, name: 'item4', price: 100),
//             (id: 4, name: 'item5', price: 100),

//         ],
//         cart:[],
//     )

//     const ShoppingCart = () => {
//         <div>
//             <h2>Carrito de compras</h2>
//             <h3>Productos</h3>
//         </div>
//     }
//     export const TYPES = {
//         ADD_TO_CART = 'ADD_TO_CART',
//         REMOVE_ONE_FROM_CART = 'REMOVE_ONE_FROM_CART',
//         REMOVE_ALL_FROM_CART = 'REMOVE_ALL_FROM_CART',
//         CLEAR_CART = 'CLEAR_CART'


//     }

//     <ItemCount stock="5" initial="1" />
// }

// export default ItemCount;
