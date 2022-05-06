import FullPageExample from './components/LandingPage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import PoloShirt from "./components/PoloShirt"

// import './App.css';
// // import Home from './components/Home';

// import React from 'react';

// import LandingPage from './components/LandingPage';

// // import Login from './components/Login';
// // import {useNavigate, Route, Routes} from "react-router-dom"
// // import { useEffect } from 'react';


// export function App() {
 
 
//   return (
//     <div className="App">




    
// <LandingPage />

//     </div>
//   );
// }

// export default App;





import React, { useState } from 'react';
// import{Route,Routes}from "react-router-dom"
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import Login from './Components/Login';
// import Signup from './Components/Signup';


// import LandingPage from "./components/LandingPage"


import './App.css';
import ProductPageZara from './components/ProductPageZara';
import LinenPage from './components/LinenPage';


const App = () => {
  
  const[sidebar, setSidebar] = useState(false)

  const toggleSidebar = () =>{
    setSidebar((prevState) =>  !prevState) 
     
    
  }

  return (
    <>
    {/* <Navbar/>
    <Routes>
    <Route  path="/" element={<Home/>}></Route>
    <Route  path="/login" element={<Login/>}></Route>
    <Route  path="/signup" element={<Signup/>}></Route>
    </Routes>
    {/* <Routes>

    </Routes>
    
    <Route exact path="/"><Contact/></Route>
    <Route exact path="/"><Home/></Route> */}

<Header openSidebar={toggleSidebar}/>  

<Routes> 

   <Route path="/ProductPage1" element={<ProductPageZara />}/> 
   <Route path="/HomePage" element={<FullPageExample  />}/> 
   <Route path="/LinenPage" element={<LinenPage  />}/> 
   <Route path="/PoloPage" element={<PoloShirt  />}/> 
    </Routes>  
    
<Sidebar sidebar={sidebar}/>





    </>
  );
}

export default App;
