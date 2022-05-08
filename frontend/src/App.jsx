
import { Route, Routes } from 'react-router-dom';
import PoloShirt from "./components/PoloShirt"
import React from 'react';
import Navbar from './components/Navbar';
import FullPageExample from './components/LandingPage';
import DetailPage from "./components/DetailPage";
import ProductPageZara from './components/ProductPageZara';
import LinenPage from './components/LinenPage';
import Login from './components/Login';
import Signup from './components/Signup';
import CardPayment from './components/CardPayment';
import Payment from './components/Payment';
import log from"./components/

import Home from './components/Home';

const App = () => {
  
return(
  <>
<Navbar/>
{/* import DetailPage from './components/DetailPage';
import Cart from './components/cart/Cart';
import Home from './components/Home';

const App = () => { */}
  
  

<Routes> 
   <Route path='/' element={<Home/>}/>
   <Route path="/ProductPage1" element={<ProductPageZara />}/> 
   <Route path="/" element={<Home/>}/> 
   <Route path="/home" element={<Home/>}/>
   <Route path="/Home" element={<Home/>}/> 
   <Route path="/LinenPage" element={<LinenPage  />}/> 
   <Route path="/PoloPage" element={<PoloShirt  />}/>
   <Route path='/Polo_Shirt/:id' element={<DetailPage/>}/>
   <Route path="/login" element={<Login log={log}/>}/>
   <Route path="/signup" element={<Signup/>}/>
   <Route path='/cart' element={<Cart/>} />
   <Route path='/Payment' element={<Payment/>}/>
     <Route path='/CardPayment' element={<CardPayment/>}/>
   <Route path='/CardPayment' element={<CardPayment/>}/>
   <Route path='/product/:id' element={<DetailPage/>}/>
   <Route path='/Linen_data/:id' element={<DetailPage/>}/>
   <Route path='/cardpayment' element={<CardPayment/>}/>
   <Route path='/payment' element={<Payment/>}/>
   </Routes>  

    </>
  )
}

export default App;
