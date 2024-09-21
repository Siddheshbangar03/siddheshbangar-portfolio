// src/components/Experience.js
import React from 'react';
import './Experience.css';

const experiences = [
  {
    title: 'Data Analyst Intern',
    company: 'SpareProvider.com',
    duration: 'April 2024 – June 2024',
    description: 'Extracted data to derive actionable insights that enhanced decision-making processes. Utilized Excel and Data Extractor for advanced data manipulation, cleansing, and reporting, which led to a 20% increase in data accuracy. Developed skills in analysis, visualization, and process optimization through meticulous data validation and cleaning procedures.'
  },
  {
    title: 'WordPress Developer',
    company: 'Spiderweb',
    duration: 'May 2023 – August 2023',
    description: 'Designed and developed responsive WordPress websites, enhancing client satisfaction and engagement. Created custom themes and plugins for WordPress, which improved performance and reduced project completion time by 15%. Conducted user testing and incorporated feedback to optimize the user experience.'
  },
  {
    title: 'Content Writer',
    company: 'Marpu Foundation NGO',
    duration: 'June 2023',
    description: 'Created engaging articles and social media content that significantly increased outreach and community engagement for the NGO.'
  }
];

const Experience = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-container">
        {experiences.map((job, index) => (
          <div className="experience-card" key={index}>
            <h3>{job.title} - {job.company}</h3>
            <p className="duration">{job.duration}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
