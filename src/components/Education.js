// src/components/Education.js
import React from 'react';
import './Education.css';

const educationData = [
  {
    institution: 'Pillai College of Engineering',
    degree: 'Bachelor of Technology in Computer Engineering',
    duration: 'December 2021 - Present',
    gpa: 'CGPA: 8.26/10',
  },
  {
    institution: 'Karmaveer Bhaurao Patil College',
    degree: 'Higher Secondary Education',
    duration: 'July 2020 - May 2021',
    gpa: 'Percentage: 90%',
  },
  {
    institution: 'New Bombay City School',
    degree: 'Secondary School Education',
    duration: 'June 2018 - March 2019',
    gpa: 'Percentage: 91%',
  },
];

const Education = () => {
  return (
    <section className="education">
      <h2>Education</h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3>{edu.degree}</h3>
            <h4>{edu.institution}</h4>
            <div className="duration">{edu.duration}</div>
            <p>{edu.gpa}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
