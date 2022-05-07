import React, { useEffect } from 'react'
import {useState} from "react"

import "./ProductPageZara.css"

function ProductPageZara() {
    const[Product, setProduct] = useState([])

    // console.log(Product)
useEffect(()=>{

getProduct()

}, [])

const getProduct = async() =>{

    const data= await fetch("http://localhost:8080/product")

    const res = await data.json()

    console.log(res)
    setProduct(res)
}
  return (

    <div className='Main' >     

    <div className="render-data" >

{Product.map((elem)=>(
<div > 
     <img className='Product_image_tri'  src={elem.image} alt=""/>

<div className='subdivproduct'> 
<div>  {elem.name} </div>
<div>  {elem.price} </div>
</div> 


</div>

))}
 </div>

    </div>
  )
 
}

export default ProductPageZara