import React, { useEffect } from 'react'

import {useState} from "react"
import "./PoloShirt.css"

function PoloShirt() {
  
    const [polo, setPolo]= useState([])

    useEffect(()=>{

        getdatapolo()

    },[])

    const getdatapolo= async()=>{
        

        const data= await fetch("http://localhost:8890/Polo_shirt")

    const res = await data.json()

    console.log(res)
    setPolo(res)
    }
  
  
    return (


        <div className='Main_poloShirt_tri'>  


    <div className='render_data_Polo'>
{polo.map((elem)=>(
<div>

<img className="polo_image" src={elem.image} alt="" />


<span>{elem.name} </span>
<span>{elem.price} </span>
</div> 

))}



    </div>
    </div>
  )
}


export default PoloShirt