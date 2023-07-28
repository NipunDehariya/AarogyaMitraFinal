import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'


export default function Navbar({crrUser , remove}) {
  const navigate = useNavigate()
  function logout() {
    let userChoise = window.confirm("Are you sure to logout")
    if(userChoise){
      remove()
      navigate('/Login')
    }
  }
  return <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid ">
  
    <Link className="navbar-brand " to="/Home"><img src='pulsee.png' alt=''/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">


      
      {crrUser? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Features">Features</Link>
        </li>
        {/* <li class="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Contact">Contact us</Link>
        </li> */}
        <li class="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Profile">Profile</Link>
        </li>
      </ul>: ''}
     
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
         
         {crrUser ? <>
          <li className="nav-item">
         <button className=' btn btn-white text-black border border-3'> <span className="nav-link active pe-1" aria-current="page" to="/" onClick={logout}>logout</span></button>
        </li>
       
      
       
         </> :  <>
        <li className="nav-item">
         <button className='btn btn-danger'> <Link className="nav-link active text-white" aria-current="page" to="/Login">Login</Link></button>
        </li>
        <li className="nav-item">
          <button className='btn btn-danger m-2'><Link className="nav-link active text-white" aria-current="page" to="/Registration">Registration</Link></button>
        </li>
        </>}
      
    
       
         </ul>
    </div>
  </div>
</nav>
  </>
}
