import React, { useContext } from "react";
import "./Payment.css";
import {useNavigate} from 'react-router-dom'
import { CartContext } from "../CartContext/CartContext";


export default function Payment() {
  const history=useNavigate()
  const {total}=useContext(CartContext);
  return (
      <>
      <div className="bottom">
        <h2 className="h2">CHOOSE A PAYMENT METHOD</h2>
        <p>Please note that only cards that use 3D Secure are accepted. Contact your bank to activate it or for <br /> further instructions.</p> 
    </div>
    <div className="boxes">
      <div id="visa" className="visaa">
        <img src="https://static.zara.net/static/images/payment/payment/icon-payment-visa.svg" alt=""/>
        <p >VISA</p>
      </div>
      <div>
        <img src="https://static.zara.net/static/images/payment/payment/icon-payment-mastercard.svg" alt=""/>
        <p>MASTERCARD</p>
      </div>
      <div>
        <img src="https://static.zara.net/static/images/payment/payment/icon-payment-amex_2.svg" alt=""/>
        <p>AMERICAN EXPRESS</p>
      </div>
      <div>
        <img src="https://static.zara.net/static/images/payment/payment/ru-pay.svg" alt=""/>
        <p>RUPAY</p>
      </div>
      <div>
        <img src="https://static.zara.net/static/images/payment/payment/net-banking.svg" alt=""/>
        <p>NETBANKING</p>
      </div>
      <div>
        <img src="	https://static.zara.net/static/images/payment/payment/upi.svg" alt=""/>
        <p>UNIFIED PAYMENTS INTERFACE</p>
      </div>
    </div>

    
    <div className="box">
        <img src="https://static.zara.net/static/images/payment/payment/co-djpen.svg" alt=""/>
        <p>CASH ON DELIVERY</p>
    </div>

    <div className="box">
        <img src="https://static.zara.net/static/images/payment/payment/in.svg" alt=""/>
        <p>IN CARD</p>
    </div>

    {/* <button>hello</button> */}





  <div className="card">
  <div>
  <div className="price">
    <div className="total" >TOTAL:</div><div
    >{total}</div></div>
    <button  onClick={()=>history("/CardPayment")} >CONTINUE</button>
  </div>
 
</div>




</>
  );
}
