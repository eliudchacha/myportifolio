import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">

        <h2 className="title">About Me</h2>

        <div className="about-content">

          <p>
            I'm a passionate developer and cybersecurity enthusiast focused on
            building secure, efficient, modern web applications.
          </p>

          <p>
            I really enjoy working with technologies like React, Python, Java,
            C, C++, and Linux-based systems. My goal is to create solutions
            that improve security and user experience.
          </p>

          <p>
            I also have a strong foundation in penetration testing,
            vulnerability assessment, network security, network design, and
            ethical hacking.
          </p>

        </div>

        <div className="highlights">

          <div className="card">
            <h3>Cyber Security</h3>
            <p>
              Penetration testing, vulnerability assessment, network security,
              ethical hacking.
            </p>
          </div>

          <div className="card">
            <h3>Frontend</h3>
            <p>React, HTML, CSS, JavaScript</p>
          </div>

          <div className="card">
            <h3>Backend</h3>
            <p>Python, Java, C, C++, Node.js</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;