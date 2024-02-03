import React, { useState } from 'react';
import profileImage from '../assets/profile.jpg'
import NavigationButtons from './NavigationButtons';
import config from '../config';
import texts from '../texts.json';
import Card from './Card';


const Home = () => {


    const prevPage = null; // Ei edellistä sivua Home-sivulla
    const nextPage = { path: config.routes.createGPT, name: "Seuraava Sivu" };
    const homeTexts = texts.home;
    const [isClicked, setIsClicked] = useState(false);

    const renderTextWithLineBreaks = (text) => {
      return text.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
      ));
  };
  const cards = homeTexts.cards;
  const bodytext = texts.body["text-section"];
  const IdeaIcon = () => (
    <img src="/icons8-light-on-16.png" alt="Idea Icon" className="idea-icon" />
  );

  const handleOnClick = () => {
    setIsClicked(!isClicked);
  }

    return (
      <div>
        <div className="home-section">
          <div className="profile-info">
            <img src={profileImage} alt="Profiilikuva" className="profile-image" />
            <div className="profile-text">
              <strong>Hanna Moisala</strong><br />
              Julkaistu: 28.1.2024
            </div>
          </div>

            <div className="intro-section">
              <h1>{homeTexts.header}</h1>
              {renderTextWithLineBreaks(homeTexts.text1)}
            </div>
            
            <div className="cards-container">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} text={card.text} backgroundImage={card.backgroundImage} />
        ))}
      </div>

            <div className="text-section">
              <h2>{bodytext.header} <IdeaIcon /></h2>   
              <p>{renderTextWithLineBreaks(bodytext.text)}</p>
              <button onClick={handleOnClick}>Ratkaisu</button>

              {isClicked ? renderTextWithLineBreaks(bodytext.text2)  : null}
         
          </div>
        </div>

        <div className="navigation-buttons">
          <NavigationButtons prevPage={prevPage} nextPage={nextPage} />
        </div>
      </div>
    );
};

export default Home;
