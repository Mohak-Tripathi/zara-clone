import React, { useEffect } from 'react'

import {useState} from "react"
import { Link } from 'react-router-dom'
import "./PoloShirt.css"

function PoloShirt() {
  
    const [polo, setPolo]= useState([])

    useEffect(()=>{

        getdatapolo()

    },[])

    const getdatapolo= async()=>{
        

        const data= await fetch("http://localhost:8080/Polo_shirt")

    const res = await data.json()

    console.log(res)
    setPolo(res)
    }
  
  
    return (


        <div className='Main_poloShirt_tri'>  


    <div className='render_data_Polo'>
{polo.map((elem)=>(
<Link to={`/Polo_shirt/${elem.id}`}>
<div>
<img className="polo_image" src={elem.image} alt="" />
<span>{elem.name} </span>
<span>{elem.price} </span>
</div> 
</Link>

))}



    </div>
    </div>
  )
}


export default PoloShirt