import React from 'react';
import { Link } from 'react-router-dom';

const NavigationButtons = ({ prevPage, nextPage }) => {
  return (
    <div className="navigation-buttons">
      {prevPage && <Link to={prevPage.path} className="nav-page-button">{prevPage.name}</Link>}
      {nextPage && <Link to={nextPage.path} className="nav-page-button">{nextPage.name}</Link>}
    </div>
  );
};

export default NavigationButtons;