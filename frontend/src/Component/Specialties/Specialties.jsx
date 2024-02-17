import React from 'react'

import './Specialties.css'
import { Link } from 'react-router-dom';

export default function Specialties() {

  
   return <>
   <div >
   <div className="specialties-container container">
      <h2>Our Specialties</h2>
      <p>We offer a range of specialties to meet your healthcare needs.</p>
      <div className="specialties-grid row ">
        <div className="specialty w-25 py-2 col-md-4 " >
        <Link to='/doctorchose'>
          <img src="9.png" alt="Cardiology"  className='w-50'/>
          <h3 className='py-3'> Cardiology</h3>
         
          </Link>
        </div>
        <div className="specialty w-25 py-2 col-md-4">
        <Link to='/doctorchose'>
          <img src="30.png" alt="Chest and Respiratory"  className='w-50'/>
          <h3 className='py-3'>Chest and Respiratory</h3>  
          </Link>
        </div>
        <div className="specialty w-25 py-2 col-md-4 ">
        <Link to='/doctorchose'>
          <img src="11.png" alt="General Surgery"  className='w-50'/>
          <h3 className='py-3'>General Surgery</h3>
          
          </Link>
        </div>
        <div className="specialty w-25 py-2 col-md-4 ">
          <Link to='/doctorchose'>
          <img src="20.png" alt="Nephrology"  className='w-50'/>
          <h3 className='py-3'>Nephrology</h3>
          
          </Link>
        </div>
        <div className="specialty w-25 py-2  col-md-4 ">
          <Link to='/doctorchose'>
          <img src="19.png" alt="Internal Medicine"  className='w-50'/>
          <h3 className='py-3'>Internal Medicine</h3>
          </Link>
        </div>
        <div className="specialty w-25  py-2 col-md-4 ">
          <Link to='/doctorchose'>
          <img src="15.png" alt="Geriatrics"  className='w-50'/>
          <h3 className='py-3'>Geriatrics</h3>
          
          </Link>
        </div>
        <div className="specialty w-25  py-2 col-md-4">
          <Link to='/doctorchose'>
          <img src="31.png" alt="Rheunatology"  className='w-50'/>
          <h3 className='py-3'>Rheumatology</h3>
          
          </Link>
        </div>
        <div className="specialty w-25  py-2 col-md-4 ">
          <Link to='/doctorchose'>
          <img src="12.png" alt="Hematology"  className='w-50'/>
          <h3 className='py-3'>Hematology</h3>
          
          </Link>
        </div>
        <div className="specialty w-25  py-2 col-md-4">
          <Link to='/doctorchose'>
          <img src="21.png" alt="Neurology"  className='w-50'/>
          <h3 className='py-3'>Neurology</h3>
          </Link>
        </div>
        <div className="specialty w-25  py-2 col-md-4 ">
          <Link to='/doctorchose'>
          <img src="16.png" alt="Gynaecology and Infertility"  className='w-50'/>
          <h3 className='py-3'>Gynaecology and Infertility</h3> 
          </Link>
        </div>
        <div className="specialty w-25 py-2 col-md-4">
          <Link to='/doctorchose'>
          <img src="32.png" alt="Gynaecology"  className='w-50'/>
          <h3 className='py-3'>Gynaecology</h3>
             </Link>
        </div>
        <div className="specialty w-25 py-2 col-md-4 ">
          <Link to='/doctorchose'>
          <img src="adult-cardiac-surgery.png" alt="Gastroenterology"  className='w-50'/>
          <h3 className='py-3'>Gastroenterology</h3>
          </Link>
        </div>
      </div>
    </div>
   </div>
  </>

  
}
