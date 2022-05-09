import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";

export const CartContext=createContext();
export const CartContextProvider=({children})=>{

    const[cartCount,setCartCount]=useState(0);

    const[total,setTotal]=useState(0);

    const[CartData,setCartData]=useState([]);



    let  token =localStorage.getItem("token")
useEffect(() => {
    getData()
;}, []);
const getData=()=>{

    let getgData = async () => {
        try {
         let data = await fetch("https://zaraclone.herokuapp.com/carts", {
            method: "GET",
    
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
    
          data = await data.json();
          console.log(data);
   var sum=0;
          //  setTotal(data)
          
         for(var i=0;i<data.length;i++){
   sum=sum+data[i].price
         } 
         setCartData(data)
         setTotal(sum)

        setCartCount(data.length)
        
        } catch (error) {
          console.log(error);
        }
      };
}

     return <CartContext.Provider value={{getData,cartCount,setCartCount,total,setTotal}}>{children}</CartContext.Provider>
}