import React, { useState } from 'react'
import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/es/styles-compiled.css';
import '../../App.css'
import './Payment.css'


export default function PaymentOnline() {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      window.location.href = '/Vcodeonline';
    }, 5000);
  };



  const [number, setNumber] = useState('');

  const [name, setName] = useState('');

  const [expiry, setExpiry] = useState('');

  const [cvc, setCvc] = useState('');

  const [focus, setFocus] = useState('');

  function submitUser(e) {

    e.preventDefault()
  }

 
    
  return (



    <div >

      <Cards

        cvc={cvc}

        expiry={expiry}

        focused={focus}

        name={name}

        number={number}

         />

      <form  onSubmit={submitUser} >
  
 

        <input  className='my_input'

          type="tel"

          name="number"

          val={number}

          placeholder={"Enter Number"}

          onChange={e => setNumber(e.target.value)}

          onFocus={e => setFocus(e.target.name)}
          required

        />

        <input className='my_input'
         
          type="tel"

          name="name"

          val={name}

          placeholder={"Enter Name"}

          onChange={e => setName(e.target.value)}

          onFocus={e => setFocus(e.target.name)}
          required

        />

        <input className='my_input'
          
          type="tel"

          name="expiry"

          val={expiry}

          placeholder={"Enter Expiry date"}

          onChange={e => setExpiry(e.target.value)}

          onFocus={e => setFocus(e.target.name)}
          required

        />

        <input
          className='my_input'
          type="tel"

          name="cvc"

          val={cvc}

          placeholder={"Enter Cvc"}

          onChange={e => setCvc(e.target.value)}

          onFocus={e => setFocus(e.target.name)}
          required

        />
        <button className={clicked ? 'clicked' : ''} onClick={handleClick}>
        Confirm
      </button>
      </form>
      
    </div>

  );

}
