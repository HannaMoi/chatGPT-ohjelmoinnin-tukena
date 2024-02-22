import React, { useState } from 'react';
import config from '../config';
import Card from './Card'; 
import NavigationButtons from './NavigationButtons';
import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
  },
};

const Prompting = () => {
  const prevPage = { path: config.routes.createGPT, name: "Edellinen sivu" }

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedRule, setSelectedRule] = useState(null);

  const rules = [
    // Existing rules...
    { id: 1, title: "Selkeät Ohjeet", description: "Tarkkojen ja yksityiskohtaisten ohjeiden käyttö vähentää mallin arvailua ja parantaa vastausten tarkkuutta.",  expandedContent: (
      <>
        <p>Lisätietoa ja esimerkki aiheesta:</p>
        <ul>
          <li>Esimerkki 1: Kysy ChatGPT:ltä, miten voit parantaa koodisi laatua.</li>
          <li>Esimerkki 2: Pyydä ChatGPT:tä selittämään, mitä tarkoittaa "state" Reactissa.</li>
        </ul>
      </>
    )
  },
  // Lisää sääntöjä... },
    { Id: 2, title: "Lähteiden Käyttö", description: "Lähdetekstien sisällyttäminen kyselyihin parantaa vastausten paikkansapitävyyttä ja tarkkuutta." },
    { id: 3, title: "Osittaminen", description: "Monimutkaisten tehtävien jakaminen pienempiin osiin auttaa mallia pysymään johdonmukaisena ja vähentää virheitä." },
    { id: 4, title: "Aika", description: "Ohjeista mallia käyttämään enemmän aikaa ja laskentatehoa ongelman ratkaisemiseen." },
    { id: 5, title: "Ulkoiset Työkalut", description: "Ulkoisten työkalujen hyödyntäminen laajentaa mallien tiedonkäsittelykykyä." },
    { id: 6, title: "Testaaminen", description: "Promptien testaaminen ja arviointi auttaa tunnistamaan, mitkä kehotteet toimivat parhaiten." },
    { id: 7, title: "Opiskelun Tuki", description: "Hyödynnä ChatGPT:tä opiskelun tukena, kuten henkilökohtaisena opinto-ohjaajana, reaaliaikaisena palautteenantajana, ja tiedonlähteenä." },
    { id: 8, title: "Ohjelmoinnin Tuki", description: "Käytä ChatGPT:tä ohjelmoinnin opastamisessa, koodin luonnissa, selittämisessä, korjaamisessa ja optimoinnissa." },
    { id: 9, title: "Iteratiivinen Kehitys", description: "Promptauksen jatkuva parantaminen ja tarkentaminen syventää ymmärrystä mallin mahdollisuuksista." },
    { id: 10, title: "Kriittinen Ajattelu", description: "Kehitä kriittisen ajattelun taitoja, arvioimalla ChatGPT:n antamien vastausten paikkansapitävyyttä." },
    { id: 11, title: "Vuorovaikutuksen Syventäminen", description: "Syvennä vuorovaikutusta ChatGPT:n kanssa, tarjoamalla lisää kontekstia ja tarkempia ohjeita." },
    { id: 12, title: "Tiedostojen Hyödyntäminen", description: "Syötä ChatGPT:lle tiedostoja suoraan liitteinä parantaaksesi vuorovaikutuksen tehokkuutta ja tarkkuutta." }
  ];

  
  const openModal = (rule) => {
    setSelectedRule(rule);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h1>Tehokkaan kommunikoinnin salat</h1>
      <div className="rules-container">
        {rules.map((rule) => (
          <Card 
            key={rule.id} 
            title={rule.title} 
            text={rule.description} 
            onClick={() => openModal(rule)}
          />
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Rule Details"
      >
        <h2>{selectedRule?.title}</h2>
        <p>{selectedRule?.description}</p>
        {selectedRule?.expandedContent}
        <button onClick={closeModal}>Sulje</button>
      </Modal>
      <NavigationButtons prevPage={prevPage} />
    </div>
  );
};

export default Prompting;