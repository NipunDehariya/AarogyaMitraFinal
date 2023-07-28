import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom';
import './Style.css'
import moment from "moment";
import Pagination from "react-bootstrap/Pagination";
export default function Schedule() {
    const [scheduleEntries, setScheduleEntries] = useState([]);
    const [newEntry, setNewEntry] = useState({
      date: "",
      time: "",
      description: "",
    });
    const [currentPage, setCurrentPage] = useState(1);
    const entriesPerPage = 5;
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setNewEntry({ ...newEntry, [name]: value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setScheduleEntries([...scheduleEntries, newEntry]);
      setNewEntry({ date: "", time: "", description: "" });
    };
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = scheduleEntries.slice(indexOfFirstEntry, indexOfLastEntry);
  
    const renderScheduleEntries = () => {
      return currentEntries.map((entry, index) => (
        <tr key={index}>
          <td>{moment(entry.date).format("DD/MM/YYYY")}</td>
          <td>{entry.time}</td>
          <td>{entry.description}</td>
        </tr>
      ));
    };
  
    const renderPaginationItems = () => {
      const pageNumbers = Math.ceil(scheduleEntries.length / entriesPerPage);
      const paginationItems = [];
      for (let i = 1; i <= pageNumbers; i++) {
        paginationItems.push(
          <Pagination.Item key={i} active={i === currentPage} onClick={() => handlePageChange(i)}>
            {i}
          </Pagination.Item>
        );
      }
      return paginationItems;
    };

 


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
                        <input type="text" id="search-input" name="search-input" />
                        <button type="submit">Search</button>
                    </form>
                   
                </nav>
                <br />
                <br />
                <br />
                <br />
                <div className="container">
      <h1>Schedule Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={newEntry.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            className="form-control"
            id="time"
            name="time"
            value={newEntry.time}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={newEntry.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Entry
        </button>
      </form>
      <hr />
      <h2>Schedule Entries</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{renderScheduleEntries()}</tbody>
      </table>
      <Pagination>{renderPaginationItems()}</Pagination>
    </div>

    <div>
    <div className="home-content">
  <div className="overview-boxes" />
  <div className="sales-boxes">
    <div className="recent-sales box">
      <div className="title">
        <h2>Your Schedule</h2>
      </div>
      <div className="sales-details">
        <main className="main-container">
          <div className="main-title">
            <p className="font-weight-bold" />
          </div>
          <table
            id="example"
            className="table table-striped"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th>DATE</th>
                <th>TIME</th>
                <th>TYPE</th>
                <th>STATUS</th>
                <th>EDIT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>19/3/2023</td>
                <td>12:00 PM To 12:30 PM</td>
                <td>video call</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>20/3/2023</td>
                <td>11:00 PM To 11:30 PM</td>
                <td>Clinic Consulting</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>25/3/2023</td>
                <td>1:00 AM To 11:30 AM</td>
                <td>Doctor Visit</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>25/3/2023</td>
                <td>1:00 AM To 11:30 AM</td>
                <td>Doctor Visit</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>19/3/2023</td>
                <td>12:00 PM To 12:30 PM</td>
                <td>video call</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>20/3/2023</td>
                <td>11:00 PM To 11:30 PM</td>
                <td>Clinic Consulting</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>25/3/2023</td>
                <td>1:00 AM To 11:30 AM</td>
                <td>Doctor Visit</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>25/3/2023</td>
                <td>1:00 AM To 11:30 AM</td>
                <td>Doctor Visit</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>19/3/2023</td>
                <td>12:00 PM To 12:30 PM</td>
                <td>video call</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>20/3/2023</td>
                <td>11:00 PM To 11:30 PM</td>
                <td>Clinic Consulting</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>25/3/2023</td>
                <td>1:00 AM To 11:30 AM</td>
                <td>Doctor Visit</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>25/3/2023</td>
                <td>1:00 AM To 11:30 AM</td>
                <td>Doctor Visit</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>19/3/2023</td>
                <td>12:00 PM To 12:30 PM</td>
                <td>video call</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>20/3/2023</td>
                <td>11:00 PM To 11:30 PM</td>
                <td>Clinic Consulting</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>25/3/2023</td>
                <td>1:00 AM To 11:30 AM</td>
                <td>Doctor Visit</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>25/3/2023</td>
                <td>1:00 AM To 11:30 AM</td>
                <td>Doctor Visit</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>19/3/2023</td>
                <td>12:00 PM To 12:30 PM</td>
                <td>video call</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>20/3/2023</td>
                <td>11:00 PM To 11:30 PM</td>
                <td>Clinic Consulting</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>25/3/2023</td>
                <td>1:00 AM To 11:30 AM</td>
                <td>Doctor Visit</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>25/3/2023</td>
                <td>1:00 AM To 11:30 AM</td>
                <td>Doctor Visit</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>19/3/2023</td>
                <td>12:00 PM To 12:30 PM</td>
                <td>video call</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>20/3/2023</td>
                <td>11:00 PM To 11:30 PM</td>
                <td>Clinic Consulting</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>25/3/2023</td>
                <td>1:00 AM To 11:30 AM</td>
                <td>Doctor Visit</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>25/3/2023</td>
                <td>1:00 AM To 11:30 AM</td>
                <td>Doctor Visit</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>19/3/2023</td>
                <td>12:00 PM To 12:30 PM</td>
                <td>video call</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>20/3/2023</td>
                <td>11:00 PM To 11:30 PM</td>
                <td>Clinic Consulting</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>25/3/2023</td>
                <td>1:00 AM To 11:30 AM</td>
                <td>Doctor Visit</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>25/3/2023</td>
                <td>1:00 AM To 11:30 AM</td>
                <td>Doctor Visit</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>19/3/2023</td>
                <td>12:00 PM To 12:30 PM</td>
                <td>video call</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>20/3/2023</td>
                <td>11:00 PM To 11:30 PM</td>
                <td>Clinic Consulting</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>25/3/2023</td>
                <td>1:00 AM To 11:30 AM</td>
                <td>Doctor Visit</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>25/3/2023</td>
                <td>1:00 AM To 11:30 AM</td>
                <td>Doctor Visit</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>19/3/2023</td>
                <td>12:00 PM To 12:30 PM</td>
                <td>video call</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>20/3/2023</td>
                <td>11:00 PM To 11:30 PM</td>
                <td>Clinic Consulting</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>25/3/2023</td>
                <td>1:00 AM To 11:30 AM</td>
                <td>Doctor Visit</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>25/3/2023</td>
                <td>1:00 AM To 11:30 AM</td>
                <td>Doctor Visit</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>19/3/2023</td>
                <td>12:00 PM To 12:30 PM</td>
                <td>video call</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>20/3/2023</td>
                <td>11:00 PM To 11:30 PM</td>
                <td>Clinic Consulting</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>25/3/2023</td>
                <td>1:00 AM To 11:30 AM</td>
                <td>Doctor Visit</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <td>25/3/2023</td>
                <td>1:00 AM To 11:30 AM</td>
                <td>Doctor Visit</td>
                <td>
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "rgb(85, 85, 85)",
                      borderColor: "rgb(85, 85, 85)",
                      boxShadow: "none",
                      textDecorationColor: "white",
                      color: "white",
                      borderRadius: 1
                    }}
                  >
                    <a
                      href="Edit.html"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit
                    </a>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </div>
  </div>
</div>
    
    </div>
            </section>
        </>

    </>
}
