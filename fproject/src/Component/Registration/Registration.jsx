import React, {useState } from 'react'
 import Joi from 'joi'
import { Link } from 'react-router-dom';
import './Reg.css'
 import axios from 'axios';
 import { useNavigate } from "react-router-dom";


export default function Registration() {

 let navigate = useNavigate();
 const [joiErrors, setJoiErrors] = useState(null)
const [error, setError] = useState('');
const [isloading, setIsloading] = useState(false)
 const [user, setUser] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    age: 0,
    password: '',
    Cpassword:'',
    phone: '',

 });

 function getUserData (e) {

  let myUser = {...user}
 
  myUser[e.target.name]= e.target.value;
  setUser(myUser);
  
 }
 function submitRegisterForm (e) {
  setIsloading(true)
  e.preventDefault();
  const schema = Joi.object({
    userName: Joi.string().alphanum().min(3).max(25).required(),
    firstName: Joi.string().alphanum().min(3).max(25).required(),
    lastName: Joi.string().alphanum().min(3).max(25).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    age: Joi.number().min(18).max(80).required(),
    password: Joi.string().required(),
    Cpassword: Joi.ref('password'),
    phone: Joi.number().required()
  })
  let JoiRespons = schema.validate(user, { abortEarly: false })

  if (JoiRespons.error === undefined) {
    sendData()

  } else {

    setJoiErrors(JoiRespons.error.details)
  }
}

 async function sendData () {

  let {data} = await axios.post(`http://localhost:5000/api/v1/users/signUp`, user);

  if (data.message == 'success') {
    navigate('/Login')

   setIsloading(false)
   
    
  }else{

   setIsloading(false)
    setError(data.message)
  }
  console.log(data)
 }




  return <>
    <div className='w-50 m-auto py-3'>
    {joiErrors == null ? "" : joiErrors.map((err) => <div className='alert alert-danger'>{err.message}</div>)}
    {error.length > 0 ? <div className='alert alert-danger my-2'>{error}</div> : ''}
     
      <form onSubmit={submitRegisterForm} >
        <h2 className='mb-4'> Registration  </h2>
        <label htmlFor="userName">User name</label>
        <input  onChange={getUserData} type="text" name='userName' id='userName' className='form-control' placeholder='User name' />

        <label htmlFor="firstName">First name</label>
        <input  onChange={getUserData} type="text" name='firstName' id='firstName' className='form-control' placeholder='First name' />

        <label htmlFor="lastName">Last name</label>
        <input  onChange={getUserData}  type="text" name='lastName' id='lastName' className='form-control' placeholder='Last name' />

        <label htmlFor="age">Age</label>
        <input onChange={getUserData} type="number" name='age' id='age' className='form-control' placeholder='Age' />

        <label htmlFor="email">E-mail</label>
        <input onChange={getUserData} type="email" name='email' id='email' className='form-control' placeholder='E-mail' />

        <label htmlFor="password">Password</label>
        <input  onChange={getUserData} type="password" name='password' id='password' className='form-control' placeholder='Password' />
        
        <label htmlFor="password">Confirm password</label>
        <input  onChange={getUserData} type="password" name='Cpassword' id='Cpassword' className='form-control' placeholder='Confirm password' />


       
        <label htmlFor="phone">Phone</label>
        <input onChange={getUserData} type="number" name='phone' id='phone' className='form-control' placeholder='Phone' />
       

        <button type='submit' className='btn btn-outline-danger mt-3 d-grid gap-2 col-6 mx-auto my-3 '>
          {isloading == true ? <i className="fa-solid fa-spinner fa-spin"></i> : "Registration" }
           </button>
      </form>
         
    </div>
      <div>
    
    <Link to = '/doctor'>  
    <button className='btn btn-outline-success mt-3 d-grid gap-2 mx-auto my-3'>
     Registration As a Doctor
     </button> </Link>
    

      </div>
  </>
}
