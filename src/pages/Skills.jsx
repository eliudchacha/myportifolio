import React from "react";
import { useState } from "react";
import "./Skills.css";
import { skills } from "./skills.js";
import Navbar  from "../components/Navbar.jsx";
import { Link } from "react-router-dom";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <h2 className="title">My Skills</h2>

        <div className="skills-list">

          {skills.map((skill, index) => (
            <div className="skill" key={index}>

              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;