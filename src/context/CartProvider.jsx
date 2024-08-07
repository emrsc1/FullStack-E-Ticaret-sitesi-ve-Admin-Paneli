import PropTypes from 'prop-types';
import { useState, createContext, useEffect } from 'react';

export const CartContext=createContext()

const CartProvider=({children})=>{
    const [cartItems,setCartItems]=useState(
        localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]
    )
    
    useEffect(()=>{
       localStorage.setItem('cartItems',JSON.stringify(cartItems))
    },[cartItems])

    const addToCart =(cartItem)=>{
        setCartItems((prevCart)=>[...prevCart,{
            ...cartItem,
            quantity:cartItem.quantity ? cartItem.quantity : 1,
        }])
       }
    const removeFromCart=(itemId)=>{
        const filteredCartItems=cartItems.filter((cartItem)=>{
            return cartItem.id!==itemId;
        })
        setCartItems(filteredCartItems)
    }
    return(
        <CartContext.Provider value={{
            addToCart,
            cartItems,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider

CartProvider.propTypes={
    children:PropTypes.node
}