import { Fragment, useContext } from "react";
import { AnimeListContext } from "../../contexts/anime-list.context";
import "./container.styles.css";
import Card from "../card/card.component";
import { NewAnimeListContext } from "../../contexts/new-anime-list.context";

const ExploreCardsContainer = () => {
  const { newAnimeList, searchString } = useContext(NewAnimeListContext);
  const { animeList } = useContext(AnimeListContext);
  return (
    <Fragment>
      <div className="ex-card-container">
        {(!searchString ? animeList : newAnimeList).map((anime) => {
          const { title, images, mal_id } = anime;
          return (
            <Card
              title={title}
              imageUrl={images.jpg.image_url}
              key={mal_id}
              mal_id={mal_id}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default ExploreCardsContainer;
