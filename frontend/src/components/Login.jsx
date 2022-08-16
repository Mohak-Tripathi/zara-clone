import React, { useContext } from 'react';
import './Login.css'
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../CartContext/AuthContext';

const Login = ({log}) => {
const nav=useNavigate()
// const location=useLocation();
// const {from} =location.state
 const [formdata,setformdata]=useState({})
 const {Auth,setAuth}=useContext(AuthContext);
  const handlechange=(e)=>{
   //  console.log(e.target.value)
    const {name,value}=e.target
    setformdata({
        ...formdata,
         [name]:value,
    })

  }
  // console.log(formdata)
  async function onsubmit(e){

    e.preventDefault()
  
    // console.log(formdata);

  // savedata()

  try {
  
    let res=await fetch("https://zaraclone.herokuapp.com/login",
    {
        method:"POST",
        body: JSON.stringify(formdata),
        // mode: 'no-cors',
        headers:{
             "Content-Type":"application/json"
        }

    });

      let data=await res.json()
     console.log(data)
    console.log(data.token)
    if(data.status)
    {
   localStorage.setItem("userdata",JSON.stringify(data.user))
   localStorage.setItem("token",data.token)
   nav("/Home");
   
     setAuth(true);
   log(data.user.name);

     console.log("userdata",data.user)
    }
  else{
    alert(data.message)
 
    }

} catch (error) {
    console.log(error);
    
}
   





  }



  return (
    <>

  <form  onSubmit={onsubmit} className='container-login'>
       
  {/* <label for="fname">First Name</label> */}
  <div className='Left-login-form'>
  <h3 className='login-heading'>Login</h3>
 <div className='input-text-box'>
      <input onChange={handlechange} classname="input-text"type="text" id="fname" name="email" placeholder='E-MAIL'/>
  </div>
  <div className='input-text-box'>
      <input onChange={handlechange} type="password" id="fname" name="password" placeholder='PASSWORD'/>
  </div>
  
  <a className="forgotpassword"href='#'>HAVE YOU FORGOTTEN YOUR PASSWORD?</a>
  <button type="submit" className="login-btn" >LOGIN </button>
  </div>
 
<div className='right-login-form'>
<h4 >REGISTER</h4>
<p>IF YOU STILL DON'T HAVE A ZARA.COM ACCOUNT, USE THIS OPTION TO ACCESS THE REGISTRATION FORM.</p>

<p className='right-p' >BY GIVING US YOUR DETAILS, PURCHASING IN ZARA.COM WILL BE FASTER AND AN ENJOYABLE EXPERIENCE.</p>

<Link  to="/signup" className="create-btn" type="button" >CREATE ACCOUNT </Link>
  </div>
  
</form>

<div className='signup-footer'>
<div className="list-group">
<h6 className='header-heading'>HELP</h6>
  <a href="#" className="list ">SHOP AT ZARA.COM</a>
  <a href="#" className="list ">PRODUCT</a>
  <a href="#" className="list">PAYMENT</a>
  <a href="#" className="list">SHIPPING</a>
 
  <a href="#" className="list"> EXCHANGES AND RETURNS</a>
  <a href="#" className="list">SHOPS AND COMPANY</a>
  <a href="#" className="list">CLOTHES COLLECTION</a>
  <a href="#" className="list">PROGRAMME</a>
   </div>

  
   <div className="list-group">
<h6 className='header-heading'>FOLLOW-US</h6>
  <a href="#" className="list "> NEWSLETTER</a>
  <a href="#" className="list ">INSTAGRAM</a>
  <a href="#" className="list">FACEBOOK</a>
  <a href="#" className="list">TWITTER</a>
  <a href="#" className="list"> PINTEREST</a>
  <a href="#" className="list">YOUTUBE</a>
   </div>
   </div>
         </>
  );
}

export default Login;
