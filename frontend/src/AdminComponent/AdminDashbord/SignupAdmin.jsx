import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom';

export default function SignupAdmin() {
  return <div className="container py-3">
  <div className="screen">
    <div className="screen__content">
      <form className="login">
        <div className="login__field">
          <i className="login__icon fas fa-user" />
          <input
            type="text"
            className="login__input"
            placeholder="Admin name / Email"
          />
        </div>
        <div className="login__field">
          <i className="login__icon fas fa-lock" />
          <input
            type="password"
            className="login__input"
            placeholder="Password"
          />
        </div>
        <Link to='/Admin'>
        <button className="button login__submit">
          
          <span className="button__text">
            {" "}
            Login for Admin
          </span>
          <i className="button__icon fas fa-chevron-right" />
        </button>
        </Link>
      </form>
      <div className="social-login">
        <span className="logo_name">
          <img src="V.png" />
          Pulse <br />
          <span
            style={{
              color: "rgb(217, 233, 36)",
              fontSize: 20,
              fontWeight: "bold"
            }}
          >
            {" "}
            for Admin
          </span>
        </span>
      </div>
    </div>
    <div className="screen__background">
      <span className="screen__background__shape screen__background__shape4" />
      <span className="screen__background__shape screen__background__shape3" />
      <span className="screen__background__shape screen__background__shape2" />
      <span className="screen__background__shape screen__background__shape1" />
    </div>
  </div>
</div>

}
