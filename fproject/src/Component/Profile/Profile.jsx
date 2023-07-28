import React from 'react'
import { Link } from 'react-router-dom';


export default function Profile() {
  return <div className="container rounded bg-white mt-5 mb-5">
  <div className="row">
    <div className="col-md-3 border-right">
      <div className="d-flex flex-column align-items-center text-center p-3 py-5">
      </div>
      <div>
       <Link to='/History'>
       <button className='btn btn-outline-danger '>
        My Appointments
       </button>
       </Link>
      </div>
    </div>
    <div className="col-md-5 border-right">
      <div className="p-3 py-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
        
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <label className="labels">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="first name"
              defaultValue=""
            />
          </div>
          <div className="col-md-6">
            <label className="labels">Surname</label>
            <input
              type="text"
              className="form-control"
              defaultValue=""
              placeholder="surname"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <label className="labels">Mobile Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter phone number"
              defaultValue=""
            />
          </div>
        
          <div className="col-md-12">
            <label className="labels">Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter address "
              defaultValue=""
            />
          </div>
  
        
        
          <div className="col-md-12">
            <label className="labels">Email </label>
            <input
              type="text"
              className="form-control"
              placeholder="enter email id"
              defaultValue=""
            />
          </div>
         
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <label className="labels">Country</label>
            <input
              type="text"
              className="form-control"
              placeholder="country"
              defaultValue=""
            />
          </div>
          <div className="col-md-6">
            <label className="labels">State/Region</label>
            <input
              type="text"
              className="form-control"
              defaultValue=""
              placeholder="state"
            />
          </div>
        </div>
        <div className="mt-5 text-center">
          <button className="btn btn-primary profile-button" type="button">
            Save Profile
          </button>
        </div>
      </div>
    </div>
     
  </div>
</div>

}
