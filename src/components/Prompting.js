import React, { useState } from 'react';
import config from '../config';
import Card from './Card'; 
import NavigationButtons from './NavigationButtons';
import Modal from 'react-modal';
import state from '../assets/state.jpg';
import state2 from '../assets/state2.jpg';
import osittaminen from '../assets/osittaminen.jpg';
import { renderTextWithLineBreaks } from '../utils';

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
    { id: 1, title: "Selkeät ohjeet", description: "Tarkkojen ja yksityiskohtaisten ohjeiden käyttö vähentää mallin arvailua ja parantaa vastausten tarkkuutta.",  expandedContent: (
      <>
       {renderTextWithLineBreaks("Se ei kuitenkaan tarkoita, että kehotteiden pitäisi olla mahdollisimman lyhyitä. Ennemminkin ohjeistuksella tarkoitetaan \n sitä, että mallille tulisi antaa enemmän kontekstia selkeästi ilmaistuna, kuten alla olevissa esimerkeissä on tehty.")} 
        <ul>
          <li>Esimerkki 1: Kysy ChatGPT:ltä, miten voit parantaa koodisi laatua näin "Katso antamani koodi laadun näkökulmasta kriittisesti ja anna parannusehdotukset"</li>
          <li>Esimerkki 2: Pyydä ChatGPT:tä selittämään, mitä tarkoittaa "state" Reactissa "Selitä kuin olisin aloitteleva ohjelmoija, mitä 'state' tarkoittaa Reactissa"</li>
        </ul>
        <img src={state} alt="State"  />
      </>
    )
  }, { id: 2, title: "Lähteiden käyttö", description: "Lähdetekstien sisällyttäminen kyselyihin parantaa vastausten paikkansapitävyyttä ja tarkkuutta.",  expandedContent: (
    <>
     {renderTextWithLineBreaks("Niiden käytön ansiosta mallille saadaan tuotua enemmän kontekstia. \n Erottimien käyttö on hyödyllistä erottamaan lähteiden teksti omasta kehotteesta, jotta malli ymmärtää varmasti kehotteen tarkoituksen.")} 
      <ul>
        <li>Esimerkki 1: """Käytä tällaisia kolmenkertaisia lainausmerkkejä erottamaan lähteen omasta kehotteestasi"""</li>
      </ul>
      <img src={state2} alt="State"  />
    </>
  )
},{ id: 3, title: "Osittaminen", description: "Monimutkaisten tehtävien jakaminen pienempiin osiin auttaa mallia pysymään johdonmukaisena ja vähentää virheitä.",  expandedContent: (
  <>
   {renderTextWithLineBreaks("Osittaminen auttaa mallia keskittymään haluamaasi aiheeseen vaadittavalla tarkkuudella. Jos annat liian laajan aihealueen, saat todennäköisesti myös liian laajoja vastauksia.\n Voit tosin aloittaa uuden asian oppimisen kysymällä ensin laajemmin 'Mitä perusasioita minun tulisi tietää React-sovellusten kehittämisestä?'. \nTämä auttaa sinua saamaan yleiskäsityksen Reactin keskeisistä konsepteista, kuten JSX, komponentit, propsit ja tilanhallinta. \nYleiskäsityksen jälkeen voit yksityiskohtaistaa eli osittaa kysymyksiäsi\n Näin lähestyt Reactin oppimista rakenteellisesti, aloittaen suurista linjoista ja siirtyen asteittain yhä yksityiskohtaisempiin aiheisiin.")} 
    <ul>
      <li>Esimerkki 1: "Miten luon toiminnallisia komponentteja käyttäen Hookseja?" </li>
    </ul>
    <img src={osittaminen} alt="State"  />
  </>
)
},

    { id: 4, title: "Aika", description: "Ohjeista mallia käyttämään enemmän aikaa ja laskentatehoa ongelman ratkaisemiseen." },
    { id: 5, title: "Ulkoiset työkalut", description: "Ulkoisten työkalujen hyödyntäminen laajentaa mallien tiedonkäsittelykykyä." },
    { id: 6, title: "Testaaminen", description: "Promptien testaaminen ja arviointi auttaa tunnistamaan, mitkä kehotteet toimivat parhaiten." },
    { id: 7, title: "Opiskelun tuki", description: "Hyödynnä ChatGPT:tä opiskelun tukena, kuten henkilökohtaisena opinto-ohjaajana, reaaliaikaisena palautteenantajana, ja tiedonlähteenä." },
    { id: 8, title: "Ohjelmoinnin tuki", description: "Käytä ChatGPT:tä ohjelmoinnin opastamisessa, koodin luonnissa, selittämisessä, korjaamisessa ja optimoinnissa." },
    { id: 9, title: "Iteratiivinen kehitys", description: "Promptauksen jatkuva parantaminen ja tarkentaminen syventää ymmärrystä mallin mahdollisuuksista." },
    { id: 10, title: "Kriittinen ajattelu", description: "Kehitä kriittisen ajattelun taitoja, arvioimalla ChatGPT:n antamien vastausten paikkansapitävyyttä." },
    { id: 11, title: "Vuorovaikutuksen syventäminen", description: "Syvennä vuorovaikutusta ChatGPT:n kanssa, tarjoamalla lisää kontekstia ja tarkempia ohjeita." },
    { id: 12, title: "Tiedostojen hyödyntäminen", description: "Syötä ChatGPT:lle tiedostoja suoraan liitteinä parantaaksesi vuorovaikutuksen tehokkuutta ja tarkkuutta." }
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
      <h2>Tehokas kommunikointi</h2>
      <p>Tehokas kommunikointi koostuu useista eri osa-alueista. Tutustu aiheiseen tarkemmin klikkaamalla kuvat auki</p>
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