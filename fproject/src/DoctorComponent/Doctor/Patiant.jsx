import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Style.css'
import { useEffect } from 'react';
import axios from 'axios';
export default function Patiant() {


  const [allPatient, setAllPatient] = useState(null)
  async function AllPatient(){

   let{data}  = await axios.get("http://localhost:5000/api/v1/users" )
   
   setAllPatient(data.users)
  }
  useEffect(function(){

   AllPatient()

 },[])
  return <>
    <>
      <div className="sidebar bg-danger">
        <div className="logo-details">
        <img src="doctor logo.png" alt="" width="40" height="40"></img>
          <span className="logo_name">
            Pulse <br />
            <span
              style={{ color: "rgb(250, 250, 100)", fontSize: 13, fontWeight: 100 }}
            >
              {" "}
              for Doctor
            </span>
          </span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to='/Dashbord'>
              <i className="fa-sharp fa-solid fa-house"></i>
              <span className="links_name">Home</span>
            </Link>
          </li>
          <li>
            <Link to='/Schedule'>
              <i className="fa-solid fa-list-ul"></i>
              <span className="links_name">Schedule</span>
            </Link>
          </li>
          <li>
            <Link to='/Appointments'>
              <i class="fa-solid fa-chart-pie"></i>
              <span className="links_name">Appointments</span>
            </Link>
          </li>
          <li>
            <Link to='/patiant'>
              <i className="fa-regular fa-user"></i>
              <span className="links_name">My patiant</span>
            </Link>
          </li>
          <li>
            <Link to='/PatiantOnlineSession'>
              <i class="fa-regular fa-user"></i>
              <span className="links_name">Online Sessions</span>
            </Link>
          </li>
          <li>
            <Link to='/Setting'>
              <i class="fa-solid fa-gear"></i>
              <span className="links_name">Setting</span>
            </Link>
          </li>
          <li>
            <Link to='/AddHistory'>
            <i class="fa-solid fa-file-medical"></i>
              <span className="links_name">Medical Reporte</span>
            </Link>
          </li>
          <li className="log_out">
            <Link to="/log">
              <i class="fa-solid fa-right-from-bracket"></i>
              <span className="links_name">Log out</span>
            </Link>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <nav>
        <div>
        <p>Welcome, Dr.Ahmed</p>
      </div>
      <form>
  <label for="search-input">Search:</label>
  <input type="text" id="search-input" name="search-input"/>
  <button type="submit">Search</button>
</form>
          <div className="profile-details">
            <span className="admin_name">Prem Shahi</span>
            <i className="bx bx-chevron-down" />
          </div>
        </nav>
        <section className="home-section">
 
  <div className="home-content">
    <div className="overview-boxes" />
    <div className="sales-boxes">
      <div className="recent-sales box">
        <div className="title">
          <h2>My Patients</h2>
        </div>
        <div className="sales-details">
          <main className="main-container">
            <div className="main-title">
              <p className="font-weight-bold" />
            </div>
            {allPatient!=null ?  <div>
   {allPatient.map((users , index)=>
    <table style={{ width: "100%" }}>
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
      </div>
    </div>
  </div>
</section>

        
      
      </section>
    
    </>
  </>

}
