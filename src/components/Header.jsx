import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    //===== SCROLL SECTIONS ACTIVE LINK =====
    const sections = document.querySelectorAll('section[id]');

    const scrollActive = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');

        const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        if (link) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      });
    };
    window.addEventListener('scroll', scrollActive);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', scrollActive);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#home" className="nav__logo">JY</a>
        </div>

        <div className={`nav__menu ${isMenuOpen ? 'show' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item"><a href="#home" className="nav__link active" onClick={closeMenu}>Home</a></li>
            <li className="nav__item"><a href="#about" className="nav__link" onClick={closeMenu}>About</a></li>
            <li className="nav__item"><a href="#experience" className="nav__link" onClick={closeMenu}>Experience</a></li>
            <li className="nav__item"><a href="#skills" className="nav__link" onClick={closeMenu}>Skills</a></li>
            <li className="nav__item"><a href="#work" className="nav__link" onClick={closeMenu}>Projects</a></li>
            <li className="nav__item"><a href="#contact" className="nav__link" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>

        <div className="nav__controls">
          <div className="theme-toggle" onClick={toggleTheme}>
            <span className={`theme-toggle__label ${!isDark ? 'active' : ''}`}>Light</span>
            <div className={`theme-toggle__switch ${isDark ? 'dark' : ''}`}>
              <div className="theme-toggle__slider"></div>
            </div>
            <span className={`theme-toggle__label ${isDark ? 'active' : ''}`}>Dark</span>
          </div>

          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`}></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
