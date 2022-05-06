import React, { useEffect } from 'react'
import {useState} from "react"

function ProductPageZara() {
    const[Product, setProduct] = useState([])

    console.log(Product)
useEffect(()=>{

getProduct()

}, [])

const getProduct = async() =>{

    const data= await fetch("http://localhost:8888/product")

    const res = await data.json()

    console.log(res)
    setProduct(res)
}
  return (
    <div>
{Product.map((elem)=>(
<img   src={elem.image} />
))}
    </div>
  )
}

export default ProductPageZara