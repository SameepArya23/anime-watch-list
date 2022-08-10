import { Fragment, useContext } from "react";
import AnimeInfo from "../../components/anime-info/anime-info.component";
import { AnimeIdContext } from "../../contexts/anime-info.context";
import Loader from "../../components/loader/loader.component";

const CardInfo = () => {
  const { animeInfo } = useContext(AnimeIdContext);
  return (
    <Fragment>
      {animeInfo === undefined ? (
        <Loader />
      ) : (
        <AnimeInfo anime_info={animeInfo} />
      )}
    </Fragment>
  );
};

export default CardInfo;
