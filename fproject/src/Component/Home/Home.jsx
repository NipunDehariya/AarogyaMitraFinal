import React from 'react'

import './Home.css'
import { Link, Outlet } from 'react-router-dom';

import ChatBot from '../Chatbot/Chatbot.jsx'
import { useState, useRef  } from 'react';



export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const handleTogglePlay = () => {
    const video = videoRef.current;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }

    setIsPlaying(!isPlaying);
  };


  
  return <>
    <div className='container back'>
      <div className='row '>
        <div className='col-md-6  fonts mt-5'>
          <div className='py-5 whitefont'>
            <h1>Pulse Tele-health</h1>
            <p>Book online or we book you</p>
            <span> <i className="fa-brands fa-facebook facbook fa-beat"></i></span>
            <span> <i class="fa-brands fa-whatsapp whatsapp fa-beat"></i></span>
            <span><i class="fa-brands fa-twitter twitter m-2 fa-beat "></i></span>
            <br />
            <button className='btn btn-outline-info bw '>
              <Link to="/Contact">Contact us</Link>
            </button>
          </div>
        </div>
        <div className='col-md-6   mt-5 '>
          {/* <img src="" alt=" the" className='w-75 fort ms-5' /> */}
        </div>
      </div>
    </div>
    <div className=" container back2">
    <div className="row">
      <div className="section-head">
        <h3 className="text-dark"><b>Offers</b></h3>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="w-75 m-auto  text-center">
                <img
                  src="offer.png"
                  className="rounded-circle w-50 h-50"
                  alt="porfile"
                />
                <p className="pt-5">
                <h1> <b>20% OFF on first video meeting</b></h1>
                </p>
               
              </div>
            </div>
            <div className="carousel-item">
              <div className="w-75 m-auto   text-center">
                <img
                  src="offer2.png"
                  className="rounded-circle w-50 h-50"
                  alt="porfile"
                />
                <p className="pt-5">
                <h1> <b>Win a promo code after Doctor video call !</b></h1>
                </p>
               
              </div>
            </div>
            <div className="carousel-item">
              <div className="w-75 m-auto   text-center">
                <img
                  src="offer3.png"
                  className="rounded-circle w-50 h-50"
                  alt="porfile"
                />
                <p className="pt-5">
                <h1> <b>10% OFF on first clinic reservation !</b></h1>
                </p>
                
              </div>
            </div>
          </div>
          <div className="carousel-indicators ">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 2"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
    <div className='py-5'>
      <h1 className='ms-5 text-dark text-center '><b>Services</b></h1>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-md-6'>
            <div>
              <img src="dr9.jpg" alt="" className=' w-100' />
            </div>
          </div>
          <div className='col-md-6'>
            <div>
              <h1><b>"Doctor video call"</b> </h1>
              <p></p>
            </div>Telehealth, also known as telemedicine, 
            is the use of technology to provide remote healthcare 
            services and consultations. A telehealth app allows 
            patients to connect with healthcare providers from the 
            comfort of their own homes or workplaces, using video 
            conferencing, messaging, or other communication methods. 
            Telehealth apps are becoming increasingly popular as they provide a 
            convenient way for patients to access healthcare services without having 
            to travel to a physical location, which is especially beneficial for 
            those who live in rural or remote areas, 
            or for those who have limited mobility or
             transportation options. Telehealth apps 
             can be used for a variety of healthcare services,
              such as virtual consultations, remote monitoring, 
              medication management, and mental health support. 
              They have the potential to improve patient outcomes,
               increase patient satisfaction, 
               and reduce healthcare costs by minimizing the
             need for in-person visits and hospitalizations.
          </div>
        </div>
      </div>
    </div>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-md-6'>
            <div>
              <h1><b>"Clinic detection"</b> </h1>
              <p></p>
            </div>Telehealth, also known as telemedicine, 
            is the use of technology to provide remote healthcare 
            services and consultations. A telehealth app allows 
            patients to connect with healthcare providers from the 
            comfort of their own homes or workplaces, using video 
            conferencing, messaging, or other communication methods. 
            Telehealth apps are becoming increasingly popular as they provide a 
            convenient way for patients to access healthcare services without having 
            to travel to a physical location, which is especially beneficial for 
            those who live in rural or remote areas, 
            or for those who have limited mobility or
             transportation options. Telehealth apps 
             can be used for a variety of healthcare services,
              such as virtual consultations, remote monitoring, 
              medication management, and mental health support. 
              They have the potential to improve patient outcomes,
               increase patient satisfaction, 
               and reduce healthcare costs by minimizing the
             need for in-person visits and hospitalizations.
          </div>
          <div className='col-md-6'>
            <div>
              <img src="dr2.jpg" alt="" className=' w-100' />
            </div>
          </div>
        </div>
      </div>
      <div className='container py-5'>
        <div className='row'>
         
          <div className='col-md-6'>
            <div>
              <img src="dr1.jpg" alt="" className=' w-100' />
            </div>
            
          </div>
          <div className='col-md-6'>
            <div>
              <h1><b>"Doctor home visit"</b> </h1>
              <p></p>
            </div>Telehealth, also known as telemedicine, 
            is the use of technology to provide remote healthcare 
            services and consultations. A telehealth app allows 
            patients to connect with healthcare providers from the 
            comfort of their own homes or workplaces, using video 
            conferencing, messaging, or other communication methods. 
            Telehealth apps are becoming increasingly popular as they provide a 
            convenient way for patients to access healthcare services without having 
            to travel to a physical location, which is especially beneficial for 
            those who live in rural or remote areas, 
            or for those who have limited mobility or
             transportation options. Telehealth apps 
             can be used for a variety of healthcare services,
              such as virtual consultations, remote monitoring, 
              medication management, and mental health support. 
              They have the potential to improve patient outcomes,
               increase patient satisfaction, 
               and reduce healthcare costs by minimizing the
             need for in-person visits and hospitalizations.
          </div>
        </div>
      </div>
    <div>
      <div className="video-container">
        <video
          // src="What is Telehealth-.mp4"
          autoPlay
          
          loop
          ref={videoRef}
          onClick={handleTogglePlay}
        />
      </div>
    </div>
     <div>
     <section className="clintes section-padding  pt-5 pb-5  ">
  
</section>

     </div>


    <Outlet />
    <ChatBot />


  </>
}
