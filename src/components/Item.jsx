import React, { useState, useEffect } from "react";
import { getFetch } from "../getFech";
import ItemCount from "./ItemCount"

function Item() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [bool, setBool] = useState(true)

    useEffect(() => {
        getFetch
            .then(data => {
                console.log('llamada Api')
                setItems(data)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

        return () => {
            console.log('clean')
        }
    }, [])

    console.log('antes del rendering')
    console.log(items)
    return (
        <div class="box-container">
            {loading ? <h1>CARGANDO ... </h1> : items.map(item => <div className="box" key={item.id}>
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
                    {/* < ItemCount /> */}
                    <a href="#cart" className="btn">add to cart</a>
                    <span className="price">{item.price}</span>
                </div>
            </div>
            )}
        </div>
    );
}

export default  Item


