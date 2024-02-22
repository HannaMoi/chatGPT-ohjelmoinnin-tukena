import React, { useState } from 'react';
import { renderTextWithLineBreaks } from '../utils';

const TipSection = ({ header, text, solutionText }) => {
    const IdeaIcon = () => (
        <img src="/icons8-light-on-16.png" alt="Idea Icon" className="idea-icon" />
      );

    const [isClicked, setIsClicked] = useState(false);
    const handleOnClick = () => {
        setIsClicked(!isClicked);
      }

      return (
        <div className="tip-section">
          <h2>{header} <IdeaIcon /></h2>
          {renderTextWithLineBreaks(text)}
          <button onClick={handleOnClick}>Ratkaisu</button>
          {isClicked && renderTextWithLineBreaks(solutionText)}
        </div>
      );
    };
    

export default TipSection;