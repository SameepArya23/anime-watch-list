import "./info-card.styles.css";

const InfoCard = ({ title }) => {
  return (
    <div className="info-card-container">
      <span className="info">name: {title}</span>
      <span className="info">score: 7.43</span>
      <span className="info">rank: 1</span>
      <span className="info">rating: PG-13</span>
      <span className="info">aired: 2 jun 2002 to 22 aug 2009</span>
    </div>
  );
};

export default InfoCard;
