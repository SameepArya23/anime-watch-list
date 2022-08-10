import { useContext } from "react";
import { AnimeListContext } from "../../contexts/anime-list.context";
import "./container.styles.css";
import Card from "../card/card.component";

const HomeCardsContainer = () => {
  const { animeList } = useContext(AnimeListContext);
  return (
    <div className="cards-container">
      {animeList.map((anime) => {
        const { title, image_url, mal_id } = anime;
        return (
          <Card
            title={title}
            imageUrl={image_url}
            key={mal_id}
            mal_id={mal_id}
          />
        );
      })}
    </div>
  );
};

export default HomeCardsContainer;
