import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {

    const [currentState,setState] = useState("Login")
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currentState==="Login"?<></>: <input type="text" placeholder='Your name' required />}
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='Password' required />

        </div>
        <button>{currentState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-pop-condition">
            <input type="checkbox" required/>
            <p>By Continuing ,I agree to the terms of use & privacy Policy.</p>
        </div>
        {currentState==="Login"
        ?<p>Already have an account? <span onClick={()=>setState("Sign Up")}>Login here</span></p>
        :<p>Create a new account? <span onClick={()=>setState("Login")}>Click here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup
