import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__title">Contact Me</p>
      <div className="footer__social">
        <a href="https://www.linkedin.com/in/jatin-yadav-57629a203" className="footer__icon">
          <i className='bx bxl-linkedin'></i>
        </a>
        <a href="https://www.instagram.com/jatinyadav5004" className="footer__icon">
          <i className='bx bxl-instagram'></i>
        </a>
        <a href="https://wa.me/919079705004" className="footer__icon">
          <i className='bx bxl-whatsapp'></i>
        </a>
        <a href="https://github.com/jatinyadav5004" className="footer__icon">
          <i className='bx bxl-github'></i>
        </a>
      </div>
      <p className="footer__copy">&#169; All rights reserved</p>
    </footer>
  );
};

export default Footer;
