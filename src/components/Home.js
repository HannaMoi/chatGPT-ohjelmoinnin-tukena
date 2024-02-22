import profileImage from '../assets/profile.jpg'
import NavigationButtons from './NavigationButtons';
import config from '../config';
import texts from '../texts.json';
import Card from './Card';
import { renderTextWithLineBreaks } from '../utils';
import TipSection from './TipSection';

const Home = () => {

    const prevPage = null; // Ei edellistä sivua Home-sivulla
    const nextPage = { path: config.routes.createGPT, name: "Seuraava sivu" };
    const homeTexts = texts.home;
    const cards = homeTexts.cards;
    const tip = texts.tip["text-section"];
 
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
      <TipSection header={tip.header} text={tip.text} solutionText={tip.solutionText} />
        </div>
        <div className="navigation-buttons">
          <NavigationButtons prevPage={prevPage} nextPage={nextPage} />
        </div>
      </div>
    );
};

export default Home;
