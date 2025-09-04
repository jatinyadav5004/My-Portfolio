import React, { useEffect } from 'react';
import moonIcon from '../assets/img/moon.png';
import sunIcon from '../assets/img/sun.png';


const Header = () => {
  useEffect(() => {
    var icon=document.getElementById("icon");
    icon.onclick=function(){
        document.body.classList.toggle("dark-theme");
       if(document.body.classList.contains("dark-theme")){
        icon.src={sunIcon};
       }
       else{
        icon.src ={moonIcon};
       }
    }

    //===== MENU SHOW =====
    const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

      if (toggle && nav) {
        toggle.addEventListener('click', () => {
          nav.classList.toggle('show');
        });
      }
    };
    showMenu('nav-toggle', 'nav-menu');

    //===== REMOVE MENU MOBILE =====
    const navLink = document.querySelectorAll('.nav__link');
    const linkAction = () => {
      const navMenu = document.getElementById('nav-menu');
      navMenu.classList.remove('show');
    };
    navLink.forEach((n) => n.addEventListener('click', linkAction));

    //===== SCROLL SECTIONS ACTIVE LINK =====
    const sections = document.querySelectorAll('section[id]');

    const scrollActive = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector('.nav__menu a[href*=' + sectionId + ']')
            .classList.add('active');
        } else {
          document
            .querySelector('.nav__menu a[href*=' + sectionId + ']')
            .classList.remove('active');
        }
      });
    };
    window.addEventListener('scroll', scrollActive);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', scrollActive);
      navLink.forEach((n) => n.removeEventListener('click', linkAction));
    };
  }, []);

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#" className="nav__logo">Welcome to my portfolio website!!!</a>
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active">Home</a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">About</a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">Skills</a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">Work</a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">Contact</a>
            </li>
          </ul>
        </div>

        <img src={moonIcon} id="icon" alt="theme-icon" />

        <div className="nav__toggle" id="nav-toggle">
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
