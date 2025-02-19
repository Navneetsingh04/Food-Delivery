import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setState] = useState("Login");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log(`${currentState} form submitted`);
  };

  return (
    <div className='login-popup'>
      <form className='login-popup-container' onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Sign Up" && <input type="text" placeholder='Your name' required />}
          <input type="email" placeholder='Your email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button type="submit">{currentState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-pop-condition">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">By continuing, I agree to the terms of use & privacy policy.</label>
        </div>
        {currentState === "Login"
          ? <p>Don't have an account? <span onClick={() => setState("Sign Up")}>Sign Up here</span></p>
          : <p>Already have an account? <span onClick={() => setState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  );
};

export default LoginPopup;
