import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../CartContext/AuthContext';
import { CartContext } from '../CartContext/CartContext';
import './Detail.css'
function DetailPage() {
    const {id} =useParams();
    const [user,setUser]=useState({})
    const {cartCount,setCartCount,total,setTotal}=useContext(CartContext);
    const navigate=useNavigate();
    // const {total,setTotal}=useContext()
    const {Auth}=useContext(AuthContext)
    // useEffect(() => {
    //     axios.get(`http://localhost:8080/Polo_shirt/${id}`)
    //    .then((res)=>{
    //      setUser(res.data)
    //      console.log(res.data)
    //    })}, [])

      //  useEffect(() => {
      //   axios.get(`http://localhost:8080/product/${id}`)
      //  .then((res)=>{
      //    setUser(res.data)
      //    console.log(res.data)
      //  })}, [])

      //  useEffect(() => {
      //   axios.get(`http://localhost:8080/Linen_data/${id}`)
      //  .then((res)=>{
      //    setUser(res.data)
      //    console.log(res.data)
      //  })}, [])

       useEffect(() => {
        axios.get(`https://zaraclone.herokuapp.com/womens/${id}`)
       .then((res)=>{
         setUser(res.data)
         console.log(res.data)
       })}, [])

      //  useEffect(() => {
      //   axios.get(`http://localhost:8080/KidsData/${id}`)
      //  .then((res)=>{
      //    setUser(res.data)
      //    console.log(res.data)
      //  })}, [])

       const handleProduct=(user)=>{
            console.log("aftere clicck",user)
                axios.post(`http://localhost:8080/cart`,user);
                setCartCount(cartCount + 1);
                setTotal((prev)=>prev + Number((user.price)));
                // alert("")
              }
  return (
    <>
      <div style={{display:"flex", gap:"20px", padding:"40px"}} >
        <div style={{width:"300px"}}>
        <h5>MATERIALS, CARE AND ORIGIN</h5>
        <p style={{scrollBehaviour:"smooth"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus itaque harum qui eos, quos corrupti cum autem suscipit nam perspiciatis minima excepturi cupiditate delectus asperiores doloremque eius maiores mollitia accusantium!</p>  
        </div>
      <div style={{display:"flex", flexDirection:"column",margin:"auto"}}>
             {
            <div className='detail_div' style={{display:"flex", flexDirection:"column"}}>
            <img className="detail_img" src={user.image} alt="" />
            <span> {user.name} </span>
            <span>Price: {user.price} </span>
            {Auth?<button onClick={(e)=>handleProduct(user)}>Add to Cart</button>
            :<button onClick={(e)=>{alert("login or register before proceed to cart"); navigate('/login')}}>Add to Cart</button>}
            </div>               
        }
        <div></div>
    </div>
    </div>
    </>
  )
}

export default DetailPage
