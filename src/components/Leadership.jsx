import React from 'react';
import '../assets/css/styles.css';

const Leadership = () => {
  const leadership = [
    {
      title: "CodeChef BVP DET-NM Chapter Lead",
      period: "2022-2024",
      description: "Led and managed the CodeChef chapter at college, organizing technical events and building a strong developer community.",
      achievements: [
        "Organized seminars, meetings, and team-building activities",
        "Collaborated for sponsorships and partnerships",
        "Led a team of 9 executive members",
        "Completed 7 successful events"
      ],
      icon: "bx bx-trophy"
    },
    {
      title: "GDSC Member",
      period: "2021-2022",
      description: "Active member of Google Developer Student Club, contributing to various technical projects and workshops.",
      achievements: [
        "Part of a 10-member team",
        "Contributed to Android app development",
        "Built and designed website components",
        "Organized and participated in technical workshops"
      ],
      icon: "bx bx-group"
    }
  ];

  return (
    <section className="leadership section" id="leadership">
      <h2 className="section-title">Leadership & Activities</h2>
      <div className="leadership__container bd-grid">
        {leadership.map((role, index) => (
          <div key={index} className="leadership__card">
            <div className="leadership__header">
              <div className="leadership__icon">
                <i className={role.icon}></i>
              </div>
              <div className="leadership__title-group">
                <h3 className="leadership__title">{role.title}</h3>
                <span className="leadership__period">
                  <i className="bx bx-calendar"></i> {role.period}
                </span>
              </div>
            </div>
            <p className="leadership__description">{role.description}</p>
            <div className="leadership__achievements">
              <h4>Key Achievements:</h4>
              <ul>
                {role.achievements.map((achievement, idx) => (
                  <li key={idx}>
                    <i className="bx bx-check-circle"></i>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leadership;

