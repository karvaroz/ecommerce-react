import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import itemPromise from "../getFech";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    itemPromise.then((resp) => {
      setItem(resp);
    });
  }, []);


  return (
    <>
      <ItemDetail item={item} key={id} />
    </>
  );
};

export default ItemDetailContainer;
