import React, {createContext, useState, useContext} from 'react'

const StoreContext = createContext()
const useCartContext = () => useContext(StoreContext)

export const StoreProvider = ({children}) =>{

    const [items, setItems] = useState([])
    const [isInCart, setIsInCart] = useState(false)

    const addItem = (item, quantity) => {
        const inCartList = items.find((i) => i.id === item.id)
        setIsInCart(true)
        if(inCartList){
            inCartList.quantity += quantity
            setItems([...items])
        } else {
            setItems([...items, {...item, quantity}])
        }
    }

    const removeItem = (id) => {
        items.splice(
            items.findIndex((i) => i.id === id), 1
        )
        setItems([...items])
        if(items.length === 0){
            setIsInCart(false)
        }
    }

    const totalProductsPrice = () => {
        return items.reduce((add, i) => (add += i.price * i.quantity), 0)
    }

    const cleanListCart = () => {
        setItems([])
    }

     
    return(
        <StoreContext.Provider 
        value = {{ items, addItem, removeItem, totalProductsPrice, isInCart, cleanListCart}}>
            {children}
        </StoreContext.Provider>
    )

}
export default useCartContext