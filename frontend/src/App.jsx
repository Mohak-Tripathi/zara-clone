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
import DetailPage from './components/DetailPage';
import Cart from './components/cart/Cart';
import Home from './components/Home';

const App = () => {
  
  const[sidebar, setSidebar] = useState(false)
  const [name,setName]=useState('')
  const toggleSidebar = () =>{
    setSidebar((prevState) =>  !prevState) 
    
  }
  const log =(e)=>{
    console.log("username is",e)
    setName(e)
  }
  return (
    <>
   

<Header openSidebar={toggleSidebar} name={name}/>  
<Routes> 
   <Route path='/' element={<Home/>}/>
   <Route path="/ProductPage1" element={<ProductPageZara />}/> 
   <Route path="/Home" element={<Home/>}/> 
   <Route path="/LinenPage" element={<LinenPage  />}/> 
   <Route path="/PoloPage" element={<PoloShirt  />}/>
   <Route path='/Polo_Shirt/:id' element={<DetailPage/>}/>
   <Route path="/login" element={<Login log={log}/>}/>
   <Route path="/signup" element={<Signup/>}/>
   <Route path='/cart' element={<Cart/>} />
   <Route path='/Payment' element={<Payment/>}/>
   <Route path='/CardPayment' element={<CardPayment/>}/>
   <Route path='/product/:id' element={<DetailPage/>}/>
   <Route path='/Linen_data/:id' element={<DetailPage/>}/>
   <Route path='/cardpayment' element={<CardPayment/>}/>
   <Route path='/payment' element={<Payment/>}/>
   </Routes>  
   <Sidebar sidebar={sidebar}/>
    </>
  );
}

export default App;
