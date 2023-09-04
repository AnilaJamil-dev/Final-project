import React, { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

export const CartContext = createContext("Initial Value");

const getCartData = () => {
    const data = localStorage.getItem('cart')
    console.log(data)
    if (data == 'null' || data == null) {
        console.log("I ran")
        return []
    }
    else {
        return JSON.parse(data)
    }
}


let data = {
    cart: getCartData()
};


export default function CartContextProvider({ children }) {
    const [cart_state, cart_dispatch] = useReducer(reducer, data);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart_state.cart))
    }, [cart_state.cart])




    return (
        <CartContext.Provider value={{ cart_state, cart_dispatch }}>
            {children}
        </CartContext.Provider>
    );
}