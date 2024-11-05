// src/components/Project.jsx
import React from 'react';

const Project = ({ title, image, appLink, repoLink }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <a href={appLink} target="_blank" rel="noopener noreferrer">
        <img 
          src={image} 
          alt={`${title} screenshot`} 
          style={{ maxWidth: '250px', height: 'auto', borderRadius: '5px' }} // Inline style to control image size
        />
      </a>
      <p>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </p>
    </div>
  );
};

export default Project;
