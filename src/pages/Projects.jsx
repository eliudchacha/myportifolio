import React from "react";
import { projects } from "./project.js";
import "./Projects.css";
import Navbar from "../components/Navbar.jsx";

function Projects() {
  return (
    <section className="projects">
      <div className="projects-container">

        <h3 className="title">My Projects</h3>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <h4 className="project-title">
                {project.title}
              </h4>

              <p className="project-description">
                {project.description}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;