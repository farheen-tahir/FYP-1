import React from 'react';
import './Card.css';

const Card = ({ image, heading, details, link }) => {
  return (
    <div className="card">
      <img src={image} alt={heading} />
      <h3>{heading}</h3>
      <p>{details}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className='button'>Read More</a>
    </div>
  );
};

export default Card;
