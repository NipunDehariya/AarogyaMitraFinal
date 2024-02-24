import React from 'react'
import { Link } from 'react-router-dom';
import './Style.css'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
export default function PatientAdmin() {

   const [allPatient, setAllPatient] = useState(null)
   async function AllPatient(){

    let{data}  = await axios.get("http://localhost:5000/api/v1/users" )
    
    setAllPatient(data.users)
   }
   useEffect(function(){

    AllPatient()

  },[])

  return <>
     <div className="sidebar bg-danger">
        <div className="logo-details">
          <i classname="fa-solid fa-heart fa-beat fa-2x m-3 heart " />
          <span className="logo_name">
            Aargoya Mitra <br />
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
              <span className="links_name">My patient</span>
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
        <div>
        <p>Welcome, Dr.Shubham Rawat</p>
      </div>
      <form>
  <label for="search-input">Search:</label>
  <input type="text" id="search-input" name="search-input"/>
  <button type="submit">Search</button>
</form>
          <div className="profile-details">
            <span className="admin_name">Satvik Shrivastava</span>
            <i className="bx bx-chevron-down" />
          </div>
        </nav>
       <div>
       <main className="main-container py-5">
  <div className="main-title">
    <p className="font-weight-bold">AAROGYA MITRA PATIENTS</p>
  </div>
  {allPatient!=null ?  <div>
   {allPatient.map((users , index)=>
    <table key={index} style={{ width: "100%" }}>
    <thead>
      <tr>
        <th>User Name</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{users.userName}</td>
        <td>{users.email}</td>
        <td>{users.phone}</td>
      </tr>
    </tbody>
  </table>
   )}
  </div>: <div className='v-100 d-flex justify-content-center align-items-center '>
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
