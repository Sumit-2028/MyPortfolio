import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

type Project = {
  title: string;
  category: string;
  tools: string;
  github: string;
};

const projects: Project[] = [
  {
    title: "Real-Time Ambulance Dispatch & Navigation Platform",
    category: "Real-Time Emergency Routing System",
    tools:
      "Java, Spring Boot, WebSockets, REST APIs, MongoDB, Priority Queue (Heap)",
    github:
      "https://github.com/Sumit-2028/Real-Time-Ambulance-Dispatch-Navigation-Platform",
  },
  {
    title: "PRISM Protocol – Zero-Knowledge Proof of Human Liveness",
    category: "Security / Cryptography Hackathon Project",
    tools:
      "Java, Spring Boot, REST APIs, Cryptography, Backend API Development",
    github: "https://github.com/Sumit-2028/Prism",
  },
  {
    title: "Event Management Backend API",
    category: "Backend API System",
    tools: "Java, Spring Boot, MongoDB, JWT Authentication, REST APIs, Bcrypt",
    github: "https://github.com/Sumit-2028/EventManagementBackend",
  },
  {
    title: "Full-Stack Blog Website",
    category: "Blog Platform / Content Management System",
    tools:
      "Java, Spring Boot, Thymeleaf, Hibernate, Bootstrap, Maven, MVC Architecture",
    github: "https://github.com/Sumit-2028/Blog-Website",
  },
  // {
  //   title: "Mpro",
  //   category: "Insurance Platform",
  //   tools: "React.js, Node.js, Microservices",
  //   image: "/images/Maxlife.png",
  // },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const getStackItems = (tools: string) =>
    tools
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <div className="carousel-tool-chips">
                            {getStackItems(project.tools).map((tool) => (
                              <span key={tool} className="carousel-tool-chip">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                        <a
                          className="carousel-github-link"
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          data-cursor="disable"
                        >
                          View Project on GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

