import React from 'react';

function Chopper() {
  return (
    <div className="chopper-container">
      <svg className="chopper" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
        <rect x="30" y="10" width="40" height="80" fill="blue" />
        <polygon points="50,10 60,20 40,20" fill="yellow" />
        <circle cx="50" cy="50" r="10" fill="white" />
        <circle cx="50" cy="50" r="5" fill="black" />
      </svg>
    </div>
  );
}

export default Chopper;