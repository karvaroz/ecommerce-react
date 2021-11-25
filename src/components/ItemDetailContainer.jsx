import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import itemsPromise from "../getFech";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    itemsPromise.then((resp) => {
      setItem(resp);
    });
  }, []);

  console.log(item);

  return (
    <>
      <ItemDetail item={item} />
    </>
  );
};

export default ItemDetailContainer;
