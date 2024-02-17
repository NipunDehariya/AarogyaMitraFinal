import React from 'react'
// import { useState } from 'react'
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
import './Style.css'
import { Link } from 'react-router-dom'
// import Joi from 'joi'

export default function SignUp() {
    

    // let navigate = useNavigate();
    // const [joiErrors, setJoiErrors] = useState(null)
    // const [error, setError] = useState('');
    // const [isloading, setIsloading] = useState(false)
    // const [doctors, setUser] = useState({
    //     userName: '',
    //     Speciality: '',
    //     Medical_ID: '',
    //     Birthdate: '',
    //     email: '',
    //     password: '',
    //     Cpassword: '',
    //     phone: '',

    // });

    // function getUserData(e) {

    //     let mydoctor= { ...doctors }

    //     myUser[e.target.name] = e.target.value;
    //     setUser(mydoctor);

    // }
    // function submitRegisterForm(e) {
    //     setIsloading(true)
    //     e.preventDefault();
    //     const schema = Joi.object({
    //         userName: Joi.string().alphanum().min(3).max(25).required(),
    //         Speciality: Joi.string().alphanum().min(3).max(25).required(),
    //         Medical_ID:Joi.string().min(3).max(25).required(),
    //         email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    //         password: Joi.string().required(),
    //         Cpassword: Joi.ref('password'),
    //         phone: Joi.number().required()
    //     })
    //     let JoiRespons = schema.validate(doctors, { abortEarly: false })

    //     if (JoiRespons.error === undefined) {
    //         sendData()

    //     } else {

    //         setJoiErrors(JoiRespons.error.details)
    //     }
    // }

    // async function sendData() {

    //     let { data } = await axios.post(`http://localhost:5000/api/v1/doctors/signUp`, doctors);

    //     if (data.message == 'success') {
    //         navigate('/Dashbord')

    //         setIsloading(false)


    //     } else {

    //         setIsloading(false)
    //         setError(data.message)
    //     }
    //     console.log(data)
    // }








    return <>



        
        <div className="form-container">
        
       

            <form >
                <h3>Sign Up As A Doctor</h3>
                <label htmlFor="userName">userName</label>
                <input type="text" name="userName" required="" placeholder="user Name" />
                <label htmlFor="Speciality">Speciality</label>
                <input type="text" name="Speciality" required="" placeholder="Speciality" />
                <label htmlFor="Medical_ID">Medical ID</label>
                <input type="number" name="Medical_ID" required="" placeholder="Medical ID" />
                <label htmlFor="Birthdate">Birthdate</label>
                <input
                    
                    type="date"
                    name="Birthdate"
                    required=""
                    placeholder="Birthdate"
                    style={{ color: "#333" }}
                />
                <label htmlFor="Phone Number">Phone</label>

                <input type="number" name="Phone" required="" placeholder="Phone Number" />

                <label htmlFor="email">email</label>

                <input type="email" name="email" required="" placeholder="Email" />


                <label htmlFor="password">password</label>


                <input type="password" name="password" required="" placeholder="Password" />
                <label htmlFor="CPassword">CPassword</label>
                <input
                
                    type="password"
                    name="Password"
                    required=""
                    placeholder="Confirm Your Password"
                />
              <Link to = '/Dashbord'>
              <button type="submit" name="submit" value="login now" className="form-btn" style={{ color: "aliceblue" }}>
                    
                    Sign Up
             
            </button>
              </Link>
            
            </form>
        </div>
      
    </>

}
