import React, { useContext } from 'react';
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../CartContext/AuthContext';
import { CartContext } from '../CartContext/CartContext';
const Navbar = ({name}) => {
 const {Auth,setAuth}=useContext(AuthContext);
 const navigate=useNavigate();
 const {cartCount,setCartCount}=useContext(CartContext);
  return (
      <>
    

<div className='Nav-container'>


    <div className="nav-left">
    <div className='silder-code-cotainer'>
<div className='first-nav-btn'>
    <button className="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">☰</button>
    
</div>
<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
   <div>
      <div class className="inner-slide-btn">
          <Link to="\women"  className='inner-slide-link-btn'>Women</Link>
          <Link to="\men"  className='inner-slide-link-btn'>MEN</Link>
          <Link to="\kid" className='inner-slide-link-btn'>KID</Link>
      </div>
      <div className='slide-page-links-btn'>
     <Link to="\" className='inner-slide-link-btn'> <li>NEW</li></Link>
     <Link to="\" className='inner-slide-link-btn'> <li>ISLAND LIFENEW</li></Link>
     <Link to={"\product"} className='inner-slide-link-btn'><li>BASICS</li></Link>
     <Link to={"\LinenPage"} className='inner-slide-link-btn'><li>LINEN</li></Link>
     <Link to={"\PoloPage"} className='inner-slide-link-btn'><li>POLO SHIRTS</li></Link>
       
     <Link to="\" className='inner-slide-link-btn'><li>BEST SELLERS</li></Link>
     <Link to="\" className='inner-slide-link-btn'><li>SHIRTS</li></Link>
     <Link to="\" className='inner-slide-link-btn'><li>T-SHIRTS</li></Link>
       
     <Link to="\" className='inner-slide-link-btn'><li>TROUSERS</li></Link>
     <Link to="\" className='inner-slide-link-btn'><li>JEANS</li></Link>
     <Link to="\" className='inner-slide-link-btn'><li>SHORTS</li></Link>
     <Link to="\" className='inner-slide-link-btn'><li>JACKETS</li></Link>
     <Link to="\" className='inner-slide-link-btn'><li>KNITWEAR</li></Link>
     <Link to="\" className='inner-slide-link-btn'><li>HOODIES | SWEATSHIRTS</li></Link>
     <Link to="\" className='inner-slide-link-btn'><li>OVERSHIRTS</li></Link>
     <Link to="\" className='inner-slide-link-btn'><li>BLAZERS</li></Link>
     <Link to="\" className='inner-slide-link-btn'><li>SUITS</li>  </Link>
     <Link to="\" className='inner-slide-link-btn'><li>GILETS</li></Link>
     <Link to="\" className='inner-slide-link-btn'><li>COATS | TRENCH COATS</li></Link>
     <Link to="\" className='inner-slide-link-btn'><li>TRACKSUITS</li></Link>
     <Link to="\" className='inner-slide-link-btn'><li>SHOES</li></Link>
     <Link to="\" className='inner-slide-link-btn'><li>BAGS | BACKPACKS</li></Link>  
     <Link to="\" className='inner-slide-link-btn'><li>ACCESSORIES</li></Link>
     <Link to="\" className='inner-slide-link-btn'><li>SWIMWEAR</li></Link>
     <Link to="\" className='inner-slide-link-btn'><li>PERFUMES</li></Link>
     <Link to="\" className='inner-slide-link-btn'><li>SPECIAL PRICES</li></Link>
      </div>
   </div>
  </div>
</div>
    </div>


    <div className='logo-nav'>
    <Link to="/home" className="log-iamg"><img 
    width="100%"
    height="100%"
     src="https://cdn.cookielaw.org/logos/5435e8e3-1f77-4efd-bb7e-591b5a6e876e/d7899571-c1e4-4d71-8e87-09246e838e5d/d5b1d450-62b7-4f62-94ba-f9835c6495ed/Standard.png" alt="title" /></Link>
    </div>   
    </div>
     <div className='nav-right'>
         <div className='right'>
    <input placeholder='Search' className='nav-search'></input>
    <button className="btn-1 " type="button">
     
  {!Auth?<Link to="/login">Login</Link>:
  <div style={{
                width:"fitContent",
                backgroundColor:"white",
                color:"black", border:"none"
                }}>
  <span>Hii !! {name}</span></div> } 
    </button>
    <button  className="btn-1 " type="button">Help</button>
     {Auth?<button className="btn-1"
     type="button"
     onClick={()=>navigate('/cart')}
     >CART:-{cartCount}</button>
     :
     <button className="btn-1 " type="button" 
     onClick={()=>navigate('/login')}
     >CART</button>}
        </div>
    </div >
</div>




</>
  );
}

export default Navbar;
