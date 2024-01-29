import React from 'react';
import config from '../config';
import NavigationButtons from './NavigationButtons';

const Prompting = () => {
  const prevPage = { path: config.routes.createGPT, name: "Edellinen sivu" }
  const nextPage = { path: config.routes.courseDesign, name: "Seuraava Sivu" };
  return (
    <div>
       <div className="navigation-buttons">
    <NavigationButtons prevPage={prevPage} nextPage={nextPage} />
      </div>
    </div>
  );
};
export default Prompting;