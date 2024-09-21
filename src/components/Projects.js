// src/components/Projects.js
import React from 'react';
import './Projects.css';
import Endangered from './Endangered.png';

const projects = [
  
  {
    title: 'Endangered Animal Classification',
    description: 'Using CNN for image classification of endangered species.',
    image: Endangered,
    link: 'https://github.com/Siddheshbangar03/Endangered-Animal-Classification',
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <img src={project.image} alt={`${project.title} screenshot`} className="project-image" />
            <p>{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
