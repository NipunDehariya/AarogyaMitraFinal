import React from 'react'
import { Link } from 'react-router-dom';
import './Style.css'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
export default function DoctorsAdmin() {


  const [alldoctors, setAlldoctors] = useState(null)
  async function getdoctors(){
   let{data}   =  await axios.get("http://localhost:5000/api/v1/doctors")
    setAlldoctors(data.doctors)
   }
 
 useEffect(function(){
   getdoctors()
 },[])
  return <>
     <div className="sidebar bg-danger">
        <div className="logo-details">
          <i classname="fa-solid fa-heart fa-beat fa-2x m-3 heart " />
          <span className="logo_name">
            Pulse <br />
            <span
              style={{ color: "rgb(250, 250, 100)", fontSize: 13, fontWeight: 100 }}
            >
              {" "}
              for Admin
            </span>
          </span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to='/Admin'>
              <i className="fa-sharp fa-solid fa-house"></i>
              <span className="links_name">Home</span>
            </Link>
          </li>
        
          <li>
            <Link to='/AppointmentsAdmin'>
              <i class="fa-solid fa-chart-pie"></i>
              <span className="links_name">Appointments</span>
            </Link>
          </li>
          <li>
            <Link to='/PatientAdmin'>
              <i className="fa-regular fa-user"></i>
              <span className="links_name">My patiant</span>
            </Link>
          </li>
          <li>
            <Link to='/DoctorsAdmin'>
              <i className="fa-regular fa-user"></i>
              <span className="links_name">Doctors</span>
            </Link>
          </li>
         
          <li className="log_out">
            <Link to="/Cpanel">
              <i class="fa-solid fa-right-from-bracket"></i>
              <span className="links_name">Log out</span>
            </Link>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <nav>
    
      <form className='d-flex '>
  <label  for="search-input">Search:</label>
  <input type="text" id="search-input" name="search-input"/>
  <button type="submit">Search</button>
</form>
        
        </nav>
       <div>
       <main className="main-container py-5">
  <div className="main-title">
    <p className="font-weight-bold">PULSE DOCTORS</p>
  </div>
   {alldoctors!=null ? <div>
   {alldoctors.map((doctors , index)=>
    <table key={index}  className="table table-striped" style={{ width: "100%" }}>
    <thead>
      <tr>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>medical ID</th>
        <th>SPECIALITY</th>
       
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{doctors.userName}</td>
        <td>{doctors.email}</td>
        <td>{doctors.medicalId}</td>
        <td>{doctors.spectiality}</td>
      
      </tr>

    </tbody>
  </table>
   )}
   </div> :<div className='v-100 d-flex justify-content-center align-items-center '>
     <i class="fa-solid fa-spinner fa-spin fa-7x text-white"></i>
     </div>}
</main>


       </div>
      </section>
      <div className="button">
        <Link href="#">See All</Link>
      </div>
  </>
}
