import React , { useEffect, useState } from 'react'
import './Chose.css'
import { Link } from 'react-router-dom';

import axios from 'axios';



export default function Chose() {
const [alldoctors, setAlldoctors] = useState(null)
 async function getdoctors(){
  let{data}   =  await axios.get("http://localhost:5000/api/v1/doctors")
 setAlldoctors(data.doctors)
  }

useEffect(function(){
  getdoctors()
},[])
  return  <>

  {alldoctors!=null ?  <div className='container my-2   '>
    <div className='row '>
 {alldoctors.map((docotrs , index)=> 
     <div key={index} className='col-md-4 profile'>
      <Link to={`/DoctorPage/${docotrs._id}`}>
      <img src="40.jpeg" alt="" className='profile-img bor' />
     <h2 className='text-center'>{docotrs.userName}</h2>
      <h4 className='text-center'>{docotrs.spectiality}</h4>
      </Link>
     <div>
       <span>
       Cardiology is a branch of medicine that deals with disorders of the heart and the cardiovascular system.
       </span>
     </div>

   </div>
 )}

      </div>

      </div> :   <div className='v-100 d-flex justify-content-center align-items-center '>
     <i class="fa-solid fa-spinner fa-spin fa-7x text-white"></i>
     </div>}
    
 
    
  
 
  
  </>
}
