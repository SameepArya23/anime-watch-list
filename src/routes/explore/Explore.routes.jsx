import { Fragment, useContext } from "react";
import ExploreCardsContainer from "../../components/containers/explore-card-containers.component";
import { NewAnimeListContext } from "../../contexts/new-anime-list.context";
import "./explore.styles.css";

const Explore = () => {
  const { searchHandler } = useContext(NewAnimeListContext);

  return (
    <Fragment>
      <div className="explore-page-container">
        <div className="heading-container">
          <h3 className="heading">POPULAR ANIME</h3>
          <form action="submit" onSubmit={searchHandler}>
            <input
              type="search"
              placeholder="search your favorite anime"
              className="search-bar"
              onChange={searchHandler}
            />
          </form>
        </div>
        <ExploreCardsContainer />
      </div>
    </Fragment>
  );
};

export default Explore;
