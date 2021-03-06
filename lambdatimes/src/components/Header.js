import React from 'react';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <div className="header">
      <span className="date">OCT 20, 2018</span>
      <h1>Lambda Times</h1>
      <span className="temp">64°</span>
    </div>
  )
}

export default Header