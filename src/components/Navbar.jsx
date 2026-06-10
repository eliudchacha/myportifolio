import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="logo" />
        </Link>

        {/* Toggle Button */}
        <button className="menu-btn" onClick={toggleMenu}>
          ☰
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${open ? "active" : ""}`}>

          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
          <Link to="/skills" onClick={closeMenu}>Skills</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;