import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Consultant</h4>
                <h5>Intellect Design Arena</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Aug 2024 - Present. Working as a developer specializing in Angular
              and Spring Boot backend. Built externalized configurations, followed
              clean architecture, and focused on maintainable code.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Developer Intern</h4>
                <h5>Max Life Insurance</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Jul 2023 - Aug 2023. Constructed diverse responsive webpages for the
              company website using Next.js and managed content workflows using
              Strapi for faster frontend delivery.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE</h4>
                <h5>Bharati Vidyapeeth University</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Department of Engineering and Technology, Navi Mumbai. Completed
              B.Tech in Computer Science and Engineering (2020 - 2024) with CGPA
              9.89.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
