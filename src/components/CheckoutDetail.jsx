import React, { useState, useContext, useEffect } from "react";
import { useCartContext } from "../context/cartContext.js";
import { Link } from "react-router-dom";

const CheckoutDetail = function ({ getItems, getTotal }) {
  const { items, addToCart, removeItem } = useCartContext();

  useEffect(() => {
    getItems(items);
    getTotal(items);
  }, [items]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item) => (
              <tr>
                <td>
                  <p>{item.name}</p>
                </td>
                <td>
                  <p>{item.quantity}</p>
                </td>
                <td>
                  <p>$ {item.price}</p>
                </td>
                <td>
                  <p>$ {item.quantity * item.price}</p>
                </td>
                <td>
                  <i
                    onClick={() => removeItem(item.productId)}
                    className="fa fa-trash"
                  ></i>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>
                <div>
                  Oops! Todavía no agregaste productos al carrito.
                  <Link to="/">Comprar productos</Link>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
        <h5>Total $ {items}</h5>
      </div>
    </>
  );
};

export default CheckoutDetail;
