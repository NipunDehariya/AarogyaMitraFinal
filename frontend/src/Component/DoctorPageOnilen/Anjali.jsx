import React from 'react'
import './DoctorPage.css'
import StarRating from './StarRating';

import { useState, useEffect } from 'react';



import { Link } from 'react-router-dom';
export default function HallaOnline() {
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
  const [reviews, setReviews] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // Load reviews from local storage
    const storedReviews = localStorage.getItem('reviews');
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, []);

  useEffect(() => {
    // Save reviews to local storage
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingIndex !== null) {
      // Edit existing review
      const updatedReviews = [...reviews];
      updatedReviews[editingIndex] = { review, rating };
      setReviews(updatedReviews);
      setEditingIndex(null);
    } else {
      // Add new review
      setReviews([...reviews, { review, rating }]);
    }
    setReview('');
    setRating(0);
  };

  const handleEdit = (index) => {
    // Load review into form for editing
    const { review, rating } = reviews[index];
    setReview(review);
    setRating(rating);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    // Delete review
    const updatedReviews = [...reviews];
    updatedReviews.splice(index, 1);
    setReviews(updatedReviews);
  };


  return <>
    <div className="container">
      <h1>Doctor Reservation Form</h1>
      <div className="doctor-info">
        <img src="doc2.jpg" alt='hellodoc'/>

        <div className="doctor-details">
          <h2>Dr. Anjali Arora</h2>
          <p>Professional Psychologist</p>
          <p>Location: Brajendra Nagar, Indore, MP</p>
          <p>Price: ₹800 per session</p>
        </div>
      </div>
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
      <Link to='/PaymentOnline'>
        <button className='btn btn-outline-danger mt-3 d-grid gap-2 col-6 mx-auto my-3' >Book a slot</button>
      </Link>
      <div>
      </div>
      <div  className='reviewform'>
      <form className='form-check-inline form-control m-4' onSubmit={handleSubmit}>
        <label className='form-control my-3 mb-3'>
          Review:
          <input className="input-field"type="text" value={review} onChange={(e) => setReview(e.target.value)} />
        </label>
        <label className='form-control my-3'> 
          Rating:
          <StarRating className='p-3' rating={rating} onRatingChange={(value) => setRating(value)} />
        </label>
        <button  className='btn btn-outline-success mt-3 d-grid gap-2 col-6 mx-auto my-3 '  type="submit">{editingIndex !== null ? 'Save' : 'Add'}</button>
      </form>
      
      <div>
        {reviews.map((review, index) => (
          <div key={index}>
            <p>{review.review}</p>
            <StarRating rating={review.rating} />
            <button className='py-3 m-3'  onClick={() => handleEdit(index)}>Edit</button>
            <button className='py-3 m-3'  onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
    <br></br>
    <div>
    <div className="Review">
        <span
          className="closebtn"
          onclick="this.parentElement.style.display='none';"
        >
          
        </span>
        <h5 style={{ fontSize: 18, fontWeight: 600 }}>Sabiha Khan</h5>
        <div style={{ marginTop: "-33px", marginInlineStart: 630 }}>
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star" />
          <span className="fa fa-star" />
          <span style={{ fontSize: 13 }}>8 March,2024</span>
        </div>
        <br />
        AarogyaMitra has been a lifesaver for me. I was going through a tough time in my personal and professional life, and I felt hopeless and alone. I'm very grateful for this service.
      </div>
      <div className="Review">
        <span
          className="closebtn"
          onclick="this.parentElement.style.display='none';"
        >
          
        </span>
        <h5 style={{ fontSize: 18, fontWeight: 600 }}>Rohan Sharma</h5>
        <div style={{ marginTop: "-33px", marginInlineStart: 630 }}>
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star" />
          <span className="fa fa-star" />
          <span style={{ fontSize: 13 }}>8 March,2024</span>
        </div>
        <br />
        The Doctor is very sweet talking and know how to Make the patient
        comfortable to talk about his manner, and there wasn't no waiting time or
        delay from the doctor himself.
      </div>
    </div>

    </div>
  </>
}
