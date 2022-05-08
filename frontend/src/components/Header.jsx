import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'
import "./Header.css"

function Header({openSidebar}) {
  // const navi=useNavigate()
    const {cartCount}=useContext(CartContext)
    return (

        <>
<div className="Navbar_Tripathi">  
<div onClick= {openSidebar} className='Left_Navbar'> 
<i className="ri-menu-line "></i>

<img className="Zara_Logo_Tr"src="https://cdn.cookielaw.org/logos/5435e8e3-1f77-4efd-bb7e-591b5a6e876e/d7899571-c1e4-4d71-8e87-09246e838e5d/d5b1d450-62b7-4f62-94ba-f9835c6495ed/Standard.png" alt="title" />
</div> 

<div className='Right_Navbar'>  
<h4>    SEARCH</h4>
 

<div> 
  <Link to="/login">Login</Link>
</div>
<div> HELP </div>
<img src="https://www.zara.com/in/en/shop/cart" alt='' /> 

{/* cart div  */}

      <div><Link to='/cart'>{cartCount}</Link></div>
</div>
</div> 
        </>

    )
}

export default Header