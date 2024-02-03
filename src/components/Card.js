const Card = ({ title, text, backgroundImage }) => {
    return (
      <div className="card" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + backgroundImage})` }}>
        <div className="card-content">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    );
};


export default Card;