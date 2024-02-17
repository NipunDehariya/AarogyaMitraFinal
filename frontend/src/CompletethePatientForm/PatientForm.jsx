import React from 'react'
import { useState } from 'react';
import './PatientForm.css'
import { Link } from 'react-router-dom';

export default function PatientForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Do something with the form data, e.g. submit to a server
    };

    return<>
    <div className='d-flex justify-content-center align-items-center'>
    <div className="patient-form">
      <h2>Patient Information Form</h2>
      <form  onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} required />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} required />
        </label>
        <label>
          Age:
          <input type="number" value={age} onChange={(event) => setAge(event.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </label>
    <Link to = '/Payment'>
    <button className='btn btn-outline-success' type="submit">Submit</button>
    </Link>
      </form>
    </div>
    </div>
    </>
}



