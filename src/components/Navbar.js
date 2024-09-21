// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Siddhesh Bangar</h1>
      </div>

      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li>
          <Link to="hero" smooth={true} offset={-70} duration={500} onClick={() => setIsMobile(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-70} duration={500} onClick={() => setIsMobile(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} offset={-70} duration={500} onClick={() => setIsMobile(false)}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} offset={-70} duration={500} onClick={() => setIsMobile(false)}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} offset={-70} duration={500} onClick={() => setIsMobile(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="education" smooth={true} offset={-70} duration={500} onClick={() => setIsMobile(false)}>
            Education
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-70} duration={500} onClick={() => setIsMobile(false)}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="menu-icon" onClick={toggleMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
