import { createContext, useState, useEffect } from "react";

export const AnimeIdContext = createContext({
  animeInfo: [],
  animeId: null,
  setAnimeId: () => {},
});

export const AnimeIdProvider = ({ children }) => {
  const [animeInfo, setAnimeInfo] = useState([]);
  const [animeId, setAnimeId] = useState(null);

  if (animeId !== null) {
    localStorage.setItem("mal_id", JSON.stringify(animeId));
  }

  const get_mal_id = JSON.parse(localStorage.getItem("mal_id"));
  const anime_info = async () => {
    const more_info_api = `https://api.jikan.moe/v4/anime/${get_mal_id}`;
    const info = await fetch(more_info_api).then((response) => response.json());
    setAnimeInfo(info.data);
  };

  useEffect(() => {
    if (get_mal_id === null || undefined) return;
    anime_info();
  }, [get_mal_id]);

  const value = {
    animeInfo,
    animeId,
    setAnimeId,
  };

  return (
    <AnimeIdContext.Provider value={value}>{children}</AnimeIdContext.Provider>
  );
};
