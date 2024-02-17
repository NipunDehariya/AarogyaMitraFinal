import React from 'react'
import { Link } from 'react-router-dom';
import './Style.css'
export default function Setting() {

    // let sidebar = document.querySelector(".sidebar");
    // let sidebarBtn = document.querySelector(".sidebarBtn");
    // sidebarBtn.click = function () {
    //     sidebar.classList.toggle("active");
    //     if (sidebar.classList.contains("active")) {
    //         sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    //     } else
    //         sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    // }
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
                            <div className="title">My Profile</div>
                            <br />
                            <div className="sales-details">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="card text-center " style={{ width: "18rem" }}>
                                                <img
                                                    src="doctor.jpg"
                                                    className="card-img-top"
                                                    alt="..."
                                                />
                                                <div className="card-body">
                                                    <h5 className="card-title">Dr.Ahmed</h5>
                                                    <Link href="#" className="btn btn-danger">
                                                        Edit Profile
                                                    </Link>
                                                    <p className="card-text">
                                                        146 Rates <br />
                                                        <span className="fa fa-star checked" />
                                                        <span className="fa fa-star checked" />
                                                        <span className="fa fa-star checked" />
                                                        <span className="fa fa-star checked" />
                                                        <span className="fa fa-star" />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="d-flex flex-row bd-highlight mb-3">
                                                <Link href="" className="p-2 bd-highlight">
                                                    My Profile
                                                </Link>
                                                <Link href="changPass" className="p-2 bd-highlight">
                                                    Change Password
                                                </Link>
                                                <Link href="review" className="p-2 bd-highlight">
                                                    Reviews
                                                </Link>
                                            </div>
                                            <div>
                                                <p>Change Password</p>
                                                <input
                                                    type="password"
                                                    placeholder="old password"
                                                    className="form-control w-50"
                                                />
                                                <br />
                                                <input
                                                    type="password"
                                                    placeholder="New password"
                                                    className="form-control w-50"
                                                />
                                                <br />
                                                <input
                                                    type="password"
                                                    placeholder="Re-Type New password"
                                                    className="form-control w-50"
                                                />
                                                <br />
                                                <Link href="#" className="btn btn-danger">
                                                    Save Change
                                                </Link>
                                            </div>
                                            <br />
                                            <div>
                                                <p>Review </p>
                                                <div className="card p-3">
                                                    <p>
                                                        samar hany <br />
                                                        <span className="fa fa-star checked" />
                                                        <span className="fa fa-star checked" />
                                                        <span className="fa fa-star checked" />
                                                        <span className="fa fa-star checked" />
                                                        <span className="fa fa-star" />
                                                        <br />
                                                        this is my fav doctor
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
