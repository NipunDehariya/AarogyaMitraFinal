import React from 'react'
import { Link } from 'react-router-dom';
import './Style.css'

export default function AppointmentsAdmin() {
  return <>
     <>
      <div className="sidebar bg-danger">
        <div className="logo-details">
          <i classname="fa-solid fa-heart fa-beat fa-2x m-3 heart " />
          <span className="logo_name">
            Pulse <br />
            <span
              style={{ color: "rgb(250, 250, 100)", fontSize: 13, fontWeight: 100 }}
            >
              {" "}
              forAdmin
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
            <i class="fa-solid fa-user-doctor"></i>
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
            <p>Welcome, Dr.Ahmed</p>
          </div>
          <form>
            <label for="search-input">Search:</label>
            <input type="text" id="search-input" name="search-input" />
            <button type="submit">Search</button>
          </form>
          <div className="profile-details">
            <span className="admin_name">Prem Shahi</span>
            <i className="bx bx-chevron-down" />
          </div>
        </nav>
        <main className="main-container  py-5 ">
  <div className="main-title">
    <p className="font-weight-bold">Appointments</p>
  </div>
  <table id="example" className="table table-striped" style={{ width: "100%" }}>
    <thead>
      <tr>
        <th>Appointment No.</th>
        <th>Patient ID</th>
        <th>Doctor ID</th>
        <th>type</th>
        <th>Date/time</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>365423</td>
        <td>12345</td>
        <td>73456676</td>
        <td>video call</td>
        <td>24/3/2023-11:00pm</td>
        <td
          style={{
            backgroundColor: "rgb(37, 74, 143)",
            textAlign: "center",
            color: "aliceblue",
            borderRadius: "1vh"
          }}
        >
          Processing
        </td>
      </tr>
      <tr>
        <td>365423</td>
        <td>12345</td>
        <td>73456676</td>
        <td>on clinc</td>
        <td>24/3/2023-11:00pm</td>
        <td
          style={{
            backgroundColor: "rgb(12, 97, 17)",
            textAlign: "center",
            color: "aliceblue",
            borderRadius: "1vh"
          }}
        >
          Finished
        </td>
      </tr>
      <tr>
        <td>365423</td>
        <td>12345</td>
        <td>73456676</td>
        <td>video call</td>
        <td>24/3/2023-11:00pm</td>
        <td
          style={{
            backgroundColor: "rgb(37, 74, 143)",
            textAlign: "center",
            color: "aliceblue",
            borderRadius: "1vh"
          }}
        >
          Processing
        </td>
      </tr>
      <tr>
        <td>365423</td>
        <td>12345</td>
        <td>73456676</td>
        <td>on clinic</td>
        <td>24/3/2023-11:00pm</td>
        <td
          style={{
            backgroundColor: "rgb(12, 97, 17)",
            textAlign: "center",
            color: "aliceblue",
            borderRadius: "1vh"
          }}
        >
          Finished
        </td>
      </tr>
      <tr>
        <td>365423</td>
        <td>12345</td>
        <td>73456676</td>
        <td>video call</td>
        <td>24/3/2023-11:00pm</td>
        <td
          style={{
            backgroundColor: "rgb(37, 74, 143)",
            textAlign: "center",
            color: "aliceblue",
            borderRadius: "1vh"
          }}
        >
          Processing
        </td>
      </tr>
      <tr>
        <td>365423</td>
        <td>12345</td>
        <td>73456676</td>
        <td>home visit</td>
        <td>24/3/2023-11:00pm</td>
        <td
          style={{
            backgroundColor: "rgb(130, 23, 23)",
            textAlign: "center",
            color: "aliceblue",
            borderRadius: "1vh"
          }}
        >
          Cancelled
        </td>
      </tr>
      <tr>
        <td>365423</td>
        <td>12345</td>
        <td>73456676</td>
        <td>video call</td>
        <td>24/3/2023-11:00pm</td>
        <td
          style={{
            backgroundColor: "rgb(12, 97, 17)",
            textAlign: "center",
            color: "aliceblue",
            borderRadius: "1vh"
          }}
        >
          Finished
        </td>
      </tr>
      <tr>
        <td>365423</td>
        <td>12345</td>
        <td>73456676</td>
        <td>home visit</td>
        <td>24/3/2023-11:00pm</td>
        <td
          style={{
            backgroundColor: "rgb(37, 74, 143)",
            textAlign: "center",
            color: "aliceblue",
            borderRadius: "1vh"
          }}
        >
          Processing
        </td>
      </tr>
      <tr>
        <td>365423</td>
        <td>12345</td>
        <td>73456676</td>
        <td>video call</td>
        <td>24/3/2023-11:00pm</td>
        <td
          style={{
            backgroundColor: "rgb(12, 97, 17)",
            textAlign: "center",
            color: "aliceblue",
            borderRadius: "1vh"
          }}
        >
          Finished
        </td>
      </tr>
      <tr>
        <td>365423</td>
        <td>12345</td>
        <td>73456676</td>
        <td>online consultion</td>
        <td>24/3/2023-11:00pm</td>
        <td
          style={{
            backgroundColor: "rgb(37, 74, 143)",
            textAlign: "center",
            color: "aliceblue",
            borderRadius: "1vh"
          }}
        >
          Processing
        </td>
      </tr>
      <tr>
        <td>365423</td>
        <td>12345</td>
        <td>73456676</td>
        <td>video call</td>
        <td>24/3/2023-11:00pm</td>
        <td
          style={{
            backgroundColor: "rgb(130, 23, 23)",
            textAlign: "center",
            color: "aliceblue",
            borderRadius: "1vh"
          }}
        >
          Cancelled
        </td>
      </tr>
      <tr>
        <td>365423</td>
        <td>12345</td>
        <td>73456676</td>
        <td>video call</td>
        <td>24/3/2023-11:00pm</td>
        <td
          style={{
            backgroundColor: "rgb(12, 97, 17)",
            textAlign: "center",
            color: "aliceblue",
            borderRadius: "1vh"
          }}
        >
          Finished
        </td>
      </tr>
      <tr>
        <td>365423</td>
        <td>12345</td>
        <td>73456676</td>
        <td>online consultion</td>
        <td>24/3/2023-11:00pm</td>
        <td
          style={{
            backgroundColor: "rgb(37, 74, 143)",
            textAlign: "center",
            color: "aliceblue",
            borderRadius: "1vh"
          }}
        >
          Processing
        </td>
      </tr>
      <tr>
        <td>365423</td>
        <td>12345</td>
        <td>73456676</td>
        <td>video call</td>
        <td>24/3/2023-11:00pm</td>
        <td
          style={{
            backgroundColor: "rgb(12, 97, 17)",
            textAlign: "center",
            color: "aliceblue",
            borderRadius: "1vh"
          }}
        >
          Finished
        </td>
      </tr>
      <tr>
        <td>365423</td>
        <td>12345</td>
        <td>73456676</td>
        <td>video call</td>
        <td>24/3/2023-11:00pm</td>
        <td
          style={{
            backgroundColor: "rgb(37, 74, 143)",
            textAlign: "center",
            color: "aliceblue",
            borderRadius: "1vh"
          }}
        >
          Processing
        </td>
      </tr>
      <tr>
        <td>365423</td>
        <td>12345</td>
        <td>73456676</td>
        <td>video call</td>
        <td>24/3/2023-11:00pm</td>
        <td
          style={{
            backgroundColor: "rgb(12, 97, 17)",
            textAlign: "center",
            color: "aliceblue",
            borderRadius: "1vh"
          }}
        >
          Finished
        </td>
      </tr>
      <tr>
        <td>365423</td>
        <td>12345</td>
        <td>73456676</td>
        <td>online consultion</td>
        <td>24/3/2023-11:00pm</td>
        <td
          style={{
            backgroundColor: "rgb(37, 74, 143)",
            color: "aliceblue",
            textAlign: "center",
            borderRadius: "1vh"
          }}
        >
          Processing
        </td>
      </tr>
    </tbody>
  </table>
</main>

      </section>
      <div className="button">
        <Link href="#">See All</Link>
      </div>
    </>

  </>
 
}
