import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          RC
        </a>
        <div className="navbar-connect" data-cursor="disable">
          <a href="mailto:prasadsumit401@gmail.com" data-cursor="disable">
            <MdOutlineEmail />
            Email
          </a>
          <span className="navbar-connect-sep">|</span>
          <a
            href="https://www.linkedin.com/in/sumit-prasad-365301292/"
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
          >
            <FaLinkedinIn />
            LinkedIn
          </a>
          <span className="navbar-connect-sep">|</span>
          <a
            href="https://github.com/Sumit-2028"
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#achievements" href="#achievements">
              <HoverLinks text="CODING" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
