import React from "react";
import { Link } from "react-router-dom";

// components

import AuthNavbar from "./../components/Navbar/AuthNavbar";
import Footer from "../components/Footers/Footer.js";

export default function Home() {
  return (
    <>
      <AuthNavbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
            className="absolute top-0 w-full h-full bg-full bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557683311-eac922347aa1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsdWUlMjBwdXJwbGUlMjBncmFkaWVudHxlbnwwfHwwfHx8MA%3D%3D')",
            }}
          >
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-4xl mb-3 font-bold leading-normal text-white">
                  Aarogya Mitra
                  </h1>
                  <p className="mt-4 text-xl font-sans text-white">
                    Experience the future of healthcare. Sign up today and take control of your health journey like never before.
                    
                  </p>
                  <p className="mt-4 text-xl font-sans italic text-white">
                   Commence scrolling to unveil the enchantment.
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-500">
                     <i class="fa-solid fa-video"></i>
                    </div>
                    <h6 className="text-xl font-semibold leading-normal">Video Conferences</h6>
                    <p className="mt-3 mb-3 text-black ">
                    Connect with healthcare professionals from the comfort of your home, ensuring timely access to expert medical advice
                    </p>
                    <Link
                   className="bg-blue-500 text-white active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none border-black lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button" to="/Login"
                >
                  {/* <i className="fas fa-arrow-alt-circle-down"></i>  */}
                  Try
                </Link>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-500">
                    <i class="fa-regular fa-calendar-check"></i>
                    </div>
                    <h6 className="text-xl font-semibold leading-normal">Personalised Doctor's Appointment</h6>
                    <p className="mt-3 mb-3 text-black">
                    Say goodbye to long waiting times,with a few clicks, schedule appointments with your preferred consultant.
                    </p>
                    <Link
                  className="bg-blue-500 text-white active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none border-black lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button" to="/Login"
                >
                  {/* <i className="fas fa-arrow-alt-circle-down"></i>  */}
                  Book
                </Link>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-500">
                     <i class="fa-brands fa-rocketchat"></i>
                    </div>
                    <h6 className="text-xl font-semibold leading-normal">Assisting Chatbot</h6>
                    <p className="mt-3 mb-3 text-black">
                    Engage with our intelligent chatbot for instant support and guidance on your healthcare journey. 
                    Our chatbot is here to assist you 24/7
                    </p>
                    <Link
                   className="bg-blue-500 text-white active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none border-black lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button" to="/Login"
                >
                  {/* <i className="fas fa-arrow-alt-circle-down"></i>  */}
                  Chat
                </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blue-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-3 font-bold leading-normal">
                  Ensuring your health is our priority.
                </h3>
                <p className="text-xl font-sans italic font-normal mt-3 mb-5 text-black">
                  Let our integrated functions make a good use for your health.
                </p>
                <Link
                 className="bg-blue-500 text-white active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none border-black lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button" to="/Login"
                >
                  {/* <i className="fas fa-arrow-alt-circle-down"></i>  */}
                  Get started
                </Link>
                
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src="https://imgs.search.brave.com/d2rgd9xe-TwkP2wpOAmuN9klHg3m2ca7ZPZOwpVnV24/rs:fit:500:0:0/g:ce/aHR0cHM6Ly92aXRh/bGRlc2lnbi5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MDQvMTEtV2Vic2l0/ZS1GZWF0dXJlcy1C/bG9nLUdyYXBoaWMt/ODE4eDU5Ni5qcGc"
                    className="w-full align-middle rounded-t-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
          
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
            </svg>
          </div>
       
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 mx-auto px-4 ">
                <h1 className="text-4xl mb-3 font-bold leading-normal text-black ">Mitigate psychological stress</h1>
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="Yoga girl2.jpg"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-600">
                  <i class="fa-solid fa-heart"></i>
                  </div>
                  <h3 className="text-3xl mb-3 font-bold leading-normal">Harmony Within</h3>
                  <p className="text-xl font-sans italic font-normal mt-3 mb-5 text-black">
                  Yoga: where breath meets peace, fostering mental clarity and emotional balance
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-20">
        <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20" style={{ transform: "translateZ(0)" }}>
        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        </svg>
        </div>

        <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
        <div className="md:pr-12">
          <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-600">
            <i class="fa-solid fa-gamepad"></i>
          </div>
          <h3 className="text-3xl mb-3 font-bold leading-normal">Video Game On!</h3>
          <p className="text-xl font-sans italic font-normal mt-3 mb-5 text-black">
            More than entertainment; they provide a sanctuary where minds can find solace, creativity can flourish, offering a therapeutic escape for the weary soul
          </p>
          <ul className="list-none mt-6">
            <li className="py-2">
              <div className="flex items-center">
              </div>
            </li>
          </ul>
        </div>
        </div>
        <div className="w-full md:w-4/12 mx-auto px-4 ">
        <img
          alt="..."
          className="max-w-full rounded-lg shadow-lg"
          src="videogame guys.jpg"
        />
        </div>
        </div>
        </div>
        </section>
        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
          
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
            </svg>
          </div>
       
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 mx-auto px-4 ">
    
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="meditating girl.jpg"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-600">
                  <i class="fa-solid fa-gamepad"></i>
                  </div>
                  <h3 className="text-3xl mb-3 font-bold leading-normal">A pathway to inner peace </h3>
                  <p className="text-xl font-sans italic font-normal mt-3 mb-5 text-black">
                  "Meditation isn't just a practice; it's a pathway to inner peace and mental clarity. Through its gentle guidance, we find solace from life's storms, cultivate resilience, and uncover the tranquil depths of our own minds."
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-20">
        <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20" style={{ transform: "translateZ(0)" }}>
        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        </svg>
        </div>

        <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
        <div className="md:pr-12">
          <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-600">
            <i class="fa-solid fa-gamepad"></i>
          </div>
          <h3 className="text-3xl mb-3 font-bold leading-normal">More than sound!</h3>
          <p className="text-xl font-sans italic font-normal mt-3 mb-5 text-black">
          Music: it's a healing balm for the mind and soul. With its soothing melodies or uplifting rhythms, it harmonizes our emotions, alleviates stress, and transports us to a place of serenity and joy
          </p>
          <ul className="list-none mt-6">
            <li className="py-2">
              <div className="flex items-center">
              </div>
            </li>
          </ul>
        </div>
        </div>
        <div className="w-full md:w-4/12 mx-auto px-4 ">
        <img
          alt="..."
          className="max-w-full rounded-lg shadow-lg"
          src="headphones.jpg"
        />
        </div>
        </div>
        </div>
        </section>
        
        
        <section className="pt-20 pb-48  bg-blueGray-200 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Here's the developing team</h2>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="profile picture"
                    src="satvikshrivastava.jpg" 
                    // src={require("assets/img/team-1-800x800.jpg").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Satvik Shrivastava</h5>
                    <div className="mt-6">
                     <a href="https://www.linkedin.com/in/xatvik/" target="_blank" rel="noopener noreferrer">
                      <button
                         className="bg-blue-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-4 mb-1"
                          type="button"
                          >
                            <i class="fa-brands fa-linkedin"></i>
                       </button>
                    </a>
                     <button
                          className="bg-blue-900 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          onClick={() => window.open('https://github.com/satvikx', '_blank')}
                       >
                        <i class="fa-brands fa-github"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="profile picture"
                    src="nipundehariya.jpg" 
                    // src={require("assets/img/team-2-800x800.jpg").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Nipun Dehariya</h5>
                   
                    <div className="mt-6">
                     <a href="https://www.linkedin.com/in/nipundehariya/" target="_blank" rel="noopener noreferrer">
                      <button
                         className="bg-blue-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-4 mb-1"
                          type="button"
                          >
                            <i class="fa-brands fa-linkedin"></i>
                       </button>
                    </a>
                      <button
                          className="bg-blue-900 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          onClick={() => window.open('https://github.com/NipunDehariya', '_blank')}
                      >
                        <i class="fa-brands fa-github"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="profile picture"
                    src="nipunyadav.jpg" 
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Nipun Yadav</h5>
                   
                    <div className="mt-6">
                    <a href="https://www.linkedin.com/in/nipun-yadav-3325b3258/" target="_blank" rel="noopener noreferrer">
                      <button
                         className="bg-blue-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-4 mb-1"
                          type="button"
                          >
                            <i class="fa-brands fa-linkedin"></i>
                       </button>
                    </a>
                      <button
                        className="bg-blue-900 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => window.open('https://github.com/01Nipun', '_blank')}
                      >
                        <i class="fa-brands fa-github"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="profile picture"
                    src="mouliksharma.jpg" 
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Moulik Sharma</h5>
                  
                    <div className="mt-6">
                    <a href="https://www.linkedin.com/in/moulik-sharma-44b2a7253/" target="_blank" rel="noopener noreferrer">
                      <button
                         className="bg-blue-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-4 mb-1"
                          type="button"
                          >
                            <i class="fa-brands fa-linkedin"></i>
                       </button>
                    </a>
                     <button
                        className="bg-blue-900 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fa-brands fa-github"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
