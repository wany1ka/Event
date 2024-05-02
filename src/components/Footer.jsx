import React from 'react';

const Footer = () => {
  return (
      <footer style={footerStyle} className='divide-y divide-blue-200'>
        <hr />
        <div style={footerContentStyle}>
          <div style={footerSectionStyle} className='ml-20 pl-7'>
            <p>Enhance your virtual meetings with our cutting-edge video conferencing app. Seamlessly connect with colleagues, collaborate on projects, and communicate effectively, all within one intuitive platform. Elevate your online meetings experience today!</p>
          </div>
          <div style={footerSectionStyle} className='ml-20 pl-7'>
            <h2 className='font-bold text-lg'>Quick Links</h2>
            <ul style={listStyle}>
              <li><a href="/">Switch Accounts</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div style={footerSectionStyle}>
          <div style={contactStyle}>
              <span className='font-bold text-lg'>Contact Us:</span>
              <p><a href="mailto:markwanyika@gmail.com">Send Email</a></p>
              <p><a href="tel:+254743443844">Call Us</a></p>
            </div>
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
  color: '#259d84',
  marginTop: '50px',
  padding: '50px 0',
};

const footerContentStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '1200px', // Adjust max width as needed
};

const footerSectionStyle = {
  flex: '1',
  marginRight: '20px',
};

const contactStyle = {
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
