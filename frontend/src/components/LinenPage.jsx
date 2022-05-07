import React, { useEffect, useState } from 'react'
import "./LinenPage.css"

function LinenPage() {
  const [Linen, setLinen] = useState([])
  

useEffect(()=>{

LineneProduct()
},[])

const LineneProduct = async()=>{

    const data= await fetch("http://localhost:8080/Linen_data")

    const res = await data.json()

    console.log(res)
    setLinen(res)
}


    return (

        <div className='Main_linen_tri'>  


    <div className='render_data_Linen'>
{Linen.map((elem)=>(
<div>

<img className="Linen_image" src={elem.image} alt="" />


<span>{elem.name} </span>
<span>{elem.price} </span>
</div> 

))}



    </div>
    </div>
  )
}

export default LinenPage