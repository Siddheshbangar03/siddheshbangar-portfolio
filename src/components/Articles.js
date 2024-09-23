import React, { useState } from 'react';
import './Articles.css';
import bytestream2024 from './bytestream2024.png';
import bytestream2023 from './bytestream2023.png';
import medium from './medium.png';

const articles = [
  {
    title: 'Social Media Analytics: Game-Changing Tool for Small Business Owners and Entrepreneurs',
    description: 'Social media has grown into a powerful tool in this digital era, whereby businesses at all levels have equal opportunities to reach their audiences, increase brand awareness and stimulate sales. ',
    image: medium,
    link: 'https://siddheshbangar.medium.com/social-media-analytics-game-changing-tool-for-small-business-owners-and-entrepreneurs-dfede21039fd',
  },
  {
    title: 'Investing Beyond Earth',
    description: 'Exploring how artificial intelligence is transforming the financial industry through data analysis and prediction models.',
    image: bytestream2024,
    link: 'https://csi.pce.ac.in/bytestream/2024',
  },
  {
    title: 'New Universe for Investing - Metaverse!!',
    description: 'An in-depth look at how sustainable investing is shaping the future of finance and the role it plays in ethical decision-making.',
    image: bytestream2023,  
    link: 'https://csi.pce.ac.in/bytestream/2023',
  },
];

const Articles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(articles.length / itemsPerSlide));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(articles.length / itemsPerSlide)) % Math.ceil(articles.length / itemsPerSlide));
  };

  return (
    <section className="articles">
      <h2>My Articles</h2>
      <div className="slider">
        <button className="slider-button" onClick={prevSlide}>❮</button>
        <div className="slider-content" style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}>
          {articles.map((article, index) => (
            <div className="article-card" key={index}>
              <h3>{article.title}</h3>
              <img src={article.image} alt={article.title} className="article-image" />
              <p>{article.description}</p>
              <a href={article.link} className="article-link" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
          ))}
        </div>
        <button className="slider-button" onClick={nextSlide}>❯</button>
      </div>
    </section>
  );
};

export default Articles;