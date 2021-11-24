import React from 'react'
import ItemCount from './ItemCount'
import Item from './Item'

const ItemListContainer = () => {
    return (
        <>
            <section class="menu" id="menu">
                <h3 class="sub-heading"> our menu </h3>
                <h1 class="heading"> today's speciality </h1>
                <Item />
            </section>
        </>
    )
}

export default ItemListContainer
