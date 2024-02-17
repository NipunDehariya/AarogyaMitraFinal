import React, { useState } from 'react'
import Joi from 'joi'
import axios from 'axios';
import { useNavigate} from 'react-router-dom';


export default function LoginAsdoctor({ logVer }) {


  const navigate = useNavigate();

  const [joiErrors, setJoiErrors] = useState(null)

  const [apiMessage, setApiMessage] = useState("")

  const [doctors, setUser] = useState({

    email: '',
    password: '',


  })

  function getUser(e) {
    let inputValue = e.target.value;

    let newUser = { ...doctors }
    let propertyName = e.target.id


    newUser[propertyName] = inputValue;
    setUser(newUser)
  }

  function submitUser(e) {

    e.preventDefault()
    const schema = Joi.object({

      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),

      password: Joi.string().required(),

    })
    let JoiRespons = schema.validate(doctors, { abortEarly: false })

    if (JoiRespons.error === undefined) {
      sendUser()

    } else {

      setJoiErrors(JoiRespons.error.details)
    }
  }

  async function sendUser() {
    let { data } = await axios.post('http://localhost:5000/api/v1/doctors/signIn', doctors)
    console.log(data);
    if (data.message === "success") {

      localStorage.setItem('tkn', data.token)
      logVer()

      navigate('/Dashbord')
    } else {
      setApiMessage(data.message)
    }

  }



  return <>
    <div className='w-50 m-auto py-3'>

      {joiErrors == null ? "" : joiErrors.map((err) => <div className='alert alert-danger'>{err.message}</div>)}
      {apiMessage.length === 0 ? "" : <div className='alert alert-danger'> {apiMessage} </div>}
      <form onSubmit={submitUser} >
        <h2 className='mb-4'> Login  </h2>

        <label htmlFor="email">E-mail</label>
        <input onChange={getUser} type="email" id='email' className='form-control' placeholder='E-mail' />

        <label htmlFor="password">Password</label>
        <input onChange={getUser} type="password" id='password' className='form-control' placeholder='Password' />

        <button onChange={getUser} className='btn btn-outline-danger mt-3 d-grid gap-2 col-6 mx-auto my-3 '> login </button>
      </form>
     
       </div>
 

  </>
}

