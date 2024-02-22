const Card = ({ title, text, backgroundImage, isExpanded, expandedContent, onClick }) => {
  return (
      <div className="card" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + backgroundImage})` }} onClick={onClick}>
          <div className="card-content">
              <h2>{title}</h2>
              <p>{text}</p>
              {isExpanded && <div className="expanded-content">{expandedContent}</div>}
          </div>
      </div>
  );
};

export default Card;