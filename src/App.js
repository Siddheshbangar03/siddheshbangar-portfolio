// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <div>
      <Helmet>
        <meta name="description" content="Siddhesh Bangar - A passionate data science learner and front-end developer from Navi Mumbai, specializing in innovative tech solutions for social impact." />
        <meta name="keywords" content="Siddhesh Bangar, portfolio, front-end developer, data science, Flutter developer, data analysis, web development, Navi Mumbai, innovative tech, social impact, machine learning, AI, projects" />
        <title>Siddhesh Bangar</title>
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
