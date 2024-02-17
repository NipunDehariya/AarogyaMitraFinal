import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function TheTableOfOnlineMeeting() {
    const [timeSlots, setTimeSlots] = useState([
        { time: '9:00 AM', available: true },
        { time: '10:00 AM', available: true },
        { time: '11:00 AM', available: true },
        { time: '12:00 AM', available: true },
        // Add more time slots here
      ]);
    
      const handleTimeSlotClick = (index) => {
        const newTimeSlots = [...timeSlots];
        newTimeSlots[index].available = !newTimeSlots[index].available;
        setTimeSlots(newTimeSlots);
      };
  return <>
     <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((slot, index) => (
            <tr
              key={index}
              className={slot.available ? 'available' : 'unavailable'}
              onClick={() => handleTimeSlotClick(index)}
            >
              <td>{slot.time}</td>
              <td>{slot.available ? 'Available' : 'Unavailable'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        
      <Link to='/PaymentPage'>
        <button className='btn btn-outline-danger mt-3 d-grid gap-2 col-6 mx-auto my-3' >to confirm your reservation</button>
      </Link>
      </div>
  </>
}
