import React, { useState } from 'react';
import './Project.css';

const Project = ({ title, description, image, github }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  return (
    <div className="project">
      {/* <p>{description}</p> */}
      <a target="_blank" rel="noopener noreferrer" href={github}>
        <img
          className="project-image"
          src={image}
          alt={title}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
      </a>
      {isHover && <h2 className="project-title">{title}</h2>}
    </div>
  );
};

export default Project;
