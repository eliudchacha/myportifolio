import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import Navbar from "../components/Navbar";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h4>Hi, I'm Eliud Waryoba</h4>

          <h3 className="role">
            Cyber Security and Software Developer
          </h3>

          <p className="descriptions">
            I develop software and secure systems, analyze networks,
            perform penetration testing, and build websites using
            Python (Django), JavaScript, HTML, CSS, and React.
            I always strive to learn new technologies and stay updated
            with the latest trends in the industry. I am passionate
            about creating innovative solutions and making a positive
            impact through technology.
          </p>

          <div className="buttons">
            <Link to="/projects" className="btn primary">
              View Projects
            </Link>

            <Link to="/contact" className="btn secondary">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;