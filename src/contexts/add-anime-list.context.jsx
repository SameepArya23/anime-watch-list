import { createContext, useState } from "react";
import { AnimeIdContext } from "./anime-info.context";
import { useContext } from "react";

export const AddAnimeContext = createContext({
  addList: [],
  setAddList: () => {},
  onAddList: () => {},
  onDeleteHandler: () => {},
});

export const AddAnimeProvider = ({ children }) => {
  const { animeInfo } = useContext(AnimeIdContext);
  const [addList, setAddList] = useState([]);

  const onAddList = () => {
    const sameId = addList.find((list) => {
      return list.mal_id === animeInfo.mal_id;
    });
    if (!sameId) {
      setAddList([...addList, animeInfo]);
    } else return alert("This anime already exists in your list!");
    // console.log(addList);
  };

  const onDeleteHandler = (index) => {
    const updateList = addList.filter((list, id) => {
      return id !== index;
    });
    setAddList(updateList);
  };

  const value = {
    addList,
    setAddList,
    onAddList,
    onDeleteHandler,
  };
  return (
    <AddAnimeContext.Provider value={value}>
      {children}
    </AddAnimeContext.Provider>
  );
};
