import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import itemsPromise from "../getFech";


function ItemListContainer({ geeating }) {
    const [prod, setProd] = useState([]);
    const { categoryId } = useParams();
    console.log(categoryId);

    useEffect(() => {
        itemsPromise.then((res) => {
          if (categoryId === undefined) {
            setProd(res);
          } else {
            setProd(res.filter((res) => res.categoria === categoryId));
          }
        });
      }, [categoryId]);
    
      console.log(prod);
    return (
        <section class="menu" id="menu">
            <h2>{geeating}</h2>
            <h3 class="sub-heading"> our menu </h3>
            <h1 class="heading"> today's speciality </h1>
            {prod.length < 1 ?  <h1>Cargando ... </h1> : <ItemList items={prod} />}
        </section>     
    )
}

export default ItemListContainer;





