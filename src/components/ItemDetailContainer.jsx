import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import items from "../ListaProductos";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [productoIndividual, setProductoIndividual] = useState({});
  const [loading, setLoading] = useState(true);

  const { itemIdParams } = useParams();

  useEffect(() => {
    const promesaIndividual = new Promise((res, rej) => {
      setTimeout(() => {
        res(items.find(producto => producto.id === itemIdParams))

      }, 2000)
    })
    promesaIndividual.then((prodEncontrado) => {
      console.log('OK');
      setProductoIndividual(prodEncontrado)
    })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false)
      }
      )
  }, [itemIdParams])

  return (
    <>
      <p>
        Lista
      </p>
      <div >
        {loading
          ?
          <h1>Está ejecutandose la promesa del detalle</h1>
          :
          <ItemDetail item={productoIndividual} />}
      </div>
    </>
  );
};

export default ItemDetailContainer;
