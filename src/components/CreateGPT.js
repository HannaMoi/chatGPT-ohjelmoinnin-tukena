import React from 'react';
import NavigationButtons from './NavigationButtons';
import config from '../config';

const CreateGPT = () => {

  const prevPage = { path: config.routes.home, name: "Edellinen sivu" }
  const nextPage = { path: config.routes.prompting, name: "Seuraava Sivu" };
  return (
    <div>
       <div className="navigation-buttons">
    <NavigationButtons prevPage={prevPage} nextPage={nextPage} />
      </div>
    </div>
  );
};

export default CreateGPT;