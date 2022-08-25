import { Fragment, useContext } from "react";
import Button from "../../components/buttons/button.component";
import ExploreCardsContainer from "../../components/containers/explore-card-containers.component";
import { NewAnimeListContext } from "../../contexts/new-anime-list.context";
import "./explore.styles.css";

const Explore = () => {
  const { searchHandler } = useContext(NewAnimeListContext);

  return (
    <Fragment>
      <div className="explore-page-container">
        <div className="explore-heading-container">
          <form action="submit" onSubmit={searchHandler} className="form">
            <input
              type="search"
              placeholder="search your favorite anime"
              className="search-bar"
            />
            <Button type="submit" buttonType={"searchBtn"}>
              search
            </Button>
          </form>
        </div>
        <ExploreCardsContainer />
      </div>
    </Fragment>
  );
};

export default Explore;
