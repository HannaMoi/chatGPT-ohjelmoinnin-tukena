import React from 'react';
import { Link } from 'react-router-dom';
import config from '../config';

const NavigationBar = () => {

  const {home, createGPT, prompting } = config.routes;
 
  return (
    <nav className="navigation-bar">
        <div className="nav-button">
        <Link to={home} className="nav-link">ChatGPT oppimistyökaluna</Link>
      </div>
      <div className="nav-button">
        <Link to={createGPT} className="nav-link">Luo oma GPT</Link>
      </div>
      <div className="nav-button">
        <Link to={prompting} className="nav-link">Tehokas kommunikointi</Link>
      </div>
      
    </nav>
  );
};

export default NavigationBar;
