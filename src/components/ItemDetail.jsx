// import React, { useState, useEffect } from "react";
import React from "react";

import ItemCount from "./ItemCount";

export const ItemDetail = ({ item }) => {
    console.log(item);
    return (
        <div className="box-detail">
            <img src={item.image} alt="item" />
            <div className="content">
                <h3>{item.id}</h3>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <h2>{item.categoria}</h2>
                <span>{item.price}</span>
                <ItemCount stock={item.stock} id={item.id}  />
            </div>
        </div>
    )
}
export default ItemDetail;
