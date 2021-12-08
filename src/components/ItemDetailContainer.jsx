import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import items from "../ListaProductos";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { getFirestore } from "./firebase/firebase";

const ItemDetailContainer = function () {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const itemCollection = db.collection("items");
    const product = itemCollection.doc(id);

    product.get().then((doc) => {
      if (doc.data() === undefined) {
        setLoading(false);
        setError(true);
      } else {
        setLoading(false);
        setItem({ id: doc.id, ...doc.data() });
      }
    });
  }, [id]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <>
          <div>
            <div>
              Oops! No pudimos encontrar el producto que estás buscando.
            </div>
            <div>
              <Link to="/">
                VOLVER HOME
              </Link>
            </div>
          </div>
        </>
      ) : (
        <ItemDetail
          id={item.id}
          name={item.title}
          price={item.price}
          categoryId={item.categoria}
          description={item.description}
          image={item.image}
        />
      )}
    </div>
  );
};
export default ItemDetailContainer;
