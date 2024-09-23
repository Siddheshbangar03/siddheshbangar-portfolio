// src/components/Skills.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJsSquare, faReact, faFlutter,faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faChartLine, faRobot } from '@fortawesome/free-solid-svg-icons'; 
import './Skills.css';

const skills = [
  { name: 'Python', icon: faPython },
  { name: 'Data Analysis', icon: faChartLine },
  { name: 'Machine Learning', icon: faRobot },   
  { name: 'Generative AI', icon: faRobot }, 
  { name: 'JavaScript', icon: faJsSquare },
  { name: 'React', icon: faReact },
  { name: 'Flutter', icon: faFlutter },
  { name: 'MySQL', icon: faDatabase },
  { name: 'PostgreSQL', icon: faDatabase },
  { name: 'WordPress', icon: faWordpress },
];

const Skills = () => {
  return (
    <section className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {typeof skill.icon === 'string' ? (
              <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
            ) : (
              <FontAwesomeIcon icon={skill.icon} size="3x" className="skill-icon" />
            )}
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
