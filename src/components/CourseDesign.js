import React from 'react';
import config from '../config';
import NavigationButtons from './NavigationButtons';

const CourseDesign = () => {
  const prevPage = { path: config.routes.prompting, name: "Edellinen sivu" }

   
  return (
    <div className="navigation-buttons">
    <NavigationButtons prevPage={prevPage} />
      </div>
  );
};

export default CourseDesign;