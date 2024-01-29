import React from 'react';
import profileImage from '../assets/profile.jpg'
import NavigationButtons from './NavigationButtons';
import config from '../config';

const Home = () => {
    const prevPage = null; // Ei edellistä sivua Home-sivulla
    const nextPage = { path: config.routes.createGPT, name: "Seuraava Sivu" };
    console.log(nextPage)

    return (
        <div className="home-section">
          <div className="profile-info">
            <img src={profileImage} alt="Profiilikuva" className="profile-image" />
            <div className="profile-text">
              <strong>Hanna Moisala</strong><br />
              Julkaistu: 28.1.2024
            </div>
            </div>
    <div className="home-section">
    
      <h1>Tehokas kommunikointi ChatGPT:n kanssa</h1>
      <p>
        ChatGPT on avannut uuden aikakauden niin työelämässä, koulussa kuin normaalissa arjessa. Sen kyky ymmärtää ja tuottaa 
        yksityiskohtaista sisältöä antaa ainutlaatuisen mahdollisuuden 
        syventää oppimista ja rikastuttaa tutkimustyötä. Tule tutustumaan, miten voit 
        ottaa kaiken hyödyn irti tästä monipuolisesta tekoälytyökalusta!
        
      </p>
    </div>
    <div className="navigation-buttons">
    <NavigationButtons prevPage={prevPage} nextPage={nextPage} />
      </div>
    </div>
  );
};

export default Home;