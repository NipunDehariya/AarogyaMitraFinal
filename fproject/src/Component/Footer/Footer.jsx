import React from 'react'
import './Footer.css'
export default function Footer() {

  return <> 
  <footer className="text-center text-lg-start bg-light text-muted my-3">
 
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
  
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
   
    <div>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-twitter" />
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-google" />
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-instagram" />
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-linkedin" />
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-github" />
      </a>
    </div>
   
  </section>
    
    <div>
       
    </div>
  
  <div
    className="text-center p-4"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
  >
    © 2023
    <a className="text-reset fw-bold co" href="https://mdbootstrap.com/">
    created by PULSE TEAM all rights reserved
    </a>
  </div>
 
</footer>

</>
}