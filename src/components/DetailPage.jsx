import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Detail.css'
function DetailPage() {
    const {id} =useParams();
    const [user,setUser]=useState({})
  
    useEffect(() => {
        axios.get(`http://localhost:8080/Polo_shirt/${id}`)
       .then((res)=>{
         setUser(res.data)
         console.log(res.data)
       })}, [])

       const handleProduct=(e)=>{
            // console.log("aftere clicck",e)
           
            //    axios.post(`http://localhost:8080/Polo_shirt`,e)
            //    .then((res)=>{
            //      setUser(res.data)
            //      console.log(res.data)
            //    }
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
