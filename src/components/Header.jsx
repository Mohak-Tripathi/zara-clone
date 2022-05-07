// import React from 'react'
// import { Link } from 'react-router-dom'
// import "./Header.css"

// function Header({openSidebar}) {
//     return (

//         <>



// <div classNameName="Navbar_Tripathi">  
// <div onClick= {openSidebar} classNameName='Left_Navbar'> 
// <i classNameName="ri-menu-line "></i>

// <Link to="/HomePage" img classNameName="Zara_Logo_Tr"src="https://cdn.cookielaw.org/logos/5435e8e3-1f77-4efd-bb7e-591b5a6e876e/d7899571-c1e4-4d71-8e87-09246e838e5d/d5b1d450-62b7-4f62-94ba-f9835c6495ed/Standard.png" alt="title" />
// </div> 





// <div classNameName='Right_Navbar'>  
// <h4>    SEARCH</h4>
 

// <div> LOGIN </div>
// <div> HELP </div>
// <img src="https://www.zara.com/in/en/shop/cart" alt='' /> 

// </div>

// </div> 


          
//         </>

//     )
// }

// export default Header






import React from 'react';
import"./Header.css"
const Header = () => {


    
  return (
    <>
        <nav id="deact">
      <div className="toggleBar">
        <span className="material-icons-outlined tgl2"> menu </span>
      </div>
      <div className="inside1">
        <label for="menu" className="menu">
          <span className="material-icons-outlined tglFwd"> menu </span>
        </label>
        {/* <!-- <div className="toggleMenu"></div> --> */}

        <label for="logo" id="logoId">
          <svg
            aria-label="ZARA India logo. Go to home page"
            className="layout-logo__icon layout-header__logo-icon img"
            viewBox="0 0 132 55"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M105.673.035l19.557 53.338 6.77.002v.383h-21.548v-.383h6.344l-6.431-17.54H97.311v.007l.07.204c.521 1.548.78 3.17.764 4.803v6.575c0 3.382 1.494 6.81 4.347 6.81 1.675 0 3.012-.59 4.604-2.046l.227.211C105.594 54.224 103.5 55 100.36 55c-2.37 0-4.398-.57-6.03-1.693l-.309-.222c-2.148-1.624-3.542-4.278-4.142-7.89l-.096-.583-.1-.882-.01-.152-3.599 9.792h5.107v.384H80.496v-.384h5.162l3.951-10.753v-.023a34.924 34.924 0 0 1-.075-1.906v-4.693c0-5.77-4.29-9.08-11.771-9.08H70.41v26.458h6.371v.383h-24.9v-.383h6.345l-6.431-17.54H33.948l-6.371 17.346.266-.044c8.366-1.442 12.213-7.827 12.265-14.55h.388v15.171H0L30.06 2.185H17.972C7.954 2.185 3.42 9.922 3.35 17.635h-.387V1.8h36.488l-.222.385L9.396 53.373h15.695c.39 0 .778-.019 1.169-.05.26-.018.522-.044.788-.077l.095-.01L46.703 0h.387l.013.035 15.369 41.916V2.185h-6.328v-.39h21.778c10.467 0 17.774 5.372 17.774 13.068 0 5.612-5.005 10.27-12.45 11.595l-1.367.174 1.377.14c4.515.517 8.1 1.906 10.641 4.127l.017.016L105.273 0h.386l.014.035zm-8.552 35.32l.038.094h13.061l-8.773-23.928-7.221 19.67.039.037.367.364a11.876 11.876 0 0 1 2.489 3.762zM70.415 26.53V2.185h5.611c7.496 0 11.454 4.414 11.454 12.76 0 8.877-2.272 11.585-9.717 11.585h-7.348zM42.882 11.521L34.09 35.45h17.565L42.882 11.52z"
            ></path>
          </svg>
        </label>
      </div>
      <div className="inside2">
        <ul id="list1">
          <li><input id="search" type="search" placeholder="SEARCH" /></li>
        </ul>
        <ul id="list2">
          <li id="login">LOGIN</li>
          <br />
          <li id="help">HELP</li>
          <li id="cart0">CART (<span id="cartcnt">0</span>)</li>
        </ul>
      </div>
    </nav>
    </>
  );
}

export default Header;
