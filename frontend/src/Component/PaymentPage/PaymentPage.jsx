import React from 'react'
import { useState } from "react";
import './PaymentPage.css'
import { Link } from 'react-router-dom';


export default function PaymentPage() {
 
      // const [paymentMethod, setPaymentMethod] = useState("");
      // const [verificationCode, setVerificationCode] = useState("");
    
      // const handlePaymentMethodChange = (event) => {
      //   setPaymentMethod(event.target.value);
      // };
    
      // const handleCashPayment = (event) => {
      //   event.preventDefault();
      //   // generate a random verification code
      //   const code = Math.floor(Math.random() * 1000000);
      //   setVerificationCode(code);
      // };

      const [paymentMethod, setPaymentMethod] = useState('card');

      const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Payment method selected:', paymentMethod);
      };
      return <>
   
   <form className="payment-form" onSubmit={handleSubmit}>
      <h2>Choose Payment Method</h2>
      <label>
        <input type="radio" value="card" checked={paymentMethod === 'card'} onChange={handlePaymentMethodChange} />
        Pay with Card
      </label>
      <label>
        <input type="radio" value="cash" checked={paymentMethod === 'cash'} onChange={handlePaymentMethodChange} />
        Pay with Cash
      </label>
      {paymentMethod === 'card' ? (
        <div className="card-image-container w-100">
          <img src="credit-card.png" className='w-25' alt="Card" />
        </div>
      ) : (
        <div className="cash-image-container w-100">
          <img src="cash.jpg" className='w-25' alt="Cash" />
        </div>
      )}
      <div className="buttons-container">
        {paymentMethod === 'card' ? (
        <Link to ='/Payment'>
          <button type="submit">Pay with Card</button>
        </Link>
        ) : (
         <Link to = '/VerifyCode'>
          <button type="submit">Pay with Cash</button>
         </Link>
        )}
      </div>
    </form>
      </>
    };
    
    
    

