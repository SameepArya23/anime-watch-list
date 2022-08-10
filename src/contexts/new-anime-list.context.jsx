import { createContext, useState, useEffect } from "react";

export const NewAnimeListContext = createContext({
  searchHandler: () => {},
  newAnimeList: [],
  searchString: "",
});

export const NewAnimeListProvider = ({ children }) => {
  const [searchString, setSearchString] = useState("");
  const [newAnimeList, setNewAnimeList] = useState([]);

  const fetchSearchedAnime = async () => {
    const search_api = `https://api.jikan.moe/v3/search/anime?q=${searchString}&page=1`;
    const fetchedData = await fetch(search_api).then((res) => res.json());
    setNewAnimeList(fetchedData.results);
  };

  const searchHandler = (event) => {
    event.preventDefault();
    setInterval(() => {
      setSearchString(event.target.value);
    }, 1000);
  };

  useEffect(() => {
    if (searchString === "") return;
    fetchSearchedAnime();
  }, [searchString]);

  const value = {
    searchHandler,
    newAnimeList,
    searchString,
  };

  return (
    <NewAnimeListContext.Provider value={value}>
      {children}
    </NewAnimeListContext.Provider>
  );
};
