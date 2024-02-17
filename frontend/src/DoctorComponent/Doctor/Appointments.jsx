import React from 'react'
import { Link } from 'react-router-dom';
import './Style.css'
export default function Appointments() {

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
              <span className="links_name"> Online Sessions</span>
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
            <input type="text" id="search-input" name="search-input" />
            <button type="submit">Search</button>
          </form>
          <div className="profile-details">
            <span className="admin_name">Prem Shahi</span>
            <i className="bx bx-chevron-down" />
          </div>
      
        </nav>
        <div className="home-content">
          <div className="overview-boxes"></div>
          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">ToDay's Appointments</div>
              <div className="sales-details">
                <ul className="details">
                  <li className="topic"> PName</li>
                  <li>
                    <Link href="#">Alex Doe</Link>
                  </li>
                  <li>
                    <Link href="#">David Mart</Link>
                  </li>
                  <li>
                    <Link href="#">Roe Parter</Link>
                  </li>
                  <li>
                    <Link href="#">Diana Penty</Link>
                  </li>
                  <li>
                    <Link href="#">Martin Paw</Link>
                  </li>
                  <li>
                    <Link href="#">Doe Alex</Link>
                  </li>
                  <li>
                    <Link href="#">Aiana Lexa</Link>
                  </li>
                  <li>
                    <Link href="#">Rexel Mags</Link>
                  </li>
                  <li>
                    <Link href="#">Tiana Loths</Link>
                  </li>
                  <li>
                    <Link href="#">Alex Doe</Link>
                  </li>
                  <li>
                    <Link href="#">David Mart</Link>
                  </li>
                  <li>
                    <Link href="#">Roe Parter</Link>
                  </li>
                  <li>
                    <Link href="#">Diana Penty</Link>
                  </li>
                  <li>
                    <Link href="#">Martin Paw</Link>
                  </li>
                  <li>
                    <Link href="#">Doe Alex</Link>
                  </li>
                  <li>
                    <Link href="#">Aiana Lexa</Link>
                  </li>
                  <li>
                    <Link href="#">Rexel Mags</Link>
                  </li>
                  <li>
                    <Link href="#">Tiana Loths</Link>
                  </li>
                  <li>
                    <Link href="#">Alex Doe</Link>
                  </li>
                  <li>
                    <Link href="#">David Mart</Link>
                  </li>
                  <li>
                    <Link href="#">Roe Parter</Link>
                  </li>
                  <li>
                    <Link href="#">Diana Penty</Link>
                  </li>
                  <li>
                    <Link href="#">Martin Paw</Link>
                  </li>
                  <li>
                    <Link href="#">Doe Alex</Link>
                  </li>
                  <li>
                    <Link href="#">Aiana Lexa</Link>
                  </li>
                  <li>
                    <Link href="#">Rexel Mags</Link>
                  </li>
                  <li>
                    <Link href="#">Tiana Loths</Link>
                  </li>
                </ul>
                <ul className="details">
                  <li className="topic">Date</li>
                  <li>
                    <Link href="#">02 Jan 2021</Link>
                  </li>
                  <li>
                    <Link href="#">02 Jan 2021</Link>
                  </li>
                  <li>
                    <Link href="#">02 Jan 2021</Link>
                  </li>
                  <li>
                    <Link href="#">02 Jan 2021</Link>
                  </li>
                  <li>
                    <Link href="#">02 Jan 2021</Link>
                  </li>
                  <li>
                    <Link href="#">02 Jan 2021</Link>
                  </li>
                  <li>
                    <Link href="#">02 Jan 2021</Link>
                  </li>
                  <li>
                    <Link href="#">02 Jan 2021</Link>
                  </li>
                  <li>
                    <Link href="#">02 Jan 2021</Link>
                  </li>
                  <li>
                    <Link href="#">02 Jan 2021</Link>
                  </li>
                  <li>
                    <Link href="#">02 Jan 2021</Link>
                  </li>
                  <li>
                    <Link href="#">02 Jan 2021</Link>
                  </li>
                  <li>
                    <Link href="#">02 Jan 2021</Link>
                  </li>
                  <li>
                    <Link href="#">02 Jan 2021</Link>
                  </li>
                  <li>
                    <Link href="#">02 Jan 2021</Link>
                  </li>
                  <li>
                    <Link href="#">02 Jan 2021</Link>
                  </li>
                  <li>
                    <Link href="#">02 Jan 2021</Link>
                  </li>
                  <li>
                    <Link href="#">02 Jan 2021</Link>
                  </li>
                  <li>
                    <Link href="#">02 Jan 2021</Link>
                  </li>
                  <li>
                    <Link href="#">02 Jan 2021</Link>
                  </li>
                  <li>
                    <Link href="#">02 Jan 2021</Link>
                  </li>
                  <li>
                    <Link href="#">02 Jan 2021</Link>
                  </li>
                  <li>
                    <Link href="#">02 Jan 2021</Link>
                  </li>
                  <li>
                    <Link href="#">02 Jan 2021</Link>
                  </li>
                  <li>
                    <Link href="#">02 Jan 2021</Link>
                  </li>
                  <li>
                    <Link href="#">02 Jan 2021</Link>
                  </li>
                  <li>
                    <Link href="#">02 Jan 2021</Link>
                  </li>
                </ul>
                <ul className="details">
                  <li className="topic"> Type</li>
                  <li>
                    <Link href="#">Doctor Visit</Link>
                  </li>
                  <li>
                    <Link href="#">Video Consulting</Link>
                  </li>
                  <li>
                    <Link href="#">Video Consulting</Link>
                  </li>
                  <li>
                    <Link href="#">Doctor Visit</Link>
                  </li>
                  <li>
                    <Link href="#">Clinc Consulting</Link>
                  </li>
                  <li>
                    <Link href="#">Video Consulting</Link>
                  </li>
                  <li>
                    <Link href="#">Doctor Visit</Link>
                  </li>
                  <li>
                    <Link href="#">Clinc Consulting</Link>
                  </li>
                  <li>
                    <Link href="#">Doctor Visit</Link>
                  </li>
                  <li>
                    <Link href="#">Doctor Visit</Link>
                  </li>
                  <li>
                    <Link href="#">Video Consulting</Link>
                  </li>
                  <li>
                    <Link href="#">Video Consulting</Link>
                  </li>
                  <li>
                    <Link href="#">Doctor Visit</Link>
                  </li>
                  <li>
                    <Link href="#">Clinc Consulting</Link>
                  </li>
                  <li>
                    <Link href="#">Video Consulting</Link>
                  </li>
                  <li>
                    <Link href="#">Doctor Visit</Link>
                  </li>
                  <li>
                    <Link href="#">Clinc Consulting</Link>
                  </li>
                  <li>
                    <Link href="#">Doctor Visit</Link>
                  </li>
                  <li>
                    <Link href="#">Doctor Visit</Link>
                  </li>
                  <li>
                    <Link href="#">Video Consulting</Link>
                  </li>
                  <li>
                    <Link href="#">Video Consulting</Link>
                  </li>
                  <li>
                    <Link href="#">Doctor Visit</Link>
                  </li>
                  <li>
                    <Link href="#">Clinc Consulting</Link>
                  </li>
                  <li>
                    <Link href="#">Video Consulting</Link>
                  </li>
                  <li>
                    <Link href="#">Doctor Visit</Link>
                  </li>
                  <li>
                    <Link href="#">Clinc Consulting</Link>
                  </li>
                  <li>
                    <Link href="#">Doctor Visit</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="button">
        <Link href="#">See All</Link>
      </div>
    </>

  </>
}
