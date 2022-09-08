import { createContext, useState, useEffect } from "react";

let PAGE_NUMBER = 1;

export const AnimeListContext = createContext({
  animeList: [],
  setAnimeList: () => {},
  pageForward: PAGE_NUMBER,
  pageForwardHandler: () => {},
  pageBackwardHandler: () => {},
  isLoading: true,
});

export const AnimeListProvider = ({ children }) => {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageForward, setPageForward] = useState(PAGE_NUMBER);

  useEffect(() => {
    if (animeList) {
      setIsLoading(false);
    }
  }, [animeList]);

  const pageForwardHandler = () => setPageForward(pageForward + 1);
  const pageBackwardHandler = () => {
    if (pageForward > 1) setPageForward(pageForward - 1);
  };

  const api = `https://api.jikan.moe/v3/top/anime/${pageForward}`;
  const topAnimeList = async () => {
    const topAnime = await fetch(api).then((response) => response.json());
    setAnimeList(topAnime.top);
    console.log("fetching anime on load");
  };

  useEffect(() => {
    topAnimeList();
  }, [pageForward]);

  const value = {
    animeList,
    setAnimeList,
    pageForward,
    pageForwardHandler,
    pageBackwardHandler,
    isLoading,
  };

  return (
    <AnimeListContext.Provider value={value}>
      {children}
    </AnimeListContext.Provider>
  );
};
