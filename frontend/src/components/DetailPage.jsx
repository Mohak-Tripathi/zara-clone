import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import './Detail.css'
function DetailPage() {
    const {id} =useParams();
    const [user,setUser]=useState({})
    const {cartCount,setCartCount}=useContext(CartContext)
    useEffect(() => {
        axios.get(`http://localhost:8080/Polo_shirt/${id}`)
       .then((res)=>{
         setUser(res.data)
         console.log(res.data)
       })}, [])

       const handleProduct=(user)=>{
            console.log("aftere clicck",user)
                axios.post(`http://localhost:8080/cart`,user);
                setCartCount((prev)=>prev+1);
              //  .then((res)=>{          
              //    console.log("after post",res)
              //  }
       }
  return (
      <div style={{display:"flex", flexDirection:"column",margin:"auto"}}>
             { 
            <div className='detail_div' style={{display:"flex", flexDirection:"column"}}>
            <img className="detail_img" src={user.image} alt="" />
            <span> {user.name} </span>
            <span>Price: {user.price} </span>
            <button onClick={(e)=>handleProduct(user)}>Add to Cart</button>
            </div>                  
        }
     
    </div>
  )
}

export default DetailPage
