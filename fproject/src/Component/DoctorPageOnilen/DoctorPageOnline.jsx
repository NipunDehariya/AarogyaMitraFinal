import React from 'react'
import './DoctorPage.css'
import StarRating from './StarRating';
import TimeBox from '../DoctorPage/TimeBox.jsx';
import DateBox from '../DoctorPage/Datebox.jsx';
import { useState, useEffect } from 'react';

import axios from 'axios';

import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function DoctorPageOnline() {
 const [doctorsData, setDoctorsData] = useState(null)

  async function getdoctorsData(){
    
    let{data}   =  await axios.get('http://localhost:5000/api/v1/doctors')
   
    setDoctorsData(data)
  }
 useEffect(()=>{
  getdoctorsData()
 }, [])

 const [selectedDate, setSelectedDate] = useState(null);

 useEffect(() => {
   const savedTime = localStorage.getItem('selectedDate');
   if (savedTime) {
     setSelectedTime(savedTime);
   }
 }, []);

 const handleDateChange = (event) => {
   const newDate = event.target.value;
   setSelectedDate(newDate);
   localStorage.setItem('selectedDate', newDate);
 };

 const DateOptions = [
   '5 Mar 2023',
   '6 Mar 2023',
   '7 Mar 2023',
 ]

 
 const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    const savedTime = localStorage.getItem('selectedTime');
    if (savedTime) {
      setSelectedTime(savedTime);
    }
  }, []);

  const handleTimeChange = (event) => {
    const newTime = event.target.value;
    setSelectedTime(newTime);
    localStorage.setItem('selectedTime', newTime);
  };

  const timeOptions = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
  ]




  const [reviews, setReviews] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {
    
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
  // let nav = useNavigate()

  // let {id} = useParams()
  //  console.log(id);
  // async function books(){
  //    let {data} = await axios.post('http://localhost:5000/api/v1/books',{doctor:id} , {
  //     headers:{token:localStorage.getItem('tkn')}
        
  //    })
  //    nav('/PaymentPageOnline')
  //    console.log(data);

  //  }


  return <>

  {doctorsData !=null?  <div className="container">
      <h1>Doctor Reservation Form</h1>
      <div className="doctor-info">
        <img src="40.jpeg" alt="Doctor photo" />

        <div className="doctor-details">
          <h2>{doctorsData.userName}</h2>
          <p>{doctorsData.spectiality}</p>
          <p>Location: Cairo, Heliopolis, El Nozha</p>
          <p>price:300</p>
        </div>
      </div>
     <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
        <div>
      <h2>Select a Time</h2>
      <select value={selectedTime} onChange={handleTimeChange}>
        <option value="">Select a time...</option>
        {timeOptions.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>
      {selectedTime && (
        <div>
          <h3>Your selected time:</h3>
          <TimeBox time={selectedTime} />
        </div>
      )}
    </div>
   
        </div>
        <div className='col-md-6'>
        <div>
      <h2>Select a date</h2>
      <select value={selectedDate} onChange={handleDateChange}>
        <option value="">Select a Date...</option>
        {DateOptions.map((date) => (
          <option key={date} value={date}>{date}</option>
        ))}
      </select>
      {selectedTime && (
        <div>
          <h3>Your selected Date:</h3>
          <DateBox  date={selectedDate} />
        </div>
      )}
    </div>
        </div>
      </div>
     </div>
      <div>
      </div>
      <div>
     
      <Link to='/PaymentPageOnline'>
      <button  className='btn btn-outline-success mt-3 d-grid gap-2 col-6 mx-auto my-3' >Confirm</button>
      </Link>
    
      <form className='form-check-inline form-control m-5 mb-4  ' onSubmit={handleSubmit}>
        <label className='form-control my-3'>
          Review:
          <input className='form-control ' type="text" value={review} onChange={(e) => setReview(e.target.value)} />
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
    <div>
    <div className="Review">
        <span
          className="closebtn"
          onclick="this.parentElement.style.display='none';"
        >
          
        </span>
        <h5 style={{ fontSize: 18, fontWeight: 600 }}>Omar hossam</h5>
        <div style={{ marginTop: "-33px", marginInlineStart: 630 }}>
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star" />
          <span className="fa fa-star" />
          <span style={{ fontSize: 13 }}>8 March,2023</span>
        </div>
        <br />
        The Doctor is very sweat talking and know how to Make the patient
        comfortable to talk about his manner , and there wasn't no waiting time or
        delay from the doctor himself.
      </div>
      <div className="Review">
        <span
          className="closebtn"
          onclick="this.parentElement.style.display='none';"
        >
          
        </span>
        <h5 style={{ fontSize: 18, fontWeight: 600 }}>Halla Sayed</h5>
        <div style={{ marginTop: "-33px", marginInlineStart: 630 }}>
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star" />
          <span className="fa fa-star" />
          <span style={{ fontSize: 13 }}>8 March,2023</span>
        </div>
        <br />
        The Doctor is very sweat talking and know how to Make the patient
        comfortable to talk about his manner , and there wasn't no waiting time or
        delay from the doctor himself.
      </div>
      <div className="Review">
        <span
          className="closebtn"
          onclick="this.parentElement.style.display='none';"
        >
          
        </span>
        <h5 style={{ fontSize: 18, fontWeight: 600 }}>Samar hany</h5>
        <div style={{ marginTop: "-33px", marginInlineStart: 630 }}>
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star" />
          <span className="fa fa-star" />
          <span style={{ fontSize: 13 }}>8 March,2023</span>
        </div>
        <br />
        The Doctor is very sweat talking and know how to Make the patient
        comfortable to talk about his manner , and there wasn't no waiting time or
        delay from the doctor himself.
      </div>
      <div className="Review">
        <span
          className="closebtn"
          onclick="this.parentElement.style.display='none';"
        >
          
        </span>
        <h5 style={{ fontSize: 18, fontWeight: 600 }}>Mahmoud Akram</h5>
        <div style={{ marginTop: "-33px", marginInlineStart: 630 }}>
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star" />
          <span className="fa fa-star" />
          <span style={{ fontSize: 13 }}>8 March,2023</span>
        </div>
        <br />
        The Doctor is very sweat talking and know how to Make the patient
        comfortable to talk about his manner , and there wasn't no waiting time or
        delay from the doctor himself.
      </div>
    </div>


    
    </div>:<div className='v-100 d-flex justify-content-center align-items-center '>
     <i class="fa-solid fa-spinner fa-spin fa-7x text-white"></i>
     </div>}
    
  </>
}
