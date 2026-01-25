import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initScrollAnimations, initSmoothScroll } from './utils/animations';
import './assets/css/styles.css';

function App() {

  useEffect(() => {
    // ScrollReveal animations
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2000,
      delay: 200,
    });

    sr.reveal('.home__data, .about__img, .skills__intro, .experience__item', {});
    sr.reveal('.home__img-wrapper, .about__subtitle, .about__text, .skills__grid-main, .work__card', { delay: 400 });
    sr.reveal('.home__social-icon', { interval: 200 });
    sr.reveal('.skill__card--featured, .work__card, .contact__wrapper', { interval: 200 });

    // Custom animations
    initScrollAnimations();
    initSmoothScroll();
  }, []);
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
