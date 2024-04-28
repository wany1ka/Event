import React from 'react';
const Footer = () => {
  return (
    <footer style={footerStyle}>
      <hr className='mb-5' />
      <div style={footerContentStyle}>
        <div style={footerSectionStyle}>
          <p>Enhance your virtual meetings with our cutting-edge video conferencing app. Seamlessly connect with colleagues, collaborate on projects, and communicate effectively, all within one intuitive platform. Elevate your online meetings experience today!</p>
          <div style={contactStyle}>
            <span>Contact Us:</span>
            <p>contact@realestblog.com</p>
          </div>
        </div>
        <div style={footerSectionStyle}>
          <h2>Quick Links</h2>
          <ul style={listStyle}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

      </div>
      <div style={footerBottomStyle}>
        &copy; 2024 Link Up
      </div>
    </footer>
  );
};
export default Footer;
const footerStyle = {
  color: '#fefae0',
  marginTop: '50px',
  padding: '50px 0',
};
const footerContentStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginLeft: '250px'
};
const footerSectionStyle = {
  flex: 1,
  marginRight: '20px',
  marginLeft: '70px'
};
const contactStyle = {
  marginTop: '15px',
};
const listStyle = {
  listStyle: 'none',
  padding: 0,
};
const footerBottomStyle = {
  marginTop: '20px',
  textAlign: 'center',
  padding: '10px 0',
};