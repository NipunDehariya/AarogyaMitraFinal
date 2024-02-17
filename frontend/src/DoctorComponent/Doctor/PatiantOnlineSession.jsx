import React from 'react'
import { Link } from 'react-router-dom';
import './Style.css'
export default function PatiantOnlineSession() {


  
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
          <h2>Online Sessions </h2>
        </div>
        <table className='table-success table-striped table'>
  <thead>
    <tr>
      <th> Patient Name</th>
      <th> Patient id </th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Abdelrahman</td>
      <td>32124</td>
      <td> <Link to='/Meeting'>
        <button className='btn btn-outline-info mt-3 d-grid gap-2 mx-auto my-3 '>
          Go to session online
        </button>
        </Link></td> 
    </tr>
    <tr>
      <td>Ali</td>
      <td>34524</td>
      <td> <Link to='/Meeting'>
        <button className='btn btn-outline-info mt-3 d-grid gap-2 mx-auto my-3 '>
          Go to session online
        </button>
        </Link></td>
    </tr>
    <tr>
      <td>Omar</td>
      <td>34461</td>
      <td> <Link to='/Meeting'>
        <button className='btn btn-outline-info mt-3 d-grid gap-2 mx-auto my-3 '>
          Go to session online
        </button>
        </Link></td>
    </tr>
  </tbody>
</table>

      </div>
    </div>
  </div>
</section>

        <br />
        <div className="p-4">
          <h2>Medical Report</h2>
          <input
            className="form-control w-50"
            type="text"
            placeholder="patiant name"
          />
          <br />
          <input
            className="form-control w-50"
            type="text"
            placeholder="patiant id"
          />
          <br />
          <button className="btn-primary p-2 rounded-pill">
            +Add Medical Report
          </button>
        </div>
      </section>
      <div className="button">
        <Link href="#">See All</Link>
      </div>
    </>
  </>

}
