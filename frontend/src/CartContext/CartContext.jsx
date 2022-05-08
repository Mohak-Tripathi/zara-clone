import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";

export const CartContext=createContext();
export const CartContextProvider=({children})=>{
    const[cartCount,setCartCount]=useState(0);
    // // const [length,setLength]=useState(user.length)
    // useEffect(() => {
    //     axios.get(`http://localhost:8080/cart`)
    //    .then((res)=>{
    //      setUser(res.data.length);
    //      console.log(res.data.length)
    //    })}, [])
     return <CartContext.Provider value={{cartCount,setCartCount}}>{children}</CartContext.Provider>
}