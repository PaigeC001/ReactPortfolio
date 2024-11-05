import React from 'react';

const Resume = () => {
  return (
    <div className="content-container">
      <div className="card">
        <h2>Resume</h2>
        <a href="/mockresume.pdf" download className="resume-button">Download Resume</a>
        <h3>Proficiencies</h3>
        <ul className="proficiencies-list">
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>CSS</li>
          {/* Add more skills as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
