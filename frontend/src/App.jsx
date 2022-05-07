



import FullPageExample from './components/LandingPage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import PoloShirt from "./components/PoloShirt"

 







import React, { useState } from 'react';



import './App.css';
import ProductPageZara from './components/ProductPageZara';
import LinenPage from './components/LinenPage';
import Login from './components/Login';
import Signup from './components/Signup';
import CardPayment from './components/CardPayment';
import Payment from './components/Payment';


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
   <Route path="/login" element={<Login/>}/>
   <Route path="/signup" element={<Signup/>}/>
   <Route path='/Payment' element={<Payment/>}/>
     <Route path='/CardPayment' element={<CardPayment/>}/>
  
   
    </Routes>  
    
<Sidebar sidebar={sidebar}/>





    </>
  );
}

export default App;
