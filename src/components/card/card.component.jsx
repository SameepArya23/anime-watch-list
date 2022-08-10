import { Fragment, useContext } from "react";
import "./card.styles.css";
import { useNavigate } from "react-router-dom";
import { AnimeIdContext } from "../../contexts/anime-info.context";

const Card = ({ title, imageUrl, mal_id }) => {
  const { setAnimeId } = useContext(AnimeIdContext);

  const navigate = useNavigate();
  const onNavigateHandler = () => {
    navigate("/anime-info");
    setAnimeId(mal_id);
  };
  return (
    <Fragment>
      <div className="card-container" onClick={onNavigateHandler}>
        <img src={imageUrl} alt="anime-poster" className="img" />
        <span className="title">{title}</span>
      </div>
    </Fragment>
  );
};

export default Card;
