import React from 'react';
import './Signup.css'
import { useNavigate } from 'react-router-dom';
import{useState}from"react"

function Signup() {
const nav=useNavigate()

  const [formdata,setformdata]=useState({})
    
  const handle=(e)=>{
    
   //  console.log(e.target.value)
    const {name,value}=e.target
    setformdata({
        ...formdata,
         [name]:value
    })
    
  }
  console.log(formdata)


  async function onsubmit(e){

    e.preventDefault()
    // window.location.href="Login.js"
    console.log(formdata);
  // savedata()

  try {
  
    let res=await fetch("http://localhost:8080/register",
    {
        method:"POST",
        body: JSON.stringify(formdata),
        headers:{
             "Content-Type":"application/json"
        }

    });
    let data=await res.json()
    console.log(data)
nav("/login")
    
} catch (error) {
    console.log(error)
    
}
   

 }

  return (
    <>
   
   <h2 className='headingform'>PERSONAL DETAILS</h2>
   <div className='changeform-btn'>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
 PERSONAL
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label className="form-check-label" htmlFor="flexRadioDefault2">
  COMPANY
  </label>
</div>
   </div>
   

<form onSubmit={onsubmit} className='container'>


 {/* <input   onChange={handle} className="input-text"type="text" id="fname" name="email" placeholder='E-MAIL'/>
<input  onChange={handle} type="text" id="fname" name="password" placeholder='PASSWORD'/>
<input  onChange={handle} type="text" id="fname" name="name" placeholder='NAME'/>
<input  onChange={handle} type="text" id="fname" name="phone" placeholder='phone number'/>  */}



   <label for="fname">First Name</label>
  <div className='Left-form'> 
  <div className='input-text-box'>
      <input   onChange={handle} className="input-text"type="text" id="fname" name="email" placeholder='E-MAIL'/>
  </div>
  <div className='input-text-box'>
      <input  onChange={handle} type="text" id="fname" name="password" placeholder='PASSWORD'/>
  </div>

  <div className='input-text-box'>
      <input  onChange={handle} type="text" id="fname" name="name" placeholder='NAME'/>
  </div> 
  <div className='input-text-box'>
      <input type="text" id="fname" name="fname" placeholder='ADDRESS'/>
  </div>
  <div className='input-text-box'>
      <input type="text" id="fname" name="fname" placeholder='LOCALITY'/>
  </div>
  <div className='input-text-options'>
  <select className="input-text-box" name="stateCode" type="select" data-qa-input-qualifier="stateCode" aria-labelledby="form-input__label-stateCode" aria-required="true"><option value="">select state</option><option value="INAN">ANDAMAN AND NICOBAR ISLANDS</option><option value="INAP">ANDHRA PRADESH</option><option value="INAR">ARUNACHAL PRADESH</option><option value="INAS">ASSAM</option><option value="INBR">BIHAR</option><option value="INCH">CHANDIGARH</option><option value="INCT">CHHATTISGARH</option><option value="INDN">DADRA AND NAGAR HAVELI</option><option value="INDD">DAMAN AND DIU</option><option value="INDL">DELHI</option><option value="INGA">GOA</option><option value="INGJ">GUJARAT</option><option value="INHR">HARYANA</option><option value="INHP">HIMACHAL PRADESH</option><option value="INJK">JAMMU AND KASHMIR</option><option value="INJH">JHARKHAND</option><option value="INKA">KARNATAKA</option><option value="INKL">KERALA</option><option value="INLA">LADAKH</option><option value="INLD">LAKSHADWEEP</option><option value="INMP">MADHYA PRADESH</option><option value="INMH">MAHARASHTRA</option><option value="INMN">MANIPUR</option><option value="INML">MEGHALAYA</option><option value="INMZ">MIZORAM</option><option value="INNL">NAGALAND</option><option value="INOR">ORISSA</option><option value="INPY">PONDICHERRY</option><option value="INPB">PUNJAB</option><option value="INRJ">RAJASTHAN</option><option value="INSK">SIKKIM</option><option value="INTN">TAMIL NADU</option><option value="INTG">TELANGANA</option><option value="INTR">TRIPURA</option><option value="INUP">UTTAR PRADESH</option><option value="INUT">UTTARANCHAL</option><option value="INWB">WEST BENGAL</option></select>
 
  </div>
  <div className='input-text-box1'>

  <div>
      <input  className="tele" type="tel"id='fname' name="fname" value="+91" />
   </div> 

    <div className='teleinput'>
      <input  onChange={handle} type="text"id='fname' name="phone" placeholder="TELEPHONE" />
   </div> 
   </div>
  <div className='checkbox'>
    <div>
      <input className="form-input-checkbox__input" type="checkbox" name="newsletterCheck" data-qa-input-qualifier="newsletterCheck" value="false"/>
    </div>
  <div>
  <h6 className="checkbox__label">I wish to receive Zara news on my e-mail</h6>
  </div>
  </div>

  <div className='checkbox'>
    <div>
      <input className="form-input-checkbox__input" type="checkbox" name="newsletterCheck" data-qa-input-qualifier="newsletterCheck" value="false"/>
    </div>
  <div>
  <h6 className="checkbox__label">I ACCEPT THE PRIVACY STATEMENT</h6>
  </div>
  </div>
  <input type="submit" className='signupbtn' value="CREATE ACCOUNT"/>
  {/* <button type="submit" className="signupbtn">CREATE ACCOUNT </button> */}
  </div> 
 
 <div className='right-form'>
<div className='input-text-box'>
      <h1 className='dot'>.</h1>
  </div>
<div className='input-text-box2'>
      <input type="text" id="fname" name="fname" placeholder='REPEATE PASSWORD'/>
  </div>
<div className='input-text-box'>
      <input type="text" id="fname" name="fname" placeholder='PINCODE'/>
  </div>
  <div className='input-text-box'>
      <input type="text" id="fname" name="fname" placeholder='OPTIONAL'/>
  </div>
  <div className='input-text-box'>
      <input type="text" id="fname" name="fname" placeholder='CITY'/>
  </div>
  <div className='input-text-box'>
     <span >India</span>.
  </div>
</div> 


</form>

<div className='signup-header'>
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


  




   <div className="list-group">
<h6 className='header-heading'>COMPANY</h6>
  <a href="#" className="list "> ABOUT US</a>
  <a href="#" className="list ">JOIN LIFE</a>
  <a href="#" className="list">OFFICES</a>
  <a href="#" className="list">STORES</a>
  <a href="#" className="list"> WORK WITH US</a>
 
   </div>

  


   <div className="list-group">
<h6 className='header-heading'>POLICIES</h6>
  <a href="#" className="list "> PRIVACY POLICY</a>
  <a href="#" className="list ">PURCHASE CONDITIONS</a>
  <a href="#" className="list">COOKIES SETTINGS</a>
  
   </div>
</div>
</>
  );
}

export default Signup;
