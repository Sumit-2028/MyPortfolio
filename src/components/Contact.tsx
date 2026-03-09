import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:prasadsumit401@gmail.com" data-cursor="disable">
                prasadsumit401@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>
              VIT Chennai
            </p>
            <p>
              Bachelor of Technology in Computer Science and Engineering
              <br />
              Artificial Intelligence & Machine Learning
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Sumit-2028"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/sumit-prasad-7b7083312"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/sumit.prasad28?igsh=azFuNzBxbmNkY25m"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Sumit Kumar Prasad</span>
            </h2>
            <h5>
              <MdCopyright /> 2025 Sumit Kumar Prasad
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
