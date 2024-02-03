import React, { useState } from 'react';
import NavigationButtons from './NavigationButtons';
import config from '../config';
import ReactModal from 'react-modal';
import kuva3 from '../assets/kuva3.jpg'

const CreateGPT = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const prevPage = { path: config.routes.home, name: "Edellinen sivu" };
  const nextPage = { path: config.routes.prompting, name: "Seuraava Sivu" };

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  return (
    <div>
      {/* Sisältö ja kuvat tulevat tänne */}
      <p>Tekstiä tähän...</p>
      <img src={kuva3} alt="Kuva 3" className="kuvat" onClick={() => openModal(kuva3)} />
      {/* Lisää muita kuvia ja tekstiä tarpeen mukaan */}

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Suurennettu kuva"
      >
        <img src={selectedImage} alt="Suurennettu kuva" />
        <button onClick={() => setModalIsOpen(false)}>Sulje</button>
      </ReactModal>

      <div className="navigation-buttons">
        <NavigationButtons prevPage={prevPage} nextPage={nextPage} />
      </div>
    </div>
  );
};

export default CreateGPT;
