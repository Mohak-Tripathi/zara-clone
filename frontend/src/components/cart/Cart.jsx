import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext/CartContext';
import CardPayment from '../CardPayment';
import '../Detail.css';
import Payment from '../Payment';
function Cart() {
    const [cartData,setCartData]=useState([]);
    const {cartCount,setCartCount}=useContext(CartContext);
    useEffect(() => {
      cartItems();
       }, [])
       const cartItems=()=>{
        axios.get(`http://localhost:8080/cart`)
        .then((res)=>{
          setCartData(res.data)
          console.log(res.data)
        })
       }
       const handleDelete=(user)=>{
        //  console.log(user)
        axios.delete(`http://localhost:8080/cart/${user.id}`)
        .then((res)=>{console.log("afterdelete",res); cartItems();})
        .then(() => console.log({ status: 'Delete successful' }));
        // setCartData(...cartData)
      cartCount>0?setCartCount(cartCount-1):setCartCount(cartCount);
       }

  return (
    <>
    <div style={{display:"grid", gridTemplateColumns:"repeat(2,450px)",gridTemplateRows:"repeat(200px)",justifyContent:"space-around",gap:"10px"}}>
    {cartData.map((user)=>
        <div key={user.id}  style={{display:"flex", gap:"10px"}} >
            <img className="detail_img" src={user.image} alt="" />
            <div style={{display:"flex", gap:"10px",flexDirection:"column"}}>
            <p> {user.name} </p>
            <p>Price: {user.price} </p>
            <button onClick={()=>handleDelete(user)}>Delete</button>
            </div>
            
            {/* <button onClick={(e)=>handleProduct(user)}>Add to Cart</button> */}
            </div> 
      )}
    </div>
  <Link to={'/payment'}><button>Continue to Payment</button></Link>
    </>
  )
}

export default Cart
