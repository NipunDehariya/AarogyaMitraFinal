import React, { useState } from 'react'
import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/es/styles-compiled.css';
import '../../App.css'
import './Payment.css'

export default function Payment() {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      window.location.href = '/VerifyCode';
    }, 5000);
  };
  const formatNumber = (value) => {
    // Remove any non-digit characters from the input
    const digits = value.replace(/\D/g, "");
    // Split the digits into groups of 4 using a regular expression
    const groups = digits.match(/.{1,4}/g);
    // Join the groups with spaces and return the result
    return groups ? groups.join(" ") : "";
  };


  const handleInputChange = (event) => {
    const { value } = event.target;
    // Use a regular expression to check if the input contains only letters (uppercase or lowercase)
    const regex = /^[A-Za-z\s]+$/;
    if (regex.test(value) || value === '') {
      setName(value);
    }
  };

  const handleExDate = (event) => {
    const { value } = event.target;
    // Use a regular expression to check if the input contains only letters (uppercase or lowercase)
    const regex = /^\d*$/;
    if (regex.test(value) || value === '') {
      setExpiry(value);
    }
  };

  // const handleKeyDown = (event) => {
  //   // Allow only digits, backspace, and delete key
  //   if (
  //     !(
  //       (event.keyCode >= 48 && event.keyCode <= 57) || // Digits 0-9
  //       (event.keyCode >= 96 && event.keyCode <= 105) || // Numpad digits 0-9
  //       event.keyCode === 8 || // Backspace
  //       event.keyCode === 46 // Delete
  //     )
  //   ) {
  //     event.preventDefault();
  //   }
  // };
  // const handleInput = (event) => {
  //   let { value } = event.target;
  //   // Remove any non-digit characters from the input
  //   value = value.replace(/\D/g, '');

  //   // Validate the input to have a valid month and year format
  //   if (value.length <= 4) {
  //     const month = value.slice(0, 2);
  //     const year = value.slice(2, 4);

  //     // Use a regular expression to check if the month is valid (01-12) and the year is valid (00-99)
  //     const regex = /^(0[1-9]|1[0-2])(\d{2})$/;
  //     if (regex.test(value) || value === '') {
  //       setExpiry(value);
  //     } else {
  //       setExpiry('');
  //     }
  //   }
  // };
  
  // const handleInputMonth = (event) => {
  //   const { value } = event.target;
  //   // Use a regular expression to check if the input contains only digits from 1 to 12
  //   const regex = /^(?:[1-9]|1[0-2])$/;
  //   if (regex.test(value) || value === '') {
  //     setMonth(month);
  //   }
  // };


  // const handleInputYear = (event) => {
  //   const { value } = event.target;
  //   // Use a regular expression to check if the input contains only digits from 23 to 99
  //   const regex = /^(?:2[3-9]|[3-9][0-9])$/;
  //   if (regex.test(value) || value === '') {
  //     setYear(year);
  //   }
  // };


  const handleCvc = (event) => {
    const { value } = event.target;
    // Use a regular expression to check if the input contains only letters (uppercase or lowercase)
    const regex = /^\d*$/;
    if (regex.test(value) || value === '') {
      setCvc(value);
    }
  };


  const [number, setNumber] = useState('');

  const [name, setName] = useState('');
 
  const [expiry, setExpiry] = useState('');

  const [cvc, setCvc] = useState('');

  const [focus, setFocus] = useState('');

  // const [year, setYear] = useState('');

  // const [month, setMonth] = useState('');

 


  // const handleNameChange = (e) => {
  //   const value =e.target.value;
  //   const valuee =value.replace(/[^a-zA-Z]/g, '');
  //   setName(valuee);
  // };
  

  function submitUser(e) {

    e.preventDefault()
  }

 
    
  return (



    <div >

      <Cards

        cvc={cvc}

        expiry={expiry}

        // month={month}

        // year={year}

        focused={focus}

        name={name}

        number={number}

      />

      <form  onSubmit={submitUser} >
  
 

      <input
  className="my_input"
  type="tel"
  name="number"
  value={formatNumber(number)} // Use the formatted value here
  placeholder={"Enter Number"}
  onChange={(e) => setNumber(e.target.value)}
  onFocus={(e) => setFocus(e.target.name)}
  maxLength={19} // Adjust the max length to account for spaces
  required
/>

        
{/*need some work*/} 

<input className='my_input'
          
          type="tel"

          name="expiry"

          value={expiry}

        
          placeholder="MM/YY"

          onChange={handleExDate}

          onFocus={e => setFocus(e.target.name)}

          maxLength={4}

          required
        />

        <input
          className='my_input'
          type="tel"

          name="cvc"

          value={cvc}

          placeholder={"Enter CVV"}

          onChange={handleCvc}

          onFocus={e => setFocus(e.target.name)}
          maxLength={4}
          required
        />

<input className='my_input'
         
          type="tel"

          name="name"

          value={name}

          placeholder={"Enter Name"}

          onChange={handleInputChange}

          required

        />


        <button className={clicked ? 'clicked' : ''} onClick={handleClick}>
        Confirm
      </button>
      </form>
      
    </div>
    

  );

}








