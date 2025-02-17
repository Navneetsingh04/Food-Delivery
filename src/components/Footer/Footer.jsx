import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import AppDownload from '../AppDownload/AppDownload'; 
const Footer = () => {
  return (
    <>
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>At YumExpress, we bring delicious meals from your favorite restaurants straight to your doorstep. With a focus on speed, quality, and customer satisfaction, we aim to make every bite memorable. From local delights to international cuisines, explore a world of flavors with us. 
          <br /><br />YumExpress – where convenience meets taste!</p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Quick Links</h2>
            <ul>
              {/* <Link to='./Home'><li>Home</li></Link> */}
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
          <h2>Contact Us</h2>
          <ul>
            <li>+91-7894561236</li>
            <li>yumexpress@gmail.com</li>
          </ul>
        </div>
      </div>
      <p className="footer-copyright">
        Copyright 2025 ©️ YumExpress.com. All Right Reserved
      </p>
      <hr />
      <AppDownload/>
    </div>
    </>
  )
}

export default Footer
