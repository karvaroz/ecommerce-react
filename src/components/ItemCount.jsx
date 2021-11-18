import {useState} from 'react'

const ItemCount = (initial, stock, onAdd) => {

    const [count, setCount] = useState(initial)

    function Add() {
        if (count<stock){
            setCount(count + 1)
        }   
    }

    function Remove() {
        if (count > 0){
            setCount(count - 1)
        }   
    }

    function Add_to_Cart() {
        onAdd(count)
        setCount(1)
        
    }


    return (
        <>
            <section>
                <button onClick={Add}>+</button>
                <button onClick={Remove}>-</button>
                {count}
                <button onClick={Add_to_Cart}>Add to cart</button>

            </section>
            
        </>
    )
}

export default ItemCount













































// import React from 'react'

// function ItemCount({ stock, initial, onAdd}) {



//     const initial = (
//         items = [
//             (id: 1, name: 'item1', price: 100),
//             (id: 2, name: 'item3', price: 100),
//             (id: 3, name: 'item4', price: 100),
//             (id: 4, name: 'item5', price: 100),

//         ],
//         cart:[],
//     )

//     const ShoppingCart = () => {
//         <div>
//             <h2>Carrito de compras</h2>
//             <h3>Productos</h3>
//         </div>
//     }
//     export const TYPES = {
//         ADD_TO_CART = 'ADD_TO_CART',
//         REMOVE_ONE_FROM_CART = 'REMOVE_ONE_FROM_CART',
//         REMOVE_ALL_FROM_CART = 'REMOVE_ALL_FROM_CART',
//         CLEAR_CART = 'CLEAR_CART'


//     }

//     <ItemCount stock="5" initial="1" />
// }

// export default ItemCount;
