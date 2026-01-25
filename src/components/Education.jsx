import React from 'react';
import '../assets/css/styles.css';

const Education = () => {
  const education = {
    institution: "Bharati Vidyapeeth Deemed To Be University",
    department: "Department of Engineering and Technology",
    degree: "B.Tech, Computer Science and Engineering",
    location: "Navi Mumbai",
    period: "2020 - 2024",
    cgpa: "9.7",
    achievements: [
      "Outstanding academic performance with CGPA of 9.7",
      "Active participation in technical clubs and events",
      "Strong foundation in computer science fundamentals"
    ]
  };

  return (
    <section className="education section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="education__container bd-grid">
        <div className="education__card">
          <div className="education__icon">
            <i className="bx bx-graduation"></i>
          </div>
          <div className="education__content">
            <h3 className="education__degree">{education.degree}</h3>
            <h4 className="education__institution">{education.institution}</h4>
            <p className="education__department">{education.department}</p>
            <div className="education__details">
              <div className="education__detail-item">
                <i className="bx bx-map"></i>
                <span>{education.location}</span>
              </div>
              <div className="education__detail-item">
                <i className="bx bx-calendar"></i>
                <span>{education.period}</span>
              </div>
              <div className="education__detail-item education__cgpa">
                <i className="bx bx-award"></i>
                <span>CGPA: {education.cgpa}</span>
              </div>
            </div>
            <div className="education__achievements">
              <h5>Achievements:</h5>
              <ul>
                {education.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

