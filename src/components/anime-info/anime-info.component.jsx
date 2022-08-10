import { Fragment, useContext, useEffect, useState } from "react";
import "./anime-info.styles.css";
import { ReactComponent as ArrowButton } from "../../assets/down-arrow.svg";
import Button from "../buttons/button.component";
import { AddAnimeContext } from "../../contexts/add-anime-list.context";

const AnimeInfo = ({ anime_info }) => {
  const { onAddList } = useContext(AddAnimeContext);
  const [isOpen, setIsOpen] = useState(false);

  const openInfoHandler = () => setIsOpen(!isOpen);
  const {
    image_url,
    title,
    title_english,
    title_japanese,
    synopsis,
    score,
    episodes,
    status,
    aired,
    popularity,
    rating,
    duration,
    source,
    studios,
    genres,
  } = anime_info;
  return (
    <Fragment>
      <div className="card-info-container">
        <div className="banner-container">
          <img className="anime-banner" src={image_url} />
        </div>
        <div className="info-title-container">
          <div className="anime-info-container">
            <img className="info-image" src={image_url} />
            <span className="info-title-1">{title}</span>
            <span className="info-title-2">{title_english}</span>
            <span className="info-title-2">{title_japanese}</span>
            <div className={`info-container ${isOpen && "on-open"}`}>
              <span className="divider"></span>
              <span className="info">Score: &#11088;{score}</span>
              <span className="info">Episodes: {episodes}</span>
              <span className="info">Status: {status}</span>
              <span className="info">
                Aired: {aired ? aired.string : "loading..."}
              </span>
              <span className="info">Popularity: {popularity}</span>
              <span className="info">Rating: {rating}</span>
              <span className="info">Duration: {duration}</span>
              <span className="info">Source: {source}</span>
              <span className="info">
                Studios: {studios ? studios[0].name : "loading..."}
              </span>
            </div>
            <ArrowButton
              className={`drop-info-btn ${isOpen ? "active-btn" : ""}`}
              onClick={openInfoHandler}
            />
          </div>
          <div className="title-container">
            <div className="title-button-container">
              <h1 className="main-card-title">{title}</h1>
              <Button buttonType="addToList" onClick={onAddList}>
                + Add to list
              </Button>
            </div>
            <span className="genre">
              Genres:
              {genres
                ? genres.map((genre) => {
                    return <span key={genre.mal_id}> {genre.name + ", "}</span>;
                  })
                : " loading..."}
            </span>
            <span className="synopsis">{synopsis}</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AnimeInfo;
