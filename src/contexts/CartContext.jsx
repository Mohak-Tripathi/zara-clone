import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CartContext=createContext()

export const CartContextProvider=({children})=>{
        const [cartData,setCartData]=useState([]);
        useEffect(() => {
            axios.get(`http://localhost:8080/cart/${id}`)
           .then((res)=>{
             setCartData(res.data)
             console.log(res.data)
           })}, [])
    return <CartContext.Provider value={""}>{children}</CartContext.Provider>
}