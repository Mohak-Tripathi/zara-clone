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
import CardPayment from './components/card/CardPayment';
import Payment from './components/Payment/Payment';


const App = () => {
  
  const[sidebar, setSidebar] = useState(false)

  const toggleSidebar = () =>{
    setSidebar((prevState) =>  !prevState) 
     
    
  }

  return (
    <>


<Header openSidebar={toggleSidebar}/>  

<Routes> 
  
   <Route path="/ProductPage1" element={<ProductPageZara />}/> 
   <Route path="/HomePage" element={<FullPageExample  />}/> 
   <Route path="/LinenPage" element={<LinenPage  />}/> 
   <Route path="/PoloPage" element={<PoloShirt  />}/> 
   <Route path='/Polo_shirt/:id' element={<DetailPage/>}/>
<<<<<<< HEAD
   <Route path='/Payment' element={<Payment/>}/>
     <Route path='/CardPayment' element={<CardPayment/>}/>
=======
   <Route path="/" element={<FullPageExample/>}/>
>>>>>>> 7416a9505ad0a20c8f6193db742984f173a7a259
    </Routes>  
    
<Sidebar sidebar={sidebar}/>

    </>
  );
}

export default App;
