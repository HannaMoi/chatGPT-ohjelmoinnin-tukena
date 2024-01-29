import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
        <div className="nav-button">
        <Link to="/" className="nav-link">ChatGPT</Link>
      </div>
      <div className="nav-button">
        <Link to="/create-gpt" className="nav-link">Luo oma GPT</Link>
      </div>
      <div className="nav-button">
        <Link to="/prompting" className="nav-link">Promptaus</Link>
      </div>
      <div className="nav-button">
        <Link to="/course-design" className="nav-link">Ohjeita</Link>
      </div>
      
    </nav>
  );
};

export default NavigationBar;
