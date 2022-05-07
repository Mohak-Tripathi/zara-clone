import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
    <Link to={`/Linen_data/${elem.id}`}>
      <div key={elem.id}>
            <img className="Linen_image" src={elem.image} alt="" />
            <span>{elem.name} </span>
            <span>{elem.price} </span>
      </div> 
      </Link>
))}
    </div>
    </div>
  )
}

export default LinenPage