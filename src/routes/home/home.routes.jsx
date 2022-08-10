import { Fragment } from "react";
import HomeCardsContainer from "../../components/containers/home-cards-container.components";
import Pagination from "../../components/pagination/pagination.component";
import "./home.styles.css";

const Home = () => {
  return (
    <Fragment>
      <div className="heading-container">
        <h3 className="heading">POPULAR ANIME</h3>
        <Pagination />
      </div>
      <HomeCardsContainer />
    </Fragment>
  );
};

export default Home;
