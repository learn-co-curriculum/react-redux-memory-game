import React from 'react';

const Card = ({ id, code, displayed }) => 
  <div className="card">
    {displayed &&
      <h4>{code}</h4>
    }
  </div>;

export default Card;