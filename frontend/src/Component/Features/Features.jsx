import React from 'react'
import './Features.css'
import { Link } from 'react-router-dom';

export default function Features() {
  return <>

  <div className='container'>
    <div className='row'>
      
    <div className='col-md-4 '>
      <figure>


      <img src="dr5.jpg" alt="Service or process" className='w-100 he' />
         <figcaption className=' bg-light text-center p-3'>
         <Link className=' text-black' to='/SpecialtiesOnline'>  <h2> Doctor video call </h2></Link>
       
         </figcaption>
      </figure>
      </div>
      <div className='col-md-4 '>
      <figure>


      <img src="dr2.jpg" alt="Service or process" className='w-100 he' />
         <figcaption className=' bg-light text-center p-3'>
         <Link className=' text-black' to ="/Specialties" >  <h2> Clinic detection </h2></Link>
       
         </figcaption>
      </figure>
      </div>

      <div className='col-md-4 '>
      <figure>


      <img src="dr1.jpg" alt="Service or process" className='w-100 he' />
         <figcaption className=' bg-light text-center p-3'>
         <Link className=' text-black' to='/Specialties'>  <h2> Home visit</h2></Link>
       
         </figcaption>
      </figure>
      </div>
      
      
      
      
     
      
    </div>
    
  </div>
  </>
}
