import FullPageExample from './components/LandingPage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import PoloShirt from "./components/PoloShirt"
import React, { useState } from 'react';
import './App.css';
import ProductPageZara from './components/ProductPageZara';
import LinenPage from './components/LinenPage';
import DetailPage from './components/DetailPage';


const App = () => {
  
  const[sidebar, setSidebar] = useState(false)

  const toggleSidebar = () =>{
    setSidebar((prevState) =>  !prevState) 
     
    
  }

  return (
    <>
      {/* 
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
   <Route path='/Polo_shirt/:id' element={<DetailPage/>}/>
   <Route path="/" element={<FullPageExample/>}/>
    </Routes>  
    
<Sidebar sidebar={sidebar}/>

    </>
  );
}

export default App;
