import React from 'react';
import "./styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <hr className="footer-line" />
        <div className="footer-content flex justify-start items-center space-x-4">
          <div className="footer-description w-full max-w-xs">
            <p className='text-left'>
              Experience seamless video conferencing with our innovative app. Connect, collaborate, and communicate effortlessly. Elevate your virtual meetings today!
            </p>
          </div>
          <div className="footer-links text-center">
            <a href="/">Switch Account</a> <br />
            <a href="./contact">Contact us</a>
          </div>
          <div className='py-5'>
          <p className='text-center'>&copy; 2024 Your App Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
