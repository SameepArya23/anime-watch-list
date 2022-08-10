import { createContext, useState, useEffect } from "react";

export const AnimeIdContext = createContext({
  animeInfo: [],
  animeId: null,
  setAnimeId: () => {},
});

export const AnimeIdProvider = ({ children }) => {
  const [animeInfo, setAnimeInfo] = useState([]);
  const [animeId, setAnimeId] = useState(null);

  const more_info_api = `https://api.jikan.moe/v3/anime/${animeId}`;
  const anime_info = async () => {
    const info = await fetch(more_info_api).then((response) => response.json());
    setAnimeInfo(info);
  };

  useEffect(() => {
    if (animeId === null || undefined) return;
    anime_info();
  }, [animeId]);

  const value = {
    animeInfo,
    animeId,
    setAnimeId,
  };

  return (
    <AnimeIdContext.Provider value={value}>{children}</AnimeIdContext.Provider>
  );
};
