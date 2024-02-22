// import React, { useState } from 'react';
import NavigationButtons from './NavigationButtons';
import config from '../config';
// import ReactModal from 'react-modal';
import texts from '../texts.json';
import kuva3 from '../assets/kuva3.jpg';
import kuva4 from '../assets/kuva4.jpg';
import kuva5 from '../assets/kuva5.jpg';
import kuva6 from '../assets/kuva6.jpg';
import kuva7 from '../assets/kuva7.jpg';
import kuva8 from '../assets/kuva7.jpg';

import { renderTextWithLineBreaks } from '../utils';


const CreateGPT = () => {
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [selectedImage, setSelectedImage] = useState('');
  const createGPTtexts = texts.createGpt["text-section"];

  const prevPage = { path: config.routes.home, name: "Edellinen sivu" };
  const nextPage = { path: config.routes.prompting, name: "Seuraava sivu" };

  // const openModal = (imageUrl) => {
  //   setSelectedImage(imageUrl);
  //   setModalIsOpen(true);
  // };


  return (
    <div>
      <div className='create-text-section'>
      <div className='create-info'>
      <h1>{createGPTtexts.header}</h1>
      {renderTextWithLineBreaks(createGPTtexts.text)}
      </div> <br></br>
      <h2>{createGPTtexts.header2}</h2>
      <p>{createGPTtexts.text2}</p>
      <img src={kuva3} alt="Kuva 3" className="modal-pictures"  /> 
      {<p>{createGPTtexts.text3}</p>}
      <img src={kuva4} alt="Kuva 4" className="modal-pictures"   /> 
      {<p>{createGPTtexts.text4}</p>}
      <img src={kuva5} alt="Kuva 5" className="modal-pictures"  />
      {<p>{createGPTtexts.text5}</p>}
      <img src={kuva6} alt="Kuva 6" className="modal-pictures"  />
      {<p>{createGPTtexts.text6}</p>}
      <img src={kuva7} alt="Kuva 7" className="modal-pictures"  />
      {<p>{createGPTtexts.text7}</p>}
      <img src={kuva8} alt="Kuva 8" className="modal-pictures"  />
      {<p>{createGPTtexts.text8}</p>}

      {/* <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="suurennettu-kuva"
      >
        <img src={selectedImage} alt="suurennettu-kuva" />
        <button onClick={() => setModalIsOpen(false)}>Sulje</button>
      </ReactModal> */}
      </div>

      <div className="navigation-buttons">
        <NavigationButtons prevPage={prevPage} nextPage={nextPage} />
      </div>
    </div>
  );
};

export default CreateGPT;
