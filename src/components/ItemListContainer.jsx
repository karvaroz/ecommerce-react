import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = () => {
    function onAdd(cant){
        console.log(cant);
    }

    return (
        <>
            <section class="menu" id="menu">
                <h3 class="sub-heading"> our menu </h3>
                <h1 class="heading"> today's speciality </h1>
                <itemList />
                <ItemCount initial={1} stock={5} onAdd={onAdd} />


            </section>
        </>
    )
}

export default ItemListContainer
