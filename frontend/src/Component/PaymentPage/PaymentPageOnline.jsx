import React from 'react'
import { useState } from "react";
import './PaymentPage.css'
import { Link } from 'react-router-dom';

export default function PaymentPageOnline() {
 
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

  
  <div className="buttons-container">
    {paymentMethod === 'card' ? (
    <Link to ='/PaymentOnline'>
      <button type="submit">Pay with Card</button>
    </Link>
    ) : (
     <Link to = '/Vcodeonline'>
      <button type="submit">Pay with Cash</button>
     </Link>
    )}
  </div>
</form>
  </>
      
    };
    
    
    

