import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";

export const CartContext=createContext();
export const CartContextProvider=({children})=>{
    const[cartCount,setCartCount]=useState(0);
    const[total,setTotal]=useState(0);
   


    
     return <CartContext.Provider value={{cartCount,setCartCount,total,setTotal}}>{children}</CartContext.Provider>
}