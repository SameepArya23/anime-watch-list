import "./added-list.styles.css";
import Button from "../../components/buttons/button.component";
import { useContext } from "react";
import { AddAnimeContext } from "../../contexts/add-anime-list.context";

const AddedList = () => {
  const { addList, onDeleteHandler } = useContext(AddAnimeContext);
  return (
    <div className="watch-lists-container">
      {addList.length < 1 ? (
        <span className="empty-message">Your list is empty!</span>
      ) : (
        ""
      )}
      {addList.map((list, index) => {
        const {
          title,
          title_english,
          title_japanese,
          mal_id,
          image_url,
          score,
        } = list;
        return (
          <div key={mal_id} className="watch-list-container">
            <div className="list-info-container">
              <img
                className="watch-list-image"
                src={image_url}
                alt="anime poster"
              />
              <div className="watch-list-info-container">
                <span className="main-title">{title}</span>
                <span className="secondary-title">{title_english}</span>
                <span className="watch-list-info">{title_japanese}</span>
                <span className="watch-list-info">Score: &#11088;{score}</span>
              </div>
              <Button
                buttonType={"deleteBtn"}
                onClick={() => onDeleteHandler(index)}
              >
                Delete
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AddedList;
