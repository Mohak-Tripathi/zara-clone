import React from 'react'
import "./Sidebar.css"

function Sidebar({sidebar}) {
  return (
    <div className={sidebar ? "sidebar sidebar--open": "sidebar"}>

<img className="Zara_Logo_Tri"src="https://cdn.cookielaw.org/logos/5435e8e3-1f77-4efd-bb7e-591b5a6e876e/d7899571-c1e4-4d71-8e87-09246e838e5d/d5b1d450-62b7-4f62-94ba-f9835c6495ed/Standard.png" alt="title" />

<div className='Categroy--tripathi'>    
       

       
       <div>WOMEN</div>
       <div>MAN</div>
       <div>KIDS</div>

       </div>    


        <li>NEW</li>
        <li>ISLAND LIFENEW</li>
        <li>BASICS</li>
        <li>LINEN</li>
        <li>BEST SELLERS</li>
        <li>SHIRTS</li>
        <li>T-SHIRTS</li>
        <li>POLO SHIRTS</li>
        <li>TROUSERS</li>
        <li>JEANS</li>
        <li>SHORTS</li>
        <li>JACKETS</li>
        <li>KNITWEAR</li>
        <li>HOODIES | SWEATSHIRTS</li>
        <li>OVERSHIRTS</li>
        <li>BLAZERS</li>
        <li>SUITS</li>  
        <li>GILETS</li>
        <li>COATS | TRENCH COATS</li>
        <li>TRACKSUITS</li>
        <li>SHOES</li>
        <li>BAGS | BACKPACKS</li>  
        <li>ACCESSORIES</li>
        <li>SWIMWEAR</li>
        <li>PERFUMES</li>
        <li>SPECIAL PRICES</li>
       


    </div>
  )
}

export default Sidebar