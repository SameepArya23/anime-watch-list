import { useContext } from "react";
import { AnimeListContext } from "../../contexts/anime-list.context";
import "./pagination.styles.css";
const Pagination = () => {
  const { pageForward, pageForwardHandler, pageBackwardHandler } =
    useContext(AnimeListContext);
  return (
    <div className="pagination-container">
      <span className="arrow" onClick={pageBackwardHandler}>
        &#10094;
      </span>
      <span className="page-no">Page No: {pageForward}</span>
      <span className="arrow" onClick={pageForwardHandler}>
        &#10095;
      </span>
    </div>
  );
};

export default Pagination;
