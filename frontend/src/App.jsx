
import { Route, Routes } from 'react-router-dom';
import PoloShirt from "./components/PoloShirt"
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import ProductPageZara from './components/ProductPageZara';
import LinenPage from './components/LinenPage';
import Login from './components/Login';
import Signup from './components/Signup';
import CardPayment from './components/CardPayment';
import Payment from './components/Payment';

import Home from './components/Home';




const App = () => {
  
return(
  <>
<Navbar/>
<Routes> 

   <Route path="/ProductPage1" element={<ProductPageZara />}/> 
   <Route path="/" element={<Home/>}/> 
   <Route path="/home" element={<Home/>}/>
   <Route path="/LinenPage" element={<LinenPage  />}/> 
   <Route path="/PoloPage" element={<PoloShirt  />}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/signup" element={<Signup/>}/>
   <Route path='/Payment' element={<Payment/>}/>
     <Route path='/CardPayment' element={<CardPayment/>}/>
  
   
    </Routes>  
    </>
  )
}

export default App;
