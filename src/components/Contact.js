// src/components/Contact.js
import React from 'react';
import './Contact.css';


const Contact = () => {
  const handleCall = () => {
    window.location.href = `tel:+919987690271`; // Replace with your phone number
  };

  const handleEmail = () => {
    window.location.href = `mailto:siddheshbangar03@gmail.com`; // Replace with your email
  };
  

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for collaborations, inquiries, or just to say hello!</p>
      <div className="contact-buttons">
        <button className="contact-button call" onClick={handleCall}>Call Me</button>
        <button className="contact-button email" onClick={handleEmail}>Email Me</button>
      </div>
    </section>
  );
};

export default Contact;
