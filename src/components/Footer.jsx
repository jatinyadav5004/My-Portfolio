import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__title">Contact Me</p>
      <div className="footer__social">
        <a href="#" className="footer__icon">
          <i className='bx bxl-linkedin'></i>
        </a>
        <a href="#" className="footer__icon">
          <i className='bx bxl-instagram'></i>
        </a>
        <a href="#" className="footer__icon">
          <i className='bx bxl-whatsapp'></i>
        </a>
        <a href="#" className="footer__icon">
          <i className='bx bxl-github'></i>
        </a>
      </div>
      <p className="footer__copy">&#169; All rights reserved</p>
    </footer>
  );
};

export default Footer;
