import "./styles/Career.css";

const experiences = [
  {
    role: "Backend & Full Stack Developer",
    org: "Personal Projects",
    period: "2024 - Present",
    summary:
      "Built multiple production-style applications with Java and Spring Boot, focusing on clean architecture, API security, and performance.",
    highlights: [
      "Designed scalable REST APIs with layered service architecture.",
      "Implemented JWT authentication and role-based access control.",
      "Worked with MongoDB for optimized query design and schema planning.",
    ],
  },
  {
    role: "Java Backend Developer",
    org: "CodeChef VIT Chennai",
    period: "2025 - Present",
    summary:
      "Contributed to backend development tasks for club projects and collaborated with peers on improving code quality and maintainability.",
    highlights: [
      "Participated in backend feature implementation and reviews.",
      "Collaborated in technical discussions for better system design.",
      "Focused on writing modular, testable, and readable backend code.",
    ],
  },
];

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
          {experiences.map((experience) => (
            <div className="career-info-box" key={`${experience.role}-${experience.org}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{experience.role}</h4>
                  <h5>{experience.org}</h5>
                </div>
                <h3>{experience.period}</h3>
              </div>
              <div className="career-description">
                <p>{experience.summary}</p>
                <ul>
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
