import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import items from "../ListaProductos";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setLoading(true);
      setTimeout(() => {
        res(items);
      }, 1000);
    });
    if (categoryId) {
      promesa
        .then((items) => {
          setProductos(
            items.filter((producto) => producto.categoria === categoryId)
          );
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      promesa
        .then((items) => {
          setProductos(items);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [categoryId]);
  console.log(productos);

  return (
    <section class="menu" id="menu">
      <h3 class="sub-heading"> our menu </h3>
      <h1 class="heading"> today's speciality </h1>
      {loading ? <h1>Cargando ... </h1> : <ItemList items={productos} />}
    </section>
  );
};

export default ItemListContainer;

