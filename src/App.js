import Navigation from "./routes/navigation/navigation.routes";
import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.routes";
import Explore from "./routes/explore/Explore.routes";
import Home from "./routes/home/home.routes";
import MyAnimeList from "./routes/my-anime-list/anime-watch-list.routes";
import CardInfo from "./routes/card-info/card-info.routes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="my-anime-list" element={<MyAnimeList />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="anime-info" element={<CardInfo />} />
      </Route>
    </Routes>
  );
};

export default App;
