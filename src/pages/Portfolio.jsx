import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Task Board Application',
      image: '/project1.png',
      appLink: 'https://paigec001.github.io/Task-Board/',
      repoLink: 'https://github.com/PaigeC001/Task-Board'
    },
    {
      title: 'Weather Outlook Tracker',
      image: '/project2.png',
      appLink: 'http://127.0.0.1:5500/WeatherOutlookTracker/index.html',
      repoLink: 'https://github.com/PaigeC001/WeatherOutlookTracker'
    },
    {
      title: 'CookMate Recipe App',
      image: '/project3.png',
      appLink: 'https://cookmate-755p.onrender.com/',
      repoLink: 'https://github.com/alisha1025/CookMate'
    },
    {
      title: 'Express Note Taker',
      image: '/project5.png',
      appLink: 'https://paigec001.github.io/NoteTaker/',
      repoLink: 'https://github.com/PaigeC001/NoteTaker'
    },
    {
      title: 'Pro Portfolio',
      image: '/project4.png',
      appLink: 'https://paigec001.github.io/ProPortfolio/',
      repoLink: 'https://github.com/PaigeC001/ProPortfolio'
    },
  ];

  return (
    <div className="portfolio-container"> {/* New container div */}
      <section className="portfolio-grid">
        {projects.map((project, index) => (
          <Project 
            key={index} 
            {...project} 
            imageStyle={{ maxWidth: '250px', height: 'auto', borderRadius: '5px' }} 
          />
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
