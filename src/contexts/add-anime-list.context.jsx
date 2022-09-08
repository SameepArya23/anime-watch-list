import { createContext, useState } from "react";
import { AnimeIdContext } from "./anime-info.context";
import { useContext } from "react";
import { reload } from "firebase/auth";

export const AddAnimeContext = createContext({
  addList: [],
  setAddList: () => {},
  onAddList: () => {},
  onDeleteHandler: () => {},
  get_storage_data: [],
});

export const AddAnimeProvider = ({ children }) => {
  const { animeInfo } = useContext(AnimeIdContext);
  const [addList, setAddList] = useState([]);
  const [render, setRender] = useState(false);

  const get_storage_data = JSON.parse(localStorage.getItem("watch-list"));

  const onAddList = () => {
    const sameId = get_storage_data.find((list) => {
      return list.mal_id === animeInfo.mal_id;
    });
    if (!sameId) {
      setAddList([...addList, animeInfo]);
      localStorage.setItem(
        "watch-list",
        JSON.stringify(
          get_storage_data ? [...get_storage_data, animeInfo] : [animeInfo]
        )
      );
    } else return alert("This anime already exists in your list!");
  };

  const onDeleteHandler = (index) => {
    const updateList = get_storage_data.filter((list, id) => {
      return id !== index;
    });
    localStorage.setItem("watch-list", JSON.stringify(updateList));
    setRender(!render);
  };

  const value = {
    addList,
    setAddList,
    onAddList,
    onDeleteHandler,
    get_storage_data,
  };
  return (
    <AddAnimeContext.Provider value={value}>
      {children}
    </AddAnimeContext.Provider>
  );
};
