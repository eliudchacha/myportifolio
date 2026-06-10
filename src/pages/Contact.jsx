import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "./Contact.css";
import {
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [github, setGithub] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const[facebook, setFacebook] = useState("");
  const [x, setX] = useState("");

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <h2 className="title">Contact Me</h2>

        <p className="subtitle">
          My contact information and social profiles
        </p>

        <div className="contact-grid">

          {/* Email */}
          <div className="contact-card">
            <FaEnvelope className="icon" />
            <span className="label">Email</span>
            <span className="value">eliudwaryoba@gmail.com</span>
          </div>

          {/* Phone */}
          <div className="contact-card">
            <FaPhone className="icon" />
            <span className="label">Phone</span>
            <span className="value">+255 785 677 223</span>
          </div>

          {/* WhatsApp */}
          <div className="contact-card">
            <FaWhatsapp className="icon whatsapp" />
            <span className="label">WhatsApp</span>
            <span className="value">+255 614 938 269</span>
          </div>

          {/* GitHub */}
          <div className="contact-card">
            <FaGithub className="icon" />
            <span className="label">GitHub</span>
            <span className="value">eliudchacha</span>
          </div>

          {/* Instagram */}
          <div className="contact-card">
            <FaInstagram className="icon instagram" />
            <span className="label">Instagram</span>
            <span className="value">@goldeneliud</span>
          </div>

          {/* X */}
          <div className="contact-card">
            <FaXTwitter className="icon" />
            <span className="label">X</span>
            <span className="value">@eliudwaryoba</span>
          </div>

          {/* LinkedIn */}
          <div className="contact-card">
            <FaLinkedin className="icon" />
            <span className="label">LinkedIn</span>
            <span className="value">eliudwaryoba</span>
          </div>
          <div className="contact-card">
            <FaFacebook className="icon" />
            <span className="label">Facebook</span>
            <span className="value">eliudwaryoba</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;