import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaMedium, FaEnvelope } from 'react-icons/fa';
import './Hero.css';
import photo from './photo.png';
import resumePDF from './Siddhesh_Bangar_Resume.pdf';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="name-animation">Hello, I'm Siddhesh Bangar</h1>
          <p className="fade-in">Flutter Developer | Data Analyst | Tech Enthusiast</p>

          {/* Social Media Links */}
          <div className="social-links fade-in">
            <a href="https://www.linkedin.com/in/siddheshbangar03" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/siddheshbangar03" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://twitter.com/_siddheshbangar" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://siddheshbangar.medium.com/" target="_blank" rel="noreferrer">
              <FaMedium />
            </a>
            <a href="mailto:siddheshbangar03@gmail.com" target="_blank" rel="noreferrer">
              <FaEnvelope />
            </a>
          </div>

          {/* Download Resume Button */}
          <a href={resumePDF} download className="download-button fade-in">
            Download Resume
          </a>
        </div>

        {/* Right Side Photo */}
        <div className="hero-right fade-in">
          <img src={photo} alt="Siddhesh Bangar" className="profile-photo" />
        </div>
      </div>

      {/* Floating Circle Animations */}
      <div className="hero-animation">
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
      </div>
    </section>
  );
};

export default Hero;
