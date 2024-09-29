// src/components/Footer.js
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter,FaMedium,FaEnvelope} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
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
      <p className="copyright">&copy; {new Date().getFullYear()} Siddhesh Bangar.</p>        
      </div>
    </footer>
  );
};

export default Footer;
