import React from 'react'
import { Link } from 'react-router-dom';

export default function History() {

  return <>
    <div className="appointments">
      <h2 className='d-flex justify-content-center align-items-center'>My Appointments</h2>
      
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Doctor</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            
              <tr>
                <td> 5 Mar 2023 </td>
                <td> 6 pm</td>
                <td> Omar Hossam </td>
                <td> video call </td>
                <td><button className='btn btn-success'>
                   Finished
                  </button></td>
              </tr>
              <tr>
                <td> 7 Mar 2023 </td>
                <td> 9 pm</td>
                <td> Abdel Rahman khaled </td>
                <td> Clinic Consulting </td>
                <td><button className='btn btn-danger'>
                   Cancelled
                  </button></td>
              </tr>
              <tr>
                <td> 14 Mar 2023 </td>
                <td> 3 pm</td>
                <td> Omar Mohamed  </td>
                <td> video call </td>
                <td><button className='btn btn-success'>
                   Finished
                  </button></td>
              </tr>
              <tr>
                <td> 23  April 2023 </td>
                <td> 5 pm</td>
                <td> Ahmed khaled </td>
                <td> video call </td>
                <td><button className='btn btn-secondary'>
                   Pending
                  </button></td>
              </tr>
              <tr>
                <td> 6 April 2023 </td>
                <td> 5 pm</td>
                <td> Halla sayed </td>
                <td> Clinic Consulting </td>
                <td><button className='btn btn-success'>
                   Finished
                  </button></td>
              </tr>
          </tbody>
        </table>
      
    </div>
    <div>
      
        <Link to='/Specialties'>
        <button className='btn btn-outline-success mt-3 d-grid gap-2 col-6 mx-auto my-3'>
            to book
        </button>
        </Link>
    </div>
  </>
}
