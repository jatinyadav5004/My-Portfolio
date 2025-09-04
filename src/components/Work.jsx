import React from 'react';
import work1 from '../assets/img/work1.jpg';
import work2 from '../assets/img/work2.jpg';
import work3 from '../assets/img/work3.jpg';
import work4 from '../assets/img/work4.jpg';
import work5 from '../assets/img/work5.jpg';
import work6 from '../assets/img/work6.jpg';

const Work = () => {
  return (
    <section className="work section" id="work">
      <h2 className="section-title">Work</h2>
      <div className="work__container bd-grid">
        <a href="/" className="work__img">
          <img src={work1} alt="Work 1" />
        </a>
        <a href="/" className="work__img">
          <img src={work2} alt="Work 2" />
        </a>
        <a href="/" className="work__img">
          <img src={work3} alt="Work 3" />
        </a>
        <a href="/" className="work__img">
          <img src={work4} alt="Work 4" />
        </a>
        <a href="/" className="work__img">
          <img src={work5} alt="Work 5" />
        </a>
        <a href="/" className="work__img">
          <img src={work6} alt="Work 6" />
        </a>
      </div>
    </section>
  );
};

export default Work;
